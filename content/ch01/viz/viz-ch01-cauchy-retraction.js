FMA.registerViz({
  id: 'viz-ch01-cauchy-retraction',
  chapter: 1,
  title: 'Formule de Cauchy : rétracter le cercle sur le point',
  description: String.raw`**Ce que l'on voit.** En fond, le *domain coloring* atténué de $f$ (teinte = argument de $f(z)$, clair = $|f(z)|$ grand, sombre = petit). Le cercle épais bleu est $\Gamma=C(0,1)$, parcouru dans le sens trigonométrique (flèches). Le point orange $z$ se **déplace à la souris ou au doigt**. Le cercle rose est $\Gamma_t=C(tz,1-t)$ : pour $t=0$ c'est $\Gamma$, et quand $t\to1$ il se rétracte sur $z$ (curseur $t$ ou bouton « Rétracter »). En bas, la courbe $t\mapsto|I(t)|$ où
$$I(t)=\int_{\Gamma_t}\frac{f(\omega)-f(z)}{\omega-z}\,d\omega ,$$
calculée numériquement (paramétrage $\omega=tz+(1-t)e^{i\theta}$ et méthode des trapèzes). Les lectures donnent $f(z)$ et la valeur numérique de l'intégrale de Cauchy $\frac{1}{2i\pi}\int_\Gamma\frac{f(\omega)}{\omega-z}\,d\omega$.

**Le lien avec la preuve du poly** (poly, Théorème I.6.1, p. 18). La formule $f(z)=\frac{1}{2i\pi}\int_\Gamma\frac{f(\omega)}{\omega-z}\,d\omega$ découle de $\int_\Gamma\frac{d\omega}{\omega-z}=2i\pi$ (étape 1) et de $I(0)=0$ (étape 2). Pour l'étape 2, le poly montre que $I$ est **constante** en $t$ (sa dérivée est l'intégrale en $\theta$ d'une dérivée en $\theta$ d'une fonction $2\pi$-périodique, donc nulle — c'est là que sert l'holomorphie de $f$) et que $I(t)\to0$ quand $t\to1$ (le cercle rétrécit et l'intégrande, un taux d'accroissement, reste borné). Donc $I(0)=I(1)=0$.

**À faire.**
* Avec $e^z$, $z^3-z$ ou $\frac{1}{z-3/2}$ (pôle **hors** du disque fermé, donc $f$ est holomorphe sur un ouvert $\Omega\supset\bar D(0,1)$) : la courbe du bas est plate, collée à $0$, quelle que soit la position de $z$ ; l'intégrale de Cauchy redonne $f(z)$ (l'écart affiché est de l'ordre de l'erreur d'arrondi, sauf si $z$ frôle le cercle $\Gamma$, où la quadrature numérique perd de la précision). Placez $z$ au centre ($z$ s'aimante en $0$) : l'intégrale de Cauchy est alors la **moyenne** de $f$ sur le cercle (poly, Corollaire I.6.2, p. 19).
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
    const sel = kit.select(controls, { label: '$f(z)=$', options: Object.keys(FNS).map(k => [FNS[k].name, k]), value: 'exp', onChange: () => { bgKey = ''; curveKey = ''; const F = FNS[sel.value]; if (F.pole && Math.hypot(z[0] - F.pole[0], z[1] - F.pole[1]) < 0.25) z = [-0.3, -0.2]; stopAnim(); draw(); } });
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
        P.text(F.pole[0], F.pole[1], F.pole[0] > 1 ? 'pôle 3/2' : 'pôle p', { dx: 8, dy: 16, font: '600 12px system-ui, sans-serif' });
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
      const title = '|I(t)| en fonction de t (I(t) = ∫ sur Γₜ de (f(ω) − f(z))/(ω − z) dω)';
      ctx.fillText(ctx.measureText(title).width > W - 12 ? '|I(t)|, avec I(t) = ∫ sur Γₜ de (f(ω) − f(z))/(ω − z) dω' : title, 6, 4);
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
      const verdict = m < 1e-8 ? 'I(t) ≡ 0 : constante, donc I(0) = I(1) = 0' : 'I(t) varie : I(0) ≠ 0, la formule tombe';
      ctx.font = '600 11px system-ui, sans-serif'; const vw = ctx.measureText(verdict).width;
      ctx.globalAlpha = 0.9; ctx.fillStyle = t.bg; ctx.fillRect(W - R - vw - 8, T + 1, vw + 8, 16); ctx.globalAlpha = 1;
      ctx.fillStyle = F.hol ? t.accent3 : t.accent2; ctx.textAlign = 'right'; ctx.textBaseline = 'top';
      ctx.fillText(verdict, W - R - 4, T + 3);
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
