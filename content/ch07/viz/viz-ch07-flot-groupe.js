FMA.registerViz({
  id: 'viz-ch07-flot-groupe',
  chapter: 7,
  title: 'Flot d’un champ plan : composer les temps',
  description: String.raw`Un petit carré quadrillé $A$ de conditions initiales (gris, **déplaçable à la souris ou au doigt**) est transporté par le flot du champ $X$ choisi. Notation du poly : $F(t_0,t,x)$ est la position à l'instant $t$ de la courbe intégrale maximale valant $x$ à l'instant $t_0$ ([[ch07-flot-global-def]]) ; dans le cas autonome on note $F_t\cdot x=F(0,t,x)$.

**Quoi regarder.**
* **Bleu** : $F(0,s,A)$, l'image de $A$ après la première étape (de l'instant $0$ à l'instant $s$).
* **Rose (rempli)** : on repart de là pour une durée $t$, *en partant de l'instant $s$* : $F\bigl(s,s+t,F(0,s,A)\bigr)$.
* **Contour vert épais** : $F(0,s+t,A)$, calculé d'une traite. Il coïncide **toujours** avec le rose : c'est la formule de composition $F(t_0,s+t,x)=F\bigl(s,s+t,F(t_0,s,x)\bigr)$ (poly, Théorème VII.3.7, p. 135).
* **Orange pointillé** (case « composition naïve ») : $F(0,t,F(0,s,A))$, où l'on repart « à l'instant $0$ » au lieu de $s$. Pour un champ **autonome**, il coïncide aussi avec le vert : c'est l'invariance par translation en temps (Théorème VII.3.5) et la propriété de groupe $F_t\cdot(F_s\cdot x)=F_{s+t}\cdot x$ (Remarque VII.3.6). Pour le champ **non autonome** (rotation + vent périodique $X(t,x,y)=(-y+1{,}2\cos 2t,\;x)$), l'orange se **décolle** : la propriété de groupe à deux arguments est fausse, il faut les trois arguments.
* Bouton « $t=-s$ » : le rose revient exactement sur $A$, c'est $F(s,0,F(0,s,x))=x$ (Corollaire VII.3.8) : l'inverse de $F(0,s,\cdot)$ est $F(s,0,\cdot)$. Dans le cas autonome, $F(s,0,\cdot)=F(0,-s,\cdot)=F_{-s}$ est l'inverse de $F_s$ ; dans le cas non autonome, l'inverse de $F(0,s,\cdot)$ n'est **pas** $F(0,-s,\cdot)$ : avec $t=-s$ et la case « composition naïve » cochée, l'orange $F(0,-s,F(0,s,A))$ ne revient pas sur $A$.

Les flèches grises représentent le champ (à l'instant $0$ pour le champ non autonome). Pour ces cinq champs, toutes les courbes intégrales maximales sont définies sur $\mathbb R$ tout entier (pour les quatre champs autonomes, $D_0=\mathbb R\times U$, donc $t\mapsto F_t$ est un vrai morphisme de groupes de $(\mathbb R,+)$ dans les bijections du plan ; pour le champ non autonome, $D=\mathbb R\times\mathbb R\times U$ et ce sont les applications $F(s,t,\cdot)$ qui se composent : $F(t,u,\cdot)\circ F(s,t,\cdot)=F(s,u,\cdot)$). Observe aussi la déformation du quadrillage : la selle étire d'un facteur $e^{s}$ selon $x$ et écrase d'un facteur $e^{-s}$ selon $y$, la rotation déplace $A$ rigidement, le pendule et le champ polynomial le tordent ; mais les cinq champs sont de divergence nulle, donc leur flot **conserve l'aire** de $A$ (selle comprise : $e^{s}e^{-s}=1$).`,
  related: ['ch07-groupe-un-parametre', 'ch07-translation-temps-autonome', 'ch07-composition-flot', 'ch07-flot-inverse', 'ch07-flot-global-def', 'ch07-proprietes-flot-formules'],
  height: 520,
  mount(container, kit) {
    const st = kit.canvas(container, { height: 380 });
    const controls = kit.controls(container);
    const fields = {
      rot: { label: 'rotation (−y, x)', auto: true, X: (t, x, y) => [-y, x] },
      selle: { label: 'selle (x, −y)', auto: true, X: (t, x, y) => [x, -y] },
      pend: { label: 'pendule (y, −sin x)', auto: true, X: (t, x, y) => [y, -Math.sin(x)] },
      poly: { label: 'polynomial (y − y⁵, x)', auto: true, X: (t, x, y) => [y - Math.pow(y, 5), x] },
      vent: { label: 'non autonome : (−y + 1,2 cos 2t, x)', auto: false, X: (t, x, y) => [-y + 1.2 * Math.cos(2 * t), x] },
    };
    const sel = kit.select(controls, { label: 'champ $X$', options: Object.keys(fields).map(k => [fields[k].label, k]), value: 'vent', onChange: () => draw() });
    const ss = kit.slider(controls, { label: '$s$ (1re étape)', min: -3, max: 3, step: 0.05, value: 1, onChange: () => draw() });
    const stt = kit.slider(controls, { label: '$t$ (2e étape)', min: -3, max: 3, step: 0.05, value: 1.2, onChange: () => { stopAnim(); draw(); } });
    const naive = kit.checkbox(controls, { label: 'composition naïve', checked: true, onChange: () => draw() });
    kit.button(controls, { label: 't = −s', onClick: () => { stopAnim(); stt.value = -ss.value; draw(); } });
    const bPlay = kit.button(controls, { label: '▶ animer t', primary: true, onClick: () => toggleAnim() });
    const ro = kit.readout(controls, { label: 'centre de A' });
    const legend = document.createElement('div'); legend.className = 'viz-note'; container.appendChild(legend);

    let center = [0.9, 0.4], dragging = false; const side = 0.8, M = 9; // lattice M x M
    let anim = null, dir = 1;
    function stopAnim() { if (anim) { anim.stop(); anim = null; } bPlay.textContent = '▶ animer t'; }
    function toggleAnim() {
      if (anim) { stopAnim(); return; }
      bPlay.textContent = '⏸ pause';
      anim = kit.animate(dt => { let v = stt.value + dir * dt * 0.8; if (v > 3) { v = 3; dir = -1; } if (v < -3) { v = -3; dir = 1; } stt.value = Math.round(v * 100) / 100; draw(); });
    }
    // flow F(t0, t1, p) by RK4
    function flow(X, t0, t1, p) {
      const T = t1 - t0; if (Math.abs(T) < 1e-12) return [p[0], p[1]];
      const sg = T > 0 ? 1 : -1; let x = p[0], y = p[1], t = t0, rem = Math.abs(T), guard = 0;
      while (rem > 1e-12 && guard++ < 20000) {
        const v0 = X(t, x, y); const hm = Math.min(rem, 0.025, 0.06 / (1 + Math.hypot(v0[0], v0[1]))); const h = sg * hm;
        const k1 = v0, k2 = X(t + h / 2, x + h / 2 * k1[0], y + h / 2 * k1[1]), k3 = X(t + h / 2, x + h / 2 * k2[0], y + h / 2 * k2[1]), k4 = X(t + h, x + h * k3[0], y + h * k3[1]);
        x += h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]); y += h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]); t += h; rem -= hm;
        if (!isFinite(x) || !isFinite(y) || Math.abs(x) > 1e4 || Math.abs(y) > 1e4) return [NaN, NaN];
      }
      return [x, y];
    }
    let P = null;
    function lattice() { const L = []; for (let i = 0; i < M; i++) { const row = []; for (let j = 0; j < M; j++) row.push([center[0] - side / 2 + side * j / (M - 1), center[1] - side / 2 + side * i / (M - 1)]); L.push(row); } return L; }
    const mapL = (L, f) => L.map(row => row.map(f));
    function drawGrid(L, { color, width = 1, fill = false, alpha = 1, dash = null, outlineOnly = false }) {
      const { ctx } = st; ctx.save(); ctx.globalAlpha = alpha;
      const boundary = [...L[0], ...L.map(r => r[M - 1]).slice(1), ...L[M - 1].slice().reverse().slice(1), ...L.map(r => r[0]).reverse().slice(1)];
      if (fill) P.fill(boundary, { color, alpha: 0.28 * alpha });
      if (!outlineOnly) {
        for (let i = 0; i < M; i++) { P.curve(L[i], { color, width }); P.curve(L.map(r => r[i]), { color, width }); }
      }
      P.curve(boundary, { color, width: outlineOnly ? width : width + 0.8, dash, close: true });
      ctx.restore();
    }
    function draw() { try { render(); } catch (e) { console.warn(e); } }
    function render() {
      const T = kit.theme(); const { ctx, W, H } = st; st.clear();
      ctx.fillStyle = T.bg; ctx.fillRect(0, 0, W, H);
      const F = fields[sel.value]; const X = F.X; const s = ss.value, t = stt.value;
      P = kit.plane(ctx, { xmin: -3, xmax: 3, ymin: -2.6, ymax: 2.6, W, H });
      P.grid(1); P.axes({ labels: true, step: 1, xlabel: 'x', ylabel: 'y' });
      // vector field arrows at time 0
      const stepA = W < 420 ? 0.6 : 0.5;
      for (let x = Math.ceil(P.xmin / stepA) * stepA; x <= P.xmax; x += stepA) for (let y = Math.ceil(P.ymin / stepA) * stepA; y <= P.ymax; y += stepA) {
        const v = X(0, x, y); const nv = Math.hypot(v[0], v[1]); if (!(nv > 1e-9)) continue;
        const len = Math.min(stepA * 0.42, 0.18 + 0.12 * Math.log1p(nv)); const [px0, py0] = P.toPx(x, y); const [px1, py1] = P.toPx(x + v[0] / nv * len, y + v[1] / nv * len);
        ctx.save(); ctx.globalAlpha = 0.45; kit.arrow(ctx, px0, py0, px1, py1, { color: T.axis, width: 1, head: 4 }); ctx.restore();
      }
      // orbit of the center from 0 to s+t
      const orb = []; const tot = s + t; const no = 120; let q = center.slice(); orb.push(q);
      // piecewise along 0 -> s then s -> s+t (same thing as 0 -> s+t by composition)
      for (let i = 1; i <= no; i++) { q = flow(X, tot * (i - 1) / no, tot * i / no, q); orb.push(q); }
      P.curve(orb, { color: T.muted, width: 1, dash: [2, 3] });
      const A = lattice();
      const As = mapL(A, p => flow(X, 0, s, p));
      const comp = mapL(As, p => flow(X, s, s + t, p));
      const direct = mapL(A, p => flow(X, 0, s + t, p));
      drawGrid(A, { color: T.muted, width: 0.8, fill: true, alpha: 0.9 });
      drawGrid(As, { color: T.accent, width: 0.9, alpha: 0.85 });
      if (naive.value) { const nai = mapL(As, p => flow(X, 0, t, p)); drawGrid(nai, { color: T.accent4, width: 2.2, dash: [6, 4], outlineOnly: true }); }
      drawGrid(comp, { color: T.accent2, width: 1, fill: true });
      drawGrid(direct, { color: T.accent3, width: 3.2, outlineOnly: true, alpha: 0.75 });
      // markers & readout
      const c1 = flow(X, 0, s, center), c2 = flow(X, s, s + t, c1), c3 = flow(X, 0, s + t, center), c4 = flow(X, 0, t, c1);
      P.point(center[0], center[1], { r: 5, color: T.fg, label: 'x' });
      P.point(c2[0], c2[1], { r: 3.5, color: T.accent2 });
      const gap = Math.hypot(c2[0] - c3[0], c2[1] - c3[1]), gapN = Math.hypot(c4[0] - c3[0], c4[1] - c3[1]);
      const f = v => (isFinite(v) ? v.toFixed(2) : '∞');
      ro.set(`x = (${f(center[0])}, ${f(center[1])}) · écart rose/vert = ${isFinite(gap) ? gap.toExponential(0) : '—'}` + (naive.value ? ` · écart orange/vert = ${isFinite(gapN) ? gapN.toFixed(2) : '—'}` : ''));
      // title text on canvas
      ctx.save(); ctx.font = '12px system-ui, sans-serif'; ctx.fillStyle = T.fg; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillText(F.auto ? 'champ autonome' : 'champ dépendant du temps', 6, 6); ctx.restore();
      const sw = c => `<span style="display:inline-block;width:12px;height:12px;border-radius:2px;background:${c};vertical-align:-2px;margin:0 4px 0 10px"></span>`;
      legend.innerHTML = `${sw(T.muted)}A ${sw(T.accent)}F(0,s,A) ${sw(T.accent2)}F(s,s+t,F(0,s,A)) ${sw(T.accent3)}F(0,s+t,A)` + (naive.value ? ` ${sw(T.accent4)}F(0,t,F(0,s,A)) (naïf)` : '');
    }
    const offDrag = kit.drag(st.canvas, {
      onDown: p => { if (!P) return; const [x, y] = P.toWorld(p.x, p.y); dragging = Math.abs(x - center[0]) < side && Math.abs(y - center[1]) < side; },
      onMove: (p, ev, down) => { if (!down || !dragging || !P) return; const [x, y] = P.toWorld(p.x, p.y); center = [Math.max(-2.6, Math.min(2.6, x)), Math.max(-2.2, Math.min(2.2, y))]; draw(); },
      onUp: () => { dragging = false; },
    });
    st.onResize = draw; draw();
    return () => { stopAnim(); offDrag(); st.destroy(); };
  }
});
