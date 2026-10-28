#!/usr/bin/env node
// Prépare les args du workflow étape 2 (ou 3) pour un ou plusieurs chapitres : node tools/prep_etape2.mjs 01 [02 ...] [--batch 6] [--etape3]
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2); const batchIdx = argv.indexOf('--batch'); const BATCH = batchIdx >= 0 ? Number(argv[batchIdx + 1]) : 8; const missing = argv.includes('--missing'); const etape3 = argv.includes('--etape3');
const nns = argv.filter(a => /^\d\d$/.test(a));
const map = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/map/map.json'), 'utf8'));
const FICHE_KINDS = new Set(['definition', 'lemma', 'proposition', 'theorem', 'corollary']);
const units = [], info = { chapterIds: {}, otherIds: [], ideas: {}, results: {} };
for (const c of map.chapters) if (nns.includes(c.nn)) info.chapterIds[c.nn] = map.results.filter(r => r.chapter === c.num).map(r => r.id);
info.otherIds = map.results.filter(r => (r.importance || 0) >= 3).map(r => r.id);
for (const nn of nns) {
  const c = map.chapters.find(x => x.nn === nn); if (!c) { console.error('chapitre absent de map.json : ' + nn); continue; }
  const rs = map.results.filter(r => r.chapter === c.num).sort((a, b) => a.order - b.order);
  const fiche0 = rs.filter(r => FICHE_KINDS.has(r.kind) || (r.importance || 0) >= 2);
  const exists = id => fs.existsSync(path.join(ROOT, 'content', 'ch' + nn, 'theorems', id + '.md'));
  const fiche = missing ? fiche0.filter(r => !exists(r.id)) : fiche0;
  if (missing) console.error(`ch${nn}: ${fiche0.length - fiche.length} fiches déjà présentes, ${fiche.length} à rédiger`);
  const exDir = path.join(ROOT, 'content', 'ch' + nn, 'exercises'); const exFiles = fs.existsSync(exDir) ? fs.readdirSync(exDir).filter(f => f.endsWith('.md')) : [];
  const exCount = k => exFiles.filter(f => { const slug = f.replace(/^ex-ch\d\d-/, ''); const c = slug[0] || 'a'; return k === 0 ? c <= 'm' : c >= 'n'; }).length;
  const vizDir = path.join(ROOT, 'content', 'ch' + nn, 'viz'); const vizCount = fs.existsSync(vizDir) ? fs.readdirSync(vizDir).filter(f => f.endsWith('.js')).length : 0;
  const fcExists = fs.existsSync(path.join(ROOT, 'content', 'ch' + nn, 'flashcards.md'));
  for (let i = 0; i < fiche.length; i += BATCH) { const b = fiche.slice(i, i + BATCH); units.push({ kind: 'theorems', chapter: c.num, nn, label: `fiches:ch${nn}:${Math.floor(i / BATCH) + 1}`, ids: b.map(r => r.id) }); }
  for (const r of fiche) info.results[r.id] = { id: r.id, ref: r.ref, title: r.title, page: r.page, kind: r.kind, importance: r.importance, depends_ids: r.depends_ids || [], depends_unresolved: r.depends_unresolved || [] };
  const nEx = c.num === 8 ? 1 : 2; for (let k = 0; k < nEx; k++) { if (missing && exCount(k) >= (c.num === 8 ? 3 : 4)) { console.error(`ch${nn}: lot d'exercices ${k + 1} déjà présent`); continue; } units.push({ kind: 'exercises', chapter: c.num, nn, label: `exos:ch${nn}:${k + 1}`, variant: k }); }
  if (!(missing && fcExists)) units.push({ kind: 'flashcards', chapter: c.num, nn, label: `flashcards:ch${nn}` }); else console.error(`ch${nn}: flashcards déjà présentes`);
  if (!(missing && vizCount >= 2)) units.push({ kind: 'viz', chapter: c.num, nn, label: `viz:ch${nn}` }); else console.error(`ch${nn}: visualisations déjà présentes`);
  info.ideas[nn] = (c.viz_opportunities || []).map(v => `${v.title} (${v.shows})`).join(' | ').slice(0, 2500) + ' | Liste de l\'élève : différentielle comme approximation linéaire, inversion locale et fonctions implicites, domain coloring, applications conformes, contours et résidus, principe du maximum, flots, sous-variétés et espaces tangents.';
}
const out = (etape3 || argv.includes('--units-only')) ? { units } : { units, info };
const f = path.join('/tmp/claude-0/-home-user-FMA-revision/a354ab57-23c8-54ee-bc46-435d87e86fdf/scratchpad', `args-etape${etape3 ? 3 : 2}-${nns.join('-')}.json`);
fs.writeFileSync(f, JSON.stringify(out)); console.error(`${units.length} unités → ${f} (${fs.statSync(f).size} octets)`);
console.log(JSON.stringify(out));
