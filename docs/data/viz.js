// généré par tools/build.mjs — ne pas éditer

// ---- content/_examples/viz/viz-ex-domain-coloring.js ----
try {
FMA.registerViz({
  id: 'viz-ex-domain-coloring',
  chapter: 1,
  title: 'Domain coloring : lire une fonction holomorphe en couleurs',
  description: String.raw`Chaque point $z$ du plan est coloré selon $f(z)$ : la **teinte** code l'argument $\arg f(z)$ (rouge = réel positif, cyan = réel négatif), la **luminosité** code le module ($|f|$ petit = sombre, grand = clair). Un zéro d'ordre $n$ est un point sombre autour duquel les couleurs tournent $n$ fois ; un pôle d'ordre $n$ est un point clair où elles tournent $n$ fois dans l'autre sens.`,
  related: ['ch01-zeros-isoles', 'ch02-poles-residus'],
  height: 420,
  mount(container, kit) {
    const st = kit.canvas(container, { height: 380 });
    const controls = kit.controls(container);
    const C = kit.complex;
    const fns = {
      'z^2': z => C.mul(z, z), 'z^3 - 1': z => C.sub(C.pow(z, 3), [1, 0]), '1/z': z => C.inv(z),
      '(z-1)/(z^2+1)': z => C.div(C.sub(z, [1, 0]), C.add(C.mul(z, z), [1, 0])), 'exp(z)': z => C.exp(z), 'sin(z)': z => C.sin(z), 'exp(1/z)': z => C.exp(C.inv(z)),
    };
    const sel = kit.select(controls, { label: '$f(z)=$', options: Object.keys(fns), value: 'z^3 - 1', onChange: draw });
    const lines = kit.checkbox(controls, { label: 'lignes de module', checked: true, onChange: draw });
    const ro = kit.readout(controls, { label: 'sous la souris' });
    kit.colorLegend(container);
    let P;
    function draw() {
      P = kit.plane(st.ctx, { xmin: -2.2, xmax: 2.2, ymin: -2.2, ymax: 2.2, W: st.W, H: st.H });
      kit.domainColor(st, P, fns[sel.value], { lines: lines.value, step: 2 });
      P.axes({ labels: true });
    }
    const off = kit.drag(st.canvas, { onMove: (p) => { const [x, y] = P.toWorld(p.x, p.y); const w = fns[sel.value]([x, y]); ro.set(`z = ${C.str([x, y])}, f(z) = ${C.str(w)}, |f| = ${C.abs(w).toFixed(2)}`); } });
    st.onResize = draw; draw();
    return () => { off(); st.destroy(); };
  }
});

} catch (e) { console.error('viz viz-ex-domain-coloring failed to register', e); }
