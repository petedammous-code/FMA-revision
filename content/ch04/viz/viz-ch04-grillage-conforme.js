FMA.registerViz({
  id: 'viz-ch04-grillage-conforme',
  chapter: 4,
  title: 'Transformation conforme : un quadrillage et son image',
  description: String.raw`**Ce que l'on voit.** À gauche, le *plan des $z$* avec un quadrillage : droites verticales $\Re(z)=c$ (bleu) et horizontales $\Im(z)=c'$ (rose). À droite (en dessous sur un téléphone), le *plan des $w=f(z)$* avec les **images** de ces droites par la fonction holomorphe $f$ choisie. Les images ne sont plus droites, mais elles se coupent encore **à angle droit** partout où $f'\neq 0$.

**Pourquoi.** Au voisinage de $z_0$, $f(z_0+h)\approx f(z_0)+f'(z_0)\,h$ : la différentielle de $f$ en $z_0$ est la multiplication par le nombre complexe $f'(z_0)$, c'est-à-dire une **similitude directe** (rotation d'angle $\arg f'(z_0)$ suivie d'une homothétie de rapport $|f'(z_0)|$). Un arc $\gamma$ passant par $z_0$ avec la tangente $\gamma'(0)$ a pour image un arc de tangente $f'(z_0)\gamma'(0)$ : les deux tangentes tournent du **même** angle, donc l'angle (orienté) entre deux arcs est conservé (poly, § IV.1, p. 75 ; [[ch04-holomorphe-conserve-angles|conservation des angles]]).

**À faire.**
* **Glissez le point orange $z_0$.** Deux demi-arcs en partent (orange et violet) avec un angle $\theta$ réglable ; à droite on lit l'angle entre leurs images, **mesuré** numériquement : il vaut $\theta$, avec le même sens de rotation.
* **Approchez un point critique** (cercle creux, $f'=0$) : $z^2$ en $0$, Joukovski $\tfrac12(z+1/z)$ en $\pm1$ (quadrillage du demi-plan supérieur, où cette fonction est injective). Le point s'y aimante, et l'angle image devient $2\theta$ : là $f(z)\approx f(z_0)+\tfrac12 f''(z_0)(z-z_0)^2$, les angles sont doublés et la conformité tombe. Ces points sont isolés dès que $f$ n'est pas localement constante (poly, Remarque IV.1.1, p. 75).
* **Cochez « lignes de niveau ».** À gauche s'affichent alors les courbes $\Re f = c$ (bleu) et $\Im f = c'$ (rose), qui sont les **préimages** des droites du plan des $w$ : elles sont orthogonales là où $f'\neq0$ ([[ch04-lignes-niveau-orthogonales|orthogonalité des lignes de niveau]]). Avec $\operatorname{argtanh}$ on obtient les deux familles de cercles orthogonaux du poly (Exemple IV.1.2, p. 76 : équipotentielles et lignes de champ de deux fils).

> ⚠️ Avec $\exp$ ou $1/z$ on voit que la conformité est **locale** : les angles sont conservés mais les longueurs sont multipliées par $|f'(z_0)|$, qui varie d'un point à l'autre (les carrés du quadrillage deviennent des « carrés courbes » de tailles différentes).`,
  related: ['ch04-holomorphe-conserve-angles', 'ch04-transformation-conforme-def', 'ch04-lignes-niveau-orthogonales', 'ch04-zeros-derivee-isoles', 'ch04-exemple-argtanh', 'ch04-joukovski'],
  height: 420,
  mount(container, kit) {
    const C = kit.complex;
    const DEG = 180 / Math.PI;
    // ---------- layout : deux panneaux côte à côte (empilés sur petit écran) ----------
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;';
    container.appendChild(row);
    const mkCell = () => { const d = document.createElement('div'); d.style.cssText = 'flex:1 1 280px;min-width:0;'; row.appendChild(d); return d; };
    const stZ = kit.canvas(mkCell(), { height: 300 });
    const stW = kit.canvas(mkCell(), { height: 300 });
    const controls = kit.controls(container);

    // ---------- fonctions proposées ----------
    const one = [1, 0];
    const FNS = {
      sq: { name: 'z²', f: z => C.mul(z, z), df: z => C.scale(z, 2),
        g: [-1.6, 1.6, -1.6, 1.6, 0.2], zwin: [-1.75, 1.75, -1.75, 1.75], wwin: [-2.7, 2.7, -2.7, 2.7], wstep: 0.4, crit: [[0, 0]], z0: [0.8, 0.5] },
      exp: { name: 'exp z', f: C.exp, df: C.exp,
        g: [-1.25, 1, -3, 3, 0.25], zwin: [-1.6, 1.3, -3.2, 3.2], wwin: [-3, 3, -3, 3], wstep: 0.5, crit: [], z0: [0.2, 0.6] },
      inv: { name: '1/z', f: z => C.inv(z), df: z => C.scale(C.inv(C.mul(z, z)), -1),
        g: [-2, 2, -2, 2, 0.25], zwin: [-2.1, 2.1, -2.1, 2.1], wwin: [-2.6, 2.6, -2.6, 2.6], wstep: 0.4, crit: [], z0: [0.9, 0.6] },
      jouk: { name: 'Joukovski ½(z + 1/z)', f: z => C.scale(C.add(z, C.inv(z)), 0.5), df: z => C.scale(C.sub(one, C.inv(C.mul(z, z))), 0.5),
        g: [-2, 2, 0, 2, 0.25], zwin: [-2.1, 2.1, -0.9, 2.1], wwin: [-2.3, 2.3, -2.3, 2.3], wstep: 0.25, crit: [[1, 0], [-1, 0]], z0: [1.25, 0.5] },
      atanh: { name: 'argtanh z = ½ log((1+z)/(1−z))', f: z => C.scale(C.log(C.div(C.add(one, z), C.sub(one, z))), 0.5), df: z => C.inv(C.sub(one, C.mul(z, z))),
        g: [-1.875, 1.875, -1.875, 1.875, 0.25], zwin: [-2.1, 2.1, -2.1, 2.1], wwin: [-2.2, 2.2, -2.2, 2.2], wstep: 0.2, crit: [], z0: [0.4, 0.7] },
    };
    const sel = kit.select(controls, { label: '$f(z)=$', options: Object.keys(FNS).map(k => [FNS[k].name, k]), value: 'sq', onChange: () => { z0 = FNS[sel.value].z0.slice(); drawAll(); } });
    sel.select.style.maxWidth = '240px';
    const lvl = kit.checkbox(controls, { label: 'lignes de niveau de $\\Re f$, $\\Im f$', checked: false, onChange: drawAll });
    const sTheta = kit.slider(controls, { label: 'angle $\\theta$ entre les arcs', min: 10, max: 170, step: 5, value: 60, onChange: drawAll, format: v => (+v).toFixed(0) + '°' });
    const sPhi = kit.slider(controls, { label: 'direction du 1er arc', min: 0, max: 355, step: 5, value: 20, onChange: drawAll, format: v => (+v).toFixed(0) + '°' });
    const roD = kit.readout(controls, { label: "$f'(z_0)$" });
    const roA = kit.readout(controls, { label: 'angles' });

    let z0 = FNS.sq.z0.slice();
    let PZ = null, PW = null;

    // ---------- utilitaires ----------
    const safe = (fn, z) => { try { const w = fn(z); return (isFinite(w[0]) && isFinite(w[1])) ? w : null; } catch (e) { return null; } };
    function label(ctx, text, t) {
      ctx.save(); ctx.font = '600 12px system-ui, sans-serif'; const w = ctx.measureText(text).width;
      ctx.globalAlpha = 0.85; ctx.fillStyle = t.bg; ctx.fillRect(4, 4, w + 12, 20); ctx.globalAlpha = 1;
      ctx.fillStyle = t.fg; ctx.textBaseline = 'middle'; ctx.textAlign = 'left'; ctx.fillText(text, 10, 14); ctx.restore();
    }
    // polyligne dans le plan P, coupée aux points non finis et aux sauts (coupures, pôles)
    function polyline(ctx, P, pts, maxJumpPx) {
      let prev = null;
      for (const w of pts) {
        if (!w || Math.abs(w[0]) > 1e3 || Math.abs(w[1]) > 1e3) { prev = null; continue; }
        const p = P.toPx(w[0], w[1]);
        if (prev && Math.hypot(p[0] - prev[0], p[1] - prev[1]) < maxJumpPx) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]);
        prev = p;
      }
    }
    // lignes de niveau par « marching squares » sur une grille de valeurs
    function iso(ctx, g, step, maxJump) {
      const { nx, ny, px0, py0, dpx, dpy, v } = g;
      ctx.beginPath();
      for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
        const a = v[j * nx + i], b = v[j * nx + i + 1], c = v[(j + 1) * nx + i + 1], d = v[(j + 1) * nx + i];
        if (!(isFinite(a) && isFinite(b) && isFinite(c) && isFinite(d))) continue;
        const lo = Math.min(a, b, c, d), hi = Math.max(a, b, c, d);
        if (hi - lo > maxJump) continue;
        const X = px0 + i * dpx, Y = py0 + j * dpy;
        for (let k = Math.ceil(lo / step); k * step <= hi; k++) {
          const L = k * step, P = [];
          if ((a < L) !== (b < L)) P.push(X + dpx * (L - a) / (b - a), Y);
          if ((b < L) !== (c < L)) P.push(X + dpx, Y + dpy * (L - b) / (c - b));
          if ((c < L) !== (d < L)) P.push(X + dpx * (1 - (L - c) / (d - c)), Y + dpy);
          if ((d < L) !== (a < L)) P.push(X, Y + dpy * (1 - (L - d) / (a - d)));
          if (P.length >= 4) { ctx.moveTo(P[0], P[1]); ctx.lineTo(P[2], P[3]); }
          if (P.length >= 8) { ctx.moveTo(P[4], P[5]); ctx.lineTo(P[6], P[7]); }
        }
      }
      ctx.stroke();
    }
    function wedge(ctx, px, py, a1, d, r, color, text) { // a1, d : angles « monde » (y vers le haut)
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(px, py, r, -a1, -(a1 + d), d > 0); ctx.stroke();
      const am = a1 + d / 2; ctx.font = '600 12px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const tx = px + (r + 16) * Math.cos(am), ty = py - (r + 16) * Math.sin(am);
      const tw = ctx.measureText(text).width; const t = kit.theme();
      ctx.globalAlpha = 0.8; ctx.fillStyle = t.bg; ctx.fillRect(tx - tw / 2 - 3, ty - 8, tw + 6, 16); ctx.globalAlpha = 1;
      ctx.fillStyle = color; ctx.fillText(text, tx, ty); ctx.restore();
    }

    // ---------- dessin ----------
    function arcsDirs() { const phi = sPhi.value / DEG, th = sTheta.value / DEG; return [C.polar(1, phi), C.polar(1, phi + th)]; }
    function drawZ() {
      const F = FNS[sel.value], t = kit.theme(), ctx = stZ.ctx;
      ctx.fillStyle = t.bg; ctx.fillRect(0, 0, stZ.W, stZ.H);
      const [a, b, c, d] = F.zwin; PZ = kit.plane(ctx, { xmin: a, xmax: b, ymin: c, ymax: d, W: stZ.W, H: stZ.H });
      PZ.axes({ labels: true, step: 1 });
      ctx.lineWidth = 1.3;
      if (!lvl.value) {
        const [gx0, gx1, gy0, gy1, gs] = F.g;
        ctx.strokeStyle = t.accent; ctx.beginPath();
        for (let x = gx0; x <= gx1 + 1e-9; x += gs) { const p = PZ.toPx(x, gy0), q = PZ.toPx(x, gy1); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); }
        ctx.stroke();
        ctx.strokeStyle = t.accent2; ctx.beginPath();
        for (let y = gy0; y <= gy1 + 1e-9; y += gs) { const p = PZ.toPx(gx0, y), q = PZ.toPx(gx1, y); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); }
        ctx.stroke();
      } else {
        // grille de valeurs de Re f et Im f (pas de 3 px)
        const cell = 3, nx = Math.ceil(stZ.W / cell) + 1, ny = Math.ceil(stZ.H / cell) + 1;
        const re = new Float64Array(nx * ny), im = new Float64Array(nx * ny);
        for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
          const z = PZ.toWorld(i * cell, j * cell), w = safe(F.f, z);
          re[j * nx + i] = w ? w[0] : NaN; im[j * nx + i] = w ? w[1] : NaN;
        }
        const g = { nx, ny, px0: 0, py0: 0, dpx: cell, dpy: cell };
        ctx.strokeStyle = t.accent; iso(ctx, { ...g, v: re }, F.wstep, 3 * F.wstep);
        ctx.strokeStyle = t.accent2; iso(ctx, { ...g, v: im }, F.wstep, 3 * F.wstep);
      }
      // points critiques
      for (const [x, y] of F.crit) {
        const [px, py] = PZ.toPx(x, y);
        ctx.save(); ctx.strokeStyle = t.fg; ctx.lineWidth = 1.5; ctx.fillStyle = t.bg; ctx.beginPath(); ctx.arc(px, py, 6, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
        ctx.fillStyle = t.fg; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillText("f'=0", px + 7, py - 5); ctx.restore(); // au-dessus de l'axe, pour ne pas chevaucher les graduations
      }
      // arcs issus de z0
      const [u1, u2] = arcsDirs(); const [px, py] = PZ.toPx(z0[0], z0[1]); const Lpx = 46;
      kit.arrow(ctx, px, py, px + Lpx * u1[0], py - Lpx * u1[1], { color: t.accent4, width: 2.5, head: 9 });
      kit.arrow(ctx, px, py, px + Lpx * u2[0], py - Lpx * u2[1], { color: t.accent5, width: 2.5, head: 9 });
      wedge(ctx, px, py, C.arg(u1), sTheta.value / DEG, 20, t.fg, sTheta.value.toFixed(0) + '°');
      PZ.point(z0[0], z0[1], { r: 6, color: t.accent4, stroke: t.fg });
      { const b = C.add(u1, u2), n = C.abs(b) || 1; PZ.text(z0[0], z0[1], 'z₀', { dx: -16 * b[0] / n, dy: 16 * b[1] / n, align: 'center', baseline: 'middle', font: '600 12px system-ui, sans-serif' }); }
      label(ctx, 'plan des z', t);
    }
    function drawW() {
      const F = FNS[sel.value], t = kit.theme(), ctx = stW.ctx;
      ctx.fillStyle = t.bg; ctx.fillRect(0, 0, stW.W, stW.H);
      const [a, b, c, d] = F.wwin; PW = kit.plane(ctx, { xmin: a, xmax: b, ymin: c, ymax: d, W: stW.W, H: stW.H });
      PW.axes({ labels: true, step: 1 });
      const jump = 0.25 * Math.min(stW.W, stW.H);
      ctx.lineWidth = 1.3;
      if (!lvl.value) {
        const [gx0, gx1, gy0, gy1, gs] = F.g, N = 260;
        ctx.strokeStyle = t.accent; ctx.beginPath();
        for (let x = gx0; x <= gx1 + 1e-9; x += gs) { const pts = []; for (let k = 0; k <= N; k++) pts.push(safe(F.f, [x, gy0 + (gy1 - gy0) * k / N])); polyline(ctx, PW, pts, jump); }
        ctx.stroke();
        ctx.strokeStyle = t.accent2; ctx.beginPath();
        for (let y = gy0; y <= gy1 + 1e-9; y += gs) { const pts = []; for (let k = 0; k <= N; k++) pts.push(safe(F.f, [gx0 + (gx1 - gx0) * k / N, y])); polyline(ctx, PW, pts, jump); }
        ctx.stroke();
      } else {
        const s = F.wstep;
        ctx.strokeStyle = t.accent; ctx.beginPath();
        for (let x = Math.ceil(PW.xmin / s) * s; x <= PW.xmax; x += s) { const p = PW.toPx(x, PW.ymin), q = PW.toPx(x, PW.ymax); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); }
        ctx.stroke();
        ctx.strokeStyle = t.accent2; ctx.beginPath();
        for (let y = Math.ceil(PW.ymin / s) * s; y <= PW.ymax; y += s) { const p = PW.toPx(PW.xmin, y), q = PW.toPx(PW.xmax, y); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); }
        ctx.stroke();
      }
      // images des arcs et angle mesuré
      const w0 = safe(F.f, z0); const [u1, u2] = arcsDirs();
      if (!w0) return label(ctx, 'plan des w = f(z)', t);
      const Lz = 46 / PZ.sx;
      const cols = [t.accent4, t.accent5], dirs = [];
      [u1, u2].forEach((u, k) => {
        const pts = []; for (let i = 0; i <= 60; i++) pts.push(safe(F.f, C.add(z0, C.scale(u, Lz * i / 60))));
        ctx.save(); ctx.strokeStyle = cols[k]; ctx.lineWidth = 2.5; ctx.beginPath(); polyline(ctx, PW, pts, jump); ctx.stroke(); ctx.restore();
        const h = 1e-5, wh = safe(F.f, C.add(z0, C.scale(u, h)));
        dirs.push(wh ? C.sub(wh, w0) : null);
      });
      const [qx, qy] = PW.toPx(w0[0], w0[1]);
      let measured = null;
      if (dirs[0] && dirs[1] && C.abs(dirs[0]) > 0 && C.abs(dirs[1]) > 0) {
        dirs.forEach((dv, k) => { const n = C.abs(dv); kit.arrow(ctx, qx, qy, qx + 30 * dv[0] / n, qy - 30 * dv[1] / n, { color: cols[k], width: 1.5, head: 7 }); });
        measured = C.arg(C.div(dirs[1], dirs[0]));
        // en un point critique l'angle image vaut 2θ ∈ ]0°, 340°] : on l'affiche dans [0°, 360°[ plutôt que dans ]−180°, 180°]
        const dv0 = safe(F.df, z0); if (dv0 && C.abs(dv0) < 1e-9 && measured < 0) measured += 2 * Math.PI;
        wedge(ctx, qx, qy, C.arg(dirs[0]), measured, 16, t.fg, (measured * DEG).toFixed(1) + '°');
      }
      PW.point(w0[0], w0[1], { r: 6, color: t.accent4, stroke: t.fg });
      { let b = [-1, -1]; if (dirs[0] && dirs[1] && C.abs(dirs[0]) > 0 && C.abs(dirs[1]) > 0) b = C.add(C.scale(dirs[0], 1 / C.abs(dirs[0])), C.scale(dirs[1], 1 / C.abs(dirs[1]))); const n = C.abs(b) || 1;
        PW.text(w0[0], w0[1], 'f(z₀)', { dx: -24 * b[0] / n, dy: 24 * b[1] / n, align: 'center', baseline: 'middle', font: '600 12px system-ui, sans-serif' }); }
      label(ctx, 'plan des w = f(z)', t);
      return measured;
    }
    function drawAll() {
      const F = FNS[sel.value];
      drawZ(); const m = drawW();
      const dv = safe(F.df, z0);
      if (dv) {
        const mod = C.abs(dv);
        roD.set(`${C.str(dv)} &nbsp;(|f'| = ${mod.toFixed(3)}${mod > 1e-9 ? `, arg = ${(C.arg(dv) * DEG).toFixed(1)}°` : ' : point critique'})`);
      } else roD.set('non défini');
      const crit = dv && C.abs(dv) < 1e-9;
      roA.set(`entre les arcs : ${sTheta.value.toFixed(0)}° · entre les images : ${m == null ? '—' : (m * DEG).toFixed(1) + '°'}${crit ? ' = 2θ (angle doublé)' : ''}`);
    }

    // ---------- interaction : glisser z0 (aimanté sur les points critiques) ----------
    let dragging = false;
    function moveTo(p) {
      if (!PZ) return; const F = FNS[sel.value];
      let z = PZ.toWorld(p.x, p.y);
      z[0] = Math.max(PZ.xmin, Math.min(PZ.xmax, z[0])); z[1] = Math.max(PZ.ymin, Math.min(PZ.ymax, z[1]));
      for (const cp of F.crit) { const [cx, cy] = PZ.toPx(cp[0], cp[1]); if (Math.hypot(cx - p.x, cy - p.y) < 12) z = cp.slice(); }
      if (sel.value === 'inv' && C.abs(z) < 0.05) return;
      if (sel.value === 'atanh' && (Math.hypot(z[0] - 1, z[1]) < 0.05 || Math.hypot(z[0] + 1, z[1]) < 0.05)) return;
      z0 = z; drawAll();
    }
    const offDrag = kit.drag(stZ.canvas, {
      onDown: p => { dragging = true; moveTo(p); },
      onMove: (p, ev, down) => { if (down && dragging) moveTo(p); },
      onUp: () => { dragging = false; },
    });
    stZ.onResize = drawAll; stW.onResize = drawAll;
    drawAll();
    return () => { offDrag(); stZ.destroy(); stW.destroy(); };
  }
});
