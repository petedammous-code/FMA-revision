FMA.registerViz({
  id: 'viz-ch06-banach-toile',
  chapter: 6,
  title: "Point fixe de Banach : la toile d'araignée des itérées",
  description: String.raw`**Ce que l'on voit.** Le graphe de $T:\mathbb R\to\mathbb R$ (courbe bleue), la diagonale $y=x$ (grise) et l'ensemble $X$ (bande bleutée). On part de $x_0$ (**glissez-le** sur le graphe, ou utilisez le curseur) ; chaque itérée $x_{n+1}=T(x_n)$ se lit en montant verticalement jusqu'au graphe, puis horizontalement jusqu'à la diagonale (« toile d'araignée »). En bas : l'erreur $\log_{10}|x_n-x^*|$ (points roses) et, si le théorème s'applique, la **borne de Banach** (tirets orange).

**Le théorème (poly, Théorème VI.1.1, p. 115).** Si $T:X\to X$ est $a$-lipschitzienne avec $a<1$ sur $X$ complet, alors $T$ a un unique point fixe $x^*$, et pour tout $x_0\in X$
$$|x_n-x^*|\le \frac{a^n}{1-a}\,|x_1-x_0|.$$
Ici $a=\sup_X|T'|$ (inégalité des accroissements finis sur l'intervalle $X$) : c'est la **pente maximale en valeur absolue** du graphe sur $X$.

**Ce qu'il faut regarder.**
* **Fonction affine, curseur $s$ (pente)** : pour $|s|<1$ l'escalier ($s>0$) ou la spirale ($s<0$) se resserre vers $x^*$ et la droite d'erreur est parallèle à la borne, de pente $\log_{10}|s|$ ; pour $|s|>1$ la toile s'évade ; à $|s|=1$ rien ne converge.
* **Les deux hypothèses oubliées** : « $x/2+1$ sur $[0,1]$ » est $\frac12$-lipschitzienne mais $T(X)\not\subset X$ : les itérées sortent de $X$ et convergent vers $2\notin X$. Le théorème exige $T(X)\subset X$.
* **Condition suffisante, pas nécessaire** : pour la logistique $T(x)=\mu x(1-x)$ sur $[0,1]$, $a=\mu$ ; pour $1<\mu<3$ la suite converge quand même vers $1-1/\mu$ (le théorème ne s'applique plus sur $X=[0,1]$), mais pour $\mu>3$ on obtient un cycle, puis du chaos.
* **Newton, c'est un point fixe** : $T(x)=x-f(x)/f'(x)$ a $T'(x^*)=0$ en une racine simple : la contraction y est « infiniment forte » et l'erreur **s'effondre** (convergence quadratique, le nombre de chiffres exacts double). Mais pour $f=x^3-2x+2$ depuis $x_0$ proche de $0$, on tombe dans un cycle $0\leftrightarrow1$ : la convergence n'est que **locale** (poly, Exercice VI.4.2, p. 121).`,
  related: ['ch06-point-fixe-banach', 'ch06-lipschitz-contractante-def', 'ch06-methode-de-newton', 'ch06-point-fixe-iteree-contractante'],
  height: 560,
  mount(container, kit) {
    const st = kit.canvas(container, { height: 330 });
    const stE = kit.canvas(container, { height: 150 });
    const controls = kit.controls(container);
    const NMAX = 40;
    const FUNS = {
      affine: { name: 'affine : T(x) = 0,6 + s(x − 0,6)', T: (x, p) => 0.6 + p * (x - 0.6), dT: (x, p) => p, win: [-0.25, 1.25, -0.25, 1.25], X: [0, 1], x0: 0.05,
        param: { label: 's (pente)', min: -1.5, max: 1.5, step: 0.01, val: 0.7 } },
      cos: { name: 'cos x sur [0,1]', T: x => Math.cos(x), dT: x => -Math.sin(x), win: [-0.25, 1.25, -0.25, 1.25], X: [0, 1], x0: 0.1 },
      hors: { name: 'x/2 + 1 sur [0,1]  (T(X) ⊄ X)', T: x => x / 2 + 1, dT: () => 0.5, win: [-0.25, 2.4, -0.25, 2.4], X: [0, 1], x0: 0.2 },
      newton2: { name: 'Newton pour x² − 2 sur [1,2]', T: x => x / 2 + 1 / x, dT: x => 0.5 - 1 / (x * x), win: [0.4, 2.4, 0.4, 2.4], X: [1, 2], x0: 2 },
      newton3: { name: 'Newton pour x³ − 2x + 2', T: x => x - (x * x * x - 2 * x + 2) / (3 * x * x - 2), dT: x => (x * x * x - 2 * x + 2) * 6 * x / Math.pow(3 * x * x - 2, 2),
        win: [-2.6, 1.8, -2.6, 1.8], X: [-2, 1], x0: 0.1 },
      logi: { name: 'logistique : T(x) = μ x (1 − x)', T: (x, p) => p * x * (1 - x), dT: (x, p) => p * (1 - 2 * x), win: [-0.1, 1.1, -0.1, 1.1], X: [0, 1], x0: 0.2,
        param: { label: 'μ', min: 0.2, max: 4, step: 0.01, val: 2.8 } },
    };
    const sel = kit.select(controls, { label: '$T$', options: Object.keys(FUNS).map(k => [FUNS[k].name, k]), value: 'affine', onChange: onFun });
    const par = kit.slider(controls, { label: 's', min: -1.5, max: 1.5, step: 0.01, value: 0.7, onChange: draw });
    const x0s = kit.slider(controls, { label: String.raw`$x_0$`, min: -2.5, max: 2.5, step: 0.005, value: 0.05, onChange: draw });
    const ns = kit.slider(controls, { label: 'n', min: 0, max: NMAX, step: 1, value: 6, onChange: () => { stopPlay(); draw(); } });
    const row = kit.row(controls);
    const playBtn = kit.button(row, { label: '▶ Lecture', primary: true, onClick: () => { if (anim) stopPlay(); else startPlay(); } });
    kit.button(row, { label: '+1 itération', onClick: () => { stopPlay(); ns.value = Math.min(NMAX, ns.value + 1); draw(); } });
    kit.button(row, { label: 'Remise à 0', onClick: () => { stopPlay(); ns.value = 0; draw(); } });
    const ro = kit.readout(controls, { label: '' });
    const msg = kit.note(container, '');
    let lastKey = null, P = null, anim = null;

    function setLabel(sl, text) { const l = sl.el.querySelector('.viz-ctl-label'); if (l) l.textContent = text; }
    function onFun() {
      stopPlay();
      const F = FUNS[sel.value];
      if (F.param) { par.el.style.display = ''; setLabel(par, F.param.label); const i = par.input; i.min = F.param.min; i.max = F.param.max; i.step = F.param.step; par.value = F.param.val; }
      else par.el.style.display = 'none';
      const i = x0s.input; i.min = F.win[0]; i.max = F.win[1]; x0s.value = F.x0;
      ns.value = 6;
      draw();
    }
    function startPlay() {
      if (ns.value >= NMAX) ns.value = 0;
      playBtn.textContent = '⏸ Pause'; let acc = 0;
      anim = kit.animate(dt => { acc += dt; if (acc > 0.4) { acc = 0; ns.value = Math.min(NMAX, ns.value + 1); draw(); if (ns.value >= NMAX) stopPlay(); } });
    }
    function stopPlay() { if (anim) { anim.stop(); anim = null; } playBtn.textContent = '▶ Lecture'; }

    function draw() { try { drawInner(); } catch (e) { console.error(e); } }
    function drawInner() {
      const t = kit.theme(), ctx = st.ctx, Fd = FUNS[sel.value], p = par.value;
      const T = x => Fd.T(x, p), dT = x => Fd.dT(x, p);
      const w = Fd.win, X = Fd.X, n = ns.value, x0 = x0s.value;
      // orbite
      const orb = [x0]; for (let i = 0; i < NMAX; i++) { const y = T(orb[i]); orb.push(isFinite(y) && Math.abs(y) < 1e6 ? y : NaN); if (!isFinite(orb[i + 1])) break; }
      while (orb.length < NMAX + 1) orb.push(NaN);
      // constante de Lipschitz sur X, stabilité
      let a = 0, stable = true;
      for (let i = 0; i <= 400; i++) { const x = X[0] + (X[1] - X[0]) * i / 400; a = Math.max(a, Math.abs(dT(x))); const y = T(x); if (!(y >= X[0] - 1e-12 && y <= X[1] + 1e-12)) stable = false; }
      const x0in = x0 >= X[0] && x0 <= X[1];
      const banach = a < 1 && stable;
      // point fixe : racine de T(x)-x la plus proche de la fin de l'orbite
      const ref = orb.slice().reverse().find(v => isFinite(v));
      const roots = []; { const N = 1600; let prev = T(w[0]) - w[0], xp = w[0];
        for (let i = 1; i <= N; i++) { const x = w[0] + (w[1] - w[0]) * i / N, g = T(x) - x; if (isFinite(g) && isFinite(prev) && Math.sign(g) !== Math.sign(prev) && Math.abs(g - prev) < 1) { let lo = xp, hi = x; for (let k = 0; k < 60; k++) { const m = (lo + hi) / 2; if ((T(m) - m < 0) === (prev < 0)) lo = m; else hi = m; } roots.push((lo + hi) / 2); } prev = g; xp = x; } }
      let xs = null; if (roots.length) xs = roots.reduce((b, r) => Math.abs(r - ref) < Math.abs(b - ref) ? r : b);

      // ---- toile ----
      st.clear(); ctx.fillStyle = t.bg; ctx.fillRect(0, 0, st.W, st.H);
      P = kit.plane(ctx, { xmin: w[0], xmax: w[1], ymin: w[2], ymax: w[3], W: st.W, H: st.H });
      const gstep = (w[1] - w[0]) > 3 ? 1 : 0.25;
      P.grid(gstep); P.axes({ labels: true, step: gstep });
      P.fill([[X[0], P.ymin], [X[1], P.ymin], [X[1], P.ymax], [X[0], P.ymax]], { color: t.accent, alpha: 0.08 });
      P.curve([[X[0], P.ymin], [X[0], P.ymax]], { color: t.accent, width: 1, dash: [3, 3] });
      P.curve([[X[1], P.ymin], [X[1], P.ymax]], { color: t.accent, width: 1, dash: [3, 3] });
      P.curve([[w[0], w[0]], [w[1], w[1]]], { color: t.muted, width: 1.6 });
      const gr = []; for (let i = 0; i <= 500; i++) { const x = w[0] + (w[1] - w[0]) * i / 500, y = T(x); gr.push(Math.abs(y) < 50 ? [x, y] : [NaN, NaN]); }
      P.curve(gr, { color: t.accent, width: 2.6 });
      // toile
      const web = []; web.push([orb[0], 0]);
      let last = 0; for (let i = 0; i < n && isFinite(orb[i + 1]); i++) { web.push([orb[i], orb[i + 1]]); web.push([orb[i + 1], orb[i + 1]]); last = i + 1; }
      ctx.save(); ctx.globalAlpha = 0.9; P.curve(web, { color: t.accent2, width: 1.6 }); ctx.restore();
      if (xs !== null) P.point(xs, xs, { r: 5, color: t.accent3, stroke: t.fg, label: 'x*' });
      P.point(orb[0], 0, { r: 5, color: t.accent4, stroke: t.fg, label: 'x₀' });
      for (let i = 1; i <= Math.min(last, 12); i++) if (isFinite(orb[i])) P.point(orb[i], orb[i], { r: 2.6, color: t.accent2 });
      if (isFinite(orb[last]) && last > 0) P.point(orb[last], orb[last], { r: 4.5, color: t.accent2, stroke: t.fg, label: 'x' + String(last).split('').map(c => '₀₁₂₃₄₅₆₇₈₉'[+c]).join('') });
      ctx.save(); ctx.fillStyle = t.fg; ctx.font = '12px system-ui, sans-serif'; ctx.fillText('y = T(x)  (bleu),  y = x  (gris),  bande = X', 8, 16); ctx.restore();

      // ---- erreur ----
      const e = stE.ctx; stE.clear(); e.fillStyle = t.bg; e.fillRect(0, 0, stE.W, stE.H);
      const m = { l: 40, r: 10, t: 14, b: 22 }, WW = stE.W - m.l - m.r, HH = stE.H - m.t - m.b;
      const ylo = -16, yhi = 1;
      const X2 = k => m.l + WW * k / NMAX, Y2 = v => m.t + HH * (1 - (Math.max(ylo, Math.min(yhi, v)) - ylo) / (yhi - ylo));
      e.save(); e.strokeStyle = t.grid; e.fillStyle = t.muted; e.font = '10px system-ui, sans-serif'; e.lineWidth = 1; e.textAlign = 'right'; e.textBaseline = 'middle';
      for (let v = -16; v <= 0; v += 4) { e.beginPath(); e.moveTo(m.l, Y2(v)); e.lineTo(m.l + WW, Y2(v)); e.stroke(); e.fillText(String(v), m.l - 4, Y2(v)); }
      e.textAlign = 'center'; e.textBaseline = 'top';
      for (let k = 0; k <= NMAX; k += 10) e.fillText(String(k), X2(k), m.t + HH + 4);
      e.fillStyle = t.fg; e.textAlign = 'left'; e.textBaseline = 'top'; e.fillText('log₁₀|xₙ − x*|  en fonction de n', m.l + 4, 2);
      e.restore();
      const bound = k => { if (!banach || !x0in || !isFinite(orb[1])) return NaN; return Math.log10(Math.pow(a, k) * Math.abs(orb[1] - orb[0]) / (1 - a)); };
      if (xs !== null) {
        if (banach && x0in) { e.save(); e.strokeStyle = t.accent4; e.lineWidth = 2; e.setLineDash([6, 4]); e.beginPath(); let f = true;
          for (let k = 0; k <= NMAX; k++) { const v = bound(k); if (!isFinite(v)) continue; if (f) { e.moveTo(X2(k), Y2(v)); f = false; } else e.lineTo(X2(k), Y2(v)); } e.stroke(); e.restore(); }
        e.save(); e.strokeStyle = t.accent2; e.fillStyle = t.accent2; e.lineWidth = 1.2; e.beginPath(); let f = true;
        for (let k = 0; k <= n; k++) { if (!isFinite(orb[k])) break; const v = Math.log10(Math.abs(orb[k] - xs) + 1e-17); if (f) { e.moveTo(X2(k), Y2(v)); f = false; } else e.lineTo(X2(k), Y2(v)); }
        e.stroke();
        for (let k = 0; k <= n; k++) { if (!isFinite(orb[k])) break; const v = Math.log10(Math.abs(orb[k] - xs) + 1e-17); e.beginPath(); e.arc(X2(k), Y2(v), 3, 0, 2 * Math.PI); e.fill(); }
        e.restore();
      }

      // ---- lectures ----
      const f4 = v => (isFinite(v) ? String(+v.toPrecision(5)) : '∞');
      ro.set(`a = sup_X |T′| = ${a.toFixed(3)} ; x${n === 0 ? '₀' : 'ₙ'} (n=${n}) = ${f4(orb[n])}${xs !== null ? ' ; x* ≈ ' + f4(xs) : ''}`);
      let key, text;
      if (banach) { key = 'banach' + (x0in ? 1 : 0); text = String.raw`**Théorème VI.1.1 applicable** sur $X=[${X[0]},${X[1]}]$ : $T(X)\subset X$ et $T$ est $a$-lipschitzienne avec $a<1$. La suite converge vers l'unique point fixe, avec l'erreur sous la borne $\dfrac{a^n}{1-a}|x_1-x_0|$ (tirets orange).`; }
      else if (!stable) { key = 'unstable'; text = String.raw`**Stabilité violée** : $T(X)\not\subset X$. Le théorème ne s'applique pas à $T:X\to X$ (le point fixe, s'il existe, peut être hors de $X$).`; }
      else { key = 'a>=1'; text = String.raw`**$a\ge1$ sur $X$** : $T$ n'est pas contractante sur $X$, le théorème ne dit rien. La suite peut quand même converger (si $|T'(x^*)|<1$ en un point fixe, la contraction est seulement locale), diverger ou cycler.`; }
      if (key !== lastKey) { lastKey = key; kit.md(msg, text); }
    }
    const setX0 = pt => { if (!P) return; const q = P.toWorld(pt.x, pt.y); const F = FUNS[sel.value]; x0s.value = Math.max(F.win[0], Math.min(F.win[1], q[0])); stopPlay(); draw(); };
    const off = kit.drag(st.canvas, { onDown: setX0, onMove: (pt, ev, down) => { if (down) setX0(pt); } });
    st.onResize = draw; stE.onResize = draw;
    onFun();
    return () => { stopPlay(); off(); st.destroy(); stE.destroy(); };
  }
});
