FMA.registerViz({
  id: 'viz-ch06-fonctions-implicites',
  chapter: 6,
  title: "Fonctions implicites : une courbe de niveau est localement un graphe",
  description: String.raw`**Ce que l'on voit.** La courbe de niveau $\{f(x,y)=c\}$ d'une fonction $f:\mathbb R^2\to\mathbb R$ (en gris). Le point orange $(x_0,y_0)$ est **à glisser le long de la courbe**. Le théorème des fonctions implicites (poly, Théorème VI.2.1, p. 118) dit : si $\dfrac{\partial f}{\partial y}(x_0,y_0)\neq 0$, il existe un rectangle $U_0\times V_0$ autour de $(x_0,y_0)$ dans lequel
$$f(x,y)=f(x_0,y_0)\iff y=\varphi(x),$$
$$\varphi'(x)=-\frac{\partial_x f(x,\varphi(x))}{\partial_y f(x,\varphi(x))}.$$
Ce rectangle (bleu) est **calculé numériquement** : $V_0=\,]y_0-s,y_0+s[$ est fixé par le curseur $s$, et l'on cherche le plus large $U_0$ tel que, pour tout $x\in U_0$, $y\mapsto f(x,y)$ soit strictement monotone sur $V_0$ et change de signe (par rapport à $c$) entre les deux bords : la courbe y est alors exactement le graphe de $\varphi$ (en rouge). La tangente (orange, pointillée) a pour pente $\varphi'(x_0)$, et le gradient $\nabla f$ (violet) lui est orthogonal.

**Ce qu'il faut regarder.**
* **Réduisez $s$** : le rectangle s'élargit ($U_0$ grandit) ; **augmentez-le** : $U_0$ se rétrécit, car un autre morceau de la courbe finit par entrer dans $V_0$. Le théorème ne promet que *l'existence* d'un tel rectangle, pas sa taille.
* **Approchez-vous d'un point à tangente verticale** (cercle en $(1,0)$, lemniscate en $(\sqrt2,0)$) : $\partial_yf\to0$, la pente explose et $U_0$ se réduit à rien : *aucun* rectangle ne convient. L'hypothèse $\partial_yf(x_0,y_0)\ne0$ est indispensable.
* **Changez de variable** (« résoudre $x$ en fonction de $y$ ») : là où $\partial_yf=0$ mais $\partial_xf\ne0$, on obtient quand même un graphe $x=\psi(y)$. Le théorème s'applique avec les rôles échangés.
* **Points doubles** ($\nabla f=0$ : lemniscate et folium en $(0,0)$) : les deux dérivées partielles s'annulent, aucun des deux graphes n'existe, la courbe se croise.
* **$y^3-x=0$ en $(0,0)$** : $\partial_yf=3y^2=0$, mais la courbe est le graphe de $x\mapsto x^{1/3}$ (rectangle en pointillés) : $\varphi$ existe, continue, **mais n'est pas dérivable** en $0$ (pente $+\infty$). Sans $\partial_yf\neq0$, on perd la régularité.`,
  related: ['ch06-fonctions-implicites', 'ch06-inversion-locale', 'ch06-point-fixe-parametre-cp'],
  height: 560,
  mount(container, kit) {
    const st = kit.canvas(container, { height: 420 });
    const controls = kit.controls(container);
    const R = Math.SQRT2;
    const CURVES = {
      cercle: { name: 'cercle  x²+y² = 1', c: 1, f: (x, y) => x * x + y * y, fx: (x, y) => 2 * x, fy: (x, y) => 2 * y,
        pts: [['point quelconque', Math.cos(0.7), Math.sin(0.7)], ['tangente verticale (1,0)', 1, 0], ['tangente horizontale (0,1)', 0, 1]] },
      cubique: { name: 'y³ − x = 0', c: 0, f: (x, y) => y * y * y - x, fx: () => -1, fy: (x, y) => 3 * y * y,
        pts: [['point quelconque', 1, 1], ['origine : ∂ᵧf = 0 mais graphe continu', 0, 0]] },
      cusp: { name: 'y² − x³ = 0 (rebroussement)', c: 0, f: (x, y) => y * y - x * x * x, fx: (x, y) => -3 * x * x, fy: (x, y) => 2 * y,
        pts: [['point quelconque', 1, 1], ['origine (point singulier)', 0, 0]] },
      folium: { name: 'folium  x³ + y³ = 3xy', c: 0, f: (x, y) => x * x * x + y * y * y - 3 * x * y, fx: (x, y) => 3 * x * x - 3 * y, fy: (x, y) => 3 * y * y - 3 * x,
        pts: [['point quelconque', 1.5, 1.5], ['point double (0,0)', 0, 0], ['tangente verticale', Math.pow(2, 2 / 3), Math.cbrt(2)], ['tangente horizontale', Math.cbrt(2), Math.pow(2, 2 / 3)]] },
      lemn: { name: 'lemniscate  (x²+y²)² = 2(x²−y²)', c: 0, f: (x, y) => Math.pow(x * x + y * y, 2) - 2 * (x * x - y * y),
        fx: (x, y) => 4 * x * (x * x + y * y - 1), fy: (x, y) => 4 * y * (x * x + y * y + 1),
        pts: [['point quelconque', 1, 0.486], ['point double (0,0)', 0, 0], ['tangente verticale (√2,0)', R, 0]] },
    };
    const sel = kit.select(controls, { label: 'courbe', options: Object.keys(CURVES).map(k => [CURVES[k].name, k]), value: 'cercle', onChange: () => { rebuildPts(); setPoint(CURVES[sel.value].pts[0][1], CURVES[sel.value].pts[0][2]); } });
    const ptsel = kit.select(controls, { label: 'aller à', options: [['—', '0']], onChange: v => { const p = CURVES[sel.value].pts[+v]; if (p) setPoint(p[1], p[2]); } });
    [sel, ptsel].forEach(x => { x.el.style.flex = '1 1 230px'; x.el.style.minWidth = '0'; x.select.style.flex = '1 1 0'; x.select.style.width = '100%'; x.select.style.minWidth = '0'; });
    const row2 = kit.row(controls);
    const sSlider = kit.slider(row2, { label: String.raw`$s$ (demi-hauteur de $V_0$)`, min: 0.05, max: 1.5, step: 0.01, value: 0.3, onChange: draw });
    const swap = kit.checkbox(row2, { label: String.raw`résoudre $x$ en fonction de $y$`, checked: false, onChange: draw });
    const ro = kit.readout(controls, { label: '' });
    const msg = kit.note(container, '');
    let lastMsgKey = null;

    let px = Math.cos(0.7), py = Math.sin(0.7), P = null;
    function rebuildPts() {
      const s = ptsel.select; s.innerHTML = '';
      CURVES[sel.value].pts.forEach((p, i) => { const o = document.createElement('option'); o.value = i; o.textContent = p[0]; s.appendChild(o); });
    }
    rebuildPts();
    function project(x, y) {
      const C = CURVES[sel.value];
      for (let i = 0; i < 40; i++) {
        const v = C.f(x, y) - C.c, gx = C.fx(x, y), gy = C.fy(x, y), n2 = gx * gx + gy * gy;
        if (n2 < 1e-14) break;
        x -= v * gx / n2; y -= v * gy / n2;
        if (Math.abs(v) < 1e-13) break;
      }
      return [x, y];
    }
    function setPoint(x, y) {
      let q = project(x, y);
      for (const sp of CURVES[sel.value].pts.slice(1)) if (Math.hypot(q[0] - sp[1], q[1] - sp[2]) < 0.04) q = [sp[1], sp[2]]; px = q[0]; py = q[1]; draw(); }

    // marching squares for {F = c}
    function levelSet(F, c, ctx, Pl, cell, color, width) {
      const nx = Math.ceil(Pl.W / cell), ny = Math.ceil(Pl.H / cell);
      const vals = new Float64Array((nx + 1) * (ny + 1));
      for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) { const w = Pl.toWorld(i * cell, j * cell); vals[j * (nx + 1) + i] = F(w[0], w[1]) - c; }
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; ctx.beginPath();
      const interp = (a, b, va, vb) => a + (b - a) * (va / (va - vb));
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const v0 = vals[j * (nx + 1) + i], v1 = vals[j * (nx + 1) + i + 1], v2 = vals[(j + 1) * (nx + 1) + i + 1], v3 = vals[(j + 1) * (nx + 1) + i];
        const x0 = i * cell, x1 = (i + 1) * cell, y0 = j * cell, y1 = (j + 1) * cell;
        const e = [];
        if ((v0 < 0) !== (v1 < 0)) e.push([interp(x0, x1, v0, v1), y0]);
        if ((v1 < 0) !== (v2 < 0)) e.push([x1, interp(y0, y1, v1, v2)]);
        if ((v3 < 0) !== (v2 < 0)) e.push([interp(x0, x1, v3, v2), y1]);
        if ((v0 < 0) !== (v3 < 0)) e.push([x0, interp(y0, y1, v0, v3)]);
        if (e.length === 2) { ctx.moveTo(e[0][0], e[0][1]); ctx.lineTo(e[1][0], e[1][1]); }
        else if (e.length === 4) { ctx.moveTo(e[0][0], e[0][1]); ctx.lineTo(e[3][0], e[3][1]); ctx.moveTo(e[1][0], e[1][1]); ctx.lineTo(e[2][0], e[2][1]); }
      }
      ctx.stroke(); ctx.restore();
    }

    function draw() {
      try { drawInner(); } catch (e) { console.error(e); }
    }
    function drawInner() {
      const t = kit.theme(), ctx = st.ctx, C = CURVES[sel.value];
      st.clear(); ctx.fillStyle = t.bg; ctx.fillRect(0, 0, st.W, st.H);
      P = kit.plane(ctx, { xmin: -2.4, xmax: 2.4, ymin: -2, ymax: 2, W: st.W, H: st.H });
      P.grid(1); P.axes({ labels: true, xlabel: 'x', ylabel: 'y' });
      levelSet(C.f, C.c, ctx, P, 4, t.muted, 2.2);

      const sw = swap.value;
      const G = sw ? (u, v) => C.f(v, u) : C.f;
      const Gu = sw ? (u, v) => C.fy(v, u) : C.fx;
      const Gv = sw ? (u, v) => C.fx(v, u) : C.fy;
      const W2 = sw ? (u, v) => [v, u] : (u, v) => [u, v];
      const u0 = sw ? py : px, v0 = sw ? px : py, s = sSlider.value, c = C.c;
      const gv0 = Gv(u0, v0), gu0 = Gu(u0, v0);
      const sg = Math.sign(gv0);
      const du = 0.01, maxN = 250;
      const okRect = (u, strict) => {
        const lo = G(u, v0 - s) - c, hi = G(u, v0 + s) - c;
        if (!(lo * hi < 0)) return false;
        if (strict) for (let j = 0; j <= 14; j++) { const v = v0 - s + 2 * s * j / 14; if (Gv(u, v) * sg <= 0) return false; }
        return true;
      };
      const width = strict => { if (strict && Math.abs(gv0) < 1e-6) return 0; if (!okRect(u0, strict)) return 0; let k = 0; while (k < maxN && okRect(u0 + (k + 1) * du, strict) && okRect(u0 - (k + 1) * du, strict)) k++; return k * du; };
      const rStrict = width(true);
      const rWeak = rStrict > 0 ? 0 : width(false);
      const r = rStrict > 0 ? rStrict : rWeak;
      const rectPts = rr => [W2(u0 - rr, v0 - s), W2(u0 + rr, v0 - s), W2(u0 + rr, v0 + s), W2(u0 - rr, v0 + s)];

      if (r > 0) {
        const col = rStrict > 0 ? t.accent : t.accent4;
        P.fill(rectPts(r), { color: col, alpha: 0.12 });
        P.curve(rectPts(r), { color: col, width: 2, close: true, dash: rStrict > 0 ? null : [6, 4] });
        // fonction implicite : dichotomie dans V0
        const pts = [];
        for (let k = 0; k <= 80; k++) {
          const u = u0 - r + 2 * r * k / 80; let a = v0 - s, b = v0 + s; const fa = G(u, a) - c;
          for (let it = 0; it < 40; it++) { const m = (a + b) / 2; if (((G(u, m) - c) < 0) === (fa < 0)) a = m; else b = m; }
          pts.push(W2(u, (a + b) / 2));
        }
        P.curve(pts, { color: t.accent2, width: 3.2 });
        const lb = W2(u0 - r, v0 + s), lb2 = W2(u0, v0 - s);
        P.text(lb[0], lb[1], sw ? 'V₀' : 'U₀×V₀', { color: col, dx: 4, dy: -3, font: 'bold 12px system-ui, sans-serif' });
      }
      // tangente et gradient
      const n2 = Math.hypot(C.fx(px, py), C.fy(px, py));
      if (n2 > 1e-9) {
        const tx = -C.fy(px, py) / n2, ty = C.fx(px, py) / n2;
        const L = 0.7;
        P.curve([[px - L * tx, py - L * ty], [px + L * tx, py + L * ty]], { color: t.accent4, width: 1.6, dash: [5, 4] });
        P.vector(px, py, C.fx(px, py) / n2, C.fy(px, py) / n2, { color: t.accent5, width: 2, head: 8, scale: 0.55 });
      }
      P.point(px, py, { r: 6, color: t.accent4, stroke: t.fg });

      // lecture
      const fxv = C.fx(px, py), fyv = C.fy(px, py);
      const f4 = v => (Math.abs(v) < 5e-7 ? '0' : (+v.toFixed(3)).toString());
      let slope = '';
      if (!sw && Math.abs(fyv) > 1e-6) slope = ` ; pente φ′ = −∂ₓf/∂ᵧf = ${f4(-fxv / fyv)}`;
      if (sw && Math.abs(fxv) > 1e-6) slope = ` ; pente ψ′ = −∂ᵧf/∂ₓf = ${f4(-fyv / fxv)}`;
      ro.set(`(x₀,y₀) = (${f4(px)}, ${f4(py)}) ; ∂ₓf = ${f4(fxv)}, ∂ᵧf = ${f4(fyv)}${slope}${r > 0 ? ' ; demi-largeur de U₀ ≈ ' + r.toFixed(2) : ''}`);

      let key, text;
      const dv = sw ? String.raw`\partial_x f` : String.raw`\partial_y f`, dvName = sw ? 'x' : 'y', uName = sw ? 'y' : 'x';
      const fn = sw ? String.raw`\psi` : String.raw`\varphi`;
      if (Math.abs(fxv) < 1e-6 && Math.abs(fyv) < 1e-6) {
        key = 'double'; text = String.raw`**Point singulier** : $\nabla f(x_0,y_0)=0$. Aucune des deux dérivées partielles n'est non nulle : on ne peut résoudre ni $y$ en fonction de $x$ ni $x$ en fonction de $y$, et la courbe se croise ou a un rebroussement.`;
      } else if (rStrict > 0) {
        key = 'ok' + (sw ? 's' : 'n'); text = String.raw`$${dv}(x_0,y_0)\neq 0$ : sur le rectangle bleu, $\{f=c\}$ est exactement le graphe de $${fn}$ ($${dvName}=${fn}(${uName})$, en rouge), avec $${fn}'=-\dfrac{\partial_${uName} f}{\partial_${dvName} f}$.`;
      } else if (rWeak > 0) {
        key = 'weak'; text = String.raw`$${dv}(x_0,y_0)=0$ : le théorème ne s'applique pas. Il existe encore une branche **continue** (rectangle en pointillés) mais sa pente est infinie : $${fn}$ n'est pas dérivable en ce point. Essayez de résoudre l'autre variable.`;
      } else if (Math.abs(gv0) < 1e-6) {
        key = 'none' + (sw ? 's' : 'n'); text = String.raw`$${dv}(x_0,y_0)=0$ : **aucun rectangle** $U_0\times V_0$ ne convient (la tangente est ${sw ? 'horizontale' : 'verticale'}). ${Math.abs(gu0) > 1e-6 ? 'Mais l\'autre dérivée partielle est non nulle : cochez / décochez « résoudre $x$ en fonction de $y$ ».' : ''}`;
      } else {
        key = 'small'; text = String.raw`$s$ est trop grand : un autre morceau de la courbe traverse $V_0$. Diminuez $s$ : le théorème garantit un rectangle assez petit.`;
      }
      if (key !== lastMsgKey) { lastMsgKey = key; kit.md(msg, text); }
    }

    const off = kit.drag(st.canvas, {
      onDown: p => { if (P) { const w = P.toWorld(p.x, p.y); setPoint(w[0], w[1]); } },
      onMove: (p, ev, down) => { if (down && P) { const w = P.toWorld(p.x, p.y); setPoint(w[0], w[1]); } },
    });
    st.onResize = draw;
    draw();
    return () => { off(); st.destroy(); };
  }
});
