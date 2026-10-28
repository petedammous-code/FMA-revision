#!/usr/bin/env node
// Génère les unités de travail de l'étape 2 à partir de content/map/map.json → stdout (JSON)
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const map = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/map/map.json'), 'utf8'));
const BATCH = Number(process.argv[2] || 6);
const FICHE_KINDS = new Set(['definition', 'lemma', 'proposition', 'theorem', 'corollary']);
const units = [];
for (const c of map.chapters) {
  const rs = map.results.filter(r => r.chapter === c.num).sort((a, b) => a.order - b.order);
  const fiche = rs.filter(r => FICHE_KINDS.has(r.kind) || (r.importance || 0) >= 2);
  for (let i = 0; i < fiche.length; i += BATCH) {
    const batch = fiche.slice(i, i + BATCH);
    units.push({ kind: 'theorems', chapter: c.num, nn: c.nn, label: `fiches:ch${c.nn}:${Math.floor(i / BATCH) + 1}`, ids: batch.map(r => r.id) });
  }
  const nEx = c.num === 8 ? 1 : 2;
  for (let k = 0; k < nEx; k++) units.push({ kind: 'exercises', chapter: c.num, nn: c.nn, label: `exos:ch${c.nn}:${k + 1}`, variant: k });
  units.push({ kind: 'flashcards', chapter: c.num, nn: c.nn, label: `flashcards:ch${c.nn}` });
  units.push({ kind: 'viz', chapter: c.num, nn: c.nn, label: `viz:ch${c.nn}` });
}
console.log(JSON.stringify(units));
console.error(`${units.length} unités : ${units.filter(u => u.kind === 'theorems').length} lots de fiches, ${units.filter(u => u.kind === 'exercises').length} lots d'exercices, ${units.filter(u => u.kind === 'flashcards').length} flashcards, ${units.filter(u => u.kind === 'viz').length} viz`);
