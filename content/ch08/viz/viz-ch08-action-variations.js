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
3. Déforme $\gamma_0$ : $R\not\equiv0$. Choisis la direction « $h$ adaptée au résidu » ($h=4t(1-t)R$, normalisée) : la pente vaut $\int 4t(1-t)R^2>0$. C'est le mécanisme de [[ch08-du-bois-reymond]] et [[ch08-du-bois-reymond-derivee]] : si (E.L) n'est pas satisfaite, on fabrique une variation nulle aux bords qui fait varier l'action au premier ordre. Même chose avec la petite « bosse en $t_0$ » placée là où $R>0$.
4. Potentiel oscillateur $U=\tfrac12\omega^2q^2$ et $h=\sin(\pi t)$ : $\varphi''(0)=\int_0^1(h'^2-\omega^2h^2)=\tfrac12(\pi^2-\omega^2)$. Pour $\omega<\pi$ la solution est un **minimum** dans cette direction, pour $\omega>\pi$ c'est un **col** ($\varphi$ concave) : (E.L) caractérise les points **critiques**, pas les minima. Près de $\omega=\pi$, la solution $\gamma_*(t)=\sin(\omega t)/\sin\omega$ explose (en $\omega=\pi$ il n'y en a aucune).
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
    function label(x, y, s, color, align = 'left') { const { ctx } = st; ctx.save(); ctx.font = '12px system-ui, sans-serif'; ctx.fillStyle = color; ctx.textAlign = align; ctx.textBaseline = 'top'; ctx.fillText(s, x, y); ctx.restore(); }

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
          void pyb;
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
        label(x + 6, y + 4, 'R(t) ' + (rmax < 1e-6 ? '≡ 0' : '(÷ ' + kit.fmt(+mR.toPrecision(2)) + ')'), T.accent2);
        label(x + 6 + 92, y + 4, 'h(t)', T.accent); label(x + w - 6, y + 4, 'aire R·h', T.accent3, 'right'); }

      ro1.set(`φ(0) = L̂(γ₀) = ${phi0.toFixed(4)} ; φ(s) = ${phis.toFixed(4)}`);
      ro2.set(`∫(∂L/∂q·h + ∂L/∂v·h′) = ${dQ2.toFixed(4)} ; ∫R·h = ${dIPP.toFixed(4)} ; numérique = ${dFD.toFixed(4)}`);
      ro3.set(`φ″(0) = ∫(h′² − U″(γ₀)h²) = ${curv.toFixed(3)} ${curv > 1e-9 ? '(convexe)' : curv < -1e-9 ? '(concave)' : ''}`);
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
