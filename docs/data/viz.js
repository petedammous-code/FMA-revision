// généré par tools/build.mjs — ne pas éditer

// ---- content/ch01/viz/viz-ch01-cauchy-retraction.js ----
try {
FMA.registerViz({
  id: 'viz-ch01-cauchy-retraction',
  chapter: 1,
  title: 'Formule de Cauchy : rétracter le cercle sur le point',
  description: String.raw`**Ce que l'on voit.** En fond, le *domain coloring* atténué de $f$ (teinte = argument de $f(z)$, clair = $|f(z)|$ grand, sombre = petit). Le cercle épais bleu est $\Gamma=C(0,1)$, parcouru dans le sens trigonométrique (flèches). Le point orange $z$ se **déplace à la souris ou au doigt**. Le cercle rose est $\Gamma_t=C(tz,1-t)$ : pour $t=0$ c'est $\Gamma$, et quand $t\to1$ il se rétracte sur $z$ (curseur $t$ ou bouton « Rétracter »). En bas, la courbe $t\mapsto|I(t)|$ où
$$I(t)=\int_{\Gamma_t}\frac{f(\omega)-f(z)}{\omega-z}\,d\omega ,$$
calculée numériquement (paramétrage $\omega=tz+(1-t)e^{i\theta}$ et méthode des trapèzes). Les lectures donnent $f(z)$ et la valeur numérique de l'intégrale de Cauchy $\frac{1}{2i\pi}\int_\Gamma\frac{f(\omega)}{\omega-z}\,d\omega$.

**Le lien avec la preuve du poly** (poly, Théorème I.6.1, p. 18). La formule $f(z)=\frac{1}{2i\pi}\int_\Gamma\frac{f(\omega)}{\omega-z}\,d\omega$ découle de $\int_\Gamma\frac{d\omega}{\omega-z}=2i\pi$ (étape 1) et de $I(0)=0$ (étape 2). Pour l'étape 2, le poly montre que $I$ est **constante** en $t$ (sa dérivée est l'intégrale en $\theta$ d'une dérivée en $\theta$ d'une fonction $2\pi$-périodique, donc nulle — c'est là que sert l'holomorphie de $f$) et que $I(t)\to0$ quand $t\to1$ (le cercle rétrécit et l'intégrande, un taux d'accroissement, reste borné). Donc $I(0)=I(1)=0$.

**À faire.**
* Avec $e^z$, $z^3-z$ ou $\frac{1}{z-3/2}$ (pôle **hors** du disque fermé, donc $f$ est holomorphe sur un ouvert $\Omega\supset\bar D(0,1)$) : la courbe du bas est plate, collée à $0$, quelle que soit la position de $z$ ; l'intégrale de Cauchy redonne $f(z)$ à $10^{-12}$ près. Placez $z$ au centre ($z$ s'aimante en $0$) : l'intégrale de Cauchy est alors la **moyenne** de $f$ sur le cercle (poly, Corollaire I.6.2, p. 19).
* Sortez $z$ du disque : la rétraction n'a plus de sens et l'intégrale de Cauchy vaut $0$, pas $f(z)$ (la fonction $\omega\mapsto\frac{f(\omega)}{\omega-z}$ est alors holomorphe au voisinage de $\bar D(0,1)$). La formule n'est valable que pour $z\in D(z_0,r)$.
* Avec $\bar z$ ou $|z|^2$ (**non holomorphes**) : $|I(t)|$ n'est plus constante (pour $\bar z$, on trouve $I(t)=-2i\pi(1-t)\bar z$), donc $I(0)\neq0$ et la formule est fausse : pour $\bar z$, l'intégrale de Cauchy vaut $0$ au lieu de $\bar z$.
* Avec $\frac{1}{z-p}$, $p$ **dans** le disque (croix) : l'hypothèse $\bar D(0,1)\subset\Omega$ est violée. La courbe du bas fait un **saut** exactement à l'instant où le cercle rose franchit le pôle $p$ : la rétraction ne peut pas « passer par-dessus » une singularité. Cette idée (déformer un lacet sans traverser de singularité) est celle de l'homotopie du chapitre II.`,
  related: ['ch01-cauchy-formule-disque', 'ch01-formule-moyenne', 'ch01-integrale-sur-cercle', 'ch01-def-integrale-chemin', 'ch01-cercle-sens-direct', 'ch01-holomorphe-analytique'],
  height: 600,
  mount(container, kit) {
    const C = kit.complex;
    const st = kit.canvas(container, { height: 340 });
    const sp = kit.canvas(container, { height: 130 });
    const controls = kit.controls(container);
    const P0 = [0.45, 0.3];
    const FNS = {
      exp: { name: 'exp z', f: C.exp, hol: true },
      cub: { name: 'z³ − z', f: z => C.sub(C.mul(z, C.mul(z, z)), z), hol: true },
      far: { name: '1/(z − 3/2)  (pôle hors du disque)', f: z => C.inv(C.sub(z, [1.5, 0])), hol: true, pole: [1.5, 0] },
      conj: { name: 'z̄  (non holomorphe)', f: z => C.conj(z), hol: false },
      mod2: { name: '|z|²  (non holomorphe)', f: z => [C.abs2(z), 0], hol: false },
      pole: { name: '1/(z − p), p dans le disque', f: z => C.inv(C.sub(z, P0)), hol: false, pole: P0 },
    };
    const sel = kit.select(controls, { label: '$f(z)=$', options: Object.keys(FNS).map(k => [FNS[k].name, k]), value: 'exp', onChange: () => { bgKey = ''; curveKey = ''; draw(); } });
    sel.select.style.maxWidth = '250px';
    const sT = kit.slider(controls, { label: '$t$', min: 0, max: 1, step: 0.005, value: 0.35, onChange: () => { stopAnim(); draw(); } });
    const btn = kit.button(controls, { label: '▶ Rétracter', primary: true, onClick: () => { if (anim) { stopAnim(); draw(); } else startAnim(); } });
    const roF = kit.readout(controls, { label: '' });
    const roC = kit.readout(controls, { label: '' });
    const roI = kit.readout(controls, { label: '' });

    let z = [0.35, 0.25], P = null, anim = null, bgKey = '', curveKey = '', curve = [];
    const off = document.createElement('canvas'); const offCtx = off.getContext('2d');

    const safe = (fn, w) => { try { const v = fn(w); return (isFinite(v[0]) && isFinite(v[1])) ? v : null; } catch (e) { return null; } };
    // I(t) = ∫_0^{2π} i (f(tz+(1-t)e^{iθ}) - f(z)) e^{iθ} / (e^{iθ} - z) dθ   (I.6.1)
    function I(fn, fz, t, M) {
      if (t >= 0.999) return [0, 0];
      let s = [0, 0];
      for (let k = 0; k < M; k++) {
        const th = 2 * Math.PI * k / M, e = [Math.cos(th), Math.sin(th)];
        const w = [t * z[0] + (1 - t) * e[0], t * z[1] + (1 - t) * e[1]];
        const fw = safe(fn, w); if (!fw) return null;
        const q = C.div(C.mul(C.sub(fw, fz), e), C.sub(e, z));
        s = C.add(s, q);
      }
      return C.mul([0, 1], C.scale(s, 2 * Math.PI / M));
    }
    // (1/2iπ) ∫_Γ f(ω)/(ω − z) dω avec ω = e^{iθ} : (1/2π) ∫ f(e^{iθ}) e^{iθ}/(e^{iθ} − z) dθ
    function cauchy(fn, M) {
      let s = [0, 0];
      for (let k = 0; k < M; k++) {
        const th = 2 * Math.PI * k / M, e = [Math.cos(th), Math.sin(th)];
        const fw = safe(fn, e); if (!fw) return null;
        s = C.add(s, C.div(C.mul(fw, e), C.sub(e, z)));
      }
      return C.scale(s, 1 / M);
    }
    const inside = () => Math.hypot(z[0], z[1]) < 1;
    const fmt = v => v ? C.str(v, 4) : 'non défini';
    function arrowsOnCircle(ctx, cx, cy, r, color, n) {
      for (let k = 0; k < n; k++) {
        const th = 2 * Math.PI * (k + 0.25) / n, [x0, y0] = P.toPx(cx + r * Math.cos(th), cy + r * Math.sin(th));
        const tx = -Math.sin(th), ty = Math.cos(th);
        kit.arrow(ctx, x0 - tx * 6, y0 + ty * 6, x0 + tx * 6, y0 - ty * 6, { color, width: 2, head: 8 });
      }
    }
    function background() {
      const key = sel.value + ':' + st.W + 'x' + st.H;
      if (key === bgKey) return; bgKey = key;
      off.width = st.W; off.height = st.H;
      kit.domainColor({ ctx: offCtx, W: st.W, H: st.H, dpr: 1 }, P, FNS[sel.value].f, { lines: false, step: 2 });
    }
    function computeCurve() {
      const key = sel.value + ':' + z[0].toFixed(4) + ',' + z[1].toFixed(4);
      if (key === curveKey) return; curveKey = key; curve = [];
      if (!inside()) return;
      const fn = FNS[sel.value].f, fz = safe(fn, z); if (!fz) return;
      for (let i = 0; i <= 120; i++) { const t = i / 120, v = I(fn, fz, t, 400); curve.push([t, v ? C.abs(v) : NaN]); }
    }

    function draw() {
      const t = kit.theme(), ctx = st.ctx, F = FNS[sel.value], tt = sT.value;
      P = kit.plane(ctx, { xmin: -1.45, xmax: 1.45, ymin: -1.3, ymax: 1.3, W: st.W, H: st.H });
      background();
      ctx.fillStyle = t.bg; ctx.fillRect(0, 0, st.W, st.H);
      ctx.save(); ctx.globalAlpha = 0.5; ctx.drawImage(off, 0, 0, st.W, st.H); ctx.restore();
      P.axes({ labels: true, step: 0.5 });
      // Γ
      P.circle(0, 0, 1, { color: t.accent, width: 3 });
      arrowsOnCircle(ctx, 0, 0, 1, t.accent, 4);
      P.text(Math.cos(2.4), Math.sin(2.4), 'Γ = C(0,1)', { dx: -4, dy: -6, align: 'right', color: t.accent, font: '600 12px system-ui, sans-serif' });
      // pôle
      if (F.pole) {
        const [px, py] = P.toPx(F.pole[0], F.pole[1]);
        ctx.save(); ctx.strokeStyle = t.fg; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(px - 6, py - 6); ctx.lineTo(px + 6, py + 6); ctx.moveTo(px + 6, py - 6); ctx.lineTo(px - 6, py + 6); ctx.stroke(); ctx.restore();
        P.text(F.pole[0], F.pole[1], F.pole[0] > 1 ? 'pôle 3/2' : 'pôle p', { dx: 8, dy: -6, font: '600 12px system-ui, sans-serif' });
      }
      // Γ_t
      if (inside()) {
        const cx = tt * z[0], cy = tt * z[1], r = 1 - tt;
        if (r > 0.004) { P.circle(cx, cy, r, { color: t.accent2, width: 2.2 }); if (r * P.sx > 25) arrowsOnCircle(ctx, cx, cy, r, t.accent2, 3); }
        P.point(cx, cy, { r: 2.5, color: t.accent2 });
        P.text(cx + r * Math.cos(-0.6), cy + r * Math.sin(-0.6), 'Γₜ', { dx: 5, dy: 4, baseline: 'top', color: t.accent2, font: '600 13px system-ui, sans-serif' });
      }
      P.point(z[0], z[1], { r: 6, color: t.accent4, stroke: t.fg });
      P.text(z[0], z[1], 'z', { dx: 8, dy: -4, font: '600 13px system-ui, sans-serif' });

      // lectures
      const fz = safe(F.f, z), dist = Math.abs(Math.hypot(z[0], z[1]) - 1);
      const cz = dist < 0.012 ? null : cauchy(F.f, 2048);
      roF.set(`f(z) = ${fmt(fz)}`);
      if (!cz) roC.set('z sur Γ : l’intégrale de Cauchy n’est pas définie');
      else roC.set(`(1/2iπ)∫<sub>Γ</sub> f(ω)/(ω−z) dω = ${fmt(cz)}` + (fz ? ` &nbsp;(écart à f(z) : ${C.abs(C.sub(cz, fz)).toExponential(1)})` : ''));
      if (inside() && fz) { const v = I(F.f, fz, tt, 1024); roI.set(`I(${tt.toFixed(3)}) = ${fmt(v)}`); }
      else roI.set(inside() ? 'I(t) non défini (f(z) n’existe pas)' : 'z ∉ D(0,1) : pas de rétraction');
      drawPlot();
    }

    function drawPlot() {
      const t = kit.theme(), ctx = sp.ctx, W = sp.W, H = sp.H;
      ctx.fillStyle = t.bg; ctx.fillRect(0, 0, W, H);
      computeCurve();
      const L = 46, R = 12, T = 22, B = 22;
      ctx.save(); ctx.font = '11px system-ui, sans-serif'; ctx.fillStyle = t.fg; ctx.textBaseline = 'top'; ctx.textAlign = 'left';
      ctx.fillText('|I(t)| en fonction de t (I(t) = ∫ sur Γₜ de (f(ω) − f(z))/(ω − z) dω)', 6, 4);
      if (!curve.length) {
        ctx.fillStyle = t.muted; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(inside() ? 'f(z) non défini' : 'z hors du disque : la rétraction Γₜ = C(tz, 1−t) n’a de sens que pour z ∈ D(0,1)', W / 2, H / 2 + 6);
        ctx.restore(); return;
      }
      let m = 0; for (const [, v] of curve) if (isFinite(v)) m = Math.max(m, v);
      const ymax = Math.max(1, 1.15 * m);
      const X = s => L + s * (W - L - R), Y = v => H - B - (v / ymax) * (H - T - B);
      ctx.strokeStyle = t.axis; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(L, T); ctx.lineTo(L, H - B); ctx.lineTo(W - R, H - B); ctx.stroke();
      ctx.fillStyle = t.muted; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      ctx.fillText('0', L - 4, Y(0)); ctx.fillText(ymax.toFixed(ymax < 10 ? 2 : 1), L - 4, Y(ymax));
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      for (const s of [0, 0.25, 0.5, 0.75, 1]) ctx.fillText(String(s), X(s), H - B + 3);
      ctx.textAlign = 'right'; ctx.fillText('t', W - R, H - B - 14);
      ctx.strokeStyle = t.grid; ctx.beginPath(); ctx.moveTo(L, Y(ymax)); ctx.lineTo(W - R, Y(ymax)); ctx.stroke();
      ctx.strokeStyle = t.accent2; ctx.lineWidth = 2.2; ctx.beginPath(); let first = true;
      for (let i = 0; i < curve.length; i++) {
        const [s, v] = curve[i]; if (!isFinite(v)) { first = true; continue; }
        // saut (pôle franchi) : ne pas relier verticalement deux valeurs très différentes
        if (!first && Math.abs(v - curve[i - 1][1]) > 0.25 * ymax) first = true;
        if (first) { ctx.moveTo(X(s), Y(v)); first = false; } else ctx.lineTo(X(s), Y(v));
      }
      ctx.stroke();
      const tt = sT.value; ctx.strokeStyle = t.accent4; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]); ctx.beginPath(); ctx.moveTo(X(tt), T); ctx.lineTo(X(tt), H - B); ctx.stroke(); ctx.setLineDash([]);
      const F = FNS[sel.value];
      ctx.fillStyle = F.hol ? t.accent3 : t.accent2; ctx.textAlign = 'right'; ctx.textBaseline = 'top'; ctx.font = '600 11px system-ui, sans-serif';
      ctx.fillText(m < 1e-8 ? 'I(t) ≡ 0 : constante, donc I(0) = I(1) = 0' : 'I(t) varie : I(0) ≠ 0, la formule tombe', W - R, T + 2);
      ctx.restore();
    }

    function stopAnim() { if (anim) { anim.stop(); anim = null; } btn.textContent = '▶ Rétracter'; }
    function startAnim() {
      if (!inside()) return;
      if (sT.value >= 0.995) sT.value = 0;
      btn.textContent = '■ Arrêter';
      anim = kit.animate(dt => { const v = Math.min(1, sT.value + dt / 4); sT.value = v; draw(); if (v >= 1) stopAnim(); });
    }
    function setZ(p) {
      if (!P) return; z = P.toWorld(p.x, p.y);
      z[0] = Math.max(-1.4, Math.min(1.4, z[0])); z[1] = Math.max(-1.25, Math.min(1.25, z[1]));
      if (Math.hypot(z[0], z[1]) < 0.06) z = [0, 0];
      const F = FNS[sel.value]; if (F.pole && Math.hypot(z[0] - F.pole[0], z[1] - F.pole[1]) < 0.05) { z = [F.pole[0] - 0.08, F.pole[1] - 0.08]; }
      if (!inside()) stopAnim();
      draw();
    }
    const offDrag = kit.drag(st.canvas, { onDown: p => setZ(p), onMove: (p, ev, down) => { if (down) setZ(p); } });
    st.onResize = () => { bgKey = ''; draw(); }; sp.onResize = () => drawPlot();
    draw();
    return () => { stopAnim(); offDrag(); st.destroy(); sp.destroy(); };
  }
});

} catch (e) { console.error('viz viz-ch01-cauchy-retraction failed to register', e); }

// ---- content/ch01/viz/viz-ch01-differentielle-similitude.js ----
try {
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

} catch (e) { console.error('viz viz-ch01-differentielle-similitude failed to register', e); }

// ---- content/ch02/viz/viz-ch02-contours-residus.js ----
try {
FMA.registerViz({
  id: 'viz-ch02-contours-residus',
  chapter: 2,
  title: 'Formule des résidus sur les contours usuels',
  description: String.raw`**Ce que l'on voit.** Un contour usuel $\Gamma$, bord d'un ouvert borné $U$, parcouru dans le **sens direct** ($U$ à gauche, flèches), posé sur le *domain coloring* atténué de $f$ (teinte = argument de $f(z)$, clair = $|f(z)|$ grand, sombre = petit). Les pôles de $f$ sont des disques : **orange plein** s'ils sont dans $U$, creux sinon. En bas, en échelle logarithmique : $R\mapsto\big|\int_{C_R}f(z)\,dz\big|$ sur le grand arc $C_R$ (trait rose) et la majoration « longueur de l'arc $\times\sup_{C_R}|f|$ » (tirets), le trait vertical marquant la valeur actuelle de $R$.

**Le théorème.** Si $U$ est bordé par un lacet simple $\gamma$ orienté positivement et si $f$ est méromorphe sur un ouvert simplement connexe contenant $\bar U$, sans pôle sur $\gamma$, alors
$$\int_\gamma f(z)\,dz=2i\pi\sum_{s\in S}\mathrm{res}_s(f),$$
où $S$ est l'ensemble (fini) des pôles de $f$ dans $U$ (poly, Formule (II.6.1), p. 48 ; c'est le Théorème II.5.1, p. 47, avec $\Ind_s(\gamma)=1$ pour $s\in U$ et $0$ hors de $\bar U$). Les lectures comparent l'intégrale **calculée numériquement** (méthode de Simpson sur chaque morceau du contour) et $2i\pi\sum\mathrm{res}$. [[ch02-formule-residus-pratique]], [[ch02-formule-residus]].

**À faire.**
* Faites varier $R$ (ou « ▶ faire grandir $R$ ») : l'égalité est vraie **pour chaque $R$**, pas seulement à la limite, et elle **saute** quand un pôle entre dans $U$ (il s'allume). Pôle exactement sur $\Gamma$ : l'intégrale n'est pas définie.
* *Exemple II.6.1* (p. 48), $f(z)=\dfrac{e^{ikz}}{z^2+a^2}$ sur le demi-disque : pour $R>a$ seul $ia$ est dedans et $\mathrm{res}_{ia}(f)=\dfrac{e^{-ka}}{2ia}$. La courbe du bas montre $\int_{C_R^+}f\to0$ et la partie réelle de $\int_{-R}^{R}f$ tend vers $\frac{\pi}{a}e^{-ka}$ ([[ch02-exemple-integrale-fourier]]). Passez à $k<0$ : $|e^{ikz}|=e^{-k\,\Im z}$ **explose** sur le demi-cercle supérieur (il vaut $e^{|k|R}$ en $iR$), la majoration disparaît et l'intégrale sur l'arc ne tend plus vers $0$ (la courbe du bas reste haute) ; la formule des résidus reste vraie pour chaque $R$, mais elle ne donne plus l'intégrale réelle : il faut fermer par le demi-plan inférieur.
* $\dfrac{1}{1+z^4}$ : **deux** pôles, $e^{i\pi/4}$ et $e^{3i\pi/4}$, dans le demi-disque (piège classique : n'en compter qu'un) ; on trouve $\int_{-\infty}^{+\infty}\frac{dx}{1+x^4}=\frac{\pi}{\sqrt2}$.
* Secteur d'angle $\frac{2\pi}{3}$ pour $\dfrac{1}{1+z^3}$ : le segment de retour donne $-e^{2i\pi/3}\int_0^R\frac{dx}{1+x^3}$ (car $(xe^{2i\pi/3})^3=x^3$), d'où $\int_0^{+\infty}\frac{dx}{1+x^3}=\dfrac{2i\pi\,\mathrm{res}_{e^{i\pi/3}}(f)}{1-e^{2i\pi/3}}=\dfrac{2\pi}{3\sqrt3}$.
* *Exemple II.9.7* (p. 57), trou de serrure, $f(z)=\dfrac{z^{\alpha-1}}{1+z}$ avec $z^{\alpha-1}=e^{(\alpha-1)\mathrm{Log}\,z}$ et $\arg z\in\,]0,2\pi[$ : le domain coloring montre la **coupure** le long de $\R_+$ (saut de couleur). Le contour tracé est la limite du trou de serrure du poly quand l'ouverture se referme : $\gamma_+$ et $\gamma_-$ sont dessinés légèrement décalés, mais on intègre les **valeurs limites** de $f$ au-dessus ($\arg z\to0$) et en dessous ($\arg z\to2\pi$) de la coupure, comme dans le poly ; c'est pour un trou de serrure d'ouverture non nulle que $\bar U$ est contenu dans $\C\setminus\R_+$ et que (II.6.1) s'applique à la lettre. Les bords $\gamma_+$ (au-dessus) et $\gamma_-$ (en dessous) ne se compensent pas, car sur $\gamma_-$ on a $z^{\alpha-1}=x^{\alpha-1}e^{2i\pi\alpha}$. Les arcs $C_R$ et $C_\varepsilon$ tendent vers $0$ grâce à $0<\alpha<1$ (majorations $\frac{2\pi R^{\alpha}}{R-1}$ et $\frac{2\pi\varepsilon^{\alpha}}{1-\varepsilon}$), d'où $\int_0^{+\infty}\frac{x^{\alpha-1}}{1+x}dx=\frac{\pi}{\sin(\alpha\pi)}$ ([[ch02-exemple-trou-de-serrure]]).

> ⚠️ L'égalité « intégrale = $2i\pi\sum\mathrm{res}$ » ne dit rien sur la limite : tout le travail d'un calcul d'intégrale réelle est de **majorer les arcs** (courbe du bas) et de reconnaître l'intégrale cherchée sur les segments.`,
  related: ['ch02-formule-residus-pratique', 'ch02-formule-residus', 'ch02-exemple-integrale-fourier', 'ch02-exemple-trou-de-serrure', 'ch02-residu-pole-simple', 'ch02-residu-integrale-cercle', 'ch02-puissance-complexe-def'],
  height: 640,
  mount(container, kit) {
    const C = kit.complex, TAU = 2 * Math.PI;
    const st = kit.canvas(container, { height: 340 });
    const st2 = kit.canvas(container, { height: 130 });
    const controls = kit.controls(container);
    const I = [0, 1];
    const cexp = t => [Math.cos(t), Math.sin(t)];
    const rpow = (r, p) => Math.pow(r, p);

    // ---------- exemples ----------
    // pieces(R, eps, q) : morceaux du contour, chacun u∈[0,1] ↦ [z(u), f(z(u)) z'(u)]
    const EX = {
      fourier: {
        name: 'exp(ikz)/(z²+a²), demi-disque (Ex. II.6.1)', prm: ['k', 'a'], R: 2.5,
        f: (z, q) => C.div(C.exp(C.mul([0, q.k], z)), C.add(C.mul(z, z), [q.a * q.a, 0])),
        pieces(R, e, q, f) {
          return [
            { kind: 'seg', label: '[−R, R]', F: u => { const z = [-R + 2 * R * u, 0]; return [z, C.scale(f(z, q), 2 * R)]; } },
            { kind: 'arcR', label: 'C_R⁺', F: u => { const z = C.scale(cexp(Math.PI * u), R); return [z, C.mul(f(z, q), C.mul([0, Math.PI], z))]; } },
          ];
        },
        poles: q => [{ z: [0, q.a], name: 'ia', tex: 'ia' }, { z: [0, -q.a], name: '−ia', tex: '-ia' }].map(p => ({ ...p, res: C.div(C.exp(C.mul([0, q.k], p.z)), C.scale(p.z, 2)) })),
        inside: (p, R) => p.z[1] > 0 && C.abs(p.z) < R,
        bound: (R, q) => (q.k >= 0 && R > q.a) ? Math.PI * R / (R * R - q.a * q.a) : null,
        target: q => ({ label: '$\\int_{-R}^{R}\\frac{\\cos kx}{x^2+a^2}dx\\approx$', lim: Math.PI * Math.exp(-Math.abs(q.k) * q.a) / q.a, limTex: '\\tfrac{\\pi}{a}e^{-|k|a}' }),
        approx: ints => ints[0][0],
      },
      quartique: {
        name: '1/(1+z⁴), demi-disque', prm: [], R: 2,
        f: z => C.inv(C.add(C.pow(z, 4), [1, 0])),
        pieces(R, e, q, f) {
          return [
            { kind: 'seg', label: '[−R, R]', F: u => { const z = [-R + 2 * R * u, 0]; return [z, C.scale(f(z, q), 2 * R)]; } },
            { kind: 'arcR', label: 'C_R⁺', F: u => { const z = C.scale(cexp(Math.PI * u), R); return [z, C.mul(f(z, q), C.mul([0, Math.PI], z))]; } },
          ];
        },
        poles: () => [1, 3, 5, 7].map(m => { const z = cexp(m * Math.PI / 4); return { z, name: `e^(${m === 1 ? '' : m}iπ/4)`, tex: `e^{${m === 1 ? '' : m}i\\pi/4}`, res: C.inv(C.scale(C.pow(z, 3), 4)) }; }),
        inside: (p, R) => p.z[1] > 0 && C.abs(p.z) < R,
        bound: R => R > 1 ? Math.PI * R / (R ** 4 - 1) : null,
        target: () => ({ label: '$\\int_{-R}^{R}\\frac{dx}{1+x^4}\\approx$', lim: Math.PI / Math.SQRT2, limTex: '\\pi/\\sqrt2' }),
        approx: ints => ints[0][0],
      },
      secteur: {
        name: '1/(1+z³), secteur d’angle 2π/3', prm: [], R: 2,
        f: z => C.inv(C.add(C.pow(z, 3), [1, 0])),
        pieces(R, e, q, f) {
          const w = cexp(TAU / 3);
          return [
            { kind: 'seg', label: '[0, R]', F: u => { const z = [R * u, 0]; return [z, C.scale(f(z, q), R)]; } },
            { kind: 'arcR', label: 'C_R', F: u => { const z = C.scale(cexp(TAU / 3 * u), R); return [z, C.mul(f(z, q), C.mul([0, TAU / 3], z))]; } },
            { kind: 'seg2', label: '[R·e^(2iπ/3), 0]', F: u => { const z = C.scale(w, R * (1 - u)); return [z, C.mul(f(z, q), C.scale(w, -R))]; } },
          ];
        },
        poles: () => [1, 3, 5].map(m => { const z = cexp(m * Math.PI / 3); return { z, name: m === 3 ? '−1' : `e^(${m === 1 ? '' : '−'}iπ/3)`, tex: m === 3 ? '-1' : `e^{${m === 1 ? '' : '-'}i\\pi/3}`, res: C.inv(C.scale(C.mul(z, z), 3)) }; }),
        inside: (p, R) => { const t = Math.atan2(p.z[1], p.z[0]); return t > 1e-9 && t < TAU / 3 - 1e-9 && C.abs(p.z) < R; },
        bound: R => R > 1 ? (TAU / 3) * R / (R ** 3 - 1) : null,
        target: () => ({ label: '$\\int_{0}^{R}\\frac{dx}{1+x^3}\\approx$', lim: TAU / (3 * Math.sqrt(3)), limTex: '\\tfrac{2\\pi}{3\\sqrt3}' }),
        approx: ints => ints[0][0],
      },
      serrure: {
        name: 'z^(α−1)/(1+z), trou de serrure (Ex. II.9.7)', prm: ['alpha', 'eps'], R: 3, keyhole: true,
        // f en coordonnées polaires, arg θ ∈ [0, 2π]
        fp: (r, t, q) => C.div(C.scale(cexp((q.alpha - 1) * t), rpow(r, q.alpha - 1)), C.add([1, 0], C.scale(cexp(t), r))),
        f(z, q) { const r = C.abs(z); let t = Math.atan2(z[1], z[0]); if (t < 0) t += TAU; return this.fp(r, t, q); },
        pieces(R, e, q) {
          const fp = EX.serrure.fp;
          return [
            { kind: 'seg', label: 'γ₊', F: u => { const x = e + (R - e) * u; return [[x, 0], C.scale(fp(x, 0, q), R - e)]; } },
            { kind: 'arcR', label: 'C_R', F: u => { const t = TAU * u, z = C.scale(cexp(t), R); return [z, C.mul(fp(R, t, q), C.mul([0, TAU], z))]; } },
            { kind: 'seg2', label: 'γ₋', F: u => { const x = R - (R - e) * u; return [[x, 0], C.scale(fp(x, TAU, q), -(R - e))]; } },
            { kind: 'arcE', label: 'C_ε', F: u => { const t = TAU * (1 - u), z = C.scale(cexp(t), e); return [z, C.mul(fp(e, t, q), C.mul([0, -TAU], z))]; } },
          ];
        },
        poles: q => [{ z: [-1, 0], name: '−1', tex: '-1', res: cexp((q.alpha - 1) * Math.PI) }],
        inside: (p, R, e) => e < 1 && R > 1,
        bound: (R, q) => R > 1 ? TAU * rpow(R, q.alpha) / (R - 1) : null,
        boundE: (e, q) => e < 1 ? TAU * rpow(e, q.alpha) / (1 - e) : null,
        target: q => ({ label: '$\\int_{\\varepsilon}^{R}\\frac{x^{\\alpha-1}}{1+x}dx\\approx$', lim: Math.PI / Math.sin(q.alpha * Math.PI), limTex: '\\tfrac{\\pi}{\\sin(\\alpha\\pi)}' }),
        approx: ints => ints[0][0],
      },
    };

    const sel = kit.select(controls, { label: '$f$ et contour', options: Object.keys(EX).map(k => [EX[k].name, k]), value: 'fourier', onChange: () => { stopAnim(); sR.value = EX[sel.value].R; R = sR.value; showParams(); recomputeStrip(); draw(); } });
    sel.select.style.maxWidth = 'min(270px, calc(100vw - 150px))';
    let R = EX.fourier.R;
    const sR = kit.slider(controls, { label: '$R$', min: 0.2, max: 6, step: 0.01, value: R, onChange: v => { R = v; draw(); } });
    const sK = kit.slider(controls, { label: '$k$', min: -2, max: 3, step: 0.1, value: 1, onChange: () => { recomputeStrip(); draw(); } });
    const sA = kit.slider(controls, { label: '$a$', min: 0.3, max: 2, step: 0.05, value: 1, onChange: () => { recomputeStrip(); draw(); } });
    const sAl = kit.slider(controls, { label: '$\\alpha$', min: 0.05, max: 0.95, step: 0.01, value: 0.4, onChange: () => { recomputeStrip(); draw(); } });
    const sE = kit.slider(controls, { label: '$\\varepsilon$', min: 0.05, max: 0.95, step: 0.01, value: 0.3, onChange: () => draw() });
    const cDC = kit.checkbox(controls, { label: 'domain coloring de $f$', checked: true, onChange: () => draw() });
    const btn = kit.button(controls, { label: '▶ faire grandir R', primary: true, onClick: () => toggleAnim() });
    const rowR = kit.row(controls);
    const roPoles = kit.readout(rowR, { label: 'pôles dans $U$ :' });
    const roInt = kit.readout(rowR, { label: '$\\int_\\Gamma f(z)\\,dz\\approx$' });
    const roRes = kit.readout(rowR, { label: '$2i\\pi\\sum_{s\\in U}\\mathrm{res}_s(f)=$' });
    const roArc = kit.readout(rowR, { label: 'arcs :' });
    const roReal = kit.readout(rowR, { label: '' });

    const PARAM_CTL = { k: sK, a: sA, alpha: sAl, eps: sE };
    function showParams() { const ex = EX[sel.value]; for (const k in PARAM_CTL) PARAM_CTL[k].el.style.display = ex.prm.includes(k) ? '' : 'none'; }
    const params = () => ({ k: sK.value, a: sA.value, alpha: sAl.value, eps: sE.value });

    // ---------- intégration (Simpson) ----------
    function simpson(F, n) {
      let s = [0, 0];
      for (let i = 0; i <= n; i++) { const w = (i === 0 || i === n) ? 1 : (i % 2 ? 4 : 2); const v = F(i / n)[1]; if (isFinite(v[0]) && isFinite(v[1])) { s[0] += w * v[0]; s[1] += w * v[1]; } }
      return [s[0] / (3 * n), s[1] / (3 * n)];
    }
    const fmtR = (v, d = 4) => { if (!isFinite(v)) return '∞'; const r = +v.toFixed(d); return (Object.is(r, -0) ? 0 : r).toFixed(d); };
    const fmtC = (z, d = 4) => { const re = +z[0].toFixed(d), im = +z[1].toFixed(d); return `${fmtR(re, d)} ${im < 0 ? '−' : '+'} ${fmtR(Math.abs(im), d)} i`; };
    const fmtCt = (z, d = 4) => fmtC(z, d).replace(/−/g, '-').replace(/ i$/, '\\,i');
    const setLabel = (ro, tex) => { const l = ro.el.querySelector('.viz-ctl-label'); if (l) l.innerHTML = (window.FMA && FMA.render) ? FMA.render(tex, { inline: true }) : tex; };

    // ---------- courbe du bas : |∫_{C_R} f| en fonction de R ----------
    let strip = null;
    const RMIN = 0.2, RMAX = 6;
    function recomputeStrip() {
      const ex = EX[sel.value], q = params(), f = ex.f.bind(ex); const vals = [], bnd = [];
      for (let i = 0; i <= 140; i++) {
        const r = RMIN + (RMAX - RMIN) * i / 140; const pc = ex.pieces(r, q.eps, q, f).find(p => p.kind === 'arcR');
        const v = C.abs(simpson(pc.F, 300));
        vals.push([r, v]); bnd.push([r, ex.bound(r, q)]);
      }
      strip = { vals, bnd };
    }

    // ---------- dessin ----------
    let P = null;
    function draw() {
      const T = kit.theme(), ctx = st.ctx, ex = EX[sel.value], q = params(), f = ex.f.bind(ex), e = q.eps;
      const pieces = ex.pieces(R, e, q, f), poles = ex.poles(q);
      // échantillons des morceaux (pour le cadrage, le tracé et le test « pôle sur Γ »)
      const samp = pieces.map(pc => { const a = []; for (let i = 0; i <= 240; i++) a.push(pc.F(i / 240)[0]); return a; });
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      const upd = z => { x0 = Math.min(x0, z[0]); x1 = Math.max(x1, z[0]); y0 = Math.min(y0, z[1]); y1 = Math.max(y1, z[1]); };
      samp.forEach(a => a.forEach(upd)); poles.forEach(p => upd(p.z)); upd([0, 0]);
      const span = Math.max(x1 - x0, y1 - y0, 2.4), pad = 0.12 * span + 0.15;
      P = kit.plane(ctx, { xmin: x0 - pad, xmax: x1 + pad, ymin: y0 - pad, ymax: y1 + pad, W: st.W, H: st.H });
      st.clear(); ctx.fillStyle = T.bg; ctx.fillRect(0, 0, st.W, st.H);
      if (cDC.value) {
        kit.domainColor(st, P, z => f(z, q), { step: 3, lines: true });
        ctx.save(); ctx.globalAlpha = 0.62; ctx.fillStyle = T.bg; ctx.fillRect(0, 0, st.W, st.H); ctx.restore();
      } else P.grid(1);
      const gstep = P.xmax - P.xmin > 12 ? 2 : 1;
      P.axes({ step: gstep });
      // test pôle sur Γ
      const tol = 6 / P.sx;
      const onG = poles.filter(p => samp.some(a => a.some((z, i) => i < a.length - 1 && segDist(p.z, z, a[i + 1]) < tol)));
      // tracé du contour (les bords du trou de serrure sont légèrement décalés pour être visibles)
      const COL = { seg: T.accent, seg2: T.accent3, arcR: T.accent2, arcE: T.accent5 };
      const dy = ex.keyhole ? 3 / P.sy : 0;
      pieces.forEach((pc, j) => {
        const off = ex.keyhole ? (pc.kind === 'seg' ? dy : pc.kind === 'seg2' ? -dy : 0) : 0;
        const pts = samp[j].map(z => [z[0], z[1] + off]);
        P.curve(pts, { color: COL[pc.kind], width: 2.6 });
        const m = Math.floor(pts.length * 0.5), a = P.toPx(...pts[m]), b = P.toPx(...pts[Math.min(pts.length - 1, m + 2)]);
        const ddx = b[0] - a[0], ddy = b[1] - a[1], L = Math.hypot(ddx, ddy);
        if (L > 1e-6) kit.arrow(ctx, a[0] - 7 * ddx / L, a[1] - 7 * ddy / L, a[0] + 7 * ddx / L, a[1] + 7 * ddy / L, { color: COL[pc.kind], width: 2.6, head: 11 });
        // étiquette du morceau
        const lp = P.toPx(...pts[Math.floor(pts.length * 0.3)]);
        ctx.save(); ctx.font = '12px system-ui, sans-serif'; ctx.fillStyle = COL[pc.kind]; ctx.textBaseline = 'bottom';
        const lx = pc.kind === 'arcE' ? lp[0] + 6 : lp[0] + 4, ly = (pc.kind === 'seg2') ? lp[1] + 16 : lp[1] - 4;
        ctx.fillText(pc.label, lx, ly); ctx.restore();
      });
      // pôles
      const inside = poles.filter(p => !onG.includes(p) && ex.inside(p, R, e));
      poles.forEach(p => {
        const [px, py] = P.toPx(...p.z); const isIn = inside.includes(p), isOn = onG.includes(p);
        ctx.save();
        if (isIn) { ctx.fillStyle = T.accent4; ctx.globalAlpha = 0.3; ctx.beginPath(); ctx.arc(px, py, 12, 0, TAU); ctx.fill(); ctx.globalAlpha = 1; ctx.beginPath(); ctx.arc(px, py, 6, 0, TAU); ctx.fill(); ctx.strokeStyle = T.fg; ctx.lineWidth = 1.2; ctx.stroke(); }
        else { ctx.strokeStyle = isOn ? T.accent2 : T.fg; ctx.lineWidth = 2; ctx.fillStyle = T.bg; ctx.beginPath(); ctx.arc(px, py, 5.5, 0, TAU); ctx.fill(); ctx.stroke(); }
        ctx.fillStyle = T.fg; ctx.font = '12px system-ui, sans-serif'; ctx.textBaseline = 'bottom'; ctx.fillText(p.name, px + 8, py - 5);
        ctx.restore();
      });
      // intégrales
      const ints = pieces.map(pc => simpson(pc.F, 1600));
      const tot = ints.reduce((s, v) => C.add(s, v), [0, 0]);
      const sres = C.mul([0, TAU], inside.reduce((s, p) => C.add(s, p.res), [0, 0]));
      if (inside.length) roPoles.set(inside.map(p => `${p.tex}\\;(\\mathrm{res}\\approx ${fmtCt(p.res, 3)})`).join(',\\ \\ '), true); else roPoles.set('aucun');
      const tg = ex.target(q); setLabel(roReal, tg.label);
      if (onG.length) {
        roInt.set('pôle sur Γ : non défini'); roRes.set('—'); roArc.set('—'); roReal.set('—');
      } else {
        roInt.set(fmtC(tot)); roRes.set(fmtC(sres));
        const ia = pieces.findIndex(pc => pc.kind === 'arcR'), ie = pieces.findIndex(pc => pc.kind === 'arcE');
        let s = `|∫ sur C_R| ≈ ${fmtR(C.abs(ints[ia]))}`; if (ie >= 0) s += ` ; |∫ sur C_ε| ≈ ${fmtR(C.abs(ints[ie]))} (≤ ${fmtR(ex.boundE(e, q), 3)})`;
        roArc.set(s);
        roReal.set(`${fmtR(ex.approx(ints)).replace('−', '-')}\\quad(\\text{limite } ${tg.limTex} = ${fmtR(tg.lim)})`, true);
      }
      drawStrip();
    }
    function segDist(p, a, b) {
      const ex = b[0] - a[0], ey = b[1] - a[1], L2 = ex * ex + ey * ey; let u = L2 > 0 ? ((p[0] - a[0]) * ex + (p[1] - a[1]) * ey) / L2 : 0; u = Math.max(0, Math.min(1, u));
      return Math.hypot(a[0] + u * ex - p[0], a[1] + u * ey - p[1]);
    }
    function drawStrip() {
      const T = kit.theme(), ctx = st2.ctx, W = st2.W, H = st2.H; st2.clear(); ctx.fillStyle = T.bg; ctx.fillRect(0, 0, W, H);
      if (!strip) return;
      const L = 44, Rm = 10, Tp = 22, B = 20, LMIN = -3, LMAX = 2;
      const X = r => L + (r - RMIN) / (RMAX - RMIN) * (W - L - Rm);
      const Y = v => { const l = Math.max(LMIN - 0.2, Math.min(LMAX + 0.2, Math.log10(Math.max(v, 1e-12)))); return Tp + (LMAX - l) / (LMAX - LMIN) * (H - Tp - B); };
      ctx.save(); ctx.font = '11px system-ui, sans-serif';
      ctx.textBaseline = 'middle'; ctx.textAlign = 'right';
      for (let l = LMIN; l <= LMAX; l++) { ctx.strokeStyle = T.grid; ctx.beginPath(); ctx.moveTo(L, Y(10 ** l)); ctx.lineTo(W - Rm, Y(10 ** l)); ctx.stroke(); ctx.fillStyle = T.muted; ctx.fillText(l === 0 ? '1' : l === 1 ? '10' : l === 2 ? '100' : '10' + ['⁻³', '⁻²', '⁻¹'][l + 3], L - 5, Y(10 ** l)); }
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      for (let r = 1; r < RMAX; r++) ctx.fillText(String(r), X(r), H - B + 4);
      ctx.fillStyle = T.fg; ctx.fillText('R', X(RMAX) - 4, H - B + 4);
      ctx.strokeStyle = T.axis; ctx.beginPath(); ctx.moveTo(L, Tp - 4); ctx.lineTo(L, H - B); ctx.lineTo(W - Rm, H - B); ctx.stroke();
      ctx.save(); ctx.beginPath(); ctx.rect(L, Tp - 4, W - L - Rm, H - B - Tp + 4); ctx.clip();
      const line = (arr, color, dash, w) => { ctx.strokeStyle = color; ctx.lineWidth = w; ctx.setLineDash(dash || []); ctx.beginPath(); let first = true; for (const [r, v] of arr) { if (v == null || !isFinite(v) || v <= 0) { first = true; continue; } const x = X(r), y = Y(v); if (first) { ctx.moveTo(x, y); first = false; } else ctx.lineTo(x, y); } ctx.stroke(); ctx.setLineDash([]); };
      line(strip.bnd, T.muted, [5, 4], 1.4);
      line(strip.vals, T.accent2, null, 2.2);
      ctx.strokeStyle = T.accent; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(X(R), Tp - 4); ctx.lineTo(X(R), H - B); ctx.stroke();
      ctx.restore();
      ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillStyle = T.accent2; ctx.fillText('— |∫ sur C_R de f(z) dz|', L + 4, 4);
      const lw = ctx.measureText('— |∫ sur C_R de f(z) dz|').width; ctx.fillStyle = T.muted; ctx.fillText(W - L - lw > 230 ? '- - longueur × sup |f| sur C_R' : '- - majoration', L + lw + 18, 4);
      ctx.restore();
    }

    // ---------- animation ----------
    let anim = null;
    function stopAnim() { if (anim) { anim.stop(); anim = null; } btn.textContent = '▶ faire grandir R'; }
    function toggleAnim() {
      if (anim) { stopAnim(); return; }
      if (R >= RMAX - 0.01) R = RMIN;
      btn.textContent = '⏸ pause';
      anim = kit.animate(dt => { R = Math.min(RMAX, R + dt * 0.9); sR.value = +R.toFixed(2); draw(); if (R >= RMAX) stopAnim(); });
    }

    st.onResize = () => draw(); st2.onResize = () => drawStrip();
    showParams(); recomputeStrip(); draw();
    return () => { stopAnim(); st.destroy(); st2.destroy(); };
  }
});

} catch (e) { console.error('viz viz-ch02-contours-residus failed to register', e); }

// ---- content/ch02/viz/viz-ch02-indice-lacet.js ----
try {
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

} catch (e) { console.error('viz viz-ch02-indice-lacet failed to register', e); }

// ---- content/ch02/viz/viz-ch02-rouche-chien.js ----
try {
FMA.registerViz({
  id: 'viz-ch02-rouche-chien',
  chapter: 2,
  title: "Principe de l'argument et théorème de Rouché : le chien et son maître",
  description: String.raw`**Ce que l'on voit.** À gauche (au-dessus sur un téléphone), le plan des $z$ : le cercle $\Gamma=C(0,r)$, bord du disque $U=D(0,r)$, parcouru dans le sens direct, avec les zéros (disques) et les pôles (croix) des fonctions étudiées ; le petit nombre à côté d'un marqueur est sa multiplicité. À droite (en dessous), le plan des $w$ : l'**image** du cercle par la fonction, c'est-à-dire la courbe $t\mapsto g(\gamma(t))$ avec $\gamma(t)=re^{2i\pi t}$, et l'origine $w=0$ (le « poteau », croix noire). Le point mobile $\gamma(t)$ et ses images avancent avec le curseur $t$ ou le bouton ▶.

**Principe de l'argument** (poly, Lemme II.8.1 et Corollaire II.8.2, p. 53). Pour $g$ méromorphe sans zéro ni pôle sur $\Gamma$,
$$\frac{1}{2i\pi}\int_\Gamma\frac{g'(z)}{g(z)}\,dz=Z(g,U)-P(g,U),$$
nombre de zéros moins nombre de pôles dans $U$, **comptés avec multiplicité**. Le membre de gauche est exactement $\Ind_0(g\circ\gamma)$, le nombre de tours de la courbe image autour de $0$ (changement de variable $w=g(z)$ dans la définition de l'indice, [[ch02-indice-def]]). Glissez les zéros et les pôles (configurations « Argument ») ou changez $r$ : chaque zéro qui entre dans $U$ ajoute $m$ tours, chaque pôle en retire $m$. Quand un zéro ou un pôle est **sur** $\Gamma$, la courbe image passe par $0$ ou part à l'infini et l'intégrale n'est pas définie. Cochez « échelle compressée » pour voir la courbe en entier : on remplace $w$ par $\frac{w}{|w|+s_0}$, ce qui garde l'argument, donc le nombre de tours.

**Rouché** (poly, Théorème II.8.4, p. 54). Si $|f(z)-g(z)|<|g(z)|$ pour tout $z\in\Gamma$, alors $Z(f,U)-P(f,U)=Z(g,U)-P(g,U)$. Image : le maître $g(\gamma(t))$ (bleu) promène son chien $f(\gamma(t))$ (rose) autour du poteau $0$ ; la laisse est le segment de longueur $|f-g|$. L'hypothèse dit que la laisse est **plus courte que la distance du maître au poteau** : le chien reste dans le disque en tirets, de centre $g(\gamma(t))$ et de rayon $|g(\gamma(t))|$, qui ne contient pas $0$ ; il ne peut donc pas tourner autour du poteau un nombre de fois différent de son maître. Sur $\Gamma$, les arcs **verts** sont ceux où l'inégalité est vraie, les **rouges** ceux où elle est fausse.

**À faire.**
* $f=z^7-5z^3+1$, $g=-5z^3$ : pour $r=1$, $|f-g|=|z^7+1|\le2<5=|g|$ sur $\Gamma$, donc $f$ a **3** zéros dans $D(0,1)$ (les points roses). Diminuez $r$ sous $\approx0{,}59$ ou augmentez-le au-dessus de $\approx1{,}47$ (seuils où $r^7+1=5r^3$, c'est-à-dire où $\sup_\Gamma|f-g|=|g|$) : des arcs rouges apparaissent, et les nombres de tours finissent par différer.
* $f=z^4-2z^3+3z+2$, $g=z^4$ : pour $r$ grand, Rouché donne les $4$ zéros de $f$ dans $D(0,r)$ ; c'est la preuve de d'Alembert-Gauss du poly ([[ch02-dalembert-gauss-rouche]]). Pour $r=1{,}2$, l'hypothèse tombe et $f(\Gamma)$ fait $2$ tours contre $4$.
* $f=(z-b_1)(z-b_2)$ à zéros déplaçables, $g=z^2$ : poussez un zéro de $f$ hors du disque ; avant même qu'il traverse $\Gamma$, des arcs rouges apparaissent : l'inégalité est une condition **suffisante**, pas nécessaire.

> ⚠️ Rouché compare $Z-P$, pas $Z$ seul, et il faut l'inégalité **stricte en tout point** de $\Gamma$ (elle interdit en particulier à $f$ et $g$ de s'annuler sur $\Gamma$). [[ch02-rouche]], [[ch02-principe-argument]].`,
  related: ['ch02-principe-argument', 'ch02-principe-argument-domaine', 'ch02-rouche', 'ch02-dalembert-gauss-rouche', 'ch02-indice-def', 'ch02-pole-meromorphe-def'],
  height: 470,
  mount(container, kit) {
    const C = kit.complex, TAU = 2 * Math.PI;
    const row = document.createElement('div'); row.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;'; container.appendChild(row);
    const mkCell = () => { const d = document.createElement('div'); d.style.cssText = 'flex:1 1 280px;min-width:0;'; row.appendChild(d); return d; };
    const stZ = kit.canvas(mkCell(), { height: 320 });
    const stW = kit.canvas(mkCell(), { height: 320 });
    const controls = kit.controls(container);

    // ---------- polynômes ----------
    const horner = (c, z) => { let s = [0, 0]; for (const a of c) s = C.add(C.mul(s, z), [a, 0]); return s; };
    function roots(c) { // Durand–Kerner, c = coefficients (degré décroissant), c[0] = 1
      const n = c.length - 1; let r = []; for (let k = 0; k < n; k++) r.push(C.pow([0.4, 0.9], k));
      for (let it = 0; it < 300; it++) {
        let mv = 0;
        r = r.map((z, i) => { let d = [1, 0]; r.forEach((w, j) => { if (j !== i) d = C.mul(d, C.sub(z, w)); }); const dz = C.div(horner(c, z), d); mv = Math.max(mv, C.abs(dz)); return C.sub(z, dz); });
        if (mv < 1e-13) break;
      }
      return r.map(z => ({ z, m: 1 }));
    }
    const ratFn = (zs, ps) => z => { let v = [1, 0]; for (const a of zs) v = C.mul(v, C.pow(C.sub(z, a.z), a.m)); for (const p of ps) v = C.div(v, C.pow(C.sub(z, p.z), p.m)); return v; };

    // ---------- configurations ----------
    const CFG = {
      arg1: { name: 'Argument : 2 zéros, 1 pôle (à déplacer)', rouche: false, r: [0.2, 1.8, 1],
        zeros: [{ z: [0.45, 0.35], m: 1 }, { z: [-0.6, -0.25], m: 1 }], poles: [{ z: [0.15, -0.65], m: 1 }] },
      arg2: { name: 'Argument : zéro double, pôle double', rouche: false, r: [0.2, 1.8, 1],
        zeros: [{ z: [0.4, 0.25], m: 2 }, { z: [1.35, -0.3], m: 1 }], poles: [{ z: [-0.5, 0.45], m: 2 }] },
      arg3: { name: 'Argument : 3 zéros, 2 pôles', rouche: false, r: [0.2, 1.8, 1.2],
        zeros: [{ z: [0.6, 0.5], m: 1 }, { z: [-0.8, 0.2], m: 1 }, { z: [0.1, -1.4], m: 1 }], poles: [{ z: [-0.2, 0.7], m: 1 }, { z: [0.9, -0.5], m: 1 }] },
      r1: { name: 'Rouché : f = z⁷ − 5z³ + 1, g = −5z³', rouche: true, r: [0.2, 1.8, 1],
        fc: [1, 0, 0, 0, -5, 0, 0, 1], gz: [{ z: [0, 0], m: 3 }], gk: -5, gTex: '−5z³' },
      r2: { name: 'Rouché : f = z⁴ − 2z³ + 3z + 2, g = z⁴', rouche: true, r: [0.3, 4, 3],
        fc: [1, -2, 0, 3, 2], gz: [{ z: [0, 0], m: 4 }], gk: 1, gTex: 'z⁴' },
      r3: { name: 'Rouché : f = (z − b₁)(z − b₂) à déplacer, g = z²', rouche: true, r: [0.2, 1.8, 1],
        fzeros: [{ z: [0.45, 0.2], m: 1 }, { z: [-0.3, -0.5], m: 1 }], gz: [{ z: [0, 0], m: 2 }], gk: 1, gTex: 'z²' },
    };
    let cfg = null, zeros = [], poles = [], fZeros = [], gZeros = [], fFn = null, gFn = null, dragList = [];
    let r = 1, tCur = 0, anim = null, view = 1.6;

    const sel = kit.select(controls, { label: 'configuration', options: Object.keys(CFG).map(k => [CFG[k].name, k]), value: 'r1', onChange: () => { stopAnim(); load(sel.value); } });
    sel.select.style.maxWidth = 'min(280px, calc(100vw - 160px))';
    const sR = kit.slider(controls, { label: 'rayon $r$', min: 0.2, max: 1.8, step: 0.01, value: 1, onChange: v => { r = v; draw(); } });
    const sT = kit.slider(controls, { label: '$t$', min: 0, max: 1, step: 0.002, value: 0, onChange: v => { tCur = v; draw(); } });
    const btn = kit.button(controls, { label: '▶ promener', primary: true, onClick: () => toggleAnim() });
    const cComp = kit.checkbox(controls, { label: 'échelle compressée (garde l’argument)', checked: false, onChange: () => draw() });
    const rowR = kit.row(controls);
    const ro1 = kit.readout(rowR, { label: '' });
    const ro2 = kit.readout(rowR, { label: '' });
    const ro3 = kit.readout(rowR, { label: '' });
    const setLabel = (ro, tex) => { const l = ro.el.querySelector('.viz-ctl-label'); if (l) l.innerHTML = (window.FMA && FMA.render) ? FMA.render(tex, { inline: true }) : tex; };

    function load(key) {
      cfg = CFG[key];
      sR.input.min = cfg.r[0]; sR.input.max = cfg.r[1]; sR.value = cfg.r[2]; r = cfg.r[2];
      if (!cfg.rouche) {
        zeros = cfg.zeros.map(a => ({ z: a.z.slice(), m: a.m })); poles = cfg.poles.map(a => ({ z: a.z.slice(), m: a.m }));
        dragList = [...zeros, ...poles]; cComp.value = true;
        setLabel(ro1, '$Z(g,U)-P(g,U)=$'); setLabel(ro2, 'tours de $g(\\Gamma)$ autour de $0$ :'); setLabel(ro3, '$\\frac{1}{2i\\pi}\\int_\\Gamma\\frac{g\'}{g}\\,dz\\approx$');
      } else {
        gZeros = cfg.gz.map(a => ({ z: a.z.slice(), m: a.m }));
        gFn = z => C.scale(C.pow(z, gZeros[0].m), cfg.gk);
        if (cfg.fc) { fZeros = roots(cfg.fc); fFn = z => horner(cfg.fc, z); dragList = []; }
        else { fZeros = cfg.fzeros.map(a => ({ z: a.z.slice(), m: a.m })); fFn = ratFn(fZeros, []); dragList = fZeros; }
        cComp.value = false;
        setLabel(ro1, 'hypothèse $|f-g|<|g|$ sur $\\Gamma$ :'); setLabel(ro2, 'tours autour de $0$ :'); setLabel(ro3, 'zéros dans $U$ :');
      }
      const maxFixed = cfg.rouche && cfg.fc ? Math.max(...fZeros.map(a => C.abs(a.z))) : 1.4;
      view = Math.max(1.6, 1.12 * cfg.r[1], 1.15 * maxFixed);
      if (!cfg.rouche) view = 1.9;
      draw();
    }
    const gArg = () => ratFn(zeros, poles);

    // ---------- échantillonnage du cercle et nombre de tours ----------
    const NS = 2400;
    function sampleImage(F) {
      const pts = new Array(NS + 1); let turns = 0, bad = false, prev = null;
      for (let k = 0; k <= NS; k++) {
        const z = C.scale([Math.cos(TAU * k / NS), Math.sin(TAU * k / NS)], r); const w = F(z); pts[k] = w;
        if (!isFinite(w[0]) || !isFinite(w[1]) || C.abs(w) < 1e-12) { bad = true; prev = null; continue; }
        if (prev) turns += Math.atan2(prev[0] * w[1] - prev[1] * w[0], prev[0] * w[0] + prev[1] * w[1]);
        prev = w;
      }
      return { pts, turns: turns / TAU, bad };
    }
    const nearCircle = list => list.some(a => Math.abs(C.abs(a.z) - r) < 0.012);
    const countIn = list => list.reduce((s, a) => s + (C.abs(a.z) < r ? a.m : 0), 0);

    // ---------- dessin ----------
    let PZ = null;
    function draw() {
      if (!cfg) return;
      const T = kit.theme();
      // ---- calculs ----
      let imgs = [], hyp = null, okArcs = null;
      if (!cfg.rouche) {
        const g = gArg(); const s = sampleImage(g); s.bad = s.bad || nearCircle(zeros) || nearCircle(poles); imgs = [{ s, color: T.accent, label: 'g(Γ)' }];
      } else {
        if (!cfg.fc) fFn = ratFn(fZeros, []);
        const sg = sampleImage(gFn), sf = sampleImage(fFn); sg.bad = sg.bad || nearCircle(gZeros); sf.bad = sf.bad || nearCircle(fZeros);
        imgs = [{ s: sg, color: T.accent, label: 'g(Γ) maître' }, { s: sf, color: T.accent2, label: 'f(Γ) chien' }];
        okArcs = sg.pts.map((wg, k) => C.abs(C.sub(sf.pts[k], wg)) < C.abs(wg));
        let mn = Infinity; sg.pts.forEach((wg, k) => { mn = Math.min(mn, C.abs(wg) - C.abs(C.sub(sf.pts[k], wg))); });
        hyp = { ok: okArcs.every(Boolean), margin: mn };
      }
      // ---- plan des z ----
      const ctx = stZ.ctx; stZ.clear(); ctx.fillStyle = T.bg; ctx.fillRect(0, 0, stZ.W, stZ.H);
      PZ = kit.plane(ctx, { xmin: -view, xmax: view, ymin: -view, ymax: view, W: stZ.W, H: stZ.H });
      const step = view > 3 ? 1 : 0.5;
      PZ.grid(step); PZ.axes({ step: view > 3 ? 1 : 1 });
      // disque U
      { const [cx, cy] = PZ.toPx(0, 0); ctx.save(); ctx.globalAlpha = 0.08; ctx.fillStyle = T.accent; ctx.beginPath(); ctx.arc(cx, cy, r * PZ.sx, 0, TAU); ctx.fill(); ctx.restore(); }
      // cercle Γ, coloré selon l'hypothèse de Rouché
      const circ = k => { const a = TAU * k / NS; return [r * Math.cos(a), r * Math.sin(a)]; };
      if (okArcs) {
        ctx.save(); ctx.lineWidth = 3.2;
        for (let k = 0; k < NS; k += 4) { ctx.strokeStyle = okArcs[k] ? T.accent3 : T.accent2; ctx.beginPath(); ctx.moveTo(...PZ.toPx(...circ(k))); ctx.lineTo(...PZ.toPx(...circ(Math.min(NS, k + 4)))); ctx.stroke(); }
        ctx.restore();
      } else { const pts = []; for (let k = 0; k <= NS; k += 8) pts.push(circ(k)); PZ.curve(pts, { color: T.fg, width: 2.4 }); }
      for (const f of [0.125, 0.625]) { const a = PZ.toPx(...circ(Math.floor(f * NS))), b = PZ.toPx(...circ(Math.floor(f * NS) + 20)); const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy); if (L > 1e-6) kit.arrow(ctx, a[0] - 6 * dx / L, a[1] - 6 * dy / L, a[0] + 6 * dx / L, a[1] + 6 * dy / L, { color: T.fg, width: 2, head: 10 }); }
      PZ.text(r * Math.cos(0.9), r * Math.sin(0.9), 'Γ', { dx: 6, dy: -4, font: 'bold 13px system-ui, sans-serif' });
      // marqueurs
      const mult = (x, y, m, col) => { if (m > 1) PZ.text(x, y, String(m), { dx: 8, dy: 14, color: col, font: 'bold 11px system-ui, sans-serif' }); };
      const zeroMark = (a, col, hollowSquare) => {
        const [px, py] = PZ.toPx(...a.z); ctx.save();
        if (hollowSquare) { ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.strokeRect(px - 6, py - 6, 12, 12); }
        else { ctx.fillStyle = col; ctx.strokeStyle = T.fg; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(px, py, 6, 0, TAU); ctx.fill(); ctx.stroke(); }
        ctx.restore(); mult(a.z[0], a.z[1], a.m, col);
      };
      const poleMark = a => { const [px, py] = PZ.toPx(...a.z); ctx.save(); ctx.strokeStyle = T.accent5; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(px - 6, py - 6); ctx.lineTo(px + 6, py + 6); ctx.moveTo(px + 6, py - 6); ctx.lineTo(px - 6, py + 6); ctx.stroke(); ctx.restore(); mult(a.z[0], a.z[1], a.m, T.accent5); };
      if (!cfg.rouche) { zeros.forEach(a => zeroMark(a, T.accent4)); poles.forEach(poleMark); }
      else { gZeros.forEach(a => zeroMark(a, T.accent, true)); fZeros.forEach(a => zeroMark(a, T.accent2)); }
      // point mobile
      const kt = Math.round(tCur * NS) % NS, zt = circ(kt);
      PZ.point(zt[0], zt[1], { r: 5, color: T.fg, label: 'γ(t)' });
      // légende
      ctx.save(); ctx.font = '11px system-ui, sans-serif'; ctx.textBaseline = 'top'; ctx.fillStyle = T.muted;
      ctx.fillText('plan des z', 8, 6);
      if (cfg.rouche) { ctx.fillStyle = T.accent2; ctx.fillText('● zéros de f', 8, 22); ctx.fillStyle = T.accent; ctx.fillText('□ zéros de g = ' + cfg.gTex, 8, 37); }
      else { ctx.fillStyle = T.accent4; ctx.fillText('● zéros de g', 8, 22); ctx.fillStyle = T.accent5; ctx.fillText('✕ pôles de g', 8, 37); }
      ctx.restore();

      // ---- plan des w ----
      const cw = stW.ctx; stW.clear(); cw.fillStyle = T.bg; cw.fillRect(0, 0, stW.W, stW.H);
      const mags = []; imgs.forEach(im => im.s.pts.forEach(w => { const a = C.abs(w); if (isFinite(a)) mags.push(a); }));
      mags.sort((a, b) => a - b);
      const med = mags.length ? mags[Math.floor(mags.length / 2)] : 1, mx = mags.length ? mags[mags.length - 1] : 1;
      const comp = cComp.value, s0 = Math.max(1e-9, med);
      const map = w => { if (!comp) return w; const a = C.abs(w); if (!isFinite(a)) return [NaN, NaN]; return a < 1e-15 ? [0, 0] : C.scale(w, 1 / (a + s0)); };
      const S = comp ? 1.05 : Math.max(1e-6, Math.min(mx, 6 * med)) * 1.12;
      const PW = kit.plane(cw, { xmin: -S, xmax: S, ymin: -S, ymax: S, W: stW.W, H: stW.H });
      const nice = x => { const p = Math.pow(10, Math.floor(Math.log10(x))); const m = x / p; return (m < 1.5 ? 1 : m < 3.5 ? 2 : 5) * p; };
      if (!comp) { const stp = nice(S / 2.2); PW.grid(stp); PW.axes({ step: stp }); }
      else { PW.grid(0.25); PW.axes({ labels: false }); PW.circle(0, 0, 1, { color: T.grid, width: 1, dash: [3, 3] }); }
      // disque « laisse » et laisse
      const wg = imgs[0].s.pts[kt];
      if (cfg.rouche) {
        const wf = imgs[1].s.pts[kt];
        if (!comp && isFinite(C.abs(wg))) PW.circle(wg[0], wg[1], C.abs(wg), { color: T.muted, width: 1.2, dash: [5, 4] });
        const a = map(wg), b = map(wf);
        PW.curve([a, b], { color: T.accent4, width: 2.4 });
      }
      imgs.forEach(im => { const pts = im.s.pts.map(map); PW.curve(pts, { color: im.color, width: 2 }); });
      imgs.forEach(im => { const p = map(im.s.pts[kt]); if (isFinite(p[0])) PW.point(p[0], p[1], { r: 5, color: im.color }); });
      // poteau
      { const [ox, oy] = PW.toPx(0, 0); cw.save(); cw.strokeStyle = T.fg; cw.lineWidth = 2.5; cw.beginPath(); cw.moveTo(ox - 6, oy - 6); cw.lineTo(ox + 6, oy + 6); cw.moveTo(ox + 6, oy - 6); cw.lineTo(ox - 6, oy + 6); cw.stroke();
        cw.font = '11px system-ui, sans-serif'; cw.fillStyle = T.fg; cw.fillText('0', ox + 7, oy - 7); cw.restore(); }
      cw.save(); cw.font = '11px system-ui, sans-serif'; cw.textBaseline = 'top'; cw.fillStyle = T.muted; cw.fillText(comp ? 'plan des w (échelle compressée)' : 'plan des w', 8, 6);
      imgs.forEach((im, i) => { cw.fillStyle = im.color; cw.fillText('— ' + im.label, 8, 22 + 15 * i); });
      if (cfg.rouche) { cw.fillStyle = T.accent4; cw.fillText('— laisse f − g', 8, 52); }
      cw.restore();

      // ---- lectures ----
      const fmt = v => { const x = +v.toFixed(3); return (Object.is(x, -0) ? 0 : x).toFixed(3).replace('-', '−'); };
      if (!cfg.rouche) {
        const s = imgs[0].s;
        ro1.set(`${countIn(zeros)} − ${countIn(poles)} = ${countIn(zeros) - countIn(poles)}`);
        ro2.set(s.bad ? 'zéro ou pôle sur Γ : non défini' : String(Math.round(s.turns)));
        ro3.set(s.bad ? '—' : fmt(s.turns));
      } else {
        const [sg, sf] = [imgs[0].s, imgs[1].s];
        ro1.set(hyp.ok ? `vraie (marge min ${fmt(hyp.margin)})` : 'fausse sur les arcs rouges');
        ro2.set(`g : ${sg.bad ? '—' : Math.round(sg.turns)}, f : ${sf.bad ? '—' : Math.round(sf.turns)}`);
        ro3.set(`Z(f,U) = ${countIn(fZeros)}, Z(g,U) = ${countIn(gZeros)}`);
      }
    }

    // ---------- animation ----------
    function stopAnim() { if (anim) { anim.stop(); anim = null; } btn.textContent = '▶ promener'; }
    function toggleAnim() {
      if (anim) { stopAnim(); return; }
      btn.textContent = '⏸ pause';
      anim = kit.animate(dt => { tCur = (tCur + dt / 6) % 1; sT.value = tCur; draw(); });
    }

    // ---------- glisser les zéros / pôles ----------
    let dragged = null;
    const offDrag = kit.drag(stZ.canvas, {
      onDown: p => { if (!PZ) return; let best = null, bd = 18; for (const a of dragList) { const [x, y] = PZ.toPx(...a.z); const d = Math.hypot(p.x - x, p.y - y); if (d < bd) { bd = d; best = a; } } dragged = best; },
      onMove: (p, ev, down) => {
        if (!PZ) return;
        if (!down) { stZ.canvas.style.cursor = dragList.some(a => { const [x, y] = PZ.toPx(...a.z); return Math.hypot(p.x - x, p.y - y) < 18; }) ? 'grab' : 'default'; return; }
        if (!dragged) return; const w = PZ.toWorld(p.x, p.y);
        dragged.z = [Math.max(-view, Math.min(view, w[0])), Math.max(-view, Math.min(view, w[1]))]; draw();
      },
      onUp: () => { dragged = null; },
    });

    stZ.onResize = () => draw(); stW.onResize = () => draw();
    load('r1');
    return () => { stopAnim(); offDrag(); stZ.destroy(); stW.destroy(); };
  }
});

} catch (e) { console.error('viz viz-ch02-rouche-chien failed to register', e); }

// ---- content/ch04/viz/viz-ch04-grillage-conforme.js ----
try {
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

} catch (e) { console.error('viz viz-ch04-grillage-conforme failed to register', e); }

// ---- content/ch04/viz/viz-ch04-joukovski-ecoulement.js ----
try {
FMA.registerViz({
  id: 'viz-ch04-joukovski-ecoulement',
  chapter: 4,
  title: 'Joukovski : du cylindre au profil d’aile',
  description: String.raw`**Ce que l'on voit.** À gauche, le *plan des $z$* : l'écoulement d'un fluide parfait autour d'un cercle de centre $c$ passant par $1$ (rayon $R=|1-c|$), arrivant de l'infini avec l'incidence $\alpha$. Les traits sont les **lignes de courant** $\Im F = \text{const}$, où
$$F(z)=V_0\Big((z-c)\,e^{-i\alpha}+\frac{R^2e^{i\alpha}}{z-c}\Big)$$
est le potentiel complexe ; pour $c=0$, $R=1$, c'est exactement celui de l'Exercice IV.4.1 (poly, p. 84). À droite (en dessous sur un téléphone), le *plan des $w=J(z)=\tfrac12(z+1/z)$* : les **images** de ces lignes par la transformation de Joukovski, qui sont les lignes de courant autour du profil $J(\text{cercle})$. Le fond colore la vitesse $|v|$ rapportée à la vitesse à l'infini (bleu : plus lent, rouge : plus rapide). Les losanges blancs sont les **points d'arrêt** ($v=0$).

**Le lien avec le cours.** $J$ est un biholomorphisme de l'extérieur du cercle sur l'extérieur du profil (pour $c=0$ : de $\{|z|>1\}$ sur $\C\setminus[-1,1]$, et $J(e^{i\theta})=\cos\theta$). Le potentiel des vitesses autour du profil est $\Phi = \Re G$ avec $G = F\circ J^{-1}$ : composée d'une fonction harmonique et d'une fonction holomorphe, il est harmonique ([[ch04-composition-harmonique-holomorphe|harmonique ∘ holomorphe]]), le bord reste une ligne de courant ($\Im G=\Im F\circ J^{-1}$ est constante sur $J(\text{cercle})$), et comme $J$ conserve les angles là où $J'\neq0$, la condition d'étanchéité $\partial_n\Phi=0$ est transportée (poly, p. 82 ; [[ch04-joukovski|transformation de Joukovski]]). Pour $\alpha=0$ et $c=0$ : $F = 2V_0\,J(z)$, donc le potentiel autour du disque est $\lambda\,\Re J(z)$.

**À faire.**
* **Plaque plane** ($c=0$), $\alpha\neq0$ : la vitesse $v=\overline{G'(w)}$ avec $G'(w)=F'(z)/J'(z)$ **explose** aux deux bouts $w=\pm1$ de la plaque, car $J'(\pm1)=0$ alors que $F'(\pm1)\neq0$ (question 5 de l'exercice). Mettez $\alpha=0$ : $F'(\pm1)=0$ et tout redevient fini.
* **Glissez le centre $c$** (cliquer-glisser à gauche, avec $\Re c\le0$) : le cercle passe toujours par le point critique $z=1$ de $J$, d'où un **bord de fuite pointu** en $w=1$ ; si $\Re c<0$, le point $-1$ est à l'intérieur et le bord d'attaque est arrondi. Avec $\Im c>0$, le profil est **cambré**.
* **Condition de Kutta** (hors programme, pour la culture) : on ajoute au potentiel le terme $\frac{i\Gamma}{2\pi}\log(z-c)$, dont la partie imaginaire $\frac{\Gamma}{2\pi}\ln|z-c|$ est harmonique et constante sur le cercle, qui reste donc une ligne de courant ($\log$ est multiforme sur $\C\setminus\{c\}$, mais $\Im F$ et la vitesse $F'$ sont bien définies). On choisit la **circulation** $\Gamma$ pour que $F'(1)=0$ : la vitesse au bord de fuite devient finie, le point d'arrêt arrière se place exactement en $w=1$, et l'écoulement devient dissymétrique (c'est l'origine de la **portance**).`,
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
    sel.select.style.maxWidth = '240px';
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

} catch (e) { console.error('viz viz-ch04-joukovski-ecoulement failed to register', e); }

// ---- content/ch04/viz/viz-ch04-moyenne-maximum.js ----
try {
FMA.registerViz({
  id: 'viz-ch04-moyenne-maximum',
  chapter: 4,
  title: 'Fonctions harmoniques : moyenne sur un cercle et principe du maximum',
  description: String.raw`**Ce que l'on voit.** La carte colore chaque point $z$ selon la valeur de $h(z)$ **comparée à $h(z_0)$** : rouge si $h(z) > h(z_0)$, bleu si $h(z) < h(z_0)$ (fines lignes : lignes de niveau de $h$ ; trait épais : la ligne de niveau $h = h(z_0)$ qui passe par le centre). Le cercle $C(z_0,r)$ se déplace à la souris (ou au doigt) ; son rayon se règle au curseur. La bande du bas trace $\theta\mapsto h(z_0+re^{i\theta})$ sur $[0,2\pi]$, avec en pointillé la valeur au centre $h(z_0)$ et en orange la moyenne sur le cercle.

**Le théorème.** Une fonction $h$ harmonique réelle ($C^2$ et $\Delta h = \partial_x^2 h+\partial_y^2 h = 0$, [[ch04-harmonique-def|définition]]) vérifie, pour tout disque fermé $\bar D(z_0,r)\subset\Omega$,
$$h(z_0)=\tfrac1{2\pi}\int_0^{2\pi}h(z_0+re^{i\theta})\,d\theta$$
et, sur un ouvert connexe, n'a **aucun maximum local** sauf si elle est constante (poly, Corollaire IV.2.5, p. 77 ; [[ch04-harmonique-moyenne-maximum|fiche]]).

**À faire.**
* Avec une fonction harmonique ($x^2-y^2$, $\Re(z^3)$, $e^x\cos y$), déplacez le cercle et changez $r$ : « valeur au centre » et « moyenne » coïncident toujours. Dans la bande du bas, l'aire rouge (au-dessus de $h(z_0)$) compense exactement l'aire bleue. Le trait épais traverse **toujours** le cercle : il y a du rouge et du bleu sur tout cercle, donc $z_0$ n'est jamais un maximum local. Le maximum sur le disque fermé (triangle ▲) est toujours **sur le bord** : c'est ce qui donne l'unicité des problèmes de Dirichlet (poly, Remarque IV.2.6, p. 77 ; [[ch04-maximum-unicite-bord|fiche]]).
* Avec $-(x^2+y^2)$ (non harmonique, $\Delta = -4$) placez $z_0$ en $0$ : tout est bleu autour, la moyenne est **strictement plus petite** que la valeur au centre et le maximum est **intérieur**. Avec $x^2+y^2$ ($\Delta = 4$) c'est l'inverse : la moyenne vaut $|z_0|^2+r^2 > h(z_0)$ et, en $z_0=0$, c'est le **minimum** qui est intérieur (pour $h$ harmonique, le principe du maximum appliqué à $-h$ interdit aussi un minimum local).
* Avec $\log|z|$ ou $\Re(1/z)$, harmoniques sur $\C^\times = \C\setminus\{0\}$ seulement : tant que le disque fermé évite $0$, l'égalité tient ; dès que $0$ est dans le disque (cercle en tirets), l'hypothèse $\bar D(z_0,r)\subset\Omega$ tombe et l'égalité est fausse : pour $\log|z|$ la moyenne vaut alors $\log r$ (et non $\log|z_0|$), pour $\Re(1/z)$ elle vaut $0$ (théorème des résidus).
* Le bouton anime $r$ : l'égalité vaut pour **tous** les rayons, pas seulement pour $r$ petit.`,
  related: ['ch04-harmonique-moyenne-maximum', 'ch04-harmonique-def', 'ch04-maximum-unicite-bord', 'ch04-holomorphe-implique-harmonique', 'ch04-harmonique-reelle-partie-reelle'],
  height: 520,
  mount(container, kit) {
    const st = kit.canvas(container, { height: 330 });
    const st2 = kit.canvas(container, { height: 130 });
    const controls = kit.controls(container);
    const L = { x: -2.1, X: 2.1, y: -2.1, Y: 2.1 };
    const FN = {
      // lap : laplacien exact (Δh = h_xx + h_yy), affiché dans la lecture « Δh(z₀) »
      x2y2: { name: 'x² − y² = Re(z²)  (harmonique)', h: (x, y) => x * x - y * y, lap: 0, z0: [0.4, 0.3], r: 1 },
      cube: { name: 'x³ − 3xy² = Re(z³)  (harmonique)', h: (x, y) => x * x * x - 3 * x * y * y, lap: 0, z0: [0, 0], r: 1 },
      expc: { name: 'eˣ cos y = Re(eᶻ)  (harmonique)', h: (x, y) => Math.exp(x) * Math.cos(y), lap: 0, z0: [0, 0.5], r: 1.2 },
      log: { name: 'log|z|  (harmonique sur ℂ∖{0})', h: (x, y) => 0.5 * Math.log(x * x + y * y), lap: 0, z0: [1, 0.4], r: 0.6, sing: true },
      rinv: { name: 'Re(1/z)  (harmonique sur ℂ∖{0})', h: (x, y) => x / (x * x + y * y), lap: 0, z0: [1, 0.5], r: 0.6, sing: true },
      bump: { name: '−(x² + y²)  (NON harmonique)', h: (x, y) => -(x * x + y * y), lap: -4, z0: [0, 0], r: 1, nonh: true },
      bowl: { name: 'x² + y²  (NON harmonique)', h: (x, y) => x * x + y * y, lap: 4, z0: [0.3, 0.2], r: 1, nonh: true },
    };
    const sel = kit.select(controls, { label: '$h=$', options: Object.keys(FN).map(k => [FN[k].name, k]), value: 'x2y2', onChange: () => { const F = FN[sel.value]; z0 = F.z0.slice(); sR.value = F.r; computeGrid(); draw(); } });
    sel.select.style.maxWidth = '240px';
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
      // max / min sur le disque fermé : on échantillonne l'intérieur (29 cercles × 96 angles + le centre), puis le bord
      // finement (les 720 valeurs de `ring`) ; le bord ne « gagne » que s'il fait au moins aussi bien que l'intérieur.
      let best = -Infinity, bx = 0, by = 0, onB = false, worst = Infinity, wx = 0, wy = 0, onBmin = false;
      for (let i = 0; i < 30; i++) { const rr = r * i / 30; const na = i === 0 ? 1 : 96;
        for (let k = 0; k < na; k++) { const t = 2 * Math.PI * k / na, x = z0[0] + rr * Math.cos(t), y = z0[1] + rr * Math.sin(t), v = h(x, y);
          if (!isFinite(v)) continue;
          if (v > best + 1e-12) { best = v; bx = x; by = y; }
          if (v < worst - 1e-12) { worst = v; wx = x; wy = y; } } }
      for (let k = 0; k < N; k++) { const v = ring[k]; if (!isFinite(v)) continue; const t = 2 * Math.PI * k / N;
        if (v >= best - 1e-12) { best = v; bx = z0[0] + r * Math.cos(t); by = z0[1] + r * Math.sin(t); onB = true; }
        if (v <= worst + 1e-12) { worst = v; wx = z0[0] + r * Math.cos(t); wy = z0[1] + r * Math.sin(t); onBmin = true; } }
      const lap = (F.sing && !(Math.hypot(z0[0], z0[1]) > 0)) ? NaN : F.lap;
      const broken = !!F.sing && Math.hypot(z0[0], z0[1]) <= r + 1e-9;
      return { h0, mean, ring, best, bx, by, onB, worst, wx, wy, onBmin, lap, broken };
    }

    // ---------- dessin ----------
    function draw() {
      if (!grid || !P) computeGrid();
      const t = kit.theme(), ctx = st.ctx, F = FN[sel.value], S = stats(), r = sR.value;
      const bg = rgbOf(t.bg);
      // échelle de couleur : écart typique |h - h0| sur la fenêtre
      const { nx, ny, v } = grid; let acc = 0, n = 0;
      const [i0, j1] = P.toPx(L.x, L.y), [i1, j0] = P.toPx(L.X, L.Y);
      for (let j = Math.max(0, Math.floor(j0 / CELL)); j < Math.min(ny, Math.ceil(j1 / CELL)); j += 2) for (let i = Math.max(0, Math.floor(i0 / CELL)); i < Math.min(nx, Math.ceil(i1 / CELL)); i += 2) {
        const d = Math.abs(v[j * nx + i] - S.h0); if (isFinite(d)) { acc += Math.min(d, 50); n++; } }
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
      roL.set(!isFinite(S.lap) ? 'non défini (0 ∉ Ω)' : S.lap === 0 ? '0 (harmonique)' : S.lap.toFixed(0) + ' (non harmonique)');
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
      ctx.fillText(W < 520 ? 'h(z₀ + r·e^(iθ))' : 'h(z₀ + r·e^(iθ)) en fonction de θ', left + 4, 2); // titre court sur écran étroit (évite le chevauchement avec la légende)
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
* Bouton « $t=-s$ » : le rose revient exactement sur $A$, c'est $F(s,0,F(0,s,x))=x$ (Corollaire VII.3.8) : l'inverse de $F(0,s,\cdot)$ est $F(s,0,\cdot)$. Dans le cas autonome, $F(s,0,\cdot)=F(0,-s,\cdot)=F_{-s}$ est l'inverse de $F_s$ ; dans le cas non autonome, l'inverse de $F(0,s,\cdot)$ n'est **pas** $F(0,-s,\cdot)$ : avec $t=-s$ et la case « composition naïve » cochée, l'orange $F(0,-s,F(0,s,A))$ ne revient pas sur $A$.

Les flèches grises représentent le champ (à l'instant $0$ pour le champ non autonome). Pour ces cinq champs, toutes les courbes intégrales maximales sont définies sur $\mathbb R$ tout entier (pour les quatre champs autonomes, $D_0=\mathbb R\times U$, donc $t\mapsto F_t$ est un vrai morphisme de groupes de $(\mathbb R,+)$ dans les bijections du plan ; pour le champ non autonome, $D=\mathbb R\times\mathbb R\times U$ et ce sont les applications $F(s,t,\cdot)$ qui se composent : $F(t,u,\cdot)\circ F(s,t,\cdot)=F(s,u,\cdot)$). Observe aussi la déformation du quadrillage : la selle étire d'un facteur $e^{s}$ selon $x$ et écrase d'un facteur $e^{-s}$ selon $y$, la rotation déplace $A$ rigidement, le pendule et le champ polynomial le tordent ; mais les cinq champs sont de divergence nulle, donc leur flot **conserve l'aire** de $A$ (selle comprise : $e^{s}e^{-s}=1$).`,
  related: ['ch07-groupe-un-parametre', 'ch07-translation-temps-autonome', 'ch07-composition-flot', 'ch07-flot-inverse', 'ch07-flot-global-def', 'ch07-proprietes-flot-formules'],
  height: 520,
  mount(container, kit) {
    const st = kit.canvas(container, { height: 380 });
    const controls = kit.controls(container);
    const fields = {
      rot: { label: 'rotation (−y, x)', auto: true, X: (t, x, y) => [-y, x] },
      selle: { label: 'selle (x, −y)', auto: true, X: (t, x, y) => [x, -y] },
      pend: { label: 'pendule (y, −sin x)', auto: true, X: (t, x, y) => [y, -Math.sin(x)] },
      poly: { label: 'polynomial (y − y⁵, x)', auto: true, X: (t, x, y) => [y - Math.pow(y, 5), x] },
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
      ctx.save(); ctx.font = '12px system-ui, sans-serif'; ctx.fillStyle = T.fg; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
      ctx.fillText(F.auto ? 'champ autonome' : 'champ dépendant du temps', 6, H - 6); ctx.restore(); // bottom-left : the y label sits at the top centre
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
* **En bas** : les écarts $\Vert\varphi_{j+1}-\varphi_j\Vert_\infty$ en échelle logarithmique (barres) et la borne géométrique $\Vert\varphi_{j+1}-\varphi_j\Vert_\infty\le(bk)^j\,\Vert\varphi_1-\varphi_0\Vert_\infty\le 2^{-j}\Vert\varphi_1-\varphi_0\Vert_\infty$ que donne le théorème du point fixe de Banach (ligne orange pleine pour $2^{-j}$, pointillée pour $(bk)^j$). Elle n'est une majoration que **si les deux conditions ci-dessous sont vérifiées** (c'est ce qui garantit que les itérées restent dans la boîte, où $k$ est la constante de Lipschitz) ; sinon les barres peuvent la dépasser.
* **Les deux conditions de la preuve** (poly, Lemme VII.2.7 et preuve du Théorème VII.2.1, p. 130-131) sont testées en direct : $b\ell< a$ assure que $S$ **envoie la boîte dans elle-même** (les itérées restent dans le cône), $bk\le \frac12$ assure que $S$ est **$\frac12$-contractante**. (Ici $x=x_0$, donc $b\ell\le 2a$ suffirait pour la stabilité ; la marge $a$ sert dans le poly à faire varier la condition initiale $x\in B(x_0,a)$ avec le même $b$, c'est ce qui donne un $\epsilon$ uniforme.) Augmente $b$ avec $\alpha'=\alpha^2$ : les conditions tombent, les itérées sortent de la boîte et finissent par diverger (la vraie solution $x/(1-tx)$ explose en $t=1/x$).

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
      const q = b * k > 0 ? b * k : 0; // (bk)^j line, drawn even when bk > 1/2 (it then grows : Banach gives nothing)
      ctx.strokeStyle = T.accent4; ctx.lineWidth = 2; ctx.beginPath();
      for (let j = 0; j < NMAX; j++) { const x = left + slot * (j + 0.5); const y = yOf(Math.max(lmin, Math.min(lmax, L(d0) + j * Math.log10(0.5)))); j ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.stroke();
      if (q > 0 && Math.abs(q - 0.5) > 1e-9) { ctx.setLineDash([3, 3]); ctx.lineWidth = 1.3; ctx.beginPath();
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

} catch (e) { console.error('viz viz-ch07-temps-de-vie failed to register', e); }

// ---- content/ch08/viz/viz-ch08-action-variations.js ----
try {
FMA.registerViz({
  id: 'viz-ch08-action-variations',
  chapter: 8,
  title: 'Faire varier une courbe : l’action et sa différentielle',
  description: String.raw`**Le cadre.** Positions dans $V=\mathbb R$, Lagrangien mécanique $L(u,q,v)=\tfrac12v^2-U(q)$ (énergie cinétique moins potentiel, [[ch08-equation-newton]]), extrémités fixées $a=\gamma(0)=0$, $b=\gamma(1)=1$. Une **courbe** est un élément $\gamma$ de $E_{a,b}$ (courbes $C^1$ de $[0;1]$ dans $V$ avec $\gamma(0)=a$, $\gamma(1)=b$, [[ch08-cadre-espace-courbes]]) ; une **variation admissible** est un $h\in E_{0,0}$ ($h(0)=h(1)=0$), de sorte que $\gamma+sh\in E_{a,b}$ pour tout réel $s$. L'**action** est $\hat L(\gamma)=\int_0^1L(t,\gamma(t),\gamma'(t))\,dt$ ([[ch08-lagrangien-fonctionnelle]]).

**Ce qui est tracé.**
* **En haut**, dans le plan $(t,q)$ : la courbe de base $\gamma_0$ (bleu, **déformable en glissant les deux poignées**), la courbe variée $\gamma_0+sh$ (rose) et, en vert pointillé, la solution $\gamma_*$ de l'équation d'Euler-Lagrange (E.L) $\gamma''=-U'(\gamma)$ reliant $a$ à $b$.
* **Au milieu** : la fonction d'une variable réelle $\varphi(s)=\hat L(\gamma_0+sh)$ et, en pointillé, sa tangente en $s=0$, de pente $\varphi'(0)=d\hat L_{\gamma_0}(h)$. C'est exactement ce qu'est une différentielle sur un espace de courbes : la dérivée de l'action **dans la direction** $h$.
* **En bas** : le **résidu** d'Euler-Lagrange $R(t)=\frac{\partial L}{\partial q}-\frac{d}{dt}\frac{\partial L}{\partial v}=-U'(\gamma_0(t))-\gamma_0''(t)$ (rose), la variation $h$ (bleu), et l'aire signée de $R\,h$ (vert si positive, orange si négative).

**Quoi regarder.**
1. Les trois nombres affichés coïncident : la formule de [[ch08-lhat-c1-differentielle]] $d\hat L_{\gamma_0}(h)=\int_0^1\big(\frac{\partial L}{\partial q}\,h+\frac{\partial L}{\partial v}\,h'\big)dt$, sa version intégrée par parties $\int_0^1R\,h\,dt$ (le terme de bord $\big[\frac{\partial L}{\partial v}h\big]_0^1$ est nul car $h(0)=h(1)=0$), et la pente numérique de $\varphi$.
2. Bouton « revenir sur la solution » : alors $R\equiv0$ et la tangente est **horizontale pour toutes les directions** $h$ : $\gamma_*$ est un point critique de $\hat L$ restreinte à $E_{a,b}$ ([[ch08-euler-lagrange]]).
3. Déforme $\gamma_0$ : $R\not\equiv0$. Choisis la direction « $h$ adaptée au résidu » ($h=\tfrac1m\,4t(1-t)R$ avec $m=\max|4t(1-t)R|$, pour garder $|h|\le1$ ; $h$ est $C^1$ et nulle aux bords) : la pente vaut $\int_0^1R\,h\,dt=\tfrac1m\int_0^14t(1-t)R^2\,dt>0$. C'est le mécanisme de [[ch08-du-bois-reymond]] et [[ch08-du-bois-reymond-derivee]] : si (E.L) n'est pas satisfaite, on fabrique une variation nulle aux bords qui fait varier l'action au premier ordre. Même chose avec la petite « bosse en $t_0$ » placée là où $R>0$.
4. Potentiel oscillateur $U=\tfrac12\omega^2q^2$ et $h=\sin(\pi t)$ : $\varphi''(0)=\int_0^1(h'^2-\omega^2h^2)=\tfrac12(\pi^2-\omega^2)$. Pour $\omega<\pi$ la solution est un **minimum** dans cette direction, pour $\omega>\pi$ c'est un **col** : $\varphi$ est concave dans la direction $\sin(\pi t)$ mais encore convexe dans la direction $\sin(2\pi t)$, où $\varphi''(0)=\tfrac12(4\pi^2-\omega^2)>0$ tant que $\omega<2\pi$ (vérifie-le avec le menu). (E.L) caractérise les points **critiques**, pas les minima. Près de $\omega=\pi$, la solution $\gamma_*(t)=\sin(\omega t)/\sin\omega$ explose (en $\omega=\pi$ il n'y en a aucune).
5. Avec $U=0$ ou $U=gq$, $\varphi$ est une parabole convexe : l'action est quadratique en $s$, de coefficient $\tfrac12\int h'^2>0$.`,
  related: ['ch08-lhat-c1-differentielle', 'ch08-euler-lagrange', 'ch08-du-bois-reymond', 'ch08-du-bois-reymond-derivee', 'ch08-lagrangien-fonctionnelle', 'ch08-equation-newton', 'ch08-cadre-espace-courbes'],
  height: 640,
  mount(container, kit) {
    const st = kit.canvas(container, { height: 520 });
    const controls = kit.controls(container);
    const A = 0, B = 1; // extrémités
    const pots = {
      libre: { label: 'U = 0 (particule libre)', par: null },
      grav: { label: 'U(q) = g q (pesanteur)', par: { name: '$g$', min: 0, max: 20, step: 0.5, value: 8 } },
      harm: { label: 'U(q) = ω² q²/2 (oscillateur)', par: { name: '$\\omega$', min: 0.5, max: 4.5, step: 0.05, value: 2 } },
    };
    let parVals = { grav: 8, harm: 2 };
    const selU = kit.select(controls, { label: 'potentiel', options: Object.keys(pots).map(k => [pots[k].label, k]), value: 'harm', onChange: () => { syncPar(); draw(); } });
    const par = kit.slider(controls, { label: 'paramètre', min: 0.5, max: 4.5, step: 0.05, value: 2, onChange: v => { parVals[selU.value] = v; draw(); } });
    const dirs = [['h = sin(πt)', 'sin1'], ['h = sin(2πt)', 'sin2'], ['h = sin(3πt)', 'sin3'], ['bosse en t₀', 'bump'], ['h adaptée au résidu', 'adapt']];
    const selH = kit.select(controls, { label: 'direction $h$', options: dirs, value: 'sin1', onChange: () => draw() });
    const sS = kit.slider(controls, { label: '$s$', min: -1, max: 1, step: 0.01, value: 0.4, onChange: () => { stopAnim(); draw(); } });
    const sT0 = kit.slider(controls, { label: '$t_0$ (bosse)', min: 0.15, max: 0.85, step: 0.01, value: 0.35, onChange: () => draw() });
    kit.button(controls, { label: 'revenir sur la solution', onClick: () => { d1 = 0; d2 = 0; draw(); } });
    const bPlay = kit.button(controls, { label: '▶ animer s', primary: true, onClick: () => toggleAnim() });
    const ro1 = kit.readout(controls, { label: 'action' });
    const ro2 = kit.readout(controls, { label: 'pente en $s=0$' });
    const ro3 = kit.readout(controls, { label: 'courbure' });
    const note = document.createElement('div'); note.className = 'viz-note'; container.appendChild(note);
    const fx = (v, d) => (Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v).toFixed(d);
    [ro1, ro2, ro3].forEach(r => { r.el.style.maxWidth = '100%'; r.el.style.flexWrap = 'wrap'; const v = r.el.querySelector('.viz-readout-val'); if (v) { v.style.minWidth = '0'; v.style.overflowWrap = 'anywhere'; } });

    function setLabel(sl, tex) { const el = sl.el.querySelector('.viz-ctl-label'); if (!el) return; el.innerHTML = (window.FMA && FMA.render) ? FMA.render(tex, { inline: true }) : tex; }
    function syncPar() {
      const p = pots[selU.value].par;
      if (!p) { par.input.disabled = true; setLabel(par, '(sans paramètre)'); par.el.style.opacity = 0.5; return; }
      par.input.disabled = false; par.el.style.opacity = 1; par.input.min = p.min; par.input.max = p.max; par.input.step = p.step;
      par.value = parVals[selU.value]; setLabel(par, p.name);
    }

    // ---- solution de (E.L) gamma'' = -U'(gamma), gamma(0)=A, gamma(1)=B : renvoie [g, g', g'', g'''] ----
    function model() {
      const k = selU.value;
      if (k === 'libre') return { U: q => 0, dU: q => 0, d2U: q => 0, ok: true, sol: t => [A + (B - A) * t, B - A, 0, 0] };
      if (k === 'grav') { const g = parVals.grav; return { U: q => g * q, dU: q => g, d2U: q => 0, ok: true, sol: t => [A + (B - A) * t + g / 2 * t * (1 - t), (B - A) + g / 2 * (1 - 2 * t), -g, 0] }; }
      const w = parVals.harm, sw = Math.sin(w), c = (B - A * Math.cos(w)) / sw;
      return { U: q => 0.5 * w * w * q * q, dU: q => w * w * q, d2U: q => w * w, ok: Math.abs(sw) > 0.06, w,
        sol: t => { const co = Math.cos(w * t), si = Math.sin(w * t); return [A * co + c * si, w * (-A * si + c * co), -w * w * (A * co + c * si), -w * w * w * (-A * si + c * co)]; } };
    }
    // ---- perturbation polynomiale p(t)=t(1-t)(alpha+beta t), p(1/3)=d1, p(2/3)=d2 ----
    let d1 = 0.35, d2 = -0.25;
    function pert(t) { const be = 13.5 * (d2 - d1), al = 9 * d1 - 4.5 * d2; return [al * t + (be - al) * t * t - be * t * t * t, al + 2 * (be - al) * t - 3 * be * t * t, 2 * (be - al) - 6 * be * t, -6 * be]; }
    const N = 400; const ts = Array.from({ length: N + 1 }, (_, i) => i / N);
    function simpson(f) { let s = f[0] + f[N]; for (let i = 1; i < N; i++) s += (i % 2 ? 4 : 2) * f[i]; return s / (3 * N); }

    let P = null, G = null; // plan du panneau du haut, géométrie
    let anim = null, ph = 0;
    function stopAnim() { if (anim) { anim.stop(); anim = null; } bPlay.textContent = '▶ animer s'; }
    function toggleAnim() { if (anim) { stopAnim(); return; } bPlay.textContent = '⏸ pause'; ph = Math.asin(Math.max(-1, Math.min(1, sS.value))); anim = kit.animate(dt => { ph += dt * 1.6; sS.value = Math.round(Math.sin(ph) * 100) / 100; draw(); }); }

    function panel(x, y, w, h, fn) { const { ctx } = st; ctx.save(); ctx.translate(x, y); ctx.beginPath(); ctx.rect(0, 0, w, h); ctx.clip(); try { fn(); } finally { ctx.restore(); } }
    function label(x, y, s, color, align = 'left') { const { ctx } = st; const T = kit.theme(); ctx.save(); ctx.font = '12px system-ui, sans-serif'; const w = ctx.measureText(s).width; const xl = align === 'right' ? x - w : x; ctx.globalAlpha = 0.85; ctx.fillStyle = T.bg; ctx.fillRect(xl - 3, y - 1, w + 6, 15); ctx.globalAlpha = 1; ctx.fillStyle = color; ctx.textAlign = align; ctx.textBaseline = 'top'; ctx.fillText(s, x, y); ctx.restore(); }

    function draw() { try { render(); } catch (e) { console.warn(e); } }
    function render() {
      const T = kit.theme(); const { ctx, W, H } = st; st.clear(); ctx.fillStyle = T.bg; ctx.fillRect(0, 0, W, H);
      const M = model(); const s = sS.value; const kind = selH.value;
      // échantillons de gamma0 = gamma* + p
      const g0 = [], g1 = [], g2 = [], g3 = [], gs = [];
      for (const t of ts) { const a = M.sol(t), b = pert(t); gs.push(a[0]); g0.push(a[0] + b[0]); g1.push(a[1] + b[1]); g2.push(a[2] + b[2]); g3.push(a[3] + b[3]); }
      const R = ts.map((t, i) => -M.dU(g0[i]) - g2[i]);
      const Rp = ts.map((t, i) => -M.d2U(g0[i]) * g1[i] - g3[i]);
      // direction h
      let hv, hd, hZero = false;
      if (kind === 'sin1' || kind === 'sin2' || kind === 'sin3') { const n = +kind.slice(3); hv = ts.map(t => Math.sin(n * Math.PI * t)); hd = ts.map(t => n * Math.PI * Math.cos(n * Math.PI * t)); }
      else if (kind === 'bump') { const c = sT0.value, w = 0.14; hv = ts.map(t => { const u = (t - c) / w; return Math.abs(u) < 1 ? Math.pow(1 - u * u, 3) : 0; }); hd = ts.map(t => { const u = (t - c) / w; return Math.abs(u) < 1 ? -6 * u * Math.pow(1 - u * u, 2) / w : 0; }); }
      else { const raw = ts.map((t, i) => 4 * t * (1 - t) * R[i]), rawd = ts.map((t, i) => 4 * (1 - 2 * t) * R[i] + 4 * t * (1 - t) * Rp[i]); const m = Math.max(...raw.map(Math.abs)); if (m < 1e-9) { hZero = true; hv = ts.map(() => 0); hd = ts.map(() => 0); } else { hv = raw.map(x => x / m); hd = rawd.map(x => x / m); } }
      const action = sv => simpson(ts.map((t, i) => { const v = g1[i] + sv * hd[i], q = g0[i] + sv * hv[i]; return 0.5 * v * v - M.U(q); }));
      const phi0 = action(0), phis = action(s);
      const dQ2 = simpson(ts.map((t, i) => -M.dU(g0[i]) * hv[i] + g1[i] * hd[i]));
      const dIPP = simpson(ts.map((t, i) => R[i] * hv[i]));
      const eps = 1e-3, dFD = (action(eps) - action(-eps)) / (2 * eps);
      const curv = simpson(ts.map((t, i) => hd[i] * hd[i] - M.d2U(g0[i]) * hv[i] * hv[i]));

      // ---- géométrie des panneaux ----
      const pad = 6, wide = W >= 600;
      const hTop = Math.round(H * (wide ? 0.6 : 0.46));
      G = { top: [pad, pad, W - 2 * pad, hTop - pad] };
      if (wide) { const yb = hTop + 8, hb = H - yb - pad, wb = (W - 3 * pad) / 2; G.mid = [pad, yb, wb, hb]; G.bot = [2 * pad + wb, yb, wb, hb]; }
      else { const yb = hTop + 8, hb = (H - yb - 2 * pad) / 2; G.mid = [pad, yb, W - 2 * pad, hb]; G.bot = [pad, yb + hb + pad, W - 2 * pad, hb]; }
      const frame = r => { ctx.save(); ctx.strokeStyle = T.grid; ctx.lineWidth = 1; ctx.strokeRect(r[0] + 0.5, r[1] + 0.5, r[2] - 1, r[3] - 1); ctx.restore(); };

      // ---- panneau du haut : courbes dans le plan (t, q) ----
      let lo = Math.min(...gs, A, B), hi = Math.max(...gs, A, B); lo = Math.max(lo, -9); hi = Math.min(hi, 9); const mq = Math.max(1.1, 0.35 * (hi - lo));
      const [x0, y0, w0, h0] = G.top;
      panel(x0, y0, w0, h0, () => {
        P = kit.plane(ctx, { xmin: -0.08, xmax: 1.08, ymin: lo - mq, ymax: hi + mq, W: w0, H: h0, keepAspect: false });
        const stepY = (hi - lo + 2 * mq) > 8 ? 2 : (hi - lo + 2 * mq) > 4 ? 1 : 0.5;
        P.grid(stepY, T.grid); P.axes({ labels: true, step: stepY, xlabel: 't', ylabel: 'q' });
        const [p1x] = P.toPx(1, 0); ctx.save(); ctx.strokeStyle = T.axis; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(p1x, 0); ctx.lineTo(p1x, h0); ctx.stroke(); ctx.restore();
        if (M.ok) P.curve(ts.map((t, i) => [t, gs[i]]), { color: T.accent3, width: 2, dash: [6, 4] });
        P.curve(ts.map((t, i) => [t, g0[i]]), { color: T.accent, width: 2.5 });
        P.curve(ts.map((t, i) => [t, g0[i] + s * hv[i]]), { color: T.accent2, width: 2 });
        P.point(0, A, { r: 4.5, color: T.fg }); P.point(1, B, { r: 4.5, color: T.fg });
        P.text(0, A, 'a', { dx: 6, dy: -4, color: T.fg }); P.text(1, B, 'b', { dx: -14, dy: -4, color: T.fg });
        for (const [tt, d] of [[1 / 3, d1], [2 / 3, d2]]) { const q = M.sol(tt)[0] + d; P.point(tt, q, { r: 7, color: T.bg, stroke: T.accent }); P.point(tt, q, { r: 3, color: T.accent }); }
        label(8, 6, 'γ₀ (glisser ○)', T.accent); label(8, 21, 'γ₀ + s h', T.accent2); label(8, 36, M.ok ? 'γ* : solution de (E.L)' : 'ω ≈ π : pas de solution (E.L) raisonnable', T.accent3);
      });
      frame(G.top);

      // ---- panneau du milieu : phi(s) ----
      { const [x, y, w, h] = G.mid; const ns = 61, sv = kit.linspace(-1, 1, ns), ph = sv.map(action);
        let a1 = Math.min(...ph, phi0 - Math.abs(dQ2)), a2 = Math.max(...ph, phi0 + Math.abs(dQ2)); if (a2 - a1 < 1e-6) { a1 -= 1; a2 += 1; } const m = 0.12 * (a2 - a1);
        panel(x, y, w, h, () => {
          const Q = kit.plane(ctx, { xmin: -1.12, xmax: 1.12, ymin: a1 - m, ymax: a2 + m * 2.2, W: w, H: h, keepAspect: false });
          const [, pyb] = Q.toPx(0, a1 - m); const [pz] = Q.toPx(0, 0);
          ctx.save(); ctx.strokeStyle = T.axis; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(pz, 0); ctx.lineTo(pz, h); ctx.stroke(); ctx.restore();
          ctx.save(); ctx.fillStyle = T.muted; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'; for (const v of [-1, -0.5, 0.5, 1]) { const [px] = Q.toPx(v, 0); ctx.fillText(String(v), px, h - 2); } ctx.restore();
          Q.curve([[-1.1, phi0 - 1.1 * dQ2], [1.1, phi0 + 1.1 * dQ2]], { color: T.accent2, width: 1.5, dash: [5, 4] });
          Q.curve(sv.map((v, i) => [v, ph[i]]), { color: T.accent, width: 2.2 });
          Q.point(0, phi0, { r: 3.5, color: T.fg }); Q.point(s, phis, { r: 5, color: T.accent2 });
          // graduations verticales : min et max de φ sur [-1, 1], et φ(0)
          ctx.save(); ctx.fillStyle = T.muted; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
          const pmin = Math.min(...ph), pmax = Math.max(...ph); const ticks = [[pmin, 'min'], [pmax, 'max']]; if (Math.abs(phi0 - pmin) > 0.15 * (a2 - a1) && Math.abs(phi0 - pmax) > 0.15 * (a2 - a1)) ticks.push([phi0, 'φ(0)']);
          for (const [v, nm] of ticks) { const [, py] = Q.toPx(0, v); if (py < 18 || py > h - 14) continue; ctx.strokeStyle = T.grid; ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(w, py); ctx.stroke(); ctx.fillText(nm + ' = ' + kit.fmt(+v.toFixed(3)), pz + 4, py - (nm === 'max' ? 7 : -7)); }
          ctx.fillStyle = T.fg; ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'; ctx.fillText('s', w - 4, pyb - 14); ctx.restore();
        });
        frame(G.mid); label(x + 6, y + 4, 'φ(s) = L̂(γ₀ + s h)  — tangente en 0', T.fg); }

      // ---- panneau du bas : résidu R et direction h ----
      { const [x, y, w, h] = G.bot; const mR = Math.max(1, ...R.map(Math.abs));
        panel(x, y, w, h, () => {
          const Q = kit.plane(ctx, { xmin: -0.04, xmax: 1.04, ymin: -1.25, ymax: 1.45, W: w, H: h, keepAspect: false });
          const prod = ts.map((t, i) => R[i] * hv[i]); const mp = Math.max(1e-12, ...prod.map(Math.abs)); const sc = Math.max(...R.map(Math.abs)) < 1e-6 ? 0 : 1 / mp;
          // aire signée de R h (normalisée)
          for (let i = 0; i < N; i++) { const v = prod[i] * sc; if (Math.abs(v) < 1e-9) continue; const [px0, py0] = Q.toPx(ts[i], 0); const [px1, py1] = Q.toPx(ts[i + 1], v); ctx.save(); ctx.globalAlpha = 0.28; ctx.fillStyle = v > 0 ? T.accent3 : T.accent4; ctx.fillRect(px0, Math.min(py0, py1), Math.max(1, px1 - px0 + 0.5), Math.abs(py1 - py0)); ctx.restore(); }
          const [ox, oy] = Q.toPx(0, 0); ctx.save(); ctx.strokeStyle = T.axis; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(w, oy); ctx.moveTo(ox, 0); ctx.lineTo(ox, h); ctx.stroke(); ctx.restore();
          Q.curve(ts.map((t, i) => [t, hv[i]]), { color: T.accent, width: 1.8 });
          Q.curve(ts.map((t, i) => [t, R[i] / mR]), { color: T.accent2, width: 2.2 });
          if (kind === 'bump') { const [pc] = Q.toPx(sT0.value, 0); ctx.save(); ctx.fillStyle = T.muted; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillText('t₀', pc, oy + 3); ctx.restore(); }
        });
        frame(G.bot);
        const rmax = Math.max(...R.map(Math.abs));
        const lR = 'R(t) ' + (rmax < 1e-6 ? '≡ 0' : '(÷ ' + kit.fmt(+mR.toPrecision(2)) + ')'); label(x + 6, y + 4, lR, T.accent2);
        ctx.save(); ctx.font = '12px system-ui, sans-serif'; const wR = ctx.measureText(lR).width; ctx.restore(); label(x + 6 + wR + 18, y + 4, 'h(t)', T.accent); label(x + w - 6, y + 4, 'aire R·h', T.accent3, 'right'); }

      ro1.set(`φ(0) = L̂(γ₀) = ${fx(phi0, 4)} ; φ(s) = ${fx(phis, 4)}`);
      ro2.set(`∫(∂L/∂q·h + ∂L/∂v·h′) = ${fx(dQ2, 4)} ; ∫R·h = ${fx(dIPP, 4)} ; numérique = ${fx(dFD, 4)}`);
      ro3.set(`φ″(0) = ∫(h′² − U″(γ₀)h²) = ${fx(curv, 3)} ${curv > 1e-9 ? '(convexe)' : curv < -1e-9 ? '(concave)' : ''}`);
      const rmax = Math.max(...R.map(Math.abs));
      let msg = rmax < 1e-6 ? 'γ₀ = γ* : (E.L) est satisfaite, R ≡ 0, et la pente φ′(0) est nulle pour TOUTE direction h : point critique.' : 'γ₀ ≠ γ* : R ≢ 0 ; il existe des directions h (nulles aux bords) de pente non nulle, donc γ₀ n’est pas critique.';
      if (hZero) msg += ' (Ici R ≡ 0, donc la direction « adaptée » est nulle.)';
      if (!M.ok) msg = 'ω trop proche de π : sin ω ≈ 0 et le problème aux bords γ″ = −ω²γ, γ(0)=0, γ(1)=1 n’a pas de solution raisonnable (aucune en ω = π).';
      note.textContent = msg;
    }

    // ---- glisser les poignées ----
    let dragging = 0;
    const off = kit.drag(st.canvas, {
      onDown: p => { if (!P || !G) return; const M = model(); const lx = p.x - G.top[0], ly = p.y - G.top[1]; dragging = 0;
        [[1 / 3, d1, 1], [2 / 3, d2, 2]].forEach(([tt, d, k]) => { const [px, py] = P.toPx(tt, M.sol(tt)[0] + d); if (Math.hypot(px - lx, py - ly) < 22) dragging = k; }); },
      onMove: (p, ev, down) => { if (!down || !dragging || !P) return; const M = model(); const [, q] = P.toWorld(p.x - G.top[0], p.y - G.top[1]); const tt = dragging === 1 ? 1 / 3 : 2 / 3; const d = Math.max(-6, Math.min(6, q - M.sol(tt)[0])); if (dragging === 1) d1 = d; else d2 = d; draw(); },
      onUp: () => { dragging = 0; },
    });
    syncPar(); st.onResize = draw; draw();
    return () => { stopAnim(); off(); st.destroy(); };
  }
});

} catch (e) { console.error('viz viz-ch08-action-variations failed to register', e); }

// ---- content/ch08/viz/viz-ch08-noether-rotation.js ----
try {
FMA.registerViz({
  id: 'viz-ch08-noether-rotation',
  chapter: 8,
  title: 'Noether : symétrie de rotation et moment cinétique conservé',
  description: String.raw`**Le cadre.** Mouvement plan : $V=\mathbb R^2$, Lagrangien $L(q,v)=\tfrac12\lVert v\rVert^2-U(q)$, dont l'équation d'Euler-Lagrange est l'équation de Newton $\gamma''=-\nabla U(\gamma)$ ([[ch08-equation-newton]]). Le potentiel est $U(q)=U_0(\lVert q\rVert)+\tfrac{\epsilon}{2}x^2$ pour $q=(x,y)$, avec $U_0(r)=-1/r$ (Kepler, défini seulement sur l'ouvert $V\setminus\{0\}$ : c'est le cas des courbes confinées, [[ch08-courbes-confinees-ouverts]]) ou $U_0(r)=r^2/2$ (oscillateur). Le paramètre $\epsilon$ **casse la symétrie** de rotation.

**Le groupe à un paramètre.** $F_s$ = rotation d'angle $s$ autour de $0$ ; c'est le flot du champ de vecteurs $X(q)=e\wedge q=(-y,x)$ (rotation d'axe $e$ perpendiculaire au plan), car $\frac{\partial F}{\partial s}(s,q)\big|_{s=0}=X(q)$. Comme $F_s$ est linéaire, $d(F_s)_q(v)=F_s(v)$, et $\lVert F_s(v)\rVert=\lVert v\rVert$. Donc $L$ est invariant ([[ch08-groupe-un-parametre-invariance]]) si et seulement si $U\circ F_s=U$, c'est-à-dire si et seulement si $\epsilon=0$.

**La quantité de Noether** ([[ch08-noether]]) : $Q(t)=\frac{\partial L}{\partial v}(\gamma,\gamma')\cdot X(\gamma)=\langle\gamma',e\wedge\gamma\rangle=x\,y'-y\,x'$, la composante selon $e$ du moment cinétique $\gamma\wedge\gamma'$ ([[ch08-moment-cinetique]]). La preuve de la question 12 donne, le long de toute solution de (E.L),
$$\begin{aligned}Q'(t)&=\frac{\partial L}{\partial q}\cdot X(\gamma)+\frac{\partial L}{\partial v}\cdot dX_{\gamma}(\gamma')\\&=y\,\partial_xU-x\,\partial_yU=\epsilon\,x\,y,\end{aligned}$$
et l'identité infinitésimale d'invariance ([[ch08-invariance-infinitesimale]]) dit exactement que ce membre de droite est nul quand $L$ est invariant.

**Quoi regarder.**
1. Avec $\epsilon=0$ : la courbe rose $Q(t)$ est **plate** (moment cinétique conservé), quelle que soit la condition initiale. **Glisse** le point de départ $\gamma(0)$ (gros point) et la pointe du vecteur vitesse $\gamma'(0)$.
2. Avec $\epsilon\neq0$ : $Q$ **oscille**, mais l'énergie $H=\frac{\partial L}{\partial v}\cdot\gamma'-L=\tfrac12\lVert\gamma'\rVert^2+U(\gamma)$ (orange) reste constante : $L$ ne dépend pas du temps, c'est [[ch08-energie-conservee]], une autre symétrie (translation en temps) qui n'a pas été cassée.
3. Curseur $s$ : en vert pointillé, la trajectoire tournée $F_s\circ\gamma$ ; en violet, la vraie solution issue des données tournées $\big(F_s(\gamma(0)),d(F_s)(\gamma'(0))\big)$. Si la symétrie est exacte ($\epsilon=0$), elles coïncident pour tout $s$ et toute donnée initiale : une symétrie du Lagrangien envoie solutions sur solutions (c'est la covariance de (E.L) par changement de variables, [[ch08-changement-de-variables]], appliquée à $\phi=F_{-s}$, pour laquelle $L_1=L$ par invariance : $\beta=F_{-s}\circ(F_s\circ\gamma)=\gamma$ vérifie (E.L) pour $L$, donc $F_s\circ\gamma$ vérifie (E.L) pour $L_1=L$). Si $\epsilon\neq0$, elles se séparent en général (le readout donne l'écart) — sauf coïncidences : $s=0$, et $s=\pi$ car $U(-q)=U(q)$ reste vrai pour tout $\epsilon$ (la symétrie $q\mapsto-q$ n'est pas cassée).
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
    const fx = (v, d) => (Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v).toFixed(d);
    [roQ, roH].forEach(r => { r.el.style.maxWidth = '100%'; r.el.style.flexWrap = 'wrap'; const v = r.el.querySelector('.viz-readout-val'); if (v) { v.style.minWidth = '0'; v.style.overflowWrap = 'anywhere'; } });

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

    function label(x, y, s, color, align = 'left') { const { ctx } = st; const T = kit.theme(); ctx.save(); ctx.font = '12px system-ui, sans-serif'; const w = ctx.measureText(s).width; const xl = align === 'right' ? x - w : x; ctx.globalAlpha = 0.85; ctx.fillStyle = T.bg; ctx.fillRect(xl - 3, y - 1, w + 6, 15); ctx.globalAlpha = 1; ctx.fillStyle = color; ctx.textAlign = align; ctx.textBaseline = 'top'; ctx.fillText(s, x, y); ctx.restore(); }
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
        { const vn = Math.hypot(cur[2], cur[3]); const vs = vn > 2.5 ? 0.6 * 2.5 / vn : 0.6; P.vector(cur[0], cur[1], cur[2], cur[3], { color: T.accent, width: 2, head: 7, scale: vs }); }
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
        ctx.save(); ctx.strokeStyle = T.grid; ctx.lineWidth = 1;
        for (let v = Math.ceil(Qp.ymin / stepY) * stepY; v <= Qp.ymax; v += stepY) { const [, py] = Qp.toPx(0, v); ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(w, py); ctx.stroke(); }
        for (let t = stepT; t <= Tm + 1e-9; t += stepT) { const [px] = Qp.toPx(t, 0); ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, h); ctx.stroke(); }
        const [ox, oy] = Qp.toPx(0, 0); ctx.strokeStyle = T.axis; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(w, oy); ctx.moveTo(ox, 0); ctx.lineTo(ox, h); ctx.stroke();
        ctx.fillStyle = T.muted; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'; for (let t = stepT; t <= Tm + 1e-9; t += stepT) { const [px] = Qp.toPx(t, 0); ctx.fillText(String(t), px, h - 2); }
        ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; for (let v = Math.ceil(Qp.ymin / stepY) * stepY; v <= Qp.ymax; v += stepY) { if (Math.abs(v) < 1e-9) continue; const [, py] = Qp.toPx(0, v); if (py < 22 || py > h - 16) continue; ctx.fillText(kit.fmt(+v.toFixed(2)), ox + 3, py); }
        ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'; ctx.fillStyle = T.fg; ctx.fillText('t', w - 4, oy - 2); ctx.restore();
        Qp.curve(pts.map((p, i) => [p.t, Hs[i]]), { color: T.accent4, width: 2 });
        Qp.curve(pts.map((p, i) => [p.t, Qs[i]]), { color: T.accent2, width: 2.2 });
        const [px] = Qp.toPx(Math.min(tau, sol.Tend), 0); ctx.save(); ctx.strokeStyle = T.fg; ctx.globalAlpha = 0.5; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, h); ctx.stroke(); ctx.restore();
        ctx.restore(); frame(G.bot);
        label(x + 6, y + 4, 'Q(t) = x y′ − y x′', T.accent2); label(x + w - 6, y + 4, 'H(t) = ½|γ′|² + U(γ)', T.accent4, 'right');
        // bilans
        const Q0 = Qs[0], H0 = Hs[0]; let dQ = 0, dH = 0; for (let i = 0; i < Qs.length; i++) { dQ = Math.max(dQ, Math.abs(Qs[i] - Q0)); dH = Math.max(dH, Math.abs(Hs[i] - H0)); }
        let intD = 0; for (let i = 1; i < pts.length; i++) { const a = pts[i - 1].s, b = pts[i].s; intD += (pts[i].t - pts[i - 1].t) * 0.5 * eps * (a[0] * a[1] + b[0] * b[1]); }
        // écart entre F_s∘γ et la vraie solution issue des données tournées (sur l'intervalle de temps commun)
        let dev = 0; { const Tc = Math.min(sol.Tend, solS.Tend); for (const p of sol.pts) { if (p.t > Tc) break; const r = rot([p.s[0], p.s[1]], s), q = sampleAt(solS.pts, p.t).s; dev = Math.max(dev, Math.hypot(r[0] - q[0], r[1] - q[1])); } }
        const Qc = Qof(cur), Hc = Hof(cur);
        roQ.set(`Q(t) = ⟨γ′, X(γ)⟩ = ${fx(Qc, 4)} ; écart max ${dQ.toExponential(1)} ; Q(T) − Q(0) = ${fx((Qs[Qs.length - 1] - Q0), 4)} = ∫ε x y dt = ${fx(intD, 4)}`);
        roH.set(`H(t) = ${fx(Hc, 4)} ; écart max ${dH.toExponential(1)} ; distance max entre F_s∘γ et la solution tournée : ${dev.toExponential(1)}`);
        let msg = Math.abs(eps) < 1e-9 ? 'ε = 0 : L est invariant par les rotations F_s, donc Q est constant (Noether) ; la courbe tournée F_s∘γ est encore une solution (vert et violet confondus).' : 'ε ≠ 0 : la symétrie est cassée, Q′ = ε x y n’est plus identiquement nul et Q varie ; H reste constant (L autonome) ; F_s∘γ n’est en général plus une solution (vert ≠ violet' + (Math.abs(Math.abs(s) - Math.PI) < 0.02 ? ', sauf ici : s ≈ π et U(−q) = U(q), la rotation d’angle π reste une symétrie' : '') + ').';
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

} catch (e) { console.error('viz viz-ch08-noether-rotation failed to register', e); }
