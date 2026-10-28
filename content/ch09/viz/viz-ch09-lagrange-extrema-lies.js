FMA.registerViz({
  id: 'viz-ch09-lagrange-extrema-lies',
  chapter: 9,
  title: "Extrema liés : gradients colinéaires et lignes de niveau tangentes",
  description: String.raw`**Ce que l'on voit.** Une contrainte $S=\{F=0\}\subset\mathbb R^2$ (en bleu) et une fonction $g:\mathbb R^2\to\mathbb R$ dont on cherche les points critiques de la restriction $f=g_{|S}$. Le point $p$ est à **glisser le long de $S$** (ou à déplacer avec le curseur). On y dessine $\nabla F(p)$ (vert), $\nabla g(p)$ (rose), la tangente $T_pS=\ker dF_p$ (pointillés) et la **ligne de niveau de $g$ passant par $p$** (orange). Le graphe du bas montre la fonction d'une variable $t\mapsto g(\text{point de }S)$ le long de la contrainte.

**Le théorème.** Si $0$ est valeur régulière de $F$, alors (poly, Proposition IX.7.35, p. 168)
$$df_p=0\iff \exists\,w\in\mathbb R,\ dg_p=w\,dF_p\iff \nabla g(p)\parallel\nabla F(p).$$
Pourquoi : $T_pS=\ker dF_p$ (Proposition IX.7.13), et $df_p=dg_p{}_{|T_pS}$ est nul si et seulement si $\ker dF_p\subset\ker dg_p$, c'est-à-dire si $dg_p$ est un multiple de $dF_p$. Géométriquement : la ligne de niveau de $g$ est **tangente** à la contrainte.

**Ce qu'il faut regarder.**
* Le déterminant $\det(\nabla g,\nabla F)$ s'annule exactement aux points marqués (cercles) sur le graphe : ce sont les points où la dérivée de $g$ le long de $S$ s'annule. En un extremum local de $f$, c'est nécessaire (Théorème IX.7.31).
* La condition est **nécessaire, pas suffisante** : avec $g=x^3$ sur l'ellipse, les points $(0,\pm1)$ vérifient la condition (même $\nabla g=0$) mais ne sont pas des extrema : le graphe y a un point d'inflexion.
* **Hypothèse « $0$ valeur régulière »** : avec le rebroussement $F=y^2-x^3$ et $g=x$, le minimum de $g$ sur $S$ est en $(0,0)$, mais $\nabla F(0,0)=0$ et $\nabla g=(1,0)$ n'est pas proportionnel à $\nabla F$ : le théorème ne s'applique pas, on rate le minimum. La lemniscate a la même difficulté à son point double.
* Le multiplicateur $w$ lu à l'écran est le rapport $\nabla g=w\,\nabla F$ aux points de Lagrange.`,
  related: ['ch09-multiplicateurs-lagrange', 'ch09-extremum-local-differentielle-nulle', 'ch09-espace-tangent-graphe-equation', 'ch09-point-critique-sous-variete-def'],
  height: 640,
  mount(container, kit) {
    const T = () => kit.theme();
    const PI = Math.PI;
    const st = kit.canvas(container, { height: 300 });
    const stG = kit.canvas(container, { height: 120 });
    const controls = kit.controls(container);

    // ------------ contraintes F(x,y) = 0, paramétrées par t ------------
    const L2 = Math.sqrt(2);
    const CONS = {
      ellipse: { name: 'ellipse  x²/4 + y² = 1', t0: 0, t1: 2 * PI, closed: true,
        F: (x, y) => x * x / 4 + y * y - 1, gF: (x, y) => [x / 2, 2 * y],
        X: t => [2 * Math.cos(t), Math.sin(t)] },
      lemn: { name: 'lemniscate  (x²+y²)² = x²−y²', t0: 0, t1: 2 * PI, closed: true,
        F: (x, y) => Math.pow(x * x + y * y, 2) - (x * x - y * y), gF: (x, y) => [4 * x * (x * x + y * y) - 2 * x, 4 * y * (x * x + y * y) + 2 * y],
        X: t => { const d = 1 + Math.sin(t) * Math.sin(t); return [Math.cos(t) / d, Math.sin(t) * Math.cos(t) / d]; } },
      cusp: { name: 'rebroussement  y² = x³', t0: -1.35, t1: 1.35, closed: false,
        F: (x, y) => y * y - x * x * x, gF: (x, y) => [-3 * x * x, 2 * y],
        X: t => [t * t, t * t * t] },
    };
    const GS = {
      'x+y': { name: 'g = x + y', g: (x, y) => x + y, gg: () => [1, 1] },
      'xy': { name: 'g = x·y', g: (x, y) => x * y, gg: (x, y) => [y, x] },
      'x': { name: 'g = x', g: (x, y) => x, gg: () => [1, 0] },
      'x3': { name: 'g = x³', g: (x, y) => x * x * x, gg: (x) => [3 * x * x, 0] },
      'd2': { name: 'g = (x−1.4)² + (y−0.9)²', g: (x, y) => (x - 1.4) * (x - 1.4) + (y - 0.9) * (y - 0.9), gg: (x, y) => [2 * (x - 1.4), 2 * (y - 0.9)] },
    };
    let ck = 'ellipse', gk = 'x+y';
    let tcur = 0.6;
    const VIEW = [-3, 3, -2.6, 2.6];

    const selC = kit.select(controls, { label: 'contrainte', options: Object.keys(CONS).map(k => [CONS[k].name, k]), value: ck, onChange: v => { ck = v; if (v === 'cusp' && gk !== 'x') { gk = 'x'; selG.value = 'x'; } tcur = tclamp(tcur); if (v === 'cusp') tcur = 0.8; sync(); recompute(); draw(); } });
    const selG = kit.select(controls, { label: 'fonction', options: Object.keys(GS).map(k => [GS[k].name, k]), value: gk, onChange: v => { gk = v; recompute(); draw(); } });
    const row = kit.row(controls);
    const tS = kit.slider(row, { label: 'position $t$', min: 0, max: 2 * PI, step: 0.005, value: tcur, onChange: v => { stop(); tcur = v; draw(); } });
    const cLev = kit.checkbox(row, { label: 'lignes de niveau', checked: true, onChange: draw });
    const row2 = kit.row(controls);
    const btnL = kit.button(row2, { label: 'aller à un point de Lagrange', onClick: () => { stop(); gotoLagrange(); } });
    const playBtn = kit.button(row2, { label: 'Parcourir', primary: true, onClick: () => { if (anim) stop(); else start(); } });
    const ro = kit.readout(controls, { label: '' }); ro.el.style.flex = '1 1 100%';
    const msg = document.createElement('div'); msg.className = 'viz-note'; msg.style.fontWeight = '600'; container.appendChild(msg);

    function tclamp(t) { const C = CONS[ck]; return Math.max(C.t0, Math.min(C.t1, t)); }
    function sync() { const C = CONS[ck]; tS.input.min = C.t0; tS.input.max = C.t1; tS.value = tcur; }

    // ------------ données numériques ------------
    let curve = [], fvals = [], lag = [], sing = [], gridVals = null, G = { nx: 0, ny: 0, min: 0, max: 0, x0: 0, y0: 0, dx: 0, dy: 0 };
    const N = 600;
    const detAt = t => { const C = CONS[ck], g = GS[gk]; const [x, y] = C.X(t); const a = g.gg(x, y), b = C.gF(x, y); return a[0] * b[1] - a[1] * b[0]; };
    function recompute() {
      const C = CONS[ck], g = GS[gk];
      curve = []; fvals = [];
      for (let i = 0; i <= N; i++) { const t = C.t0 + (C.t1 - C.t0) * i / N; const p = C.X(t); curve.push(p); fvals.push(g.g(p[0], p[1])); }
      // points de Lagrange : zéros de det(grad g, grad F) (changements de signe ou zéros doubles) ; points où grad F = 0 : singuliers
      lag = []; sing = [];
      const dA = [], tA = [];
      for (let i = 0; i <= N; i++) { const t = C.t0 + (C.t1 - C.t0) * i / N; tA.push(t); dA.push(detAt(t)); }
      const cand = [];
      for (let i = 1; i <= N; i++) {
        if (dA[i - 1] * dA[i] < 0) {
          let a = tA[i - 1], b = tA[i], da = dA[i - 1];
          for (let k = 0; k < 40; k++) { const m = (a + b) / 2, dm = detAt(m); if (da * dm <= 0) b = m; else { a = m; da = dm; } }
          cand.push((a + b) / 2);
        }
      }
      for (let i = 1; i < N; i++) {
        const ai = Math.abs(dA[i]);
        if (ai < 1e-3 && ai <= Math.abs(dA[i - 1]) && ai <= Math.abs(dA[i + 1])) cand.push(tA[i]);
      }
      const per = C.t1 - C.t0;
      cand.sort((x, y) => x - y);
      for (const tt of cand) {
        const q = C.X(tt), gF = C.gF(q[0], q[1]);
        const list = Math.hypot(gF[0], gF[1]) < 2e-3 ? sing : lag;
        if (!list.some(u => Math.abs(u - tt) < 0.03 || (C.closed && Math.abs(Math.abs(u - tt) - per) < 0.03))) list.push(tt);
      }
      // grille pour les lignes de niveau de g
      G.nx = 90; G.ny = 78; G.x0 = VIEW[0]; G.y0 = VIEW[2]; G.dx = (VIEW[1] - VIEW[0]) / G.nx; G.dy = (VIEW[3] - VIEW[2]) / G.ny;
      gridVals = new Float64Array((G.nx + 1) * (G.ny + 1)); let mn = Infinity, mx = -Infinity;
      for (let j = 0; j <= G.ny; j++) for (let i = 0; i <= G.nx; i++) { const v = g.g(G.x0 + i * G.dx, G.y0 + j * G.dy); gridVals[j * (G.nx + 1) + i] = v; if (v < mn) mn = v; if (v > mx) mx = v; }
      G.min = mn; G.max = mx;
    }
    function contour(level) {
      const segs = [], nx = G.nx, ny = G.ny, V = gridVals;
      const itp = (a, b, va, vb) => a + (b - a) * (va - level) / (va - vb);
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const v0 = V[j * (nx + 1) + i], v1 = V[j * (nx + 1) + i + 1], v2 = V[(j + 1) * (nx + 1) + i + 1], v3 = V[(j + 1) * (nx + 1) + i];
        const xa = G.x0 + i * G.dx, xb = xa + G.dx, ya = G.y0 + j * G.dy, yb = ya + G.dy; const e = [];
        if ((v0 < level) !== (v1 < level)) e.push([itp(xa, xb, v0, v1), ya]);
        if ((v1 < level) !== (v2 < level)) e.push([xb, itp(ya, yb, v1, v2)]);
        if ((v3 < level) !== (v2 < level)) e.push([itp(xa, xb, v3, v2), yb]);
        if ((v0 < level) !== (v3 < level)) e.push([xa, itp(ya, yb, v0, v3)]);
        if (e.length === 2) segs.push(e); else if (e.length === 4) { segs.push([e[0], e[1]]); segs.push([e[2], e[3]]); }
      }
      return segs;
    }

    // ------------ dessin ------------
    let P = null, PG = null;
    function drawMain() {
      const { ctx, W, H } = st; const t = T(); const C = CONS[ck], g = GS[gk];
      ctx.clearRect(0, 0, W, H);
      P = kit.plane(ctx, { xmin: VIEW[0], xmax: VIEW[1], ymin: VIEW[2], ymax: VIEW[3], W, H });
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.clip();
      P.grid(1, t.grid); P.axes({ labels: false });
      const [px, py] = C.X(tcur); const gp = g.g(px, py);
      // lignes de niveau de fond
      const drawSegs = (segs, col, w, a) => { ctx.save(); ctx.globalAlpha = a; ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); for (const s of segs) { const A = P.toPx(s[0][0], s[0][1]), B = P.toPx(s[1][0], s[1][1]); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); } ctx.stroke(); ctx.restore(); };
      if (cLev.value && G.max > G.min) {
        const K = 11; for (let k = 1; k < K; k++) { const lv = G.min + (G.max - G.min) * k / K; drawSegs(contour(lv), t.muted, 1, 0.45); }
      }
      // ligne de niveau par p
      drawSegs(contour(gp), t.accent4, 2.8, 1);
      // contrainte
      P.curve(curve, { color: t.accent, width: 3 });
      // points de Lagrange
      lag.forEach(s => { const q = C.X(s); const [a, b] = P.toPx(q[0], q[1]); ctx.strokeStyle = t.fg; ctx.lineWidth = 1.8; ctx.beginPath(); ctx.arc(a, b, 8, 0, 2 * PI); ctx.stroke(); });
      sing.forEach(s => { const q = C.X(s); const [a, b] = P.toPx(q[0], q[1]); ctx.strokeStyle = '#d03030'; ctx.lineWidth = 2.4; ctx.beginPath(); ctx.moveTo(a - 6, b - 6); ctx.lineTo(a + 6, b + 6); ctx.moveTo(a - 6, b + 6); ctx.lineTo(a + 6, b - 6); ctx.stroke(); });
      // gradients et tangente
      const gF = C.gF(px, py), gg = g.gg(px, py);
      const nF = Math.hypot(gF[0], gF[1]), ng = Math.hypot(gg[0], gg[1]);
      const mxn = Math.max(nF, ng, 1e-9); const sc = 1.1 / mxn;
      if (nF > 1e-6) { const tx = -gF[1] / nF, ty = gF[0] / nF; ctx.save(); ctx.setLineDash([6, 4]); ctx.strokeStyle = t.fg; ctx.lineWidth = 1.4; ctx.beginPath(); const A = P.toPx(px - 2.2 * tx, py - 2.2 * ty), B = P.toPx(px + 2.2 * tx, py + 2.2 * ty); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.stroke(); ctx.restore(); }
      if (nF > 1e-6) P.vector(px, py, gF[0], gF[1], { color: t.accent3, scale: sc, width: 3, head: 9 });
      if (ng > 1e-6) P.vector(px, py, gg[0], gg[1], { color: t.accent2, scale: sc, width: 3, head: 9 });
      P.point(px, py, { r: 6.5, color: t.accent4, stroke: t.bg });
      ctx.restore();
      ctx.font = '12px system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillStyle = t.accent; ctx.fillText('S = {F = 0}', 8, 6);
      ctx.fillStyle = t.accent3; ctx.fillText('∇F(p)', 8, 22);
      ctx.fillStyle = t.accent2; ctx.fillText('∇g(p)', 8, 38);
      ctx.fillStyle = t.accent4; ctx.fillText('ligne de niveau de g par p', 8, 54);
      ctx.fillStyle = t.fg; ctx.fillText('○ = points de Lagrange', 8, 70);
      if (sing.length) { ctx.fillStyle = '#d03030'; ctx.fillText('× = ∇F = 0 (point singulier)', 8, 86); }
    }
    function drawGraph() {
      const { ctx, W, H } = stG; const t = T(); const C = CONS[ck];
      ctx.clearRect(0, 0, W, H);
      let mn = Math.min(...fvals), mx = Math.max(...fvals); if (mx - mn < 1e-9) { mn -= 1; mx += 1; } const pad = (mx - mn) * 0.12; mn -= pad; mx += pad;
      const L = 36, R = 10, Tt = 12, B = 22;
      const X = tt => L + (tt - C.t0) / (C.t1 - C.t0) * (W - L - R), Y = v => H - B - (v - mn) / (mx - mn) * (H - B - Tt);
      PG = { X, Y, L, R };
      ctx.strokeStyle = t.axis; ctx.lineWidth = 1; ctx.strokeRect(L, Tt, W - L - R, H - B - Tt);
      if (mn < 0 && mx > 0) { ctx.strokeStyle = t.grid; ctx.beginPath(); ctx.moveTo(L, Y(0)); ctx.lineTo(W - R, Y(0)); ctx.stroke(); }
      ctx.strokeStyle = t.accent2; ctx.lineWidth = 2.2; ctx.beginPath();
      for (let i = 0; i <= N; i++) { const tt = C.t0 + (C.t1 - C.t0) * i / N; const x = X(tt), y = Y(fvals[i]); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke();
      lag.forEach(s => { const v = GS[gk].g(...C.X(s)); ctx.strokeStyle = t.fg; ctx.lineWidth = 1.8; ctx.beginPath(); ctx.arc(X(s), Y(v), 6, 0, 2 * PI); ctx.stroke(); });
      const v = GS[gk].g(...C.X(tcur));
      ctx.strokeStyle = t.accent4; ctx.lineWidth = 1; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(X(tcur), Tt); ctx.lineTo(X(tcur), H - B); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = t.accent4; ctx.strokeStyle = t.bg; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(X(tcur), Y(v), 6, 0, 2 * PI); ctx.fill(); ctx.stroke();
      ctx.fillStyle = t.muted; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      ctx.fillText(kit.fmt(+mx.toFixed(2)), L - 4, Tt + 6); ctx.fillText(kit.fmt(+mn.toFixed(2)), L - 4, H - B - 6);
      ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillStyle = t.fg; ctx.fillText('t  →   f(t) = g(point de S)', (L + W - R) / 2, H - B + 4);
    }

    function updateText() {
      const C = CONS[ck], g = GS[gk];
      const [px, py] = C.X(tcur);
      const gF = C.gF(px, py), gg = g.gg(px, py);
      const det = gg[0] * gF[1] - gg[1] * gF[0];
      const nF = Math.hypot(gF[0], gF[1]);
      let r = `p = (${px.toFixed(2)}, ${py.toFixed(2)}) &nbsp; ∇F = (${gF[0].toFixed(2)}, ${gF[1].toFixed(2)}) &nbsp; ∇g = (${gg[0].toFixed(2)}, ${gg[1].toFixed(2)}) &nbsp; det(∇g,∇F) = ${det.toFixed(3)}`;
      let m = '', col = '';
      if (nF < 1e-6) {
        m = '∇F(p) = 0 : 0 n\u2019est pas valeur régulière de F en p. Le théorème des multiplicateurs ne s\u2019applique pas ici (et S n\u2019est pas une sous-variété en p).';
        col = '#d03030';
      } else if (Math.abs(det) < 0.02 * Math.max(1e-9, Math.hypot(gg[0], gg[1]) * nF) + 1e-9) {
        const w = (gg[0] * gF[0] + gg[1] * gF[1]) / (nF * nF);
        r += ` &nbsp; w = ${w.toFixed(3)}`;
        m = 'Gradients colinéaires : ∇g(p) = w ∇F(p). C\u2019est un point critique de g|S ; la ligne de niveau est tangente à S.';
        col = '#1b9e77';
      } else {
        m = 'Gradients non colinéaires : la ligne de niveau coupe S transversalement, g|S varie en p (ni extremum ni point critique).';
      }
      if (ck === 'cusp' && gk === 'x' && tcur !== 0 && Math.abs(tcur) < 0.1) m += ' Le minimum de g sur S est en (0,0), où ∇F = 0.';
      ro.set(r); msg.textContent = m; msg.style.color = col;
    }

    function draw() { try { drawMain(); drawGraph(); updateText(); } catch (e) { console.error(e); } }

    // ------------ interactions ------------
    function setT(tt) { tcur = tclamp(tt); tS.value = tcur; draw(); }
    function gotoLagrange() {
      if (!lag.length) { if (ck === 'cusp') { setT(0); } return; }
      let best = null; const cs = lag.slice().sort((a, b) => a - b);
      const nxt = cs.find(s => s > tcur + 1e-3); best = nxt !== undefined ? nxt : cs[0];
      setT(best);
    }
    function nearestT(pos, inGraph) {
      const C = CONS[ck];
      if (inGraph) { const tt = C.t0 + (pos.x - PG.L) / (stG.W - PG.L - PG.R) * (C.t1 - C.t0); setT(tt); return; }
      let bi = 0, bd = Infinity;
      for (let i = 0; i <= N; i++) { const [x, y] = P.toPx(curve[i][0], curve[i][1]); const d = (x - pos.x) ** 2 + (y - pos.y) ** 2; if (d < bd) { bd = d; bi = i; } }
      setT(C.t0 + (C.t1 - C.t0) * bi / N);
    }
    const off1 = kit.drag(st.canvas, { onDown: p => { stop(); nearestT(p, false); }, onMove: (p, ev, down) => { if (down) nearestT(p, false); } });
    const off2 = kit.drag(stG.canvas, { onDown: p => { stop(); nearestT(p, true); }, onMove: (p, ev, down) => { if (down) nearestT(p, true); } });
    let anim = null;
    function stop() { if (anim) { anim.stop(); anim = null; } playBtn.textContent = 'Parcourir'; }
    function start() {
      const C = CONS[ck]; playBtn.textContent = 'Pause';
      anim = kit.animate(dt => { let tt = tcur + dt * (C.t1 - C.t0) / 14; if (tt > C.t1) tt = C.t0; setT(tt); });
    }

    st.onResize = draw; stG.onResize = draw;
    sync(); recompute(); draw();
    return () => { stop(); off1(); off2(); st.destroy(); stG.destroy(); };
  }
});
