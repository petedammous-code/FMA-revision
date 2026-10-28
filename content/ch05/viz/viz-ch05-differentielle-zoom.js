FMA.registerViz({
  id: 'viz-ch05-differentielle-zoom',
  chapter: 5,
  title: "La différentielle au microscope : le reste est un $o(h)$",
  description: String.raw`**Ce que l'on voit.** On choisit une fonction $f:\R^2\to\R$ et un point $a$ (point orange, **à glisser** sur la carte du haut ; la couleur code la valeur de $f$). Le segment orange part de $a$ dans la direction $u=(\cos\theta,\sin\theta)$ réglable. On compare $f$ à son **approximation linéaire** $h\mapsto f(a)+\ell(h)$, où $\ell(h)=\partial_xf(a)\,h_1+\partial_yf(a)\,h_2$ est construite avec les dérivées partielles (calculées numériquement).

* **Graphique du milieu (le zoom).** Sur la droite $a+su$, $s\in[-\rho,\rho]$, on trace $s\mapsto f(a+su)$ (trait plein) et $s\mapsto f(a)+\ell(su)$ (tirets). Le curseur $\log_{10}\rho$ règle le grossissement, et l'échelle verticale est **réadaptée** à chaque zoom. Si $f$ est différentiable en $a$, les deux courbes se confondent quand on zoome : c'est exactement $f(a+h)-f(a)-df_a(h)=o(h)$ (poly, Définition V.3.1, p. 98).
* **Graphique du bas (le rapport).** En échelle log-log, on trace pour chaque $\rho$ le pire rapport
$$R(\rho)=\max_{\|h\|=\rho}\frac{\|f(a+h)-f(a)-\ell(h)\|}{\|h\|}$$
(maximum sur 36 directions). Différentiabilité en $a$ $\iff$ $R(\rho)\to0$ quand $\rho\to0$ (avec $\ell=df_a$) : la courbe plonge, avec pente $1$ si $f$ est assez régulière. Sinon elle reste à plat.

**À faire.** Prenez $\sin x\cos y$ et glissez $a$ : la courbe du bas plonge partout. Passez à $\dfrac{xy}{x^2+y^2}$, au point $a=(0,0)$ : les deux dérivées partielles existent ($\ell=0$) mais $R$ reste égal à $\tfrac12$ ; mettez la direction à $\theta=45^\circ$ pour voir $f(su)=\tfrac12$ constant, très loin du plan $0$ (poly, Remarque V.3.18, p. 102). Pour $\dfrac{x^3}{x^2+y^2}$, $f$ est continue et toutes les dérivées directionnelles existent, mais elles ne dépendent pas linéairement de $u$ : aucun $\ell$ ne convient. Pour $|x|+y^2/2$ et $\sqrt{x^2+y^2}$, le « pli » (le cône) empêche tout plan tangent. Dès que l'on quitte le point singulier (en le faisant glisser), $f$ redevient différentiable et la courbe du bas replonge.

*Remarque.* Pour $|x|$ et le cône, la dérivée partielle n'existe pas en $(0,0)$ ; la valeur utilisée (différence centrée) est $0$ ; ceci n'affaiblit pas la conclusion : aucune application linéaire ne convient, on le voit à la forme en « V » à fort zoom.`,
  related: ['ch05-differentielle-def', 'ch05-partielles-sans-differentiabilite', 'ch05-differentielles-partielles', 'ch05-derivee-directionnelle-unicite', 'ch05-petit-o-def'],
  height: 760,
  mount(container, kit) {
    const th = () => kit.theme();
    const FN = {
      smooth: { lab: 'sin x · cos y', f: (x, y) => Math.sin(x) * Math.cos(y), a0: [0.7, 0.4], vmax: 1, snap: null },
      abs: { lab: '|x| + y²/2', f: (x, y) => Math.abs(x) + y * y / 2, a0: [0, 0.6], vmax: 2, snap: [0, 0], snapLine: true },
      xy: { lab: 'xy/(x²+y²)', f: (x, y) => { const r = x * x + y * y; return r === 0 ? 0 : x * y / r; }, a0: [0, 0], vmax: 0.5, snap: [0, 0] },
      x3: { lab: 'x³/(x²+y²)', f: (x, y) => { const r = x * x + y * y; return r === 0 ? 0 : x * x * x / r; }, a0: [0, 0], vmax: 2, snap: [0, 0] },
      x2y: { lab: 'x²y/(x⁴+y²)', f: (x, y) => { const r = x * x * x * x + y * y; return r === 0 ? 0 : x * x * y / r; }, a0: [0, 0], vmax: 0.5, snap: [0, 0] },
      cone: { lab: '√(x²+y²)', f: (x, y) => Math.hypot(x, y), a0: [0, 0], vmax: 2.5, snap: [0, 0] },
    };
    const keys = Object.keys(FN);
    let cur = 'xy';
    let a = FN[cur].a0.slice();

    const controls = kit.controls(container);
    const sel = kit.select(controls, { label: '$f=$', options: keys.map(k => [FN[k].lab, k]), value: cur, onChange: (k) => { cur = k; a = FN[k].a0.slice(); draw(); } });
    const dirS = kit.slider(controls, { label: '$\\theta$ (°)', min: 0, max: 359, step: 1, value: 45, onChange: draw });
    const zoomS = kit.slider(controls, { label: '$\\log_{10}\\rho$', min: -3, max: 0.3, step: 0.05, value: -0.3, format: v => (+v).toFixed(2), onChange: draw });
    kit.button(controls, { label: 'revenir au point singulier', onClick: () => { a = FN[cur].a0.slice(); draw(); } });
    const ro = kit.readout(controls, { label: '' });

    const s1 = kit.canvas(container, { height: 250 });
    const s2 = kit.canvas(container, { height: 200 });
    const s3 = kit.canvas(container, { height: 200 });

    const f = (x, y) => FN[cur].f(x, y);
    function grad() {
      const e = 1e-5;
      return [(f(a[0] + e, a[1]) - f(a[0] - e, a[1])) / (2 * e), (f(a[0], a[1] + e) - f(a[0], a[1] - e)) / (2 * e)];
    }
    function errAt(g, h1, h2) { return Math.abs(f(a[0] + h1, a[1] + h2) - f(a[0], a[1]) - g[0] * h1 - g[1] * h2); }
    function Rmax(g, rho) {
      let m = 0;
      for (let k = 0; k < 36; k++) { const t = 2 * Math.PI * k / 36 + 0.0173; m = Math.max(m, errAt(g, rho * Math.cos(t), rho * Math.sin(t)) / rho); }
      return m;
    }
    function text(ctx, s, x, y, o = {}) { ctx.save(); ctx.fillStyle = o.color || th().muted; ctx.font = o.font || '11px system-ui, sans-serif'; ctx.textAlign = o.align || 'left'; ctx.textBaseline = o.base || 'top'; ctx.fillText(s, x, y); ctx.restore(); }

    function drawMap() {
      const { ctx, W, H } = s1; const t = th();
      const P = kit.plane(ctx, { xmin: -2, xmax: 2, ymin: -1.5, ymax: 1.5, W, H });
      const step = 3, w = Math.ceil(W / step), h = Math.ceil(H / step);
      const img = ctx.createImageData(w, h); const d = img.data; let k = 0; const vm = FN[cur].vmax;
      for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
        const [x, y] = P.toWorld(i * step + step / 2, j * step + step / 2);
        const v = f(x, y); const u = Math.max(0, Math.min(1, (v / vm + 1) / 2));
        const band = 0.93 + 0.07 * ((((v * 6 / vm) % 1) + 1) % 1);
        const c = kit.hsl2rgb(0.62 - 0.62 * u, 0.65, Math.max(0.2, Math.min(0.85, (0.45 + 0.15 * (1 - Math.abs(2 * u - 1))) * band)));
        d[k++] = c[0]; d[k++] = c[1]; d[k++] = c[2]; d[k++] = 255;
      }
      const off = document.createElement('canvas'); off.width = w; off.height = h; off.getContext('2d').putImageData(img, 0, 0);
      ctx.save(); ctx.imageSmoothingEnabled = true; ctx.drawImage(off, 0, 0, w, h, 0, 0, W, H); ctx.restore();
      P.grid(1, 'rgba(255,255,255,0.25)'); P.axes({ labels: true });
      const rho = Math.pow(10, zoomS.value), ang = dirS.value * Math.PI / 180;
      const u = [Math.cos(ang), Math.sin(ang)];
      P.curve([[a[0] - 2 * u[0], a[1] - 2 * u[1]], [a[0] + 2 * u[0], a[1] + 2 * u[1]]], { color: t.fg, width: 1, dash: [4, 4] });
      P.curve([[a[0] - rho * u[0], a[1] - rho * u[1]], [a[0] + rho * u[0], a[1] + rho * u[1]]], { color: t.accent4, width: 3.5 });
      P.circle(a[0], a[1], rho, { color: t.fg, width: 1 });
      P.point(a[0], a[1], { r: 6, color: t.accent4, stroke: '#fff', label: 'a' });
      text(ctx, 'valeur de f : bleu = bas, rouge = haut', 8, 6, { color: '#fff' });
      return P;
    }
    let P1;
    function drawProfile(g) {
      const { ctx, W, H } = s2; const t = th();
      const rho = Math.pow(10, zoomS.value), ang = dirS.value * Math.PI / 180;
      const u = [Math.cos(ang), Math.sin(ang)]; const f0 = f(a[0], a[1]); const d = g[0] * u[0] + g[1] * u[1];
      const N = 241; const ys = [], ts = [];
      let span = 1e-12;
      for (let i = 0; i < N; i++) { const s = -rho + 2 * rho * i / (N - 1); ts.push(s); const v = f(a[0] + s * u[0], a[1] + s * u[1]) - f0; ys.push(v); span = Math.max(span, Math.abs(v), Math.abs(s * d)); }
      span *= 1.2;
      const L = 44, R = 10, T = 22, B = 24; const X = (s) => L + (s + rho) / (2 * rho) * (W - L - R); const Y = (v) => T + (1 - (v + span) / (2 * span)) * (H - T - B);
      ctx.save(); ctx.strokeStyle = t.grid; ctx.lineWidth = 1; ctx.strokeRect(L, T, W - L - R, H - T - B);
      ctx.strokeStyle = t.axis; ctx.setLineDash([2, 3]); ctx.beginPath(); ctx.moveTo(L, Y(0)); ctx.lineTo(W - R, Y(0)); ctx.moveTo(X(0), T); ctx.lineTo(X(0), H - B); ctx.stroke(); ctx.setLineDash([]);
      // tangent
      ctx.strokeStyle = t.accent2; ctx.lineWidth = 2; ctx.setLineDash([7, 4]); ctx.beginPath(); ctx.moveTo(X(-rho), Y(-rho * d)); ctx.lineTo(X(rho), Y(rho * d)); ctx.stroke(); ctx.setLineDash([]);
      // curve
      ctx.strokeStyle = t.accent; ctx.lineWidth = 2.2; ctx.beginPath();
      for (let i = 0; i < N; i++) { const px = X(ts[i]), py = Y(ys[i]); i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); } ctx.stroke();
      ctx.restore();
      text(ctx, 'f(a+su) − f(a)', 8, 4, { color: t.accent }); text(ctx, 'ℓ(su)', 120, 4, { color: t.accent2 });
      text(ctx, '(trait plein : f ; tirets : approximation linéaire)', 160, 4);
      text(ctx, '±' + kit.fmt(+span.toPrecision(2)), L - 4, T, { align: 'right' }); text(ctx, '−' + kit.fmt(+span.toPrecision(2)), L - 4, H - B, { align: 'right', base: 'bottom' });
      text(ctx, '−ρ = −' + kit.fmt(+rho.toPrecision(2)), L, H - B + 4); text(ctx, 's', X(0), H - B + 4, { align: 'center' }); text(ctx, 'ρ', W - R, H - B + 4, { align: 'right' });
    }
    function drawRatio(g) {
      const { ctx, W, H } = s3; const t = th();
      const L = 44, R = 10, T = 22, B = 26; const x0 = -3, x1 = 0.5, y0 = -7, y1 = 1;
      const X = (x) => L + (x - x0) / (x1 - x0) * (W - L - R); const Y = (y) => T + (1 - (y - y0) / (y1 - y0)) * (H - T - B);
      ctx.save(); ctx.strokeStyle = t.grid; ctx.lineWidth = 1; ctx.fillStyle = t.muted; ctx.font = '10px system-ui, sans-serif';
      for (let x = -3; x <= 0; x++) { ctx.beginPath(); ctx.moveTo(X(x), T); ctx.lineTo(X(x), H - B); ctx.stroke(); ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillText('10^' + x, X(x), H - B + 3); }
      for (let y = -6; y <= 0; y += 2) { ctx.beginPath(); ctx.moveTo(L, Y(y)); ctx.lineTo(W - R, Y(y)); ctx.stroke(); ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText('10^' + y, L - 3, Y(y)); }
      ctx.strokeStyle = t.axis; ctx.strokeRect(L, T, W - L - R, H - T - B);
      // reference slope 1
      ctx.strokeStyle = t.muted; ctx.setLineDash([2, 4]); ctx.beginPath(); ctx.moveTo(X(-3), Y(-3.5)); ctx.lineTo(X(0), Y(-0.5)); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = t.muted; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillText('pente 1', X(-2.7), Y(-3.3));
      const ang = dirS.value * Math.PI / 180, u = [Math.cos(ang), Math.sin(ang)];
      const pts = [], pts2 = []; const n = 70;
      for (let i = 0; i <= n; i++) {
        const lr = x0 + (x1 - x0) * i / n; const rho = Math.pow(10, lr);
        const r = Rmax(g, rho); pts.push([X(lr), Y(Math.max(y0, Math.min(y1, Math.log10(r + 1e-30))))]);
        const r2 = errAt(g, rho * u[0], rho * u[1]) / rho; pts2.push([X(lr), Y(Math.max(y0, Math.min(y1, Math.log10(r2 + 1e-30))))]);
      }
      ctx.lineWidth = 2.2; ctx.strokeStyle = t.accent3; ctx.setLineDash([5, 3]); ctx.beginPath(); pts2.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.stroke(); ctx.setLineDash([]);
      ctx.strokeStyle = t.accent; ctx.beginPath(); pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])); ctx.stroke();
      const lr = zoomS.value; ctx.strokeStyle = t.accent4; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(X(lr), T); ctx.lineTo(X(lr), H - B); ctx.stroke();
      ctx.restore();
      text(ctx, 'R(ρ) (max sur les directions)', 8, 4, { color: t.accent }); text(ctx, 'direction θ seule', 190, 4, { color: t.accent3 });
      text(ctx, 'ρ (échelle log)', W - R, H - 12, { align: 'right', base: 'bottom' });
    }
    function draw() {
      try {
        const g = grad();
        P1 = drawMap();
        s2.clear(); s3.clear();
        drawProfile(g); drawRatio(g);
        const r1 = Rmax(g, 1e-3), r2 = Rmax(g, 1e-2);
        const ok = r1 < 0.35 * r2 || r1 < 1e-5;
        ro.set(`a = (${a[0].toFixed(2)}, ${a[1].toFixed(2)}), ∇f ≈ (${g[0].toFixed(2)}, ${g[1].toFixed(2)}) — R(10⁻³) = ${r1 < 1e-9 ? '≈ 0' : r1.toPrecision(2)} : ` + (ok ? '<b style="color:var(--accent-3)">le rapport tend vers 0 : f différentiable en a</b>' : '<b style="color:var(--accent-2)">le rapport ne tend pas vers 0 : pas de df_a</b>'));
      } catch (e) { console.error(e); }
    }
    function setFromPointer(p) {
      let [x, y] = P1.toWorld(p.x, p.y);
      x = Math.max(-1.95, Math.min(1.95, x)); y = Math.max(-1.45, Math.min(1.45, y));
      const sn = FN[cur].snap;
      if (sn) { if (Math.hypot(x - sn[0], y - sn[1]) < 0.12) { x = sn[0]; y = sn[1]; } else if (FN[cur].snapLine && Math.abs(x) < 0.06) x = 0; }
      a = [x, y]; draw();
    }
    const off = kit.drag(s1.canvas, { onDown: setFromPointer, onMove: (p, ev, down) => { if (down) setFromPointer(p); } });
    s1.onResize = draw; s2.onResize = draw; s3.onResize = draw;
    draw();
    return () => { off(); s1.destroy(); s2.destroy(); s3.destroy(); };
  }
});
