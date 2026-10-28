FMA.registerViz({
  id: 'viz-ch02-rouche-chien',
  chapter: 2,
  title: "Principe de l'argument et théorème de Rouché : le chien et son maître",
  description: String.raw`**Ce que l'on voit.** À gauche (au-dessus sur un téléphone), le plan des $z$ : le cercle $\Gamma=C(0,r)$, bord du disque $U=D(0,r)$, parcouru dans le sens direct, avec les zéros (disques) et les pôles (croix) des fonctions étudiées ; le petit nombre à côté d'un marqueur est sa multiplicité. À droite (en dessous), le plan des $w$ : l'**image** du cercle par la fonction, c'est-à-dire la courbe $t\mapsto g(\gamma(t))$ avec $\gamma(t)=re^{2i\pi t}$, et l'origine $w=0$ (le « poteau », croix noire). Le point mobile $\gamma(t)$ et ses images avancent avec le curseur $t$ ou le bouton ▶.

**Principe de l'argument** (poly, Lemme II.8.1 et Corollaire II.8.2, p. 53). Pour $g$ méromorphe sans zéro ni pôle sur $\Gamma$,
$$\frac{1}{2i\pi}\int_\Gamma\frac{g'(z)}{g(z)}\,dz=Z(g,U)-P(g,U),$$
nombre de zéros moins nombre de pôles dans $U$, **comptés avec multiplicité**. Le membre de gauche est exactement $\Ind_0(g\circ\gamma)$, le nombre de tours de la courbe image autour de $0$ (changement de variable $w=g(z)$ dans la [[ch02-indice-def|définition de l'indice]]). Glissez les zéros et les pôles (configurations « Argument ») ou changez $r$ : chaque zéro qui entre dans $U$ ajoute $m$ tours, chaque pôle en retire $m$. Quand un zéro ou un pôle est **sur** $\Gamma$, la courbe image passe par $0$ ou part à l'infini et l'intégrale n'est pas définie. Cochez « échelle compressée » pour voir la courbe en entier : on remplace $w$ par $\frac{w}{|w|+s_0}$, ce qui garde l'argument, donc le nombre de tours.

**Rouché** (poly, Théorème II.8.4, p. 54). Si $|f(z)-g(z)|<|g(z)|$ pour tout $z\in\Gamma$, alors $Z(f,U)-P(f,U)=Z(g,U)-P(g,U)$. Image : le maître $g(\gamma(t))$ (bleu) promène son chien $f(\gamma(t))$ (rose) autour du poteau $0$ ; la laisse est le segment de longueur $|f-g|$. L'hypothèse dit que la laisse est **plus courte que la distance du maître au poteau** : le chien reste dans le disque en tirets, de centre $g(\gamma(t))$ et de rayon $|g(\gamma(t))|$, qui ne contient pas $0$ ; il ne peut donc pas tourner autour du poteau un nombre de fois différent de son maître. Sur $\Gamma$, les arcs **verts** sont ceux où l'inégalité est vraie, les **rouges** ceux où elle est fausse.

**À faire.**
* $f=z^7-5z^3+1$, $g=-5z^3$ : pour $r=1$, $|f-g|=|z^7+1|\le2<5=|g|$ sur $\Gamma$, donc $f$ a **3** zéros dans $D(0,1)$ (les points roses). Diminuez $r$ sous $\approx0{,}59$ ou augmentez-le au-dessus de $\approx1{,}45$ : des arcs rouges apparaissent, et les nombres de tours finissent par différer.
* $f=z^4-2z^3+3z+2$, $g=z^4$ : pour $r$ grand, Rouché donne les $4$ zéros de $f$ dans $D(0,r)$ ; c'est la preuve de d'Alembert-Gauss du poly ([[ch02-dalembert-gauss-rouche]]). Pour $r=1{,}2$, l'hypothèse tombe et $f(\Gamma)$ fait $2$ tours contre $4$.
* $f=(z-b_1)(z-b_2)$ à zéros déplaçables, $g=z^2$ : poussez un zéro de $f$ hors du disque ; avant même qu'il traverse $\Gamma$, des arcs rouges apparaissent : l'inégalité est une condition **suffisante**, pas nécessaire.

> ⚠️ Rouché compare $Z-P$, pas $Z$ seul, et il faut l'inégalité **stricte en tout point** de $\Gamma$ (elle interdit en particulier à $f$ et $g$ de s'annuler sur $\Gamma$). [[ch02-rouche]], [[ch02-principe-argument]].`,
  related: ['ch02-principe-argument', 'ch02-principe-argument-domaine', 'ch02-rouche', 'ch02-dalembert-gauss-rouche', 'ch02-indice-def', 'ch02-pole-meromorphe-def'],
  height: 600,
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
    sel.select.style.maxWidth = '280px';
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
