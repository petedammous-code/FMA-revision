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
      const tm = Math.max(0.4, 0.4 * Math.ceil(1.3 * b / 0.4 - 1e-9));
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
      P.axes({ labels: true, step: tm / 4, xlabel: 't', ylabel: 'x' });
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
      const top = Htop + 22, bot = H - 18, left = 34, right = W - 8;
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
