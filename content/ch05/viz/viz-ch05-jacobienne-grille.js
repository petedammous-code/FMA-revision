FMA.registerViz({
  id: 'viz-ch05-jacobienne-grille',
  chapter: 5,
  title: "Matrice jacobienne : une petite grille devient un parallélogramme",
  description: String.raw`**Ce que l'on voit.** **En haut**, le plan de départ des $x=(x_1,x_2)$ : un point $a$ (orange, **à glisser**), un petit carré $a+[-\delta,\delta]^2$ muni d'une grille (verticales bleues, horizontales roses), et une courbe $\alpha$ passant par $a$ (verte) dont le vecteur tangent en $t=0$ est $h=\alpha'(0)=\delta\,(\cos\varphi,\sin\varphi)$. **En bas** : le plan d'arrivée, **recentré sur $f(a)$ et agrandi** pour que l'image tienne dans la fenêtre. Traits pleins : l'image de la grille par $f:\R^2\to\R^2$ (courbée). Tirets : l'image de la même grille par l'**approximation affine** $x\mapsto f(a)+df_a(x-a)$, c'est-à-dire par la matrice jacobienne
$$J_f(a)=\begin{pmatrix}\partial_{x_1}f_1(a)&\partial_{x_2}f_1(a)\\ \partial_{x_1}f_2(a)&\partial_{x_2}f_2(a)\end{pmatrix},$$
dont la colonne $i$ est $\frac{\partial f}{\partial x_i}(a)$ (poly, section V.3.5, p. 103).

**Ce qu'il faut regarder.**
* **Réduisez $\delta$** : le carré image se confond avec le **parallélogramme** engendré par les colonnes de la jacobienne. C'est la différentiabilité : $f(a+h)=f(a)+df_a(h)+o(h)$ (poly, Définition V.3.1, p. 98). Le nombre « erreur max$/\|h\|$ » affiché tend vers $0$.
* **Facteur d'aire.** Le rapport (aire de l'image)$/$(aire du carré) tend vers le déterminant jacobien $\mathrm{Jac}(f)(a)=\det\big(df_a\big)$. Son signe donne l'orientation (négatif $\Rightarrow$ le parallélogramme est « retourné »).
* **Vecteurs tangents (poly, Remarque V.3.13, p. 100).** La flèche orange en haut est $h=\alpha'(0)$ ; en bas, la flèche orange est $df_a(h)=(f\circ\alpha)'(0)$, tangente à la courbe image $\beta=f\circ\alpha$ (verte). **Changez la courbure $\kappa$ de $\alpha$** sans toucher $\varphi$ : la courbe $\beta$ change mais la flèche $\beta'(0)=df_a(h)$ ne bouge pas, car elle ne dépend que de $h$.
* **Applications à essayer.** $z^2$ en coordonnées réelles, $(x_1,x_2)\mapsto(x_1^2-x_2^2,2x_1x_2)$ : la jacobienne en $a\neq0$ est une similitude directe (le parallélogramme est un carré, car $f$ est holomorphe et $f'(a)=2a\neq0$ : lien avec le chapitre I ; en $a=0$ la jacobienne est nulle). Le « repli » $(x_1,x_2)\mapsto(x_1^2,x_2)$ : le déterminant $2x_1$ s'annule sur l'axe $x_1=0$, où le carré est écrasé sur un segment (ce n'est plus un isomorphisme local : lien avec le théorème d'inversion locale du chapitre VI).`,
  related: ['ch05-matrice-jacobienne', 'ch05-vecteur-tangent-courbe', 'ch05-differentielle-def', 'ch05-composition-differentielles', 'ch05-differentielles-partielles'],
  height: 640,
  mount(container, kit) {
    const th = () => kit.theme();
    const FN = {
      z2: { lab: "z² : (x²−y², 2xy)", f: (x, y) => [x * x - y * y, 2 * x * y], a0: [0.8, 0.6] },
      pol: { lab: 'polaires : (x cos y, x sin y)', f: (x, y) => [x * Math.cos(y), x * Math.sin(y)], a0: [1.0, 0.8] },
      expc: { lab: 'exp : eˣ(cos y, sin y)', f: (x, y) => [Math.exp(x) * Math.cos(y), Math.exp(x) * Math.sin(y)], a0: [0.3, 0.8] },
      fold: { lab: 'repli : (x², y)', f: (x, y) => [x * x, y], a0: [0.6, 0.4] },
      quad: { lab: 'non conforme : (x+y²/2+0,3xy, y+x²/2)', f: (x, y) => [x + 0.5 * y * y + 0.3 * x * y, y + 0.5 * x * x], a0: [0.5, 0.7] },
      shear: { lab: 'linéaire : (x+y, y/2)', f: (x, y) => [x + y, 0.5 * y], a0: [0.4, 0.4] },
    };
    const keys = Object.keys(FN);
    let cur = 'z2'; let a = FN[cur].a0.slice();

    const controls = kit.controls(container);
    kit.select(controls, { label: '$f=$', options: keys.map(k => [FN[k].lab, k]), value: cur, onChange: (k) => { cur = k; a = FN[k].a0.slice(); draw(); } });
    const dS = kit.slider(controls, { label: '$\\delta$', min: 0.02, max: 1, step: 0.01, value: 0.5, onChange: draw });
    const phiS = kit.slider(controls, { label: '$\\varphi$ (°)', min: 0, max: 359, step: 1, value: 35, onChange: draw });
    const kapS = kit.slider(controls, { label: '$\\kappa$', min: -1.5, max: 1.5, step: 0.05, value: 0.8, format: v => (+v).toFixed(2), onChange: draw });
    const lin = kit.checkbox(controls, { label: 'approx. linéaire (tirets)', checked: true, onChange: draw });
    const ro1 = kit.readout(controls, { label: '' });
    const ro2 = kit.readout(controls, { label: '' });

    const sL = kit.canvas(container, { height: 270 });
    const sR = kit.canvas(container, { height: 270 });

    const f = (x, y) => FN[cur].f(x, y);
    function jac() {
      const e = 1e-6; const fx = f(a[0] + e, a[1]), fxm = f(a[0] - e, a[1]), fy = f(a[0], a[1] + e), fym = f(a[0], a[1] - e);
      return [[(fx[0] - fxm[0]) / (2 * e), (fy[0] - fym[0]) / (2 * e)], [(fx[1] - fxm[1]) / (2 * e), (fy[1] - fym[1]) / (2 * e)]];
    }
    const mv = (J, h) => [J[0][0] * h[0] + J[0][1] * h[1], J[1][0] * h[0] + J[1][1] * h[1]];
    function text(ctx, s, x, y, o = {}) { ctx.save(); ctx.fillStyle = o.color || th().muted; ctx.font = o.font || '11px system-ui, sans-serif'; ctx.textAlign = o.align || 'left'; ctx.textBaseline = o.base || 'top'; ctx.fillText(s, x, y); ctx.restore(); }
    const NDIV = 4, NS = 32;
    function lineSamples(i, vertical, d) { // i in 0..NDIV
      const c = -d + 2 * d * i / NDIV; const pts = [];
      for (let k = 0; k <= NS; k++) { const s = -d + 2 * d * k / NS; pts.push(vertical ? [c, s] : [s, c]); }
      return pts;
    }
    let PL;
    function draw() {
      try {
        const t = th(); const d = dS.value; const J = jac(); const fa = f(a[0], a[1]);
        const phi = phiS.value * Math.PI / 180, kap = kapS.value;
        const u = [Math.cos(phi), Math.sin(phi)], un = [-Math.sin(phi), Math.cos(phi)];
        const alpha = (s) => [a[0] + s * d * u[0] + s * s * kap * d * un[0], a[1] + s * d * u[1] + s * s * kap * d * un[1]];
        const curveT = []; for (let k = 0; k <= 40; k++) curveT.push(-1 + 2 * k / 40);
        // ---- left
        sL.clear(); { const { ctx, W, H } = sL;
          const yh = 1.6, xh = yh * W / H;
          PL = kit.plane(ctx, { xmin: -xh, xmax: xh, ymin: -yh, ymax: yh, W, H });
          PL.grid(1); PL.axes({ labels: true });
          PL.fill([[a[0] - d, a[1] - d], [a[0] + d, a[1] - d], [a[0] + d, a[1] + d], [a[0] - d, a[1] + d]], { color: t.accent, alpha: 0.12 });
          for (let i = 0; i <= NDIV; i++) {
            PL.curve(lineSamples(i, true, d).map(p => [a[0] + p[0], a[1] + p[1]]), { color: t.accent, width: 1.5 });
            PL.curve(lineSamples(i, false, d).map(p => [a[0] + p[0], a[1] + p[1]]), { color: t.accent2, width: 1.5 });
          }
          PL.curve(curveT.map(alpha), { color: t.accent3, width: 2.5 });
          PL.vector(a[0], a[1], d * u[0], d * u[1], { color: t.accent4, width: 3, head: 10 });
          PL.point(a[0], a[1], { r: 5, color: t.accent4, stroke: '#fff', label: 'a' });
          text(ctx, 'plan de départ  (flèche = h = α′(0))', 8, 5);
        }
        // ---- right
        const img = (p) => f(a[0] + p[0], a[1] + p[1]);
        const lg = (p) => { const m = mv(J, p); return [fa[0] + m[0], fa[1] + m[1]]; };
        let S = 1e-9;
        const probe = [];
        for (let i = 0; i <= NDIV; i++) { probe.push(...lineSamples(i, true, d), ...lineSamples(i, false, d)); }
        probe.forEach(p => { const q = img(p); S = Math.max(S, Math.abs(q[0] - fa[0]), Math.abs(q[1] - fa[1])); });
        curveT.forEach(s => { const q = f(...alpha(s)); S = Math.max(S, Math.abs(q[0] - fa[0]), Math.abs(q[1] - fa[1])); });
        S *= 1.18;
        sR.clear(); { const { ctx, W, H } = sR;
          const PR = kit.plane(ctx, { xmin: fa[0] - S, xmax: fa[0] + S, ymin: fa[1] - S * 0.82, ymax: fa[1] + S * 0.82, W, H });
          // frame lines through f(a)
          const [ox, oy] = PR.toPx(fa[0], fa[1]);
          ctx.save(); ctx.strokeStyle = t.grid; ctx.setLineDash([3, 4]); ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.moveTo(ox, 0); ctx.lineTo(ox, H); ctx.stroke(); ctx.restore();
          for (let i = 0; i <= NDIV; i++) {
            if (lin.value) {
              PR.curve(lineSamples(i, true, d).map(lg), { color: t.accent, width: 1.3, dash: [5, 4] });
              PR.curve(lineSamples(i, false, d).map(lg), { color: t.accent2, width: 1.3, dash: [5, 4] });
            }
          }
          for (let i = 0; i <= NDIV; i++) {
            PR.curve(lineSamples(i, true, d).map(img), { color: t.accent, width: 2 });
            PR.curve(lineSamples(i, false, d).map(img), { color: t.accent2, width: 2 });
          }
          PR.curve(curveT.map(s => f(...alpha(s))), { color: t.accent3, width: 2.5 });
          const jh = mv(J, [d * u[0], d * u[1]]);
          PR.vector(fa[0], fa[1], jh[0], jh[1], { color: t.accent4, width: 3, head: 10 });
          PR.point(fa[0], fa[1], { r: 5, color: t.accent4, stroke: '#fff', label: 'f(a)' });
          text(ctx, 'plan d\u2019arrivée, recentré sur f(a) (flèche = df_a(h) = β′(0))', 8, 5);
          text(ctx, 'trait plein : f(grille) ; tirets : f(a)+df_a(x−a)', 8, H - 6, { base: 'bottom' });
          text(ctx, 'fenêtre : ±' + S.toPrecision(2), W - 8, H - 6, { align: 'right', base: 'bottom' });
        }
        // ---- readouts
        const det = J[0][0] * J[1][1] - J[0][1] * J[1][0];
        let area = 0; const bd = [];
        const M = 40;
        for (let k = 0; k < M; k++) bd.push([-d + 2 * d * k / M, -d]);
        for (let k = 0; k < M; k++) bd.push([d, -d + 2 * d * k / M]);
        for (let k = 0; k < M; k++) bd.push([d - 2 * d * k / M, d]);
        for (let k = 0; k < M; k++) bd.push([-d, d - 2 * d * k / M]);
        const im = bd.map(img);
        for (let k = 0; k < im.length; k++) { const p = im[k], q = im[(k + 1) % im.length]; area += (p[0] * q[1] - q[0] * p[1]) / 2; }
        let emax = 0;
        bd.forEach(p => { const q = img(p), m = mv(J, p); const n = Math.hypot(p[0], p[1]); if (n > 0) emax = Math.max(emax, Math.hypot(q[0] - fa[0] - m[0], q[1] - fa[1] - m[1]) / n); });
        const r2 = v => (Math.abs(v) < 5e-4 ? '0' : v.toFixed(3)).replace('-', '−');
        ro1.set(`matrice jacobienne = [ ${r2(J[0][0])} ${r2(J[0][1])} ; ${r2(J[1][0])} ${r2(J[1][1])} ], déterminant = <b>${r2(det)}</b>`);
        ro2.set(`aire(image)/aire(carré) = <b>${r2(area / (4 * d * d))}</b> ; erreur max / ‖h‖ = <b>${emax < 1e-4 ? emax.toExponential(1) : emax.toFixed(3)}</b>` + (det < -1e-9 ? ' — orientation renversée' : (Math.abs(det) < 1e-3 ? ' — jacobien nul : carré écrasé' : '')));
      } catch (e) { console.error(e); }
    }
    function setFromPointer(p) {
      let [x, y] = PL.toWorld(p.x, p.y);
      x = Math.max(PL.xmin + 0.1, Math.min(PL.xmax - 0.1, x)); y = Math.max(-1.45, Math.min(1.45, y));
      a = [x, y]; draw();
    }
    const off = kit.drag(sL.canvas, { onDown: setFromPointer, onMove: (p, ev, down) => { if (down) setFromPointer(p); } });
    sL.onResize = draw; sR.onResize = draw;
    draw();
    return () => { off(); sL.destroy(); sR.destroy(); };
  }
});
