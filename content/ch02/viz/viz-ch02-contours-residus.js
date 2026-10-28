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
* *Exemple II.9.7* (p. 57), trou de serrure, $f(z)=\dfrac{z^{\alpha-1}}{1+z}$ avec $z^{\alpha-1}=e^{(\alpha-1)\mathrm{Log}\,z}$ et $\arg z\in\,]0,2\pi[$ : le domain coloring montre la **coupure** le long de $\R_+$ (saut de couleur). Les bords $\gamma_+$ (au-dessus) et $\gamma_-$ (en dessous) ne se compensent pas, car sur $\gamma_-$ on a $z^{\alpha-1}=x^{\alpha-1}e^{2i\pi\alpha}$. Les arcs $C_R$ et $C_\varepsilon$ tendent vers $0$ grâce à $0<\alpha<1$ (majorations $\frac{2\pi R^{\alpha}}{R-1}$ et $\frac{2\pi\varepsilon^{\alpha}}{1-\varepsilon}$), d'où $\int_0^{+\infty}\frac{x^{\alpha-1}}{1+x}dx=\frac{\pi}{\sin(\alpha\pi)}$ ([[ch02-exemple-trou-de-serrure]]).

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
