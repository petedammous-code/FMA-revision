/* vizkit.js — helpers partagés par toutes les visualisations (FMA.vizkit) */
(function () {
  const kit = {};
  const css = getComputedStyle(document.documentElement);
  kit.theme = () => ({
    bg: css.getPropertyValue('--viz-bg').trim() || '#ffffff', fg: css.getPropertyValue('--fg').trim() || '#1b1f24',
    muted: css.getPropertyValue('--muted').trim() || '#6b7280', grid: css.getPropertyValue('--viz-grid').trim() || '#e5e7eb',
    axis: css.getPropertyValue('--viz-axis').trim() || '#9ca3af', accent: css.getPropertyValue('--accent').trim() || '#2457d6',
    accent2: css.getPropertyValue('--accent-2').trim() || '#d6467a', accent3: css.getPropertyValue('--accent-3').trim() || '#1b9e77',
    accent4: css.getPropertyValue('--accent-4').trim() || '#e08b1a', accent5: css.getPropertyValue('--accent-5').trim() || '#7c4dff',
  });
  kit.palette = () => { const t = kit.theme(); return [t.accent, t.accent2, t.accent3, t.accent4, t.accent5]; };

  // ---- canvas HiDPI ----
  kit.canvas = function (container, { height = 400, aspect = null } = {}) {
    const wrap = document.createElement('div'); wrap.className = 'viz-canvas-wrap'; container.appendChild(wrap);
    const canvas = document.createElement('canvas'); wrap.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const state = { canvas, ctx, W: 0, H: 0, dpr: 1, onResize: null };
    function resize() {
      const w = Math.max(280, wrap.clientWidth || container.clientWidth || 600);
      const h = aspect ? Math.round(w / aspect) : height;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      state.W = w; state.H = h; state.dpr = dpr;
      if (state.onResize) state.onResize();
    }
    resize();
    const ro = new ResizeObserver(() => { const w = Math.max(280, wrap.clientWidth); if (Math.abs(w - state.W) > 2) resize(); });
    ro.observe(wrap);
    state.destroy = () => ro.disconnect();
    state.clear = () => { ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.restore(); };
    // pointer helpers: position in CSS px
    state.pointer = (ev) => { const r = canvas.getBoundingClientRect(); const p = ev.touches ? ev.touches[0] : ev; return { x: p.clientX - r.left, y: p.clientY - r.top }; };
    return state;
  };

  // ---- controls ----
  kit.controls = function (container) { const d = document.createElement('div'); d.className = 'viz-controls'; container.appendChild(d); return d; };
  kit.row = function (controls) { const d = document.createElement('div'); d.className = 'viz-row'; controls.appendChild(d); return d; };
  let uid = 0;
  kit.slider = function (controls, { label, min = 0, max = 1, step = 0.01, value = 0, onChange, format = v => (+v).toFixed(step < 1 ? Math.min(4, Math.ceil(-Math.log10(step))) : 0) }) {
    const id = 'vk' + (++uid); const w = document.createElement('label'); w.className = 'viz-ctl viz-slider'; w.htmlFor = id;
    w.innerHTML = `<span class="viz-ctl-label"></span><input type="range" id="${id}"><output></output>`;
    w.querySelector('.viz-ctl-label').innerHTML = (window.FMA && FMA.render) ? FMA.render(label, { inline: true }) : label;
    const inp = w.querySelector('input'); inp.min = min; inp.max = max; inp.step = step; inp.value = value;
    const out = w.querySelector('output'); out.textContent = format(value);
    inp.addEventListener('input', () => { out.textContent = format(inp.value); if (onChange) onChange(+inp.value); });
    controls.appendChild(w);
    return { get value() { return +inp.value; }, set value(v) { inp.value = v; out.textContent = format(v); }, el: w, input: inp };
  };
  kit.select = function (controls, { label, options, value, onChange }) {
    const w = document.createElement('label'); w.className = 'viz-ctl viz-select';
    w.innerHTML = `<span class="viz-ctl-label"></span><select></select>`;
    w.querySelector('.viz-ctl-label').innerHTML = (window.FMA && FMA.render) ? FMA.render(label || '', { inline: true }) : (label || '');
    const sel = w.querySelector('select');
    options.forEach(o => { const [lab, val] = Array.isArray(o) ? o : [o, o]; const op = document.createElement('option'); op.textContent = lab; op.value = val; sel.appendChild(op); });
    if (value !== undefined) sel.value = value;
    sel.addEventListener('change', () => onChange && onChange(sel.value));
    controls.appendChild(w);
    return { get value() { return sel.value; }, set value(v) { sel.value = v; }, el: w, select: sel };
  };
  kit.button = function (controls, { label, onClick, primary = false }) {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'viz-ctl viz-btn' + (primary ? ' primary' : ''); b.textContent = label;
    b.addEventListener('click', onClick); controls.appendChild(b); return b;
  };
  kit.checkbox = function (controls, { label, checked = false, onChange }) {
    const w = document.createElement('label'); w.className = 'viz-ctl viz-check';
    w.innerHTML = `<input type="checkbox"><span class="viz-ctl-label"></span>`;
    w.querySelector('.viz-ctl-label').innerHTML = (window.FMA && FMA.render) ? FMA.render(label, { inline: true }) : label;
    const inp = w.querySelector('input'); inp.checked = checked; inp.addEventListener('change', () => onChange && onChange(inp.checked));
    controls.appendChild(w); return { get value() { return inp.checked; }, set value(v) { inp.checked = v; }, el: w };
  };
  kit.readout = function (controls, { label = '' } = {}) {
    const w = document.createElement('div'); w.className = 'viz-ctl viz-readout'; w.innerHTML = `<span class="viz-ctl-label"></span><span class="viz-readout-val"></span>`;
    w.querySelector('.viz-ctl-label').innerHTML = (window.FMA && FMA.render) ? FMA.render(label, { inline: true }) : label;
    const v = w.querySelector('.viz-readout-val'); controls.appendChild(w);
    return { set(text, isTex = false) { v.innerHTML = isTex && window.FMA ? FMA.tex(text, false) : text; }, el: w };
  };
  kit.md = function (el, text) { if (window.FMA && FMA.renderInto) FMA.renderInto(el, text); else el.textContent = text; return el; };
  kit.note = function (container, text) { const d = document.createElement('div'); d.className = 'viz-note'; container.appendChild(d); kit.md(d, text); return d; };

  // ---- plane: world <-> pixel ----
  kit.plane = function (ctx, { xmin = -2, xmax = 2, ymin = -2, ymax = 2, W, H, keepAspect = true, margin = 0 } = {}) {
    W = W || ctx.canvas.clientWidth; H = H || ctx.canvas.clientHeight;
    let sx = (W - 2 * margin) / (xmax - xmin), sy = (H - 2 * margin) / (ymax - ymin);
    if (keepAspect) { const s = Math.min(sx, sy); sx = sy = s; }
    const cx = (xmin + xmax) / 2, cy = (ymin + ymax) / 2;
    const P = {
      W, H, sx, sy, xmin: cx - (W / 2) / sx, xmax: cx + (W / 2) / sx, ymin: cy - (H / 2) / sy, ymax: cy + (H / 2) / sy,
      toPx: (x, y) => [W / 2 + (x - cx) * sx, H / 2 - (y - cy) * sy],
      toWorld: (px, py) => [cx + (px - W / 2) / sx, cy - (py - H / 2) / sy],
      grid(step = 1, color) { const t = kit.theme(); ctx.save(); ctx.strokeStyle = color || t.grid; ctx.lineWidth = 1;
        for (let x = Math.ceil(P.xmin / step) * step; x <= P.xmax; x += step) { const [px] = P.toPx(x, 0); ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, H); ctx.stroke(); }
        for (let y = Math.ceil(P.ymin / step) * step; y <= P.ymax; y += step) { const [, py] = P.toPx(0, y); ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(W, py); ctx.stroke(); }
        ctx.restore(); },
      axes({ labels = true, xlabel = '', ylabel = '', step = 1 } = {}) { const t = kit.theme(); ctx.save(); ctx.strokeStyle = t.axis; ctx.fillStyle = t.muted; ctx.lineWidth = 1.2; ctx.font = '11px system-ui, sans-serif';
        const [ox, oy] = P.toPx(0, 0);
        ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.moveTo(ox, 0); ctx.lineTo(ox, H); ctx.stroke();
        if (labels) { ctx.textAlign = 'center'; ctx.textBaseline = 'top';
          for (let x = Math.ceil(P.xmin / step) * step; x <= P.xmax; x += step) { if (Math.abs(x) < 1e-9) continue; const [px] = P.toPx(x, 0); ctx.fillText(kit.fmt(x), px, Math.min(H - 14, oy + 3)); }
          ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
          for (let y = Math.ceil(P.ymin / step) * step; y <= P.ymax; y += step) { if (Math.abs(y) < 1e-9) continue; const [, py] = P.toPx(0, y); ctx.fillText(kit.fmt(y), Math.max(22, ox - 4), py); } }
        if (xlabel) { ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'; ctx.fillStyle = t.fg; ctx.fillText(xlabel, W - 6, oy - 4); }
        if (ylabel) { ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillStyle = t.fg; ctx.fillText(ylabel, ox + 6, 6); }
        ctx.restore(); },
      point(x, y, { r = 4, color, label, stroke } = {}) { const t = kit.theme(); const [px, py] = P.toPx(x, y); ctx.save(); ctx.fillStyle = color || t.accent; ctx.beginPath(); ctx.arc(px, py, r, 0, 2 * Math.PI); ctx.fill();
        if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.stroke(); }
        if (label) { ctx.fillStyle = t.fg; ctx.font = '12px system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillText(label, px + 6, py - 4); } ctx.restore(); },
      curve(pts, { color, width = 2, dash, close = false } = {}) { if (!pts.length) return; const t = kit.theme(); ctx.save(); ctx.strokeStyle = color || t.accent; ctx.lineWidth = width; if (dash) ctx.setLineDash(dash);
        ctx.beginPath(); let first = true; for (const [x, y] of pts) { if (!isFinite(x) || !isFinite(y)) { first = true; continue; } const [px, py] = P.toPx(x, y); if (first) { ctx.moveTo(px, py); first = false; } else ctx.lineTo(px, py); }
        if (close) ctx.closePath(); ctx.stroke(); ctx.restore(); },
      fill(pts, { color, alpha = 0.15 } = {}) { const t = kit.theme(); ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = color || t.accent; ctx.beginPath(); pts.forEach(([x, y], i) => { const [px, py] = P.toPx(x, y); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.closePath(); ctx.fill(); ctx.restore(); },
      vector(x, y, u, v, { color, width = 2, head = 8, scale = 1 } = {}) { const t = kit.theme(); const [x0, y0] = P.toPx(x, y); const [x1, y1] = P.toPx(x + u * scale, y + v * scale); kit.arrow(ctx, x0, y0, x1, y1, { color: color || t.accent2, width, head }); },
      text(x, y, s, { color, font = '12px system-ui, sans-serif', dx = 0, dy = 0, align = 'left', baseline = 'bottom' } = {}) { const t = kit.theme(); const [px, py] = P.toPx(x, y); ctx.save(); ctx.fillStyle = color || t.fg; ctx.font = font; ctx.textAlign = align; ctx.textBaseline = baseline; ctx.fillText(s, px + dx, py + dy); ctx.restore(); },
      circle(x, y, r, { color, width = 1.5, dash, fill } = {}) { const t = kit.theme(); const [px, py] = P.toPx(x, y); ctx.save(); ctx.strokeStyle = color || t.accent; ctx.lineWidth = width; if (dash) ctx.setLineDash(dash); ctx.beginPath(); ctx.arc(px, py, r * sx, 0, 2 * Math.PI); if (fill) { ctx.fillStyle = fill; ctx.fill(); } ctx.stroke(); ctx.restore(); },
    };
    return P;
  };
  kit.arrow = function (ctx, x0, y0, x1, y1, { color = '#000', width = 2, head = 8 } = {}) {
    const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy); if (L < 1e-6) return; const ux = dx / L, uy = dy / L;
    ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = width; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1 - ux * head * 0.6, y1 - uy * head * 0.6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1 - ux * head - uy * head * 0.5, y1 - uy * head + ux * head * 0.5); ctx.lineTo(x1 - ux * head + uy * head * 0.5, y1 - uy * head - ux * head * 0.5); ctx.closePath(); ctx.fill(); ctx.restore();
  };
  kit.fmt = v => { const a = Math.abs(v); if (a < 1e-12) return '0'; if (Number.isInteger(v)) return String(v); return (a >= 100 || a < 0.01) ? v.toExponential(1) : String(+v.toFixed(2)); };

  // ---- complex numbers as [re, im] ----
  const C = {
    add: (a, b) => [a[0] + b[0], a[1] + b[1]], sub: (a, b) => [a[0] - b[0], a[1] - b[1]],
    mul: (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]],
    div: (a, b) => { const d = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; },
    scale: (a, k) => [a[0] * k, a[1] * k], conj: a => [a[0], -a[1]],
    abs: a => Math.hypot(a[0], a[1]), arg: a => Math.atan2(a[1], a[0]), abs2: a => a[0] * a[0] + a[1] * a[1],
    polar: (r, t) => [r * Math.cos(t), r * Math.sin(t)],
    exp: a => { const e = Math.exp(a[0]); return [e * Math.cos(a[1]), e * Math.sin(a[1])]; },
    log: a => [Math.log(Math.hypot(a[0], a[1])), Math.atan2(a[1], a[0])],
    pow: (a, n) => { if (Number.isInteger(n) && n >= 0 && n < 64) { let r = [1, 0]; for (let i = 0; i < n; i++) r = C.mul(r, a); return r; } const [lr, la] = C.log(a); return C.exp([n * lr, n * la]); },
    powc: (a, b) => C.exp(C.mul(b, C.log(a))),
    sqrt: a => { const r = Math.sqrt(C.abs(a)), t = C.arg(a) / 2; return [r * Math.cos(t), r * Math.sin(t)]; },
    sin: a => [Math.sin(a[0]) * Math.cosh(a[1]), Math.cos(a[0]) * Math.sinh(a[1])],
    cos: a => [Math.cos(a[0]) * Math.cosh(a[1]), -Math.sin(a[0]) * Math.sinh(a[1])],
    tan: a => C.div(C.sin(a), C.cos(a)), inv: a => C.div([1, 0], a),
    fromPolar: (r, t) => [r * Math.cos(t), r * Math.sin(t)], re: a => a[0], im: a => a[1],
    str: (a, d = 2) => { const re = +a[0].toFixed(d), im = +a[1].toFixed(d); return im === 0 ? `${re}` : re === 0 ? `${im}i` : `${re} ${im < 0 ? '−' : '+'} ${Math.abs(im)}i`; },
  };
  kit.complex = C;

  // ---- colors ----
  kit.hsl2rgb = function (h, s, l) { // h in [0,1)
    const f = n => { const k = (n + h * 12) % 12; const a = s * Math.min(l, 1 - l); return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)); };
    return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
  };
  // domain coloring: hue = arg, lightness from modulus (log scale), optional iso lines
  kit.colorArg = function (z, { modulus = true, lines = false } = {}) {
    const r = Math.hypot(z[0], z[1]); if (!isFinite(r)) return [255, 255, 255];
    const h = (Math.atan2(z[1], z[0]) / (2 * Math.PI) + 1) % 1;
    let l = 0.5;
    if (modulus) { const lr = Math.log2(r + 1e-12); l = 0.5 + 0.35 * (2 / Math.PI) * Math.atan(lr / 2); if (lines) { const f = lr - Math.floor(lr); l *= 0.85 + 0.15 * f; } }
    return kit.hsl2rgb(h, 0.9, Math.max(0.03, Math.min(0.97, l)));
  };
  kit.domainColor = function (st, P, f, opts = {}) { // paint f over the plane P on canvas state st (CSS px grid, 1px per CSS px / step)
    const { ctx, W, H, dpr } = st; const step = opts.step || 1;
    const img = ctx.createImageData(Math.ceil(W / step), Math.ceil(H / step)); const d = img.data; let k = 0;
    for (let j = 0; j < img.height; j++) for (let i = 0; i < img.width; i++) {
      const [x, y] = P.toWorld(i * step + step / 2, j * step + step / 2); let c;
      try { c = kit.colorArg(f([x, y]), opts); } catch (e) { c = [0, 0, 0]; }
      d[k++] = c[0]; d[k++] = c[1]; d[k++] = c[2]; d[k++] = 255;
    }
    const off = document.createElement('canvas'); off.width = img.width; off.height = img.height; off.getContext('2d').putImageData(img, 0, 0);
    ctx.save(); ctx.imageSmoothingEnabled = step > 1; ctx.drawImage(off, 0, 0, img.width, img.height, 0, 0, W, H); ctx.restore();
  };
  kit.colorLegend = function (container) { const d = document.createElement('div'); d.className = 'viz-legend'; d.innerHTML = '<span class="viz-legend-wheel"></span><span>teinte = argument, clair = grand module, sombre = petit module</span>'; container.appendChild(d); return d; };

  // ---- animation ----
  kit.animate = function (loop) { let id = null, last = null, running = true;
    const step = ts => { if (!running) return; const dt = last == null ? 0 : Math.min(0.05, (ts - last) / 1000); last = ts; try { loop(dt, ts / 1000); } catch (e) { console.error(e); running = false; return; } id = requestAnimationFrame(step); };
    id = requestAnimationFrame(step);
    return { stop() { running = false; if (id) cancelAnimationFrame(id); }, get running() { return running; } };
  };
  // ---- numerical helpers ----
  kit.rk4 = function (F, y, t, h) { // y: array, F(t,y)->array
    const n = y.length, k1 = F(t, y), y2 = y.map((v, i) => v + h / 2 * k1[i]), k2 = F(t + h / 2, y2), y3 = y.map((v, i) => v + h / 2 * k2[i]), k3 = F(t + h / 2, y3), y4 = y.map((v, i) => v + h * k3[i]), k4 = F(t + h, y4);
    const out = new Array(n); for (let i = 0; i < n; i++) out[i] = y[i] + h / 6 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]); return out;
  };
  kit.integrate = function (F, y0, { t0 = 0, t1 = 10, h = 0.01, stopIf = null } = {}) { const pts = [y0.slice()]; let y = y0.slice(), t = t0; const sgn = t1 >= t0 ? 1 : -1; const n = Math.floor(Math.abs(t1 - t0) / h);
    for (let i = 0; i < n; i++) { y = kit.rk4(F, y, t, sgn * h); t += sgn * h; if (!y.every(isFinite) || (stopIf && stopIf(y, t))) break; pts.push(y.slice()); } return pts; };
  kit.linspace = (a, b, n) => Array.from({ length: n }, (_, i) => a + (b - a) * i / (n - 1));
  kit.drag = function (canvas, { onDown, onMove, onUp } = {}) { let down = false;
    const pos = ev => { const r = canvas.getBoundingClientRect(); const p = ev.touches ? ev.touches[0] : ev; return { x: p.clientX - r.left, y: p.clientY - r.top }; };
    const d = ev => { down = true; onDown && onDown(pos(ev), ev); if (ev.cancelable && ev.touches) ev.preventDefault(); };
    const m = ev => { if (!down) { onMove && onMove(pos(ev), ev, false); return; } onMove && onMove(pos(ev), ev, true); if (ev.cancelable && ev.touches) ev.preventDefault(); };
    const u = ev => { if (down) { down = false; onUp && onUp(ev); } };
    canvas.addEventListener('mousedown', d); canvas.addEventListener('mousemove', m); window.addEventListener('mouseup', u);
    canvas.addEventListener('touchstart', d, { passive: false }); canvas.addEventListener('touchmove', m, { passive: false }); window.addEventListener('touchend', u);
    return () => { canvas.removeEventListener('mousedown', d); canvas.removeEventListener('mousemove', m); window.removeEventListener('mouseup', u); canvas.removeEventListener('touchstart', d); canvas.removeEventListener('touchmove', m); window.removeEventListener('touchend', u); };
  };

  // ---- registry ----
  window.FMA = window.FMA || {};
  FMA.vizkit = kit;
  FMA.vizRegistry = FMA.vizRegistry || {};
  FMA.registerViz = function (def) { if (!def || !def.id) { console.error('registerViz: id manquant', def); return; } FMA.vizRegistry[def.id] = def; };
  FMA.mountViz = function (id, slot, { standalone = false } = {}) {
    const def = FMA.vizRegistry[id];
    slot.innerHTML = '';
    if (!def) { slot.innerHTML = `<div class="viz-missing">Visualisation « ${id} » introuvable.</div>`; return null; }
    const box = document.createElement('figure'); box.className = 'viz'; box.dataset.vizId = id;
    const head = document.createElement('figcaption'); head.className = 'viz-head';
    head.innerHTML = `<span class="viz-title">${FMA.escapeHtml ? FMA.escapeHtml(def.title || id) : def.title}</span>${standalone ? '' : `<a class="viz-open" href="#/viz/${id}" title="ouvrir en grand">⤢</a>`}`;
    if (!standalone) box.appendChild(head);
    const body = document.createElement('div'); body.className = 'viz-body'; if (def.height) body.style.minHeight = def.height + 'px'; box.appendChild(body);
    const desc = document.createElement('div'); desc.className = 'viz-desc'; box.appendChild(desc);
    if (def.description) kit.md(desc, def.description);
    slot.appendChild(box);
    let cleanup = null;
    try { cleanup = def.mount(body, kit) || null; } catch (e) { console.error('viz mount failed', id, e); body.innerHTML = `<div class="viz-missing">Erreur dans la visualisation : ${FMA.escapeHtml ? FMA.escapeHtml(String(e && e.message || e)) : e}</div>`; }
    box._cleanup = () => { try { if (typeof cleanup === 'function') cleanup(); } catch (e) { console.error(e); } };
    (FMA._mountedViz = FMA._mountedViz || []).push(box);
    return box;
  };
  FMA.unmountAllViz = function () { (FMA._mountedViz || []).forEach(b => b._cleanup && b._cleanup()); FMA._mountedViz = []; };
})();
