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
  function xref(id, text) {
    const t = titleOf(id);
    const label = text || (t ? t : id);
    const cls = t ? 'xref' : 'xref xref-missing';
    return `<a class="${cls}" href="${hrefOf(id)}" data-id="${escapeHtml(id)}" title="${escapeHtml(t || 'fiche absente')}">${escapeHtml(label)}</a>`;
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
  Object.assign(window.FMA, { render, renderInto, activate, tex, escapeHtml, xref, titleOf, hrefOf, MACROS });
})();
