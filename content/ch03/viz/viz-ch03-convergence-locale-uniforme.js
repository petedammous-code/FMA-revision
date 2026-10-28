FMA.registerViz({
  id: 'viz-ch03-convergence-locale-uniforme',
  chapter: 3,
  title: "Convergence localement uniforme : sur tout compact, mais pas sur tout le disque",
  description: String.raw`**Ce que l'on voit.** On étudie une suite de fonctions $f_n$ qui converge simplement vers une limite $f$ sur un ouvert $\Omega$. À gauche, la **carte de l'erreur** $z\mapsto\log_{10}|f_n(z)-f(z)|$ (bleu foncé = erreur minuscule, jaune/blanc = erreur de l'ordre de $1$ ou plus) ; le cercle pointillé est le bord de $\bar D(0,r)$. À droite, le graphe de
$$r\longmapsto \sup_{z\in\bar D(0,r)}|f_n(z)-f(z)|$$
en échelle logarithmique, pour le $n$ choisi (trait épais) et quelques autres valeurs de $n$ (traits fins) ; la droite horizontale est le seuil $\varepsilon$. **Glissez** le curseur $r$ (ou cliquez-glissez sur l'un des deux graphiques).

**Ce qu'il faut regarder.**
* Pour $r<1$ fixé, le $\sup$ sur $\bar D(0,r)$ (un **compact** de $\Omega=D(0,1)$) tend vers $0$ quand $n$ augmente : c'est la convergence **uniforme sur tout compact**, équivalente à la convergence **localement uniforme** (poly, Proposition III.1.2, p. 59).
* Mais la zone « chaude » se **colle au bord** $|z|=1$ : le $\sup$ sur tout $D(0,1)$ reste égal à $1$ pour $z^n$ (et vaut $+\infty$ pour $\sum z^k$). La convergence n'est **pas uniforme sur $\Omega$** ; c'est pourquoi les théorèmes du chapitre (Weierstraß, Hurwitz, Montel) sont énoncés « sur tout compact » (poly, Définition III.1.1, p. 59).
* L'entier $n_{\min}(r,\varepsilon)$ affiché (plus petit $n$ tel que $\sup_{\bar D(0,r)}|f_n-f|\le\varepsilon$) **explose quand $r\to1$** : aucun $n$ ne convient pour tout $r<1$ à la fois. Le contre-exemple $z^n/n$ converge au contraire uniformément sur $D(0,1)$ (le $\sup$ vaut $1/n$).
* Dans la famille $\sum_{k\le n}z^k/k!$ sur $\mathbb C$ tout entier, la convergence vers $e^z$ est localement uniforme (et même normale sur tout disque) : essayez $r$ grand, il faut juste un $n$ plus grand.`,
  related: ['ch03-convergence-localement-uniforme', 'ch03-convergence-uniforme-compacts', 'ch03-weierstrass', 'ch03-convergence-normale-definition'],
  height: 700,
  mount(container, kit) {
    const C = kit.complex;
    const th = () => kit.theme();
    const LO = -8, HI = 2;
    const pw = (z, m) => { const r = Math.hypot(z[0], z[1]); if (r === 0) return m === 0 ? [1, 0] : [0, 0]; return C.fromPolar(Math.pow(r, m), m * Math.atan2(z[1], z[0])); };
    const tail = (n, z) => { // somme_{k>n} z^k/k!
      let t = [1, 0]; for (let k = 1; k <= n; k++) t = C.scale(C.mul(t, z), 1 / k);
      let s = [0, 0]; for (let k = n + 1; k <= n + 90; k++) { t = C.scale(C.mul(t, z), 1 / k); s = C.add(s, t); if (C.abs(t) < 1e-300) break; }
      return s;
    };
    const FAM = {
      pow: { lab: 'z^n  (limite 0 sur D(0,1))', rmax: 1, nmax: 80, n0: 12, view: 1.4, disk: true,
        err: (n, z) => pw(z, n), sup: (n, r) => Math.pow(r, n), all: n => '1' },
      geo: { lab: 'somme des z^k, k≤n  (limite 1/(1−z))', rmax: 0.995, nmax: 80, n0: 12, view: 1.4, disk: true,
        err: (n, z) => C.scale(C.div(pw(z, n + 1), C.sub([1, 0], z)), -1), sup: (n, r) => Math.pow(r, n + 1) / (1 - r), all: n => '+\\infty' },
      pown: { lab: 'z^n / n  (limite 0, uniforme sur D(0,1))', rmax: 1, nmax: 80, n0: 12, view: 1.4, disk: true,
        err: (n, z) => C.scale(pw(z, n), 1 / n), sup: (n, r) => Math.pow(r, n) / n, all: n => '\\tfrac{1}{' + n + '}' },
      exp: { lab: 'somme des z^k/k!, k≤n  (limite e^z sur C)', rmax: 5, nmax: 40, n0: 6, view: 5.6, disk: false,
        err: (n, z) => tail(n, z), sup: (n, r) => tail(n, [r, 0])[0], all: n => '+\\infty' },
    };
    let fam = 'pow', n = FAM.pow.n0, r = 0.8, eps = -3;

    // --- structure : deux cellules responsives ---
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:10px;margin-top:6px';
    const cellL = document.createElement('div'), cellR = document.createElement('div');
    grid.appendChild(cellL); grid.appendChild(cellR);
    const controls = kit.controls(container);
    container.appendChild(grid);
    const sL = kit.canvas(cellL, { height: 300 });
    const sR = kit.canvas(cellR, { height: 300 });

    const sel = kit.select(controls, { label: '$f_n$ :', options: Object.keys(FAM).map(k => [FAM[k].lab, k]), value: fam, onChange: v => { fam = v; const F = FAM[v]; stop(); n = Math.min(F.n0, F.nmax); nS.input.max = F.nmax; nS.value = n; rS.input.max = F.rmax; r = (v === 'exp') ? 3 : 0.8; rS.value = r; heat = null; draw(); } });
    const nS = kit.slider(controls, { label: '$n$', min: 1, max: 80, step: 1, value: n, onChange: v => { n = v; heat = null; draw(); } });
    const rS = kit.slider(controls, { label: '$r$', min: 0, max: 1, step: 0.005, value: r, onChange: v => { r = v; draw(); } });
    const eS = kit.slider(controls, { label: '$\\log_{10}\\varepsilon$', min: -6, max: -1, step: 0.1, value: eps, format: v => (+v).toFixed(1), onChange: v => { eps = v; draw(); } });
    const playB = kit.button(controls, { label: '▶ faire croître n', primary: true, onClick: () => { if (anim) stop(); else start(); } });
    const ro1 = kit.readout(controls, { label: '' });
    const ro2 = kit.readout(controls, { label: '' });
    const ro3 = kit.readout(controls, { label: '' });

    const sup10 = k => { const m = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' }; return '10' + String(k).split('').map(c => m[c] || c).join(''); };
    const sciTex = x => { if (!isFinite(x)) return '+\\infty'; if (x === 0) return '0'; const e = Math.floor(Math.log10(x)); const m = x / Math.pow(10, e); return Math.abs(e) <= 1 ? x.toPrecision(3) : m.toFixed(2) + '\\times10^{' + e + '}'; };

    // --- animation ---
    let anim = null, acc = 0;
    function stop() { if (anim) { anim.stop(); anim = null; } playB.textContent = '▶ faire croître n'; }
    function start() {
      const F = FAM[fam]; if (n >= F.nmax) { n = 1; nS.value = 1; }
      playB.textContent = '❚❚ pause'; acc = 0;
      anim = kit.animate(dt => { acc += dt; if (acc < 0.12) return; acc = 0; const F2 = FAM[fam]; if (n >= F2.nmax) { stop(); return; } n++; nS.value = n; heat = null; draw(); });
    }

    // --- carte de l'erreur (mise en cache) ---
    let heat = null, heatKey = '';
    function colorOf(t) { t = Math.max(0, Math.min(1, t)); return kit.hsl2rgb(0.66 * (1 - t) % 1, 0.85, 0.16 + 0.5 * t); }
    function buildHeat(P) {
      const F = FAM[fam]; const W = sL.W, H = sL.H, step = 2;
      const img = sL.ctx.createImageData(Math.ceil(W / step), Math.ceil(H / step)); const d = img.data; let k = 0;
      for (let j = 0; j < img.height; j++) for (let i = 0; i < img.width; i++) {
        const [x, y] = P.toWorld(i * step + step / 2, j * step + step / 2);
        let a = 0, rgb = null;
        if (F.disk && x * x + y * y >= 1) { a = 0; rgb = [0, 0, 0]; }
        else { const e = C.abs(F.err(n, [x, y])); const lg = Math.log10(e + 1e-300); rgb = colorOf((lg - LO) / (HI - LO)); a = 255; }
        d[k++] = rgb[0]; d[k++] = rgb[1]; d[k++] = rgb[2]; d[k++] = a;
      }
      const off = document.createElement('canvas'); off.width = img.width; off.height = img.height; off.getContext('2d').putImageData(img, 0, 0);
      return off;
    }

    let PL = null, plot = null;
    function drawLeft() {
      const ctx = sL.ctx, t = th(), F = FAM[fam];
      sL.clear();
      const P = kit.plane(ctx, { xmin: -F.view, xmax: F.view, ymin: -F.view, ymax: F.view, W: sL.W, H: sL.H });
      PL = P;
      const key = [fam, n, sL.W, sL.H].join('|');
      if (!heat || key !== heatKey) { heat = buildHeat(P); heatKey = key; }
      ctx.save(); ctx.imageSmoothingEnabled = true; ctx.drawImage(heat, 0, 0, heat.width, heat.height, 0, 0, sL.W, sL.H); ctx.restore();
      P.axes({ labels: false });
      if (F.disk) P.circle(0, 0, 1, { color: t.fg, width: 1.5 });
      P.circle(0, 0, Math.max(r, 1e-3), { color: '#ffffff', width: 2.2, dash: [6, 4] });
      // étiquettes
      ctx.save(); ctx.font = '12px system-ui, sans-serif'; ctx.fillStyle = '#fff'; ctx.shadowColor = 'rgba(0,0,0,.7)'; ctx.shadowBlur = 3;
      ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillText(F.disk ? 'bord de D(0,1)' : 'plan complexe', 8, 6);
      ctx.fillText('r = ' + r.toFixed(3), 8, 22);
      ctx.restore();
      // légende (barre de couleur)
      const bx = 8, by = sL.H - 22, bw = Math.min(180, sL.W - 16), bh = 8;
      for (let i = 0; i < bw; i++) { const c = colorOf(i / (bw - 1)); ctx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`; ctx.fillRect(bx + i, by, 1, bh); }
      ctx.save(); ctx.fillStyle = '#fff'; ctx.shadowColor = 'rgba(0,0,0,.8)'; ctx.shadowBlur = 3; ctx.font = '10.5px system-ui, sans-serif'; ctx.textBaseline = 'bottom'; ctx.textAlign = 'left'; ctx.fillText(sup10(LO), bx, by - 1);
      ctx.textAlign = 'right'; ctx.fillText(sup10(HI), bx + bw, by - 1); ctx.textAlign = 'left'; ctx.fillText('|f_n − f|', bx + bw + 6, by + bh + 1); ctx.restore();
    }

    function drawRight() {
      const ctx = sR.ctx, t = th(), F = FAM[fam]; sR.clear();
      const W = sR.W, H = sR.H, ml = 44, mr = 10, mt = 12, mb = 30;
      const X = x => ml + (x / F.rmax) * (W - ml - mr);
      const Y = lg => mt + (1 - (Math.max(LO, Math.min(HI, lg)) - LO) / (HI - LO)) * (H - mt - mb);
      plot = { X, ml, mr, W, rmax: F.rmax };
      ctx.save(); ctx.font = '10.5px system-ui, sans-serif';
      // grille
      ctx.strokeStyle = t.grid; ctx.lineWidth = 1; ctx.fillStyle = t.muted; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      for (let k = LO; k <= HI; k += 2) { const y = Y(k); ctx.beginPath(); ctx.moveTo(ml, y); ctx.lineTo(W - mr, y); ctx.stroke(); ctx.fillText(sup10(k), ml - 4, y); }
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      const xs = F.rmax <= 1 ? [0, 0.25, 0.5, 0.75, 1] : [0, 1, 2, 3, 4, 5];
      xs.forEach(x => { const px = X(x); ctx.beginPath(); ctx.moveTo(px, mt); ctx.lineTo(px, H - mb); ctx.strokeStyle = t.grid; ctx.stroke(); ctx.fillText(String(x), px, H - mb + 3); });
      ctx.strokeStyle = t.axis; ctx.beginPath(); ctx.moveTo(ml, mt); ctx.lineTo(ml, H - mb); ctx.lineTo(W - mr, H - mb); ctx.stroke();
      ctx.fillStyle = t.fg; ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'; ctx.fillText('r', W - mr, H - 4);
      ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText('sup sur la boule fermée de rayon r', ml + 6, mt - 1);
      ctx.restore();
      // courbes
      const pal = kit.palette();
      const curve = (nn, color, width, alpha) => {
        ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; ctx.globalAlpha = alpha; ctx.beginPath(); let first = true;
        const M = 160;
        for (let i = 0; i <= M; i++) { const rr = F.rmax * i / M; const v = F.sup(nn, rr); const lg = v > 0 ? Math.log10(v) : LO - 5; const px = X(rr), py = Y(lg); if (first) { ctx.moveTo(px, py); first = false; } else ctx.lineTo(px, py); }
        ctx.stroke(); ctx.restore();
      };
      [1, 2, 4, 8, 16, 32, 64].filter(m => m <= F.nmax && m !== n).forEach(m => curve(m, pal[0], 1.2, 0.35));
      curve(n, pal[0], 2.8, 1);
      // seuil
      ctx.save(); ctx.strokeStyle = pal[3]; ctx.lineWidth = 1.6; ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.moveTo(ml, Y(eps)); ctx.lineTo(W - mr, Y(eps)); ctx.stroke();
      ctx.fillStyle = pal[3]; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'; ctx.setLineDash([]); ctx.fillText('ε', W - mr - 2, Y(eps) - 2); ctx.restore();
      // bord du disque
      if (F.disk) { ctx.save(); ctx.strokeStyle = t.fg; ctx.globalAlpha = 0.5; ctx.setLineDash([2, 3]); ctx.beginPath(); ctx.moveTo(X(1), mt); ctx.lineTo(X(1), H - mb); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1; ctx.fillStyle = t.muted; ctx.font = '10.5px system-ui, sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'top'; ctx.fillText('bord', X(1) - 3, mt + 14); ctx.restore(); }
      // curseur r
      const v = F.sup(n, r); const lgv = v > 0 ? Math.log10(v) : LO;
      ctx.save(); ctx.strokeStyle = pal[1]; ctx.lineWidth = 1.6; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(X(r), mt); ctx.lineTo(X(r), H - mb); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = pal[1]; ctx.beginPath(); ctx.arc(X(r), Y(lgv), 5, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
    }

    function nMin() {
      const F = FAM[fam]; const LIM = F.nmax > 50 ? 200000 : 400; const e = Math.pow(10, eps);
      for (let m = 1; m <= LIM; m++) if (F.sup(m, r) <= e) return m;
      return null;
    }
    function draw() {
      try {
        drawLeft(); drawRight();
        const F = FAM[fam];
        ro1.set('\\sup_{\\bar D(0,r)}|f_n-f| = ' + sciTex(F.sup(n, r)), true);
        ro2.set((F.disk ? '\\sup_{D(0,1)}|f_n-f| = ' : '\\sup_{\\mathbb C}|f_n-f| = ') + F.all(n), true);
        const m = nMin();
        ro3.set('n_{\\min}(r,\\varepsilon) = ' + (m == null ? '\\text{>}\\,' + (F.nmax > 50 ? '2\\cdot10^{5}' : '400') : m), true);
      } catch (e) { console.error(e); }
    }

    // --- interactions : on glisse r sur les deux graphiques ---
    const setR = v => { const F = FAM[fam]; r = Math.max(0, Math.min(F.rmax, v)); rS.value = r; draw(); };
    const offL = kit.drag(sL.canvas, { onDown: p => { const [x, y] = PL.toWorld(p.x, p.y); setR(Math.hypot(x, y)); }, onMove: (p, ev, down) => { if (down) { const [x, y] = PL.toWorld(p.x, p.y); setR(Math.hypot(x, y)); } } });
    const offR = kit.drag(sR.canvas, { onDown: p => setR((p.x - plot.ml) / (plot.W - plot.ml - plot.mr) * plot.rmax), onMove: (p, ev, down) => { if (down) setR((p.x - plot.ml) / (plot.W - plot.ml - plot.mr) * plot.rmax); } });
    sL.onResize = () => { heat = null; draw(); }; sR.onResize = draw;
    draw();
    return () => { stop(); offL(); offR(); sL.destroy(); sR.destroy(); };
  }
});
