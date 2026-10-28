# Format commun des fiches — site FMA (Analyse complexe et calcul différentiel)

Ce document est la **spécification unique** que suivent tous les contenus du site.
Le script `tools/build.mjs` compile tout `content/` en `docs/data/content.js`. Tout fichier qui ne
respecte pas ce format est rejeté à la compilation avec un message d'erreur.

Public : élève de 2A à l'X qui part presque de zéro et vise A+. Donc : **intuition d'abord**, puis
définition/énoncé rigoureux, puis exemples ; chaque symbole, fonction et terme est défini avant
d'être utilisé (ou renvoie vers la fiche qui le définit avec `[[id]]`) ; on garde **les notations du
poly** (`D(z_0,r)`, `\bar D(z_0,r)`, `C(z_0,r)`, `\mathrm{Hol}(\Omega)`, `\mathcal L(E,F)`, `df_a`, `d^2f_a`, `\mathrm{Res}_{z_0}(f)`, `\mathrm{Ind}_\gamma(z)`, etc.).

Langue : français. Maths : LaTeX rendu par KaTeX.

---------------------------------------------------------------------------------------------------

## 0. Règles d'écriture communes (Markdown + LaTeX)

* Fichiers `.md` encodés en UTF-8. Un **frontmatter** entre deux lignes `---` au début du fichier
  (clés `cle: valeur` ; listes entre crochets `[a, b, c]` ; chaînes sans guillemets sauf si elles
  contiennent `:` ou `#`, alors entre guillemets doubles).
* Les sections de premier niveau d'une fiche sont des titres `## Nom exact` (voir les noms exacts
  ci-dessous ; l'ordre est imposé ; une section vide est acceptée mais à éviter).
* Maths : `$...$` en ligne, `$$...$$` en affichage (sur ses propres lignes). Dans `$$`, utiliser
  `\begin{aligned} ... \end{aligned}` pour les alignements, et `\begin{cases}`, `\begin{pmatrix}`
  pour les cas/matrices. **Ne jamais** utiliser `\[ \]`, `\( \)`, `\begin{equation}`, `\begin{align}`.
  Macros KaTeX disponibles : `\R, \C, \N, \Z, \Q` (corps), `\Hol` (= `\mathrm{Hol}`), `\Res`
  (= `\mathrm{Res}`), `\Ind` (= `\mathrm{Ind}`), `\Re, \Im` (parties réelle/imaginaire comme dans le poly `\Re e(z)` → écrire `\Re(z)`),
  `\norm{x}` (= `\lVert x \rVert`), `\abs{x}`, `\dd` (d droit), `\eps` (= `\varepsilon`), `\GL`, `\Sym`, `\Mat` (`\mathrm{M}`), `\id`, `\supp`, `\dist`.
* Pas de `\label`, `\ref`, `\cite`, `\newcommand` dans les fichiers (les macros sont définies dans le site).
* Un **lien vers une autre fiche** s'écrit `[[id]]` (par exemple `[[ch01-liouville]]`) ; le site
  affiche le titre de la fiche et un lien cliquable. On peut forcer le texte : `[[ch01-liouville|le théorème de Liouville]]`.
* Une **visualisation** s'insère dans une fiche avec `[[viz:id]]` sur une ligne seule.
* Un **trou** (étape clé cachée à retrouver) s'écrit **en ligne** : `<trou>texte caché</trou>`, ou avec
  un indice `<trou indice="pensez à la formule de Cauchy">texte caché</trou>`. Le texte caché peut
  contenir des maths `$...$`. Ne pas mettre de ligne vide à l'intérieur d'un `<trou>`.
* Un **avertissement/piège** : paragraphe commençant par `> ⚠️ ` (blockquote).
* Une **intuition** : paragraphe commençant par `> 💡 `.
* Une **référence au poly** : `(poly, Théorème I.6.1, p. 18)` — toujours la numérotation et la page
  **imprimée** du poly (pas la page PDF).
* Tableaux Markdown autorisés (`| a | b |`). Listes `*` ou `1.`. Gras `**x**`, italique `*x*`.
* Les caractères `<` et `>` dans le texte courant (hors maths et hors balises `<trou>`) : écrire
  `&lt;` `&gt;` ou, mieux, les mettre en maths `$<$`.

Identifiants (`id`) : minuscules, chiffres, tirets. Préfixes :
`chNN-slug` (résultat de cours), `ex-chNN-slug` ou `ex-mix-slug` (exercice), `viz-chNN-slug`
(visualisation), `rfx-slug` (réflexe), `fc-chNN-NNN` (flashcard). `NN` = numéro de chapitre sur deux
chiffres (01 à 09). Un id est **unique** sur tout le site.

Numéros de chapitres (ordre du poly) :
| NN | Poly | Titre |
|---|---|---|
| 01 | I | Fonctions holomorphes |
| 02 | II | Formule des résidus |
| 03 | III | Suites, séries et produits |
| 04 | IV | Applications (transformations conformes, fonctions harmoniques, physique) |
| 05 | V | Calcul différentiel dans les E.V.N. |
| 06 | VI | Inversion locale et fonctions implicites |
| 07 | VII | Équations différentielles |
| 08 | VIII | Calcul des variations |
| 09 | IX | Sous-variétés |

---------------------------------------------------------------------------------------------------

## 1. Fiche résultat de cours — `content/chNN/theorems/<id>.md`

Une fiche par **définition importante, lemme, proposition, théorème ou corollaire** de la carte du
cours (`content/map/map.json`). Les définitions ont des sections allégées (voir § 1.2).

### 1.1 Frontmatter

```
---
id: ch01-cauchy-formule-integrale
type: theorem                 # definition | lemma | proposition | theorem | corollary
chapter: 1
title: Formule intégrale de Cauchy (sur un disque)
ref: Théorème I.6.1           # numérotation exacte du poly
page: 18                      # page imprimée du poly où commence l'énoncé
importance: 3                 # 3 = central / à connaître par cœur, 2 = important, 1 = utile
depends: [ch01-goursat-triangle, ch01-integrale-chemin-def]   # ids des résultats utilisés dans la preuve
tags: [cauchy, integrale, disque]
---
```

### 1.2 Sections, dans cet ordre exact

```
## Intuition
## Énoncé
## Hypothèses
## Idée de la preuve
## Preuve
## Preuve à trous
## Exemples
## Pièges
```
Pour `type: definition`, seules `## Intuition`, `## Énoncé` (la définition exacte), `## Exemples`,
`## Pièges` sont obligatoires ; `## Hypothèses` devient facultative et contient alors les
« conditions cachées » de la définition (ex. : « Ω ouvert » ; pourquoi).

Contenu attendu :

* **Intuition** (3 à 8 lignes) : en mots, avec une image mentale ; `> 💡` autorisé. Définir ici ou
  renvoyer (`[[id]]`) tout terme non encore défini.
* **Énoncé** : l'énoncé **exact** du poly (mêmes hypothèses, même conclusion, mêmes notations).
  Si le poly a un énoncé un peu allusif, le préciser sans l'affaiblir ni le renforcer. Commencer par
  « **Théorème (poly, Théorème I.6.1, p. 18).** ».
* **Hypothèses** : une sous-section `### H1 — <nom court>` par hypothèse, avec deux paragraphes :
  `**Rôle.**` (où elle sert dans la preuve) et `**Si on la retire.**` (un **contre-exemple
  explicite** et vérifié, ou « la conclusion reste vraie mais la preuve change : ... » si l'hypothèse
  est seulement de confort — le dire honnêtement).
* **Idée de la preuve** : 3 lignes maximum, la stratégie.
* **Preuve** : la preuve **complète** et rigoureuse, fidèle à celle du poly (on peut la clarifier,
  pas la remplacer par une autre sans le signaler : « *Variante du poly :* »). Chaque résultat
  utilisé est cité par `[[id]]` ou `(poly, ..., p. ...)`.
* **Preuve à trous** : la même preuve, où 2 à 5 **étapes clés** sont cachées dans des `<trou>`
  (le choix de la fonction auxiliaire, l'inégalité centrale, l'argument de compacité, ...).
  Pas des trous triviaux.
* **Exemples** : 1 à 3 exemples concrets, calculs faits. Une visualisation `[[viz:...]]` si elle aide.
* **Pièges** : liste `*` des erreurs classiques (hypothèse oubliée, confusion de notations, cas
  limite), en `> ⚠️` si important.

---------------------------------------------------------------------------------------------------

## 2. Fiche exercice — `content/chNN/exercises/<id>.md` ou `content/mixed/<id>.md`

```
---
id: ex-ch02-integrale-rationnelle-cos
type: exercise
chapters: [2]                 # chapitres mobilisés (plusieurs pour les problèmes mélangés) — CACHÉ en mode « Problème inconnu »
title: Une intégrale trigonométrique par les résidus
source: "Classique (Stein–Shakarchi, ch. 3)"   # ou "Cartan", "Amar–Matheron", "Rudin", "PC 2023 ex. 5", "Inventé", "Contrôle 2022 (adapté)"
difficulty: 2                 # 1 = application directe, 2 = exercice standard, 3 = exercice de contrôle difficile, 4 = problème long
time: 20                      # minutes recommandées (chronomètre du site)
tools: [ch02-formule-residus, ch02-residu-pole-simple]   # outils du cours à mobiliser (ids)
---
## Énoncé
## Indices
### Indice 1
### Indice 2
### Indice 3
## Corrigé
## Pièges et variantes
```

* **Énoncé** : complet, auto-suffisant, en questions numérotées `1.`, `2.`, ... s'il y a lieu. Ne pas
  indiquer le chapitre ni l'outil dans l'énoncé.
* **Indices** : progressifs. Indice 1 = orienter (quel type d'outil ?), Indice 2 = l'outil précis et
  pourquoi ses hypothèses sont vérifiées, Indice 3 = le calcul/argument clé amorcé. Entre 2 et 4 indices.
* **Corrigé** : rédigé **complètement et vérifié** (calculs refaits), au niveau d'un corrigé de
  contrôle : hypothèses vérifiées explicitement avant d'appliquer un théorème, cité par `[[id]]`.
* **Pièges et variantes** : erreurs fréquentes ; 1 ou 2 variantes de l'énoncé et ce qui change.

Sources attendues sur l'ensemble du site : classiques (Stein–Shakarchi, Cartan, Amar–Matheron,
Rudin *Real and Complex Analysis*, Rouvière *Petit guide de calcul différentiel*, Lang), exercices du
poly et des PC (en les citant), et exercices **inventés** (originaux). Pas seulement le style des PC.
Les annales (annexe A du poly) servent **uniquement** à calibrer longueur et difficulté : ne pas
reprendre leur contenu.

---------------------------------------------------------------------------------------------------

## 3. Flashcards — `content/chNN/flashcards.md` (un fichier par chapitre)

```
## CARD id=fc-ch01-001 ref=ch01-liouville tags=enonce
### Q
Énoncer le théorème de Liouville.
### R
Toute fonction holomorphe sur $\C$ et bornée est constante. (poly, Théorème I.10.1, p. 26)

## CARD id=fc-ch01-002 ref=ch01-liouville tags=hypothese
### Q
Dans le théorème de Liouville, que se passe-t-il si l'on retire « bornée » ?
### R
Faux : $z\mapsto z$ ou $\exp$. ...
```
* `ref` = id de la fiche de cours associée (facultatif pour les cartes de notation : `ref=none`).
* `tags` parmi : `enonce` (énoncé exact), `hypothese`, `contre-exemple`, `definition`, `formule`,
  `notation`, `methode`.
* Au moins une carte `enonce` par résultat d'importance 2 ou 3, plus des cartes `hypothese`/`contre-exemple`/`formule`.

---------------------------------------------------------------------------------------------------

## 4. Réflexes — `content/reflexes/<id>.md`

```
---
id: rfx-montrer-constante
type: reflexe
situation: Montrer qu'une fonction holomorphe est constante
chapters: [1, 2, 3]
---
## Situation
## Options
### [x] Théorème de Liouville — [[ch01-liouville]]
### [ ] Théorème de Rouché — [[ch02-rouche]]
### [x] Principe du maximum — [[ch01-principe-maximum]]
## Démarche
## Pièges
## Mini-exemple
```
* **Situation** : ce qu'on a (données typiques) et ce qu'on veut, en 3-6 lignes.
* **Options** : 3 à 6 sous-sections `### [x] ...` (outil pertinent) ou `### [ ] ...` (fausse piste
  plausible). Sous chaque option, trois paragraphes : `**Quand.**` (les hypothèses à vérifier /
  la forme des données qui déclenche cet outil), `**Justification.**`, `**Pièges.**`. Pour une
  option `[ ]` : `**Pourquoi ce n'est pas l'outil ici.**` et `**Quand il le serait.**`.
* **Démarche** : arbre de décision en liste numérotée (« Si ... alors ... sinon ... »).
* **Pièges** : liste.
* **Mini-exemple** : un cas concret résolu en 5-10 lignes.

---------------------------------------------------------------------------------------------------

## 5. Visualisations — `content/chNN/viz/<id>.js`

Fichier JavaScript (ES2020, sans import/export, sans dépendance externe) qui appelle
`FMA.registerViz({...})`. Il est exécuté dans le navigateur. Squelette :

```js
FMA.registerViz({
  id: 'viz-ch01-domain-coloring',
  chapter: 1,
  title: 'Domain coloring : voir une fonction holomorphe',
  description: String.raw`Teinte = argument de $f(z)$, luminosité = module. Les zéros sont ...`, // Markdown+LaTeX ; String.raw obligatoire pour garder les backslashes
  related: ['ch01-zeros-isoles', 'ch02-poles-residus'],
  height: 420,                       // hauteur en px du conteneur (facultatif, défaut 400)
  mount(container, kit) {
    // container : <div> vide, largeur = largeur du contenu ; kit : helpers FMA.vizkit (voir docs/js/vizkit.js)
    const { canvas, ctx, W, H } = kit.canvas(container, { height: 400 });   // canvas HiDPI prêt
    const controls = kit.controls(container);                               // barre de contrôles
    const n = kit.slider(controls, { label: 'n', min: 1, max: 6, step: 1, value: 2, onChange: draw });
    const choice = kit.select(controls, { label: 'f', options: [['z^n', 'puissance'], ['1/(z^2+1)', 'poles']], onChange: draw });
    function draw() { /* ... kit.plane(ctx, {xmin,xmax,ymin,ymax}) donne les conversions ... */ }
    draw();
    return () => { /* cleanup : removeEventListener, cancelAnimationFrame */ };
  }
});
```
Les helpers de `kit` (`docs/js/vizkit.js`) : `canvas`, `controls`, `slider`, `select`, `button`,
`checkbox`, `readout`, `plane` (repère + conversions monde↔pixels + `axes()`, `grid()`), `complex`
(`add, mul, div, exp, log, abs, arg, pow, polar`), `hsl2rgb`, `colorArg` (teinte selon l'argument),
`drawCurve`, `drawVector`, `animate(loop)` (boucle rAF avec arrêt propre), `md(el, text)` (rend du Markdown+LaTeX dans un élément).
Règles : pas d'accès réseau ; redessiner vite (< 50 ms) ; tout nettoyer dans la fonction de retour ;
ne jamais lever d'exception non attrapée ; fonctionner sur 360 px de large.

Une visualisation ne se justifie que si elle **montre quelque chose que le texte ne montre pas**
(différentielle = approximation linéaire, inversion locale/fonctions implicites, domain coloring,
applications conformes, chemins/homotopie/indice, résidus et contours, principe du maximum,
flot d'un champ de vecteurs, sous-variété et espace tangent, points fixes contractants...).

---------------------------------------------------------------------------------------------------

## 6. Carte du cours — `content/map/map.json` et notations — `content/map/notations.md`

Produits à l'étape 1 ; `map.json` liste chapitres, sections, résultats (id, kind, ref, page,
titre, énoncé court, dépendances, importance) ; le site s'en sert pour le graphe de dépendances,
le parcours « Cours » et la vérification de couverture (chaque résultat d'importance ≥ 2 doit
avoir sa fiche). `notations.md` : tableau `| Notation | Signification | Chapitre | Page |`.
