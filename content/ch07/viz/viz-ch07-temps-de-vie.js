FMA.registerViz({
  id: 'viz-ch07-temps-de-vie',
  chapter: 7,
  title: 'Courbes intégrales maximales : explosion, lemme des bouts, non-unicité',
  description: String.raw`Équations autonomes en dimension 1, $\alpha'(t)=X(\alpha(t))$, dessinées dans le plan $(t,x)$ : les petits segments gris donnent la pente $X(x)$ imposée en chaque point. **Clique ou glisse** pour choisir la condition initiale $(\tau_0,x_0)$ (point noir) ; la courbe rose est la **courbe intégrale maximale** $\alpha_{\tau_0,x_0}$, définie sur l'intervalle ouvert $J_{\tau_0}(x_0)=\,]a\,;b[$ (Définition VII.3.3, p. 134), dont les bornes finies sont marquées par des verticales pointillées.

**Quoi regarder.**
* $\alpha'=\alpha^2$ et $\alpha'=1+\alpha^2$ : champs $C^\infty$, donc Cauchy-Lipschitz s'applique, et pourtant $b<+\infty$ : la solution **explose en temps fini** ($x_0/(1-(t-\tau_0)x_0)$, resp. $\tan$). Cauchy-Lipschitz est un résultat **local**.
* La bande bleue est un compact $K$ (curseur $R$). **Lemme des bouts** (Théorème VII.3.10, p. 136) : si $\alpha([\tau_0\,;b[)\subset K$ compact de $U$, alors $b=+\infty$. (Le poly l'énonce pour $X$ « lipschitzien » ; sa preuve n'utilise que l'existence du flot local autour de chaque point de $K$, donc $X$ localement lipschitzien, par exemple $C^1$ comme $\alpha^2$ ici, suffit.) Contraposée visible : quand $b$ est fini, la courbe **sort de $K$** (cercle orange) avant $b$, **quel que soit** $R$ ; en augmentant $R$, l'instant de sortie se rapproche de $b$ sans l'atteindre.
* $\alpha'=\alpha-\alpha^3$ : pour $\vert x_0\vert\le1$, la courbe reste coincée entre les équilibres $0$ et $\pm1$, donc dans un compact : $b=+\infty$ (et même $a=-\infty$). Pour $\vert x_0\vert>1$, elle reste bornée vers le futur ($b=+\infty$) mais explose **dans le passé** : c'est « l'énoncé analogue avec la borne inférieure ».
* $\alpha'=-1$ sur $U=\,]0\,;+\infty[$ : la courbe reste **bornée** et pourtant $b=\tau_0+x_0<+\infty$ : elle ne reste dans aucun compact **de $U$**, car elle s'approche du bord $x=0$ (zone hachurée, hors de $U$). L'hypothèse « compact de $U$ » ne peut pas être remplacée par « borné ».
* $\alpha'=2\vert\alpha\vert^{1/2}$ (poly, Remarque VII.2.5, p. 129) : $X$ est continu mais **pas lipschitzien en $0$**. Par chaque point passe tout un faisceau de solutions (courbes pâles) : on peut rester en $0$ aussi longtemps qu'on veut puis « décoller » en parabole. Loin de $0$, $X$ est lipschitzien et l'unicité locale tient : pour $x_0>0$ toutes ces solutions coïncident pour $t\ge\tau_0$ et ne se séparent que dans le passé, là où la courbe touche $0$ (pour $x_0<0$, c'est dans le futur). Le curseur « palier » choisit l'une d'elles. Place $x_0=0$ (le point s'aimante sur l'axe) et $\tau_0=0$ pour retrouver $\alpha_1=0$ et, avec un palier nul, $\alpha_2(t)=\mathrm{signe}(t)\,t^2$ du poly. Ici la notion de courbe intégrale *maximale unique* n'a plus de sens : l'unicité de [[ch07-unicite-globale]] repose sur Cauchy-Lipschitz.

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
        const span = x0 > 0 ? tau - Math.sqrt(x0) - P.xmin : x0 < 0 ? P.xmax - tau - Math.sqrt(-x0) : 2 * Math.max(tau - P.xmin, P.xmax - tau); const smax = Math.max(0.6, span + 0.3); const sigmas = []; for (let i = 0; i <= 10; i++) sigmas.push(smax * i / 10);
        ctx.save(); ctx.globalAlpha = 0.45;
        for (const s of sigmas) { const [c1, c2] = peanoFamily(s); P.curve(sampleCurve(peanoSol(c1, c2), -INF, INF, P.xmin, P.xmax), { color: T.accent5, width: 1.2 }); }
        if (x0 === 0) P.curve([[P.xmin, 0], [P.xmax, 0]], { color: T.accent5, width: 1.2 });
        ctx.restore();
        const [c1, c2] = peanoFamily(sP.value);
        P.curve(sampleCurve(peanoSol(c1, c2), -INF, INF, P.xmin, P.xmax), { color: T.accent2, width: 3 });
        P.point(c1, 0, { r: 3, color: T.accent4 }); P.point(c2, 0, { r: 3, color: T.accent4 });
        roJ.set(`= ℝ · solution choisie : nulle sur [${fmt(c1)} ; ${fmt(c2)}] (points orange), parabole ailleurs`);
        roK.set(x0 === 0 ? 'sans objet ici · x₀ = 0 : α₁ ≡ 0 et α₂(t) = signe(t)t² en font partie' : 'sans objet ici · non-unicité : X n\'est pas lipschitzien en x = 0');
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
          const fwd = tp === null ? (J[1] === INF ? 'α([τ₀ ; b[) ⊂ K et b = +∞ ✓' : `b = ${fmt(J[1])} : sortie de K après t = τ₀ + 60 (hors de l'horizon calculé)`) : `sortie de K à t = ${fmt(tp)} < b = ${fmt(J[1])}`;
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
