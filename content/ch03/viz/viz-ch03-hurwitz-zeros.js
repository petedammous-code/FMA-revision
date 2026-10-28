FMA.registerViz({
  id: 'viz-ch03-hurwitz-zeros',
  chapter: 3,
  title: "Théorème de Hurwitz : les zéros passent à la limite",
  description: String.raw`**Ce que l'on voit.** Une suite $(f_n)$ de fonctions holomorphes sur un ouvert $\Omega$ qui converge localement uniformément vers $f$. Les **points pleins** sont les zéros de $f_n$ (pour le $n$ du curseur), les **croix** les zéros de la limite $f$ (avec multiplicité) ; les points pâles retracent les zéros des $f_m$, $m<n$ (case « trajectoires »). Le fond est le domain coloring de $f_n$. Le **disque $D$** (cercle blanc) se **déplace en le glissant** ; son rayon $\rho$ se règle au curseur. On affiche $Z(f_n,D)$ et $Z(f,D)$, nombres de zéros comptés avec multiplicité.

**Ce qu'il faut regarder.**
* **Famille $z^2-1/n$.** Les deux zéros simples $\pm1/\sqrt n$ se rapprochent et **fusionnent** en le zéro double de $z^2$ : dès que $D$ contient $0$ et que son bord évite les zéros de $f$, on a $Z(f_n,D)=Z(f,D)=2$ pour $n$ grand (poly, Remarque III.2.3, p. 63). Faites passer le bord de $D$ **exactement** par un zéro de $f$ : l'égalité peut alors tomber en défaut, d'où l'hypothèse « $\partial D$ ne rencontre pas les zéros de $f$ ».
* **Sommes partielles de $e^z$.** La limite $e^z$ n'a **aucun** zéro, donc (Hurwitz) tout disque fixe finit par ne plus contenir de zéro de $f_n$ : les zéros de $\sum_{k\le n}z^k/k!$ **fuient vers l'infini** (ils longent la courbe de Szegő).
* **Famille $z^n$ sur le disque épointé $D(0,1)\setminus\{0\}$.** Les $f_n$ ne s'annulent pas sur $\Omega$ mais la limite est $f\equiv0$ : c'est le cas **exclu** par le théorème (poly, Remarque III.2.2, p. 63). Un « zéro » de la limite n'a pas de sens ici, et rien n'est contredit.
* **Sommes $\sum_{k\le n}z^k$ sur $D(0,1)$.** Leurs zéros sont les racines de l'unité (sauf $1$), situées **sur le bord de $\Omega$** donc hors de $\Omega$ : $f=1/(1-z)$ sans zéro, ce qui est cohérent. Si $D$ sort de $\Omega$, l'application du théorème n'est plus permise (l'indicateur le signale).
* Le théorème de Hurwitz s'énonce **pour un disque $D$ avec $\bar D\subset\Omega$** (poly, Théorème III.2.1, p. 62).`,
  related: ['ch03-hurwitz', 'ch03-hurwitz-contre-exemple', 'ch03-hurwitz-zeros-locaux', 'ch03-weierstrass'],
  height: 640,
  mount(container, kit) {
    const C = kit.complex;
    const th = () => kit.theme();
    const pw = (z, m) => { const q = Math.hypot(z[0], z[1]); if (q === 0) return m === 0 ? [1, 0] : [0, 0]; return C.fromPolar(Math.pow(q, m), m * Math.atan2(z[1], z[0])); };

    // racines d'un polynôme (Durand-Kerner), coefficients c[k] de z^k (réels)
    function polyRoots(c) {
      const d = c.length - 1; if (d < 1) return [];
      const a = c.map(v => v / c[d]);
      let R = 0; for (let k = 1; k <= d; k++) R = Math.max(R, Math.pow(Math.abs(a[d - k]), 1 / k));
      R = Math.max(0.5 * 2 * R, 0.1);
      let z = []; for (let j = 0; j < d; j++) z.push(C.fromPolar(R * (0.6 + 0.04 * (j % 5)), 2 * Math.PI * j / d + 0.4));
      const ev = (w) => { let p = [1, 0]; for (let k = d - 1; k >= 0; k--) p = C.add(C.mul(p, w), [a[k], 0]); return p; };
      for (let it = 0; it < 500; it++) {
        let mx = 0;
        for (let j = 0; j < d; j++) {
          let den = [1, 0]; for (let k = 0; k < d; k++) if (k !== j) den = C.mul(den, C.sub(z[j], z[k]));
          const dl = C.div(ev(z[j]), den); z[j] = C.sub(z[j], dl); mx = Math.max(mx, C.abs(dl));
        }
        if (mx < 1e-13 * Math.max(1, R)) break;
      }
      return z;
    }
    const expCoef = n => { const out = []; out[n] = 1; for (let k = n - 1; k >= 0; k--) out[k] = out[k + 1] * (k + 1); return out; }; // n!/k!
    const rootCache = {};
    const rootsOf = (fam, nn) => { const key = fam + ':' + nn; if (!rootCache[key]) rootCache[key] = FAM[fam].roots(nn); return rootCache[key]; };

    const FAM = {
      deg2: { lab: 'z² − 1/n  →  z²', nmax: 60, n0: 3, view: 1.5, rhoMax: 1.4, rho0: 0.6, c0: [0, 0], omega: 'C',
        evalf: (n, z) => C.sub(C.mul(z, z), [1 / n, 0]), roots: n => [[Math.sqrt(1 / n), 0], [-Math.sqrt(1 / n), 0]], lim: [[[0, 0], 2]], limTxt: 'z^2',
        zero: false },
      exp: { lab: 'Σ_{k≤n} z^k/k!  →  e^z', nmax: 30, n0: 3, view: 11, rhoMax: 9, rho0: 3, c0: [0, 0], omega: 'C',
        evalf: (n, z) => { let s = [1, 0], t = [1, 0]; for (let k = 1; k <= n; k++) { t = C.scale(C.mul(t, z), 1 / k); s = C.add(s, t); } return s; },
        roots: n => polyRoots(expCoef(n)), lim: [], limTxt: 'e^z', zero: false },
      geo: { lab: 'Σ_{k≤n} z^k sur D(0,1)  →  1/(1−z)', nmax: 40, n0: 5, view: 1.45, rhoMax: 1.2, rho0: 0.5, c0: [0.2, 0], omega: 'D',
        evalf: (n, z) => { let s = [1, 0], t = [1, 0]; for (let k = 1; k <= n; k++) { t = C.mul(t, z); s = C.add(s, t); } return s; },
        roots: n => { const out = []; for (let j = 1; j <= n; j++) out.push(C.fromPolar(1, 2 * Math.PI * j / (n + 1))); return out; }, lim: [], limTxt: '1/(1-z)', zero: false },
      punct: { lab: 'z^n sur D(0,1)∖{0}  →  0   (cas exclu)', nmax: 40, n0: 4, view: 1.45, rhoMax: 1.2, rho0: 0.5, c0: [0.2, 0.1], omega: 'P',
        evalf: (n, z) => pw(z, n), roots: n => [], lim: null, limTxt: '0', zero: true },
      cub: { lab: 'z²(z−1) − (1+i)/n  →  z²(z−1)', nmax: 60, n0: 3, view: 1.7, rhoMax: 1.6, rho0: 0.5, c0: [0, 0], omega: 'C',
        evalf: (n, z) => C.sub(C.mul(C.mul(z, z), C.sub(z, [1, 0])), [1 / n, 1 / n]),
        roots: n => { const e = 1 / n; /* z^3 - z^2 - (1+i)e */ return polyRoots([-e, 0, -1, 1]).length ? cubic(n) : []; }, lim: [[[0, 0], 2], [[1, 0], 1]], limTxt: 'z^2(z-1)', zero: false },
    };
    // racines de z^3 - z^2 - (1+i) e : Durand-Kerner complexe
    function cubic(n) {
      const e = [1 / n, 1 / n]; // coefficient constant = -(1+i)/n
      const p = w => C.sub(C.mul(C.mul(w, w), C.sub(w, [1, 0])), e);
      let z = [[0.9, 0.1], [-0.3, 0.4], [-0.3, -0.4]];
      for (let it = 0; it < 500; it++) { let mx = 0; for (let j = 0; j < 3; j++) { let den = [1, 0]; for (let k = 0; k < 3; k++) if (k !== j) den = C.mul(den, C.sub(z[j], z[k])); const dl = C.div(p(z[j]), den); z[j] = C.sub(z[j], dl); mx = Math.max(mx, C.abs(dl)); } if (mx < 1e-14) break; }
      return z;
    }

    let fam = 'deg2', n = FAM.deg2.n0, rho = FAM.deg2.rho0, cen = FAM.deg2.c0.slice();
    let showTraj = true, showBg = true;

    const st = kit.canvas(container, { height: 400 });
    const controls = kit.controls(container);
    const selF = kit.select(controls, { label: '$f_n$ :', options: Object.keys(FAM).map(k => [FAM[k].lab, k]), value: fam, onChange: v => { fam = v; stopA(); const F = FAM[v]; n = F.n0; nS.input.max = F.nmax; nS.value = n; rho = F.rho0; rhoS.input.max = F.rhoMax; rhoS.value = rho; cen = F.c0.slice(); draw(); } });
    const nS = kit.slider(controls, { label: '$n$', min: 1, max: FAM.deg2.nmax, step: 1, value: n, onChange: v => { n = v; draw(); } });
    const rhoS = kit.slider(controls, { label: '$\\rho$', min: 0.05, max: FAM.deg2.rhoMax, step: 0.05, value: rho, onChange: v => { rho = v; draw(); } });
    const cbT = kit.checkbox(controls, { label: 'trajectoires', checked: true, onChange: v => { showTraj = v; draw(); } });
    const cbB = kit.checkbox(controls, { label: 'fond coloré', checked: true, onChange: v => { showBg = v; draw(); } });
    const playB = kit.button(controls, { label: '▶ faire croître n', primary: true, onClick: () => { if (anim) stopA(); else startA(); } });
    const ro1 = kit.readout(controls, { label: '' });
    const ro2 = kit.readout(controls, { label: '' });
    const ro3 = kit.readout(controls, { label: '' });

    let anim = null, acc = 0;
    function stopA() { if (anim) { anim.stop(); anim = null; } playB.textContent = '▶ faire croître n'; }
    function startA() {
      const F = FAM[fam]; if (n >= F.nmax) { n = 1; nS.value = 1; }
      playB.textContent = '❚❚ pause'; acc = 0;
      anim = kit.animate(dt => { acc += dt; if (acc < 0.25) return; acc = 0; if (n >= FAM[fam].nmax) { stopA(); return; } n++; nS.value = n; draw(); });
    }

    const inOmega = (F, z) => { const m = Math.hypot(z[0], z[1]); if (F.omega === 'C') return true; if (F.omega === 'D') return m < 1 - 1e-9; return m < 1 - 1e-9 && m > 1e-9; };
    let P = null;
    function draw() {
      try {
        const F = FAM[fam]; const ctx = st.ctx, t = th(); st.clear();
        const asp = st.W / st.H; const vy = F.view, vx = F.view * asp;
        P = kit.plane(ctx, { xmin: -vx, xmax: vx, ymin: -vy, ymax: vy, W: st.W, H: st.H });
        if (showBg) {
          kit.domainColor(st, P, z => F.evalf(n, z), { step: 3 });
          ctx.save(); ctx.globalAlpha = 0.5; ctx.fillStyle = t.bg; ctx.fillRect(0, 0, st.W, st.H); ctx.restore();
        }
        const stepGrid = F.view > 5 ? 2 : (F.view > 1.6 ? 0.5 : 0.5);
        P.grid(stepGrid, t.grid); P.axes({ labels: true, step: F.view > 5 ? 2 : 0.5 });
        // bord de Omega
        if (F.omega !== 'C') { P.circle(0, 0, 1, { color: t.fg, width: 1.8 }); if (F.omega === 'P') P.point(0, 0, { r: 4, color: t.bg, stroke: t.fg }); P.text(0.72, 0.78, '∂Ω', { color: t.fg, font: '12px system-ui, sans-serif' }); }
        // trajectoires
        if (showTraj) {
          ctx.save(); ctx.fillStyle = t.accent; ctx.globalAlpha = 0.35;
          for (let m = 1; m < n; m++) for (const zz of rootsOf(fam, m)) { if (!isFinite(zz[0])) continue; const [px, py] = P.toPx(zz[0], zz[1]); if (px < -5 || px > st.W + 5 || py < -5 || py > st.H + 5) continue; ctx.beginPath(); ctx.arc(px, py, 2.2, 0, 2 * Math.PI); ctx.fill(); }
          ctx.restore();
        }
        // le disque D
        const [cx, cy] = P.toPx(cen[0], cen[1]);
        P.circle(cen[0], cen[1], rho, { color: '#ffffff', width: 3, fill: 'rgba(255,255,255,0.10)' });
        P.circle(cen[0], cen[1], rho, { color: t.fg, width: 1, dash: [5, 4] });
        P.point(cen[0], cen[1], { r: 5, color: t.accent4, stroke: t.fg });
        P.text(cen[0], cen[1], 'D', { dx: 8, dy: -6, font: 'bold 13px system-ui, sans-serif', color: t.fg });
        // zéros de f_n
        const rts = rootsOf(fam, n); let cntN = 0;
        for (const zz of rts) {
          if (!inOmega(F, zz)) { const [px, py] = P.toPx(zz[0], zz[1]); ctx.save(); ctx.strokeStyle = t.fg; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(px, py, 4.5, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); continue; }
          const inside = Math.hypot(zz[0] - cen[0], zz[1] - cen[1]) < rho; if (inside) cntN++;
          P.point(zz[0], zz[1], { r: inside ? 6 : 4.5, color: inside ? t.accent2 : t.accent, stroke: t.fg });
        }
        if (fam === 'punct') { P.text(0, 0, 'zéro d’ordre n en 0 ∉ Ω', { dx: 8, dy: 16, color: t.fg, baseline: 'top', font: '11px system-ui, sans-serif' }); }
        // zéros de f
        let cntF = 0, edge = false, lim = F.lim;
        if (lim) for (const [zz, mult] of lim) {
          const [px, py] = P.toPx(zz[0], zz[1]); ctx.save(); ctx.strokeStyle = t.fg; ctx.lineWidth = 2.6; ctx.beginPath(); ctx.moveTo(px - 8, py - 8); ctx.lineTo(px + 8, py + 8); ctx.moveTo(px - 8, py + 8); ctx.lineTo(px + 8, py - 8); ctx.stroke(); ctx.restore();
          const dd = Math.hypot(zz[0] - cen[0], zz[1] - cen[1]); if (dd < rho) cntF += mult; if (Math.abs(dd - rho) < 0.02 * Math.max(1, F.view / 2)) edge = true;
        }
        // lecture
        const inOm = (F.omega === 'C') || (Math.hypot(cen[0], cen[1]) + rho < 1 - 1e-9);
        const fz = F.lim === null;
        ro1.set('Z(f_n,D) = ' + cntN, true);
        ro2.set(fz ? 'f \\equiv 0' : 'Z(f,D) = ' + cntF, true);
        if (fz) ro3.set('<span style="color:' + t.accent2 + '">f ≡ 0 : Hurwitz ne s’applique pas</span>');
        else if (!inOm) ro3.set('<span style="color:' + t.accent2 + '">D ⊄ Ω : hypothèse non vérifiée</span>');
        else if (edge) ro3.set('<span style="color:' + t.accent2 + '">∂D passe par un zéro de f : hypothèse non vérifiée</span>');
        else ro3.set(cntN === cntF ? '<span style="color:' + t.accent3 + '">Z(f_n,D) = Z(f,D) ✓</span>' : 'pas encore égaux : augmenter n');
      } catch (e) { console.error(e); }
    }

    const setC = p => { const [x, y] = P.toWorld(p.x, p.y); cen = [x, y]; draw(); };
    const off = kit.drag(st.canvas, { onDown: setC, onMove: (p, ev, down) => { if (down) setC(p); } });
    st.onResize = draw;
    draw();
    return () => { stopA(); off(); st.destroy(); };
  }
});
