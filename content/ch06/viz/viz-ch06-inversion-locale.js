FMA.registerViz({
  id: 'viz-ch06-inversion-locale',
  chapter: 6,
  title: "Inversion locale : l'image d'un petit disque et la différentielle",
  description: String.raw`**Ce que l'on voit.** À gauche, le plan de départ avec un disque $D(a,\rho)$ (centre $a$ **à glisser**, rayon $\rho$ au curseur) quadrillé en cercles concentriques et en rayons colorés. À droite, l'**image** de ce disque par l'application $f:\mathbb R^2\to\mathbb R^2$ choisie, avec les mêmes couleurs. La courbe tiretée est l'image du cercle par l'**approximation linéaire** $h\mapsto f(a)+df_a(h)$ (une ellipse). En rouge : le lieu critique $\{\det df=0\}$ et son image.

**Ce qu'il faut regarder.**
* **Avec $\rho$ petit et $\det df_a\neq0$** : l'image est un petit disque déformé, *injectif*, presque confondu avec l'ellipse tiretée. C'est le théorème d'inversion locale (poly, Théorème VI.3.2, p. 120) : $f$ est un difféomorphisme d'un voisinage de $a$ sur un voisinage de $f(a)$, et sa réciproque a pour différentielle $(df_a)^{-1}$.
* **Faites grandir $\rho$** : le théorème est *local*. Pour $z\mapsto z^2$ (ou $\exp$) la différentielle est inversible là où l'on regarde, mais dès que le disque est assez grand l'image se recouvre elle-même : $f$ n'est plus injective (poly, Corollaire VI.3.3, p. 120 : il faut **aussi** l'injectivité pour avoir un difféomorphisme global). Le diagnostic, calculé en direct, utilise le fait que, si $df$ est inversible sur tout le disque, $f$ y est injective si et seulement si l'image du cercle est une courbe simple.
* **Approchez-vous du lieu critique rouge** (là où $\det df=0$, c'est-à-dire $df_a$ non inversible) : l'ellipse tiretée s'aplatit en segment, et l'image du disque se **replie** (pli de $(x,y)\mapsto(x,y^2)$ : les deux moitiés du disque s'envoient sur la même région). Aucune réciproque locale n'existe autour de ces points.
* **$(x,y)\mapsto(x^3,y)$** : $\det df=3x^2$ s'annule sur l'axe $x=0$, et pourtant $f$ y est injective. Mais sa réciproque $X\mapsto X^{1/3}$ n'est pas dérivable : l'hypothèse « $df_a$ isomorphisme » ne peut pas être remplacée par « $f$ bijective ».`,
  related: ['ch06-inversion-locale', 'ch06-inversion-globale', 'ch06-diffeomorphisme-def'],
  height: 500,
  mount(container, kit) {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;';
    container.appendChild(wrap);
    const mk = () => { const d = document.createElement('div'); d.style.cssText = 'flex:1 1 300px;min-width:0;'; wrap.appendChild(d); return d; };
    const cL = mk(), cR = mk();
    const stL = kit.canvas(cL, { height: 320 }), stR = kit.canvas(cR, { height: 320 });
    const controls = kit.controls(container);
    const cs = Math.cos, sn = Math.sin, ex = Math.exp;
    const FUNS = {
      z2: { name: 'z ↦ z²  (x,y)↦(x²−y², 2xy)', F: (x, y) => [x * x - y * y, 2 * x * y], J: (x, y) => [2 * x, -2 * y, 2 * y, 2 * x],
        winL: [-2.4, 2.4, -2.1, 2.1], winG: [-5, 5, -5, 5], a0: [1, 0.5], rho0: 0.6, crit: { pt: [0, 0] }, critImg: { pt: [0, 0] }, critNote: "$f$ n'est pas inversible en $0$" },
      exp: { name: 'exp : (x,y)↦(eˣcos y, eˣsin y)', F: (x, y) => [ex(x) * cs(y), ex(x) * sn(y)], J: (x, y) => [ex(x) * cs(y), -ex(x) * sn(y), ex(x) * sn(y), ex(x) * cs(y)],
        winL: [-4.6, 4.6, -4, 4], winG: [-4, 4, -4, 4], a0: [0, 0], rho0: 1.5, crit: null, critImg: null, critNote: '' },
      polar: { name: 'polaires : (r,θ)↦(r cosθ, r sinθ)', F: (x, y) => [x * cs(y), x * sn(y)], J: (x, y) => [cs(y), -x * sn(y), sn(y), x * cs(y)],
        winL: [-1.8, 3.6, -3.4, 3.4], winG: [-4, 4, -4, 4], a0: [1.5, 0.8], rho0: 0.8, crit: { vline: 0 }, critImg: { pt: [0, 0] }, critNote: 'les polaires ne sont pas inversibles en $r=0$' },
      fold: { name: 'pli : (x,y)↦(x, y²)', F: (x, y) => [x, y * y], J: (x, y) => [1, 0, 0, 2 * y],
        winL: [-2.4, 2.4, -2.1, 2.1], winG: [-2.6, 2.6, -1.2, 4.6], a0: [0, 0.6], rho0: 0.9, crit: { hline: 0 }, critImg: { hline: 0 }, critNote: "le disque contient des points de l'axe $y=0$ où $\\det df=0$" },
      cube: { name: 'cube : (x,y)↦(x³, y)', F: (x, y) => [x * x * x, y], J: (x, y) => [3 * x * x, 0, 0, 1],
        winL: [-2.4, 2.4, -2.1, 2.1], winG: [-8, 8, -5, 5], a0: [0.6, 0.3], rho0: 0.9, crit: { vline: 0 }, critImg: { vline: 0 }, critNote: "le disque contient des points de l'axe $x=0$ où $\\det df=0$ (ici $f$ reste injective, mais sa réciproque n'est pas $C^1$)" },
    };
    let a = FUNS.z2.a0.slice();
    const sel = kit.select(controls, { label: '$f$', options: Object.keys(FUNS).map(k => [FUNS[k].name, k]), value: 'z2', onChange: () => { const F = FUNS[sel.value]; a = F.a0.slice(); rho.value = F.rho0; draw(); } });
    [sel].forEach(x => { x.el.style.maxWidth = '100%'; x.select.style.maxWidth = '100%'; x.select.style.minWidth = '0'; });
    const rho = kit.slider(controls, { label: String.raw`$\rho$`, min: 0.05, max: 3.5, step: 0.05, value: 0.6, onChange: draw });
    const view = kit.select(controls, { label: "vue de l'arrivée", options: [['zoom sur f(a)', 'zoom'], ['globale', 'glob']], value: 'zoom', onChange: draw });
    const ro = kit.readout(controls, { label: '' });
    const msg = kit.note(container, '');
    let lastKey = null, PL = null;

    function niceStep(range) { const raw = range / 4, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; }
    function segInter(p1, p2, p3, p4) {
      const d = (p2[0] - p1[0]) * (p4[1] - p3[1]) - (p2[1] - p1[1]) * (p4[0] - p3[0]);
      if (Math.abs(d) < 1e-14) return false;
      const t = ((p3[0] - p1[0]) * (p4[1] - p3[1]) - (p3[1] - p1[1]) * (p4[0] - p3[0])) / d;
      const u = ((p3[0] - p1[0]) * (p2[1] - p1[1]) - (p3[1] - p1[1]) * (p2[0] - p1[0])) / d;
      return t > 1e-9 && t < 1 - 1e-9 && u > 1e-9 && u < 1 - 1e-9;
    }
    function selfIntersects(poly) { // polygone fermé
      const n = poly.length;
      for (let i = 0; i < n; i++) for (let j = i + 2; j < n; j++) {
        if (i === 0 && j === n - 1) continue;
        if (segInter(poly[i], poly[(i + 1) % n], poly[j], poly[(j + 1) % n])) return true;
      }
      return false;
    }
    function drawCrit(P, crit, color) {
      if (!crit) return;
      if (crit.pt) P.point(crit.pt[0], crit.pt[1], { r: 4, color });
      if (crit.vline !== undefined) P.curve([[crit.vline, P.ymin - 1], [crit.vline, P.ymax + 1]], { color, width: 2 });
      if (crit.hline !== undefined) P.curve([[P.xmin - 1, crit.hline], [P.xmax + 1, crit.hline]], { color, width: 2 });
    }
    function draw() { try { drawInner(); } catch (e) { console.error(e); } }
    function drawInner() {
      const t = kit.theme(), Fd = FUNS[sel.value], F = Fd.F, r = rho.value;
      const ctxL = stL.ctx, ctxR = stR.ctx;
      const w = Fd.winL;
      // --- points de la grille polaire du disque ---
      const NR = 3, NA = 12, NS = 90;
      const circles = [], rays = [];
      for (let k = 1; k <= NR; k++) { const rr = r * k / NR, pts = []; for (let i = 0; i <= NS; i++) { const th = 2 * Math.PI * i / NS; pts.push([a[0] + rr * cs(th), a[1] + rr * sn(th)]); } circles.push(pts); }
      for (let j = 0; j < NA; j++) { const th = 2 * Math.PI * j / NA, pts = []; for (let i = 0; i <= 30; i++) { const rr = r * i / 30; pts.push([a[0] + rr * cs(th), a[1] + rr * sn(th)]); } rays.push(pts); }
      const img = L => L.map(p => F(p[0], p[1]));
      const fa = F(a[0], a[1]);
      const J = Fd.J(a[0], a[1]);
      const det = J[0] * J[3] - J[1] * J[2];
      const bd = []; for (let i = 0; i < 120; i++) { const th = 2 * Math.PI * i / 120; bd.push([a[0] + r * cs(th), a[1] + r * sn(th)]); }
      const bdImg = bd.map(p => F(p[0], p[1]));
      const lin = []; for (let i = 0; i <= 120; i++) { const th = 2 * Math.PI * i / 120, h0 = r * cs(th), h1 = r * sn(th); lin.push([fa[0] + J[0] * h0 + J[1] * h1, fa[1] + J[2] * h0 + J[3] * h1]); }
      // --- vue gauche ---
      stL.clear(); ctxL.fillStyle = t.bg; ctxL.fillRect(0, 0, stL.W, stL.H);
      PL = kit.plane(ctxL, { xmin: w[0], xmax: w[1], ymin: w[2], ymax: w[3], W: stL.W, H: stL.H });
      PL.grid(1); PL.axes({ labels: true, xlabel: 'x', ylabel: 'y' });
      PL.fill(bd, { color: t.accent, alpha: 0.12 });
      drawCrit(PL, Fd.crit, t.accent2);
      const hueCol = j => { const c = kit.hsl2rgb(j / NA, 0.75, 0.5); return `rgb(${c[0]},${c[1]},${c[2]})`; };
      circles.forEach(c => PL.curve(c, { color: t.muted, width: 1 }));
      rays.forEach((c, j) => PL.curve(c, { color: hueCol(j), width: 1.6 }));
      PL.curve(bd, { color: t.accent, width: 2.5, close: true });
      PL.point(a[0], a[1], { r: 5, color: t.accent4, stroke: t.fg, label: 'a' });
      ctxL.save(); ctxL.fillStyle = t.fg; ctxL.font = '12px system-ui, sans-serif'; ctxL.fillText('départ', 8, 16); ctxL.restore();
      // --- vue droite ---
      const cImgs = circles.map(img), rImgs = rays.map(img);
      let win;
      if (view.value === 'glob') win = Fd.winG.slice();
      else {
        let m = 1e-3; for (const L of cImgs.concat(rImgs)) for (const p of L) m = Math.max(m, Math.abs(p[0] - fa[0]), Math.abs(p[1] - fa[1]));
        for (const p of lin) m = Math.max(m, Math.abs(p[0] - fa[0]), Math.abs(p[1] - fa[1]));
        m *= 1.25; win = [fa[0] - m, fa[0] + m, fa[1] - m, fa[1] + m];
      }
      stR.clear(); ctxR.fillStyle = t.bg; ctxR.fillRect(0, 0, stR.W, stR.H);
      const PR = kit.plane(ctxR, { xmin: win[0], xmax: win[1], ymin: win[2], ymax: win[3], W: stR.W, H: stR.H });
      const step = niceStep(Math.min(PR.xmax - PR.xmin, PR.ymax - PR.ymin));
      PR.grid(step); PR.axes({ labels: true, step, xlabel: 'X', ylabel: 'Y' });
      PR.fill(bdImg, { color: t.accent, alpha: 0.12 });
      drawCrit(PR, Fd.critImg, t.accent2);
      cImgs.forEach(c => PR.curve(c, { color: t.muted, width: 1 }));
      rImgs.forEach((c, j) => PR.curve(c, { color: hueCol(j), width: 1.6 }));
      PR.curve(lin, { color: t.accent4, width: 2, dash: [6, 4] });
      PR.curve(bdImg, { color: t.accent, width: 2.5, close: true });
      PR.point(fa[0], fa[1], { r: 5, color: t.accent4, stroke: t.fg, label: 'f(a)' });
      ctxR.save(); ctxR.fillStyle = t.fg; ctxR.font = '12px system-ui, sans-serif'; ctxR.fillText('arrivée   (tirets : approx. linéaire)', 8, 16); ctxR.restore();

      // --- diagnostic ---
      const cr = Fd.crit; let hitsCrit = false;
      if (cr) {
        if (cr.pt) hitsCrit = Math.hypot(a[0] - cr.pt[0], a[1] - cr.pt[1]) < r;
        if (cr.vline !== undefined) hitsCrit = Math.abs(a[0] - cr.vline) < r;
        if (cr.hline !== undefined) hitsCrit = Math.abs(a[1] - cr.hline) < r;
      }
      let key, text;
      if (hitsCrit) { key = 'crit' + sel.value + (Math.abs(det) < 1e-9 ? 'a' : ''); text = String.raw`**Le disque rencontre le lieu critique** (${Fd.critNote}) : $df$ n'est pas inversible en certains points du disque, le théorème d'inversion locale ne s'applique pas autour d'eux${Math.abs(det) < 1e-9 ? ", y compris en $a$ : l'ellipse tiretée est dégénérée" : ''}.`; }
      else if (selfIntersects(bdImg)) { key = 'noninj'; text = String.raw`$df$ est inversible en tout point du disque (jacobien $\ne0$) **mais l'image du cercle se recoupe** : $f$ n'est pas injective sur ce disque. Le théorème est local : diminuez $\rho$. (Corollaire VI.3.3 : il faut l'injectivité *en plus*.)`; }
      else { key = 'diffeo'; text = String.raw`$\det df_a\neq 0$ et l'image du cercle est une courbe simple : $f$ réalise un difféomorphisme du disque sur son image (ouvert), de réciproque de différentielle $(df_a)^{-1}$ en $f(a)$.`; }
      const f3 = v => String(+v.toFixed(3));
      ro.set(`a = (${f3(a[0])}, ${f3(a[1])}) ; df_a = [[${f3(J[0])}, ${f3(J[1])}], [${f3(J[2])}, ${f3(J[3])}]] ; det df_a = ${f3(det)}`);
      if (key !== lastKey) { lastKey = key; kit.md(msg, text); }
    }
    const setA = p => { if (!PL) return; const q = PL.toWorld(p.x, p.y); a = [q[0], q[1]]; draw(); };
    const off = kit.drag(stL.canvas, { onDown: setA, onMove: (p, ev, down) => { if (down) setA(p); } });
    stL.onResize = draw; stR.onResize = draw;
    sel.value = 'z2'; rho.value = FUNS.z2.rho0;
    draw();
    return () => { off(); stL.destroy(); stR.destroy(); };
  }
});
