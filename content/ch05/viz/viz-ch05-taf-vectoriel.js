FMA.registerViz({
  id: 'viz-ch05-taf-vectoriel',
  chapter: 5,
  title: "Accroissements finis vectoriels : une inégalité, pas une égalité",
  description: String.raw`**Ce que l'on voit.** On considère une courbe paramétrée $f:[a;b]\to\R^2$ de classe $C^1$ (choisie dans la liste) et deux paramètres $a<b$ réglables.

* **À gauche, la courbe dans le plan.** Le trait épais est l'arc $f([a;b])$. La corde (tirets verts) est le vecteur $f(b)-f(a)$. La flèche orange est le vecteur vitesse $f'(c)$ attaché au point $f(c)$ (avec sa tangente en pointillés), pour un paramètre $c\in[a;b]$ que l'on règle (ou que l'on anime). Si l'**égalité des accroissements finis** $f(b)-f(a)=f'(c)(b-a)$ était vraie pour un $c$, la tangente en $f(c)$ serait parallèle à la corde **et** de longueur exactement adaptée ; le panneau de droite compare directement $f'(c)$ à $m=\frac{f(b)-f(a)}{b-a}$.
* **À droite, l'« hodographe »** : la courbe $t\mapsto f'(t)$ des vecteurs vitesse, $t\in[a;b]$ (trait épais), son enveloppe convexe (zone teintée), et le point vert $m=\dfrac{f(b)-f(a)}{b-a}$ (pente moyenne). L'égalité $f(b)-f(a)=f'(c)(b-a)$ pour un certain $c$ revient à dire que **$m$ est sur l'hodographe**.

**Ce qu'il faut retenir.**
1. Pour une fonction **réelle**, l'hodographe est un intervalle de $\R$ parcouru continûment et $m$ y est toujours (théorème des valeurs intermédiaires) : c'est l'égalité des accroissements finis. Choisissez « graphe de $t^3-t$ » : la première coordonnée de $f'$ vaut $1$, l'hodographe est une droite verticale, et $m$ est dessus.
2. Pour une courbe **à valeurs dans $\R^2$**, $m$ peut être **hors** de l'hodographe : avec le cercle $(\cos t,\sin t)$ sur $[0;2\pi]$ on a $f(2\pi)-f(0)=0$ mais $\|f'(t)\|=1$ pour tout $t$ (poly, Théorème V.4.4, p. 104, et son contre-exemple). Le point $m=0$ est au centre du cercle de l'hodographe, jamais dessus.
3. Ce qui reste vrai est l'**inégalité** $\|f(b)-f(a)\|\le \sup_{[a;b]}\|f'\|\,(b-a)$ (poly, Théorème V.4.1, p. 103, et Corollaire V.4.3, p. 104). On la lit à droite : $m$ est toujours dans le disque de rayon $\sup\|f'\|$, et même dans l'enveloppe convexe de l'hodographe, car $m$ est la **moyenne** des vecteurs $f'(t)$ : $f(b)-f(a)=\int_a^b f'(t)\,dt$ (poly, Théorème V.4.7, p. 105).`,
  related: ['ch05-accroissements-finis-vectoriel', 'ch05-accroissements-finis-borne', 'ch05-accroissements-finis', 'ch05-theoreme-fondamental', 'ch05-differentielle-nulle-constante'],
  height: 640,
  mount(container, kit) {
    const th = () => kit.theme();
    const CV = {
      circle: { lab: 'cercle (cos t, sin t)', t0: 0, t1: 2 * Math.PI, f: t => [Math.cos(t), Math.sin(t)], d: t => [-Math.sin(t), Math.cos(t)], a: 0, b: 6.28 },
      cusp: { lab: 'point de rebroussement (t², t³)', t0: -1.5, t1: 1.5, f: t => [t * t, t * t * t], d: t => [2 * t, 3 * t * t], a: -1, b: 1 },
      spiral: { lab: 'spirale (t cos t, t sin t)', t0: 0, t1: 3 * Math.PI, f: t => [t * Math.cos(t), t * Math.sin(t)], d: t => [Math.cos(t) - t * Math.sin(t), Math.sin(t) + t * Math.cos(t)], a: 0.5, b: 6 },
      liss: { lab: 'huit (cos t, sin 2t)', t0: 0, t1: 2 * Math.PI, f: t => [Math.cos(t), Math.sin(2 * t)], d: t => [-Math.sin(t), 2 * Math.cos(2 * t)], a: 0.3, b: 5.5 },
      cubic: { lab: 'graphe de t³ − t (cas « scalaire »)', t0: -1.4, t1: 1.4, f: t => [t, t * t * t - t], d: t => [1, 3 * t * t - 1], a: -1.2, b: 1.2 },
    };
    const keys = Object.keys(CV);
    let cur = 'circle', bb = null, hb = null;
    const controls = kit.controls(container);
    const sel = kit.select(controls, { label: 'courbe', options: keys.map(k => [CV[k].lab, k]), value: cur, onChange: (k) => { cur = k; reset(); } });
    const aS = kit.slider(controls, { label: '$a$', min: 0, max: 6.28, step: 0.01, value: 0, onChange: v => { if (v > bS.value - 0.05) bS.value = Math.min(CV[cur].t1, v + 0.05); draw(); } });
    const bS = kit.slider(controls, { label: '$b$', min: 0, max: 6.28, step: 0.01, value: 6.28, onChange: v => { if (v < aS.value + 0.05) aS.value = Math.max(CV[cur].t0, v - 0.05); draw(); } });
    const cS = kit.slider(controls, { label: '$c$', min: 0, max: 1, step: 0.005, value: 0.3, format: v => (+v).toFixed(2), onChange: () => { stopAnim(); draw(); } });
    let anim = null; let animBtn;
    function stopAnim() { if (anim) { anim.stop(); anim = null; if (animBtn) animBtn.textContent = 'animer c'; } }
    animBtn = kit.button(controls, { label: 'animer c', onClick: () => {
      if (anim) { stopAnim(); return; }
      animBtn.textContent = 'stop';
      anim = kit.animate((dt, ts) => { cS.value = 0.5 + 0.5 * Math.sin(ts * 0.8 - 1.2); draw(); });
    } });
    const ro1 = kit.readout(controls, { label: '' });
    const ro2 = kit.readout(controls, { label: '' });
    const sL = kit.canvas(container, { height: 280 });
    const sR = kit.canvas(container, { height: 280 });

    function boxOf(pts, extra) {
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      pts.concat(extra || []).forEach(p => { x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); y0 = Math.min(y0, p[1]); y1 = Math.max(y1, p[1]); });
      const mx = Math.max(x1 - x0, 1e-6) * 0.18, my = Math.max(y1 - y0, 1e-6) * 0.18;
      return { xmin: x0 - mx, xmax: x1 + mx, ymin: y0 - my, ymax: y1 + my };
    }
    function reset() {
      stopAnim();
      const c = CV[cur]; const N = 200; const pf = [], pd = [];
      for (let i = 0; i <= N; i++) { const t = c.t0 + (c.t1 - c.t0) * i / N; pf.push(c.f(t)); pd.push(c.d(t)); }
      bb = boxOf(pf); hb = boxOf(pd, [[0, 0]]);
      aS.input.min = bS.input.min = c.t0; aS.input.max = bS.input.max = c.t1;
      aS.value = c.a; bS.value = c.b; draw();
    }
    function hull(pts) {
      const p = pts.slice().sort((u, v) => u[0] - v[0] || u[1] - v[1]); if (p.length < 3) return p;
      const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
      const lo = []; for (const q of p) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
      const up = []; for (let i = p.length - 1; i >= 0; i--) { const q = p[i]; while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
      lo.pop(); up.pop(); return lo.concat(up);
    }
    function inHull(H, m, tol) {
      if (H.length < 3) return false;
      for (let i = 0; i < H.length; i++) { const p = H[i], q = H[(i + 1) % H.length]; const crs = (q[0] - p[0]) * (m[1] - p[1]) - (q[1] - p[1]) * (m[0] - p[0]); if (crs < -tol) return false; }
      return true;
    }
    function text(ctx, s, x, y, o = {}) { ctx.save(); ctx.fillStyle = o.color || th().muted; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = o.align || 'left'; ctx.textBaseline = o.base || 'top'; ctx.fillText(s, x, y); ctx.restore(); }
    function draw() {
      try {
        const t = th(); const c = CV[cur]; const a = aS.value, b = bS.value, tc = a + cS.value * (b - a);
        const fa = c.f(a), fb = c.f(b), fc = c.d(tc); const L = b - a;
        const chord = [fb[0] - fa[0], fb[1] - fa[1]]; const m = [chord[0] / L, chord[1] / L];
        const N = 160; const arc = [], hod = []; let sup = 0;
        for (let i = 0; i <= N; i++) { const s = a + L * i / N; arc.push(c.f(s)); const d = c.d(s); hod.push(d); sup = Math.max(sup, Math.hypot(d[0], d[1])); }
        const full = []; for (let i = 0; i <= 200; i++) full.push(c.f(c.t0 + (c.t1 - c.t0) * i / 200));
        // left
        sL.clear(); { const { ctx, W, H } = sL;
          const P = kit.plane(ctx, bb && { xmin: bb.xmin, xmax: bb.xmax, ymin: bb.ymin, ymax: bb.ymax, W, H });
          P.grid(1); P.axes({ labels: true });
          P.curve(full, { color: t.axis, width: 1.5, dash: [3, 3] });
          P.curve(arc, { color: t.accent, width: 3.5 });
          P.vector(fa[0], fa[1], chord[0], chord[1], { color: t.accent3, width: 2.5, head: 10 });
          const pc = c.f(tc);
          { const nf = Math.hypot(fc[0], fc[1]) || 1, sc = 50 / nf, ln = [[pc[0] - fc[0] * sc, pc[1] - fc[1] * sc], [pc[0] + fc[0] * sc, pc[1] + fc[1] * sc]]; P.curve(ln, { color: t.accent4, width: 1, dash: [4, 4] }); }
          P.vector(pc[0], pc[1], fc[0], fc[1], { color: t.accent4, width: 2.5, head: 10 }); P.point(pc[0], pc[1], { r: 4, color: t.accent4, label: 'f(c)' });
          P.point(fa[0], fa[1], { r: 5, color: t.accent, label: 'f(a)' }); P.point(fb[0], fb[1], { r: 5, color: t.accent, label: 'f(b)' });
          text(ctx, 'corde f(b)−f(a) (vert), vitesse f′(c) (orange)', 8, 5);
        }
        // right
        const Hh = hull(hod); let dist = Infinity; for (let i = 0; i <= 800; i++) { const d = c.d(a + L * i / 800); dist = Math.min(dist, Math.hypot(d[0] - m[0], d[1] - m[1])); }
        sR.clear(); { const { ctx, W, H } = sR;
          const box = boxOf(hb ? [[hb.xmin, hb.ymin], [hb.xmax, hb.ymax]] : [], [m, [sup, sup], [-sup, -sup]]);
          const P = kit.plane(ctx, { xmin: box.xmin, xmax: box.xmax, ymin: box.ymin, ymax: box.ymax, W, H });
          P.grid(1); P.axes({ labels: true });
          P.circle(0, 0, sup, { color: t.muted, width: 1.2, dash: [4, 4] });
          P.fill(Hh, { color: t.accent, alpha: 0.12 });
          P.curve(hod, { color: t.accent, width: 3.5 });
          P.vector(0, 0, fc[0], fc[1], { color: t.accent4, width: 2.5, head: 9 });
          P.point(fc[0], fc[1], { r: 4, color: t.accent4, label: "f′(c)" });
          P.point(m[0], m[1], { r: 6, color: t.accent3, stroke: '#fff', label: 'm' });
          text(ctx, 'hodographe f′(t) ; pointillé : rayon sup‖f′‖', 8, 5);
          text(ctx, 'zone teintée : enveloppe convexe', 8, 19);
        }
        const nrm = Math.hypot(chord[0], chord[1]);
        const inside = inHull(Hh, m, 1e-9 * (1 + sup)) || dist < 1e-3 * (1 + sup);
        const f3 = v => (Math.abs(v) < 5e-4 ? '0' : v.toFixed(3)).replace('-', '−');
        ro1.set(`‖f(b)−f(a)‖ = <b>${f3(nrm)}</b> ≤ sup‖f′‖·(b−a) = <b>${f3(sup * L)}</b>`);
        ro2.set(`distance de m à l'hodographe = <b>${f3(dist)}</b> : ` + (dist > 2e-3 * (1 + sup) ? '<b style="color:var(--accent-2)">aucun c ne vérifie f(b)−f(a)=f′(c)(b−a)</b>' : '<b style="color:var(--accent-3)">il existe (ici) un c avec égalité</b>') + ` ; m ∈ enveloppe convexe : <b>${inside ? 'oui' : 'non'}</b>`);
      } catch (e) { console.error(e); }
    }
    sL.onResize = draw; sR.onResize = draw;
    reset();
    return () => { stopAnim(); sL.destroy(); sR.destroy(); };
  }
});
