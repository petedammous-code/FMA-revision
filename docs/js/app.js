/* app.js — routeur et modes du site FMA */
(function () {
  const C = window.FMA_CONTENT || { chapters: [], results: [], theorems: {}, exercises: {}, reflexes: {}, flashcards: [], viz: [] };
  const R = FMA.render, esc = FMA.escapeHtml;
  const main = document.getElementById('main'), sidebar = document.getElementById('sidebar');
  const KIND_LABEL = { theorem: 'Théorème', proposition: 'Proposition', lemma: 'Lemme', corollary: 'Corollaire', definition: 'Définition', remark: 'Remarque', example: 'Exemple', formula: 'Formule' };
  const DIFF_LABEL = { 1: 'application directe', 2: 'standard', 3: 'difficile', 4: 'problème long' };

  // ---------- storage ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem('fma:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('fma:' + k, JSON.stringify(v)); } catch (e) { } },
  };
  const P = store.get('progress', {});
  P.read = P.read || {}; P.ex = P.ex || {}; P.fc = P.fc || {}; P.rfx = P.rfx || {}; P.history = P.history || []; P.trous = P.trous || {};
  const save = () => store.set('progress', P);
  const now = () => Date.now();

  // ---------- data indexes ----------
  const chapters = (C.chapters || []).slice().sort((a, b) => a.num - b.num);
  const resultsByChapter = {}; for (const r of C.results || []) (resultsByChapter[r.chapter] = resultsByChapter[r.chapter] || []).push(r);
  for (const k in resultsByChapter) resultsByChapter[k].sort((a, b) => (a.page - b.page) || (a.order - b.order));
  const resultById = Object.fromEntries((C.results || []).map(r => [r.id, r]));
  const theoremList = Object.values(C.theorems).sort((a, b) => (a.chapter - b.chapter) || ((a.page || 0) - (b.page || 0)) || ((resultById[a.id] || {}).order || 0) - ((resultById[b.id] || {}).order || 0));
  const courseOrder = theoremList.map(t => t.id); // parcours « Cours »
  const usedBy = {}; for (const t of theoremList) for (const d of (t.depends || [])) (usedBy[d] = usedBy[d] || []).push(t.id);
  for (const r of C.results || []) for (const d of (r.depends_ids || [])) if (!(usedBy[d] || []).includes(r.id)) (usedBy[d] = usedBy[d] || []).push(r.id);
  const exList = Object.values(C.exercises); const rfxList = Object.values(C.reflexes);
  const exByTool = {}; for (const e of exList) for (const t of (e.tools || [])) (exByTool[t] = exByTool[t] || []).push(e.id);
  const fcByRef = {}; for (const f of C.flashcards) if (f.ref) (fcByRef[f.ref] = fcByRef[f.ref] || []).push(f);
  const vizByChapter = {}; for (const v of C.viz) (vizByChapter[v.chapter] = vizByChapter[v.chapter] || []).push(v);
  const chapterOf = n => chapters.find(c => c.num === n) || { num: n, nn: String(n).padStart(2, '0'), title: 'Chapitre ' + n, roman: '' };
  const chTitle = n => { const c = chapterOf(n); return `${c.roman ? c.roman + '. ' : ''}${c.title}`; };

  // ---------- utils ----------
  const h = (tag, attrs = {}, ...kids) => { const el = document.createElement(tag); for (const [k, v] of Object.entries(attrs)) { if (k === 'class') el.className = v; else if (k === 'html') el.innerHTML = v; else if (k.startsWith('on')) el.addEventListener(k.slice(2), v); else if (v != null) el.setAttribute(k, v); } for (const k of kids.flat()) if (k != null) el.append(k.nodeType ? k : document.createTextNode(String(k))); return el; };
  const md = (text, opts) => { const d = document.createElement('div'); FMA.renderInto(d, text, opts); return d; };
  const stars = n => `<span class="stars" title="importance ${n}/3">${'★'.repeat(n || 0)}${'☆'.repeat(3 - (n || 0))}</span>`;
  const meta = (...items) => { const el = h('div', { class: 'meta' }); const its = items.flat().filter(x => x != null && x !== ''); its.forEach((x, i) => { if (i) el.append(' · '); el.append(x.nodeType ? x : document.createTextNode(String(x))); }); return el; };
  const badge = (cls, text) => `<span class="badge ${cls}">${esc(text)}</span>`;
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };
  const fmtTime = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  const fmtDate = t => new Date(t).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });
  function collapsible(title, bodyEl, { open = false, hint = '' } = {}) {
    const card = h('div', { class: 'card collapsible' + (open ? ' open' : '') });
    const head = h('div', { class: 'card-head' }, h('span', { class: 'chev' }, '▶'), h('h2', {}, title), hint ? h('span', { class: 'hint' }, hint) : null);
    head.addEventListener('click', () => card.classList.toggle('open'));
    const body = h('div', { class: 'card-body' }, bodyEl); card.append(head, body); return card;
  }
  function setPage(title, ...els) { FMA.unmountAllViz(); main.innerHTML = ''; const mm = h('div', { class: 'modes-mobile' }, ...[['cours', 'Cours'], ['reflexes', 'Réflexes'], ['probleme', 'Problème inconnu'], ['flashcards', 'Flashcards']].map(([r, l]) => h('a', { href: '#/' + r }, l))); main.append(mm, ...els.flat().filter(Boolean)); document.title = (title ? FMA.plainMath(title) + ' — ' : '') + 'FMA'; main.querySelectorAll('.viz-slot').forEach(s => FMA.mountViz(s.dataset.viz, s)); FMA.fixStrayMath(main); window.scrollTo(0, 0); }

  // ---------- sidebar ----------
  function renderSidebar(route) {
    const parts = []; const active = (hash) => location.hash === hash ? ' class="active"' : '';
    parts.push(`<h4>Modes</h4><a href="#/cours"${active('#/cours')}>📘 Cours</a><a href="#/reflexes"${active('#/reflexes')}>⚡ Réflexes</a><a href="#/probleme"${active('#/probleme')}>🎲 Problème inconnu</a><a href="#/flashcards"${active('#/flashcards')}>🃏 Flashcards</a>`);
    parts.push(`<h4>Outils</h4><a href="#/carte"${active('#/carte')}>🕸 Carte des dépendances</a><a href="#/notations"${active('#/notations')}>∑ Notations</a><a href="#/progression"${active('#/progression')}>📈 Progression</a><a href="#/apropos"${active('#/apropos')}>ℹ️ Méthode & calibration</a>`);
    parts.push('<h4>Chapitres</h4>');
    for (const c of chapters) {
      const ths = theoremList.filter(t => t.chapter === c.num); const read = ths.filter(t => P.read[t.id]).length;
      parts.push(`<a href="#/cours/ch${c.nn}"${active('#/cours/ch' + c.nn)}><b>${c.roman}</b> ${esc(c.title)} <span class="muted" style="color:var(--muted);font-size:.8em">${read}/${ths.length}</span></a>`);
      if (route && route.chapter === c.num) parts.push('<div class="sub">' + ths.map(t => `<a href="#/fiche/${t.id}" class="${location.hash === '#/fiche/' + t.id ? 'active' : ''}${P.read[t.id] ? ' done' : ''}">${esc(t.title)}</a>`).join('') + '</div>');
    }
    sidebar.innerHTML = parts.join(''); FMA.fixStrayMath(sidebar);
    document.querySelectorAll('.modes a').forEach(a => a.classList.toggle('active', location.hash.startsWith('#/' + a.dataset.route)));
  }

  // ---------- pages ----------
  function pageHome() {
    const nRead = Object.keys(P.read).filter(id => C.theorems[id]).length, nTh = theoremList.length;
    const due = dueCards().length; const next = courseOrder.find(id => !P.read[id]);
    const hist = P.history.slice(-5).reverse();
    setPage('', h('h1', {}, 'Analyse complexe & calcul différentiel'), h('p', { class: 'notice' }, `Site d'entraînement construit sur le poly FMA 41031. Ordre conseillé : apprendre le cours chapitre par chapitre (fiches, preuves à trous, visualisations), puis entraîner les réflexes, puis se confronter à des problèmes inconnus chronométrés. Les flashcards se font chaque jour.`),
      h('div', { class: 'grid' },
        h('a', { class: 'tile', href: next ? '#/fiche/' + next : '#/cours' }, h('h3', {}, '📘 Cours'), h('div', { class: 'big' }, `${nRead}/${nTh}`), h('p', {}, next ? `Reprendre : ${C.theorems[next].title}` : 'Tout le cours est lu — révise par la carte.')),
        h('a', { class: 'tile', href: '#/reflexes' }, h('h3', {}, '⚡ Réflexes'), h('div', { class: 'big' }, `${rfxList.length}`), h('p', {}, `situations → quel outil ? ${Object.keys(P.rfx).length} travaillées`)),
        h('a', { class: 'tile', href: '#/probleme' }, h('h3', {}, '🎲 Problème inconnu'), h('div', { class: 'big' }, `${exList.length}`), h('p', {}, `exercices de toutes sources, chapitre caché, chronométrés. ${Object.keys(P.ex).length} faits`)),
        h('a', { class: 'tile', href: '#/flashcards' }, h('h3', {}, '🃏 Flashcards'), h('div', { class: 'big' }, `${due}`), h('p', {}, `à revoir aujourd'hui sur ${C.flashcards.length} cartes`)),
      ),
      h('h2', {}, 'Parcours du cours'),
      h('div', { class: 'card' }, h('ol', { class: 'toc' }, ...chapters.map(c => { const ths = theoremList.filter(t => t.chapter === c.num); const read = ths.filter(t => P.read[t.id]).length; return h('li', {}, h('a', { href: '#/cours/ch' + c.nn }, `${c.roman}. ${c.title}`), ` `, h('span', { class: 'notice' }, `${read}/${ths.length} fiches`)); }))),
      hist.length ? h('div', {}, h('h2', {}, 'Derniers exercices'), h('div', { class: 'card' }, h('ul', { class: 'list' }, ...hist.map(x => { const e = C.exercises[x.id]; return h('li', {}, h('a', { class: 'title', href: '#/probleme/' + x.id }, e ? e.title : x.id), h('span', { class: 'muted' }, `${fmtDate(x.date)} · ${fmtTime(x.seconds || 0)} · ${x.result === 'ok' ? '✅' : x.result === 'mid' ? '🟠' : '❌'}`)); })))) : null,
    );
  }
  function pageCours() {
    setPage('Cours', h('h1', {}, 'Cours'), h('p', { class: 'notice' }, "Dans l'ordre logique du poly : d'abord l'analyse complexe (chapitres I à IV), puis le calcul différentiel (V à IX). Chaque fiche : intuition → énoncé exact → rôle de chaque hypothèse (avec contre-exemple) → idée de preuve → preuve complète → preuve à trous → exemples → pièges."),
      ...chapters.map(c => { const ths = theoremList.filter(t => t.chapter === c.num); const read = ths.filter(t => P.read[t.id]).length; const pct = ths.length ? Math.round(100 * read / ths.length) : 0;
        return h('a', { class: 'tile', href: '#/cours/ch' + c.nn, style: 'margin:10px 0' }, h('div', { class: 'chapter-head' }, h('span', { class: 'num' }, c.roman), h('h3', {}, c.title)), h('p', {}, (c.summary || '').split(/(?<=\.)\s/)[0] || ''), h('div', { class: 'meta' }, `${ths.length} fiches · ${(vizByChapter[c.num] || []).length} visualisations · ${exList.filter(e => (e.chapters || []).includes(c.num)).length} exercices · ${C.flashcards.filter(f => f.chapter === c.num).length} flashcards`), h('div', { class: 'progress-bar' }, h('span', { style: `width:${pct}%` }))); }));
  }
  function pageChapter(nn) {
    const c = chapters.find(x => x.nn === nn); if (!c) return pageNotFound();
    const ths = theoremList.filter(t => t.chapter === c.num); const results = resultsByChapter[c.num] || [];
    const secs = (c.sections || []).slice().sort((a, b) => a.page - b.page);
    const sectionOf = r => { let s = null; for (const x of secs) if (x.page <= (r.page || 0)) s = x; return s; };
    const groups = []; for (const r of results) { const s = sectionOf(r); const key = s ? s.num : '—'; let g = groups.find(x => x.key === key); if (!g) { g = { key, title: s ? `${s.num} ${s.title}` : 'Résultats', items: [] }; groups.push(g); } g.items.push(r); }
    const row = r => { const t = C.theorems[r.id]; return h('div', { class: 'result-row' }, h('div', {}, h('span', { html: badge(r.kind, KIND_LABEL[r.kind] || r.kind) }), ' ', t ? h('a', { href: '#/fiche/' + r.id, class: P.read[r.id] ? 'done' : '' }, r.title) : h('span', { title: 'pas de fiche dédiée (résultat secondaire)' }, r.title), ' ', h('span', { html: stars(r.importance) }), P.read[r.id] ? h('span', { style: 'color:var(--accent-3)' }, ' ✓') : null), h('span', { class: 'ref' }, `${r.ref || ''}${r.page ? ' · p. ' + r.page : ''}`)); };
    const exs = exList.filter(e => (e.chapters || []).includes(c.num));
    setPage(c.title,
      h('div', { class: 'chapter-head' }, h('span', { class: 'num' }, c.roman), h('h1', {}, c.title)),
      meta(`poly p. ${(c.printed_pages || []).join('–')}`, `${ths.length} fiches`, `${results.length} résultats cartographiés`),
      h('div', { class: 'card' }, h('h2', {}, 'De quoi s\'agit-il ?'), md(c.summary || ''), c.proof_techniques && c.proof_techniques.length ? h('div', {}, h('h3', {}, 'Techniques de preuve récurrentes'), h('ul', {}, ...c.proof_techniques.map(t => h('li', {}, md(t, { inline: true }))))) : null),
      ths.length ? h('div', { class: 'btn-row' }, h('a', { class: 'btn primary', href: '#/fiche/' + (ths.find(t => !P.read[t.id]) || ths[0]).id }, P.read[ths[0].id] ? 'Reprendre le chapitre' : 'Commencer le chapitre'), h('a', { class: 'btn', href: `#/flashcards/session?ch=${c.num}` }, `Flashcards du chapitre (${C.flashcards.filter(f => f.chapter === c.num).length})`), h('a', { class: 'btn', href: `#/carte?ch=${c.num}` }, 'Carte du chapitre')) : null,
      h('h2', {}, 'Résultats, dans l\'ordre du poly'),
      ...groups.map(g => h('div', { class: 'card' }, h('h3', {}, g.title), ...g.items.map(row))),
      (c.pitfalls || []).length ? h('div', { class: 'card' }, h('h2', {}, 'Pièges du chapitre'), h('ul', {}, ...c.pitfalls.map(t => h('li', {}, md(t, { inline: true }))))) : null,
      (vizByChapter[c.num] || []).length ? h('div', { class: 'card' }, h('h2', {}, 'Visualisations'), h('ul', { class: 'list' }, ...(vizByChapter[c.num] || []).map(v => h('li', {}, h('a', { class: 'title', href: '#/viz/' + v.id }, v.title))))) : null,
      exs.length ? h('div', { class: 'card' }, h('h2', {}, `Exercices mobilisant ce chapitre (${exs.length})`), h('p', { class: 'notice' }, 'Pour l\'entraînement « à l\'aveugle », préférer le mode Problème inconnu.'), h('ul', { class: 'list' }, ...exs.map(e => h('li', {}, h('a', { class: 'title', href: '#/probleme/' + e.id }, e.title), h('span', { class: 'muted', html: badge('diff-' + e.difficulty, 'niveau ' + e.difficulty) + (P.ex[e.id] ? ' ✓' : '') }))))) : null,
      (c.poly_exercises || []).length ? collapsible(`Exercices du poly (${c.poly_exercises.length})`, h('ul', {}, ...c.poly_exercises.map(e => h('li', {}, h('b', {}, `${e.ref} (p. ${e.page}) — `), md(e.statement_short || e.topic || '', { inline: true }))))) : null,
    );
  }
  function pageFiche(id) {
    const t = C.theorems[id]; if (!t) { const r = resultById[id]; if (r) return pageResultOnly(r); return pageNotFound(); }
    const S = t.sections; const r = resultById[id] || {};
    const idx = courseOrder.indexOf(id); const prev = idx > 0 ? C.theorems[courseOrder[idx - 1]] : null, next = idx >= 0 && idx < courseOrder.length - 1 ? C.theorems[courseOrder[idx + 1]] : null;
    const deps = (t.depends || []); const users = usedBy[id] || []; const exs = exByTool[id] || []; const fcs = fcByRef[id] || [];
    const depLink = d => { const tt = C.theorems[d]; const rr = resultById[d]; return h('li', {}, tt ? h('a', { href: '#/fiche/' + d }, tt.title) : h('span', { class: 'notice' }, rr ? `${rr.title} (${rr.ref}, pas de fiche)` : d)); };
    const hypBody = h('div', {}, t.hypotheses.intro ? md(t.hypotheses.intro) : null, ...t.hypotheses.subs.map(s => { const d = h('details', { class: 'hyp' }, h('summary', { html: R(s.title, { inline: true }) }), h('div', {}, md(s.body))); return d; }));
    const trousBody = md(S.trous || ''); const nT = trousBody.querySelectorAll('.trou').length; const trStat = h('span', { class: 'notice' });
    const updateTr = () => { const rev = trousBody.querySelectorAll('.trou.revealed').length; trStat.textContent = nT ? `${rev}/${nT} étapes révélées` : ''; if (nT && rev === nT) { P.trous[id] = (P.trous[id] || 0) + 1; save(); } };
    trousBody.addEventListener('trou-reveal', updateTr); updateTr();
    const readBtn = h('button', { class: 'btn ' + (P.read[id] ? '' : 'primary'), onclick: () => { if (P.read[id]) delete P.read[id]; else P.read[id] = now(); save(); route(); } }, P.read[id] ? '✓ Fiche lue (cliquer pour annuler)' : 'Marquer comme lue');
    setPage(t.title,
      h('div', { class: 'meta' }, h('a', { href: '#/cours/ch' + chapterOf(t.chapter).nn }, chTitle(t.chapter))),
      h('h1', {}, h('span', { html: badge(t.type, KIND_LABEL[t.type] || t.type) }), ' ', t.title),
      meta(t.ref ? `poly, ${t.ref}` : '', t.page ? `p. ${t.page}` : '', h('span', { html: stars(t.importance || r.importance || 0) }), (t.tags || []).length ? h('span', {}, (t.tags || []).map(x => '#' + x).join(' ')) : null),
      h('div', { class: 'card' }, h('h2', {}, 'Intuition'), md(S.intuition || '')),
      h('div', { class: 'card' }, h('h2', {}, 'Énoncé'), h('div', { class: 'statement' }, md(S.enonce || ''))),
      S.hypotheses ? h('div', { class: 'card' }, h('h2', {}, 'Rôle de chaque hypothèse'), h('p', { class: 'notice' }, 'Déplier chaque hypothèse : où elle sert dans la preuve, et ce qui casse quand on la retire.'), hypBody) : null,
      S.idee ? h('div', { class: 'card' }, h('h2', {}, 'Idée de la preuve'), md(S.idee)) : null,
      S.trous ? collapsible('Preuve à trous', h('div', {}, h('p', { class: 'notice' }, 'Les étapes clés sont cachées : essayez de les retrouver avant de cliquer. Le bouton « ? » donne un indice.'), trousBody, h('div', { class: 'btn-row' }, trStat, h('button', { class: 'btn small', onclick: () => { trousBody.querySelectorAll('.trou').forEach(x => x.classList.add('revealed')); updateTr(); } }, 'Tout révéler'))), { open: false, hint: nT ? `${nT} trous` : '' }) : null,
      S.preuve ? collapsible('Preuve complète', md(S.preuve), { open: false }) : null,
      S.exemples ? h('div', { class: 'card' }, h('h2', {}, 'Exemples'), md(S.exemples)) : null,
      S.pieges ? h('div', { class: 'card' }, h('h2', {}, 'Pièges'), md(S.pieges)) : null,
      S.remarques ? h('div', { class: 'card' }, h('h2', {}, 'Remarques'), md(S.remarques)) : null,
      h('div', { class: 'card' }, h('h2', {}, 'Autour de ce résultat'), h('div', { class: 'kv' },
        h('dt', {}, 'Repose sur'), h('dd', {}, deps.length ? h('ul', { class: 'list' }, ...deps.map(depLink)) : h('span', { class: 'notice' }, '— (résultat de base)')),
        h('dt', {}, 'Utilisé par'), h('dd', {}, users.length ? h('ul', { class: 'list' }, ...users.map(depLink)) : h('span', { class: 'notice' }, '—')),
        h('dt', {}, 'Exercices'), h('dd', {}, exs.length ? h('ul', { class: 'list' }, ...exs.map(e => h('li', {}, h('a', { href: '#/probleme/' + e }, C.exercises[e].title), h('span', { class: 'muted', html: badge('diff-' + C.exercises[e].difficulty, 'niv. ' + C.exercises[e].difficulty) })))) : h('span', { class: 'notice' }, '—')),
        h('dt', {}, 'Flashcards'), h('dd', {}, fcs.length ? h('a', { href: `#/flashcards/session?ref=${id}` }, `${fcs.length} carte(s) sur ce résultat`) : h('span', { class: 'notice' }, '—')),
        h('dt', {}, 'Carte'), h('dd', {}, h('a', { href: `#/carte?focus=${id}` }, 'voir dans le graphe des dépendances')))),
      h('div', { class: 'btn-row' }, readBtn),
      h('div', { class: 'nav-prevnext' }, prev ? h('a', { href: '#/fiche/' + prev.id }, '← ' + prev.title) : h('span'), next ? h('a', { href: '#/fiche/' + next.id }, next.title + ' →') : h('a', { href: '#/cours' }, 'Fin du parcours →')),
    );
  }
  function pageResultOnly(r) {
    setPage(r.title, h('div', { class: 'meta' }, h('a', { href: '#/cours/ch' + chapterOf(r.chapter).nn }, chTitle(r.chapter))), h('h1', {}, h('span', { html: badge(r.kind, KIND_LABEL[r.kind] || r.kind) }), ' ', r.title), meta(`poly, ${r.ref}`, r.page ? `p. ${r.page}` : '', h('span', { html: stars(r.importance) })),
      h('div', { class: 'card' }, h('h2', {}, 'Énoncé (carte du cours)'), h('div', { class: 'statement' }, md(r.statement || '')), h('p', { class: 'notice' }, 'Ce résultat secondaire n\'a pas de fiche détaillée ; l\'énoncé ci-dessus est celui relevé dans le poly.')),
      (r.depends_ids || []).length ? h('div', { class: 'card' }, h('h2', {}, 'Repose sur'), h('ul', { class: 'list' }, ...r.depends_ids.map(d => h('li', {}, h('a', { href: '#/fiche/' + d }, (resultById[d] || {}).title || d))))) : null);
  }
  function pageViz(id) {
    const v = C.viz.find(x => x.id === id); const slot = h('div', { class: 'viz-slot', 'data-viz': id });
    setPage(v ? v.title : 'Visualisation', v ? h('div', { class: 'meta' }, h('a', { href: '#/cours/ch' + chapterOf(v.chapter).nn }, chTitle(v.chapter))) : null, h('h1', {}, v ? v.title : id), slot);
    FMA.mountViz(id, slot, { standalone: true });
    const def = FMA.vizRegistry[id]; if (def && def.related && def.related.length) main.append(h('div', { class: 'card' }, h('h2', {}, 'Résultats liés'), h('ul', { class: 'list' }, ...def.related.map(d => h('li', {}, h('a', { href: '#/fiche/' + d, html: R((C.theorems[d] || resultById[d] || { title: d }).title, { inline: true }) }))))));
  }

  // ---------- Réflexes ----------
  function pageReflexes() {
    const byCh = {}; for (const r of rfxList) { const k = (r.chapters || [])[0] || 0; (byCh[k] = byCh[k] || []).push(r); }
    setPage('Réflexes', h('h1', {}, '⚡ Réflexes'), h('p', { class: 'notice' }, 'Une situation d\'énoncé → quel outil du cours ? Choisissez les outils pertinents (il peut y en avoir plusieurs), validez, puis lisez la justification et les pièges. Le but : reconnaître la forme d\'un problème jamais vu.'),
      h('div', { class: 'btn-row' }, h('a', { class: 'btn primary', href: '#/reflexes/rafale' }, '🔥 Rafale : situations au hasard'), h('span', { class: 'notice' }, `${Object.keys(P.rfx).length}/${rfxList.length} travaillées`)),
      ...Object.keys(byCh).sort((a, b) => a - b).map(k => h('div', { class: 'card' }, h('h2', {}, k === '0' ? 'Transversal' : chTitle(+k)), h('ul', { class: 'list' }, ...byCh[k].map(r => h('li', {}, h('a', { class: 'title', href: '#/reflexes/' + r.id }, r.situation), h('span', { class: 'muted' }, (r.chapters || []).map(c => chapterOf(c).roman).join(' + ') + (P.rfx[r.id] ? (P.rfx[r.id].ok ? ' ✅' : ' 🟠') : ''))))))));
  }
  function pageReflexe(id, rafale) {
    if (id === 'rafale') { const pool = rfxList.filter(r => !P.rfx[r.id]); const pick = (pool.length ? pool : rfxList)[Math.floor(Math.random() * (pool.length ? pool : rfxList).length)]; if (!pick) return pageReflexes(); return pageReflexe(pick.id, true); }
    const r = C.reflexes[id]; if (!r) return pageNotFound();
    const S = r.sections; const opts = shuffle(r.options.map((o, i) => ({ ...o, i }))); const sel = new Set(); let validated = false;
    const optEls = opts.map(o => { const el = h('div', { class: 'option', role: 'checkbox', 'aria-checked': 'false', tabindex: 0 }, h('div', { class: 'opt-title' }, h('span', { class: 'mark' }, '☐'), h('span', { html: R(o.title, { inline: true }) }), o.ref ? h('a', { href: FMA.hrefOf(o.ref), class: 'xref', style: 'margin-left:auto;font-size:.85em', onclick: e => e.stopPropagation() }, FMA.titleOf(o.ref) || o.ref) : null), h('div', { class: 'opt-body' }, md(o.body)));
      const toggle = () => { if (validated) { el.classList.toggle('show'); return; } if (sel.has(o.i)) { sel.delete(o.i); el.classList.remove('selected'); el.querySelector('.mark').textContent = '☐'; } else { sel.add(o.i); el.classList.add('selected'); el.querySelector('.mark').textContent = '☑'; } el.setAttribute('aria-checked', sel.has(o.i)); };
      el.addEventListener('click', toggle); el.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); } }); return { o, el }; });
    const after = h('div', { style: 'display:none' }, S.demarche ? h('div', { class: 'card' }, h('h2', {}, 'Démarche'), md(S.demarche)) : null, S.pieges ? h('div', { class: 'card' }, h('h2', {}, 'Pièges'), md(S.pieges)) : null, S.exemple ? h('div', { class: 'card' }, h('h2', {}, 'Mini-exemple'), md(S.exemple)) : null);
    const verdict = h('p', { class: 'notice' });
    const validate = () => { if (validated) return; validated = true; let ok = true; for (const { o, el } of optEls) { const chosen = sel.has(o.i); el.classList.remove('selected'); el.classList.add('show'); if (o.correct === chosen) { el.classList.add('right'); el.querySelector('.mark').textContent = o.correct ? '✔' : '✓'; } else { el.classList.add('wrong'); ok = false; el.querySelector('.mark').textContent = o.correct ? '✘ (il fallait le choisir)' : '✘ (fausse piste)'; } } verdict.textContent = ok ? '✅ Bon diagnostic : outils pertinents identifiés et fausses pistes évitées.' : '🟠 Diagnostic incomplet : relisez les justifications ci-dessous.'; P.rfx[id] = { ok, date: now() }; save(); after.style.display = ''; valBtn.disabled = true; main.querySelectorAll('.viz-slot').forEach(s => FMA.mountViz(s.dataset.viz, s)); };
    const valBtn = h('button', { class: 'btn primary', onclick: validate }, 'Valider mon choix');
    setPage(r.situation, h('div', { class: 'meta' }, h('a', { href: '#/reflexes' }, 'Réflexes'), rafale ? '· mode rafale' : ''), h('h1', {}, '⚡ ', r.situation),
      h('div', { class: 'card' }, h('h2', {}, 'Situation'), md(S.situation || '')),
      h('div', { class: 'card' }, h('h2', {}, 'Quel(s) outil(s) ?'), r.optionsIntro ? md(r.optionsIntro) : h('p', { class: 'notice' }, 'Cochez tous les outils pertinents ; certaines options sont des fausses pistes plausibles.'), ...optEls.map(x => x.el), h('div', { class: 'btn-row' }, valBtn, verdict)),
      after, h('div', { class: 'btn-row' }, rafale ? h('a', { class: 'btn primary', href: '#/reflexes/rafale', onclick: e => { e.preventDefault(); pageReflexe('rafale'); } }, 'Situation suivante →') : h('a', { class: 'btn', href: '#/reflexes' }, '← Toutes les situations')));
  }

  // ---------- Problème inconnu ----------
  function pickExercise(filter) {
    let pool = exList.filter(e => (!filter.diff || e.difficulty === +filter.diff) && (!filter.mixed || (e.chapters || []).length >= 2) && (!filter.part || (filter.part === 'ac' ? (e.chapters || []).every(c => c <= 4) : filter.part === 'cd' ? (e.chapters || []).every(c => c >= 5) : true)));
    const fresh = pool.filter(e => !P.ex[e.id]); if (fresh.length) pool = fresh; else { const sorted = pool.slice().sort((a, b) => (P.ex[a.id].date || 0) - (P.ex[b.id].date || 0)); pool = sorted.slice(0, Math.max(1, Math.ceil(sorted.length / 2))); }
    return pool[Math.floor(Math.random() * pool.length)];
  }
  function pageProbleme() {
    const f = store.get('exfilter', { diff: '', mixed: false, part: '' });
    const diffSel = h('select', { onchange: e => { f.diff = e.target.value; store.set('exfilter', f); } }, ...[['', 'Toutes difficultés'], ['1', '1 — application directe'], ['2', '2 — standard'], ['3', '3 — difficile (niveau contrôle)'], ['4', '4 — problème long']].map(([v, l]) => h('option', { value: v, selected: f.diff === v ? '' : null }, l)));
    const partSel = h('select', { onchange: e => { f.part = e.target.value; store.set('exfilter', f); } }, ...[['', 'Tout le programme'], ['ac', 'Analyse complexe seulement'], ['cd', 'Calcul différentiel seulement']].map(([v, l]) => h('option', { value: v, selected: f.part === v ? '' : null }, l)));
    const mixed = h('input', { type: 'checkbox', onchange: e => { f.mixed = e.target.checked; store.set('exfilter', f); } }); mixed.checked = !!f.mixed;
    const done = Object.keys(P.ex).filter(k => C.exercises[k]).length;
    setPage('Problème inconnu', h('h1', {}, '🎲 Problème inconnu'), h('p', { class: 'notice' }, 'Un exercice tiré au hasard, sans indication de chapitre, chronométré. Cherchez vraiment (au moins la moitié du temps conseillé) avant d\'ouvrir un indice ; les indices sont progressifs ; le corrigé vient en dernier. Évaluez-vous honnêtement : c\'est ce qui alimente le suivi.'),
      h('div', { class: 'card' }, h('h2', {}, 'Tirer un exercice'), h('div', { class: 'btn-row' }, diffSel, partSel, h('label', { style: 'font-family:var(--font-ui);font-size:.9rem' }, mixed, ' Seulement les problèmes qui mélangent plusieurs chapitres')), h('div', { class: 'btn-row' }, h('button', { class: 'btn primary', onclick: () => { const e = pickExercise(f); if (e) location.hash = '#/probleme/' + e.id; else alert('Aucun exercice ne correspond au filtre.'); } }, '🎲 Tirer au sort'), h('span', { class: 'notice' }, `${done}/${exList.length} exercices faits`))),
      h('h2', {}, 'Historique'), P.history.length ? h('div', { class: 'card' }, h('table', { class: 'history-table' }, h('thead', {}, h('tr', {}, h('th', {}, 'Date'), h('th', {}, 'Exercice'), h('th', {}, 'Niveau'), h('th', {}, 'Temps'), h('th', {}, 'Indices'), h('th', {}, 'Résultat'))), h('tbody', {}, ...P.history.slice().reverse().slice(0, 40).map(x => { const e = C.exercises[x.id] || {}; return h('tr', {}, h('td', {}, fmtDate(x.date)), h('td', {}, h('a', { href: '#/probleme/' + x.id }, e.title || x.id)), h('td', {}, e.difficulty || ''), h('td', {}, fmtTime(x.seconds || 0) + (e.time ? ` / ${e.time}:00` : '')), h('td', {}, x.hints || 0), h('td', {}, x.result === 'ok' ? '✅ réussi' : x.result === 'mid' ? '🟠 partiel' : '❌ raté')); })))) : h('p', { class: 'notice' }, 'Aucun exercice fait pour l\'instant.'),
      collapsible(`Liste de tous les exercices (${exList.length}) — chapitres masqués`, h('ul', { class: 'list' }, ...exList.slice().sort((a, b) => a.difficulty - b.difficulty).map(e => h('li', {}, h('a', { class: 'title', href: '#/probleme/' + e.id }, e.title), h('span', { class: 'muted', html: badge('diff-' + e.difficulty, 'niv. ' + e.difficulty) + ` ${e.time} min` + (P.ex[e.id] ? (P.ex[e.id].result === 'ok' ? ' ✅' : P.ex[e.id].result === 'mid' ? ' 🟠' : ' ❌') : '') })))))
    );
  }
  function pageExercice(id) {
    const e = C.exercises[id]; if (!e) return pageNotFound();
    const S = e.sections; let seconds = 0, running = true, hintsUsed = 0, revealed = false;
    const timerEl = h('span', { class: 'timer' }, '00:00'); const rec = (e.time || 20) * 60;
    const tick = setInterval(() => { if (!running || revealed) return; seconds++; timerEl.textContent = fmtTime(seconds); timerEl.classList.toggle('over', seconds > rec); }, 1000);
    const stopTimer = () => clearInterval(tick); window.addEventListener('hashchange', stopTimer, { once: true });
    const pauseBtn = h('button', { class: 'btn small', onclick: () => { running = !running; timerEl.classList.toggle('paused', !running); pauseBtn.textContent = running ? 'Pause' : 'Reprendre'; } }, 'Pause');
    const hintsBox = h('div', {}); const hintBtns = h('div', { class: 'btn-row' });
    e.hints.forEach((hn, i) => { const b = h('button', { class: 'btn', onclick: () => { b.disabled = true; hintsUsed = Math.max(hintsUsed, i + 1); const d = h('div', { class: 'card' }, h('h3', {}, hn.title), md(hn.body)); hintsBox.append(d); main.querySelectorAll('.viz-slot').forEach(s => FMA.mountViz(s.dataset.viz, s)); if (hintBtns.children[i + 1]) hintBtns.children[i + 1].disabled = false; } }, `💡 ${hn.title}`); if (i > 0) b.disabled = true; hintBtns.append(b); });
    const chapInfo = h('div', { class: 'meta' }, h('span', { class: 'hidden-chapter', onclick: ev => { ev.target.textContent = 'Chapitres : ' + (e.chapters || []).map(c => chTitle(c)).join(' + '); ev.target.style.cursor = 'default'; } }, '🙈 chapitre(s) masqué(s) — cliquer pour révéler'), h('span', { html: badge('diff-' + e.difficulty, `niveau ${e.difficulty} · ${DIFF_LABEL[e.difficulty] || ''}`) }), h('span', {}, `temps conseillé ${e.time} min`), e.source ? h('span', {}, `source : ${e.source}`) : '');
    const corrigeBox = h('div', { style: 'display:none' });
    const evalBox = h('div', { class: 'card', style: 'display:none' }, h('h2', {}, 'Auto-évaluation'), h('p', { class: 'notice' }, 'Soyez honnête : « réussi » = résolu seul (indices 1-2 tolérés) ; « partiel » = idée juste mais rédaction incomplète ou indice décisif ; « raté » = pas trouvé.'), h('div', { class: 'btn-row' }, ...[['ok', 'good', '✅ Réussi'], ['mid', 'mid', '🟠 Partiel'], ['ko', 'bad', '❌ Raté']].map(([res, cls, lab]) => h('button', { class: 'btn ' + cls, onclick: () => { P.ex[id] = { result: res, date: now(), seconds, hints: hintsUsed }; P.history.push({ id, result: res, date: now(), seconds, hints: hintsUsed }); save(); evalBox.innerHTML = ''; evalBox.append(h('p', {}, `Enregistré : ${lab}. `, h('a', { href: '#/probleme', onclick: ev => { ev.preventDefault(); const n = pickExercise(store.get('exfilter', {})); location.hash = n ? '#/probleme/' + n.id : '#/probleme'; } }, '🎲 Exercice suivant →'), ' · ', h('a', { href: '#/probleme' }, 'retour'))); } }, lab))));
    const reveal = () => { if (revealed) return; if (seconds < rec / 3 && !confirm(`Vous n'avez cherché que ${fmtTime(seconds)} sur ${e.time} min conseillées. Voir le corrigé quand même ?`)) return; revealed = true; running = false; revealBtn.disabled = true; corrigeBox.style.display = ''; corrigeBox.append(h('div', { class: 'card' }, h('h2', {}, 'Corrigé'), md(S.corrige || '')), S.variantes ? h('div', { class: 'card' }, h('h2', {}, 'Pièges et variantes'), md(S.variantes)) : null, h('div', { class: 'card' }, h('h2', {}, 'Outils mobilisés'), h('ul', { class: 'list' }, ...(e.tools || []).map(t => h('li', {}, h('a', { href: '#/fiche/' + t }, FMA.titleOf(t) || t))), h('li', {}, h('span', { class: 'notice' }, 'Chapitres : ' + (e.chapters || []).map(c => chTitle(c)).join(' + ')))))); evalBox.style.display = ''; main.querySelectorAll('.viz-slot').forEach(s => FMA.mountViz(s.dataset.viz, s)); corrigeBox.scrollIntoView({ behavior: 'smooth' }); };
    const revealBtn = h('button', { class: 'btn', onclick: reveal }, '📖 Voir le corrigé');
    setPage(e.title, h('div', { class: 'meta' }, h('a', { href: '#/probleme' }, 'Problème inconnu')), h('h1', {}, e.title), chapInfo,
      h('div', { class: 'card' }, h('div', { class: 'btn-row' }, timerEl, pauseBtn, h('span', { class: 'notice' }, `objectif ${e.time} min`), P.ex[id] ? h('span', { class: 'notice' }, `déjà fait le ${fmtDate(P.ex[id].date)} (${P.ex[id].result === 'ok' ? 'réussi' : P.ex[id].result === 'mid' ? 'partiel' : 'raté'})`) : null), h('h2', {}, 'Énoncé'), md(S.enonce || '')),
      h('div', { class: 'card' }, h('h2', {}, 'Indices progressifs'), e.hintsIntro ? md(e.hintsIntro) : null, hintBtns, hintsBox),
      h('div', { class: 'btn-row' }, revealBtn), corrigeBox, evalBox);
  }

  // ---------- Flashcards (Leitner) ----------
  const INTERVALS = [0, 1, 3, 7, 16, 35]; // jours par boîte
  function cardState(id) { return P.fc[id] || { box: 0, due: 0, seen: 0, missed: 0 }; }
  function dueCards(pool) { const t = now(); return (pool || C.flashcards).filter(f => { const s = cardState(f.id); return s.due <= t; }); }
  function grade(id, res) { const s = cardState(id); s.seen++; s.last = now(); s.lastResult = res; if (res === 'ko') { s.missed++; s.box = 0; } else if (res === 'mid') { s.box = Math.max(0, s.box - 1); s.missed += 0.5; } else s.box = Math.min(INTERVALS.length - 1, s.box + 1); s.due = now() + INTERVALS[s.box] * 86400000 + (res === 'ko' ? 10 * 60000 : 0); P.fc[id] = s; save(); }
  function pageFlashcards() {
    const due = dueCards(); const byCh = {}; for (const f of C.flashcards) (byCh[f.chapter] = byCh[f.chapter] || []).push(f);
    const missed = C.flashcards.filter(f => cardState(f.id).missed >= 1).sort((a, b) => cardState(b.id).missed - cardState(a.id).missed).slice(0, 15);
    setPage('Flashcards', h('h1', {}, '🃏 Flashcards'), h('p', { class: 'notice' }, 'Énoncés exacts, hypothèses, contre-exemples, formules, notations. Système de boîtes (Leitner) : une carte ratée revient vite, une carte sue s\'espace (1, 3, 7, 16, 35 jours). Raccourcis : espace = retourner, 1 = raté, 2 = moyen, 3 = su.'),
      h('div', { class: 'grid' }, h('a', { class: 'tile', href: '#/flashcards/session?due=1' }, h('h3', {}, 'À revoir aujourd\'hui'), h('div', { class: 'big' }, due.length), h('p', {}, 'cartes dues (nouvelles + à réviser)')), h('a', { class: 'tile', href: '#/flashcards/session?all=1&n=30' }, h('h3', {}, 'Rafale de 30'), h('div', { class: 'big' }, '30'), h('p', {}, 'cartes au hasard, tous chapitres')), h('a', { class: 'tile', href: '#/flashcards/session?missed=1' }, h('h3', {}, 'Mes points faibles'), h('div', { class: 'big' }, C.flashcards.filter(f => cardState(f.id).missed >= 1).length), h('p', {}, 'cartes déjà ratées au moins une fois')), h('a', { class: 'tile', href: '#/flashcards/session?tag=enonce&due=1' }, h('h3', {}, 'Énoncés exacts'), h('div', { class: 'big' }, dueCards(C.flashcards.filter(f => f.tags.includes('enonce'))).length), h('p', {}, 'seulement les énoncés de théorèmes, dus'))),
      h('h2', {}, 'Par chapitre'), h('div', { class: 'card' }, h('ul', { class: 'list' }, ...Object.keys(byCh).sort((a, b) => a - b).map(k => { const cards = byCh[k]; const d = dueCards(cards).length; const known = cards.filter(f => cardState(f.id).box >= 3).length; return h('li', {}, h('a', { class: 'title', href: `#/flashcards/session?ch=${k}` }, chTitle(+k)), h('span', { class: 'muted' }, `${cards.length} cartes · ${d} dues · ${known} acquises`)); }))),
      missed.length ? h('div', { class: 'card' }, h('h2', {}, 'Ce que je rate le plus'), h('ul', { class: 'list' }, ...missed.map(f => h('li', {}, h('span', { class: 'title', html: R(f.q, { inline: true }) }), h('span', { class: 'muted' }, `${cardState(f.id).missed}× raté`), f.ref ? h('a', { class: 'muted', href: '#/fiche/' + f.ref }, 'fiche') : null)))) : null);
  }
  function pageFlashSession(q) {
    let pool = C.flashcards.slice();
    if (q.ch) pool = pool.filter(f => f.chapter === +q.ch); if (q.ref) pool = pool.filter(f => f.ref === q.ref); if (q.tag) pool = pool.filter(f => f.tags.includes(q.tag));
    if (q.missed) pool = pool.filter(f => cardState(f.id).missed >= 1); if (q.due) { const d = dueCards(pool); pool = d.length ? d : pool; }
    pool = shuffle(pool); if (q.n) pool = pool.slice(0, +q.n); if (!q.all && !q.n && pool.length > 40) pool = pool.slice(0, 40);
    if (!pool.length) return setPage('Flashcards', h('h1', {}, 'Flashcards'), h('p', {}, 'Aucune carte dans cette sélection.'), h('a', { class: 'btn', href: '#/flashcards' }, 'Retour'));
    let i = 0, flipped = false; const results = { ok: 0, mid: 0, ko: 0 };
    const prog = h('div', { class: 'progress-bar' }, h('span', { style: 'width:0%' })); const counter = h('span', { class: 'notice' });
    const card = h('div', { class: 'card flashcard', tabindex: 0 }); const btns = h('div', { class: 'btn-row' });
    const show = () => { const f = pool[i]; flipped = false; counter.textContent = `${i + 1}/${pool.length}`; prog.firstChild.style.width = `${100 * i / pool.length}%`; card.innerHTML = ''; card.append(h('div', { class: 'side-label' }, `Question · ${chTitle(f.chapter)}${f.tags.length ? ' · ' + f.tags.join(', ') : ''}`), md(f.q)); btns.innerHTML = ''; btns.append(h('button', { class: 'btn primary', onclick: flip }, 'Voir la réponse (espace)')); };
    const flip = () => { if (flipped) return; flipped = true; const f = pool[i]; card.append(h('div', { class: 'answer' }, h('div', { class: 'side-label' }, 'Réponse'), md(f.r), f.ref ? h('p', { class: 'notice' }, h('a', { href: '#/fiche/' + f.ref }, 'ouvrir la fiche →')) : null)); btns.innerHTML = ''; btns.append(h('button', { class: 'btn bad', onclick: () => next('ko') }, '❌ Raté (1)'), h('button', { class: 'btn mid', onclick: () => next('mid') }, '🟠 Moyen (2)'), h('button', { class: 'btn good', onclick: () => next('ok') }, '✅ Su (3)')); FMA.activate(card); };
    const next = res => { grade(pool[i].id, res); results[res]++; i++; if (i >= pool.length) return finish(); show(); };
    const finish = () => { window.removeEventListener('keydown', onKey); setPage('Flashcards', h('h1', {}, 'Session terminée'), h('div', { class: 'card' }, h('p', {}, `✅ ${results.ok} sues · 🟠 ${results.mid} moyennes · ❌ ${results.ko} ratées`), results.ko ? h('p', {}, 'Les cartes ratées reviendront dans 10 minutes puis demain.') : null), h('div', { class: 'btn-row' }, h('a', { class: 'btn primary', href: '#/flashcards' }, 'Retour aux flashcards'), h('a', { class: 'btn', href: location.hash, onclick: e => { e.preventDefault(); pageFlashSession(q); } }, 'Refaire une session'))); };
    const onKey = e => { if (e.target.tagName === 'INPUT') return; if (e.key === ' ') { e.preventDefault(); flip(); } else if (flipped && e.key === '1') next('ko'); else if (flipped && e.key === '2') next('mid'); else if (flipped && e.key === '3') next('ok'); };
    window.addEventListener('keydown', onKey); window.addEventListener('hashchange', () => window.removeEventListener('keydown', onKey), { once: true });
    card.addEventListener('click', () => { if (!flipped) flip(); });
    setPage('Flashcards', h('div', { class: 'meta' }, h('a', { href: '#/flashcards' }, 'Flashcards'), counter), prog, card, btns); show();
  }

  // ---------- Carte des dépendances ----------
  function pageCarte(q) {
    const minImp = q.imp ? +q.imp : (q.ch ? 1 : 2); const onlyCh = q.ch ? +q.ch : null; const focus = q.focus || null;
    let nodes = (C.results || []).filter(r => (r.importance || 0) >= minImp || r.id === focus); if (onlyCh) nodes = nodes.filter(r => r.chapter === onlyCh);
    const ids = new Set(nodes.map(n => n.id));
    if (focus) { const f = resultById[focus]; if (f) { for (const d of (f.depends_ids || [])) if (resultById[d] && !ids.has(d)) { nodes.push(resultById[d]); ids.add(d); } for (const u of (usedBy[focus] || [])) if (resultById[u] && !ids.has(u)) { nodes.push(resultById[u]); ids.add(u); } } }
    const cols = chapters.filter(c => !onlyCh || c.num === onlyCh); const colW = onlyCh ? 420 : 230, rowH = 26, top = 40, pad = 10;
    const byCol = {}; for (const n of nodes) (byCol[n.chapter] = byCol[n.chapter] || []).push(n); for (const k in byCol) byCol[k].sort((a, b) => (a.page - b.page) || (a.order - b.order));
    const pos = {}; let maxRows = 0; cols.forEach((c, ci) => { (byCol[c.num] || []).forEach((n, ri) => { pos[n.id] = { x: pad + ci * colW, y: top + ri * rowH, ci, ri }; }); maxRows = Math.max(maxRows, (byCol[c.num] || []).length); });
    const W = pad * 2 + cols.length * colW, H = top + maxRows * rowH + 20; const bw = colW - 30, bh = 20;
    const svgNS = 'http://www.w3.org/2000/svg'; const svg = document.createElementNS(svgNS, 'svg'); svg.setAttribute('width', W); svg.setAttribute('height', H); svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const mk = (tag, attrs, text) => { const e = document.createElementNS(svgNS, tag); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v); if (text != null) e.textContent = text; return e; };
    cols.forEach((c, ci) => svg.append(mk('text', { x: pad + ci * colW, y: 22, class: 'gcol' }, `${c.roman}. ${c.title}`.slice(0, 34))));
    const edges = []; for (const n of nodes) for (const d of (n.depends_ids || [])) if (pos[d] && pos[n.id]) edges.push([d, n.id]);
    const edgeEls = edges.map(([a, b]) => { const pa = pos[a], pb = pos[b]; const x1 = pa.x + bw, y1 = pa.y + bh / 2, x2 = pb.x, y2 = pb.y + bh / 2; let dAttr; if (pa.ci === pb.ci) { const xo = pa.x + bw + 14; dAttr = `M${x1},${y1} C${xo},${y1} ${xo},${y2} ${x1},${y2}`; } else if (pa.ci < pb.ci) { const mx = (x1 + x2) / 2; dAttr = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`; } else { const mx = (pa.x + pb.x + bw) / 2; dAttr = `M${pa.x},${y1} C${mx},${y1} ${mx},${y2} ${pb.x + bw},${y2}`; } const p = mk('path', { d: dAttr, class: 'gedge' }); p.dataset.a = a; p.dataset.b = b; svg.append(p); return p; });
    const nodeEls = {}; for (const n of nodes) { const p = pos[n.id]; const g = mk('g', { class: 'gnode' + (n.importance >= 3 ? ' imp3' : ''), transform: `translate(${p.x},${p.y})` }); g.append(mk('rect', { width: bw, height: bh })); g.append(mk('text', { x: 6, y: 14 }, `${(KIND_LABEL[n.kind] || '').slice(0, 4)}. ${FMA.plainMath(n.title)}`.slice(0, onlyCh ? 64 : 34))); const title = mk('title', {}, `${n.ref} — ${FMA.plainMath(n.title)} (p. ${n.page})`); g.append(title); g.addEventListener('click', () => location.hash = '#/fiche/' + n.id); const hi = on => { for (const e of edgeEls) { const rel = e.dataset.a === n.id || e.dataset.b === n.id; e.classList.toggle('hi', on && rel); e.classList.toggle('dim', on && !rel); } const nb = new Set([n.id, ...(n.depends_ids || []), ...(usedBy[n.id] || [])]); for (const [id2, el2] of Object.entries(nodeEls)) el2.classList.toggle('dim', on && !nb.has(id2)); }; g.addEventListener('mouseenter', () => hi(true)); g.addEventListener('mouseleave', () => hi(false)); svg.append(g); nodeEls[n.id] = g; }
    if (focus && nodeEls[focus]) { nodeEls[focus].dispatchEvent(new Event('mouseenter')); nodeEls[focus].querySelector('rect').style.stroke = 'var(--accent-2)'; nodeEls[focus].querySelector('rect').style.strokeWidth = '2.5'; }
    const ctl = h('div', { class: 'btn-row' }, h('select', { onchange: e => location.hash = `#/carte?${e.target.value ? 'ch=' + e.target.value : ''}${focus ? '&focus=' + focus : ''}` }, h('option', { value: '' }, 'Tous les chapitres'), ...chapters.map(c => h('option', { value: c.num, selected: onlyCh === c.num ? '' : null }, `${c.roman}. ${c.title}`))), h('select', { onchange: e => location.hash = `#/carte?imp=${e.target.value}${onlyCh ? '&ch=' + onlyCh : ''}${focus ? '&focus=' + focus : ''}` }, ...[[3, 'Résultats centraux (★★★)'], [2, 'Importants et centraux (★★+)'], [1, 'Tout']].map(([v, l]) => h('option', { value: v, selected: minImp === v ? '' : null }, l))), h('span', { class: 'notice' }, `${nodes.length} résultats, ${edges.length} dépendances · survoler pour isoler, cliquer pour ouvrir`));
    setPage('Carte', h('h1', {}, '🕸 Carte des dépendances'), h('p', { class: 'notice' }, 'Une flèche va d\'un résultat vers ceux dont la preuve l\'utilise (de gauche à droite : analyse complexe puis calcul différentiel). Les cadres bleus sont les résultats centraux.'), ctl, h('div', { class: 'graph-wrap' }, svg));
    if (focus && pos[focus]) { const gw = main.querySelector('.graph-wrap'); gw.scrollLeft = Math.max(0, pos[focus].x - 200); }
  }

  // ---------- divers ----------
  function pageNotations() { setPage('Notations', h('h1', {}, '∑ Notations du poly'), h('div', { class: 'card' }, md(C.notations || '*Aucune table de notations.*'))); }
  function pageProgression() {
    const nRead = Object.keys(P.read).filter(id => C.theorems[id]).length;
    const exDone = Object.values(P.ex); const ok = exDone.filter(x => x.result === 'ok').length, mid = exDone.filter(x => x.result === 'mid').length, ko = exDone.filter(x => x.result === 'ko').length;
    const fcStates = C.flashcards.map(f => cardState(f.id)); const acquired = fcStates.filter(s => s.box >= 3).length, seen = fcStates.filter(s => s.seen > 0).length;
    const weakRefs = {}; for (const f of C.flashcards) { const s = cardState(f.id); if (s.missed >= 1 && f.ref) weakRefs[f.ref] = (weakRefs[f.ref] || 0) + s.missed; } const weak = Object.entries(weakRefs).sort((a, b) => b[1] - a[1]).slice(0, 12);
    const failedEx = exList.filter(e => P.ex[e.id] && P.ex[e.id].result !== 'ok');
    const toolFail = {}; for (const e of failedEx) for (const t of (e.tools || [])) toolFail[t] = (toolFail[t] || 0) + 1; const weakTools = Object.entries(toolFail).sort((a, b) => b[1] - a[1]).slice(0, 10);
    setPage('Progression', h('h1', {}, '📈 Progression'),
      h('div', { class: 'grid' }, h('div', { class: 'tile' }, h('h3', {}, 'Cours'), h('div', { class: 'big' }, `${nRead}/${theoremList.length}`), h('p', {}, 'fiches lues')), h('div', { class: 'tile' }, h('h3', {}, 'Exercices'), h('div', { class: 'big' }, `${exDone.length}/${exList.length}`), h('p', {}, `✅ ${ok} · 🟠 ${mid} · ❌ ${ko}`)), h('div', { class: 'tile' }, h('h3', {}, 'Flashcards'), h('div', { class: 'big' }, `${acquired}/${C.flashcards.length}`), h('p', {}, `acquises (boîte ≥ 3) · ${seen} vues`)), h('div', { class: 'tile' }, h('h3', {}, 'Réflexes'), h('div', { class: 'big' }, `${Object.keys(P.rfx).length}/${rfxList.length}`), h('p', {}, `${Object.values(P.rfx).filter(x => x.ok).length} bons diagnostics`))),
      h('h2', {}, 'Par chapitre'), h('div', { class: 'card' }, ...chapters.map(c => { const ths = theoremList.filter(t => t.chapter === c.num); const read = ths.filter(t => P.read[t.id]).length; const cards = C.flashcards.filter(f => f.chapter === c.num); const acq = cards.filter(f => cardState(f.id).box >= 3).length; const exs = exList.filter(e => (e.chapters || []).includes(c.num)); const exok = exs.filter(e => P.ex[e.id] && P.ex[e.id].result === 'ok').length; return h('div', { class: 'result-row' }, h('div', {}, h('a', { href: '#/cours/ch' + c.nn }, `${c.roman}. ${c.title}`), h('div', { class: 'progress-bar', style: 'margin-top:4px' }, h('span', { style: `width:${ths.length ? 100 * read / ths.length : 0}%` }))), h('span', { class: 'ref' }, `${read}/${ths.length} fiches · ${acq}/${cards.length} cartes · ${exok}/${exs.length} ex. réussis`)); })),
      weak.length ? h('div', { class: 'card' }, h('h2', {}, 'Résultats que je rate en flashcards'), h('ul', { class: 'list' }, ...weak.map(([ref, n]) => h('li', {}, h('a', { class: 'title', href: '#/fiche/' + ref }, FMA.titleOf(ref) || ref), h('span', { class: 'muted' }, `${n} échec(s)`))))) : null,
      weakTools.length ? h('div', { class: 'card' }, h('h2', {}, 'Outils en cause dans mes exercices ratés ou partiels'), h('ul', { class: 'list' }, ...weakTools.map(([t, n]) => h('li', {}, h('a', { class: 'title', href: '#/fiche/' + t }, FMA.titleOf(t) || t), h('span', { class: 'muted' }, `${n} exercice(s)`))))) : null,
      h('div', { class: 'card' }, h('h2', {}, 'Données'), h('div', { class: 'btn-row' }, h('button', { class: 'btn', onclick: () => { const blob = new Blob([JSON.stringify(P)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'fma-progression.json'; a.click(); } }, 'Exporter'), h('label', { class: 'btn' }, 'Importer', h('input', { type: 'file', accept: 'application/json', style: 'display:none', onchange: ev => { const f = ev.target.files[0]; if (!f) return; f.text().then(txt => { try { const d = JSON.parse(txt); Object.assign(P, d); save(); route(); } catch (e) { alert('Fichier invalide'); } }); } })), h('button', { class: 'btn bad', onclick: () => { if (confirm('Effacer toute la progression ?')) { for (const k of Object.keys(P)) delete P[k]; P.read = {}; P.ex = {}; P.fc = {}; P.rfx = {}; P.history = []; P.trous = {}; save(); route(); } } }, 'Réinitialiser'))));
  }
  function pageApropos() { setPage('Méthode', h('h1', {}, 'Méthode de travail & calibration'), h('div', { class: 'card' }, h('h2', {}, 'Comment utiliser ce site en deux semaines'), md(`1. **Cours** (jours 1–8) : un à deux chapitres par jour, dans l'ordre. Pour chaque fiche : lire l'intuition, puis **essayer de redémontrer** à partir de l'idée de preuve, puis la preuve à trous, puis la preuve complète. Noter sur papier chaque contre-exemple des hypothèses.
2. **Flashcards** : chaque jour, toutes les cartes dues (10 minutes). Les énoncés exacts doivent être connus, même en open book : on ne cherche pas dans le poly ce qu'on ne sait pas nommer.
3. **Réflexes** (dès le jour 4, en rafale) : 10 situations par jour.
4. **Problème inconnu** (jours 6–14) : 2 à 3 exercices par jour, chronométrés, dont au moins un de niveau 3. Après chaque corrigé, revenir aux fiches des outils mobilisés.
5. **Carte des dépendances** : la veille, la parcourir en récitant pour chaque résultat central ses hypothèses et l'idée de sa preuve.`)), h('div', { class: 'card' }, h('h2', {}, 'Calibration sur les annales'), md(C.calibration || '*Pas de calibration.*')), h('div', { class: 'card' }, h('h2', {}, 'Construction'), h('p', { class: 'notice' }, `Contenu compilé le ${new Date(C.built).toLocaleString('fr-FR')} : ${theoremList.length} fiches de cours, ${exList.length} exercices, ${rfxList.length} réflexes, ${C.flashcards.length} flashcards, ${C.viz.length} visualisations. Les fiches ont été rédigées puis vérifiées contre le poly par des relecteurs indépendants ; signalez toute erreur restante.`))); }
  function pageNotFound() { setPage('Introuvable', h('h1', {}, 'Page introuvable'), h('p', {}, 'Cette fiche n\'existe pas (ou pas encore). ', h('a', { href: '#/' }, 'Retour à l\'accueil'))); }

  // ---------- search ----------
  const searchInput = document.getElementById('search'), searchRes = document.getElementById('searchResults');
  const index = [...theoremList.map(t => ({ type: 'cours', title: t.title, sub: `${t.ref || ''} · ${chTitle(t.chapter)}`, href: '#/fiche/' + t.id, key: norm(FMA.plainMath(t.title) + ' ' + t.title + ' ' + (t.ref || '') + ' ' + (t.tags || []).join(' ')) })), ...exList.map(e => ({ type: 'exercice', title: e.title, sub: `niveau ${e.difficulty}`, href: '#/probleme/' + e.id, key: norm(FMA.plainMath(e.title) + ' ' + e.title) })), ...rfxList.map(r => ({ type: 'réflexe', title: r.situation, sub: '', href: '#/reflexes/' + r.id, key: norm(r.situation) })), ...C.viz.map(v => ({ type: 'visualisation', title: v.title, sub: chTitle(v.chapter), href: '#/viz/' + v.id, key: norm(v.title) }))];
  function norm(s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
  searchInput.addEventListener('input', () => { const q = norm(searchInput.value.trim()); if (q.length < 2) { searchRes.hidden = true; return; } const words = q.split(/\s+/); const hits = index.filter(x => words.every(w => x.key.includes(w))).slice(0, 12); searchRes.innerHTML = hits.map(x => `<a href="${x.href}"><span class="sr-type">${x.type}</span>${FMA.inlineTitle(x.title)} <span class="sr-type">${esc(x.sub)}</span></a>`).join('') || '<a>Aucun résultat</a>'; searchRes.hidden = false; });
  searchInput.addEventListener('blur', () => setTimeout(() => searchRes.hidden = true, 200)); searchInput.addEventListener('focus', () => { if (searchInput.value.trim().length >= 2) searchRes.hidden = false; });
  document.addEventListener('keydown', e => { if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) { e.preventDefault(); searchInput.focus(); } });
  document.getElementById('themeToggle').addEventListener('click', () => { const cur = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = cur; store.set('theme', cur); route(); });
  const navToggle = document.getElementById('navToggle'); navToggle.addEventListener('click', () => { const open = sidebar.classList.toggle('open'); navToggle.setAttribute('aria-expanded', open); });
  main.addEventListener('click', () => sidebar.classList.remove('open'));

  // ---------- router ----------
  function parseHash() { const raw = location.hash.replace(/^#\/?/, ''); const [pathPart, qs] = raw.split('?'); const q = {}; if (qs) for (const kv of qs.split('&')) { const [k, v] = kv.split('='); q[decodeURIComponent(k)] = v == null ? '1' : decodeURIComponent(v); } return { parts: pathPart.split('/').filter(Boolean), q }; }
  function route() {
    const { parts, q } = parseHash(); const [a, b] = parts; let chapter = null;
    try {
      if (!a) pageHome();
      else if (a === 'cours' && !b) pageCours();
      else if (a === 'cours') { pageChapter(b.replace(/^ch/, '')); chapter = +b.replace(/^ch/, ''); }
      else if (a === 'fiche') { pageFiche(b); chapter = (C.theorems[b] || resultById[b] || {}).chapter || null; }
      else if (a === 'viz') pageViz(b);
      else if (a === 'reflexes' && !b) pageReflexes(); else if (a === 'reflexes') pageReflexe(b);
      else if (a === 'probleme' && !b) pageProbleme(); else if (a === 'probleme') pageExercice(b);
      else if (a === 'flashcards' && !b) pageFlashcards(); else if (a === 'flashcards') pageFlashSession(q);
      else if (a === 'carte') pageCarte(q); else if (a === 'notations') pageNotations(); else if (a === 'progression') pageProgression(); else if (a === 'apropos') pageApropos();
      else pageNotFound();
    } catch (e) { console.error(e); setPage('Erreur', h('h1', {}, 'Erreur d\'affichage'), h('pre', {}, String(e && e.stack || e))); }
    renderSidebar({ chapter });
  }
  window.addEventListener('hashchange', route); route();
})();
