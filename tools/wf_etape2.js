export const meta = {
  name: 'fma-etape2-contenu',
  description: 'Étape 2 : rédaction du contenu (fiches de cours, exercices, flashcards, visualisations) par unités, en parallèle, au format commun',
  phases: [{ title: 'Rédaction', detail: 'un agent par unité : lot de fiches, lot d\'exercices, flashcards ou visualisations d\'un chapitre' }],
}
const ROOT = '/home/user/FMA-revision'
const CH = {
  1: { roman: 'I', title: 'Fonctions holomorphes', file: 'sources/poly/ch01_holomorphes.txt', td: ['sources/td/TD1_ANA_COMP_2023__1_.txt'] },
  2: { roman: 'II', title: 'Formule des résidus', file: 'sources/poly/ch02_residus.txt', td: ['sources/td/TD1_ANA_COMP_2023__1_.txt', 'sources/td/TD2_ANA_COMP_2023__1_.txt'] },
  3: { roman: 'III', title: 'Suites, séries et produits', file: 'sources/poly/ch03_suites_series_produits.txt', td: ['sources/td/TD2_ANA_COMP_2023__1_.txt'] },
  4: { roman: 'IV', title: 'Applications', file: 'sources/poly/ch04_applications.txt', td: ['sources/td/TD2_ANA_COMP_2023__1_.txt'] },
  5: { roman: 'V', title: 'Calcul différentiel dans les E.V.N.', file: 'sources/poly/ch05_calcul_diff_evn.txt', td: ['sources/td/TD_CAL_DIF2022.txt'] },
  6: { roman: 'VI', title: 'Inversion locale et fonctions implicites', file: 'sources/poly/ch06_inversion_locale_implicites.txt', td: ['sources/td/TD_CAL_DIF2022.txt', 'sources/td/Lemme_de_Morse.txt'] },
  7: { roman: 'VII', title: 'Equations différentielles', file: 'sources/poly/ch07_equations_differentielles.txt', td: ['sources/td/TD_Equations_Differentielles.txt'] },
  8: { roman: 'VIII', title: 'Calcul des variations', file: 'sources/poly/ch08_calcul_variations.txt', td: ['sources/td/TD_CAL_DIF2022.txt'] },
  9: { roman: 'IX', title: 'Sous-variétés', file: 'sources/poly/ch09_sous_varietes.txt', td: ['sources/td/TD_Equations_Differentielles.txt', 'sources/td/Lemme_de_Morse.txt'] },
}
const COMMON = (u) => `CONTEXTE. Site d'apprentissage interactif pour un élève de 2A de l'École polytechnique qui prépare l'examen (open book, dans deux semaines) du cours FMA 41031 « Analyse complexe et calcul différentiel » (poly de D. Renard, 2026) et vise A+. Il part presque de zéro : le site doit lui apprendre le cours de bout en bout. Style imposé : intuition d'abord, puis définition/énoncé rigoureux, puis exemples ; chaque symbole, fonction et terme défini avant d'être utilisé (ou lié par [[id]]) ; notations du poly ; maths en LaTeX ($...$, $$...$$) rendues par KaTeX ; français.

CHAPITRE CONCERNÉ : ${CH[u.chapter].roman}. ${CH[u.chapter].title} (chapitre ${u.chapter}, dossier content/ch${u.nn}/).
Texte du chapitre : ${ROOT}/${CH[u.chapter].file} (marqueurs « [PDF page N | page imprimée M] » → cite TOUJOURS la page imprimée).
Carte vérifiée du chapitre (énoncés exacts, refs, pages, dépendances, importance) : ${ROOT}/content/map/ch${u.nn}.json ; carte globale : ${ROOT}/content/map/map.json.
Spécification du format (À LIRE EN ENTIER ET À RESPECTER À LA LETTRE, elle est vérifiée mécaniquement) : ${ROOT}/content/FORMAT.md.
Validation : après avoir écrit tes fichiers, exécute \`cd ${ROOT} && node tools/build.mjs --check content/ch${u.nn}/<sous-dossier>\` et corrige TOUTES les erreurs (✖) de TES fichiers ; les avertissements de liens vers des ids d'autres fiches pas encore écrites sont normaux. Ne modifie JAMAIS un fichier que tu n'as pas créé (d'autres agents écrivent en parallèle dans d'autres dossiers).
Écris les fichiers avec l'outil Write (ou cat > fichier <<'EOF' ... EOF). Pas de \\[ \\], pas de \\begin{align}, pas de \\label.`

const theoremsPrompt = (u, info) => `${COMMON(u)}

TA MISSION : rédiger les FICHES DE COURS (format § 1 de FORMAT.md) pour les résultats suivants du chapitre, un fichier par résultat dans ${ROOT}/content/ch${u.nn}/theorems/<id>.md :
${info.items.map(r => `- id=${r.id} | ${r.ref} | « ${r.title} » | p. ${r.page} | kind=${r.kind} | importance=${r.importance} | depends=[${(r.depends_ids || []).join(', ')}]${r.depends_unresolved && r.depends_unresolved.length ? ' (non résolus : ' + r.depends_unresolved.join('; ') + ')' : ''}`).join('\n')}
Les énoncés exacts, hypothèses, idées de contre-exemples (counterexample_hints) et viz_hint sont dans ch${u.nn}.json (champ "results", cherche par id). Relis dans le poly l'énoncé ET la preuve de chaque résultat avant d'écrire.

MODÈLE À IMITER (lis-le d'abord) : ${ROOT}/content/_examples/theorems/ch01-liouville.md

Pour chaque fiche, dans cet ordre : frontmatter (id, type, chapter=${u.chapter}, title, ref, page, importance, depends = ids ci-dessus (et ceux des autres chapitres si la preuve les utilise : ids dans map.json), tags) puis
## Intuition — 3 à 8 lignes, une image mentale, les termes non encore définis sont définis ou liés par [[id]] ;
## Énoncé — l'énoncé EXACT du poly, commençant par « **Théorème (poly, ${'Théorème X.Y.Z'}, p. N).** » (adapter le type) ; toutes les hypothèses ; mêmes notations ;
## Hypothèses — une sous-section « ### H1 — nom » par hypothèse avec « **Rôle.** » et « **Si on la retire.** » (contre-exemple EXPLICITE et VÉRIFIÉ par toi ; sinon dire honnêtement que l'hypothèse est de confort et ce qui change) ;
## Idée de la preuve — 3 lignes max ;
## Preuve — complète, rigoureuse, fidèle au poly (clarifiée, pas remplacée sans le signaler par « *Variante du poly :* »), chaque résultat utilisé cité par [[id]] ;
## Preuve à trous — la même preuve avec 2 à 5 étapes CLÉS cachées dans <trou>...</trou> (en ligne, option indice="...") ;
## Exemples — 1 à 3 exemples concrets calculés (une visualisation [[viz:...]] seulement si elle existe : ids viz-ch${u.nn}-... en cours de création par un autre agent → n'en insère pas) ;
## Pièges — liste des erreurs classiques.
Pour type=definition : Intuition, Énoncé (définition exacte), Hypothèses (facultatif : conditions cachées), Exemples, Pièges. Pour les résultats d'importance 1, les sections peuvent être plus courtes mais toutes présentes.
Exigence de niveau : rigueur de concours ; pas d'affirmation non justifiée ; chaque contre-exemple vérifié ; chaque formule recalculée.
Ids disponibles pour les liens [[id]] dans ce chapitre : ${info.chapterIds.join(', ')}.
Autres résultats centraux du cours (ids) : ${info.otherIds.join(', ')}.

Quand tout est validé (node tools/build.mjs --check content/ch${u.nn}/theorems sans ✖), renvoie la liste des fichiers écrits et les points où tu as un doute mathématique.`

const exercisesPrompt = (u, info) => `${COMMON(u)}

TA MISSION : rédiger ${info.n} EXERCICES (format § 2 de FORMAT.md), un fichier par exercice dans ${ROOT}/content/ch${u.nn}/exercises/<id>.md, id de la forme ex-ch${u.nn}-<slug> (slugs ${u.variant === 0 ? 'commençant par une lettre a à m' : 'commençant par une lettre n à z'} pour éviter les collisions avec l'autre rédacteur du chapitre).
MODÈLE À IMITER : ${ROOT}/content/_examples/exercises/ex-ch01-entiere-croissance.md
CALIBRATION (à lire : format du contrôle, échelle de difficulté 1-4, longueur, style ; et la liste des contenus d'annales À NE PAS RÉUTILISER) : ${ROOT}/content/map/calibration.md
TD/PC du chapitre (sources possibles, à citer « PC ... ex. n (adapté) » si tu t'en inspires ; ne pas tout recopier : au plus ${u.variant === 0 ? 2 : 1} exercice(s) de ce lot peuvent venir des PC) : ${CH[u.chapter].td.map(f => ROOT + '/' + f).join(', ')}
Exercices du poly (section « Exercices » du chapitre, à lire pour ne pas dupliquer) : champ poly_exercises de ch${u.nn}.json.

RÉPARTITION IMPOSÉE pour ce lot : ${info.mix}.
SOURCES : variées — ${u.variant === 0 ? 'classiques (Stein–Shakarchi, Cartan, Amar–Matheron, Rudin, Rouvière, Lang, Berger–Gostiaux, Lafontaine selon le chapitre), PC (adaptées), et au moins un exercice INVENTÉ par toi' : 'au moins deux exercices INVENTÉS par toi (originaux, qui forcent à reconnaître l\'outil dans une situation nouvelle), un classique et un exercice qui mélange ce chapitre avec un autre chapitre du cours (chapters: [${u.chapter}, autre])'} ; toujours renseigner le champ source honnêtement (« Inventé » si c'est le cas).
INTERDIT : reprendre le contenu des annales (annexe A) — elles ne servent qu'à calibrer ; les exercices « type examen » n'existent pas, l'objectif est d'apprendre à attaquer un problème jamais vu avec les outils du cours.
Chaque exercice : énoncé auto-suffisant sans indication de chapitre ni d'outil ; questions numérotées progressives ; 2 à 4 indices progressifs (orienter → outil précis + hypothèses → calcul amorcé) ; CORRIGÉ COMPLET rédigé au niveau d'un corrigé de contrôle, hypothèses des théorèmes vérifiées explicitement, théorèmes cités par [[id]], CALCULS REFAITS ET VÉRIFIÉS (fais-les deux fois, ou vérifie numériquement avec python3 -I quand c'est possible : intégrales, résidus, dérivées, points fixes...) ; « Pièges et variantes ».
Champs frontmatter : chapters (liste), difficulty, time (minutes : niv.1 ≈ 10-15, niv.2 ≈ 20-30, niv.3 ≈ 35-50, niv.4 ≈ 60-90), tools = ids des résultats du cours mobilisés parmi : ${info.chapterIds.join(', ')} (autres chapitres : ids dans map.json).

Quand tout est validé (node tools/build.mjs --check content/ch${u.nn}/exercises sans ✖), renvoie la liste des fichiers avec pour chacun : source, difficulté, et ton degré de confiance dans le corrigé.`

const flashcardsPrompt = (u, info) => `${COMMON(u)}

TA MISSION : rédiger le fichier de FLASHCARDS du chapitre : ${ROOT}/content/ch${u.nn}/flashcards.md (format § 3 de FORMAT.md ; modèle : ${ROOT}/content/_examples/flashcards.md). Ids fc-ch${u.nn}-001, 002, ...
Contenu obligatoire, à partir de ch${u.nn}.json (results, notations) et du poly :
- pour CHAQUE résultat d'importance 2 ou 3 : une carte tags=enonce (Q : « Énoncer ... » ; R : l'énoncé EXACT avec toutes ses hypothèses + référence poly), ref=<id du résultat> ;
- pour chaque résultat d'importance 3 : en plus une carte tags=hypothese (« quelles hypothèses ? / que se passe-t-il si on retire ... ? ») et une carte tags=contre-exemple quand un contre-exemple existe ;
- pour chaque définition importante : une carte tags=definition ;
- les formules à connaître par cœur (tags=formule) : ex. formule de Cauchy, estimées de Cauchy, calcul d'un résidu en un pôle d'ordre n, indice, formule des résidus, différentielle d'une composée, TAF, Taylor, point fixe, inversion locale, fonctions implicites (formule de la différentielle de la fonction implicite), Cauchy-Lipschitz, lemme de Gronwall, Euler-Lagrange, espace tangent... selon le chapitre ;
- les notations du chapitre (tags=notation, ref=none) ;
- quelques cartes tags=methode (« pour montrer que ..., on ... ») tirées des techniques de preuve du chapitre.
Cible : entre ${info.min} et ${info.max} cartes, concises, exactes (relis les énoncés dans le poly : une flashcard fausse est pire qu'absente). Ids des résultats : ${info.chapterIds.join(', ')}.
Valide avec node tools/build.mjs --check content/ch${u.nn} (le fichier flashcards.md est vérifié) ; corrige les ✖. Renvoie le nombre de cartes par tag.`

const vizPrompt = (u, info) => `${COMMON(u)}

TA MISSION : créer ${info.n} VISUALISATIONS INTERACTIVES pour ce chapitre (format § 5 de FORMAT.md), un fichier JavaScript par visualisation dans ${ROOT}/content/ch${u.nn}/viz/<id>.js, id de la forme viz-ch${u.nn}-<slug>.
Kit d'aide (lis-le : canvas HiDPI, contrôles, repère/plane, nombres complexes, domain coloring, rk4, drag, animate) : ${ROOT}/docs/js/vizkit.js
Modèle fonctionnel à imiter : ${ROOT}/content/_examples/viz/viz-ex-domain-coloring.js
Pistes (champ viz_opportunities de ch${u.nn}.json, et la liste de l'élève) : ${info.ideas}
Règles : une visualisation ne se justifie que si elle montre quelque chose que le texte ne montre pas ; elle doit être INTERACTIVE (curseurs, choix de fonction, glisser un point, animation avec bouton) ; description en Markdown+LaTeX dans String.raw\`...\` expliquant QUOI regarder et le lien avec le théorème ; champ related = ids des résultats liés (parmi : ${info.chapterIds.join(', ')}) ; pas de dépendance externe ; pas d'exception ; redessin rapide ; fonction de nettoyage retournée ; fonctionne à 360 px de large.
TEST OBLIGATOIRE : après écriture, exécute \`cd ${ROOT} && node tools/build.mjs && node tools/check_site.cjs --routes "#/viz/<id1>,#/viz/<id2>,..." --shots /tmp/claude-0/-home-user-FMA-revision/a354ab57-23c8-54ee-bc46-435d87e86fdf/scratchpad/shots-ch${u.nn}\` ; le JSON de sortie doit avoir problems=[] et bad=[] ; REGARDE chaque capture d'écran (outil Read sur le .png) et corrige jusqu'à ce que le rendu soit correct et lisible (axes, légendes, couleurs du thème via kit.theme()). Si build.mjs échoue à cause d'un fichier d'un autre agent (en cours d'écriture), relance une minute plus tard.
Renvoie la liste des visualisations (id, titre, ce qu'elle montre) et l'état des tests.`

const UNIT_SCHEMA = { type: 'object', properties: { label: { type: 'string' }, files: { type: 'array', items: { type: 'string' } }, n_files: { type: 'number' }, validated: { type: 'boolean' }, doubts: { type: 'array', items: { type: 'string' } }, notes: { type: 'string' } }, required: ['label', 'files', 'n_files', 'validated', 'doubts'] }

const units = args.units; const info = args.info // info: { chapterIds: {nn: [...]}, otherIds: [...], results: {id: {...}} , ideas: {nn: '...'} }
log(`Étape 2 : ${units.length} unités de rédaction`)
const results = await pipeline(units, u => {
  const chapterIds = info.chapterIds[u.nn] || []
  if (u.kind === 'theorems') return agent(theoremsPrompt(u, { items: u.ids.map(id => info.results[id]), chapterIds, otherIds: info.otherIds.filter(x => !x.startsWith('ch' + u.nn)) }), { label: u.label, phase: 'Rédaction', schema: UNIT_SCHEMA })
  if (u.kind === 'exercises') return agent(exercisesPrompt(u, { n: u.chapter === 8 ? 4 : 5, mix: u.chapter === 8 ? '1 exercice de niveau 1, 2 de niveau 2, 1 de niveau 3' : (u.variant === 0 ? '1 exercice de niveau 1, 2 de niveau 2, 2 de niveau 3' : '1 exercice de niveau 1, 1 de niveau 2, 2 de niveau 3, 1 de niveau 4 (problème long en 3-4 parties)'), chapterIds }), { label: u.label, phase: 'Rédaction', schema: UNIT_SCHEMA })
  if (u.kind === 'flashcards') return agent(flashcardsPrompt(u, { min: u.chapter === 8 ? 12 : 30, max: u.chapter === 8 ? 25 : 70, chapterIds }), { label: u.label, phase: 'Rédaction', schema: UNIT_SCHEMA })
  if (u.kind === 'viz') return agent(vizPrompt(u, { n: u.chapter === 8 ? '1 ou 2' : '3', ideas: info.ideas[u.nn] || '', chapterIds }), { label: u.label, phase: 'Rédaction', schema: UNIT_SCHEMA })
  return null
})
return results.map((r, i) => ({ unit: units[i].label, ok: !!(r && r.validated), n_files: r ? r.n_files : 0, doubts: r ? r.doubts : ['agent nul'] }))
