/* render.js — Markdown + LaTeX (KaTeX) + extensions du site ([[id]], [[viz:id]], <trou>, > ⚠️ / > 💡) */
(function () {
  const MACROS = {
    '\\R': '\\mathbb{R}', '\\C': '\\mathbb{C}', '\\N': '\\mathbb{N}', '\\Z': '\\mathbb{Z}', '\\Q': '\\mathbb{Q}',
    '\\Hol': '\\mathrm{Hol}', '\\Res': '\\operatorname{Res}', '\\Ind': '\\operatorname{Ind}',
    '\\norm': '\\left\\lVert #1\\right\\rVert', '\\abs': '\\left\\lvert #1\\right\\rvert',
    '\\dd': '\\mathrm{d}', '\\eps': '\\varepsilon', '\\GL': '\\mathrm{GL}', '\\Sym': '\\mathrm{Sym}',
    '\\Mat': '\\mathrm{M}', '\\id': '\\mathrm{id}', '\\supp': '\\operatorname{supp}', '\\dist': '\\operatorname{dist}',
    '\\Rea': '\\Re', '\\Ima': '\\Im', '\\ds': '\\displaystyle', '\\tr': '\\operatorname{tr}', '\\rg': '\\operatorname{rg}',
    '\\Ker': '\\operatorname{Ker}', '\\im': '\\operatorname{Im}', '\\sgn': '\\operatorname{sgn}', '\\Aut': '\\operatorname{Aut}',
    '\\PP': '\\mathbb{P}', '\\HH': '\\mathbb{H}', '\\DD': '\\mathbb{D}', '\\SS': '\\mathbb{S}',
  };
  const escapeHtml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  function tex(src, display) {
    try { return katex.renderToString(src, { displayMode: display, throwOnError: false, strict: 'ignore', macros: MACROS, trust: false }); }
    catch (e) { return `<code class="tex-error" title="${escapeHtml(e.message)}">${escapeHtml(src)}</code>`; }
  }
  const titleOf = id => {
    const C = window.FMA_CONTENT || {};
    if (C.theorems && C.theorems[id]) return C.theorems[id].title;
    if (C.exercises && C.exercises[id]) return C.exercises[id].title;
    if (C.reflexes && C.reflexes[id]) return C.reflexes[id].situation;
    const r = (C.results || []).find(r => r.id === id); if (r) return r.title;
    return null;
  };
  const hrefOf = id => {
    const C = window.FMA_CONTENT || {};
    if (C.exercises && C.exercises[id]) return `#/probleme/${id}`;
    if (C.reflexes && C.reflexes[id]) return `#/reflexes/${id}`;
    return `#/fiche/${id}`;
  };
  // Titre court pouvant contenir des maths en ligne ($...$) : échappe le texte, rend les maths avec KaTeX.
  function inlineTitle(s) {
    if (s == null) return '';
    return String(s).split(/(\$[^$\n]{1,200}\$)/g).map((seg, i) => i % 2 ? tex(seg.slice(1, -1).trim(), false) : escapeHtml(seg)).join('');
  }
  // Rend a posteriori les $...$ restés en texte brut dans un sous-arbre DOM (titres injectés comme texte par l'application).
  // Titre en texte brut lisible (pour les étiquettes SVG, document.title, l'index de recherche) : $...$ → Unicode.
  const PM_GREEK = { alpha:'α', beta:'β', gamma:'γ', delta:'δ', epsilon:'ε', varepsilon:'ε', eps:'ε', zeta:'ζ', eta:'η', theta:'θ', vartheta:'ϑ', iota:'ι', kappa:'κ', lambda:'λ', mu:'μ', nu:'ν', xi:'ξ', pi:'π', rho:'ρ', sigma:'σ', tau:'τ', upsilon:'υ', phi:'φ', varphi:'φ', chi:'χ', psi:'ψ', omega:'ω', Gamma:'Γ', Delta:'Δ', Theta:'Θ', Lambda:'Λ', Xi:'Ξ', Pi:'Π', Sigma:'Σ', Phi:'Φ', Psi:'Ψ', Omega:'Ω' };
  const PM_SYM = { partial:'∂', infty:'∞', to:'→', rightarrow:'→', mapsto:'↦', Rightarrow:'⇒', Leftrightarrow:'⇔', iff:'⇔', implies:'⇒', le:'≤', leq:'≤', ge:'≥', geq:'≥', ne:'≠', neq:'≠', circ:'∘', in:'∈', notin:'∉', subset:'⊂', subseteq:'⊆', supset:'⊃', cup:'∪', cap:'∩', sum:'Σ', int:'∫', oint:'∮', prod:'Π', cdot:'·', times:'×', pm:'±', mp:'∓', nabla:'∇', forall:'∀', exists:'∃', setminus:'∖', emptyset:'∅', varnothing:'∅', simeq:'≃', sim:'∼', equiv:'≡', cong:'≅', ell:'ℓ', wedge:'∧', vee:'∨', oplus:'⊕', otimes:'⊗', langle:'⟨', rangle:'⟩', lVert:'‖', rVert:'‖', Vert:'‖', vert:'|', mid:'|', ldots:'…', cdots:'⋯', dots:'…', ddots:'⋱', vdots:'⋮', prime:'′', hbar:'ℏ', star:'⋆', ast:'∗', perp:'⊥', parallel:'∥', angle:'∠', triangle:'△', square:'□', top:'⊤', bot:'⊥', neg:'¬', lnot:'¬', land:'∧', lor:'∨', C:'ℂ', R:'ℝ', N:'ℕ', Z:'ℤ', Q:'ℚ', K:'𝕂', H:'ℍ', D:'𝔻', S:'𝕊', T:'𝕋', id:'id', Id:'Id', Re:'Re', Rea:'Re', Im:'Im', Log:'Log', log:'log', ln:'ln', exp:'exp', sin:'sin', cos:'cos', tan:'tan', cot:'cot', sinh:'sh', cosh:'ch', tanh:'th', arctan:'arctan', arcsin:'arcsin', arccos:'arccos', det:'det', tr:'tr', dim:'dim', ker:'ker', rg:'rg', rank:'rg', sup:'sup', inf:'inf', max:'max', min:'min', lim:'lim', limsup:'limsup', liminf:'liminf', deg:'deg', Res:'Res', Ind:'Ind', Hol:'Hol', GL:'GL', SL:'SL', SO:'SO', Sym:'Sym', Mat:'M', supp:'supp', dist:'dist', diag:'diag', sgn:'sgn', Arg:'Arg', arg:'arg', mod:'mod', dd:'d', iff:'⇔' };
  const PM_ACC = { bar:'̄', overline:'̄', widehat:'̂', hat:'̂', tilde:'̃', widetilde:'̃', vec:'⃗', dot:'̇', ddot:'̈' };
  function plainMathInner(m) {
    let t = m;
    t = t.replace(/\\(mathbb|mathcal|mathrm|mathbf|mathscr|mathfrak|operatorname\*?|text|textrm|textit|textbf|mathit|boldsymbol|bm|mathsf|mathtt)\s*\{([^{}]*)\}/g, '$2');
    t = t.replace(/\\(mathbb|mathcal|mathrm|mathbf|mathscr|mathfrak|mathit|boldsymbol|bm|mathsf|mathtt)\s*([A-Za-z])/g, '$2');
    t = t.replace(/\\(norm|abs)\s*\{([^{}]*)\}/g, (_, c, x) => (c === 'norm' ? '‖' + x + '‖' : '|' + x + '|'));
    t = t.replace(/\\(bar|overline|widehat|hat|tilde|widetilde|vec|dot|ddot)\s*\{([^{}]*)\}/g, (_, c, x) => x + PM_ACC[c]);
    t = t.replace(/\\(bar|hat|tilde|vec|dot|ddot)\s*(\\[A-Za-z]+|[A-Za-z0-9])/g, (_, c, x) => (x[0] === '\\' ? (PM_GREEK[x.slice(1)] || PM_SYM[x.slice(1)] || x.slice(1)) : x) + PM_ACC[c]);
    t = t.replace(/\\(?:frac|tfrac|dfrac)\s*(?:\{([^{}]*)\}|(\d))\s*(?:\{([^{}]*)\}|(\d))/g, (_, a1, a2, b1, b2) => { const a = a1 != null ? a1 : a2, b = b1 != null ? b1 : b2; return (a.length > 1 ? '(' + a + ')' : a) + '/' + (b.length > 1 ? '(' + b + ')' : b); });
    t = t.replace(/\\sqrt\s*\{([^{}]*)\}/g, '√($1)').replace(/\\sqrt\s*/g, '√');
    t = t.replace(/\\(left|right|big|Big|bigl|bigr|Bigl|Bigr|bigg|Bigg|displaystyle|textstyle|scriptstyle|limits|nolimits)\b\s*/g, '');
    t = t.replace(/\\(quad|qquad)\b/g, ' ').replace(/\\[,;:!> ]/g, ' ');
    t = t.replace(/\\([A-Za-z]+)/g, (_, w) => { for (let k = w.length; k > 0; k--) { const c = w.slice(0, k); if (PM_GREEK[c] != null) return PM_GREEK[c] + w.slice(k); if (PM_SYM[c] != null) return PM_SYM[c] + w.slice(k); } return w; });
    t = t.replace(/\\([{}|%&#$_])/g, '$1');
    t = t.replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();
    return t;
  }
  function plainMath(s) { if (s == null) return ''; return String(s).replace(/\$\$?([^$\n]{1,400})\$\$?/g, (_, m) => plainMathInner(m)); }

  function fixStrayMath(root) {
    if (!root || !window.katex) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => {
      if (!/\$[^$\n]{1,200}\$/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
      for (let e = n.parentElement; e && e !== root; e = e.parentElement) { if (e.closest && (e.matches('.katex, code, pre, script, style, textarea, input, option'))) return NodeFilter.FILTER_REJECT; }
      return NodeFilter.FILTER_ACCEPT; } });
    const nodes = []; let n; while ((n = walker.nextNode())) nodes.push(n);
    for (const node of nodes) { const span = document.createElement('span'); span.innerHTML = inlineTitle(node.nodeValue); node.replaceWith(...span.childNodes); }
  }
  function xref(id, text) {
    const t = titleOf(id);
    const cls = t ? 'xref' : 'xref xref-missing';
    const label = text ? escapeHtml(text) : (t ? inlineTitle(t) : escapeHtml(id));
    return `<a class="${cls}" href="${hrefOf(id)}" data-id="${escapeHtml(id)}" title="${escapeHtml((t || 'fiche absente').replace(/\$/g, ''))}">${label}</a>`;
  }
  // Marked configuration
  if (window.marked) marked.setOptions({ gfm: true, breaks: false, mangle: false, headerIds: false });

  function render(md, opts = {}) {
    if (md == null) return '';
    const inline = !!opts.inline;
    const math = [], trous = [], vizs = [];
    let s = String(md).replace(/\r\n/g, '\n');
    // 0. code (fences et spans) protégé contre les substitutions, restitué tel quel avant marked
    const codes = [];
    s = s.replace(/```[\s\S]*?```/g, m => { codes.push(m); return `@@C${codes.length - 1}@@`; });
    s = s.replace(/`[^`\n]+`/g, m => { codes.push(m); return `@@C${codes.length - 1}@@`; });
    // 1. trous (avant les maths : leur contenu est rendu récursivement avec ses propres maths)
    s = s.replace(/<trou(\s+indice\s*=\s*"([^"]*)")?\s*>([\s\S]*?)<\/trou>/g, (_, __, hint, inner) => {
      trous.push({ hint: hint || '', inner }); return `@@T${trous.length - 1}@@`;
    });
    // 2. display math
    s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => { math.push({ t, d: true }); return `@@M${math.length - 1}@@`; });
    // 3. inline math (no blank line inside, escaped \$ ignored)
    s = s.replace(/(^|[^\\$])\$(?!\$)((?:[^$\\]|\\.)+?)\$/g, (m, pre, t) => {
      if (/\n\s*\n/.test(t)) return m; math.push({ t, d: false }); return `${pre}@@M${math.length - 1}@@`;
    });
    // 4. viz & xrefs
    s = s.replace(/\[\[viz:([a-z0-9-]+)\]\]/g, (_, id) => { vizs.push(id); return `\n\n@@V${vizs.length - 1}@@\n\n`; });
    s = s.replace(/\[\[([^\]|]+?)(?:\|([^\]]*))?\]\]/g, (_, id, text) => `@@X${id.trim()}|${text ? text.trim() : ''}@@`);
    s = s.replace(/@@C(\d+)@@/g, (_, i) => codes[+i]);
    // 5. markdown
    let html;
    try { html = inline ? marked.parseInline(s) : marked.parse(s); } catch (e) { html = `<pre class="tex-error">${escapeHtml(s)}</pre>`; }
    // 6. restore
    html = html.replace(/@@X([^|@]+)\|([^@]*)@@/g, (_, id, text) => xref(id, text));
    html = html.replace(/@@V(\d+)@@/g, (_, i) => `<div class="viz-slot" data-viz="${vizs[+i]}"></div>`);
    html = html.replace(/(?:<p>)?@@M(\d+)@@(?:<\/p>)?/g, (m, i) => {
      const o = math[+i]; const r = tex(o.t.trim(), o.d);
      if (o.d) return `<div class="math-display">${r}</div>`;
      return m.startsWith('<p>') && m.endsWith('</p>') ? `<p>${r}</p>` : r;
    });
    html = html.replace(/@@T(\d+)@@/g, (_, i) => {
      const o = trous[+i]; const inner = render(o.inner, { inline: true });
      return `<span class="trou" tabindex="0" role="button" aria-label="étape cachée : cliquer pour révéler" data-hint="${escapeHtml(o.hint)}"><span class="trou-mask">·····</span><span class="trou-content">${inner}</span>${o.hint ? `<button class="trou-hint-btn" type="button" title="indice">?</button>` : ''}</span>`;
    });
    // nested placeholder leftovers (math inside a trou rendered recursively already handled) — second pass for math inside xref text etc.
    html = html.replace(/@@M(\d+)@@/g, (_, i) => tex(math[+i].t.trim(), math[+i].d));
    // 7. callouts
    html = html.replace(/<blockquote>\s*<p>\s*⚠️\s*/g, '<blockquote class="callout warn"><p>').replace(/<blockquote>\s*<p>\s*💡\s*/g, '<blockquote class="callout idea"><p>')
      .replace(/<blockquote>\s*<p>\s*📌\s*/g, '<blockquote class="callout note"><p>');
    return html;
  }
  // Activate interactive bits inside an element: trous, viz slots
  function activate(el) {
    el.querySelectorAll('.trou').forEach(t => {
      const reveal = () => { t.classList.add('revealed'); t.dispatchEvent(new CustomEvent('trou-reveal', { bubbles: true })); };
      t.addEventListener('click', e => { if (e.target.classList.contains('trou-hint-btn')) return; reveal(); });
      t.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); reveal(); } });
      const hb = t.querySelector('.trou-hint-btn');
      if (hb) hb.addEventListener('click', e => { e.stopPropagation(); let h = t.querySelector('.trou-hint'); if (!h) { h = document.createElement('span'); h.className = 'trou-hint'; h.innerHTML = '💡 ' + render(t.dataset.hint, { inline: true }); t.appendChild(h); } else h.remove(); });
    });
    el.querySelectorAll('.viz-slot').forEach(slot => { if (window.FMA && FMA.mountViz) FMA.mountViz(slot.dataset.viz, slot); });
  }
  function renderInto(el, md, opts) { el.innerHTML = render(md, opts); activate(el); return el; }
  window.FMA = window.FMA || {};
  Object.assign(window.FMA, { render, renderInto, activate, tex, escapeHtml, xref, titleOf, hrefOf, inlineTitle, fixStrayMath, plainMath, MACROS });
})();
