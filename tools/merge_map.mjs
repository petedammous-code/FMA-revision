#!/usr/bin/env node
// Fusionne content/map/chNN.json → content/map/map.json (+ notations.md). Résout depends_on (refs du poly) → ids.
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'); const DIR = path.join(ROOT, 'content', 'map');
const normRef = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/^(theoreme|thm|th)\b\.?/, 'theoreme').replace(/^(prop|proposition)\b\.?/, 'proposition').replace(/^(lemme|lem)\b\.?/, 'lemme').replace(/^(corollaire|cor)\b\.?/, 'corollaire').replace(/^(definition|def)\b\.?/, 'definition').replace(/^(remarque|rem)\b\.?/, 'remarque').replace(/^(exemple|ex)\b\.?/, 'exemple').replace(/[^a-z0-9.]+/g, ' ').trim();
const chapters = [], results = [], notations = [], unresolved = [];
for (const nn of ['01', '02', '03', '04', '05', '06', '07', '08', '09']) {
  const f = path.join(DIR, `ch${nn}.json`); if (!fs.existsSync(f)) { console.log(`manque ch${nn}.json`); continue; }
  const d = JSON.parse(fs.readFileSync(f, 'utf8')); const c = d.chapter; c.nn = nn; c.num = Number(nn);
  chapters.push({ num: c.num, nn, roman: c.roman, title: c.title, printed_pages: c.printed_pages, summary: c.summary, sections: c.sections || [], pitfalls: d.pitfalls || [], proof_techniques: d.proof_techniques || [], viz_opportunities: d.viz_opportunities || [], poly_exercises: d.poly_exercises || [] });
  (d.results || []).forEach((r, i) => results.push({ ...r, chapter: c.num, order: i }));
  for (const n of d.notations || []) notations.push({ ...n, chapter: c.num, roman: c.roman });
}
const byRef = {}; for (const r of results) { const k = normRef(r.ref); if (byRef[k] && byRef[k] !== r.id) console.log(`ref dupliquée : ${r.ref} → ${byRef[k]} / ${r.id}`); byRef[k] = r.id; }
const byNum = {}; for (const r of results) { const m = String(r.ref).match(/([IVX]+\.\d+(?:\.\d+)?)/); if (m) (byNum[m[1]] = byNum[m[1]] || []).push(r.id); }
const ids = new Set(results.map(r => r.id));
for (const r of results) {
  r.depends_ids = []; r.depends_unresolved = [];
  for (const dep of r.depends_on || []) {
    if (ids.has(dep)) { r.depends_ids.push(dep); continue; }
    const k = normRef(dep); let id = byRef[k];
    if (!id) { const m = String(dep).match(/([IVX]+\.\d+(?:\.\d+)?)/); if (m && byNum[m[1]] && byNum[m[1]].length === 1) id = byNum[m[1]][0]; }
    if (!id) { const q = String(dep).match(/^Questions?\s+(\d+)\b/); if (q) { const cands = results.filter(x => x.chapter === r.chapter && new RegExp('^Questions?\\s+' + q[1] + '\\b').test(String(x.ref))); if (cands.length === 1) id = cands[0].id; } }
    if (id && id !== r.id) r.depends_ids.push(id); else if (!id) { r.depends_unresolved.push(dep); unresolved.push(`${r.id}: ${dep}`); }
  }
  r.depends_ids = [...new Set(r.depends_ids)];
}
// cycle sanity (self deps removed above)
fs.writeFileSync(path.join(DIR, 'map.json'), JSON.stringify({ chapters, results }, null, 1));
let md = '| Notation | Signification | Chapitre | Page |\n|---|---|---|---|\n';
const seen = new Set();
for (const n of notations) { const key = n.symbol + '|' + n.chapter; if (seen.has(key)) continue; seen.add(key); md += `| ${n.symbol} | ${String(n.meaning).replace(/\|/g, '\\|')} | ${n.roman} | ${n.page || ''} |\n`; }
fs.writeFileSync(path.join(DIR, 'notations.md'), md);
const imp = { 1: 0, 2: 0, 3: 0 }; for (const r of results) imp[r.importance] = (imp[r.importance] || 0) + 1;
console.log(JSON.stringify({ chapters: chapters.length, results: results.length, importance: imp, notations: notations.length, unresolved: unresolved.length }));
if (unresolved.length) console.log('Dépendances non résolues :\n  ' + unresolved.join('\n  '));
