# FMA — site d'apprentissage interactif (Analyse complexe & calcul différentiel)

Site statique d'entraînement construit sur le polycopié FMA 41031 (École polytechnique, D. Renard, 2026),
les PC/TD et les annales (annales utilisées uniquement pour calibrer la difficulté).

## Utiliser le site

* **En ligne (GitHub Pages)** : activer Pages sur ce dépôt (*Settings → Pages → Deploy from a branch →
  branche de travail, dossier `/docs`*). Le site est alors servi à `https://<user>.github.io/FMA-revision/`.
* **En local** : `cd docs && python3 -m http.server 8000` puis ouvrir <http://localhost:8000/>.
  (Tout est embarqué : KaTeX, marked et le contenu compilé ; aucune connexion nécessaire.)

Quatre modes : **Cours** (fiches par théorème : intuition, énoncé exact, rôle de chaque hypothèse avec
contre-exemple, idée de preuve, preuve complète, preuve à trous, exemples, pièges, visualisations),
**Réflexes** (situation → quel outil ?), **Problème inconnu** (exercices tirés au hasard, chapitre
masqué, chronomètre, indices progressifs, corrigé, auto-évaluation) et **Flashcards** (répétition
espacée, suivi de ce qui est raté). Plus : carte des dépendances entre résultats, table des notations,
page de progression (export/import JSON).

## Structure

```
docs/            site statique (index.html, js/, css/, vendor/, data/ = contenu compilé)
content/         contenu source (Markdown + LaTeX ; un fichier par fiche)
  FORMAT.md      spécification du format commun (fiches, exercices, flashcards, réflexes, visualisations)
  map/           carte du cours (chNN.json, map.json), notations, calibration des annales
  chNN/          theorems/, exercises/, viz/, flashcards.md pour chaque chapitre
  reflexes/      fiches du mode Réflexes
  mixed/         problèmes mélangeant plusieurs chapitres
sources/         texte extrait du poly (par chapitre et par page) et des TD
tools/           build.mjs (compile content/ → docs/data/), check_site.cjs (test Playwright), scripts des workflows
```

## Recompiler après modification du contenu

```
node tools/build.mjs            # compile et vérifie le format (erreurs → code de sortie 1)
node tools/build.mjs --check content/ch01/theorems   # vérifie seulement un dossier
node tools/check_site.cjs --all  # test de rendu de toutes les pages (Playwright)
```
