export const meta = {
  name: 'fma-etape3-verification',
  description: 'Étape 3 : vérification indépendante de chaque unité de contenu contre le poly (hypothèses exactes, preuves, corrigés recalculés, flashcards, visualisations) avec correction en place',
  phases: [{ title: 'Vérification', detail: 'un relecteur indépendant par unité ; corrige les erreurs dans les fichiers et les signale' }],
}
const ROOT = '/home/user/FMA-revision'
const SCRATCH = '/tmp/claude-0/-home-user-FMA-revision/a354ab57-23c8-54ee-bc46-435d87e86fdf/scratchpad'
const CH = {
  1: { roman: 'I', title: 'Fonctions holomorphes', file: 'sources/poly/ch01_holomorphes.txt' }, 2: { roman: 'II', title: 'Formule des résidus', file: 'sources/poly/ch02_residus.txt' },
  3: { roman: 'III', title: 'Suites, séries et produits', file: 'sources/poly/ch03_suites_series_produits.txt' }, 4: { roman: 'IV', title: 'Applications', file: 'sources/poly/ch04_applications.txt' },
  5: { roman: 'V', title: 'Calcul différentiel dans les E.V.N.', file: 'sources/poly/ch05_calcul_diff_evn.txt' }, 6: { roman: 'VI', title: 'Inversion locale et fonctions implicites', file: 'sources/poly/ch06_inversion_locale_implicites.txt' },
  7: { roman: 'VII', title: 'Equations différentielles', file: 'sources/poly/ch07_equations_differentielles.txt' }, 8: { roman: 'VIII', title: 'Calcul des variations', file: 'sources/poly/ch08_calcul_variations.txt' }, 9: { roman: 'IX', title: 'Sous-variétés', file: 'sources/poly/ch09_sous_varietes.txt' },
}
const COMMON = (u) => `Tu es un RELECTEUR MATHÉMATICIEN INDÉPENDANT (niveau enseignant-chercheur), tu n'as PAS rédigé le contenu que tu vérifies. Le site d'apprentissage concerne le cours FMA 41031 « Analyse complexe et calcul différentiel » (poly de D. Renard, École polytechnique, 2026) ; l'élève vise A+ et part de presque zéro : TOUTE erreur mathématique (hypothèse manquante, preuve fausse, corrigé faux, contre-exemple qui n'en est pas un, flashcard inexacte) est grave. Ton rôle : trouver ces erreurs, les CORRIGER directement dans les fichiers, et les signaler.
Chapitre : ${CH[u.chapter].roman}. ${CH[u.chapter].title}. Texte du poly : ${ROOT}/${CH[u.chapter].file} (pages imprimées dans les marqueurs). Carte vérifiée du chapitre (énoncés exacts) : ${ROOT}/content/map/ch${u.nn}.json. Carte globale : ${ROOT}/content/map/map.json. Format imposé : ${ROOT}/content/FORMAT.md.
Après tes corrections : \`cd ${ROOT} && node tools/build.mjs --check content/ch${u.nn}/<sous-dossier>\` doit ne donner aucune erreur ✖. Ne touche qu'aux fichiers de ton unité. Conserve le format (frontmatter, noms de sections). Outils numériques disponibles : python3 -I avec numpy, sympy, mpmath, scipy.
ATTENTION EXTRACTION PDF : le texte extrait perd parfois des barres de conjugaison ($\\bar z$, $\\overline{f}$), des barres d'adhérence ($\\bar D$) et des accents ; en cas de doute sur un énoncé ou une preuve, regarde la page du PDF en image : « pdftoppm -f P -l P -r 110 -png /home/user/FMA-revision/Poly2026-FMA41031.pdf /tmp/claude-0/-home-user-FMA-revision/a354ab57-23c8-54ee-bc46-435d87e86fdf/scratchpad/page » avec P = page imprimée + 3, puis Read du .png produit.`
const theoremsPrompt = (u) => `${COMMON(u)}

UNITÉ À VÉRIFIER : les fiches de cours ${u.ids.map(id => `${ROOT}/content/ch${u.nn}/theorems/${id}.md`).join(', ')}.
Pour CHAQUE fiche, dans l'ordre, en relisant le poly :
1. ÉNONCÉ : identique au poly (toutes les hypothèses : ouvert, connexe, borné, classe C^k, complet/Banach, compacité, etc.), même conclusion, mêmes notations, référence (ref, page) exacte. Toute hypothèse manquante ou ajoutée = erreur grave à corriger.
2. HYPOTHÈSES : chaque « Si on la retire » contient un contre-exemple EXPLICITE que tu VÉRIFIES (calcul fait) ; s'il est faux ou flou, remplace-le par un contre-exemple correct ; si l'hypothèse n'est pas nécessaire, la fiche doit le dire honnêtement.
3. PREUVE : vérifie chaque étape contre la preuve du poly ; toute lacune, inversion de quantificateurs, résultat invoqué qui ne s'applique pas, ou argument circulaire est corrigé. Les [[id]] cités doivent correspondre aux bons résultats (ids dans map.json).
4. PREUVE À TROUS : cohérente avec la preuve ; les trous sont des étapes clés (pas des banalités) ; balises <trou> bien fermées, en ligne.
5. EXEMPLES et PIÈGES : calculs refaits ; affirmations vérifiées ; rien de faux.
6. INTUITION : correcte (pas d'image mentale trompeuse) ; termes définis ou liés.
7. FRONTMATTER : type, ref, page, importance (cohérente avec la carte), depends (ids existants dans map.json ; ajoute ceux que la preuve utilise réellement, retire les autres).
8. FORMAT : build --check sans erreur.
Corrige en place (outil Edit). Renvoie un rapport : pour chaque erreur trouvée : fichier, section, gravité (grave = énoncé/preuve/corrigé faux ; moyen = imprécision qui pourrait induire en erreur ; mineur = forme), description courte, corrigée ou non. Si une fiche manque (fichier absent), signale-le dans notes sans la rédiger.`
const exercisesPrompt = (u) => `${COMMON(u)}

UNITÉ À VÉRIFIER : les exercices du dossier ${ROOT}/content/ch${u.nn}/exercises/ dont l'id commence par ex-ch${u.nn}- et dont le slug commence par une lettre ${u.variant === 0 ? 'de a à m' : 'de n à z'} (liste-les avec ls ; les autres sont vérifiés par un autre relecteur).
Pour CHAQUE exercice, PROTOCOLE STRICT :
(a) Lis SEULEMENT la section « Énoncé » (sed -n pour t'arrêter avant « ## Indices »). Résous l'exercice entièrement toi-même, par écrit, dans ${SCRATCH}/verif-${u.nn}-${u.variant}-<id>.md (brouillon), en vérifiant numériquement avec python3 -I (sympy/mpmath/numpy) chaque résultat calculable (intégrales, résidus, dérivées, points fixes, valeurs propres, solutions d'EDO...).
(b) Lis ensuite le corrigé et compare : résultats finaux, hypothèses vérifiées explicitement, rigueur des justifications, cohérence de l'énoncé (bien posé, pas d'ambiguïté, pas d'erreur de signe ou de constante), progressivité des indices (ne pas donner la solution à l'indice 1), cohérence de difficulty/time avec ${ROOT}/content/map/calibration.md, existence des ids de tools dans map.json, honnêteté de source, et absence de recopie des annales (liste dans calibration.md).
(c) Corrige en place toute erreur (énoncé, corrigé, indices, frontmatter). Si l'exercice est irrécupérable (énoncé faux dans son principe), réécris-le proprement en conservant l'id et le thème.
Renvoie le rapport (par exercice : ton résultat vs celui du corrigé, erreurs trouvées avec gravité, corrections faites, confiance finale).`
const flashcardsPrompt = (u) => `${COMMON(u)}

UNITÉ À VÉRIFIER : ${ROOT}/content/ch${u.nn}/flashcards.md.
Pour CHAQUE carte : la réponse est-elle EXACTE (énoncé complet avec toutes les hypothèses, formule juste, notation correcte, référence poly correcte) ? Compare au poly et à ch${u.nn}.json. Corrige en place toute inexactitude, précise les réponses ambiguës, supprime les cartes fausses irrécupérables, ajoute une carte tags=enonce pour tout résultat d'importance ≥ 2 de la carte qui n'en a pas (ids dans ch${u.nn}.json). Vérifie que ref= pointe vers le bon id. Format : node tools/build.mjs --check content/ch${u.nn} sans ✖.
Renvoie : nombre de cartes vérifiées, liste des corrections (id de carte, nature), cartes ajoutées/supprimées.`
const vizPrompt = (u) => `${COMMON(u)}

UNITÉ À VÉRIFIER : les visualisations ${ROOT}/content/ch${u.nn}/viz/*.js (kit : ${ROOT}/docs/js/vizkit.js ; format § 5 de FORMAT.md).
1. Lis le code de chaque visualisation : les formules implémentées sont-elles mathématiquement justes (fonction tracée, différentielle, résidu, champ de vecteurs, intégration, paramétrage...) ? La description (texte Markdown) dit-elle quelque chose de faux ? Le champ related pointe-t-il vers des ids existants (map.json) ?
2. Exécute : \`cd ${ROOT} && node tools/build.mjs && node tools/check_site.cjs --routes "#/viz/<id1>,#/viz/<id2>,..." --shots ${SCRATCH}/verif-viz-ch${u.nn}\` ; problems et bad doivent être vides. REGARDE chaque capture (Read sur le .png) : rendu lisible, axes et légendes présents, couleurs du thème, pas de zone vide ni de texte qui déborde ; teste mentalement les contrôles (lis le code des handlers).
3. Corrige en place (bugs, formules, lisibilité, nettoyage des listeners), relance le test jusqu'à ce qu'il passe. Si build.mjs échoue à cause d'un fichier d'un autre dossier en cours d'écriture, attends une minute et relance.
Renvoie le rapport : par visualisation, erreurs trouvées (mathématiques / techniques / lisibilité), corrections, état final du test.`
const SCHEMA = { type: 'object', properties: { label: { type: 'string' }, files_checked: { type: 'number' }, errors: { type: 'array', items: { type: 'object', properties: { file: { type: 'string' }, where: { type: 'string' }, severity: { type: 'string' }, description: { type: 'string' }, fixed: { type: 'boolean' } }, required: ['file', 'severity', 'description', 'fixed'] } }, check_passed: { type: 'boolean' }, notes: { type: 'string' } }, required: ['label', 'files_checked', 'errors', 'check_passed'] }
const units = args.units
log(`Étape 3 : ${units.length} unités à vérifier`)
const results = await pipeline(units, u => {
  const p = u.kind === 'theorems' ? theoremsPrompt(u) : u.kind === 'exercises' ? exercisesPrompt(u) : u.kind === 'flashcards' ? flashcardsPrompt(u) : vizPrompt(u)
  return agent(p, { label: 'verif:' + u.label, phase: 'Vérification', schema: SCHEMA, effort: 'high' })
})
return results.map((r, i) => ({ unit: units[i].label, ok: !!(r && r.check_passed), n_errors: r ? r.errors.length : -1, grave: r ? r.errors.filter(e => /grave/i.test(e.severity)).length : -1, unfixed: r ? r.errors.filter(e => !e.fixed).map(e => e.file + ': ' + e.description) : ['agent nul'], notes: r ? r.notes : '' }))
