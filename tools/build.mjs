#!/usr/bin/env node
// Compile content/ → docs/data/content.js (+ docs/data/viz.js). Usage: node tools/build.mjs [--strict]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = path.join(ROOT, 'content');
const OUT_DIR = path.join(ROOT, 'docs', 'data');
const strict = process.argv.includes('--strict');
const withExamples = process.argv.includes('--with-examples');
const checkIdx = process.argv.indexOf('--check');
const checkOnly = checkIdx >= 0 ? path.resolve(process.argv[checkIdx + 1] || '') : null; // valide seulement ce sous-arbre, n'écrit rien
const errors = [], warnings = [];
const err = (f, m) => errors.push(`${path.relative(ROOT, f)}: ${m}`);
const warn = (f, m) => warnings.push(`${path.relative(ROOT, f)}: ${m}`);

// ---------- helpers ----------
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const SECTION_KEYS = {
  'intuition': 'intuition', 'enonce': 'enonce', 'hypotheses': 'hypotheses', 'idee de la preuve': 'idee',
  'preuve': 'preuve', 'preuve a trous': 'trous', 'exemples': 'exemples', 'pieges': 'pieges',
  'indices': 'indices', 'corrige': 'corrige', 'pieges et variantes': 'variantes',
  'situation': 'situation', 'options': 'options', 'demarche': 'demarche', 'mini exemple': 'exemple',
  'exemple': 'exemple', 'remarques': 'remarques', 'variantes': 'variantes', 'pieges variantes': 'variantes',
};
function walk(dir, pred) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name.startsWith('_') && !withExamples) continue; out.push(...walk(p, pred)); } else if (pred(p)) out.push(p);
  }
  return out.sort();
}
function parseValue(v) {
  v = v.trim();
  if (v === '') return '';
  if (/^\[.*\]$/.test(v)) return v.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean).map(coerce);
  return coerce(v.replace(/^["']|["']$/g, ''));
}
function coerce(v) {
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  if (v === 'true') return true; if (v === 'false') return false;
  return v;
}
function parseFrontmatter(src, file) {
  const m = src.match(/^﻿?---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!m) { err(file, 'frontmatter manquant (bloc --- ... --- en tête)'); return { meta: {}, body: src }; }
  const meta = {};
  for (const line of m[1].split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const mm = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    if (!mm) { warn(file, `ligne de frontmatter ignorée : ${line}`); continue; }
    meta[mm[1]] = parseValue(mm[2].replace(/\s+#.*$/, ''));
  }
  return { meta, body: src.slice(m[0].length) };
}
function splitSections(body, file) {
  // returns ordered [{key, title, content}] on '## ' headings (not inside code fences)
  const lines = body.split('\n');
  const secs = []; let cur = null; let fence = false; let pre = [];
  for (const line of lines) {
    if (/^```/.test(line)) fence = !fence;
    const h = !fence && line.match(/^##\s+(.+?)\s*$/);
    if (h) { cur = { title: h[1], key: SECTION_KEYS[norm(h[1])] || norm(h[1]), lines: [] }; secs.push(cur); }
    else if (cur) cur.lines.push(line); else pre.push(line);
  }
  if (pre.join('').trim()) warn(file, 'texte avant la première section "## ..." (ignoré à l\'affichage)');
  return secs.map(s => ({ key: s.key, title: s.title, content: s.lines.join('\n').trim() }));
}
function splitSub(content) {
  // split on '### ' headings → [{title, body}], text before first ### goes to intro
  const lines = content.split('\n'); const subs = []; let cur = null; const intro = []; let fence = false;
  for (const line of lines) {
    if (/^```/.test(line)) fence = !fence;
    const h = !fence && line.match(/^###\s+(.+?)\s*$/);
    if (h) { cur = { title: h[1], lines: [] }; subs.push(cur); } else if (cur) cur.lines.push(line); else intro.push(line);
  }
  return { intro: intro.join('\n').trim(), subs: subs.map(s => ({ title: s.title, body: s.lines.join('\n').trim() })) };
}
const idRe = /^[a-z0-9]+(-[a-z0-9]+)*$/;
function checkLatex(text, file) {
  // crude checks for common failures
  const stripped = text.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]+`/g, '');
  const dd = (stripped.match(/\$\$/g) || []).length;
  if (dd % 2) err(file, 'nombre impair de "$$"');
  const single = stripped.replace(/\$\$[\s\S]*?\$\$/g, '').replace(/\\\$/g, '');
  const sd = (single.match(/\$/g) || []).length;
  if (sd % 2) err(file, 'nombre impair de "$" (math en ligne non fermée)');
  for (const bad of ['\\[', '\\begin{equation}', '\\begin{align}', '\\begin{align*}', '\\label{', '\\newcommand', '\\(']) {
    if (stripped.includes(bad)) err(file, `interdit : ${bad}`);
  }
  const trouOpen = (stripped.match(/<trou\b/g) || []).length, trouClose = (stripped.match(/<\/trou>/g) || []).length;
  if (trouOpen !== trouClose) err(file, `balises <trou> déséquilibrées (${trouOpen} ouvrantes, ${trouClose} fermantes)`);
}

// ---------- load map ----------
const mapFile = path.join(CONTENT, 'map', 'map.json');
let map = { chapters: [], results: [] };
if (fs.existsSync(mapFile)) { try { map = JSON.parse(fs.readFileSync(mapFile, 'utf8')); } catch (e) { err(mapFile, 'JSON invalide : ' + e.message); } }
else warn(mapFile, 'carte absente (content/map/map.json)');
const resultIds = new Set((map.results || []).map(r => r.id));
const notationsFile = path.join(CONTENT, 'map', 'notations.md');
const notations = fs.existsSync(notationsFile) ? fs.readFileSync(notationsFile, 'utf8') : '';
const calibFile = path.join(CONTENT, 'map', 'calibration.md');
const calibration = fs.existsSync(calibFile) ? fs.readFileSync(calibFile, 'utf8') : '';

// ---------- viz ----------
const inScope = p => !checkOnly || p.startsWith(checkOnly);
const vizFiles = walk(CONTENT, p => /[\\/]viz[\\/].*\.js$/.test(p) && inScope(p));
const vizIds = new Set(); const vizMeta = [];
let vizBundle = '// généré par tools/build.mjs — ne pas éditer\n';
for (const f of vizFiles) {
  const src = fs.readFileSync(f, 'utf8');
  const idm = src.match(/\bid\s*:\s*['"`]([a-z0-9-]+)['"`]/);
  if (!idm) { err(f, 'id introuvable (attendu id: \'viz-chNN-...\')'); continue; }
  const id = idm[1];
  if (!id.startsWith('viz-')) err(f, `id de visualisation doit commencer par viz- : ${id}`);
  if (vizIds.has(id)) err(f, `id de visualisation dupliqué : ${id}`);
  vizIds.add(id);
  const chm = src.match(/\bchapter\s*:\s*(\d+)/); const tm = src.match(/\btitle\s*:\s*(['"`])([\s\S]*?)\1/);
  vizMeta.push({ id, chapter: chm ? Number(chm[1]) : null, title: tm ? tm[2] : id, file: path.relative(ROOT, f) });
  if (!/FMA\.registerViz\s*\(/.test(src)) err(f, 'FMA.registerViz(...) absent');
  if (/^\s*(import|export)\s/m.test(src)) err(f, 'import/export interdits dans une visualisation');
  vizBundle += `\n// ---- ${path.relative(ROOT, f)} ----\ntry {\n${src}\n} catch (e) { console.error('viz ${id} failed to register', e); }\n`;
}

// ---------- fiches ----------
const theorems = {}, exercises = {}, reflexes = {}; const flashcards = []; const allIds = new Set();
function registerId(id, file) {
  if (!id) { err(file, 'id manquant'); return false; }
  if (!idRe.test(id)) err(file, `id invalide : ${id}`);
  if (allIds.has(id)) { err(file, `id dupliqué : ${id}`); return false; }
  allIds.add(id); return true;
}
const mdFiles = walk(CONTENT, p => p.endsWith('.md') && !/[\\/]map[\\/]/.test(p) && path.basename(p) !== 'FORMAT.md' && path.basename(p) !== 'README.md' && inScope(p));
const linkTargets = []; // [{file, id}] to verify at the end
function collectLinks(text, file) {
  for (const m of text.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) {
    const t = m[1].trim();
    if (t.startsWith('viz:')) linkTargets.push({ file, viz: t.slice(4) }); else linkTargets.push({ file, id: t });
  }
}
for (const f of mdFiles) {
  const src = fs.readFileSync(f, 'utf8');
  if (path.basename(f) === 'flashcards.md') { parseFlashcards(src, f); continue; }
  const { meta, body } = parseFrontmatter(src, f);
  if (!meta.type) { err(f, 'type manquant'); continue; }
  checkLatex(body, f); collectLinks(body, f);
  const secs = splitSections(body, f);
  const S = Object.fromEntries(secs.map(s => [s.key, s.content]));
  const need = (keys) => keys.forEach(k => { if (!(k in S)) err(f, `section manquante : ${k}`); });
  if (!registerId(meta.id, f)) continue;
  const rel = path.relative(ROOT, f);
  if (['theorem', 'proposition', 'lemma', 'corollary', 'definition'].includes(meta.type)) {
    if (!meta.id.startsWith('ch')) err(f, 'id de résultat doit commencer par chNN-');
    if (typeof meta.chapter !== 'number') err(f, 'chapter (nombre) manquant');
    if (!meta.title) err(f, 'title manquant');
    if (!meta.ref) warn(f, 'ref (numérotation du poly) manquante');
    if (meta.type === 'definition') need(['intuition', 'enonce', 'exemples', 'pieges']); else need(['intuition', 'enonce', 'hypotheses', 'idee', 'preuve', 'trous', 'exemples', 'pieges']);
    if (meta.type !== 'definition' && S.trous && !/<trou\b/.test(S.trous)) warn(f, 'la preuve à trous ne contient aucun <trou>');
    const hyp = S.hypotheses ? splitSub(S.hypotheses) : { intro: '', subs: [] };
    for (const d of (meta.depends || [])) linkTargets.push({ file: f, id: d });
    if (resultIds.size && !resultIds.has(meta.id)) warn(f, `id absent de la carte (map.json) : ${meta.id}`);
    theorems[meta.id] = { ...meta, file: rel, sections: S, order: secs.map(s => s.key), hypotheses: hyp };
  } else if (meta.type === 'exercise') {
    if (!meta.id.startsWith('ex-')) err(f, 'id d\'exercice doit commencer par ex-');
    if (!Array.isArray(meta.chapters)) { if (typeof meta.chapters === 'number') meta.chapters = [meta.chapters]; else err(f, 'chapters (liste) manquant'); }
    if (typeof meta.difficulty !== 'number') err(f, 'difficulty (1-4) manquante');
    if (typeof meta.time !== 'number') warn(f, 'time (minutes) manquant → 20'), meta.time = meta.time || 20;
    if (!meta.source) warn(f, 'source manquante');
    need(['enonce', 'indices', 'corrige']);
    const hints = S.indices ? splitSub(S.indices) : { intro: '', subs: [] };
    if (hints.subs.length < 1) warn(f, 'aucun "### Indice n" trouvé');
    for (const d of (meta.tools || [])) linkTargets.push({ file: f, id: d });
    exercises[meta.id] = { ...meta, file: rel, sections: S, hints: hints.subs, hintsIntro: hints.intro };
  } else if (meta.type === 'reflexe') {
    if (!meta.id.startsWith('rfx-')) err(f, 'id de réflexe doit commencer par rfx-');
    if (!meta.situation) err(f, 'situation manquante');
    need(['situation', 'options', 'demarche']);
    const opts = S.options ? splitSub(S.options) : { intro: '', subs: [] };
    const options = opts.subs.map(o => {
      const m = o.title.match(/^\[([ xX])\]\s*(.+)$/);
      if (!m) { err(f, `option sans case [x]/[ ] : ${o.title}`); return null; }
      const linkm = m[2].match(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/);
      return { correct: m[1].trim().toLowerCase() === 'x', title: m[2].replace(/\s*[—-]\s*\[\[[^\]]+\]\]\s*$/, '').trim(), ref: linkm ? linkm[1] : null, body: o.body };
    }).filter(Boolean);
    if (options.length < 2) err(f, 'moins de 2 options');
    if (!options.some(o => o.correct)) err(f, 'aucune option correcte [x]');
    reflexes[meta.id] = { ...meta, file: rel, sections: S, options, optionsIntro: opts.intro };
  } else err(f, `type inconnu : ${meta.type}`);
}
function parseFlashcards(src, f) {
  const chm = f.match(/[\\/]ch(\d\d)[\\/]/); const chapter = chm ? Number(chm[1]) : null;
  const blocks = src.split(/^(?=## CARD\b)/m).filter(b => b.startsWith('## CARD'));
  if (!blocks.length) warn(f, 'aucune carte "## CARD ..." trouvée');
  for (const b of blocks) {
    const head = b.split('\n')[0]; const attrs = {};
    for (const m of head.slice(7).matchAll(/(\w+)=("[^"]*"|\S+)/g)) attrs[m[1]] = m[2].replace(/^"|"$/g, '');
    const q = b.match(/^###\s*Q\s*\n([\s\S]*?)(?=^###\s*R\s*$)/m); const r = b.match(/^###\s*R\s*\n([\s\S]*)$/m);
    if (!attrs.id) { err(f, `carte sans id : ${head}`); continue; }
    if (!q || !r) { err(f, `carte ${attrs.id} : sections ### Q / ### R manquantes`); continue; }
    if (!registerId(attrs.id, f)) continue;
    checkLatex(b, f); collectLinks(b, f);
    if (attrs.ref && attrs.ref !== 'none') linkTargets.push({ file: f, id: attrs.ref });
    flashcards.push({ id: attrs.id, chapter, ref: attrs.ref && attrs.ref !== 'none' ? attrs.ref : null, tags: (attrs.tags || '').split(',').map(s => s.trim()).filter(Boolean), q: q[1].trim(), r: r[1].trim(), file: path.relative(ROOT, f) });
  }
}
// link verification
for (const l of linkTargets) {
  if (checkOnly && !l.viz) { if (!allIds.has(l.id) && !resultIds.has(l.id) && !/^(ch0[1-9]|ex-|rfx-|fc-)/.test(l.id)) warn(l.file, `lien vers un id inconnu : [[${l.id}]]`); continue; }
  if (checkOnly && l.viz) { if (!vizIds.has(l.viz) && !/^viz-/.test(l.viz)) err(l.file, `visualisation inconnue : [[viz:${l.viz}]]`); continue; }
  if (l.viz) { if (!vizIds.has(l.viz)) err(l.file, `visualisation inconnue : [[viz:${l.viz}]]`); }
  else if (!allIds.has(l.id) && !resultIds.has(l.id)) warn(l.file, `lien vers un id inconnu : [[${l.id}]]`);
  else if (!allIds.has(l.id) && resultIds.has(l.id)) warn(l.file, `lien vers un résultat de la carte sans fiche : [[${l.id}]]`);
}
// coverage: results of importance >= 2 without fiche
const uncovered = (map.results || []).filter(r => (r.importance || 0) >= 2 && !theorems[r.id]);
for (const r of uncovered) warn(mapFile, `résultat d'importance ${r.importance} sans fiche : ${r.id} (${r.ref})`);

// ---------- output ----------
if (checkOnly) {
  console.log('CHECK', path.relative(ROOT, checkOnly), JSON.stringify({ theorems: Object.keys(theorems).length, exercises: Object.keys(exercises).length, reflexes: Object.keys(reflexes).length, flashcards: flashcards.length, viz: vizMeta.length }));
  if (warnings.length) { console.log(`${warnings.length} avertissement(s) :`); for (const w of warnings) console.log('  ⚠ ' + w); }
  if (errors.length) { console.log(`${errors.length} erreur(s) :`); for (const e of errors) console.log('  ✖ ' + e); process.exit(1); }
  console.log('OK : aucune erreur de format.'); process.exit(0);
}
fs.mkdirSync(OUT_DIR, { recursive: true });
const content = {
  built: new Date().toISOString(),
  chapters: map.chapters || [], results: map.results || [], notations, calibration,
  theorems, exercises, reflexes, flashcards, viz: vizMeta,
};
fs.writeFileSync(path.join(OUT_DIR, 'content.js'), 'window.FMA_CONTENT = ' + JSON.stringify(content) + ';\n');
fs.writeFileSync(path.join(OUT_DIR, 'viz.js'), vizBundle);
const stats = { theorems: Object.keys(theorems).length, exercises: Object.keys(exercises).length, reflexes: Object.keys(reflexes).length, flashcards: flashcards.length, viz: vizMeta.length, mapResults: (map.results || []).length, uncoveredImportant: uncovered.length };
console.log('BUILD', JSON.stringify(stats));
if (warnings.length) { console.log(`\n${warnings.length} avertissement(s) :`); for (const w of warnings) console.log('  ⚠ ' + w); }
if (errors.length) { console.log(`\n${errors.length} erreur(s) :`); for (const e of errors) console.log('  ✖ ' + e); process.exit(1); }
if (strict && warnings.length) process.exit(2);
