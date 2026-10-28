#!/usr/bin/env node
// Prépare les args du workflow étape 2 (ou 3) pour un ou plusieurs chapitres : node tools/prep_etape2.mjs 01 [02 ...] [--batch 6] [--etape3]
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2); const batchIdx = argv.indexOf('--batch'); const BATCH = batchIdx >= 0 ? Number(argv[batchIdx + 1]) : 6; const etape3 = argv.includes('--etape3');
const nns = argv.filter(a => /^\d\d$/.test(a));
const map = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/map/map.json'), 'utf8'));
const FICHE_KINDS = new Set(['definition', 'lemma', 'proposition', 'theorem', 'corollary']);
const units = [], info = { chapterIds: {}, otherIds: [], ideas: {}, results: {} };
for (const c of map.chapters) if (nns.includes(c.nn)) info.chapterIds[c.nn] = map.results.filter(r => r.chapter === c.num).map(r => r.id);
info.otherIds = map.results.filter(r => (r.importance || 0) >= 3).map(r => r.id);
for (const nn of nns) {
  const c = map.chapters.find(x => x.nn === nn); if (!c) { console.error('chapitre absent de map.json : ' + nn); continue; }
  const rs = map.results.filter(r => r.chapter === c.num).sort((a, b) => a.order - b.order);
  const fiche = rs.filter(r => FICHE_KINDS.has(r.kind) || (r.importance || 0) >= 2);
  for (let i = 0; i < fiche.length; i += BATCH) { const b = fiche.slice(i, i + BATCH); units.push({ kind: 'theorems', chapter: c.num, nn, label: `fiches:ch${nn}:${Math.floor(i / BATCH) + 1}`, ids: b.map(r => r.id) }); }
  for (const r of fiche) info.results[r.id] = { id: r.id, ref: r.ref, title: r.title, page: r.page, kind: r.kind, importance: r.importance, depends_ids: r.depends_ids || [], depends_unresolved: r.depends_unresolved || [] };
  const nEx = c.num === 8 ? 1 : 2; for (let k = 0; k < nEx; k++) units.push({ kind: 'exercises', chapter: c.num, nn, label: `exos:ch${nn}:${k + 1}`, variant: k });
  units.push({ kind: 'flashcards', chapter: c.num, nn, label: `flashcards:ch${nn}` });
  units.push({ kind: 'viz', chapter: c.num, nn, label: `viz:ch${nn}` });
  info.ideas[nn] = (c.viz_opportunities || []).map(v => `${v.title} (${v.shows})`).join(' | ').slice(0, 2500) + ' | Liste de l\'élève : différentielle comme approximation linéaire, inversion locale et fonctions implicites, domain coloring, applications conformes, contours et résidus, principe du maximum, flots, sous-variétés et espaces tangents.';
}
const out = etape3 ? { units } : { units, info };
const f = path.join('/tmp/claude-0/-home-user-FMA-revision/a354ab57-23c8-54ee-bc46-435d87e86fdf/scratchpad', `args-etape${etape3 ? 3 : 2}-${nns.join('-')}.json`);
fs.writeFileSync(f, JSON.stringify(out)); console.error(`${units.length} unités → ${f} (${fs.statSync(f).size} octets)`);
console.log(JSON.stringify(out));
