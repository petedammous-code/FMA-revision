FMA.registerViz({
  id: 'viz-ch09-galerie-contre-exemples',
  chapter: 9,
  title: "Galerie de contre-exemples : pourquoi ce n'est pas une sous-variété",
  description: String.raw`**Ce que l'on voit.** Six ensembles $S\subset\mathbb R^2$ (le premier est un témoin positif). À gauche : l'ensemble entier, le point $p\in S$ (à **glisser** le long de $S$, ou à faire défiler avec le curseur) et le disque $D(p,\rho)$. À droite : un **zoom** sur $S\cap D(p,\rho)$ **privé du point $p$**, chaque composante connexe étant coloriée d'une couleur différente.

**Le test.** Si $S$ est une sous-variété de dimension $m$, la condition 2 de la Définition IX.2.1 (poly, p. 148) dit que $S$ est, près de $p$, homéomorphe à un ouvert connexe $W$ de $\mathbb R^m$. Or un intervalle ouvert privé d'un point a **2** composantes connexes ($m=1$), et un ouvert connexe de $\mathbb R^m$, $m\ge2$, privé d'un point reste **connexe**. Si, pour $\rho$ assez petit, on trouve un nombre de composantes différent de $2$ en dimension $1$, la condition 2 échoue (Exemples IX.2.11, IX.2.12, p. 150).

**Ce qu'il faut regarder.**
* **Cercle** : partout $2$ composantes (pour $\rho$ petit ; trop grand, le disque « voit » le cercle entier et le compte change : le test est local).
* **Demi-droite, croix** : $1$ composante au bord $0$, $4$ au centre de la croix. Seuls ces points sont mauvais ; partout ailleurs le compte vaut $2$.
* **Boucle** $t\mapsto(t^3-4t,\,t^2-4)$ : immersion ($x'(t)\neq0$ partout) mais $x(2)=x(-2)$ : au point double, $4$ composantes. Une immersion n'est pas un paramétrage (condition 2 : homéomorphisme *sur l'image*).
* **Folium** $t\mapsto\bigl(\frac{3t}{1+t^3},\frac{3t^2}{1+t^3}\bigr)$, $t>-1$ : immersion **injective**, et pourtant $3$ composantes en $(0,0)=x(0)$. Lancez **Parcourir** : quand $t\to+\infty$, $x(t)$ revient s'écraser sur $(0,0)$ alors que $t$ est loin de $0$ (voir $|x(t)-x(0)|$ petit et $|t-0|$ grand) : $x^{-1}$ n'est pas continue.
* **Rebroussement** $t\mapsto(t^2,t^3)$ : le test des composantes est *réussi* ($2$ branches), mais c'est la condition 3 qui échoue : la flèche vitesse $x'(t)=(2t,3t^2)$ s'éteint en $t=0$ ($dx_0$ n'est pas injective ; Exercice IX.2.13). Un ensemble peut passer un test et échouer à l'autre.`,
  related: ['ch09-sous-variete-def', 'ch09-contre-ex-demi-droite', 'ch09-contre-ex-croix', 'ch09-contre-ex-point-multiple', 'ch09-contre-ex-folium'],
  height: 560,
  mount(container, kit) {
    const T = () => kit.theme();
    const PI = Math.PI;

    // ---------------- définition des ensembles ----------------
    // chaque ensemble : polys = liste de polylignes d'échantillons {x,y,t,vx,vy}
    function polyline(ts, fx, fy, dfx, dfy) {
      return ts.map(t => ({ x: fx(t), y: fy(t), t, vx: dfx ? dfx(t) : NaN, vy: dfy ? dfy(t) : NaN }));
    }
    const range = (a, b, d) => { const out = []; for (let k = Math.round(a * d); k <= Math.round(b * d); k++) out.push(k / d); return out; };
    const geom = (a, b, n) => Array.from({ length: n }, (_, i) => a * Math.pow(b / a, (i + 1) / n));

    const SETS = {
      cercle: {
        name: 'cercle (témoin : une vraie sous-variété)', view: [-1.7, 1.7, -1.5, 1.5], t0: 0, special: 'cercle', hasT: true,
        polys: () => [polyline(Array.from({ length: 1201 }, (_, k) => 2 * PI * k / 1200), Math.cos, Math.sin, t => -Math.sin(t), Math.cos)],
        info: String.raw`**Le cercle $\mathbb S^1$** est une sous-variété de dimension 1. En tout point, pour $\rho$ petit, $S\cap D(p,\rho)\setminus\{p\}$ a exactement **2** composantes connexes, comme un intervalle ouvert privé d'un point. Augmentez $\rho$ : le disque finit par contenir le cercle entier et le compte tombe à $1$ — le test ne vaut que pour $\rho$ assez petit.`,
      },
      demi: {
        name: 'demi-droite fermée [0 ; +∞[ ⊂ ℝ', view: [-1.2, 3.4, -1.6, 1.6], t0: 0, special: 'demi', hasT: true,
        polys: () => [polyline(range(0, 3, 200), t => t, () => 0, () => 1, () => 0)],
        info: String.raw`**Exemple IX.2.11.** $S=[0;+\infty[\ \subset\mathbb R$ (dessinée sur l'axe horizontal). En $p=0$ : **1** seule composante, alors qu'un intervalle ouvert privé d'un point en a 2 ; donc $m\ne1$. Pour $m=0$ un ouvert est discret, ce qui est faux près de $0$. Pour $m\ge2$ on prend un point $b>0$ voisin : $[0;a[\setminus\{b\}$ a 2 composantes (faites glisser $p$ : le compte vaut $2$), alors qu'un ouvert connexe de $\mathbb R^m$ privé d'un point reste connexe. Aucune dimension ne convient : le « bord » est interdit.`,
      },
      croix: {
        name: 'croix  xy = 0', view: [-2.2, 2.2, -1.7, 1.7], t0: null, special: 'croix', hasT: false,
        polys: () => [polyline(range(-2, 2, 200), t => t, () => 0), polyline(range(-2, 2, 200), () => 0, t => t)],
        info: String.raw`**Exemple IX.2.12.** $S=\{xy=0\}$ est $f^{-1}(0)$ pour $f(x,y)=xy$, et $0$ est valeur critique ($df_{(0,0)}=0$). Tout voisinage de l'origine dans $S$ est encore une croix : **4** composantes une fois l'origine retirée, alors qu'un ouvert connexe de $\mathbb R^m$ privé d'un point en a au plus 2. En tout autre point de la croix, $S$ est une droite : le compte vaut $2$.`,
      },
      cusp: {
        name: 'rebroussement  t ↦ (t², t³)', view: [-0.7, 1.7, -1.7, 1.7], t0: 0, special: 'cusp', hasT: true,
        polys: () => [polyline(range(-1.2, 1.2, 300), t => t * t, t => t * t * t, t => 2 * t, t => 3 * t * t)],
        info: String.raw`**Exercice IX.2.13.** $x(t)=(t^2,t^3)$ est un homéomorphisme $C^\infty$ de $\mathbb R$ sur $S=\{y^2=x^3\}$ : le test des composantes est réussi ($2$ branches en $(0,0)$). Mais $x'(t)=(2t,3t^2)$ s'annule en $t=0$ : $dx_0$ n'est pas injective, la condition 3 échoue, et aucun autre paramétrage local en $(0,0)$ n'est une immersion. Regardez la flèche vitesse se réduire à rien quand $p\to(0,0)$.`,
      },
      boucle: {
        name: 'boucle  t ↦ (t³−4t, t²−4)', view: [-5.2, 5.2, -4.7, 2.5], t0: 2, special: 'boucle', hasT: true,
        polys: () => [polyline(range(-2.5, 2.5, 400), t => t * t * t - 4 * t, t => t * t - 4, t => 3 * t * t - 4, t => 2 * t)],
        info: String.raw`**Exemple IX.2.14.** $x(t)=(t^3-4t,\,t^2-4)$ est une immersion en tout point ($x'(t)=(3t^2-4,\,2t)$ ne s'annule jamais) mais $x(2)=x(-2)=(0,0)$ : **point double**, avec **4** composantes une fois $(0,0)$ retiré. Le paramétrage global n'est pas un homéomorphisme sur son image ; l'image n'est pas une sous-variété (même si chaque *morceau* $x(]t_0-\varepsilon,t_0+\varepsilon[)$ en est une).`,
      },
      folium: {
        name: 'folium de Descartes  t ↦ (3t, 3t²)/(1+t³)', view: [-3.2, 3.2, -2.4, 3.2], t0: 0, special: 'folium', hasT: true,
        polys: () => {
          const fx = t => 3 * t / (1 + t * t * t), fy = t => 3 * t * t / (1 + t * t * t);
          const dx = t => 3 * (1 - 2 * t * t * t) / Math.pow(1 + t * t * t, 2), dy = t => (6 * t - 3 * t * t * t * t) / Math.pow(1 + t * t * t, 2);
          const ts = range(-0.9, 1, 400).concat(geom(1, 1e4, 900));
          return [polyline(ts, fx, fy, dx, dy)];
        },
        info: String.raw`**Exemple IX.2.15.** $x(t)=\bigl(\frac{3t}{1+t^3},\frac{3t^2}{1+t^3}\bigr)$, $t\in]-1;+\infty[$, est une immersion **injective**. Pourtant, près de $(0,0)=x(0)$, l'ensemble a **3** branches (venant de $t<0$, de $t>0$ et de $t\to+\infty$ qui s'accumule sur l'origine). Condition 2 en défaut : $x$ n'est pas un homéomorphisme sur son image, $x(t)\to(0,0)$ quand $t\to+\infty$ sans que $t\to0$. Cliquez **Parcourir**.`,
      },
    };

    // ---------------- état ----------------
    let key = 'cercle';
    let data = null;      // {polys, flat, ptsPoly, view}
    let pi = 0;           // indice du point p dans flat
    let playing = null;
    let L = null, Rz = null; // plans (gauche, droite)
    let comp = null;

    function build() {
      const S = SETS[key];
      const polys = S.polys();
      const flat = []; polys.forEach((pl, a) => pl.forEach((s, b) => { s.poly = a; s.k = b; s.i = flat.length; flat.push(s); }));
      data = { polys, flat, pts: polys.map(pl => pl.map(s => [s.x, s.y])) };
      pi = specialIndex();
    }
    function specialIndex() {
      const S = SETS[key]; const f = data.flat;
      if (key === 'croix') return f.findIndex(s => Math.abs(s.x) < 1e-12 && Math.abs(s.y) < 1e-12);
      if (S.t0 !== null && S.t0 !== undefined) { let best = 0, bd = Infinity; f.forEach((s, i) => { const d = Math.abs(s.t - S.t0); if (d < bd) { bd = d; best = i; } }); return best; }
      return 0;
    }

    // ---------------- composantes connexes de S ∩ D(p,ρ) \ {p} ----------------
    function compute(rho) {
      const f = data.flat, n = f.length, p = f[pi];
      const inside = new Uint8Array(n), par = new Int32Array(n);
      const rr = rho * rho;
      for (let i = 0; i < n; i++) {
        par[i] = i; const s = f[i];
        const dx = s.x - p.x, dy = s.y - p.y, d2 = dx * dx + dy * dy;
        inside[i] = (d2 <= rr && d2 > 1e-18) ? 1 : 0;
      }
      const find = a => { while (par[a] !== a) { par[a] = par[par[a]]; a = par[a]; } return a; };
      const uni = (a, b) => { a = find(a); b = find(b); if (a !== b) par[a] = b; };
      const seen = new Map();
      for (let i = 0; i < n; i++) {
        if (!inside[i]) continue; const s = f[i];
        if (i + 1 < n && inside[i + 1] && f[i + 1].poly === s.poly) uni(i, i + 1);
        const kx = Math.round(s.x * 1e6) + 0, ky = Math.round(s.y * 1e6) + 0, ks = kx + ',' + ky;
        if (seen.has(ks)) uni(i, seen.get(ks)); else seen.set(ks, i);
      }
      const ids = new Map(); const cid = new Int32Array(n).fill(-1);
      for (let i = 0; i < n; i++) if (inside[i]) { const r = find(i); if (!ids.has(r)) ids.set(r, ids.size); cid[i] = ids.get(r); }
      comp = { inside, cid, count: ids.size };
    }

    // ---------------- interface ----------------
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:8px;align-items:start;';
    container.appendChild(grid);
    const cellL = document.createElement('div'), cellR = document.createElement('div');
    grid.appendChild(cellL); grid.appendChild(cellR);
    const stL = kit.canvas(cellL, { height: 290 });
    const stR = kit.canvas(cellR, { height: 290 });
    const controls = kit.controls(container);
    const sel = kit.select(controls, { label: 'ensemble', options: Object.keys(SETS).map(k => [SETS[k].name, k]), value: key, onChange: v => { key = v; stop(); build(); setInfo(); syncPos(); draw(); } });
    sel.el.style.flex = '1 1 100%'; sel.select.style.maxWidth = '100%';
    const row = kit.row(controls);
    const rhoS = kit.slider(row, { label: '$\\rho$', min: 0.05, max: 2, step: 0.01, value: 0.35, onChange: draw });
    const posS = kit.slider(row, { label: 'position de $p$', min: 0, max: 1, step: 0.001, value: 0, format: v => (+v).toFixed(2), onChange: v => { stop(); pi = Math.round(v * (data.flat.length - 1)); draw(); } });
    const row2 = kit.row(controls);
    kit.button(row2, { label: 'p = point singulier', onClick: () => { stop(); pi = specialIndex(); syncPos(); draw(); } });
    const playBtn = kit.button(row2, { label: 'Parcourir', primary: true, onClick: () => { if (playing) stop(); else start(); } });
    const ro = kit.readout(controls, { label: '' }); ro.el.style.flex = '1 1 100%';
    const verdict = document.createElement('div'); verdict.className = 'viz-note'; verdict.style.fontWeight = '600'; container.appendChild(verdict);
    const infoEl = document.createElement('div'); infoEl.className = 'viz-note'; container.appendChild(infoEl);

    function setInfo() { infoEl.innerHTML = ''; kit.md(infoEl, SETS[key].info); }
    function syncPos() { posS.value = pi / (data.flat.length - 1); }
    function stop() { if (playing) { playing.stop(); playing = null; } playBtn.textContent = 'Parcourir'; }
    function start() {
      let f = pi / (data.flat.length - 1); if (f > 0.97) f = 0;
      playBtn.textContent = 'Pause';
      playing = kit.animate(dt => { f += dt / 9; if (f >= 1) f = 0; pi = Math.round(f * (data.flat.length - 1)); syncPos(); draw(); });
    }

    // ---------------- dessin ----------------
    const COLORS = () => { const t = T(); return [t.accent, t.accent2, t.accent3, t.accent4, t.accent5, '#8a8f98']; };

    function drawLeft() {
      const { ctx, W, H } = stL; const t = T(); const S = SETS[key]; const p = data.flat[pi];
      ctx.clearRect(0, 0, W, H);
      const v = S.view; L = kit.plane(ctx, { xmin: v[0], xmax: v[1], ymin: v[2], ymax: v[3], W, H });
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.clip();
      L.grid(1, t.grid); L.axes({ labels: false });
      data.pts.forEach(pts => L.curve(pts, { color: t.fg, width: 2.2 }));
      // point spécial (x(t0))
      const sp = data.flat[specialIndex()];
      L.point(sp.x, sp.y, { r: 4, color: t.bg, stroke: t.muted });
      // disque
      L.circle(p.x, p.y, rho(), { color: t.accent4, width: 1.8, dash: [5, 3], fill: 'rgba(224,139,26,0.10)' });
      // vitesse
      if (isFinite(p.vx)) {
        let vx = p.vx, vy = p.vy; const m = Math.hypot(vx, vy); const cap = 1.0; const sc = m > cap ? cap / m : 1; vx *= sc * 0.8; vy *= sc * 0.8;
        L.vector(p.x, p.y, vx, vy, { color: t.accent2, width: 2.4, head: 8 });
      }
      L.point(p.x, p.y, { r: 6, color: t.accent4, stroke: t.bg });
      L.text(p.x, p.y, 'p', { dx: 9, dy: -6 });
      ctx.restore();
      ctx.fillStyle = t.muted; ctx.font = '12px system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillText('S  (glisser p le long de S)', 8, 6);
      if (isFinite(p.vx)) { ctx.fillStyle = t.accent2; ctx.fillText('flèche : vitesse x′(t)', 8, 22); }
    }
    function rho() { return rhoS.value; }

    function drawRight() {
      const { ctx, W, H } = stR; const t = T(); const p = data.flat[pi]; const r = rho(); const h = 1.2 * r;
      ctx.clearRect(0, 0, W, H);
      Rz = kit.plane(ctx, { xmin: p.x - h, xmax: p.x + h, ymin: p.y - h, ymax: p.y + h, W, H });
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.clip();
      Rz.circle(p.x, p.y, r, { color: t.accent4, width: 1.8, dash: [5, 3] });
      const cols = COLORS(); const f = data.flat; const n = f.length;
      ctx.lineWidth = 3.4; ctx.lineCap = 'round';
      const byColor = new Map();
      for (let i = 0; i + 1 < n; i++) {
        if (!comp.inside[i] || !comp.inside[i + 1] || f[i].poly !== f[i + 1].poly) continue;
        const c = comp.cid[i]; if (!byColor.has(c)) byColor.set(c, []); byColor.get(c).push(i);
      }
      byColor.forEach((list, c) => {
        ctx.strokeStyle = cols[c % cols.length]; ctx.beginPath();
        for (const i of list) { const a = Rz.toPx(f[i].x, f[i].y), b = Rz.toPx(f[i + 1].x, f[i + 1].y); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); }
        ctx.stroke();
      });
      // points isolés (composantes réduites à un échantillon)
      // p retiré : cercle ouvert
      const [px, py] = Rz.toPx(p.x, p.y);
      ctx.fillStyle = t.bg; ctx.strokeStyle = t.fg; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.arc(px, py, 6, 0, 2 * PI); ctx.fill(); ctx.stroke();
      ctx.restore();
      ctx.fillStyle = t.muted; ctx.font = '12px system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
      ctx.fillText('zoom : S ∩ D(p,ρ) privé de p', 8, 6);
      ctx.fillStyle = t.fg; ctx.font = 'bold 15px system-ui, sans-serif'; ctx.textBaseline = 'bottom';
      ctx.fillText(comp.count + (comp.count > 1 ? ' composantes' : ' composante'), 8, H - 8);
    }

    function updateText() {
      const p = data.flat[pi]; const S = SETS[key];
      const k = comp.count;
      let r = `p = (${p.x.toFixed(2)}, ${p.y.toFixed(2)})`;
      if (isFinite(p.vx) && S.hasT) {
        const tt = Math.abs(p.t) >= 100 ? p.t.toExponential(1) : p.t.toFixed(2);
        r += ` &nbsp; t = ${tt} &nbsp; |x′(t)| = ${Math.hypot(p.vx, p.vy).toFixed(3)}`;
      }
      if (S.t0 !== null && S.t0 !== undefined && S.hasT && key !== 'cercle' && key !== 'demi') {
        const s0 = data.flat[specialIndex()];
        const d = Math.hypot(p.x - s0.x, p.y - s0.y), dt = Math.abs(p.t - S.t0);
        r += ` &nbsp; |x(t)−x(${S.t0})| = ${d.toFixed(3)} &nbsp; |t−${S.t0}| = ${dt >= 100 ? dt.toExponential(1) : dt.toFixed(2)}`;
      }
      ro.set(r);
      let msg, col;
      if (k === 2) { msg = '2 composantes : compatible avec une sous-variété de dimension 1 en ce point.'; col = ''; }
      else { msg = k + ' composante' + (k > 1 ? 's' : '') + ' ≠ 2 : impossible en dimension 1 (un intervalle ouvert privé d’un point en a 2) ; en dimension ≥ 2 il en faudrait 1, en dimension 0 aucune.'; col = '#d03030'; }
      if (key === 'cusp' && Math.hypot(p.vx, p.vy) < 0.15) { msg = '2 composantes (test réussi) mais |x′(t)| ≈ 0 : dx_t non injective, la condition 3 échoue.'; col = '#d03030'; }
      verdict.textContent = msg; verdict.style.color = col;
    }

    function draw() { try { compute(rho()); drawLeft(); drawRight(); updateText(); } catch (e) { console.error(e); } }

    // ---------------- glisser p ----------------
    function nearest(pos) {
      if (!L) return;
      let best = pi, bd = Infinity; const f = data.flat;
      for (let i = 0; i < f.length; i += 1) { const [x, y] = L.toPx(f[i].x, f[i].y); const d = (x - pos.x) * (x - pos.x) + (y - pos.y) * (y - pos.y); if (d < bd) { bd = d; best = i; } }
      pi = best; syncPos(); draw();
    }
    const off = kit.drag(stL.canvas, { onDown: p => { stop(); nearest(p); }, onMove: (p, ev, down) => { if (down) nearest(p); } });

    stL.onResize = draw; stR.onResize = draw;
    build(); setInfo(); syncPos(); draw();
    return () => { stop(); off(); stL.destroy(); stR.destroy(); };
  }
});
