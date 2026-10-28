// généré par tools/build.mjs — ne pas éditer

// ---- content/ch04/viz/viz-ch04-grillage-conforme.js ----
try {
FMA.registerViz({
  id: 'viz-ch04-grillage-conforme',
  chapter: 4,
  title: 'Transformation conforme : un quadrillage et son image',
  description: String.raw`**Ce que l'on voit.** À gauche, le *plan des $z$* avec un quadrillage : droites verticales $\Re(z)=c$ (bleu) et horizontales $\Im(z)=c'$ (rose). À droite, le *plan des $w=f(z)$* avec les **images** de ces droites par la fonction holomorphe $f$ choisie. Les images ne sont plus droites, mais elles se coupent encore **à angle droit** partout où $f'\neq 0$.

**Pourquoi.** Au voisinage de $z_0$, $f(z_0+h)\approx f(z_0)+f'(z_0)\,h$ : la différentielle de $f$ en $z_0$ est la multiplication par le nombre complexe $f'(z_0)$, c'est-à-dire une **similitude directe** (rotation d'angle $\arg f'(z_0)$ suivie d'une homothétie de rapport $|f'(z_0)|$). Un arc $\gamma$ passant par $z_0$ avec la tangente $\gamma'(0)$ a pour image un arc de tangente $f'(z_0)\gamma'(0)$ : les deux tangentes tournent du **même** angle, donc l'angle (orienté) entre deux arcs est conservé (poly, § IV.1, p. 75 ; [[ch04-holomorphe-conserve-angles]]).

**À faire.**
* **Glissez le point orange $z_0$.** Deux demi-arcs en partent (orange et violet) avec un angle $\theta$ réglable ; à droite on lit l'angle entre leurs images, **mesuré** numériquement : il vaut $\theta$, avec le même sens de rotation.
* **Approchez un point critique** (cercle creux, $f'=0$) : $z^2$ en $0$, Joukovski $\tfrac12(z+1/z)$ en $\pm1$. Le point s'y aimante, et l'angle image devient $2\theta$ : là $f(z)\approx f(z_0)+\tfrac12 f''(z_0)(z-z_0)^2$, les angles sont doublés et la conformité tombe. Ces points sont isolés dès que $f$ n'est pas localement constante (poly, Remarque IV.1.1, p. 75).
* **Cochez « lignes de niveau ».** À gauche s'affichent alors les courbes $\Re f = c$ (bleu) et $\Im f = c'$ (rose), qui sont les **préimages** des droites du plan des $w$ : elles sont orthogonales là où $f'\neq0$ ([[ch04-lignes-niveau-orthogonales]]). Avec $\operatorname{argtanh}$ on obtient les deux familles de cercles orthogonaux du poly (Exemple IV.1.2, p. 76 : équipotentielles et lignes de champ de deux fils).

> ⚠️ Avec $\exp$ ou $1/z$ on voit que la conformité est **locale** : les angles sont conservés mais les longueurs sont multipliées par $|f'(z_0)|$, qui varie d'un point à l'autre (les carrés du quadrillage deviennent des « carrés courbes » de tailles différentes).`,
  related: ['ch04-holomorphe-conserve-angles', 'ch04-transformation-conforme-def', 'ch04-lignes-niveau-orthogonales', 'ch04-zeros-derivee-isoles', 'ch04-exemple-argtanh', 'ch04-joukovski'],
  height: 640,
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
        g: [-2, 2, -2, 2, 0.25], zwin: [-2.1, 2.1, -2.1, 2.1], wwin: [-2.3, 2.3, -2.3, 2.3], wstep: 0.25, crit: [[1, 0], [-1, 0]], z0: [1.25, 0.5] },
      atanh: { name: 'argtanh z = ½ log((1+z)/(1−z))', f: z => C.scale(C.log(C.div(C.add(one, z), C.sub(one, z))), 0.5), df: z => C.inv(C.sub(one, C.mul(z, z))),
        g: [-2, 2, -2, 2, 0.25], zwin: [-2.1, 2.1, -2.1, 2.1], wwin: [-2.2, 2.2, -2.2, 2.2], wstep: 0.2, crit: [], z0: [0.4, 0.7] },
    };
    const sel = kit.select(controls, { label: '$f(z)=$', options: Object.keys(FNS).map(k => [FNS[k].name, k]), value: 'sq', onChange: () => { z0 = FNS[sel.value].z0.slice(); drawAll(); } });
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
        ctx.fillStyle = t.fg; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText("f'=0", px + 7, py + 4); ctx.restore();
      }
      // arcs issus de z0
      const [u1, u2] = arcsDirs(); const [px, py] = PZ.toPx(z0[0], z0[1]); const Lpx = 46;
      kit.arrow(ctx, px, py, px + Lpx * u1[0], py - Lpx * u1[1], { color: t.accent4, width: 2.5, head: 9 });
      kit.arrow(ctx, px, py, px + Lpx * u2[0], py - Lpx * u2[1], { color: t.accent5, width: 2.5, head: 9 });
      wedge(ctx, px, py, C.arg(u1), sTheta.value / DEG, 20, t.fg, sTheta.value.toFixed(0) + '°');
      PZ.point(z0[0], z0[1], { r: 6, color: t.accent4, stroke: t.fg });
      PZ.text(z0[0], z0[1], 'z₀', { dx: -8, dy: -8, align: 'right', font: '600 12px system-ui, sans-serif' });
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
        wedge(ctx, qx, qy, C.arg(dirs[0]), measured, 16, t.fg, (measured * DEG).toFixed(1) + '°');
      }
      PW.point(w0[0], w0[1], { r: 6, color: t.accent4, stroke: t.fg });
      PW.text(w0[0], w0[1], 'f(z₀)', { dx: -8, dy: -8, align: 'right', font: '600 12px system-ui, sans-serif' });
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

} catch (e) { console.error('viz viz-ch04-grillage-conforme failed to register', e); }

// ---- content/ch04/viz/viz-ch04-joukovski-ecoulement.js ----
try {
FMA.registerViz({
  id: 'viz-ch04-joukovski-ecoulement',
  chapter: 4,
  title: 'Joukovski : du cylindre au profil d’aile',
  description: String.raw`**Ce que l'on voit.** À gauche, le *plan des $z$* : l'écoulement d'un fluide parfait autour d'un cercle de centre $c$ passant par $1$ (rayon $R=|1-c|$), arrivant de l'infini avec l'incidence $\alpha$. Les traits sont les **lignes de courant** $\Im F = \text{const}$, où
$$F(z)=V_0\Big((z-c)\,e^{-i\alpha}+\frac{R^2e^{i\alpha}}{z-c}\Big)$$
est le potentiel complexe ; pour $c=0$, $R=1$, c'est exactement celui de l'Exercice IV.4.1 (poly, p. 84). À droite, le *plan des $w=J(z)=\tfrac12(z+1/z)$* : les **images** de ces lignes par la transformation de Joukovski, qui sont les lignes de courant autour du profil $J(\text{cercle})$. Le fond colore la vitesse $|v|$ rapportée à la vitesse à l'infini (bleu : plus lent, rouge : plus rapide). Les losanges blancs sont les **points d'arrêt** ($v=0$).

**Le lien avec le cours.** $J$ est un biholomorphisme de l'extérieur du cercle sur l'extérieur du profil (pour $c=0$ : de $\{|z|>1\}$ sur $\C\setminus[-1,1]$, et $J(e^{i\theta})=\cos\theta$). Le potentiel des vitesses autour du profil est $\Phi = \Re G$ avec $G = F\circ J^{-1}$ : composée d'une fonction harmonique et d'une fonction holomorphe, il est harmonique ([[ch04-composition-harmonique-holomorphe]]), et comme $J$ conserve les angles là où $J'\neq0$, le bord (une ligne de courant) reste une ligne de courant ([[ch04-joukovski]]). Pour $\alpha=0$ et $c=0$ : $F = 2V_0\,J(z)$, donc le potentiel autour du disque est $\lambda\,\Re J(z)$.

**À faire.**
* **Plaque plane** ($c=0$), $\alpha\neq0$ : la vitesse $v=\overline{G'(w)}$ avec $G'(w)=F'(z)/J'(z)$ **explose** aux deux bouts $w=\pm1$ de la plaque, car $J'(\pm1)=0$ alors que $F'(\pm1)\neq0$ (question 5 de l'exercice). Mettez $\alpha=0$ : $F'(\pm1)=0$ et tout redevient fini.
* **Glissez le centre $c$** (cliquer-glisser à gauche, avec $\Re c\le0$) : le cercle passe toujours par le point critique $z=1$ de $J$, d'où un **bord de fuite pointu** en $w=1$ ; si $\Re c<0$, le point $-1$ est à l'intérieur et le bord d'attaque est arrondi. Avec $\Im c>0$, le profil est **cambré**.
* **Condition de Kutta** (hors programme, pour la culture) : on ajoute au potentiel le terme $\frac{i\Gamma}{2\pi}\log(z-c)$, dont la partie imaginaire $\frac{\Gamma}{2\pi}\ln|z-c|$ est harmonique et constante sur le cercle, qui reste donc une ligne de courant. On choisit la **circulation** $\Gamma$ pour que $F'(1)=0$ : la vitesse au bord de fuite devient finie, le point d'arrêt arrière se place exactement en $w=1$, et l'écoulement devient dissymétrique (c'est l'origine de la **portance**).`,
  related: ['ch04-joukovski', 'ch04-composition-harmonique-holomorphe', 'ch04-ecoulement-potentiel', 'ch04-holomorphe-conserve-angles', 'ch04-reduction-demi-plan'],
  height: 640,
  mount(container, kit) {
    const C = kit.complex;
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;';
    container.appendChild(row);
    const mkCell = () => { const d = document.createElement('div'); d.style.cssText = 'flex:1 1 280px;min-width:0;'; row.appendChild(d); return d; };
    const stZ = kit.canvas(mkCell(), { height: 300 });
    const stW = kit.canvas(mkCell(), { height: 300 });
    const controls = kit.controls(container);
    const PRESETS = { plate: [0, 0], sym: [-0.12, 0], camb: [-0.1, 0.13] };
    const sel = kit.select(controls, { label: 'cercle', options: [['centré en 0 → plaque plane', 'plate'], ['excentré → aile symétrique', 'sym'], ['excentré → aile cambrée', 'camb']], value: 'plate', onChange: v => { c = PRESETS[v].slice(); drawAll(); } });
    const sA = kit.slider(controls, { label: 'incidence $\\alpha$', min: -20, max: 20, step: 1, value: 10, onChange: drawAll, format: v => (+v).toFixed(0) + '°' });
    const cbK = kit.checkbox(controls, { label: 'circulation de Kutta (hors programme)', checked: false, onChange: drawAll });
    const cbS = kit.checkbox(controls, { label: 'couleur = vitesse', checked: true, onChange: drawAll });
    const roG = kit.readout(controls, { label: 'bord de fuite $w=1$' });
    const roL = kit.readout(controls, { label: "bord d'attaque" });
    const V0 = 1, CELL = 3, ZW = [-2.6, 2.6, -2, 2], WW = [-2.2, 2.2, -1.7, 1.7];
    let c = [0, 0], PZ = null, PW = null;

    // ---------- modèle ----------
    function model() {
      const al = sA.value * Math.PI / 180, R = Math.hypot(1 - c[0], c[1]);
      const th1 = Math.atan2(-c[1], 1 - c[0]);
      const Gam = cbK.value ? -4 * Math.PI * R * V0 * Math.sin(th1 - al) : 0;
      const em = [Math.cos(al), -Math.sin(al)], ep = [Math.cos(al), Math.sin(al)], R2e = C.scale(ep, R * R), k = Gam / (2 * Math.PI);
      const psi = z => { const q = C.sub(z, c); const F = C.add(C.mul(q, em), C.div(R2e, q)); return V0 * F[1] + k * Math.log(C.abs(q)); };
      const dF = z => { const q = C.sub(z, c); return C.add(C.sub(C.scale(em, V0), C.scale(C.div(R2e, C.mul(q, q)), V0)), C.div([0, k], q)); };
      const d2F = z => { const q = C.sub(z, c); return C.sub(C.scale(C.div(R2e, C.mul(q, C.mul(q, q))), 2 * V0), C.div([0, k], C.mul(q, q))); };
      const outside = z => C.abs(C.sub(z, c)) > R * (1 + 1e-9);
      // racines de F'(z)=0 : V0 e^{-iα} q² + i k q − V0 R² e^{iα} = 0
      const A = C.scale(em, V0), B = [0, k], Cc = C.scale(R2e, -V0);
      const disc = C.sub(C.mul(B, B), C.scale(C.mul(A, Cc), 4)), sq = C.sqrt(disc);
      const stag = [C.add(c, C.div(C.add(C.scale(B, -1), sq), C.scale(A, 2))), C.add(c, C.div(C.sub(C.scale(B, -1), sq), C.scale(A, 2)))];
      return { al, R, Gam, psi, dF, d2F, outside, stag, psiBody: k * Math.log(R) };
    }
    const J = z => C.scale(C.add(z, C.inv(z)), 0.5);
    const dJ = z => C.scale(C.sub([1, 0], C.inv(C.mul(z, z))), 0.5);
    function Jinv(w, M) { // préimage de w située hors du cercle (null si w est dans le profil)
      const s = C.sqrt(C.sub(C.mul(w, w), [1, 0])), z1 = C.add(w, s), z2 = C.sub(w, s);
      const d1 = C.abs(C.sub(z1, c)), d2 = C.abs(C.sub(z2, c)); const z = d1 >= d2 ? z1 : z2;
      return M.outside(z) ? z : null;
    }

    // ---------- outils de dessin ----------
    function rgbOf(s) {
      s = (s || '').trim(); let m;
      if ((m = s.match(/^#([0-9a-f]{3})$/i))) return m[1].split('').map(h => parseInt(h + h, 16));
      if ((m = s.match(/^#([0-9a-f]{6})/i))) return [0, 2, 4].map(k => parseInt(m[1].substr(k, 2), 16));
      if ((m = s.match(/rgba?\(([^)]+)\)/))) return m[1].split(',').slice(0, 3).map(v => parseFloat(v));
      return [255, 255, 255];
    }
    const WARM = [214, 64, 52], COOL = [38, 104, 214];
    function iso(ctx, g, step, offset, maxJump) {
      const { nx, ny, v } = g, d = CELL;
      ctx.beginPath();
      for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
        const a = v[j * nx + i] - offset, b = v[j * nx + i + 1] - offset, cc = v[(j + 1) * nx + i + 1] - offset, e = v[(j + 1) * nx + i] - offset;
        if (!(isFinite(a) && isFinite(b) && isFinite(cc) && isFinite(e))) continue;
        const lo = Math.min(a, b, cc, e), hi = Math.max(a, b, cc, e);
        if (hi - lo > maxJump) continue;
        const X = i * d, Y = j * d;
        for (let k = Math.ceil(lo / step); k * step <= hi; k++) {
          const L = k * step, Q = [];
          if ((a < L) !== (b < L)) Q.push(X + d * (L - a) / (b - a), Y);
          if ((b < L) !== (cc < L)) Q.push(X + d, Y + d * (L - b) / (cc - b));
          if ((cc < L) !== (e < L)) Q.push(X + d * (1 - (L - cc) / (e - cc)), Y + d);
          if ((e < L) !== (a < L)) Q.push(X, Y + d * (1 - (L - e) / (a - e)));
          if (Q.length >= 4) { ctx.moveTo(Q[0], Q[1]); ctx.lineTo(Q[2], Q[3]); }
          if (Q.length >= 8) { ctx.moveTo(Q[4], Q[5]); ctx.lineTo(Q[6], Q[7]); }
        }
      }
      ctx.stroke();
    }
    function label(ctx, text, t) {
      ctx.save(); ctx.font = '600 12px system-ui, sans-serif'; const w = ctx.measureText(text).width;
      ctx.globalAlpha = 0.85; ctx.fillStyle = t.bg; ctx.fillRect(4, 4, w + 12, 20); ctx.globalAlpha = 1;
      ctx.fillStyle = t.fg; ctx.textBaseline = 'middle'; ctx.textAlign = 'left'; ctx.fillText(text, 10, 14); ctx.restore();
    }
    function marker(ctx, P, z, t, text) { // point critique de J
      const [px, py] = P.toPx(z[0], z[1]); ctx.save(); ctx.strokeStyle = t.fg; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(px, py, 4.5, 0, 2 * Math.PI); ctx.stroke();
      if (text) { ctx.font = '11px system-ui, sans-serif'; ctx.fillStyle = t.fg; ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillText(text, px, py + 7); } ctx.restore();
    }
    function diamond(ctx, P, z, t) {
      const [px, py] = P.toPx(z[0], z[1]); ctx.save(); ctx.fillStyle = '#ffffff'; ctx.strokeStyle = '#111111'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(px, py - 6); ctx.lineTo(px + 6, py); ctx.lineTo(px, py + 6); ctx.lineTo(px - 6, py); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    }
    function inflow(ctx, P, t, al, scale) {
      const x = 14, y = P.H - 26, L = 34;
      kit.arrow(ctx, x, y, x + L * Math.cos(al), y - L * Math.sin(al), { color: t.accent, width: 2.2, head: 8 });
      ctx.save(); ctx.font = '11px system-ui, sans-serif'; ctx.fillStyle = t.fg; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText('vitesse à l’infini' + scale, x + L + 6, y - 6 - 8 * Math.sin(al)); ctx.restore();
    }
    // peint un champ scalaire (valeurs par nœud) + lignes de courant
    function paint(st, P, vals, speeds, M, t) {
      const ctx = st.ctx, { nx, ny } = vals;
      const bg = rgbOf(t.bg);
      ctx.fillStyle = t.bg; ctx.fillRect(0, 0, st.W, st.H);
      if (cbS.value) {
        const img = ctx.createImageData(nx, ny), D = img.data;
        for (let k = 0; k < nx * ny; k++) {
          const s = speeds[k]; let col = bg;
          if (isFinite(s) && s >= 0) { const u = Math.tanh(1.1 * Math.log(Math.max(1e-6, s))); const tgt = u > 0 ? WARM : COOL, a = 0.75 * Math.abs(u); col = [bg[0] + (tgt[0] - bg[0]) * a, bg[1] + (tgt[1] - bg[1]) * a, bg[2] + (tgt[2] - bg[2]) * a]; }
          D[4 * k] = col[0]; D[4 * k + 1] = col[1]; D[4 * k + 2] = col[2]; D[4 * k + 3] = 255;
        }
        const off = document.createElement('canvas'); off.width = nx; off.height = ny; off.getContext('2d').putImageData(img, 0, 0);
        ctx.save(); ctx.imageSmoothingEnabled = true; ctx.drawImage(off, 0, 0, nx, ny, 0, 0, nx * CELL, ny * CELL); ctx.restore();
      }
      P.axes({ labels: true, step: 1 });
      ctx.save(); ctx.strokeStyle = t.fg; ctx.globalAlpha = 0.8; ctx.lineWidth = 1.1; iso(ctx, vals, 0.25, M.psiBody, 2); ctx.restore();
    }
    function grid(st, P, f) { // f(z) -> [psi, speed] ou null
      const nx = Math.ceil(st.W / CELL) + 1, ny = Math.ceil(st.H / CELL) + 1, v = new Float64Array(nx * ny), s = new Float64Array(nx * ny);
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const z = P.toWorld(i * CELL, j * CELL); let r = null; try { r = f(z); } catch (e) { r = null; }
        v[j * nx + i] = r ? r[0] : NaN; s[j * nx + i] = r ? r[1] : NaN;
      }
      return [{ nx, ny, v }, s];
    }

    // ---------- dessin ----------
    function drawAll() {
      const t = kit.theme(), M = model();
      // plan des z
      PZ = kit.plane(stZ.ctx, { xmin: ZW[0], xmax: ZW[1], ymin: ZW[2], ymax: ZW[3], W: stZ.W, H: stZ.H });
      const [gz, sz] = grid(stZ, PZ, z => M.outside(z) ? [M.psi(z), C.abs(M.dF(z)) / V0] : null);
      paint(stZ, PZ, gz, sz, M, t);
      const ctx = stZ.ctx;
      PZ.circle(c[0], c[1], M.R, { color: t.fg, width: 2, fill: t.muted });
      marker(ctx, PZ, [1, 0], t, "J'=0"); marker(ctx, PZ, [-1, 0], t, "J'=0");
      M.stag.forEach(z => { if (isFinite(z[0]) && Math.abs(C.abs(C.sub(z, c)) - M.R) < 1e-6 * (1 + M.R)) diamond(ctx, PZ, z, t); else if (isFinite(z[0]) && M.outside(z)) diamond(ctx, PZ, z, t); });
      const [cx, cy] = PZ.toPx(c[0], c[1]);
      ctx.save(); ctx.strokeStyle = t.accent4; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(cx - 6, cy); ctx.lineTo(cx + 6, cy); ctx.moveTo(cx, cy - 6); ctx.lineTo(cx, cy + 6); ctx.stroke();
      ctx.fillStyle = t.accent4; ctx.font = '600 12px system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillText('c', cx + 6, cy - 4); ctx.restore();
      inflow(ctx, PZ, t, M.al, ' V₀');
      label(ctx, 'plan des z (cylindre)', t);
      // plan des w
      PW = kit.plane(stW.ctx, { xmin: WW[0], xmax: WW[1], ymin: WW[2], ymax: WW[3], W: stW.W, H: stW.H });
      const [gw, sw] = grid(stW, PW, w => { const z = Jinv(w, M); if (!z) return null; const d = dJ(z); return [M.psi(z), C.abs(M.dF(z)) / Math.max(1e-12, C.abs(d)) / (2 * V0)]; });
      paint(stW, PW, gw, sw, M, t);
      const cw = stW.ctx, prof = [];
      for (let k = 0; k <= 400; k++) { const th = 2 * Math.PI * k / 400; prof.push(J(C.add(c, C.polar(M.R, th)))); }
      cw.save(); cw.fillStyle = t.muted; cw.strokeStyle = t.fg; cw.lineWidth = 2; cw.lineJoin = 'round'; cw.beginPath();
      prof.forEach(([x, y], i) => { const [px, py] = PW.toPx(x, y); i ? cw.lineTo(px, py) : cw.moveTo(px, py); }); cw.closePath(); cw.fill(); cw.stroke(); cw.restore();
      marker(cw, PW, [1, 0], t, ''); marker(cw, PW, [-1, 0], t, '');
      M.stag.forEach(z => { if (isFinite(z[0]) && !(C.abs(C.sub(z, c)) < M.R * (1 - 1e-6))) diamond(cw, PW, J(z), t); });
      inflow(cw, PW, t, M.al, ' 2V₀');
      label(cw, 'plan des w = J(z) (profil)', t);
      // lectures
      const vEdge = z => { const d1 = C.abs(M.dF(z)); return d1 > 1e-7 ? '∞' : C.abs(M.d2F(z)).toFixed(3); };
      const te = vEdge([1, 0]);
      roG.set(te === '∞' ? `|v| = ∞ &nbsp;(F'(1) ≠ 0, J'(1) = 0)` : `|v| = ${te} fini (F'(1) = 0)`);
      const onCircle = Math.abs(Math.hypot(-1 - c[0], -c[1]) - M.R) < 1e-6;
      roL.set(onCircle ? (vEdge([-1, 0]) === '∞' ? '|v| = ∞ en w = −1' : `|v| = ${vEdge([-1, 0])} fini en w = −1`) : 'arrondi : −1 est dans le cercle');
      roL.el.title = 'Γ = ' + M.Gam.toFixed(3);
    }

    // ---------- interaction : glisser le centre c ----------
    function setC(p) {
      if (!PZ) return; let [x, y] = PZ.toWorld(p.x, p.y);
      x = Math.min(0, x); const n = Math.hypot(x, y); if (n > 0.5) { x *= 0.5 / n; y *= 0.5 / n; }
      const [ox, oy] = PZ.toPx(0, 0); if (Math.abs(p.y - oy) < 6) y = 0; if (Math.hypot(p.x - ox, p.y - oy) < 8) { x = 0; y = 0; }
      c = [x, y]; drawAll();
    }
    const offDrag = kit.drag(stZ.canvas, { onDown: setC, onMove: (p, ev, down) => { if (down) setC(p); } });
    stZ.onResize = drawAll; stW.onResize = drawAll;
    drawAll();
    return () => { offDrag(); stZ.destroy(); stW.destroy(); };
  }
});

} catch (e) { console.error('viz viz-ch04-joukovski-ecoulement failed to register', e); }

// ---- content/ch04/viz/viz-ch04-moyenne-maximum.js ----
try {
FMA.registerViz({
  id: 'viz-ch04-moyenne-maximum',
  chapter: 4,
  title: 'Fonctions harmoniques : moyenne sur un cercle et principe du maximum',
  description: String.raw`**Ce que l'on voit.** La carte colore chaque point $z$ selon la valeur de $h(z)$ **comparée à $h(z_0)$** : rouge si $h(z) > h(z_0)$, bleu si $h(z) < h(z_0)$ (fines lignes : lignes de niveau de $h$ ; trait épais : la ligne de niveau $h = h(z_0)$ qui passe par le centre). Le cercle $C(z_0,r)$ se déplace à la souris (ou au doigt) ; son rayon se règle au curseur. La bande du bas trace $\theta\mapsto h(z_0+re^{i\theta})$ sur $[0,2\pi]$, avec en pointillé la valeur au centre $h(z_0)$ et en orange la moyenne sur le cercle.

**Le théorème.** Une fonction $h$ harmonique réelle ($C^2$ et $\Delta h = \partial_x^2 h+\partial_y^2 h = 0$, [[ch04-harmonique-def]]) vérifie, pour tout disque fermé $\bar D(z_0,r)\subset\Omega$,
$$h(z_0)=\frac1{2\pi}\int_0^{2\pi}h\big(z_0+re^{i\theta}\big)\,d\theta ,$$
et, sur un ouvert connexe, n'a **aucun maximum local** sauf si elle est constante (poly, Corollaire IV.2.5, p. 77 ; [[ch04-harmonique-moyenne-maximum]]).

**À faire.**
* Avec une fonction harmonique ($x^2-y^2$, $\Re(z^3)$, $e^x\cos y$), déplacez le cercle et changez $r$ : « valeur au centre » et « moyenne » coïncident toujours. Dans la bande du bas, l'aire rouge (au-dessus de $h(z_0)$) compense exactement l'aire bleue. Le trait épais traverse **toujours** le cercle : il y a du rouge et du bleu sur tout cercle, donc $z_0$ n'est jamais un maximum local. Le maximum sur le disque fermé (triangle ▲) est toujours **sur le bord** : c'est ce qui donne l'unicité des problèmes de Dirichlet (poly, Remarque IV.2.6, p. 77 ; [[ch04-maximum-unicite-bord]]).
* Avec $-(x^2+y^2)$ (non harmonique, $\Delta = -4$) placez $z_0$ en $0$ : tout est bleu autour, la moyenne est **strictement plus petite** que la valeur au centre et le maximum est **intérieur**. Avec $x^2+y^2$ ($\Delta = 4$) c'est l'inverse.
* Avec $\log|z|$ ou $\Re(1/z)$, harmoniques sur $\C^\times = \C\setminus\{0\}$ seulement : tant que le disque fermé évite $0$, l'égalité tient ; dès qu'il contient $0$ (cercle en tirets), l'hypothèse $\bar D(z_0,r)\subset\Omega$ tombe et l'égalité est fausse (pour $\log|z|$ la moyenne vaut alors $\log r$).
* Le bouton anime $r$ : l'égalité vaut pour **tous** les rayons, pas seulement pour $r$ petit.`,
  related: ['ch04-harmonique-moyenne-maximum', 'ch04-harmonique-def', 'ch04-maximum-unicite-bord', 'ch04-holomorphe-implique-harmonique', 'ch04-harmonique-reelle-partie-reelle'],
  height: 560,
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
      rinv: { name: 'Re(1/z) = x/(x²+y²)  (harmonique sur ℂ∖{0})', h: (x, y) => x / (x * x + y * y), z0: [1, 0.5], r: 0.6, sing: true },
      bump: { name: '−(x² + y²)  (NON harmonique, Δ = −4)', h: (x, y) => -(x * x + y * y), z0: [0, 0], r: 1, nonh: true },
      bowl: { name: 'x² + y²  (NON harmonique, Δ = 4)', h: (x, y) => x * x + y * y, z0: [0.3, 0.2], r: 1, nonh: true },
    };
    const sel = kit.select(controls, { label: '$h=$', options: Object.keys(FN).map(k => [FN[k].name, k]), value: 'x2y2', onChange: () => { const F = FN[sel.value]; z0 = F.z0.slice(); sR.value = F.r; computeGrid(); draw(); } });
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
      for (let k = 0; k < v.length; k += 7) { const d = Math.abs(v[k] - S.h0); if (isFinite(d)) { acc += Math.min(d, 50); n++; } }
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

} catch (e) { console.error('viz viz-ch04-moyenne-maximum failed to register', e); }

// ---- content/ch07/viz/viz-ch07-flot-groupe.js ----
try {
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
* Bouton « $t=-s$ » : le rose revient exactement sur $A$, c'est $F(s,0,F(0,s,x))=x$ (Corollaire VII.3.8) : $F_{-s}$ est l'inverse de $F_s$.

Les flèches grises représentent le champ (à l'instant $0$ pour le champ non autonome). Pour ces champs, toutes les courbes intégrales sont définies sur $\mathbb R$ ($D_0=\mathbb R\times U$), donc $t\mapsto F_t$ est un vrai morphisme de groupes $(\mathbb R,+)\to$ bijections du plan. Observe aussi la déformation du quadrillage : la selle étire dans une direction et écrase dans l'autre, la rotation et le pendule conservent l'aire.`,
  related: ['ch07-groupe-un-parametre', 'ch07-translation-temps-autonome', 'ch07-composition-flot', 'ch07-flot-inverse', 'ch07-flot-global-def', 'ch07-proprietes-flot-formules'],
  height: 520,
  mount(container, kit) {
    const st = kit.canvas(container, { height: 380 });
    const controls = kit.controls(container);
    const fields = {
      rot: { label: 'rotation (−y, x)', auto: true, X: (t, x, y) => [-y, x] },
      selle: { label: 'selle (x, −y)', auto: true, X: (t, x, y) => [x, -y] },
      pend: { label: 'pendule (y, −sin x)', auto: true, X: (t, x, y) => [y, -Math.sin(x)] },
      poly: { label: 'poly (y − y⁵, x)', auto: true, X: (t, x, y) => [y - Math.pow(y, 5), x] },
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

} catch (e) { console.error('viz viz-ch07-flot-groupe failed to register', e); }

// ---- content/ch07/viz/viz-ch07-picard.js ----
try {
FMA.registerViz({
  id: 'viz-ch07-picard',
  chapter: 7,
  title: 'Itérations de Picard : la solution comme point fixe',
  description: String.raw`On résout $\alpha'(t)=X(t,\alpha(t))$, $\alpha(0)=x$ en cherchant un **point fixe** de l'opérateur de Picard $S(\varphi)(t)=x+\int_0^t X(s,\varphi(s))\,ds$ (formule (VII.2.2) : une solution est exactement un point fixe de $S$). On part de $\varphi_0\equiv x$ et on calcule $\varphi_{j+1}=S(\varphi_j)$ sur $[-b\,;b]$ (ici $t_0=\tau_0=0$ et $x_0=x$).

**Quoi regarder.**
* **En haut** : la boîte $[-b\,;b]\times \bar B(x_0,2a)$ (rectangle bleu) et le « cône » $\vert x-x_0\vert\le \ell\vert t\vert$ (zone hachurée), où $\ell$ majore $\vert X\vert$ sur la boîte et $k$ est la constante de Lipschitz en $x$ sur la boîte (toutes deux calculées et affichées). Les itérées $\varphi_0,\dots,\varphi_n$ (de pâle à foncé, la dernière en rose épais) se rapprochent de la vraie solution (pointillés verts).
* **En bas** : les écarts $\Vert\varphi_{j+1}-\varphi_j\Vert_\infty$ en échelle logarithmique (barres) et la borne géométrique $(bk)^j\,\Vert\varphi_1-\varphi_0\Vert_\infty\le 2^{-j}\Vert\varphi_1-\varphi_0\Vert_\infty$ (ligne orange) que donne le théorème du point fixe de Banach.
* **Les deux conditions de la preuve** (poly, Lemme VII.2.7 et preuve du Théorème VII.2.1, p. 130-131) sont testées en direct : $b\ell< a$ assure que $S$ **envoie la boîte dans elle-même** (les itérées restent dans le cône), $bk\le \frac12$ assure que $S$ est **$\frac12$-contractante**. Augmente $b$ avec $\alpha'=\alpha^2$ : les conditions tombent, les itérées sortent de la boîte et finissent par diverger (la vraie solution $x/(1-tx)$ explose en $t=1/x$).

Les conditions sont **suffisantes**, pas nécessaires : pour une équation linéaire ($\alpha'=\alpha$) les itérées convergent même quand $b\ell\ge a$ ; c'est l'équation non linéaire qui montre pourquoi il faut un petit $b$. La convergence observée est même bien plus rapide que $2^{-j}$ (en $b^j k^j/j!$), la borne de Banach n'étant qu'une majoration.`,
  related: ['ch07-cauchy-lipschitz', 'ch07-lemme-operateur-integral', 'ch07-equation-integrale', 'ch06-point-fixe-banach', 'ch07-localement-lipschitzien-def'],
  height: 560,
  mount(container, kit) {
    const st = kit.canvas(container, { height: 420 });
    const controls = kit.controls(container);
    const eqs = {
      lin: { label: "α′ = α", X: (t, x) => x, dX: (t, x) => 1, exact: (t, x0) => x0 * Math.exp(t) },
      aff: { label: "α′ = t + α", X: (t, x) => t + x, dX: (t, x) => 1, exact: (t, x0) => (x0 + 1) * Math.exp(t) - t - 1 },
      gau: { label: "α′ = −2tα", X: (t, x) => -2 * t * x, dX: (t, x) => -2 * t, exact: (t, x0) => x0 * Math.exp(-t * t) },
      sq: { label: "α′ = α²", X: (t, x) => x * x, dX: (t, x) => 2 * x, exact: (t, x0) => (t * x0 < 1 ? x0 / (1 - t * x0) : NaN) },
    };
    const sel = kit.select(controls, { label: 'équation', options: Object.keys(eqs).map(k => [eqs[k].label, k]), value: 'sq', onChange: () => { stopAnim(); draw(); } });
    const sx = kit.slider(controls, { label: '$x=\\alpha(0)$', min: -1.5, max: 1.5, step: 0.05, value: 1, onChange: () => draw() });
    const sa = kit.slider(controls, { label: '$a$', min: 0.25, max: 2, step: 0.05, value: 0.5, onChange: () => draw() });
    const sb = kit.slider(controls, { label: '$b$', min: 0.05, max: 1.5, step: 0.01, value: 0.12, onChange: () => draw() });
    const sn = kit.slider(controls, { label: '$n$ itérées', min: 0, max: 10, step: 1, value: 3, onChange: () => { stopAnim(); draw(); } });
    const bPlay = kit.button(controls, { label: '▶ itérer', primary: true, onClick: () => toggleAnim() });
    const roCond = kit.readout(controls, { label: 'conditions' });
    const roErr = kit.readout(controls, { label: 'écart' });

    const N = 241, MID = 120, NMAX = 10, BIG = 1e6;
    let anim = null, acc = 0;
    function stopAnim() { if (anim) { anim.stop(); anim = null; } bPlay.textContent = '▶ itérer'; }
    function toggleAnim() {
      if (anim) { stopAnim(); return; }
      sn.value = 0; draw(); acc = 0; bPlay.textContent = '⏸ pause';
      anim = kit.animate(dt => { acc += dt; if (acc > 0.7) { acc = 0; if (sn.value >= NMAX) { stopAnim(); return; } sn.value = sn.value + 1; draw(); } });
    }
    const clampv = v => (isFinite(v) ? Math.max(-BIG, Math.min(BIG, v)) : (v > 0 ? BIG : -BIG));

    // Picard operator on the grid t_i = -b + 2b i/(N-1), integral from 0 (index MID) by trapezoids
    function picard(X, phi, ts, x0) {
      const out = new Float64Array(N); const f = new Float64Array(N);
      for (let i = 0; i < N; i++) f[i] = clampv(X(ts[i], phi[i]));
      out[MID] = x0;
      for (let i = MID + 1; i < N; i++) out[i] = clampv(out[i - 1] + 0.5 * (ts[i] - ts[i - 1]) * (f[i] + f[i - 1]));
      for (let i = MID - 1; i >= 0; i--) out[i] = clampv(out[i + 1] - 0.5 * (ts[i + 1] - ts[i]) * (f[i] + f[i + 1]));
      return out;
    }

    function draw() {
      try { render(); } catch (e) { console.warn(e); }
    }
    function render() {
      const T = kit.theme(); const pal = kit.palette();
      const { ctx, W, H } = st; st.clear();
      ctx.fillStyle = T.bg; ctx.fillRect(0, 0, W, H);
      const eq = eqs[sel.value]; const x0 = sx.value, a = sa.value, b = sb.value, n = sn.value;
      // constants on the box [-b,b] x [x0-2a, x0+2a]
      let ell = 0, k = 0;
      for (let i = 0; i <= 30; i++) for (let j = 0; j <= 30; j++) {
        const t = -b + 2 * b * i / 30, x = x0 - 2 * a + 4 * a * j / 30;
        ell = Math.max(ell, Math.abs(eq.X(t, x))); k = Math.max(k, Math.abs(eq.dX(t, x)));
      }
      const condStab = b * ell < a, condContr = b * k <= 0.5;
      roCond.set(`ℓ = ${ell.toFixed(2)}, k = ${k.toFixed(2)} · bℓ = ${(b * ell).toFixed(2)} ${condStab ? '<' : '≥'} a = ${a.toFixed(2)} ${condStab ? '✓' : '✗'} · bk = ${(b * k).toFixed(2)} ${condContr ? '≤' : '>'} 1/2 ${condContr ? '✓' : '✗'}`);
      // iterates
      const ts = new Float64Array(N); for (let i = 0; i < N; i++) ts[i] = -b + 2 * b * i / (N - 1);
      const its = [new Float64Array(N).fill(x0)];
      for (let j = 0; j < NMAX + 1; j++) its.push(picard(eq.X, its[j], ts, x0));
      const diffs = [];
      for (let j = 0; j < NMAX; j++) { let m = 0; for (let i = 0; i < N; i++) m = Math.max(m, Math.abs(its[j + 1][i] - its[j][i])); diffs.push(m); }
      let errExact = 0, exactOk = true;
      for (let i = 0; i < N; i++) { const e = eq.exact(ts[i], x0); if (!isFinite(e)) { exactOk = false; break; } errExact = Math.max(errExact, Math.abs(its[n][i] - e)); }
      roErr.set(exactOk ? `‖φ<sub>${n}</sub> − α‖<sub>∞</sub> = ${errExact.toExponential(1)}` : `la vraie solution explose dans [−b ; b] : pas de solution sur tout l'intervalle`);

      // ---------- top panel ----------
      const Htop = Math.round(H * 0.66);
      const ymin = x0 - 2.7 * a, ymax = x0 + 2.7 * a;
      const tm = [0.2, 0.25, 0.4, 0.5, 0.8, 1, 1.2, 1.6, 2].find(v => v >= 1.5 * b - 1e-9) || 2.4;
      const P = kit.plane(ctx, { xmin: -tm, xmax: tm, ymin, ymax, W, H: Htop, keepAspect: false });
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, Htop); ctx.clip();
      // box
      const [bx0, by0] = P.toPx(-b, x0 + 2 * a), [bx1, by1] = P.toPx(b, x0 - 2 * a);
      ctx.save(); ctx.globalAlpha = 0.10; ctx.fillStyle = T.accent; ctx.fillRect(bx0, by0, bx1 - bx0, by1 - by0); ctx.restore();
      ctx.save(); ctx.strokeStyle = T.accent; ctx.lineWidth = 1.5; ctx.strokeRect(bx0, by0, bx1 - bx0, by1 - by0); ctx.restore();
      // cone |x - x0| <= ell |t| clipped to the box (hatched)
      ctx.save(); ctx.beginPath(); ctx.rect(bx0, by0, bx1 - bx0, by1 - by0); ctx.clip();
      ctx.beginPath(); [[0, x0], [b, x0 + ell * b], [b, x0 - ell * b]].forEach(([t, x], i) => { const [px, py] = P.toPx(t, x); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.closePath();
      [[0, x0], [-b, x0 + ell * b], [-b, x0 - ell * b]].forEach(([t, x], i) => { const [px, py] = P.toPx(t, x); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.closePath();
      ctx.save(); ctx.clip();
      ctx.strokeStyle = T.accent4; ctx.globalAlpha = 0.35; ctx.lineWidth = 1;
      for (let d = -H; d < W + H; d += 7) { ctx.beginPath(); ctx.moveTo(d, 0); ctx.lineTo(d - Htop, Htop); ctx.stroke(); }
      ctx.restore();
      ctx.strokeStyle = T.accent4; ctx.globalAlpha = 0.8; ctx.lineWidth = 1; ctx.setLineDash([4, 3]);
      for (const s of [1, -1]) { ctx.beginPath(); let [px, py] = P.toPx(-b, x0 + s * ell * b); ctx.moveTo(px, py); [px, py] = P.toPx(0, x0); ctx.lineTo(px, py); [px, py] = P.toPx(b, x0 + s * ell * b); ctx.lineTo(px, py); ctx.stroke(); }
      ctx.restore();
      P.axes({ labels: false, xlabel: 't', ylabel: 'x' });
      { // ticks: separate steps for t and x
        const nice = r => { const p = Math.pow(10, Math.floor(Math.log10(r))); const m = r / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p; };
        const st_ = nice(tm / 2.5), sy_ = nice((ymax - ymin) / 6); const [ox, oy] = P.toPx(0, 0);
        ctx.save(); ctx.fillStyle = T.muted; ctx.strokeStyle = T.axis; ctx.font = '11px system-ui, sans-serif';
        const yb = Math.min(Htop - 14, Math.max(2, oy + 3));
        ctx.textAlign = 'center'; ctx.textBaseline = 'top';
        for (let t = Math.ceil(-tm / st_) * st_; t <= tm + 1e-9; t += st_) { if (Math.abs(t) < 1e-9) continue; const [px] = P.toPx(t, 0); if (px < 14 || px > W - 14) continue; ctx.beginPath(); ctx.moveTo(px, oy - 3); ctx.lineTo(px, oy + 3); ctx.stroke(); ctx.fillText(kit.fmt(+t.toFixed(3)), px, yb); }
        ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
        for (let y = Math.ceil(ymin / sy_) * sy_; y <= ymax; y += sy_) { if (Math.abs(y) < 1e-9) continue; const [, py] = P.toPx(0, y); if (py < 16 || py > Htop - 4) continue; ctx.beginPath(); ctx.moveTo(ox - 3, py); ctx.lineTo(ox + 3, py); ctx.stroke(); ctx.fillText(kit.fmt(+y.toFixed(3)), ox - 5, py); }
        ctx.restore();
      }
      // exact solution
      const ex = []; for (let i = 0; i <= 300; i++) { const t = -tm + 2 * tm * i / 300; const v = eq.exact(t, x0); ex.push([t, isFinite(v) && Math.abs(v - x0) < 50 * a ? v : NaN]); }
      P.curve(ex, { color: T.accent3, width: 2, dash: [6, 4] });
      // iterates
      for (let j = 0; j <= n; j++) {
        const pts = []; for (let i = 0; i < N; i++) pts.push([ts[i], its[j][i]]);
        const last = j === n;
        ctx.save(); ctx.globalAlpha = last ? 1 : 0.25 + 0.6 * (j + 1) / (n + 1);
        P.curve(pts, { color: last ? T.accent2 : T.accent5, width: last ? 3 : 1.4 });
        ctx.restore();
      }
      P.point(0, x0, { r: 4, color: T.fg });
      ctx.restore();
      // legend top
      ctx.save(); ctx.font = '11px system-ui, sans-serif'; ctx.textBaseline = 'top'; ctx.textAlign = 'left';
      const leg = [[T.accent2, `φ${sub(n)} (itérée n° ${n})`], [T.accent3, 'vraie solution'], [T.accent, 'boîte [−b;b]×B̄(x₀,2a)']];
      let lx = 6; const ly = 4;
      for (const [c, s] of leg) { const w = ctx.measureText(s).width; if (lx + w + 22 > W) break; ctx.fillStyle = c; ctx.fillRect(lx, ly + 4, 12, 3); ctx.fillStyle = T.fg; ctx.fillText(s, lx + 15, ly); lx += w + 26; }
      ctx.restore();
      ctx.save(); ctx.strokeStyle = T.grid; ctx.beginPath(); ctx.moveTo(0, Htop + 0.5); ctx.lineTo(W, Htop + 0.5); ctx.stroke(); ctx.restore();

      // ---------- bottom panel: log10 of sup-norm differences ----------
      const top = Htop + (W < 460 ? 36 : 26), bot = H - 18, left = 34, right = W - 8;
      const L = v => Math.log10(Math.max(v, 1e-14));
      const d0 = diffs[0] || 1e-14;
      const lmax = Math.ceil(Math.max(L(Math.max(...diffs.slice(0, Math.max(1, n)))), L(d0)) + 0.01), lmin = Math.min(lmax - 2, Math.max(-12, Math.floor(Math.min(...diffs.slice(0, Math.max(1, n)).map(L), L(d0) - Math.max(1, n) * Math.log10(2)))));
      const yOf = l => bot - (bot - top) * (l - lmin) / Math.max(1e-9, lmax - lmin);
      ctx.save(); ctx.font = '11px system-ui, sans-serif'; ctx.fillStyle = T.fg; ctx.textBaseline = 'top'; ctx.textAlign = 'left';
      ctx.fillText('‖φⱼ₊₁ − φⱼ‖∞ (échelle log)', left, Htop + 5);
      ctx.fillStyle = T.muted; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.strokeStyle = T.grid;
      const stepL = Math.max(1, Math.ceil((lmax - lmin) / 4));
      for (let l = lmin; l <= lmax; l += stepL) { const y = yOf(l); ctx.beginPath(); ctx.moveTo(left, y); ctx.lineTo(right, y); ctx.stroke(); ctx.fillText('1e' + l, left - 3, y); }
      const slot = (right - left) / NMAX;
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      for (let j = 0; j < NMAX; j++) {
        const x = left + slot * (j + 0.5); const active = j < n;
        const y = yOf(Math.max(lmin, L(diffs[j])));
        ctx.globalAlpha = active ? 0.9 : 0.18; ctx.fillStyle = T.accent5; ctx.fillRect(x - slot * 0.32, y, slot * 0.64, bot - y);
        ctx.globalAlpha = 1; ctx.fillStyle = T.muted; ctx.fillText(String(j), x, bot + 3);
      }
      // geometric bound (bk)^j d0 and 2^-j d0
      const q = Math.min(b * k, 0.5) > 0 ? b * k : 0;
      ctx.strokeStyle = T.accent4; ctx.lineWidth = 2; ctx.beginPath();
      for (let j = 0; j < NMAX; j++) { const x = left + slot * (j + 0.5); const y = yOf(Math.max(lmin, Math.min(lmax, L(d0) + j * Math.log10(0.5)))); j ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.stroke();
      if (q > 0 && q < 0.5) { ctx.setLineDash([3, 3]); ctx.lineWidth = 1.3; ctx.beginPath();
        for (let j = 0; j < NMAX; j++) { const x = left + slot * (j + 0.5); const y = yOf(Math.max(lmin, Math.min(lmax, L(d0) + j * Math.log10(q)))); j ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
        ctx.stroke(); ctx.setLineDash([]); }
      ctx.textAlign = 'right'; ctx.textBaseline = 'top'; ctx.fillStyle = T.accent4;
      ctx.fillText('— 2⁻ʲ‖φ₁−φ₀‖   ┄ (bk)ʲ‖φ₁−φ₀‖', right, Htop + 5 + (W < 460 ? 12 : 0));
      ctx.restore();
    }
    function sub(n) { return String(n).split('').map(c => '₀₁₂₃₄₅₆₇₈₉'[+c]).join(''); }
    st.onResize = draw; draw();
    return () => { stopAnim(); st.destroy(); };
  }
});

} catch (e) { console.error('viz viz-ch07-picard failed to register', e); }

// ---- content/ch07/viz/viz-ch07-temps-de-vie.js ----
try {
FMA.registerViz({
  id: 'viz-ch07-temps-de-vie',
  chapter: 7,
  title: 'Courbes intégrales maximales : explosion, lemme des bouts, non-unicité',
  description: String.raw`Équations autonomes en dimension 1, $\alpha'(t)=X(\alpha(t))$, dessinées dans le plan $(t,x)$ : les petits segments gris donnent la pente $X(x)$ imposée en chaque point. **Clique ou glisse** pour choisir la condition initiale $(\tau_0,x_0)$ (point noir) ; la courbe rose est la **courbe intégrale maximale** $\alpha_{\tau_0,x_0}$, définie sur l'intervalle ouvert $J_{\tau_0}(x_0)=\,]a\,;b[$ (Définition VII.3.3, p. 134), dont les bornes finies sont marquées par des verticales pointillées.

**Quoi regarder.**
* $\alpha'=\alpha^2$ et $\alpha'=1+\alpha^2$ : champs $C^\infty$, donc Cauchy-Lipschitz s'applique, et pourtant $b<+\infty$ : la solution **explose en temps fini** ($x_0/(1-(t-\tau_0)x_0)$, resp. $\tan$). Cauchy-Lipschitz est un résultat **local**.
* La bande bleue est un compact $K$ (curseur $R$). **Lemme des bouts** (Théorème VII.3.10, p. 136) : si $\alpha([\tau_0\,;b[)\subset K$ compact de $U$, alors $b=+\infty$. Contraposée visible : quand $b$ est fini, la courbe **sort de $K$** (cercle orange) avant $b$, **quel que soit** $R$ ; en augmentant $R$, l'instant de sortie se rapproche de $b$ sans l'atteindre.
* $\alpha'=\alpha-\alpha^3$ : pour $\vert x_0\vert\le1$, la courbe reste coincée entre les équilibres $0$ et $\pm1$, donc dans un compact : $b=+\infty$ (et même $a=-\infty$). Pour $\vert x_0\vert>1$, elle reste bornée vers le futur ($b=+\infty$) mais explose **dans le passé** : c'est « l'énoncé analogue avec la borne inférieure ».
* $\alpha'=-1$ sur $U=\,]0\,;+\infty[$ : la courbe reste **bornée** et pourtant $b=\tau_0+x_0<+\infty$ : elle ne reste dans aucun compact **de $U$**, car elle s'approche du bord $x=0$ (zone hachurée, hors de $U$). L'hypothèse « compact de $U$ » ne peut pas être remplacée par « borné ».
* $\alpha'=2\vert\alpha\vert^{1/2}$ (poly, Remarque VII.2.5, p. 129) : $X$ est continu mais **pas lipschitzien en $0$**. Par chaque point passe tout un faisceau de solutions (courbes pâles) : on peut rester en $0$ aussi longtemps qu'on veut puis « décoller » en parabole. Le curseur « palier » choisit l'une d'elles. Place $x_0=0$ (le point s'aimante sur l'axe) pour retrouver $\alpha_1=0$ et $\alpha_2(t)=\mathrm{signe}(t)\,t^2$ du poly. Ici la notion de courbe intégrale *maximale unique* n'a plus de sens : l'unicité de [[ch07-unicite-globale]] repose sur Cauchy-Lipschitz.

Idée de la preuve du lemme des bouts : sur le compact $K$, le flot local existe pendant un temps $2\epsilon$ **uniforme** (recouvrement fini) ; si $b<+\infty$, on repart du point $\alpha(b-\epsilon)\in K$ et on prolonge au-delà de $b$, contradiction.`,
  related: ['ch07-lemme-des-bouts', 'ch07-courbe-integrale-maximale-def', 'ch07-peano-non-unicite', 'ch07-cauchy-lipschitz', 'ch07-unicite-globale', 'ch07-flot-global-def'],
  height: 500,
  mount(container, kit) {
    const st = kit.canvas(container, { height: 380 });
    const controls = kit.controls(container);
    const INF = Infinity;
    const fields = {
      sq: { label: "α′ = α²", X: x => x * x,
        sol: (t, tau, x0) => x0 / (1 - (t - tau) * x0),
        J: (tau, x0) => (x0 > 0 ? [-INF, tau + 1 / x0] : x0 < 0 ? [tau + 1 / x0, INF] : [-INF, INF]) },
      tan: { label: "α′ = 1 + α²", X: x => 1 + x * x,
        sol: (t, tau, x0) => Math.tan(t - tau + Math.atan(x0)),
        J: (tau, x0) => [tau - Math.PI / 2 - Math.atan(x0), tau + Math.PI / 2 - Math.atan(x0)] },
      bist: { label: "α′ = α − α³", X: x => x - x * x * x,
        sol: (t, tau, x0) => { const u0 = x0 * x0, e = Math.exp(2 * (t - tau)); const d = 1 - u0 + u0 * e; return d > 0 ? Math.sign(x0) * Math.sqrt(u0 * e / d) : NaN; },
        J: (tau, x0) => (x0 * x0 > 1 ? [tau + 0.5 * Math.log(1 - 1 / (x0 * x0)), INF] : [-INF, INF]) },
      bord: { label: "α′ = −1 sur U = ]0 ; +∞[", X: x => -1, half: true,
        sol: (t, tau, x0) => x0 - (t - tau),
        J: (tau, x0) => [-INF, tau + x0] },
      peano: { label: "α′ = 2|α|^(1/2) (Peano)", X: x => 2 * Math.sqrt(Math.abs(x)), peano: true,
        J: () => [-INF, INF] },
    };
    const sel = kit.select(controls, { label: 'équation', options: Object.keys(fields).map(k => [fields[k].label, k]), value: 'sq', onChange: () => { fixPoint(); draw(); } });
    const sR = kit.slider(controls, { label: 'taille $R$ du compact $K$', min: 0.5, max: 3, step: 0.05, value: 1.5, onChange: () => draw() });
    const sP = kit.slider(controls, { label: 'palier (Peano)', min: 0, max: 5, step: 0.05, value: 1, onChange: () => draw() });
    const cSlope = kit.checkbox(controls, { label: 'champ de pentes', checked: true, onChange: () => draw() });
    const roJ = kit.readout(controls, { label: '$J_{\\tau_0}(x_0)$' });
    const roK = kit.readout(controls, { label: 'compact $K$' });

    let tau = -1.5, x0 = 0.6, P = null;
    function fixPoint() {
      const F = fields[sel.value];
      if (F.half) x0 = Math.max(0.05, x0);
      if (F.peano && Math.abs(x0) < 0.12) x0 = 0;
      sP.el.style.display = F.peano ? '' : 'none';
      sR.el.style.display = F.peano ? 'none' : '';
    }
    const Kof = (F, R) => (F.half ? [1 / (1 + R), 1 + R] : [-R, R]);
    const fmt = v => (v === INF ? '+∞' : v === -INF ? '−∞' : (Math.abs(v) < 5e-3 ? '0' : v.toFixed(2).replace('.', ',')));

    function peanoSol(c1, c2) { return t => (t < c1 ? -(t - c1) * (t - c1) : t <= c2 ? 0 : (t - c2) * (t - c2)); }
    function peanoFamily(sigma) { // returns [c1,c2] for the solution through (tau,x0) with plateau parameter sigma
      if (x0 > 0) { const c2 = tau - Math.sqrt(x0); return [c2 - sigma, c2]; }
      if (x0 < 0) { const c1 = tau + Math.sqrt(-x0); return [c1, c1 + sigma]; }
      return [tau - sigma / 2, tau + sigma / 2];
    }
    function sampleCurve(f, lo, hi, tmin, tmax) {
      const a = Math.max(lo, tmin), b = Math.min(hi, tmax); const pts = []; if (!(b > a)) return pts;
      const ts = []; const n = 500; for (let i = 0; i <= n; i++) ts.push(a + (b - a) * i / n);
      if (hi < tmax) for (let k = 1; k < 40; k++) ts.push(hi - (hi - a) * Math.pow(0.6, k));
      if (lo > tmin) for (let k = 1; k < 40; k++) ts.push(lo + (b - lo) * Math.pow(0.6, k));
      ts.sort((u, v) => u - v);
      for (const t of ts) { if (t <= lo || t >= hi) continue; const v = f(t); pts.push([t, isFinite(v) && Math.abs(v) < 1e3 ? v : NaN]); }
      return pts;
    }
    // first exit time from K going forward (dir=+1) or backward (dir=-1); null if stays (within horizon) ; x0 assumed in K
    function exitTime(f, J, K, dir) {
      const end = dir > 0 ? Math.min(J[1], tau + 60) : Math.max(J[0], tau - 60);
      const inK = v => isFinite(v) && v >= K[0] && v <= K[1];
      const n = 3000; let prev = tau;
      for (let i = 1; i <= n; i++) {
        let t = tau + (end - tau) * i / n; if (i === n && isFinite(dir > 0 ? J[1] : J[0]) ) t = tau + (end - tau) * (1 - 1e-9);
        if (!inK(f(t))) { let lo = prev, hi = t; for (let k = 0; k < 50; k++) { const m = (lo + hi) / 2; if (inK(f(m))) lo = m; else hi = m; } return lo; }
        prev = t;
      }
      return null;
    }
    function draw() { try { render(); } catch (e) { console.warn(e); } }
    function render() {
      const T = kit.theme(); const { ctx, W, H } = st; st.clear(); ctx.fillStyle = T.bg; ctx.fillRect(0, 0, W, H);
      const F = fields[sel.value];
      P = kit.plane(ctx, { xmin: -3.2, xmax: 3.2, ymin: -3, ymax: 3, W, H, keepAspect: false });
      P.grid(1);
      // outside of U
      if (F.half) {
        const [, py0] = P.toPx(0, 0); ctx.save(); ctx.beginPath(); ctx.rect(0, py0, W, H - py0); ctx.clip();
        ctx.strokeStyle = T.muted; ctx.globalAlpha = 0.35; ctx.lineWidth = 1; for (let d = -H; d < W + H; d += 8) { ctx.beginPath(); ctx.moveTo(d, H); ctx.lineTo(d + H, 0); ctx.stroke(); }
        ctx.restore(); P.text(-3.1, -0.3, 'hors de U', { color: T.muted, baseline: 'top' });
      }
      // compact K
      const K = Kof(F, sR.value);
      if (!F.peano) {
        const [, pyA] = P.toPx(0, K[1]), [, pyB] = P.toPx(0, K[0]);
        ctx.save(); ctx.globalAlpha = 0.12; ctx.fillStyle = T.accent; ctx.fillRect(0, pyA, W, pyB - pyA); ctx.globalAlpha = 0.8; ctx.strokeStyle = T.accent; ctx.lineWidth = 1; ctx.setLineDash([5, 4]);
        ctx.beginPath(); ctx.moveTo(0, pyA); ctx.lineTo(W, pyA); ctx.moveTo(0, pyB); ctx.lineTo(W, pyB); ctx.stroke(); ctx.restore();
        P.text(P.xmax - 0.05, K[1], 'K', { color: T.accent, align: 'right', baseline: 'top', dy: 3, font: 'bold 13px system-ui, sans-serif' });
      }
      // slope field
      if (cSlope.value) {
        const gap = W < 420 ? 22 : 26; ctx.save(); ctx.strokeStyle = T.axis; ctx.globalAlpha = 0.7; ctx.lineWidth = 1.1;
        for (let py = gap / 2; py < H; py += gap) for (let px = gap / 2; px < W; px += gap) {
          const [, x] = P.toWorld(px, py); if (F.half && x <= 0) continue;
          const v = F.X(x); let dx = P.sx, dy = -P.sy * v; const L = Math.hypot(dx, dy); dx *= 8 / L; dy *= 8 / L;
          ctx.beginPath(); ctx.moveTo(px - dx, py - dy); ctx.lineTo(px + dx, py + dy); ctx.stroke();
        }
        ctx.restore();
      }
      P.axes({ labels: true, step: 1, xlabel: 't', ylabel: 'x' });
      const J = F.J(tau, x0);
      if (F.peano) {
        // faisceau
        const sigmas = []; for (let s = 0; s <= 6; s += 0.5) sigmas.push(s);
        ctx.save(); ctx.globalAlpha = 0.45;
        for (const s of sigmas) { const [c1, c2] = peanoFamily(s); P.curve(sampleCurve(peanoSol(c1, c2), -INF, INF, P.xmin, P.xmax), { color: T.accent5, width: 1.2 }); }
        if (x0 === 0) P.curve([[P.xmin, 0], [P.xmax, 0]], { color: T.accent5, width: 1.2 });
        ctx.restore();
        const [c1, c2] = peanoFamily(sP.value);
        P.curve(sampleCurve(peanoSol(c1, c2), -INF, INF, P.xmin, P.xmax), { color: T.accent2, width: 3 });
        P.point(c1, 0, { r: 3, color: T.accent4 }); P.point(c2, 0, { r: 3, color: T.accent4 });
        roJ.set(`= ℝ · solution choisie : nulle sur [${fmt(c1)} ; ${fmt(c2)}] (points orange), parabole ailleurs`);
        roK.set(x0 === 0 ? 'x₀ = 0 : α₁ ≡ 0 et α₂(t) = signe(t)t² en font partie' : 'non-unicité : X n\'est pas lipschitzien en x = 0');
      } else {
        const f = t => F.sol(t, tau, x0);
        P.curve(sampleCurve(f, J[0], J[1], P.xmin, P.xmax), { color: T.accent2, width: 3 });
        // finite ends of J
        ctx.save(); ctx.strokeStyle = T.accent2; ctx.globalAlpha = 0.8; ctx.setLineDash([4, 4]); ctx.lineWidth = 1.4;
        for (const [e, name] of [[J[0], 'a'], [J[1], 'b']]) if (isFinite(e) && e > P.xmin && e < P.xmax) {
          const [px] = P.toPx(e, 0); ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, H); ctx.stroke();
          ctx.save(); ctx.setLineDash([]); ctx.fillStyle = T.accent2; ctx.font = 'bold 12px system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText(name, px + 3, 20); ctx.restore();
        }
        ctx.restore();
        // exits from K
        const inK0 = x0 >= K[0] && x0 <= K[1];
        let msg;
        if (!inK0) msg = 'x₀ ∉ K : agrandis K (curseur R)';
        else {
          const tp = exitTime(f, J, K, 1), tm = exitTime(f, J, K, -1);
          for (const te of [tp, tm]) if (te !== null && te > P.xmin && te < P.xmax) { const v = f(te); const [px, py] = P.toPx(te, v); ctx.save(); ctx.strokeStyle = T.accent4; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(px, py, 7, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); }
          const fwd = tp === null ? (J[1] === INF ? 'α([τ₀ ; b[) ⊂ K et b = +∞ ✓' : '—') : `sortie de K à t = ${fmt(tp)} < b = ${fmt(J[1])}`;
          msg = `K = [${fmt(K[0])} ; ${fmt(K[1])}] · ${fwd}`;
        }
        roK.set(msg);
        roJ.set(`= ]${fmt(J[0])} ; ${fmt(J[1])}[`);
      }
      P.point(tau, x0, { r: 5.5, color: T.fg, stroke: T.bg, label: '(τ₀, x₀)' });
    }
    const setFrom = p => { if (!P) return; const [t, x] = P.toWorld(p.x, p.y); tau = Math.max(-3, Math.min(3, t)); x0 = Math.max(-2.9, Math.min(2.9, x)); fixPoint(); draw(); };
    const offDrag = kit.drag(st.canvas, { onDown: p => setFrom(p), onMove: (p, ev, down) => { if (down) setFrom(p); } });
    fixPoint();
    st.onResize = draw; draw();
    return () => { offDrag(); st.destroy(); };
  }
});

} catch (e) { console.error('viz viz-ch07-temps-de-vie failed to register', e); }
