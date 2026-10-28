FMA.registerViz({
  id: 'viz-ch08-noether-rotation',
  chapter: 8,
  title: 'Noether : symétrie de rotation et moment cinétique conservé',
  description: String.raw`**Le cadre.** Mouvement plan : $V=\mathbb R^2$, Lagrangien $L(q,v)=\tfrac12\lVert v\rVert^2-U(q)$, dont l'équation d'Euler-Lagrange est l'équation de Newton $\gamma''=-\nabla U(\gamma)$ ([[ch08-equation-newton]]). Le potentiel est $U(q)=U_0(\lVert q\rVert)+\tfrac{\epsilon}{2}x^2$ pour $q=(x,y)$, avec $U_0(r)=-1/r$ (Kepler, défini seulement sur l'ouvert $V\setminus\{0\}$ : c'est le cas des courbes confinées, [[ch08-courbes-confinees-ouverts]]) ou $U_0(r)=r^2/2$ (oscillateur). Le paramètre $\epsilon$ **casse la symétrie** de rotation.

**Le groupe à un paramètre.** $F_s$ = rotation d'angle $s$ autour de $0$ ; c'est le flot du champ de vecteurs $X(q)=e\wedge q=(-y,x)$ (rotation d'axe $e$ perpendiculaire au plan), car $\frac{\partial F}{\partial s}(s,q)\big|_{s=0}=X(q)$. Comme $F_s$ est linéaire, $d(F_s)_q(v)=F_s(v)$, et $\lVert F_s(v)\rVert=\lVert v\rVert$. Donc $L$ est invariant ([[ch08-groupe-un-parametre-invariance]]) si et seulement si $U\circ F_s=U$, c'est-à-dire si et seulement si $\epsilon=0$.

**La quantité de Noether** ([[ch08-noether]]) : $Q(t)=\frac{\partial L}{\partial v}(\gamma,\gamma')\cdot X(\gamma)=\langle\gamma',e\wedge\gamma\rangle=x\,y'-y\,x'$, la composante selon $e$ du moment cinétique $\gamma\wedge\gamma'$ ([[ch08-moment-cinetique]]). La preuve de la question 12 donne, le long de toute solution de (E.L),
$$Q'(t)=\frac{\partial L}{\partial q}\cdot X(\gamma)+\frac{\partial L}{\partial v}\cdot dX_{\gamma}(\gamma')=y\,\partial_xU-x\,\partial_yU=\epsilon\,x\,y,$$
et l'identité infinitésimale d'invariance ([[ch08-invariance-infinitesimale]]) dit exactement que ce membre de droite est nul quand $L$ est invariant.

**Quoi regarder.**
1. Avec $\epsilon=0$ : la courbe rose $Q(t)$ est **plate** (moment cinétique conservé), quelle que soit la condition initiale. **Glisse** le point de départ $\gamma(0)$ (gros point) et la pointe du vecteur vitesse $\gamma'(0)$.
2. Avec $\epsilon\neq0$ : $Q$ **oscille**, mais l'énergie $H=\frac{\partial L}{\partial v}\cdot\gamma'-L=\tfrac12\lVert\gamma'\rVert^2+U(\gamma)$ (orange) reste constante : $L$ ne dépend pas du temps, c'est [[ch08-energie-conservee]], une autre symétrie (translation en temps) qui n'a pas été cassée.
3. Curseur $s$ : en vert pointillé, la trajectoire tournée $F_s\circ\gamma$ ; en violet, la vraie solution issue des données tournées $\big(F_s(\gamma(0)),d(F_s)(\gamma'(0))\big)$. Elles coïncident si et seulement si la symétrie est exacte ($\epsilon=0$) : une symétrie du Lagrangien envoie solutions sur solutions (c'est l'invariance de (E.L) par changement de variables, [[ch08-changement-de-variables]], appliquée à $\phi=F_s$).
4. Bouton ▶ : le point mobile porte le vecteur vitesse $\gamma'$ (bleu) et le vecteur $X(\gamma)$ (violet) ; $Q$ est leur produit scalaire.
5. Kepler avec un moment cinétique presque nul : la trajectoire plonge vers $0$ et le calcul s'arrête (collision) — la courbe sort de l'ouvert $V\setminus\{0\}$ où $L$ est défini.`,
  related: ['ch08-noether', 'ch08-invariance-infinitesimale', 'ch08-groupe-un-parametre-invariance', 'ch08-moment-cinetique', 'ch08-energie-conservee', 'ch08-equation-newton', 'ch08-changement-de-variables', 'ch08-courbes-confinees-ouverts'],
  height: 640,
  mount(container, kit) {
    const st = kit.canvas(container, { height: 540 });
    const controls = kit.controls(container);
    const pots = { kepler: 'U₀(r) = −1/r (Kepler)', harm: 'U₀(r) = r²/2 (oscillateur)' };
    const defaults = { kepler: { q: [1, 0], v: [0.25, 0.85], T: 14 }, harm: { q: [1.2, 0], v: [0.3, 0.8], T: 14 } };
    let q0 = defaults.kepler.q.slice(), v0 = defaults.kepler.v.slice();
    const selU = kit.select(controls, { label: 'potentiel', options: Object.keys(pots).map(k => [pots[k], k]), value: 'kepler', onChange: () => { q0 = defaults[selU.value].q.slice(); v0 = defaults[selU.value].v.slice(); recompute(); } });
    const sE = kit.slider(controls, { label: '$\\epsilon$ (brisure)', min: -0.6, max: 0.6, step: 0.01, value: 0, onChange: () => recompute() });
    const sT = kit.slider(controls, { label: 'durée $T$', min: 2, max: 40, step: 0.5, value: 14, onChange: () => recompute() });
    const sS = kit.slider(controls, { label: 'rotation $s$', min: -3.14, max: 3.14, step: 0.01, value: 0.9, onChange: () => recompute() });
    const sTau = kit.slider(controls, { label: 'instant $t$', min: 0, max: 1, step: 0.002, value: 0.3, format: v => (v * sT.value).toFixed(2), onChange: () => { stopAnim(); draw(); } });
    const bPlay = kit.button(controls, { label: '▶ animer', primary: true, onClick: () => toggleAnim() });
    const cbX = kit.checkbox(controls, { label: 'champ $X$', checked: true, onChange: () => draw() });
    kit.button(controls, { label: 'réinitialiser', onClick: () => { q0 = defaults[selU.value].q.slice(); v0 = defaults[selU.value].v.slice(); sE.value = 0; recompute(); } });
    const roQ = kit.readout(controls, { label: '$Q$' });
    const roH = kit.readout(controls, { label: '$H$' });
    const note = document.createElement('div'); note.className = 'viz-note'; container.appendChild(note);

    function grad(x, y) { const e = sE.value; if (selU.value === 'kepler') { const r = Math.hypot(x, y), r3 = r * r * r; return [x / r3 + e * x, y / r3]; } return [x + e * x, y]; }
    function Upot(x, y) { const e = sE.value, r = Math.hypot(x, y); return (selU.value === 'kepler' ? -1 / r : 0.5 * r * r) + 0.5 * e * x * x; }
    const Fn = (t, s) => { const g = grad(s[0], s[1]); return [s[2], s[3], -g[0], -g[1]]; };
    function integ(q, v, T) {
      let s = [q[0], q[1], v[0], v[1]], t = 0; const out = [{ t, s }]; let status = 'ok', guard = 0;
      const kep = selU.value === 'kepler';
      while (t < T && guard++ < 80000) {
        const r = Math.hypot(s[0], s[1]); if (kep && r < 0.03) { status = 'collision'; break; }
        if (r > 60) { status = 'fuite'; break; }
        const h = Math.min(T - t, kep ? Math.min(0.01, 0.012 * Math.pow(r, 1.5)) : 0.01);
        s = kit.rk4(Fn, s, t, h); t += h; if (!s.every(isFinite)) { status = 'collision'; break; }
        out.push({ t, s });
      }
      return { pts: out, status, Tend: t };
    }
    const rot = (p, a) => [Math.cos(a) * p[0] - Math.sin(a) * p[1], Math.sin(a) * p[0] + Math.cos(a) * p[1]];
    const Qof = s => s[0] * s[3] - s[1] * s[2];
    const Hof = s => 0.5 * (s[2] * s[2] + s[3] * s[3]) + Upot(s[0], s[1]);

    let sol = null, solS = null, P = null, G = null;
    function recompute() { try { sol = integ(q0, v0, sT.value); solS = integ(rot(q0, sS.value), rot(v0, sS.value), sT.value); } catch (e) { console.warn(e); } draw(); }

    let anim = null;
    function stopAnim() { if (anim) { anim.stop(); anim = null; } bPlay.textContent = '▶ animer'; }
    function toggleAnim() { if (anim) { stopAnim(); return; } bPlay.textContent = '⏸ pause'; anim = kit.animate(dt => { let v = sTau.value + dt / Math.max(4, sT.value) * 1.2; if (v > 1) v = 0; sTau.value = v; draw(); }); }

    function label(x, y, s, color, align = 'left') { const { ctx } = st; ctx.save(); ctx.font = '12px system-ui, sans-serif'; ctx.fillStyle = color; ctx.textAlign = align; ctx.textBaseline = 'top'; ctx.fillText(s, x, y); ctx.restore(); }
    function sampleAt(pts, t) { let lo = 0, hi = pts.length - 1; if (t >= pts[hi].t) return pts[hi]; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (pts[m].t <= t) lo = m; else hi = m; } return pts[lo]; }

    function draw() { try { render(); } catch (e) { console.warn(e); } }
    function render() {
      if (!sol) return;
      const T = kit.theme(); const { ctx, W, H } = st; st.clear(); ctx.fillStyle = T.bg; ctx.fillRect(0, 0, W, H);
      const pad = 6, hTop = Math.round(H * 0.64);
      G = { top: [pad, pad, W - 2 * pad, hTop - pad], bot: [pad, hTop + 8, W - 2 * pad, H - hTop - 8 - pad] };
      const frame = r => { ctx.save(); ctx.strokeStyle = T.grid; ctx.lineWidth = 1; ctx.strokeRect(r[0] + 0.5, r[1] + 0.5, r[2] - 1, r[3] - 1); ctx.restore(); };
      const s = sS.value, eps = sE.value, tau = sTau.value * sT.value;
      const cur = sampleAt(sol.pts, tau).s;
      // ---- plan des positions ----
      { const [x0, y0, w0, h0] = G.top; ctx.save(); ctx.translate(x0, y0); ctx.beginPath(); ctx.rect(0, 0, w0, h0); ctx.clip();
        P = kit.plane(ctx, { xmin: -2.3, xmax: 2.3, ymin: -2.3, ymax: 2.3, W: w0, H: h0 });
        P.grid(1, T.grid); P.axes({ labels: true, step: 1, xlabel: 'x', ylabel: 'y' });
        if (cbX.value) { const stp = 0.5; for (let x = Math.ceil(P.xmin / stp) * stp; x <= P.xmax; x += stp) for (let y = Math.ceil(P.ymin / stp) * stp; y <= P.ymax; y += stp) { const r = Math.hypot(x, y); if (r < 1e-9) continue; const len = Math.min(0.2, 0.08 + 0.06 * r); const [a, b] = P.toPx(x, y), [c, d] = P.toPx(x - y / r * len, y + x / r * len); ctx.save(); ctx.globalAlpha = 0.35; kit.arrow(ctx, a, b, c, d, { color: T.axis, width: 1, head: 4 }); ctx.restore(); } }
        if (selU.value === 'kepler') P.point(0, 0, { r: 4, color: T.fg });
        // trajectoire tournée F_s∘γ et vraie solution issue des données tournées
        P.curve(solS.pts.map(p => [p.s[0], p.s[1]]), { color: T.accent5, width: 2.5 });
        P.curve(sol.pts.map(p => rot([p.s[0], p.s[1]], s)), { color: T.accent3, width: 2, dash: [6, 4] });
        P.curve(sol.pts.map(p => [p.s[0], p.s[1]]), { color: T.accent2, width: 2.2 });
        // conditions initiales (déplaçables)
        P.vector(q0[0], q0[1], v0[0], v0[1], { color: T.accent, width: 2.2, head: 9 });
        P.point(q0[0], q0[1], { r: 7, color: T.bg, stroke: T.accent2 }); P.point(q0[0], q0[1], { r: 3.5, color: T.accent2 });
        P.point(q0[0] + v0[0], q0[1] + v0[1], { r: 6, color: T.bg, stroke: T.accent });
        // point mobile
        P.point(cur[0], cur[1], { r: 5, color: T.fg });
        P.vector(cur[0], cur[1], cur[2], cur[3], { color: T.accent, width: 2, head: 7, scale: 0.6 });
        P.vector(cur[0], cur[1], -cur[1], cur[0], { color: T.accent5, width: 2, head: 7, scale: 0.6 });
        ctx.restore(); frame(G.top);
        label(x0 + 6, y0 + 4, 'γ (glisser ● et ○)', T.accent2); label(x0 + 6, y0 + 19, 'F_s ∘ γ', T.accent3); label(x0 + 6, y0 + 34, 'solution issue de F_s(γ(0)), dF_s(γ′(0))', T.accent5);
      }
      // ---- graphe temporel de Q et H ----
      { const [x, y, w, h] = G.bot; const pts = sol.pts; const Qs = pts.map(p => Qof(p.s)), Hs = pts.map(p => Hof(p.s));
        let lo = Math.min(...Qs, ...Hs, 0), hi = Math.max(...Qs, ...Hs, 0); if (hi - lo < 0.5) { const c = (hi + lo) / 2; lo = c - 0.25; hi = c + 0.25; } const m = 0.12 * (hi - lo);
        ctx.save(); ctx.translate(x, y); ctx.beginPath(); ctx.rect(0, 0, w, h); ctx.clip();
        const Tm = sT.value; const Qp = kit.plane(ctx, { xmin: -0.04 * Tm, xmax: 1.03 * Tm, ymin: lo - m, ymax: hi + 2.6 * m, W: w, H: h, keepAspect: false });
        const stepT = Tm > 20 ? 10 : Tm > 8 ? 2 : 1; const span = hi - lo + 3.6 * m; const stepY = span > 4 ? 1 : span > 2 ? 0.5 : span > 0.8 ? 0.25 : 0.1;
        Qp.grid(stepY, T.grid); Qp.axes({ labels: true, step: stepY, xlabel: 't' });
        ctx.save(); ctx.fillStyle = T.muted; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'; for (let t = stepT; t <= Tm + 1e-9; t += stepT) { const [px] = Qp.toPx(t, 0); ctx.fillText(String(t), px, h - 2); } ctx.restore();
        Qp.curve(pts.map((p, i) => [p.t, Hs[i]]), { color: T.accent4, width: 2 });
        Qp.curve(pts.map((p, i) => [p.t, Qs[i]]), { color: T.accent2, width: 2.2 });
        const [px] = Qp.toPx(Math.min(tau, sol.Tend), 0); ctx.save(); ctx.strokeStyle = T.fg; ctx.globalAlpha = 0.5; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, h); ctx.stroke(); ctx.restore();
        ctx.restore(); frame(G.bot);
        label(x + 6, y + 4, 'Q(t) = x y′ − y x′', T.accent2); label(x + w - 6, y + 4, 'H(t) = ½|γ′|² + U(γ)', T.accent4, 'right');
        // bilans
        const Q0 = Qs[0], H0 = Hs[0]; let dQ = 0, dH = 0; for (let i = 0; i < Qs.length; i++) { dQ = Math.max(dQ, Math.abs(Qs[i] - Q0)); dH = Math.max(dH, Math.abs(Hs[i] - H0)); }
        let intD = 0; for (let i = 1; i < pts.length; i++) { const a = pts[i - 1].s, b = pts[i].s; intD += (pts[i].t - pts[i - 1].t) * 0.5 * eps * (a[0] * a[1] + b[0] * b[1]); }
        const Qc = Qof(cur), Hc = Hof(cur);
        roQ.set(`Q(t) = ⟨γ′, X(γ)⟩ = ${Qc.toFixed(4)} ; max|Q − Q(0)| = ${dQ.toExponential(1)} ; Q(T) − Q(0) = ${(Qs[Qs.length - 1] - Q0).toFixed(4)}, ∫ε x y dt = ${intD.toFixed(4)}`);
        roH.set(`H(t) = ${Hc.toFixed(4)} ; max|H − H(0)| = ${dH.toExponential(1)}`);
        let msg = Math.abs(eps) < 1e-9 ? 'ε = 0 : L est invariant par les rotations F_s, donc Q est constant (Noether) ; la courbe tournée F_s∘γ est encore une solution (vert et violet confondus).' : 'ε ≠ 0 : la symétrie est cassée, Q′ = ε x y ≠ 0 et Q varie ; H reste constant (L autonome) ; F_s∘γ n’est plus une solution (vert ≠ violet).';
        if (sol.status === 'collision') msg += ` Collision avec l’origine en t ≈ ${sol.Tend.toFixed(2)} : la courbe sort de l’ouvert V∖{0} où U est défini.`;
        if (sol.status === 'fuite') msg += ` La trajectoire s’échappe à l’infini (énergie positive), calcul arrêté en t ≈ ${sol.Tend.toFixed(2)}.`;
        note.textContent = msg;
      }
    }

    // ---- glisser γ(0) et la pointe de γ'(0) ----
    let dragging = null;
    const off = kit.drag(st.canvas, {
      onDown: p => { if (!P || !G) return; const lx = p.x - G.top[0], ly = p.y - G.top[1]; dragging = null;
        const [ax, ay] = P.toPx(q0[0] + v0[0], q0[1] + v0[1]), [bx, by] = P.toPx(q0[0], q0[1]);
        if (Math.hypot(ax - lx, ay - ly) < 20) dragging = 'v'; else if (Math.hypot(bx - lx, by - ly) < 20) dragging = 'q'; if (dragging) stopAnim(); },
      onMove: (p, ev, down) => { if (!down || !dragging || !P) return; const [x, y] = P.toWorld(p.x - G.top[0], p.y - G.top[1]); const cl = v => Math.max(-2.2, Math.min(2.2, v));
        if (dragging === 'q') { const nx = cl(x), ny = cl(y); if (selU.value === 'kepler' && Math.hypot(nx, ny) < 0.15) return; q0 = [nx, ny]; } else { v0 = [Math.max(-2, Math.min(2, x - q0[0])), Math.max(-2, Math.min(2, y - q0[1]))]; }
        recompute(); },
      onUp: () => { dragging = null; },
    });
    st.onResize = draw; recompute();
    return () => { stopAnim(); off(); st.destroy(); };
  }
});
