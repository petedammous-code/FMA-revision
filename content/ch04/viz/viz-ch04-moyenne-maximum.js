FMA.registerViz({
  id: 'viz-ch04-moyenne-maximum',
  chapter: 4,
  title: 'Fonctions harmoniques : moyenne sur un cercle et principe du maximum',
  description: String.raw`**Ce que l'on voit.** La carte colore chaque point $z$ selon la valeur de $h(z)$ **comparée à $h(z_0)$** : rouge si $h(z) > h(z_0)$, bleu si $h(z) < h(z_0)$ (fines lignes : lignes de niveau de $h$ ; trait épais : la ligne de niveau $h = h(z_0)$ qui passe par le centre). Le cercle $C(z_0,r)$ se déplace à la souris (ou au doigt) ; son rayon se règle au curseur. La bande du bas trace $\theta\mapsto h(z_0+re^{i\theta})$ sur $[0,2\pi]$, avec en pointillé la valeur au centre $h(z_0)$ et en orange la moyenne sur le cercle.

**Le théorème.** Une fonction $h$ harmonique réelle ($C^2$ et $\Delta h = \partial_x^2 h+\partial_y^2 h = 0$, [[ch04-harmonique-def|définition]]) vérifie, pour tout disque fermé $\bar D(z_0,r)\subset\Omega$,
$$h(z_0)=\tfrac1{2\pi}\int_0^{2\pi}h(z_0+re^{i\theta})\,d\theta$$
et, sur un ouvert connexe, n'a **aucun maximum local** sauf si elle est constante (poly, Corollaire IV.2.5, p. 77 ; [[ch04-harmonique-moyenne-maximum|fiche]]).

**À faire.**
* Avec une fonction harmonique ($x^2-y^2$, $\Re(z^3)$, $e^x\cos y$), déplacez le cercle et changez $r$ : « valeur au centre » et « moyenne » coïncident toujours. Dans la bande du bas, l'aire rouge (au-dessus de $h(z_0)$) compense exactement l'aire bleue. Le trait épais traverse **toujours** le cercle : il y a du rouge et du bleu sur tout cercle, donc $z_0$ n'est jamais un maximum local. Le maximum sur le disque fermé (triangle ▲) est toujours **sur le bord** : c'est ce qui donne l'unicité des problèmes de Dirichlet (poly, Remarque IV.2.6, p. 77 ; [[ch04-maximum-unicite-bord|fiche]]).
* Avec $-(x^2+y^2)$ (non harmonique, $\Delta = -4$) placez $z_0$ en $0$ : tout est bleu autour, la moyenne est **strictement plus petite** que la valeur au centre et le maximum est **intérieur**. Avec $x^2+y^2$ ($\Delta = 4$) c'est l'inverse.
* Avec $\log|z|$ ou $\Re(1/z)$, harmoniques sur $\C^\times = \C\setminus\{0\}$ seulement : tant que le disque fermé évite $0$, l'égalité tient ; dès qu'il contient $0$ (cercle en tirets), l'hypothèse $\bar D(z_0,r)\subset\Omega$ tombe et l'égalité est fausse (pour $\log|z|$ la moyenne vaut alors $\log r$).
* Le bouton anime $r$ : l'égalité vaut pour **tous** les rayons, pas seulement pour $r$ petit.`,
  related: ['ch04-harmonique-moyenne-maximum', 'ch04-harmonique-def', 'ch04-maximum-unicite-bord', 'ch04-holomorphe-implique-harmonique', 'ch04-harmonique-reelle-partie-reelle'],
  height: 520,
  mount(container, kit) {
    const st = kit.canvas(container, { height: 330 });
    const st2 = kit.canvas(container, { height: 130 });
    const controls = kit.controls(container);
    const L = { x: -2.1, X: 2.1, y: -2.1, Y: 2.1 };
    const FN = {
      x2y2: { name: 'x² − y² = Re(z²)  (harmonique)', h: (x, y) => x * x - y * y, z0: [0.4, 0.3], r: 1 },
      cube: { name: 'x³ − 3xy² = Re(z³)  (harmonique)', h: (x, y) => x * x * x - 3 * x * y * y, z0: [0, 0], r: 1 },
      expc: { name: 'eˣ cos y = Re(eᶻ)  (harmonique)', h: (x, y) => Math.exp(x) * Math.cos(y), z0: [0, 0.5], r: 1.2 },
      log: { name: 'log|z|  (harmonique sur ℂ∖{0})', h: (x, y) => 0.5 * Math.log(x * x + y * y), z0: [1, 0.4], r: 0.6, sing: true },
      rinv: { name: 'Re(1/z)  (harmonique sur ℂ∖{0})', h: (x, y) => x / (x * x + y * y), z0: [1, 0.5], r: 0.6, sing: true },
      bump: { name: '−(x² + y²)  (NON harmonique)', h: (x, y) => -(x * x + y * y), z0: [0, 0], r: 1, nonh: true },
      bowl: { name: 'x² + y²  (NON harmonique)', h: (x, y) => x * x + y * y, z0: [0.3, 0.2], r: 1, nonh: true },
    };
    const sel = kit.select(controls, { label: '$h=$', options: Object.keys(FN).map(k => [FN[k].name, k]), value: 'x2y2', onChange: () => { const F = FN[sel.value]; z0 = F.z0.slice(); sR.value = F.r; computeGrid(); draw(); } });
    sel.select.style.maxWidth = '240px';
    const sR = kit.slider(controls, { label: 'rayon $r$', min: 0.1, max: 1.9, step: 0.01, value: 1, onChange: draw });
    let anim = null, tAnim = 0;
    const btn = kit.button(controls, { label: '▶ animer r', onClick: () => {
      if (anim) { anim.stop(); anim = null; btn.textContent = '▶ animer r'; return; }
      tAnim = Math.asin(Math.max(-1, Math.min(1, (sR.value - 1) / 0.85)));
      btn.textContent = '⏸ arrêter';
      anim = kit.animate(dt => { tAnim += dt * 0.9; sR.value = +(1 + 0.85 * Math.sin(tAnim)).toFixed(2); draw(); });
    } });
    const roC = kit.readout(controls, { label: 'valeur au centre $h(z_0)$' });
    const roM = kit.readout(controls, { label: 'moyenne sur $C(z_0,r)$' });
    const roX = kit.readout(controls, { label: 'max sur $\\bar D(z_0,r)$' });
    const roL = kit.readout(controls, { label: '$\\Delta h(z_0)$' });

    let z0 = FN.x2y2.z0.slice();
    let P = null, grid = null;

    // ---------- couleurs ----------
    function rgbOf(s) {
      s = (s || '').trim(); let m;
      if ((m = s.match(/^#([0-9a-f]{3})$/i))) return m[1].split('').map(h => parseInt(h + h, 16));
      if ((m = s.match(/^#([0-9a-f]{6})/i))) return [0, 2, 4].map(k => parseInt(m[1].substr(k, 2), 16));
      if ((m = s.match(/rgba?\(([^)]+)\)/))) return m[1].split(',').slice(0, 3).map(v => parseFloat(v));
      return [255, 255, 255];
    }
    const WARM = [214, 64, 52], COOL = [38, 104, 214];
    const mix = (a, b, s) => [a[0] + (b[0] - a[0]) * s, a[1] + (b[1] - a[1]) * s, a[2] + (b[2] - a[2]) * s];
    const rgb = c => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;

    // ---------- grille de valeurs (recalculée seulement si la fonction ou la taille change) ----------
    const CELL = 3;
    function computeGrid() {
      P = kit.plane(st.ctx, { xmin: L.x, xmax: L.X, ymin: L.y, ymax: L.Y, W: st.W, H: st.H });
      const nx = Math.ceil(st.W / CELL) + 1, ny = Math.ceil(st.H / CELL) + 1, v = new Float64Array(nx * ny), h = FN[sel.value].h;
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const [x, y] = P.toWorld(i * CELL, j * CELL); const val = h(x, y); v[j * nx + i] = isFinite(val) ? val : NaN; }
      grid = { nx, ny, v };
    }
    function iso(ctx, g, step, offset, maxJump) {
      const { nx, ny, v } = g, d = CELL;
      ctx.beginPath();
      for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
        const a = v[j * nx + i] - offset, b = v[j * nx + i + 1] - offset, c = v[(j + 1) * nx + i + 1] - offset, e = v[(j + 1) * nx + i] - offset;
        if (!(isFinite(a) && isFinite(b) && isFinite(c) && isFinite(e))) continue;
        const lo = Math.min(a, b, c, e), hi = Math.max(a, b, c, e);
        if (hi - lo > maxJump) continue;
        const X = i * d, Y = j * d;
        for (let k = Math.ceil(lo / step); k * step <= hi; k++) {
          const Lv = k * step, Q = [];
          if ((a < Lv) !== (b < Lv)) Q.push(X + d * (Lv - a) / (b - a), Y);
          if ((b < Lv) !== (c < Lv)) Q.push(X + d, Y + d * (Lv - b) / (c - b));
          if ((c < Lv) !== (e < Lv)) Q.push(X + d * (1 - (Lv - c) / (e - c)), Y + d);
          if ((e < Lv) !== (a < Lv)) Q.push(X, Y + d * (1 - (Lv - e) / (a - e)));
          if (Q.length >= 4) { ctx.moveTo(Q[0], Q[1]); ctx.lineTo(Q[2], Q[3]); }
          if (Q.length >= 8) { ctx.moveTo(Q[4], Q[5]); ctx.lineTo(Q[6], Q[7]); }
        }
      }
      ctx.stroke();
    }
    function niceStep(x) { const p = Math.pow(10, Math.floor(Math.log10(x))); const m = x / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; }
    const fmt = v => !isFinite(v) ? '—' : (Math.abs(v) < 5e-4 ? (Math.abs(v) < 1e-12 ? '0' : v.toExponential(1)) : v.toFixed(4));

    // ---------- calculs sur le disque ----------
    function stats() {
      const F = FN[sel.value], h = F.h, r = sR.value, N = 720;
      const h0 = h(z0[0], z0[1]);
      let s = 0; const ring = new Float64Array(N + 1);
      for (let k = 0; k <= N; k++) { const t = 2 * Math.PI * k / N; ring[k] = h(z0[0] + r * Math.cos(t), z0[1] + r * Math.sin(t)); if (k < N) s += ring[k]; }
      const mean = s / N;
      let best = -Infinity, bx = 0, by = 0, onB = false, worst = Infinity, wx = 0, wy = 0;
      for (let i = 0; i <= 30; i++) { const rr = r * i / 30; const na = i === 0 ? 1 : 96;
        for (let k = 0; k < na; k++) { const t = 2 * Math.PI * k / na, x = z0[0] + rr * Math.cos(t), y = z0[1] + rr * Math.sin(t), v = h(x, y);
          if (!isFinite(v)) continue;
          if (v > best + 1e-12) { best = v; bx = x; by = y; onB = i === 30; }
          if (v < worst - 1e-12) { worst = v; wx = x; wy = y; } } }
      const e = 1e-3, lap = (h(z0[0] + e, z0[1]) + h(z0[0] - e, z0[1]) + h(z0[0], z0[1] + e) + h(z0[0], z0[1] - e) - 4 * h0) / (e * e);
      const broken = !!F.sing && Math.hypot(z0[0], z0[1]) <= r + 1e-9;
      return { h0, mean, ring, best, bx, by, onB, worst, wx, wy, lap, broken };
    }

    // ---------- dessin ----------
    function draw() {
      if (!grid || !P) computeGrid();
      const t = kit.theme(), ctx = st.ctx, F = FN[sel.value], S = stats(), r = sR.value;
      const bg = rgbOf(t.bg);
      // échelle de couleur : écart typique |h - h0| sur la fenêtre
      const { nx, ny, v } = grid; let acc = 0, n = 0;
      const [i0, j1] = P.toPx(L.x, L.y), [i1, j0] = P.toPx(L.X, L.Y);
      for (let j = Math.max(0, Math.floor(j0 / CELL)); j < Math.min(ny, Math.ceil(j1 / CELL)); j += 2) for (let i = Math.max(0, Math.floor(i0 / CELL)); i < Math.min(nx, Math.ceil(i1 / CELL)); i += 2) {
        const d = Math.abs(v[j * nx + i] - S.h0); if (isFinite(d)) { acc += Math.min(d, 50); n++; } }
      const scale = Math.max(1e-6, acc / Math.max(1, n));
      const img = ctx.createImageData(nx, ny), D = img.data;
      for (let k = 0; k < nx * ny; k++) {
        const d = v[k] - S.h0; let c;
        if (!isFinite(d)) c = bg; else { const s = Math.tanh(d / scale); c = mix(bg, s > 0 ? WARM : COOL, 0.8 * Math.abs(s)); }
        D[4 * k] = c[0]; D[4 * k + 1] = c[1]; D[4 * k + 2] = c[2]; D[4 * k + 3] = 255;
      }
      const off = document.createElement('canvas'); off.width = nx; off.height = ny; off.getContext('2d').putImageData(img, 0, 0);
      ctx.save(); ctx.imageSmoothingEnabled = true; ctx.drawImage(off, 0, 0, nx, ny, 0, 0, (nx) * CELL, (ny) * CELL); ctx.restore();
      P.axes({ labels: true, step: 1 });
      // lignes de niveau
      const step = niceStep(scale / 2);
      ctx.save(); ctx.strokeStyle = t.fg; ctx.globalAlpha = 0.28; ctx.lineWidth = 1; iso(ctx, grid, step, 0, 4 * step); ctx.restore();
      ctx.save(); ctx.strokeStyle = t.fg; ctx.lineWidth = 2.2; iso(ctx, grid, 1e12, S.h0, 1e12); ctx.restore();
      // singularité
      if (F.sing) { const [sx, sy] = P.toPx(0, 0); ctx.save(); ctx.strokeStyle = t.fg; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(sx - 5, sy - 5); ctx.lineTo(sx + 5, sy + 5); ctx.moveTo(sx + 5, sy - 5); ctx.lineTo(sx - 5, sy + 5); ctx.stroke();
        ctx.font = '11px system-ui, sans-serif'; ctx.fillStyle = t.fg; ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText('0 ∉ Ω', sx + 7, sy + 4); ctx.restore(); }
      // cercle, centre, repère θ = 0
      P.circle(z0[0], z0[1], r, { color: S.broken ? t.accent2 : t.fg, width: 2.5, dash: S.broken ? [7, 5] : null });
      const [cx, cy] = P.toPx(z0[0], z0[1]);
      ctx.save(); ctx.strokeStyle = t.fg; ctx.globalAlpha = 0.6; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + r * P.sx, cy); ctx.stroke(); ctx.restore();
      P.text(z0[0] + r, z0[1], 'θ=0', { dx: 4, dy: -3, font: '11px system-ui, sans-serif' });
      P.point(z0[0], z0[1], { r: 5, color: t.accent4, stroke: t.fg });
      P.text(z0[0], z0[1], 'z₀', { dx: -7, dy: -6, align: 'right', font: '600 12px system-ui, sans-serif' });
      // max et min sur le disque fermé
      const tri = (x, y, up, col) => { const [px, py] = P.toPx(x, y); ctx.save(); ctx.fillStyle = col; ctx.strokeStyle = t.bg; ctx.lineWidth = 1.5; ctx.beginPath();
        if (up) { ctx.moveTo(px, py - 8); ctx.lineTo(px - 7, py + 5); ctx.lineTo(px + 7, py + 5); } else { ctx.moveTo(px, py + 8); ctx.lineTo(px - 7, py - 5); ctx.lineTo(px + 7, py - 5); }
        ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore(); };
      if (isFinite(S.best)) tri(S.bx, S.by, true, '#b0201a');
      if (isFinite(S.worst)) tri(S.wx, S.wy, false, '#1d4fb8');
      // légende
      ctx.save(); ctx.font = '11px system-ui, sans-serif'; const lg = ['rouge : h > h(z₀)', 'bleu : h < h(z₀)', '▲ max, ▼ min sur le disque'];
      const lw = Math.max(...lg.map(s => ctx.measureText(s).width)) + 12; ctx.globalAlpha = 0.85; ctx.fillStyle = t.bg; ctx.fillRect(st.W - lw - 4, 4, lw, 48); ctx.globalAlpha = 1;
      ctx.fillStyle = t.fg; ctx.textAlign = 'left'; ctx.textBaseline = 'top'; lg.forEach((s, i) => ctx.fillText(s, st.W - lw + 2, 8 + 14 * i)); ctx.restore();
      drawStrip(S, t);
      // lectures
      roC.set(fmt(S.h0));
      roM.set(fmt(S.mean) + ` &nbsp;(écart ${fmt(S.mean - S.h0)})` + (S.broken ? ' — hypothèse violée : 0 ∈ D̄(z₀,r)' : ''));
      roX.set(`${fmt(S.best)} atteint ${S.onB ? 'sur le bord' : '<b>à l’intérieur</b>'}`);
      roL.set(Math.abs(S.lap) < 1e-3 ? '0 (harmonique)' : S.lap.toFixed(2) + (F.nonh ? ' (non harmonique)' : ''));
    }
    function drawStrip(S, t) {
      const ctx = st2.ctx, W = st2.W, H = st2.H, ring = S.ring, N = ring.length - 1;
      ctx.fillStyle = t.bg; ctx.fillRect(0, 0, W, H);
      const left = 36, right = W - 10, top = 18, bot = H - 20;
      let lo = Math.min(S.h0, S.mean), hi = Math.max(S.h0, S.mean);
      for (let k = 0; k <= N; k++) if (isFinite(ring[k])) { lo = Math.min(lo, ring[k]); hi = Math.max(hi, ring[k]); }
      if (!(hi - lo > 1e-9)) { lo -= 1; hi += 1; } const pad = 0.08 * (hi - lo); lo -= pad; hi += pad;
      const X = k => left + (right - left) * k / N, Y = v => bot - (bot - top) * (v - lo) / (hi - lo);
      const y0 = Y(S.h0);
      // aires au-dessus / au-dessous de h(z0)
      for (let k = 0; k < N; k++) { const v = ring[k]; if (!isFinite(v)) continue; ctx.fillStyle = rgb(v > S.h0 ? WARM : COOL); ctx.globalAlpha = 0.35; ctx.fillRect(X(k), Math.min(y0, Y(v)), X(k + 1) - X(k) + 0.5, Math.abs(Y(v) - y0)); }
      ctx.globalAlpha = 1;
      // axes
      ctx.strokeStyle = t.axis; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(left, top - 4); ctx.lineTo(left, bot); ctx.lineTo(right, bot); ctx.stroke();
      ctx.fillStyle = t.muted; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      [['0', 0], ['π/2', 0.25], ['π', 0.5], ['3π/2', 0.75], ['2π', 1]].forEach(([s, f]) => { const x = left + (right - left) * f; ctx.fillText(s, x, bot + 3); ctx.beginPath(); ctx.moveTo(x, bot); ctx.lineTo(x, bot + 3); ctx.stroke(); });
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText(kit.fmt(+hi.toPrecision(2)), left - 4, top + 2); ctx.fillText(kit.fmt(+lo.toPrecision(2)), left - 4, bot - 2);
      // courbe
      ctx.strokeStyle = t.fg; ctx.lineWidth = 1.8; ctx.beginPath(); let first = true;
      for (let k = 0; k <= N; k++) { const v = ring[k]; if (!isFinite(v)) { first = true; continue; } const yy = Math.max(top - 10, Math.min(bot + 10, Y(v))); if (first) { ctx.moveTo(X(k), yy); first = false; } else ctx.lineTo(X(k), yy); }
      ctx.stroke();
      // h(z0) et moyenne
      ctx.save(); ctx.setLineDash([5, 4]); ctx.strokeStyle = t.fg; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.moveTo(left, y0); ctx.lineTo(right, y0); ctx.stroke(); ctx.restore();
      const ym = Y(S.mean); ctx.strokeStyle = t.accent4; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(left, ym); ctx.lineTo(right, ym); ctx.stroke();
      ctx.font = '600 11px system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillStyle = t.fg;
      ctx.fillText('h(z₀ + r·e^(iθ)) en fonction de θ', left + 4, 2);
      ctx.textAlign = 'right'; ctx.fillStyle = t.accent4; ctx.fillText('— moyenne', right, 2);
      ctx.fillStyle = t.fg; ctx.fillText('- - h(z₀)    ', right - ctx.measureText('— moyenne').width - 6, 2);
    }

    // ---------- interaction ----------
    function setCenter(p) { if (!P) return; let [x, y] = P.toWorld(p.x, p.y); x = Math.max(L.x, Math.min(L.X, x)); y = Math.max(L.y, Math.min(L.Y, y)); z0 = [x, y]; draw(); }
    const offDrag = kit.drag(st.canvas, { onDown: setCenter, onMove: (p, ev, down) => { if (down) setCenter(p); } });
    st.onResize = () => { computeGrid(); draw(); };
    st2.onResize = () => { if (grid) draw(); };
    computeGrid(); draw();
    return () => { if (anim) anim.stop(); offDrag(); st.destroy(); st2.destroy(); };
  }
});
