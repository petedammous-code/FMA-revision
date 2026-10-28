FMA.registerViz({
  id: 'viz-ch03-produits-partiels',
  chapter: 3,
  title: "Produits infinis : les zéros apparaissent un à un",
  description: String.raw`**Ce que l'on voit.** À gauche, le *domain coloring* du produit partiel $P_N(z)$ (teinte = argument, clair = grand module, sombre = petit module) ; les **zéros** sont les points noirs autour desquels toutes les couleurs tournent. À droite, pour le point-sonde $z_0$ (**à glisser** sur le plan) : en haut la suite $k\mapsto|P_k(z_0)|$ et sa limite (tirets), en bas la somme partielle $S_k=\sum_{j\le k}|u_j(z_0)|$ où $u_j$ est « ce qu'on ajoute à $1$ » dans le $j$-ième facteur $1+u_j$. Le curseur $N$ (ou le bouton ▶) ajoute les facteurs un par un.

**Les trois produits.**
* **Sinus (Euler).** $P_N(z)=\pi z\prod_{n\le N}\big(1-\tfrac{z^2}{n^2}\big)$, avec $u_n=-z^2/n^2$ : la série $\sum|u_n|$ converge **normalement sur tout compact**, donc $P_N\to\sin(\pi z)$ localement uniformément (poly, Théorème III.5.1, p. 68, et Exemple III.6.3, p. 70). Chaque facteur ajoute les deux zéros $\pm N$ ; les zéros lointains ne sont pas encore corrects, car la convergence n'est qu'**uniforme sur les compacts**.
* **$1/\Gamma$ (Weierstraß).** $P_N(z)=z\,e^{\gamma z}\prod_{k\le N}\big(1+\tfrac zk\big)e^{-z/k}\to 1/\Gamma(z)$ (poly, Exemple III.6.4, p. 71-72). Le facteur correcteur $e^{-z/k}$ transforme $u_k=(1+z/k)e^{-z/k}-1=O(|z|^2/k^2)$ : la série $\sum|u_k|$ converge.
* **Sans correction.** $P_N(z)=z\prod_{k\le N}(1+z/k)$, avec $u_k=z/k$ : $\sum|u_k|$ **diverge** (comme $\log N$) ; le produit se comporte comme $N^{z}/\Gamma(z)$ et n'a pas de limite : il tend vers $0$ pour $\Re z<0$ et explose pour $\Re z>0$ (poly, Remarque III.5.2, p. 68). Le fond du plan « s'éclaircit » à droite et « s'assombrit » à gauche quand $N$ augmente. Cochez « afficher la limite » pour comparer (rien à afficher dans ce cas).

Comparez, pour $z_0$ fixé, la courbe du haut à son asymptote et la somme du bas : borne = produit convergent, croissance = produit divergent.`,
  related: ['ch03-produits-infinis', 'ch03-produits-infinis-remarque', 'ch03-produit-sinus', 'ch03-gamma-produit-weierstrass', 'ch03-log-estimation', 'ch03-exp-estimation'],
  height: 460,
  mount(container, kit) {
    const C = kit.complex;
    try { const d = container.parentNode && container.parentNode.querySelector('.viz-desc'); if (d) d.style.overflowX = 'hidden'; } catch (e) {}
    const th = () => kit.theme();
    const GAMMA_E = 0.5772156649015329;
    const NMAX = 200;

    // Gamma complexe (Lanczos) et 1/Gamma
    const LC = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    function gamma(z) {
      if (z[0] < 0.5) { // réflexion : Gamma(z) = pi / (sin(pi z) Gamma(1-z))
        return C.div([Math.PI, 0], C.mul(C.sin(C.scale(z, Math.PI)), gamma(C.sub([1, 0], z))));
      }
      z = C.sub(z, [1, 0]); let x = [LC[0], 0];
      for (let i = 1; i < 9; i++) x = C.add(x, C.div([LC[i], 0], C.add(z, [i, 0])));
      const t = C.add(z, [7.5, 0]);
      const p = C.powc(t, C.add(z, [0.5, 0]));
      return C.scale(C.mul(C.mul(p, C.exp(C.scale(t, -1))), x), Math.sqrt(2 * Math.PI));
    }
    const rgamma = z => C.mul(C.mul(C.sin(C.scale(z, Math.PI)), gamma(C.sub([1, 0], z))), [1 / Math.PI, 0]); // 1/Gamma(z)

    const FAM = {
      sin: { lab: 'πz ∏ (1 − z²/n²)  →  sin(πz)', xmax: 5.5, ymax: 3, z0: [1.6, 0.7],
        u: (k, z) => C.scale(C.mul(z, z), -1 / (k * k)),
        P0: z => C.scale(z, Math.PI),
        factor: (k, z) => [1 - (z[0] * z[0] - z[1] * z[1]) / (k * k), -(2 * z[0] * z[1]) / (k * k)],
        limit: z => C.sin(C.scale(z, Math.PI)), limTxt: '\\sin(\\pi z)', zeros: N => { const a = [[0, 0]]; for (let k = 1; k <= N; k++) { a.push([k, 0]); a.push([-k, 0]); } return a; } },
      wei: { lab: 'z e^{γz} ∏ (1+z/k) e^{−z/k}  →  1/Γ(z)', xmax: 3.5, xmin: -7, ymax: 3.2, z0: [-2.4, 0.8],
        u: (k, z) => C.sub(C.mul(C.add([1, 0], C.scale(z, 1 / k)), C.exp(C.scale(z, -1 / k))), [1, 0]),
        P0: z => C.mul(z, C.exp(C.scale(z, GAMMA_E))),
        factor: (k, z) => C.mul(C.add([1, 0], C.scale(z, 1 / k)), C.exp(C.scale(z, -1 / k))),
        limit: z => rgamma(z), limTxt: '1/\\Gamma(z)', zeros: N => { const a = [[0, 0]]; for (let k = 1; k <= N; k++) a.push([-k, 0]); return a; } },
      naive: { lab: 'z ∏ (1 + z/k)  (sans correction : diverge)', xmax: 3.5, xmin: -7, ymax: 3.2, z0: [-2.4, 0.8],
        u: (k, z) => C.scale(z, 1 / k),
        P0: z => z,
        factor: (k, z) => [1 + z[0] / k, z[1] / k],
        limit: null, limTxt: '', zeros: N => { const a = [[0, 0]]; for (let k = 1; k <= N; k++) a.push([-k, 0]); return a; } },
    };
    let fam = 'sin', N = 3, z0 = FAM.sin.z0.slice(), showLim = false;

    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:10px;margin-top:6px';
    const cellL = document.createElement('div'), cellR = document.createElement('div');
    grid.appendChild(cellL); grid.appendChild(cellR);
    const controls = kit.controls(container);
    container.appendChild(grid);
    const sL = kit.canvas(cellL, { height: 330 });
    const sR = kit.canvas(cellR, { height: 330 });
    kit.colorLegend(container);

    const selP = kit.select(controls, { label: 'produit :', options: Object.keys(FAM).map(k => [FAM[k].lab, k]), value: fam, onChange: v => { fam = v; stopA(); z0 = FAM[v].z0.slice(); cache = null; draw(); } });
    selP.select.style.maxWidth = '100%'; selP.el.style.maxWidth = '100%';
    const nS = kit.slider(controls, { label: '$N$', min: 0, max: NMAX, step: 1, value: N, onChange: v => { N = v; cache = null; draw(); } });
    const cbL = kit.checkbox(controls, { label: 'afficher la limite', checked: false, onChange: v => { showLim = v; cache = null; draw(); } });
    const playB = kit.button(controls, { label: '▶ ajouter des facteurs', primary: true, onClick: () => { if (anim) stopA(); else startA(); } });
    const ro1 = kit.readout(controls, { label: '' });
    const ro2 = kit.readout(controls, { label: '' });

    let anim = null, acc = 0;
    function stopA() { if (anim) { anim.stop(); anim = null; } playB.textContent = '▶ ajouter des facteurs'; }
    function startA() {
      if (N >= NMAX) { N = 0; nS.value = 0; }
      playB.textContent = '❚❚ pause'; acc = 0;
      anim = kit.animate(dt => { acc += dt; if (acc < 0.1) return; acc = 0; if (N >= NMAX) { stopA(); return; } N = Math.min(NMAX, N + (N < 20 ? 1 : 3)); nS.value = N; cache = null; draw(); });
    }

    const prodAt = (F, M, z) => { let p = F.P0(z); for (let k = 1; k <= M; k++) p = C.mul(p, F.factor(k, z)); return p; };
    let cache = null, P = null, PR = null;
    function drawLeft() {
      const F = FAM[fam], ctx = sL.ctx, t = th(); sL.clear();
      const xmin = F.xmin !== undefined ? F.xmin : -F.xmax; const asp = sL.W / sL.H;
      P = kit.plane(ctx, { xmin, xmax: F.xmax, ymin: -F.ymax, ymax: F.ymax, W: sL.W, H: sL.H });
      const f = (showLim && F.limit) ? F.limit : (z => prodAt(F, N, z));
      kit.domainColor(sL, P, f, { step: 3, lines: true });
      P.axes({ labels: true, step: 1 });
      // zéros théoriques du produit partiel
      const zs = (showLim && F.limit) ? null : F.zeros(N);
      if (zs) for (const zz of zs) { if (zz[0] < P.xmin || zz[0] > P.xmax) continue; P.point(zz[0], zz[1], { r: 3.2, color: '#000', stroke: '#fff' }); }
      // point-sonde
      P.point(z0[0], z0[1], { r: 6, color: t.accent4, stroke: t.fg });
      P.text(z0[0], z0[1], 'z₀', { dx: 8, dy: -6, font: 'bold 13px system-ui, sans-serif', color: '#fff' });
      ctx.save(); ctx.font = '12px system-ui, sans-serif'; ctx.fillStyle = '#fff'; ctx.shadowColor = 'rgba(0,0,0,.8)'; ctx.shadowBlur = 3; ctx.textBaseline = 'top'; ctx.fillText((showLim && F.limit) ? 'limite : ' + (fam === 'sin' ? 'sin(πz)' : '1/Γ(z)') : 'P_N,  N = ' + N, 8, 6); ctx.restore();
    }

    function series(F) {
      if (cache && cache.fam === fam && cache.z0[0] === z0[0] && cache.z0[1] === z0[1]) return cache;
      const mod = [], S = []; let p = F.P0(z0), s = 0; mod.push(C.abs(p)); S.push(0);
      for (let k = 1; k <= NMAX; k++) { p = C.mul(p, F.factor(k, z0)); s += C.abs(F.u(k, z0)); mod.push(C.abs(p)); S.push(s); }
      const lim = F.limit ? C.abs(F.limit(z0)) : null;
      cache = { fam, z0: z0.slice(), mod, S, lim };
      return cache;
    }

    function drawRight() {
      const F = FAM[fam], ctx = sR.ctx, t = th(), pal = kit.palette(); sR.clear();
      const W = sR.W, H = sR.H, ml = 46, mr = 10;
      const se = series(F);
      const panels = [{ y0: 14, y1: H / 2 - 22, data: se.mod, color: pal[0], title: '|P_k(z₀)|', lim: se.lim }, { y0: H / 2 + 14, y1: H - 24, data: se.S, color: pal[1], title: 'S_k = Σ_{j≤k} |u_j(z₀)|', lim: null }];
      const X = k => ml + (k / NMAX) * (W - ml - mr);
      for (const pn of panels) {
        let mx = 0; for (const v of pn.data) if (isFinite(v)) mx = Math.max(mx, v); if (pn.lim != null) mx = Math.max(mx, pn.lim);
        if (pn === panels[0] && F.limit) { // éviter qu'un transitoire minuscule écrase le graphe
          const tail = pn.data.slice(40); const tm = Math.max(...tail, pn.lim); mx = Math.min(mx, tm * 2.2 + 1e-9);
        }
        mx = mx * 1.12 || 1;
        const Y = v => pn.y1 - Math.max(0, Math.min(1.05, v / mx)) * (pn.y1 - pn.y0);
        ctx.save(); ctx.strokeStyle = t.axis; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(ml, pn.y0); ctx.lineTo(ml, pn.y1); ctx.lineTo(W - mr, pn.y1); ctx.stroke();
        ctx.fillStyle = t.muted; ctx.font = '10.5px system-ui, sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
        [0, 0.5, 1].forEach(a => { const v = mx / 1.12 * a; ctx.fillText(kit.fmt(+v.toPrecision(2)), ml - 4, Y(v)); });
        ctx.fillStyle = t.fg; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillText(pn.title, ml + 4, pn.y0 + 10);
        ctx.restore();
        if (pn.lim != null) { ctx.save(); ctx.strokeStyle = pal[2]; ctx.lineWidth = 1.6; ctx.setLineDash([6, 4]); ctx.beginPath(); ctx.moveTo(ml, Y(pn.lim)); ctx.lineTo(W - mr, Y(pn.lim)); ctx.stroke(); ctx.setLineDash([]); ctx.fillStyle = pal[2]; ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'; ctx.font = '10.5px system-ui, sans-serif'; ctx.fillText('limite', W - mr - 2, Y(pn.lim) - 2); ctx.restore(); }
        ctx.save(); ctx.strokeStyle = pn.color; ctx.lineWidth = 2; ctx.beginPath(); pn.data.forEach((v, k) => { const px = X(k), py = Y(v); k ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }); ctx.stroke();
        // curseur N
        ctx.strokeStyle = pal[3]; ctx.lineWidth = 1.4; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(X(N), pn.y0); ctx.lineTo(X(N), pn.y1); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = pal[3]; ctx.beginPath(); ctx.arc(X(N), Y(pn.data[N]), 4.5, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
      }
      ctx.save(); ctx.fillStyle = t.muted; ctx.font = '10.5px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      [0, 50, 100, 150].forEach(k => ctx.fillText(String(k), X(k), H - 20)); ctx.fillText('k = 200', X(200) - 14, H - 20); ctx.restore();
      return se;
    }

    function draw() {
      try {
        const F = FAM[fam]; drawLeft(); const se = drawRight();
        ro1.set('|P_N(z_0)| = ' + se.mod[N].toPrecision(4) + (se.lim != null ? ' — |limite| = ' + se.lim.toPrecision(4) : ' — pas de limite'));
        ro2.set('S_N = ' + se.S[N].toPrecision(4) + (fam === 'naive' ? ' (diverge, ~ |z₀| ln N)' : ' (borné)'));
      } catch (e) { console.error(e); }
    }

    const setZ = p => { const [x, y] = P.toWorld(p.x, p.y); z0 = [x, y]; cache = null; draw(); };
    const off = kit.drag(sL.canvas, { onDown: setZ, onMove: (p, ev, down) => { if (down) setZ(p); } });
    sL.onResize = draw; sR.onResize = draw;
    draw();
    return () => { stopA(); off(); sL.destroy(); sR.destroy(); };
  }
});
