// Smoke test du site : sert docs/, visite les routes, collecte erreurs JS/KaTeX, captures d'écran.
// Usage: node tools/check_site.cjs [--routes "#/,#/cours"] [--all] [--shots dir]
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..', 'docs');
const args = process.argv.slice(2); const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const MIME = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.json': 'application/json', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => { let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html'; const f = path.join(ROOT, p); if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end('nf'); } res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res); });
(async () => {
  await new Promise(r => server.listen(0, r)); const port = server.address().port; const base = `http://127.0.0.1:${port}/`;
  const browser = await chromium.launch(); const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const problems = []; let currentRoute = '';
  page.on('console', m => { if (m.type() === 'error') problems.push({ route: currentRoute, kind: 'console', text: m.text().slice(0, 300) }); });
  page.on('pageerror', e => problems.push({ route: currentRoute, kind: 'pageerror', text: String(e).slice(0, 300) }));
  await page.goto(base + '#/'); await page.waitForTimeout(500);
  const content = await page.evaluate(() => { const C = window.FMA_CONTENT; return { theorems: Object.keys(C.theorems), exercises: Object.keys(C.exercises), reflexes: Object.keys(C.reflexes), viz: C.viz.map(v => v.id), chapters: C.chapters.map(c => c.nn) }; });
  let routes = ['#/', '#/cours', '#/reflexes', '#/probleme', '#/flashcards', '#/carte', '#/notations', '#/progression', '#/apropos', '#/flashcards/session?all=1&n=5'];
  if (opt('--routes')) routes = opt('--routes').split(',');
  else if (args.includes('--all')) { routes.push(...content.chapters.map(c => '#/cours/ch' + c), ...content.theorems.map(t => '#/fiche/' + t), ...content.exercises.map(e => '#/probleme/' + e), ...content.reflexes.map(r => '#/reflexes/' + r), ...content.viz.map(v => '#/viz/' + v)); }
  else { routes.push(...content.chapters.slice(0, 2).map(c => '#/cours/ch' + c), ...content.theorems.slice(0, 3).map(t => '#/fiche/' + t), ...content.exercises.slice(0, 2).map(e => '#/probleme/' + e), ...content.reflexes.slice(0, 2).map(r => '#/reflexes/' + r), ...content.viz.map(v => '#/viz/' + v)); }
  const shots = opt('--shots'); if (shots) fs.mkdirSync(shots, { recursive: true });
  const report = [];
  for (const r of routes) {
    currentRoute = r; await page.goto(base + r); await page.waitForTimeout(r.startsWith('#/viz') || r.startsWith('#/fiche') ? 900 : 400);
    // open all collapsibles and reveal trous to render everything
    await page.evaluate(() => { document.querySelectorAll('.card.collapsible').forEach(c => c.classList.add('open')); document.querySelectorAll('details').forEach(d => d.open = true); document.querySelectorAll('.viz-slot').forEach(s => { if (!s.firstChild && window.FMA) FMA.mountViz(s.dataset.viz, s); }); });
    await page.waitForTimeout(300);
    const info = await page.evaluate(() => ({ texErrors: [...document.querySelectorAll('.tex-error, .katex-error')].map(e => e.textContent.slice(0, 120)), missingX: [...document.querySelectorAll('.xref-missing')].map(e => e.dataset.id), vizMissing: [...document.querySelectorAll('.viz-missing')].map(e => e.textContent.slice(0, 120)), rawMath: (document.getElementById('main').innerText.match(/\$[^$\n]{1,60}\$/g) || []).slice(0, 5), rawPlaceholders: (document.getElementById('main').innerHTML.match(/@@[MTVX]\d*/g) || []).slice(0, 5), leftoverTrou: (document.getElementById('main').innerHTML.match(/<\/?trou/g) || []).length, title: document.title, textLen: document.getElementById('main').innerText.length, h1: (document.querySelector('#main h1') || {}).innerText }));
    report.push({ route: r, ...info });
    if (shots) await page.screenshot({ path: path.join(shots, r.replace(/[^a-z0-9]+/gi, '_').slice(0, 80) + '.png'), fullPage: false });
  }
  await browser.close(); server.close();
  const bad = report.filter(x => x.texErrors.length || x.vizMissing.length || x.rawMath.length || x.rawPlaceholders.length || x.leftoverTrou || x.textLen < 40);
  console.log(JSON.stringify({ routes: routes.length, problems, bad, missingXrefs: [...new Set(report.flatMap(x => x.missingX))].slice(0, 50) }, null, 1));
  process.exit(problems.length || bad.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
