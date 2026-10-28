export const meta = {
  name: 'fma-etape1-carte-split',
  description: 'Étape 1 : lecture du poly chapitre par chapitre → carte du cours (JSON), notations, calibration des annales, puis vérification par agents séparés',
  phases: [
    { title: 'Lecture et carte', detail: 'un agent par chapitre lit le poly et écrit content/map/chNN.json ; un agent calibre sur annales + TD' },
    { title: 'Vérification carte', detail: 'un agent séparé par chapitre vérifie exhaustivité, refs, pages, dépendances et corrige le JSON' },
  ],
}
const MODEL_OPTS = (typeof args === "object" && args && args.model) ? { model: args.model } : {}

const ROOT = '/home/user/FMA-revision'
const CHAPTERS = [
  { nn: '01', roman: 'I',    title: 'Fonctions holomorphes', file: 'sources/poly/ch01_holomorphes.txt', extra: 'sources/poly/intro_partie1.txt', printed: '5-34' },
  { nn: '02', roman: 'II',   title: 'Formule des résidus', file: 'sources/poly/ch02_residus.txt', extra: '', printed: '35-58' },
  { nn: '03', roman: 'III',  title: 'Suites, séries et produits', file: 'sources/poly/ch03_suites_series_produits.txt', extra: '', printed: '59-74' },
  { nn: '04', roman: 'IV',   title: 'Applications', file: 'sources/poly/ch04_applications.txt', extra: '', printed: '75-88' },
  { nn: '05', roman: 'V',    title: 'Calcul différentiel dans les E.V.N.', file: 'sources/poly/ch05_calcul_diff_evn.txt', extra: 'sources/poly/intro_partie2.txt', printed: '93-114' },
  { nn: '06', roman: 'VI',   title: 'Inversion locale et fonctions implicites', file: 'sources/poly/ch06_inversion_locale_implicites.txt', extra: 'sources/td/Lemme_de_Morse.txt', printed: '115-126' },
  { nn: '07', roman: 'VII',  title: 'Equations différentielles', file: 'sources/poly/ch07_equations_differentielles.txt', extra: '', printed: '127-142' },
  { nn: '08', roman: 'VIII', title: 'Calcul des variations', file: 'sources/poly/ch08_calcul_variations.txt', extra: '', printed: '143-146' },
  { nn: '09', roman: 'IX',   title: 'Sous-variétés', file: 'sources/poly/ch09_sous_varietes.txt', extra: '', printed: '147-178' },
]

const JSON_SPEC = `
Structure EXACTE du fichier JSON à produire (UTF-8, JSON valide, pas de commentaires) :
{
  "chapter": { "num": <entier 1..9>, "nn": "<NN>", "roman": "<I..IX>", "title": "<titre du poly>",
               "printed_pages": [debut, fin], "summary": "<5 à 10 phrases : de quoi parle le chapitre, quel est le fil logique, quels sont les 3-5 résultats centraux>",
               "sections": [ { "num": "I.1", "title": "...", "page": <page imprimée> }, ... ] },
  "results": [
    { "id": "chNN-slug-court",                 // minuscules/chiffres/tirets, unique, parlant (ex: ch01-liouville, ch01-cauchy-formule-disque)
      "kind": "definition|lemma|proposition|theorem|corollary|remark|example|formula",
      "ref": "Théorème I.6.1",                 // numérotation EXACTE du poly (Définition I.1.1, Lemme I.2.1, Proposition I.2.3, Corollaire I.2.4, Remarque I.2.2, Exemple ..., ou "Formule (I.2.4)" pour une formule numérotée importante ; si un résultat n'est pas numéroté dans le poly : "non numéroté, section I.5, p. 16")
      "title": "<nom usuel ou titre descriptif court>",
      "page": <page imprimée où commence l'énoncé>,
      "statement": "<énoncé COMPLET et EXACT en Markdown+LaTeX ($...$), toutes les hypothèses, mêmes notations que le poly>",
      "hypotheses": ["<hypothèse 1 en quelques mots>", "..."],
      "depends_on": ["Lemme I.2.1", "Théorème V.4.1"],   // refs du poly (numérotation exacte) des résultats EFFECTIVEMENT utilisés dans la preuve, y compris d'autres chapitres ; [] si aucun
      "used_by_hint": "<facultatif : où ce résultat sert ensuite>",
      "importance": 3,                         // 3 = central / examinable / à savoir énoncer par cœur ; 2 = important ; 1 = technique ou de confort
      "proof_in_poly": "full|sketch|none|exercise",
      "proof_length": "short|medium|long",
      "counterexample_hints": ["<idée de contre-exemple quand on retire telle hypothèse, si évident>"],
      "viz_hint": "<facultatif : ce qu'une visualisation montrerait>"
    }
  ],
  "notations": [ { "symbol": "$D(z_0,r)$", "meaning": "disque ouvert de centre $z_0$ et de rayon $r$", "page": 5 } ],
  "poly_exercises": [ { "ref": "Exercice II.7.1", "page": 50, "topic": "...", "statement_short": "<1-2 phrases>", "chapters_involved": [2] } ],
  "pitfalls": [ "<piège ou erreur classique que le chapitre met en garde, ou évident pour un enseignant>" ],
  "viz_opportunities": [ { "title": "...", "shows": "<ce qu'on verrait et pourquoi ça aide>", "results": ["ref1", "ref2"] } ],
  "proof_techniques": [ "<technique récurrente du chapitre : ex. 'rétraction du cercle', 'point fixe contractant', 'argument de compacité', ...>" ]
}`

const mapPrompt = (c) => `Tu es un mathématicien expert (niveau agrégation / enseignant à l'École polytechnique) chargé de cartographier le chapitre ${c.roman} (« ${c.title} », pages imprimées ${c.printed}) du polycopié FMA 41031 « Analyse complexe et calcul différentiel » (D. Renard, 2026).

TA MISSION : lire INTÉGRALEMENT le texte du chapitre et produire la carte du chapitre au format JSON décrit plus bas, dans le fichier ${ROOT}/content/map/ch${c.nn}.json.

FICHIERS À LIRE (texte extrait du PDF ; les marqueurs « [PDF page N | page imprimée M] » donnent la pagination ; utilise TOUJOURS la page imprimée) :
- ${ROOT}/${c.file}   (lis-le EN ENTIER, par tranches avec sed -n 'a,bp' ou cat ; il fait plusieurs dizaines de milliers de caractères : ne saute rien)
${c.extra ? `- ${ROOT}/${c.extra}   (complément à lire aussi)` : ''}
- ${ROOT}/sources/poly/index.txt   (index du poly : utile pour vérifier les termes et pages)
- ${ROOT}/content/FORMAT.md   (conventions d'écriture du site : ids, LaTeX, notations ; lis au moins les sections 0 et 6)

EXIGENCES :
1. EXHAUSTIVITÉ : chaque énoncé numéroté du chapitre (Définition, Lemme, Proposition, Théorème, Corollaire) doit avoir une entrée dans "results". Commence par faire \`grep -nE "^\\s*(Définition|Lemme|Proposition|Théorème|Corollaire|Remarque|Exemple)\\s+[IVX]+\\.[0-9]" ${ROOT}/${c.file}\` pour en avoir la liste, puis lis le texte autour de chacun. Ajoute aussi les Remarques/Exemples/formules numérotées qui contiennent un résultat réutilisé ensuite (kind remark/example/formula). Les définitions importantes (ex. holomorphe, différentiable, sous-variété, résidu, indice, point critique, flot...) doivent y être (kind definition).
2. EXACTITUDE : "statement" = l'énoncé exact (toutes les hypothèses, pas de simplification). "ref" et "page" exacts. Les notations du poly sont conservées.
3. DÉPENDANCES : pour chaque résultat, relis sa preuve et liste dans "depends_on" les refs des résultats effectivement invoqués (dans ce chapitre ou dans d'autres : le poly cite ses numéros). Pas de dépendance devinée.
4. IMPORTANCE : 3 pour les résultats centraux à connaître par cœur en examen (ex. formule de Cauchy, Liouville, principe du maximum, formule des résidus, Rouché, inversion locale, fonctions implicites, Cauchy-Lipschitz, caractérisations des sous-variétés...), 2 pour les résultats importants, 1 pour les lemmes techniques. Sois exigeant : ne mets pas 3 partout.
5. "notations" : toutes les notations et symboles introduits dans le chapitre (avec la page).
6. "poly_exercises" : les exercices du chapitre (sections « Exercices » et exercices intercalés dans le texte), avec un résumé d'une ou deux phrases.
7. Rédige "summary", "pitfalls", "proof_techniques", "viz_opportunities" avec soin : ils serviront aux rédacteurs des fiches.

${JSON_SPEC}

PROCÉDURE : lis tout ; rédige le JSON (écris-le avec cat > fichier <<'EOF' ... EOF ou l'outil Write) ; VALIDE-LE avec \`python3 -I -c "import json;d=json.load(open('${ROOT}/content/map/ch${c.nn}.json'));print(len(d['results']),'results')"\` et corrige jusqu'à validation. Attention aux backslashes LaTeX dans les chaînes JSON : chaque \\ doit être doublé (\\\\alpha). Vérifie que les ids sont uniques et préfixés ch${c.nn}-.

Quand c'est fait, renvoie un résumé structuré (nombre de résultats, de notations, difficultés rencontrées).`

const RESULT_SCHEMA = {
  type: 'object',
  properties: {
    chapter: { type: 'number' },
    file: { type: 'string' },
    n_results: { type: 'number' },
    n_definitions: { type: 'number' },
    n_importance3: { type: 'number' },
    n_notations: { type: 'number' },
    n_poly_exercises: { type: 'number' },
    json_valid: { type: 'boolean' },
    notes: { type: 'string' },
  },
  required: ['chapter', 'file', 'n_results', 'json_valid', 'notes'],
}

const verifyPrompt = (c, prev) => `Tu es un relecteur mathématicien INDÉPENDANT (tu n'as PAS produit la carte que tu vérifies). Un autre agent a cartographié le chapitre ${c.roman} (« ${c.title} », pages imprimées ${c.printed}) du poly FMA 41031 dans le fichier ${ROOT}/content/map/ch${c.nn}.json. Son compte-rendu : ${JSON.stringify(prev && prev.notes || '')} (${prev ? prev.n_results : '?'} résultats annoncés).

TA MISSION : vérifier cette carte CONTRE LE TEXTE DU POLY et la corriger directement dans le fichier.

FICHIERS :
- Texte du chapitre : ${ROOT}/${c.file}  (lis-le EN ENTIER ; marqueurs « [PDF page N | page imprimée M] » → utilise la page imprimée)
${c.extra ? `- Complément : ${ROOT}/${c.extra}` : ''}
- Index du poly : ${ROOT}/sources/poly/index.txt
- Carte à vérifier : ${ROOT}/content/map/ch${c.nn}.json
- Spécification de la structure JSON attendue : identique à celle ci-dessous.

VÉRIFICATIONS OBLIGATOIRES, dans l'ordre :
1. EXHAUSTIVITÉ : établis la liste complète des énoncés numérotés du texte (\`grep -nE "^\\s*(Définition|Lemme|Proposition|Théorème|Corollaire)\\s+[IVX]+\\.[0-9]" ...\` puis relis car l'extraction PDF peut casser des lignes : cherche aussi \`grep -n "Théorème" ...\`). Chaque énoncé numéroté doit avoir une entrée "results" ; ajoute ce qui manque (avec énoncé exact, page, dépendances). Vérifie que les définitions clés et les formules numérotées importantes y sont.
2. EXACTITUDE des "ref", "page", "title", "statement" (énoncé exact : toutes les hypothèses, bonne conclusion, notations du poly). Corrige toute approximation.
3. DÉPENDANCES : pour chaque résultat, relis la preuve dans le poly et vérifie "depends_on" (résultats effectivement invoqués, y compris d'autres chapitres). Supprime les dépendances inventées, ajoute celles qui manquent.
4. IMPORTANCE : cohérente (3 = central/examinable ; 2 = important ; 1 = technique). Corrige si besoin.
5. Cohérence des ids (uniques, préfixe ch${c.nn}-), JSON valide.
6. Notations et exercices du poly : complète si des oublis évidents.

${JSON_SPEC}

Écris le fichier corrigé (même chemin), VALIDE-LE avec python3 -I -c "import json;json.load(open('...'))". Renvoie un journal précis des modifications (ajouts, corrections, suppressions) et le nombre final de résultats.`

const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    chapter: { type: 'number' },
    n_results_final: { type: 'number' },
    n_added: { type: 'number' },
    n_fixed: { type: 'number' },
    n_removed: { type: 'number' },
    changes: { type: 'array', items: { type: 'string' } },
    remaining_doubts: { type: 'array', items: { type: 'string' } },
    json_valid: { type: 'boolean' },
  },
  required: ['chapter', 'n_results_final', 'n_added', 'n_fixed', 'n_removed', 'changes', 'json_valid'],
}

const calibrationPrompt = `Tu es un enseignant de l'École polytechnique chargé de CALIBRER (et seulement calibrer) le niveau de l'examen du cours FMA 41031 « Analyse complexe et calcul différentiel ». L'élève a été clair : les sujets changent complètement d'une année sur l'autre ; les annales servent UNIQUEMENT à calibrer difficulté, longueur et style ; il ne faut PAS en reprendre le contenu.

FICHIERS À LIRE INTÉGRALEMENT :
- ${ROOT}/sources/poly/annexeA_sujets_examen.txt  (annexe A du poly : contrôles classants 2022, 2023, 2024 avec corrigés, et problèmes de DM ; très long, lis-le par tranches)
- ${ROOT}/sources/td/TD1_ANA_COMP_2023__1_.txt, ${ROOT}/sources/td/TD2_ANA_COMP_2023__1_.txt, ${ROOT}/sources/td/TD_CAL_DIF2022.txt, ${ROOT}/sources/td/TD_Equations_Differentielles.txt, ${ROOT}/sources/td/Lemme_de_Morse.txt  (les PC/TD)

PRODUIS le fichier ${ROOT}/content/map/calibration.md (Markdown, français) avec :
1. **Format de l'examen** : pour chaque contrôle (2022, 2023, 2024) : nombre d'exercices, nombre total de questions, chapitres mobilisés PAR EXERCICE (avec le mélange analyse complexe / calcul différentiel), part de questions « cours » vs « recherche », longueur des énoncés, difficulté estimée de chaque exercice sur l'échelle du site (1 = application directe, 2 = standard, 3 = difficile, 4 = problème long), temps estimé par exercice, durée totale si indiquée.
2. **Ce qui est typique du style** : comment sont formulées les questions, comment s'enchaînent-elles (progressivité), quel degré de rédaction attend le corrigé, quelles vérifications d'hypothèses le corrigé fait explicitement, quels outils reviennent le plus souvent (en termes de THÉORÈMES du cours, pas de contenu d'exercice).
3. **Guide de calibration pour les rédacteurs d'exercices du site** : correspondance entre difficulté 1-4 et ce qu'on trouve en contrôle ; longueur et nombre de questions cibles pour un exercice de chaque niveau ; temps recommandé ; proportion souhaitable de problèmes mélangeant analyse complexe et calcul différentiel ; types d'énoncés à privilégier pour entraîner à « attaquer un problème jamais vu » (énoncés ouverts, « montrer que », calculs guidés...).
4. **Liste des thèmes/contenus déjà pris par les annales** (par exercice, 1 ligne chacun), étiquetés « À NE PAS RÉUTILISER tel quel » — pour que les rédacteurs évitent de les recopier (ils peuvent s'en éloigner franchement).
5. **Catalogue des exercices de PC/TD** : pour chaque TD, la liste des exercices (numéro, titre/thème, chapitre(s), difficulté 1-4, 1 phrase) afin que les rédacteurs puissent les citer comme source « PC » et éviter de les dupliquer sans le dire.
6. **Problèmes de DM de l'annexe** : même traitement (thème, chapitres, difficulté).

Sois factuel et précis. Renvoie ensuite un résumé court.`

const CALIB_SCHEMA = {
  type: 'object',
  properties: {
    file: { type: 'string' },
    exams_found: { type: 'array', items: { type: 'string' } },
    exercises_per_exam: { type: 'array', items: { type: 'number' } },
    mixed_share_estimate: { type: 'string' },
    notes: { type: 'string' },
  },
  required: ['file', 'exams_found', 'notes'],
}

log('Étape 1 : cartographie des 9 chapitres + calibration, puis vérification indépendante par chapitre')


const SEL = (args && args.chapters) ? CHAPTERS.filter(c => args.chapters.includes(c.nn)) : CHAPTERS
log('Chapitres de ce workflow : ' + SEL.map(c => c.nn).join(', '))
const results = await pipeline(
  SEL,
  c => agent(mapPrompt(c), { label: `carte:ch${c.nn}`, phase: 'Lecture et carte', schema: RESULT_SCHEMA }),
  (prev, c) => agent(verifyPrompt(c, prev), { label: `verif:ch${c.nn}`, phase: 'Vérification carte', schema: VERIFY_SCHEMA })
    .then(v => ({ chapter: c.nn, map: prev, verify: v })),
)

return { chapters: results }
