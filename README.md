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

## Contenu et méthode de fabrication

| Chapitre | Fiches | Exercices | Flashcards | Visualisations |
|---|---|---|---|---|
| I. Fonctions holomorphes | 62 | 10 | 91 | 2 |
| II. Formule des résidus | 42 | 10 | 70 | 3 |
| III. Suites, séries et produits | 25 | 10 | 63 | 3 |
| IV. Applications | 16 | 10 | 56 | 3 |
| V. Calcul différentiel dans les evn | 47 | 10 | 69 | 3 |
| VI. Inversion locale, fonctions implicites | 19 | 10 | 66 | 3 |
| VII. Équations différentielles | 23 | 10 | 60 | 3 |
| VIII. Calcul des variations | 20 | 4 | 27 | 2 |
| IX. Sous-variétés | 64 | 10 | 109 | 3 |

Plus 40 fiches **Réflexes** (situation → outil) et 16 problèmes **mixtes** croisant holomorphie et calcul différentiel
(dans le mode Problème inconnu).

Chaque unité (lot de fiches, lot d'exercices, jeu de flashcards, visualisations) a été rédigée par un agent, puis
relue par un **autre** agent, indépendant, qui a comparé chaque énoncé au texte du poly (numéros et pages),
refait les preuves étape par étape, recalculé les contre-exemples et, pour les exercices, résolu l'énoncé seul
avant de confronter sa solution au corrigé (vérifications numériques en sympy/mpmath). Les corrections ont été faites
en place ; les points où une fiche complète ou corrige le poly sont signalés dans la fiche elle-même.
Les annales n'ont servi qu'à calibrer difficulté et durée (`content/map/calibration.md`) : aucun sujet n'est repris.
