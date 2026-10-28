FMA.registerViz({
  id: 'viz-ch09-parametrage-plan-tangent',
  chapter: 9,
  title: "Paramétrage local, carte et plan tangent",
  description: String.raw`**Ce que l'on voit.** À gauche, l'ouvert $U\subset\mathbb R^2$ des paramètres $q=(u,v)$ ; à droite, la surface $S\subset\mathbb R^3$ et le point $p=x(q)$. Le quadrillage de $U$ est envoyé par le paramétrage $x$ sur le « quadrillage » de $S$ : c'est la **carte** $x^{-1}$ qui permet de lire $S$ avec des coordonnées. Les deux courbes coordonnées passant par $p$, $u\mapsto x(u,v_0)$ et $v\mapsto x(u_0,v)$, ont pour vecteurs vitesses
$$x_u(q)=dx_q(e_1)=\frac{\partial x}{\partial u}(q),\qquad x_v(q)=dx_q(e_2)=\frac{\partial x}{\partial v}(q),$$
et le plan qu'ils engendrent est l'**espace tangent** $T_pS=dx_q(\mathbb R^2)$ (poly, Proposition IX.7.9 et Corollaire IX.7.11, p. 161). Dans la fenêtre de droite, **glissez** pour tourner la surface ; dans celle de gauche, **glissez le point $q$**.

**Ce qu'il faut regarder.**
* **Cochez « courbes par $p$ »** : on trace les images $t\mapsto x(q+tw)$ de huit droites de $U$ passant par $q$, avec leurs vecteurs vitesses $dx_q(w)=w_1x_u+w_2x_v$ en $p$ (Définition IX.7.8, p. 160). Tous sont dans le plan tangent, et ils le remplissent : c'est exactement $T_pS=dx_q(\mathbb R^2)$, un plan (dimension $m=2$) parce que $dx_q$ est **injective** (condition 3 de la Définition IX.2.1, p. 148).
* **Sphère** : approchez-vous des pôles ($v\to\pm\pi/2$). Le vecteur $x_u$ s'écrase vers $0$ ($\|x_u\|=\cos v$), l'aire $\|x_u\times x_v\|$ tend vers $0$ et, au pôle même, $x_u=0$ : $dx_q$ n'est plus injective, l'image $dx_q(\mathbb R^2)$ n'est plus un plan. La sphère, elle, est une sous-variété et possède bien un plan tangent horizontal au pôle : c'est **ce paramétrage** qui est en défaut, pas la surface. Il faut y utiliser un autre paramétrage (un seul ne couvre jamais toute la sphère), et c'est pourquoi le domaine est l'*ouvert* $U=\,]-\pi,\pi[\times]-\pi/2,\pi/2[$, qui exclut les pôles (et le méridien $u=\pm\pi$).
* **Cône** $x(u,v)=(v\cos u,v\sin u,v)$ : sur la droite $v=0$ le paramétrage n'est pas une immersion ($x_u=(-v\sin u,v\cos u,0)=0$), et il n'y est même pas injectif (toute la droite $v=0$ est écrasée sur le sommet). Ce n'est pas un hasard : le cône $x^2+y^2=z^2$ n'est pas une sous-variété au sommet (Exercice IX.7.12) ; en restreignant à $v>0$ (une seule nappe, sommet exclu) on retrouve un vrai paramétrage local.
* **Graphe** $x(u,v)=(u,v,h(u,v))$ : $x_u=(1,0,h_u)$, $x_v=(0,1,h_v)$ sont toujours indépendants, et $T_pS$ est le graphe de l'application linéaire $dh_q$ (Proposition IX.7.13) ; le plan tangent affine dessiné est le graphe de l'approximation affine $h(q)+dh_q(\cdot)$ de $h$.
* **Toutes les surfaces** : le plan tangent (en couleur) est la meilleure approximation affine de $S$ en $p$ ; il est orthogonal à la normale $x_u\times x_v$ (case « normale »).`,
  related: ['ch09-sous-variete-def', 'ch09-espace-tangent-image-dx', 'ch09-base-espace-tangent', 'ch09-vecteur-tangent-espace-tangent-def', 'ch09-espace-tangent-graphe-equation'],
  height: 520,
  mount(container, kit) {
    const T = () => kit.theme();
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:8px;align-items:start;';
    container.appendChild(grid);
    const cellL = document.createElement('div'), cellR = document.createElement('div');
    grid.appendChild(cellL); grid.appendChild(cellR);
    const stU = kit.canvas(cellL, { height: 260 });
    const stS = kit.canvas(cellR, { height: 340 });
    const controls = kit.controls(container);
    const PI = Math.PI;

    // ---------- surfaces ----------
    const SURF = {
      sphere: { name: 'sphère (coordonnées sphériques)', f: (u, v) => [Math.cos(v) * Math.cos(u), Math.cos(v) * Math.sin(u), Math.sin(v)],
        u0: -PI, u1: PI, v0: -PI / 2, v1: PI / 2, R: 1.05, closed: true, q0: [0.6, 0.4], nu: 24, nv: 12,
        warn: 'pôle : x_u = 0' },
      tore: { name: 'tore', f: (u, v) => [(1.5 + 0.6 * Math.cos(v)) * Math.cos(u), (1.5 + 0.6 * Math.cos(v)) * Math.sin(u), 0.6 * Math.sin(v)],
        u0: -PI, u1: PI, v0: -PI, v1: PI, R: 2.2, closed: true, q0: [0.5, 0.9], nu: 36, nv: 14, warn: '' },
      graphe: { name: 'graphe  z = h(u,v)', f: (u, v) => [u, v, 0.55 * Math.sin(1.3 * u) * Math.cos(1.1 * v) + 0.045 * u * v],
        u0: -2, u1: 2, v0: -2, v1: 2, R: 2.2, closed: false, q0: [0.4, -0.3], nu: 16, nv: 16, warn: '' },
      cone: { name: 'cône (x = (v cos u, v sin u, v))', f: (u, v) => [v * Math.cos(u), v * Math.sin(u), v],
        u0: -PI, u1: PI, v0: -1.2, v1: 1.2, R: 1.7, closed: false, q0: [0.8, 0.6], nu: 24, nv: 12, warn: 'sommet : x_u = 0' },
    };
    let cur = 'sphere';
    let q = SURF.sphere.q0.slice();
    let yaw = -0.7, pitch = 0.5;

    const sel = kit.select(controls, { label: 'surface', options: Object.keys(SURF).map(k => [SURF[k].name, k]), value: cur, onChange: v => { cur = v; q = SURF[cur].q0.slice(); syncSliders(); draw(); } });

    const fitSel = x => { x.el.style.flex = '1 1 100%'; x.el.style.minWidth = '0'; x.el.style.maxWidth = '100%'; x.select.style.flex = '1 1 0'; x.select.style.width = '100%'; x.select.style.minWidth = '0'; };
    fitSel(sel);
    const rowS = kit.row(controls);
    // le navigateur n'atteint pas toujours exactement la borne max d'un curseur (arrondi du pas) : on aimante sur les bornes
    const snapEnds = (v, a, b) => (Math.abs(v - a) < 1.2 * (b - a) / 200 ? a : Math.abs(v - b) < 1.2 * (b - a) / 200 ? b : v);
    const su = kit.slider(rowS, { label: '$u$', min: -3.14, max: 3.14, step: 0.01, value: q[0], onChange: v => { const S = SURF[cur]; q[0] = clampU(snapEnds(v, S.u0, S.u1)); su.value = q[0]; draw(); } });
    const sv = kit.slider(rowS, { label: '$v$', min: -3.14, max: 3.14, step: 0.01, value: q[1], onChange: v => { const S = SURF[cur]; q[1] = clampV(snapEnds(v, S.v0, S.v1)); sv.value = q[1]; draw(); } });
    const rowC = kit.row(controls);
    const cCurves = kit.checkbox(rowC, { label: 'courbes par $p$', checked: false, onChange: draw });
    const cNormal = kit.checkbox(rowC, { label: 'normale', checked: false, onChange: draw });
    const cPlane = kit.checkbox(rowC, { label: 'plan tangent', checked: true, onChange: draw });
    const scl = kit.slider(rowC, { label: 'taille du plan', min: 0.2, max: 1.2, step: 0.05, value: 0.6, onChange: draw });
    const ro = kit.readout(controls, { label: '' });
    ro.el.style.flex = '1 1 100%';
    const warn = document.createElement('div'); warn.className = 'viz-note'; container.appendChild(warn);

    function clampU(v) { const S = SURF[cur]; return Math.max(S.u0, Math.min(S.u1, v)); }
    function clampV(v) { const S = SURF[cur]; return Math.max(S.v0, Math.min(S.v1, v)); }
    function syncSliders() {
      const S = SURF[cur];
      su.input.min = S.u0; su.input.max = S.u1; sv.input.min = S.v0; sv.input.max = S.v1;
      su.input.step = (S.u1 - S.u0) / 200; sv.input.step = (S.v1 - S.v0) / 200;
      su.value = q[0]; sv.value = q[1];
    }
    syncSliders();

    // ---------- helpers ----------
    const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
    const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
    const mulk = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
    const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    const nrm = a => Math.hypot(a[0], a[1], a[2]);
    function partials(u, v) {
      const f = SURF[cur].f, h = 1e-5;
      const xu = mulk(sub(f(u + h, v), f(u - h, v)), 1 / (2 * h));
      const xv = mulk(sub(f(u, v + h), f(u, v - h)), 1 / (2 * h));
      return [xu, xv];
    }
    // camera : yaw autour de z, puis inclinaison
    function cam() {
      const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      // lignes : écran-x, profondeur, écran-haut
      return {
        rx: [cy, -sy, 0],
        rd: [sy * cp, cy * cp, -sp],
        ru: [sy * sp, cy * sp, cp],
      };
    }
    function project(c, p, sc, W, H) { return [W / 2 + sc * dot(c.rx, p), H / 2 - sc * dot(c.ru, p) * 1.0, dot(c.rd, p)]; }

    // ---------- dessin du domaine U ----------
    let mapU = null;
    function drawU() {
      const { ctx, W, H } = stU; const t = T(); const S = SURF[cur];
      ctx.clearRect(0, 0, W, H);
      const mx = 30, my = 20;
      const bx0 = mx, bx1 = W - 12, by0 = H - my - 6, by1 = 14;
      const px = u => bx0 + (u - S.u0) / (S.u1 - S.u0) * (bx1 - bx0);
      const py = v => by0 + (v - S.v0) / (S.v1 - S.v0) * (by1 - by0);
      const qx = x => S.u0 + (x - bx0) / (bx1 - bx0) * (S.u1 - S.u0);
      const qy = y => S.v0 + (y - by0) / (by1 - by0) * (S.v1 - S.v0);
      mapU = { px, py, qx, qy, bx0, bx1, by0, by1 };
      ctx.save();
      ctx.fillStyle = t.accent5; ctx.globalAlpha = 0.07; ctx.fillRect(bx0, by1, bx1 - bx0, by0 - by1); ctx.globalAlpha = 1;
      ctx.strokeStyle = t.grid; ctx.lineWidth = 1;
      for (let i = 0; i <= S.nu; i++) { const u = S.u0 + (S.u1 - S.u0) * i / S.nu; ctx.beginPath(); ctx.moveTo(px(u), by0); ctx.lineTo(px(u), by1); ctx.stroke(); }
      for (let j = 0; j <= S.nv; j++) { const v = S.v0 + (S.v1 - S.v0) * j / S.nv; ctx.beginPath(); ctx.moveTo(bx0, py(v)); ctx.lineTo(bx1, py(v)); ctx.stroke(); }
      ctx.strokeStyle = t.axis; ctx.lineWidth = 1.4; ctx.setLineDash([]); ctx.strokeRect(bx0, by1, bx1 - bx0, by0 - by1);
      // courbes coordonnées par q
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = t.accent2; ctx.beginPath(); ctx.moveTo(bx0, py(q[1])); ctx.lineTo(bx1, py(q[1])); ctx.stroke();
      ctx.strokeStyle = t.accent3; ctx.beginPath(); ctx.moveTo(px(q[0]), by0); ctx.lineTo(px(q[0]), by1); ctx.stroke();
      // droites par q (courbes par p)
      if (cCurves.value) {
        const d = 0.2 * Math.min(S.u1 - S.u0, S.v1 - S.v0);
        ctx.strokeStyle = t.accent4; ctx.lineWidth = 1.5;
        for (let k = 0; k < 8; k++) {
          const a = k * PI / 8, w = [Math.cos(a), Math.sin(a)];
          ctx.beginPath(); let first = true;
          for (let i = -20; i <= 20; i++) { const tt = d * i / 20, u = q[0] + tt * w[0], v = q[1] + tt * w[1]; if (!inU(u, v)) { first = true; continue; } if (first) { ctx.moveTo(px(u), py(v)); first = false; } else ctx.lineTo(px(u), py(v)); }
          ctx.stroke();
        }
      }
      // axes labels
      ctx.fillStyle = t.muted; ctx.font = '11px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillText(kit.fmt(+S.u0.toFixed(2)), bx0, by0 + 3); ctx.fillText(kit.fmt(+S.u1.toFixed(2)), bx1, by0 + 3);
      ctx.fillStyle = t.fg; ctx.fillText('u', (bx0 + bx1) / 2, by0 + 3);
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillStyle = t.muted;
      ctx.fillText(kit.fmt(+S.v0.toFixed(2)), bx0 - 4, by0); ctx.fillText(kit.fmt(+S.v1.toFixed(2)), bx0 - 4, by1);
      ctx.fillStyle = t.fg; ctx.fillText('v', bx0 - 4, (by0 + by1) / 2);
      ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillStyle = t.fg; ctx.font = '12px system-ui, sans-serif';
      ctx.fillText('ouvert U ⊂ ℝ²', bx0 + 6, by1 + 4);
      // point q
      const A = currentArea();
      ctx.fillStyle = A < 1e-5 ? '#d03030' : A < 0.1 ? '#b26a00' : t.accent4; ctx.strokeStyle = t.bg; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(px(q[0]), py(q[1]), 7, 0, 2 * PI); ctx.fill(); ctx.stroke();
      ctx.fillStyle = t.fg; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillText('q', px(q[0]) + 9, py(q[1]) - 6);
      ctx.restore();
    }
    function currentArea() { const [xu, xv] = partials(q[0], q[1]); return nrm(cross(xu, xv)); }
    function inU(u, v) { const S = SURF[cur]; return u >= S.u0 - 1e-9 && u <= S.u1 + 1e-9 && v >= S.v0 - 1e-9 && v <= S.v1 + 1e-9; }

    // ---------- dessin de S ----------
    function drawS() {
      const { ctx, W, H } = stS; const t = T(); const S = SURF[cur]; const c = cam();
      ctx.clearRect(0, 0, W, H);
      const sc = 0.43 * Math.min(W, H * 1.1) / S.R;
      const P = p => project(c, p, sc, W, H);
      const seg = (a, b, col, w, alpha, dash) => { ctx.globalAlpha = alpha; ctx.strokeStyle = col; ctx.lineWidth = w; ctx.setLineDash(dash || []); ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); };
      const f = S.f;
      // maillage
      const facing = (u, v) => { if (!S.closed) return true; const [xu, xv] = partials(u, v); const n = cross(xu, xv); return dot(n, c.rd) < 0; };
      ctx.lineCap = 'round';
      const NS = 60;
      const lineOf = (fn, nPts, col, w, aFront, aBack) => {
        let prev = null, pf = true;
        for (let i = 0; i <= nPts; i++) {
          const [u, v] = fn(i / nPts); const p3 = f(u, v); const s = P(p3); const fr = facing(u, v);
          if (prev) seg(prev, s, col, w, (fr && pf) ? aFront : aBack);
          prev = s; pf = fr;
        }
      };
      for (let i = 0; i <= S.nu; i++) { const u = S.u0 + (S.u1 - S.u0) * i / S.nu; lineOf(s => [u, S.v0 + (S.v1 - S.v0) * s], NS, t.axis, 1, 0.65, 0.16); }
      for (let j = 0; j <= S.nv; j++) { const v = S.v0 + (S.v1 - S.v0) * j / S.nv; lineOf(s => [S.u0 + (S.u1 - S.u0) * s, v], NS, t.axis, 1, 0.65, 0.16); }
      ctx.globalAlpha = 1;
      // courbes coordonnées par p
      lineOf(s => [S.u0 + (S.u1 - S.u0) * s, q[1]], 80, t.accent2, 2.4, 1, 0.3);
      lineOf(s => [q[0], S.v0 + (S.v1 - S.v0) * s], 80, t.accent3, 2.4, 1, 0.3);
      ctx.globalAlpha = 1;
      const [xu, xv] = partials(q[0], q[1]);
      const p = f(q[0], q[1]); const sp = P(p);
      const sz = scl.value;
      // plan tangent
      if (cPlane.value) {
        const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => P(add(p, add(mulk(xu, a * sz), mulk(xv, b * sz)))));
        ctx.globalAlpha = 0.22; ctx.fillStyle = t.accent5; ctx.beginPath(); corners.forEach((s, i) => i ? ctx.lineTo(s[0], s[1]) : ctx.moveTo(s[0], s[1])); ctx.closePath(); ctx.fill();
        ctx.globalAlpha = 0.9; ctx.strokeStyle = t.accent5; ctx.lineWidth = 1.3; ctx.setLineDash([5, 3]); ctx.stroke(); ctx.setLineDash([]);
        ctx.globalAlpha = 1;
      }
      // courbes x(q + t w) et vitesses
      if (cCurves.value) {
        const d = 0.2 * Math.min(S.u1 - S.u0, S.v1 - S.v0);
        for (let k = 0; k < 8; k++) {
          const a = k * PI / 8, w = [Math.cos(a), Math.sin(a)];
          let prev = null;
          for (let i = -20; i <= 20; i++) {
            const tt = d * i / 20, u = q[0] + tt * w[0], v = q[1] + tt * w[1];
            if (!inU(u, v)) { prev = null; continue; }
            const s = P(f(u, v));
            if (prev) seg(prev, s, t.accent4, 1.8, 0.95); prev = s;
          }
          const vel = add(mulk(xu, w[0]), mulk(xv, w[1])); const tip = P(add(p, mulk(vel, sz * 0.9)));
          ctx.globalAlpha = 0.95; kit.arrow(ctx, sp[0], sp[1], tip[0], tip[1], { color: t.accent4, width: 1.2, head: 6 });
        }
        ctx.globalAlpha = 1;
      }
      // vecteurs x_u, x_v
      const tu = P(add(p, mulk(xu, sz))), tv = P(add(p, mulk(xv, sz)));
      kit.arrow(ctx, sp[0], sp[1], tu[0], tu[1], { color: t.accent2, width: 2.6, head: 9 });
      kit.arrow(ctx, sp[0], sp[1], tv[0], tv[1], { color: t.accent3, width: 2.6, head: 9 });
      ctx.font = '12px system-ui, sans-serif'; ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
      ctx.fillStyle = t.accent2; ctx.fillText('x_u', tu[0] + 5, tu[1]);
      ctx.fillStyle = t.accent3; ctx.fillText('x_v', tv[0] + 5, tv[1]);
      if (cNormal.value) {
        let n = cross(xu, xv); const L = nrm(n);
        if (L > 1e-6) { n = mulk(n, 0.5 * S.R / L); const tn = P(add(p, n)); ctx.setLineDash([4, 3]); kit.arrow(ctx, sp[0], sp[1], tn[0], tn[1], { color: t.fg, width: 1.6, head: 7 }); ctx.setLineDash([]); ctx.fillStyle = t.fg; ctx.fillText('x_u × x_v', tn[0] + 5, tn[1]); }
      }
      // point p
      const A = currentArea();
      ctx.fillStyle = A < 1e-5 ? '#d03030' : A < 0.1 ? '#b26a00' : t.accent4; ctx.strokeStyle = t.bg; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(sp[0], sp[1], 6, 0, 2 * PI); ctx.fill(); ctx.stroke();
      ctx.fillStyle = t.fg; ctx.textBaseline = 'top'; ctx.textAlign = 'right'; ctx.fillText('p = x(q)', sp[0] - 9, sp[1] + 6); ctx.textAlign = 'left';
      ctx.fillStyle = t.muted; ctx.textBaseline = 'top'; ctx.textAlign = 'left'; ctx.fillText('S ⊂ ℝ³  (glisser pour tourner)', 8, 6);
    }

    function updateReadout() {
      const [xu, xv] = partials(q[0], q[1]);
      const A = nrm(cross(xu, xv));
      const p = SURF[cur].f(q[0], q[1]);
      const f2 = a => a.map(z => (+z.toFixed(2)).toString()).join(', ');
      ro.set(`q = (${q[0].toFixed(2)}, ${q[1].toFixed(2)}) &nbsp; p = (${f2(p)}) &nbsp; |x<sub>u</sub>×x<sub>v</sub>| = ${A.toFixed(3)}`);
      if (A < 1e-5) {
        warn.style.color = '#d03030';
        warn.textContent = 'Ici dx_q n’est PAS injective (' + (SURF[cur].warn || 'x_u et x_v colinéaires') + ') : x n’est pas un paramétrage local en ce point, et dx_q(ℝ²) n’est pas un plan.' + (cur === 'sphere' ? ' La sphère a pourtant un plan tangent (horizontal) au pôle : c’est ce paramétrage qui est en défaut, pas la surface.' : cur === 'cone' ? ' Le cône n’est pas une sous-variété au sommet (Exercice IX.7.12).' : '');
      } else if (A < 0.1) {
        warn.style.color = '#b26a00';
        warn.textContent = 'dx_q est encore injective (|x_u×x_v| = ' + A.toFixed(3) + ' > 0) mais presque dégénérée : ' + (cur === 'sphere' ? 'au pôle même (v = ±π/2), x_u = 0.' : cur === 'cone' ? 'sur la droite v = 0, x_u = 0.' : 'x_u et x_v sont presque colinéaires.');
      } else {
        warn.style.color = '';
        warn.textContent = 'dx_q est injective : (x_u, x_v) est une base de T_pS (plan tangent, dimension 2).';
      }
    }

    function draw() { try { drawU(); drawS(); updateReadout(); } catch (e) { console.error(e); } }

    // ---------- interactions ----------
    const offU = kit.drag(stU.canvas, {
      onDown: (p) => setQ(p), onMove: (p, ev, down) => { if (down) setQ(p); },
    });
    function setQ(p) {
      if (!mapU) return; const S = SURF[cur];
      q = [Math.max(S.u0, Math.min(S.u1, mapU.qx(p.x))), Math.max(S.v0, Math.min(S.v1, mapU.qy(p.y)))];
      su.value = q[0]; sv.value = q[1]; draw();
    }
    let last = null;
    const offS = kit.drag(stS.canvas, {
      onDown: (p) => { last = p; },
      onMove: (p, ev, down) => { if (!down || !last) return; yaw += (p.x - last.x) * 0.01; pitch = Math.max(-1.45, Math.min(1.45, pitch + (p.y - last.y) * 0.01)); last = p; draw(); },
      onUp: () => { last = null; },
    });
    stU.onResize = draw; stS.onResize = draw;
    draw();
    return () => { offU(); offS(); stU.destroy(); stS.destroy(); };
  }
});
