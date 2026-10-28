FMA.registerViz({
  id: 'viz-ch02-indice-lacet',
  chapter: 2,
  title: "Indice d'un lacet : compter les tours autour de z₀",
  description: String.raw`**Ce que l'on voit.** Un *lacet* $\gamma:[0,1]\to\C$ (chemin $C^1$ par morceaux tel que $\gamma(0)=\gamma(1)$), son image $\Gamma=\gamma([0,1])$ (trait bleu épais, les flèches donnent le sens de parcours, le petit point creux est $\gamma(0)$) et un point $z_0\notin\Gamma$ (point orange) que l'on **déplace en cliquant ou en glissant**. Chaque point $z$ du plan hors de $\Gamma$ est teinté selon la valeur de l'entier $\Ind_z(\gamma)$ (légende en haut à gauche ; fond neutre = $0$, bleu = positif, rose = négatif). La flèche rose va de $z_0$ à $\gamma(t)$ ; la petite spirale autour de $z_0$ compte les tours qu'elle a déjà faits. La bande du bas trace $t\mapsto\frac{\theta(t)-\theta(0)}{2\pi}$, où $\theta(t)$ est un argument de $\gamma(t)-z_0$ **qui varie continûment** avec $t$.

**Le lien avec le cours.** L'indice est défini par (poly, Définition II.3.1, p. 40)
$$\begin{aligned}\Ind_{z_0}(\gamma)&=\frac{1}{2i\pi}\int_\gamma\frac{dz}{z-z_0}\\&=\frac{1}{2i\pi}\int_0^1\frac{\gamma'(t)}{\gamma(t)-z_0}\,dt .\end{aligned}$$
Sur le morceau $[0,t]$ du lacet, cette intégrale vaut $\frac{\theta(t)-\theta(0)}{2\pi}-\frac{i}{2\pi}\ln\frac{|\gamma(t)-z_0|}{|\gamma(0)-z_0|}$ (lecture « intégrale sur $[0,t]$ ») : pour $t<1$ ce n'est en général **pas** un entier (le chemin n'est pas fermé). En $t=1$, $|\gamma(1)-z_0|=|\gamma(0)-z_0|$, la partie imaginaire s'annule et il reste un **entier** : le nombre de tours de $\gamma$ autour de $z_0$. Les couleurs illustrent la Proposition II.3.2 (p. 40) : $z\mapsto\Ind_z(\gamma)$ est constante sur chaque composante connexe de $\C\setminus\Gamma$ et nulle sur la composante non bornée. [[ch02-indice-def]], [[ch02-indice-entier-localement-constant]].

**À faire.**
* *Cercle* : indice $1$ dedans, $0$ dehors (Exemple II.3.3, p. 41) ; *sens horaire* : $-1$ dedans.
* *Double boucle* : indice $2$ au centre, $1$ dans la zone intermédiaire (version lissée du « lacet d'indice 2 par rapport à l'origine » de la figure p. 41) ; *triple boucle* : $3$ au centre ; *huit* : $+1$ dans un lobe, $-1$ dans l'autre.
* *À main levée* : dessinez un lacet quelconque (il est refermé par un segment). L'indice ne change qu'en **traversant** $\Gamma$, et de $\pm1$ par traversée.
* Curseur $s$ : on déforme le lacet par $\gamma_s=(1-s)\gamma+s\,c$ ($c$ = losange), homotopie de lacets entre $\gamma$ et le lacet constant égal à $c$ (poly, Définition II.1.1, p. 35). L'indice en $z_0$ reste constant **tant qu'aucun $\gamma_s$ ne passe par $z_0$** : c'est la Proposition II.3.4 (p. 41), qui demande une homotopie **dans** $\C\setminus\{z_0\}$ ([[ch02-indice-invariance-homotopie]]). Dès que le lacet franchit $z_0$, l'indice saute (et vaut $0$ pour $s$ proche de $1$).

> ⚠️ Si $z_0\in\Gamma$, l'intégrale n'est pas définie : la lecture affiche alors « $z_0\in\Gamma$ ».`,
  related: ['ch02-indice-def', 'ch02-indice-entier-localement-constant', 'ch02-indice-cercle', 'ch02-indice-invariance-homotopie', 'ch02-homotopie-simplement-connexe'],
  height: 560,
  mount(container, kit) {
    const TAU = 2 * Math.PI;
    const st = kit.canvas(container, { height: 340 });
    const st2 = kit.canvas(container, { height: 120 });
    const controls = kit.controls(container);

    // ---------- lacets proposés (t ∈ [0,1]) ----------
    const LOOPS = {
      cercle: { name: 'cercle C(0,1), sens direct', f: t => [Math.cos(TAU * t), Math.sin(TAU * t)], z0: [0.3, 0.2] },
      horaire: { name: 'cercle C(0,1), sens horaire', f: t => [Math.cos(TAU * t), -Math.sin(TAU * t)], z0: [0.3, 0.2] },
      double: { name: 'double boucle (figure p. 41)', f: t => { const r = 1.15 + 0.55 * Math.cos(TAU * t), a = 2 * TAU * t; return [r * Math.cos(a), r * Math.sin(a)]; }, z0: [0.25, 0.15] },
      triple: { name: 'triple boucle', f: t => { const r = 1.2 + 0.6 * Math.cos(TAU * t), a = 3 * TAU * t; return [r * Math.cos(a), r * Math.sin(a)]; }, z0: [0.1, 0.1] },
      huit: { name: 'huit (indices +1 et −1)', f: t => [1.5 * Math.sin(TAU * t), 0.9 * Math.sin(2 * TAU * t)], z0: [0.8, 0.05] },
      libre: { name: 'à main levée (dessinez !)', f: null, z0: [0.2, 0.2] },
    };
    const N = 720;
    const cPt = [1.75, 1.55]; // point vers lequel on contracte
    let base = [], cur = [], freePts = [], drawing = null;
    let z0 = LOOPS.double.z0.slice();
    let tCur = 1, anim = null;
    let th = [], ind = 0, onCurve = false, present = new Set();
    let off = null, offStep = 2, P = null;

    const sel = kit.select(controls, { label: 'lacet $\\gamma$', options: Object.keys(LOOPS).map(k => [LOOPS[k].name, k]), value: 'double', onChange: () => { stopAnim(); z0 = LOOPS[sel.value].z0.slice(); buildBase(); rebuild(); } });
    const sS = kit.slider(controls, { label: 'contraction $s$', min: 0, max: 1, step: 0.01, value: 0, onChange: () => rebuild() });
    const sT = kit.slider(controls, { label: 'position $t$', min: 0, max: 1, step: 0.005, value: 1, onChange: v => { tCur = v; draw(); } });
    const btn = kit.button(controls, { label: '▶ parcourir γ', primary: true, onClick: () => toggleAnim() });
    const roI = kit.readout(controls, { label: '$\\Ind_{z_0}(\\gamma_s)=$' });
    const roP = kit.readout(controls, { label: 'intégrale sur $[0,t]$ :' });

    // ---------- outils ----------
    function rgbOf(s) {
      s = (s || '').trim(); let m;
      if ((m = s.match(/^#([0-9a-f]{3})$/i))) return m[1].split('').map(h => parseInt(h + h, 16));
      if ((m = s.match(/^#([0-9a-f]{6})/i))) return [0, 2, 4].map(k => parseInt(m[1].substr(k, 2), 16));
      if ((m = s.match(/rgba?\(([^)]+)\)/))) return m[1].split(',').slice(0, 3).map(v => parseFloat(v));
      return [255, 255, 255];
    }
    const mix = (a, b, s) => [a[0] + (b[0] - a[0]) * s, a[1] + (b[1] - a[1]) * s, a[2] + (b[2] - a[2]) * s];
    const ALPHA = [0, 0.2, 0.36, 0.5, 0.62, 0.72];
    function regionColor(k, bg, A, B) { if (k === 0) return bg; const a = ALPHA[Math.min(5, Math.abs(k))]; return mix(bg, k > 0 ? A : B, a); }
    const fmt = (v, d = 3) => { const r = +v.toFixed(d); return (Object.is(r, -0) ? 0 : r).toFixed(d); };

    function buildBase() {
      const L = LOOPS[sel.value];
      if (L.f) { base = []; for (let k = 0; k < N; k++) base.push(L.f(k / N)); }
      else base = freePts.slice();
    }
    function rebuild() {
      const s = sS.value;
      cur = base.map(p => [(1 - s) * p[0] + s * cPt[0], (1 - s) * p[1] + s * cPt[1]]);
      computeRegions(); computeWinding(); draw();
    }
    // argument continu de γ(t_k) − z0 le long du polygone fermé
    function computeWinding() {
      const n = cur.length; th = []; onCurve = false; ind = 0;
      if (n < 3) return;
      let px = cur[0][0] - z0[0], py = cur[0][1] - z0[1];
      th.push(Math.atan2(py, px));
      let dmin = Infinity;
      for (let k = 1; k <= n; k++) {
        const q = cur[k % n], qx = q[0] - z0[0], qy = q[1] - z0[1];
        // angle de (q−z0)/(p−z0), dans ]−π, π]
        const d = Math.atan2(px * qy - py * qx, px * qx + py * qy);
        th.push(th[k - 1] + d);
        // distance de z0 au segment [p,q]
        const ex = qx - px, ey = qy - py, L2 = ex * ex + ey * ey;
        let u = L2 > 0 ? -(px * ex + py * ey) / L2 : 0; u = Math.max(0, Math.min(1, u));
        dmin = Math.min(dmin, Math.hypot(px + u * ex, py + u * ey));
        px = qx; py = qy;
      }
      onCurve = dmin < 0.025;
      ind = Math.round((th[n] - th[0]) / TAU);
    }
    // indice de chaque point du plan : règle des croisements signés, ligne par ligne
    function computeRegions() {
      P = kit.plane(st.ctx, { xmin: -2.2, xmax: 2.2, ymin: -2.2, ymax: 2.2, W: st.W, H: st.H });
      const T = kit.theme(), bg = rgbOf(T.bg), A = rgbOf(T.accent), B = rgbOf(T.accent2);
      const w = Math.ceil(st.W / offStep), h = Math.ceil(st.H / offStep);
      off = document.createElement('canvas'); off.width = w; off.height = h;
      const octx = off.getContext('2d'); const img = octx.createImageData(w, h); const d = img.data;
      const n = cur.length; present = new Set();
      const xw = new Float64Array(w); for (let i = 0; i < w; i++) xw[i] = P.toWorld(i * offStep + offStep / 2, 0)[0];
      for (let j = 0; j < h; j++) {
        const y = P.toWorld(0, j * offStep + offStep / 2)[1];
        const xs = [];
        if (n >= 3) for (let k = 0; k < n; k++) {
          const a = cur[k], b = cur[(k + 1) % n];
          if (a[1] <= y && b[1] > y) xs.push([a[0] + (y - a[1]) * (b[0] - a[0]) / (b[1] - a[1]), 1]);
          else if (b[1] <= y && a[1] > y) xs.push([a[0] + (y - a[1]) * (b[0] - a[0]) / (b[1] - a[1]), -1]);
        }
        xs.sort((u, v) => u[0] - v[0]);
        let wind = 0, m = xs.length - 1;
        for (let i = w - 1; i >= 0; i--) {
          const x = xw[i];
          while (m >= 0 && xs[m][0] > x) { wind += xs[m][1]; m--; }
          present.add(wind);
          const c = regionColor(wind, bg, A, B); const o = 4 * (j * w + i);
          d[o] = c[0]; d[o + 1] = c[1]; d[o + 2] = c[2]; d[o + 3] = 255;
        }
      }
      octx.putImageData(img, 0, 0);
    }
    // point et argument continu à la position t
    function at(t) {
      const n = cur.length; if (n < 3) return null;
      const x = Math.max(0, Math.min(1, t)) * n; let k = Math.floor(x); if (k >= n) k = n - 1; const fr = x - k;
      const a = cur[k], b = cur[(k + 1) % n];
      const p = [a[0] + fr * (b[0] - a[0]), a[1] + fr * (b[1] - a[1])];
      const ax = a[0] - z0[0], ay = a[1] - z0[1], qx = p[0] - z0[0], qy = p[1] - z0[1];
      const theta = th[k] + Math.atan2(ax * qy - ay * qx, ax * qx + ay * qy);
      return { p, theta };
    }

    // ---------- dessin ----------
    function draw() {
      const T = kit.theme(), ctx = st.ctx;
      st.clear(); ctx.fillStyle = T.bg; ctx.fillRect(0, 0, st.W, st.H);
      if (!P) return;
      if (off) { ctx.save(); ctx.imageSmoothingEnabled = false; ctx.drawImage(off, 0, 0, off.width, off.height, 0, 0, off.width * offStep, off.height * offStep); ctx.restore(); }
      P.grid(0.5); P.axes({ step: 1 });
      const n = cur.length;
      // lacet de départ en pointillé si on a déformé
      if (sS.value > 0 && base.length >= 3) P.curve(base, { color: T.muted, width: 1.2, dash: [4, 4], close: true });
      if (n >= 3) {
        P.curve(cur, { color: T.accent, width: 2.6, close: true });
        // flèches d'orientation
        for (const f of [0.1, 0.35, 0.6, 0.85]) {
          const k = Math.floor(f * n), a = P.toPx(...cur[k]), b = P.toPx(...cur[(k + 3) % n]);
          const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy); if (L < 1e-6) continue;
          kit.arrow(ctx, a[0] - 7 * dx / L, a[1] - 7 * dy / L, a[0] + 7 * dx / L, a[1] + 7 * dy / L, { color: T.accent, width: 2.6, head: 11 });
        }
        const [sx, sy] = P.toPx(...cur[0]);
        ctx.save(); ctx.fillStyle = T.bg; ctx.strokeStyle = T.accent; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(sx, sy, 4.5, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
      } else if (!drawing) {
        ctx.save(); ctx.fillStyle = T.fg; ctx.font = '14px system-ui, sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('Dessinez un lacet à la souris ou au doigt', st.W / 2, 24); ctx.restore();
      }
      if (drawing && drawing.length > 1) P.curve(drawing, { color: T.accent, width: 2.2, dash: [6, 3] });
      // point c (losange)
      { const [cx, cy] = P.toPx(...cPt); ctx.save(); ctx.fillStyle = T.muted; ctx.beginPath(); ctx.moveTo(cx, cy - 6); ctx.lineTo(cx + 6, cy); ctx.lineTo(cx, cy + 6); ctx.lineTo(cx - 6, cy); ctx.closePath(); ctx.fill();
        ctx.fillStyle = T.fg; ctx.font = '12px system-ui, sans-serif'; ctx.fillText('c', cx + 8, cy - 6); ctx.restore(); }
      // flèche z0 → γ(t) et spirale des tours
      const [zx, zy] = P.toPx(...z0);
      const A = n >= 3 ? at(tCur) : null;
      if (A && !onCurve) {
        const [gx, gy] = P.toPx(...A.p);
        kit.arrow(ctx, zx, zy, gx, gy, { color: T.accent2, width: 2, head: 9 });
        ctx.save(); ctx.fillStyle = T.accent2; ctx.beginPath(); ctx.arc(gx, gy, 4, 0, TAU); ctx.fill();
        ctx.font = '12px system-ui, sans-serif'; ctx.fillStyle = T.fg; ctx.fillText('γ(t)', gx + 7, gy - 7); ctx.restore();
        const t0 = th[0], t1 = A.theta, steps = Math.max(2, Math.ceil(Math.abs(t1 - t0) / 0.08));
        ctx.save(); ctx.strokeStyle = T.accent2; ctx.lineWidth = 1.6; ctx.beginPath();
        for (let i = 0; i <= steps; i++) { const ph = t0 + (t1 - t0) * i / steps, r = 11 + 4 * Math.abs(ph - t0) / TAU; const X = zx + r * Math.cos(ph), Y = zy - r * Math.sin(ph); i ? ctx.lineTo(X, Y) : ctx.moveTo(X, Y); }
        ctx.stroke(); ctx.restore();
      }
      ctx.save(); ctx.fillStyle = T.accent4; ctx.strokeStyle = T.fg; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(zx, zy, 6, 0, TAU); ctx.fill(); ctx.stroke();
      ctx.fillStyle = T.fg; ctx.font = 'bold 13px system-ui, sans-serif'; ctx.fillText('z₀', zx + 15, zy + 24); ctx.restore();
      // légende des indices présents
      const ks = [...present].sort((a, b) => b - a);
      if (n >= 3 && ks.length) {
        const T2 = kit.theme(), bg = rgbOf(T2.bg), Ac = rgbOf(T2.accent), Bc = rgbOf(T2.accent2);
        const lh = 17, bw = 92, bh = 8 + lh * ks.length + 14;
        ctx.save(); ctx.globalAlpha = 0.9; ctx.fillStyle = T.bg; ctx.fillRect(6, 6, bw, bh); ctx.globalAlpha = 1; ctx.strokeStyle = T.grid; ctx.strokeRect(6, 6, bw, bh);
        ctx.font = '11px system-ui, sans-serif'; ctx.fillStyle = T.muted; ctx.textBaseline = 'top'; ctx.fillText('indice Ind_z(γ)', 11, 9);
        ks.forEach((k, i) => { const c = regionColor(k, bg, Ac, Bc); const y = 25 + i * lh;
          ctx.fillStyle = `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`; ctx.fillRect(12, y, 22, 12); ctx.strokeStyle = T.axis; ctx.strokeRect(12, y, 22, 12);
          ctx.fillStyle = T.fg; ctx.fillText((k > 0 ? '+' : k < 0 ? '−' : '') + Math.abs(k), 42, y); });
        ctx.restore();
      }
      drawStrip(A);
      // lectures
      if (n < 3) { roI.set('—'); roP.set('—'); }
      else if (onCurve) { roI.set('z₀ ∈ Γ : non défini'); roP.set('—'); }
      else {
        roI.set(String(ind));
        const re = A ? (A.theta - th[0]) / TAU : 0;
        const p0 = cur[0], lr = A ? Math.log(Math.hypot(A.p[0] - z0[0], A.p[1] - z0[1]) / Math.hypot(p0[0] - z0[0], p0[1] - z0[1])) : 0;
        const im = -lr / TAU;
        roP.set(`${fmt(re)} ${im < 0 ? '−' : '+'} ${fmt(Math.abs(im))} i`);
      }
    }
    function drawStrip(A) {
      const T = kit.theme(), ctx = st2.ctx, W = st2.W, H = st2.H;
      st2.clear(); ctx.fillStyle = T.bg; ctx.fillRect(0, 0, W, H);
      const L = 40, R = 10, Tp = 10, B = 22;
      const n = cur.length;
      let lo = 0, hi = 1;
      if (n >= 3 && !onCurve) { for (const v of th) { const u = (v - th[0]) / TAU; lo = Math.min(lo, u); hi = Math.max(hi, u); } }
      lo = Math.floor(lo) - 0.3; hi = Math.ceil(hi) + 0.3;
      const X = t => L + t * (W - L - R), Y = u => Tp + (hi - u) / (hi - lo) * (H - Tp - B);
      ctx.save(); ctx.font = '11px system-ui, sans-serif'; ctx.textBaseline = 'middle';
      const stepI = hi - lo > 8 ? 2 : 1;
      for (let k = Math.ceil(lo); k <= hi; k += stepI) { ctx.strokeStyle = k === 0 ? T.axis : T.grid; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(L, Y(k)); ctx.lineTo(W - R, Y(k)); ctx.stroke(); ctx.fillStyle = T.muted; ctx.textAlign = 'right'; ctx.fillText(String(k), L - 6, Y(k)); }
      ctx.strokeStyle = T.axis; ctx.beginPath(); ctx.moveTo(L, Tp); ctx.lineTo(L, H - B); ctx.lineTo(W - R, H - B); ctx.stroke();
      ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillStyle = T.muted;
      for (const t of [0, 0.25, 0.5, 0.75, 1]) ctx.fillText(String(t), X(t), H - B + 4);
      ctx.textAlign = 'center'; ctx.fillStyle = T.fg; ctx.fillText('t', X(0.875), H - B + 4);
      ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText('nombre de tours (θ(t) − θ(0)) / 2π', L + 6, 2);
      if (n >= 3 && !onCurve) {
        ctx.strokeStyle = T.muted; ctx.lineWidth = 1.2; ctx.beginPath();
        for (let k = 0; k <= n; k++) { const x = X(k / n), y = Y((th[k] - th[0]) / TAU); k ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
        ctx.stroke();
        if (A) {
          ctx.strokeStyle = T.accent2; ctx.lineWidth = 2.4; ctx.beginPath();
          const kmax = Math.floor(tCur * n);
          for (let k = 0; k <= kmax; k++) { const x = X(k / n), y = Y((th[k] - th[0]) / TAU); k ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
          ctx.lineTo(X(tCur), Y((A.theta - th[0]) / TAU)); ctx.stroke();
          ctx.fillStyle = T.accent2; ctx.beginPath(); ctx.arc(X(tCur), Y((A.theta - th[0]) / TAU), 4, 0, TAU); ctx.fill();
        }
      } else {
        ctx.fillStyle = T.muted; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(onCurve ? 'z₀ est sur Γ : l\'argument de γ(t) − z₀ n\'est pas défini partout' : '—', (L + W) / 2, (Tp + H - B) / 2);
      }
      ctx.restore();
    }

    // ---------- animation ----------
    function stopAnim() { if (anim) { anim.stop(); anim = null; } btn.textContent = '▶ parcourir γ'; }
    function toggleAnim() {
      if (anim) { stopAnim(); return; }
      if (tCur >= 0.999) tCur = 0;
      btn.textContent = '⏸ pause';
      anim = kit.animate(dt => { tCur = Math.min(1, tCur + dt / 4); sT.value = tCur; draw(); if (tCur >= 1) stopAnim(); });
    }

    // ---------- souris / doigt ----------
    let mode = null;
    const clampW = w => [Math.max(P.xmin, Math.min(P.xmax, w[0])), Math.max(P.ymin, Math.min(P.ymax, w[1]))];
    const offDrag = kit.drag(st.canvas, {
      onDown: p => {
        if (!P) return; const w = P.toWorld(p.x, p.y); const [zx, zy] = P.toPx(...z0);
        if (sel.value === 'libre' && Math.hypot(p.x - zx, p.y - zy) > 16) { stopAnim(); drawing = [w]; mode = 'draw'; draw(); }
        else { mode = 'z0'; z0 = clampW(w); computeWinding(); draw(); }
      },
      onMove: (p, ev, down) => {
        if (!down || !P || !mode) return; const w = clampW(P.toWorld(p.x, p.y));
        if (mode === 'z0') { z0 = w; computeWinding(); draw(); }
        else if (mode === 'draw' && drawing) { const l = drawing[drawing.length - 1], a = P.toPx(...l); if (Math.hypot(p.x - a[0], p.y - a[1]) > 3) { drawing.push(w); draw(); } }
      },
      onUp: () => {
        if (mode === 'draw' && drawing) { if (drawing.length >= 8) { freePts = drawing; sS.value = 0; } drawing = null; buildBase(); rebuild(); }
        mode = null;
      },
    });

    st.onResize = () => { computeRegions(); draw(); };
    st2.onResize = () => draw();
    buildBase(); rebuild();
    return () => { stopAnim(); offDrag(); st.destroy(); st2.destroy(); };
  }
});
