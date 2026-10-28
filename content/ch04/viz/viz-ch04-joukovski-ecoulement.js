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
  height: 420,
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
    const roC = kit.readout(controls, { label: 'circulation $\\Gamma$' });
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
      if (text) { ctx.font = '11px system-ui, sans-serif'; ctx.fillStyle = t.fg; ctx.textAlign = z[0] < 0 ? 'right' : 'left'; ctx.textBaseline = 'bottom'; ctx.fillText(text, px + (z[0] < 0 ? -6 : 6), py - 4); } ctx.restore();
    }
    function diamond(ctx, P, z, t) {
      const [px, py] = P.toPx(z[0], z[1]); ctx.save(); ctx.fillStyle = '#ffffff'; ctx.strokeStyle = '#111111'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(px, py - 6); ctx.lineTo(px + 6, py); ctx.lineTo(px, py + 6); ctx.lineTo(px - 6, py); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    }
    function inflow(ctx, P, t, al, scale) {
      const x = 14, y = P.H - 26, L = 34;
      kit.arrow(ctx, x, y, x + L * Math.cos(al), y - L * Math.sin(al), { color: t.accent, width: 2.2, head: 8 });
      const txt = 'vitesse à l’infini' + scale, tx = x + L + 6, ty = y - 6 - 8 * Math.sin(al);
      ctx.save(); ctx.font = '11px system-ui, sans-serif'; const tw = ctx.measureText(txt).width; ctx.globalAlpha = 0.85; ctx.fillStyle = t.bg; ctx.fillRect(tx - 3, ty - 8, tw + 6, 16); ctx.globalAlpha = 1;
      ctx.fillStyle = t.fg; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText(txt, tx, ty); ctx.restore();
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
      M.stag.forEach(z => { if (isFinite(z[0]) && !(C.abs(C.sub(z, c)) < M.R * (1 - 1e-6))) diamond(ctx, PZ, z, t); });
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
      roC.set(M.Gam === 0 ? '0' : M.Gam.toFixed(3));
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
