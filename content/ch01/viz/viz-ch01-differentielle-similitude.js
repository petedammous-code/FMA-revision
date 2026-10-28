FMA.registerViz({
  id: 'viz-ch01-differentielle-similitude',
  chapter: 1,
  title: 'La différentielle au microscope : similitude ou ellipse ?',
  description: String.raw`**Ce que l'on voit.** À gauche (au-dessus sur un téléphone), le *plan des $z$* : un point $z_0$ (orange, **à glisser**) et le petit disque $D(z_0,h)$ muni d'une grille polaire (cercles bleus, rayons verts) et d'un « drapeau » : le segment $[z_0,z_0+h]$ (orange) et le segment $[z_0,z_0+ih]$ (violet). À droite, le *microscope* : on trace, pour $\omega$ dans le disque unité, le **taux d'accroissement**
$$\omega\longmapsto\frac{f(z_0+h\omega)-f(z_0)}{h}$$
(traits pleins), c'est-à-dire l'image de la grille par $f$, recentrée en $f(z_0)$ et agrandie $1/h$ fois ; en **tirets**, l'image de la même grille par la différentielle $df_{z_0}$. Le cercle gris est le cercle unité, pour comparer les tailles.

**Le lien avec le cours.** Quand $h\to0$, les traits pleins se collent aux tirets : c'est la définition de la différentiabilité, $f(z_0+h\omega)=f(z_0)+h\,df_{z_0}(\omega)+o(h)$. Or toute application $\R$-linéaire de $\C$ s'écrit $L(\omega)=a\omega+b\bar\omega$ (poly, Lemme I.2.1, p. 6), et pour $L=df_{z_0}$ on a $a=\frac{\partial f}{\partial z}(z_0)$, $b=\frac{\partial f}{\partial \bar z}(z_0)$ (formule (I.2.4), poly, Remarque I.2.2, p. 7). L'image du cercle unité par $L$ est une **ellipse** de demi-axes $|a|+|b|$ et $\big||a|-|b|\big|$, et le déterminant jacobien vaut $|a|^2-|b|^2$.
* Si $b=0$ (**Cauchy–Riemann**, poly, Corollaire I.2.4, p. 8), l'ellipse est un **cercle** : $df_{z_0}$ est la multiplication par $f'(z_0)=a$, une similitude directe (rotation d'angle $\arg f'(z_0)$, homothétie de rapport $|f'(z_0)|$). Le drapeau garde son angle droit et son sens (poly, Remarque I.2.5, p. 8).
* Si $b\neq0$, la grille est aplatie en ellipse (cercles non conservés, angles déformés) ; si $|b|>|a|$, le drapeau est **retourné** (orientation renversée, déterminant $<0$) ; si $|a|=|b|$, tout est écrasé sur un segment.

**À faire.**
* Avec $z^2$, $e^z$ ou $1/z$, déplacez $z_0$ : le cercle tourne et change de taille, mais reste un cercle ; diminuez $h$ et regardez la grille courbe devenir la grille droite.
* Avec $z^3-z$, approchez un point critique $\pm1/\sqrt3$ (le point s'y aimante) : $f'(z_0)=0$, la différentielle est nulle, le cercle se réduit à un point et l'échelle du microscope s'adapte au terme d'ordre $2$ (angles doublés).
* Avec $\bar z$ : un cercle, mais le drapeau est retourné ($a=0$, $b=1$) : $\bar z$ n'est $\C$-dérivable nulle part (poly, Exemple I.2.7, p. 9). Avec $\Re z$ ou $|z|^2$ : un segment ($|a|=|b|$) ; pour $|z|^2$, on a $a=\bar z_0$, $b=z_0$, donc $b=0$ seulement en $z_0=0$ : $|z|^2$ est $\C$-dérivable en ce seul point, et n'est holomorphe sur aucun ouvert. Avec $z+\tfrac12\bar z$ : une vraie ellipse, orientation conservée.`,
  related: ['ch01-decomposition-r-lineaire', 'ch01-operateurs-dz-dzbar', 'ch01-c-derivable-ssi-df-c-lineaire', 'ch01-cauchy-riemann', 'ch01-similitude-conforme', 'ch01-exemple-zbar-rez-module', 'ch01-def-differentiable-r2'],
  height: 560,
  mount(container, kit) {
    const C = kit.complex;
    const DEG = 180 / Math.PI;
    // ---------- layout ----------
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;';
    container.appendChild(row);
    const mkCell = () => { const d = document.createElement('div'); d.style.cssText = 'flex:1 1 280px;min-width:0;'; row.appendChild(d); return d; };
    const stZ = kit.canvas(mkCell(), { height: 300 });
    const stW = kit.canvas(mkCell(), { height: 300 });
    const controls = kit.controls(container);

    // ---------- fonctions ----------
    const s3 = 1 / Math.sqrt(3);
    const FNS = {
      sq: { name: 'z²  (holomorphe)', f: z => C.mul(z, z), crit: [[0, 0]], z0: [0.8, 0.5] },
      cub: { name: 'z³ − z  (holomorphe)', f: z => C.sub(C.mul(z, C.mul(z, z)), z), crit: [[s3, 0], [-s3, 0]], z0: [0.9, 0.6] },
      exp: { name: 'exp z  (holomorphe)', f: C.exp, crit: [], z0: [0.3, 0.8] },
      inv: { name: '1/z  (holomorphe sur ℂ*)', f: z => C.inv(z), crit: [], z0: [0.9, 0.5], hole: true },
      conj: { name: 'z̄  (non holomorphe)', f: z => C.conj(z), crit: [], z0: [0.8, 0.5] },
      re: { name: 'Re z  (non holomorphe)', f: z => [z[0], 0], crit: [], z0: [0.8, 0.5] },
      mod2: { name: '|z|²  (ℂ-dérivable en 0 seulement)', f: z => [C.abs2(z), 0], crit: [[0, 0]], z0: [0.8, 0.5] },
      ell: { name: 'z + ½ z̄  (non holomorphe)', f: z => C.add(z, C.scale(C.conj(z), 0.5)), crit: [], z0: [0.8, 0.5] },
    };
    const sel = kit.select(controls, { label: '$f(z)=$', options: Object.keys(FNS).map(k => [FNS[k].name, k]), value: 'sq', onChange: () => { z0 = FNS[sel.value].z0.slice(); drawAll(); } });
    sel.select.style.maxWidth = '250px';
    const sH = kit.slider(controls, { label: 'rayon $h$ du disque', min: -2, max: 0, step: 0.05, value: -0.3, onChange: drawAll, format: v => (Math.pow(10, +v)).toPrecision(2) });
    const cbDf = kit.checkbox(controls, { label: 'tirets : image par $df_{z_0}$', checked: true, onChange: drawAll });
    const roAB = kit.readout(controls, { label: '' });
    const roG = kit.readout(controls, { label: '' });

    let z0 = FNS.sq.z0.slice();
    let PZ = null, PW = null;

    const safe = (fn, z) => { try { const w = fn(z); return (isFinite(w[0]) && isFinite(w[1])) ? w : null; } catch (e) { return null; } };
    // dérivées partielles par différences centrées, puis a = ∂f/∂z, b = ∂f/∂z̄ (Remarque I.2.2)
    function partials(fn, z) {
      const e = 1e-5;
      const fxp = safe(fn, [z[0] + e, z[1]]), fxm = safe(fn, [z[0] - e, z[1]]), fyp = safe(fn, [z[0], z[1] + e]), fym = safe(fn, [z[0], z[1] - e]);
      if (!fxp || !fxm || !fyp || !fym) return null;
      const fx = C.scale(C.sub(fxp, fxm), 1 / (2 * e)), fy = C.scale(C.sub(fyp, fym), 1 / (2 * e));
      const ify = C.mul([0, 1], fy);
      const a = C.scale(C.sub(fx, ify), 0.5), b = C.scale(C.add(fx, ify), 0.5);
      const clean = v => [Math.abs(v[0]) < 1e-7 ? 0 : v[0], Math.abs(v[1]) < 1e-7 ? 0 : v[1]];
      return { a: clean(a), b: clean(b) };
    }
    const L = (a, b, w) => C.add(C.mul(a, w), C.mul(b, C.conj(w)));
    function label(ctx, text, t) {
      ctx.save(); ctx.font = '600 12px system-ui, sans-serif'; const w = ctx.measureText(text).width;
      ctx.globalAlpha = 0.85; ctx.fillStyle = t.bg; ctx.fillRect(4, 4, w + 12, 20); ctx.globalAlpha = 1;
      ctx.fillStyle = t.fg; ctx.textBaseline = 'middle'; ctx.textAlign = 'left'; ctx.fillText(text, 10, 14); ctx.restore();
    }
    // la grille polaire du disque unité : cercles de rayon 1/4..1, 12 rayons ; le drapeau : [0,1] et [0,i]
    const NC = 4, NR = 12, NS = 72;
    function gridCurves() {
      const circles = [], radii = [];
      for (let k = 1; k <= NC; k++) { const r = k / NC, pts = []; for (let s = 0; s <= NS; s++) pts.push(C.polar(r, 2 * Math.PI * s / NS)); circles.push(pts); }
      for (let k = 0; k < NR; k++) { const th = 2 * Math.PI * k / NR, pts = []; for (let s = 0; s <= 20; s++) pts.push(C.polar(s / 20, th)); radii.push(pts); }
      return { circles, radii };
    }
    const GRID = gridCurves();
    const flag1 = Array.from({ length: 21 }, (_, s) => [s / 20, 0]);
    const flag2 = Array.from({ length: 21 }, (_, s) => [0, s / 20]);
    function stroke(ctx, P, pts, color, width, dash) {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; if (dash) ctx.setLineDash(dash);
      ctx.beginPath(); let first = true;
      for (const w of pts) { if (!w || Math.abs(w[0]) > 1e4 || Math.abs(w[1]) > 1e4) { first = true; continue; } const [px, py] = P.toPx(w[0], w[1]); if (first) { ctx.moveTo(px, py); first = false; } else ctx.lineTo(px, py); }
      ctx.stroke(); ctx.restore();
    }
    function snap() { // aimanter z0 vers un point remarquable
      const F = FNS[sel.value];
      for (const c of F.crit) if (Math.hypot(z0[0] - c[0], z0[1] - c[1]) < 0.09) { z0 = c.slice(); return; }
      if (F.hole && Math.hypot(z0[0], z0[1]) < 0.12) { const n = Math.hypot(z0[0], z0[1]) || 1; z0 = [0.12 * (z0[0] || 1) / (n || 1), 0.12 * z0[1] / n]; }
    }

    function drawZ() {
      const F = FNS[sel.value], t = kit.theme(), ctx = stZ.ctx, h = Math.pow(10, sH.value);
      ctx.fillStyle = t.bg; ctx.fillRect(0, 0, stZ.W, stZ.H);
      PZ = kit.plane(ctx, { xmin: -2, xmax: 2, ymin: -1.7, ymax: 1.7, W: stZ.W, H: stZ.H });
      PZ.grid(0.5); PZ.axes({ labels: true, step: 1 });
      const map = pts => pts.map(w => [z0[0] + h * w[0], z0[1] + h * w[1]]);
      const rpx = h * PZ.sx;
      if (rpx > 14) {
        for (const c of GRID.circles) stroke(ctx, PZ, map(c), t.accent, 1.1);
        for (const r of GRID.radii) stroke(ctx, PZ, map(r), t.accent3, 1.1);
      } else {
        const [px, py] = PZ.toPx(z0[0], z0[1]);
        ctx.save(); ctx.strokeStyle = t.accent; ctx.setLineDash([3, 3]); ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(px, py, 14, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
        PZ.text(z0[0], z0[1], 'D(z₀,h) trop petit : voir le microscope', { dx: 18, dy: 22, color: t.muted, font: '11px system-ui, sans-serif', baseline: 'middle' });
      }
      if (rpx > 4) { stroke(ctx, PZ, map(flag1), t.accent4, 2.6); stroke(ctx, PZ, map(flag2), t.accent5, 2.6); }
      for (const c of F.crit) {
        const [px, py] = PZ.toPx(c[0], c[1]);
        ctx.save(); ctx.strokeStyle = t.fg; ctx.lineWidth = 1.3; ctx.fillStyle = t.bg; ctx.beginPath(); ctx.arc(px, py, 5, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
        PZ.text(c[0], c[1], sel.value === 'mod2' ? 'b = 0' : "f' = 0", { dx: 6, dy: -6, font: '11px system-ui, sans-serif', color: t.muted });
      }
      if (F.hole) PZ.text(0, 0, '0 ∉ Ω', { dx: 6, dy: -6, font: '11px system-ui, sans-serif', color: t.muted });
      PZ.point(z0[0], z0[1], { r: 6, color: t.accent4, stroke: t.fg });
      PZ.text(z0[0], z0[1], 'z₀', { dx: -8, dy: 16, align: 'right', baseline: 'middle', font: '600 12px system-ui, sans-serif' });
      label(ctx, 'plan des z', t);
    }

    function drawW() {
      const F = FNS[sel.value], t = kit.theme(), ctx = stW.ctx, h = Math.pow(10, sH.value);
      ctx.fillStyle = t.bg; ctx.fillRect(0, 0, stW.W, stW.H);
      const f0 = safe(F.f, z0), D = partials(F.f, z0);
      if (!f0 || !D) { PW = kit.plane(ctx, { W: stW.W, H: stW.H }); label(ctx, 'f non définie en z₀', t); return; }
      const { a, b } = D, A = C.abs(a), B = C.abs(b);
      const Q = w => { const v = safe(F.f, [z0[0] + h * w[0], z0[1] + h * w[1]]); return v ? [(v[0] - f0[0]) / h, (v[1] - f0[1]) / h] : null; };
      // échelle : fixée par df (|a|+|b|) ; si df ≈ 0 (point critique), par l'image réelle
      let R = 1.35 * (A + B);
      if (A + B < 0.05) { let m = 0; for (const c of GRID.circles) for (const w of c) { const q = Q(w); if (q) m = Math.max(m, Math.hypot(q[0], q[1])); } R = Math.max(1.3 * m, 1e-6); }
      PW = kit.plane(ctx, { xmin: -R, xmax: R, ymin: -R, ymax: R, W: stW.W, H: stW.H });
      const st = Math.pow(10, Math.floor(Math.log10(R))); const step = R / st > 5 ? 2 * st : R / st > 2.5 ? st : st / 2;
      PW.grid(step / 2); PW.axes({ labels: true, step });
      PW.circle(0, 0, 1, { color: t.muted, width: 1, dash: [2, 4] });
      // image réelle (agrandie) : traits pleins
      for (const c of GRID.circles) stroke(ctx, PW, c.map(Q), t.accent, 1.4);
      for (const r of GRID.radii) stroke(ctx, PW, r.map(Q), t.accent3, 1.4);
      // image par df : tirets
      if (cbDf.value && A + B >= 0.05) {
        for (const c of GRID.circles) stroke(ctx, PW, c.map(w => L(a, b, w)), t.fg, 1.1, [5, 4]);
        for (const r of GRID.radii) stroke(ctx, PW, r.map(w => L(a, b, w)), t.fg, 0.8, [2, 4]);
      }
      // drapeau
      stroke(ctx, PW, flag1.map(Q), t.accent4, 3); stroke(ctx, PW, flag2.map(Q), t.accent5, 3);
      if (A + B >= 0.05) {
        const u = L(a, b, [1, 0]), v = L(a, b, [0, 1]);
        const [ox, oy] = PW.toPx(0, 0), [ux, uy] = PW.toPx(u[0], u[1]), [vx, vy] = PW.toPx(v[0], v[1]);
        kit.arrow(ctx, ox, oy, ux, uy, { color: t.accent4, width: 1.5, head: 8 });
        kit.arrow(ctx, ox, oy, vx, vy, { color: t.accent5, width: 1.5, head: 8 });
      }
      PW.point(0, 0, { r: 3.5, color: t.fg });
      label(ctx, 'microscope : (f(z₀+hω) − f(z₀))/h', t);
      ctx.save(); ctx.font = '11px system-ui, sans-serif'; ctx.fillStyle = t.muted; ctx.textAlign = 'right'; ctx.textBaseline = 'bottom';
      ctx.fillText('centre = f(z₀), agrandi ×1/h', stW.W - 6, stW.H - 6); ctx.restore();
      // lectures
      const f2 = v => C.str(v, 3);
      roAB.set(`∂f/∂z(z₀) = a = ${f2(a)} &nbsp;·&nbsp; ∂f/∂z̄(z₀) = b = ${f2(b)}`);
      const det = A * A - B * B;
      let verdict;
      if (B < 1e-6) verdict = A < 1e-6 ? "b = 0 (Cauchy–Riemann) et f'(z₀) = 0 : df = 0, rien n'est conservé à l'ordre 1" : `b = 0 : Cauchy–Riemann ✔, similitude directe de rapport |f'(z₀)| = ${A.toFixed(3)}, angle ${(C.arg(a) * DEG).toFixed(0)}°`;
      else if (Math.abs(A - B) < 1e-6) verdict = 'b ≠ 0, |a| = |b| : image écrasée sur un segment (det J = 0)';
      else verdict = `b ≠ 0 : pas ℂ-dérivable ; ellipse de demi-axes ${(A + B).toFixed(2)} et ${Math.abs(A - B).toFixed(2)}, det J = ${det.toFixed(2)} ${det < 0 ? '(orientation renversée)' : '(orientation conservée)'}`;
      roG.set(verdict);
    }
    function drawAll() { drawZ(); drawW(); }

    const off = kit.drag(stZ.canvas, {
      onDown: p => { if (!PZ) return; z0 = PZ.toWorld(p.x, p.y); snap(); drawAll(); },
      onMove: (p, ev, down) => { if (!down || !PZ) return; z0 = PZ.toWorld(p.x, p.y); z0[0] = Math.max(-1.95, Math.min(1.95, z0[0])); z0[1] = Math.max(-1.65, Math.min(1.65, z0[1])); snap(); drawAll(); },
    });
    stZ.onResize = drawAll; stW.onResize = drawAll;
    drawAll();
    return () => { off(); stZ.destroy(); stW.destroy(); };
  }
});
