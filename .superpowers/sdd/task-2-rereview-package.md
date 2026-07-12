# Task 2 Re-review Package

Original diff: `.superpowers/sdd/task-2-review-package.md`

## Cascade-fix CSS excerpts

```css
Exit code: 0
Wall time: 0.9 seconds
Output:

  pixel-style.css:33:    --f-head: 'Press Start 2P', 'Zpix', monospace;
  pixel-style.css:34:    --f-body: 'VT323', 'Zpix', monospace;
> pixel-style.css:35:    --f-reading: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", "Courier New", monos
pace;
  pixel-style.css:36:
  pixel-style.css:37:    /* the grid */
  pixel-style.css:38:    --px: 4px;
  pixel-style.css:39:    --hard: rgba(255, 158, 170, 0.85);      /* pink offset shadow (signature) */
  pixel-style.css:40:    --shadow: 8px 8px 0 var(--hard);
  pixel-style.css:41:    --shadow-pink: 8px 8px 0 rgba(95, 133, 219, 0.45); /* hover flips to blue */
  pixel-style.css:42:}
  pixel-style.css:121:.contact-form input,
  pixel-style.css:122:.contact-form textarea {
> pixel-style.css:123:    font-family: var(--f-reading);
  pixel-style.css:124:}
  pixel-style.css:125:
  pixel-style.css:126:::selection {
  pixel-style.css:127:    background: var(--pink);
  pixel-style.css:128:    color: var(--dark);
  pixel-style.css:129:}
  pixel-style.css:130:
  pixel-style.css:720:}
  pixel-style.css:721:
> pixel-style.css:722:.indicator:focus-visible {
  pixel-style.css:723:    outline: 4px solid var(--purple-deep);
  pixel-style.css:724:    outline-offset: 4px;
  pixel-style.css:725:}
  pixel-style.css:726:
  pixel-style.css:727:/* ---------- game cards (retro OS windows) ---------- */
  pixel-style.css:728:
  pixel-style.css:729:.games-grid {
  pixel-style.css:1336:}
  pixel-style.css:1337:
> pixel-style.css:1338:.form-group input,
> pixel-style.css:1339:.form-group textarea {
  pixel-style.css:1340:    width: 100%;
  pixel-style.css:1341:    background: var(--bg);
  pixel-style.css:1342:    border: 4px solid var(--border);
  pixel-style.css:1343:    color: var(--ink);
> pixel-style.css:1344:    font-family: var(--f-reading);
  pixel-style.css:1345:    font-size: 19px;
  pixel-style.css:1346:    padding: 10px 12px;
  pixel-style.css:1347:}
  pixel-style.css:1348:
> pixel-style.css:1349:html[lang="zh"] .form-group input,
> pixel-style.css:1350:html[lang="zh"] .form-group textarea {
  pixel-style.css:1351:    font-size: 15px;
  pixel-style.css:1352:}
  pixel-style.css:1353:
> pixel-style.css:1354:.form-group input:focus,
> pixel-style.css:1355:.form-group textarea:focus {
  pixel-style.css:1356:    outline: none;
  pixel-style.css:1357:    border-color: var(--pink);
  pixel-style.css:1358:}
  pixel-style.css:1359:
> pixel-style.css:1360:.form-group input:focus-visible,
> pixel-style.css:1361:.form-group textarea:focus-visible {
  pixel-style.css:1362:    outline: 4px solid var(--purple-deep);
  pixel-style.css:1363:    outline-offset: 4px;
  pixel-style.css:1364:}
  pixel-style.css:1365:
> pixel-style.css:1366:.form-group textarea {
  pixel-style.css:1367:    resize: vertical;
  pixel-style.css:1368:    min-height: 120px;
  pixel-style.css:1369:}
  pixel-style.css:1370:
  pixel-style.css:1371:/* ---------- page navigation (game-menu prev/next) ---------- */
  pixel-style.css:1372:
  pixel-style.css:1373:.page-navigation {



```

## Current tests

```js
Exit code: 0
Wall time: 0.9 seconds
Output:
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const read = (relativePath) => readFile(new URL(relativePath, root), 'utf8');

test('é¦–é¡µå…·æœ‰å”¯ä¸€ä¸»å†…å®¹åŒºåŸŸä¸Žè¯­ä¹‰åŒ–ç§»åŠ¨èœå•', async () => {
  const html = await read('index.html');
  assert.equal((html.match(/<main id="main-content">/g) || []).length, 1);
  assert.match(html, /<a class="logo"[^>]*>VIOLET GUO<\/a>/);
  assert.match(html, /<button[^>]*class="hamburger"[^>]*aria-controls="primary-navigation"[^>]*aria-expanded="false"/);
  assert.match(html, /<ul id="primary-navigation" class="nav-links">/);
});

test('è¯¦æƒ…é¡µå…±äº«ç›¸åŒçš„è¯­ä¹‰åŒ–å¯¼èˆªå¥‘çº¦', async () => {
  const html = await read('game-detail.html');
  assert.equal((html.match(/<main id="main-content">/g) || []).length, 1);
  assert.match(html, /<a class="logo"[^>]*>VIOLET GUO<\/a>/);
  assert.match(html, /<button[^>]*class="hamburger"[^>]*aria-controls="primary-navigation"[^>]*aria-expanded="false"/);
});

test('ç§»åŠ¨èœå•æŒ‰é’®é‡ç½®é»˜è®¤å¤–è§‚å¹¶ç»˜åˆ¶å†…è”æ¡', async () => {
  const css = await read('pixel-style.css');
  assert.match(css, /\.hamburger\s*\{[^}]*background:\s*transparent;/s);
  assert.match(css, /\.hamburger\s*\{[^}]*border:\s*0;/s);
  assert.match(css, /\.hamburger \.bar\s*\{[^}]*display:\s*block;/s);
});

test('ç§»åŠ¨èœå•çŠ¶æ€åŒæ­¥åˆ°å¯è®¿é—®å±žæ€§', async () => {
  const script = await read('pixel-script.js');
  assert.match(script, /function setMobileMenu\(open\)/);
  assert.match(script, /hamburger\.setAttribute\('aria-expanded', String\(open\)\)/);
  assert.match(script, /hamburger\.setAttribute\('aria-label', open \? 'Close navigation' : 'Open navigation'\)/);
});

test('é¡µé¢ä¸å¯ç”¨æ— æœ‰æ•ˆè´¦æˆ·æ ‡è¯†çš„ç»Ÿè®¡è„šæœ¬', async () => {
  const pages = await Promise.all(['index.html', 'game-detail.html'].map(read));
  const invalidAccount = ['TO', 'DO-your-code'].join('');
  for (const html of pages) {
    assert.doesNotMatch(html, new RegExp(invalidAccount, 'i'));
    assert.doesNotMatch(html, /gc\.zgo\.at\/count\.js/i);
  }
});

test('æ ·å¼å®šä¹‰é˜…è¯»å­—ä½“ã€ç„¦ç‚¹çŠ¶æ€å’Œä¸‰ä¸ªå“åº”å¼æ–­ç‚¹', async () => {
  const css = await read('pixel-style.css');
  assert.match(css, /--f-reading:/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /@media \(max-width: 1024px\)/);
  assert.match(css, /@media \(max-width: 768px\)/);
  assert.match(css, /@media \(max-width: 480px\)/);
  assert.match(css, /\.cta-buttons \.pixel-btn[\s\S]*width:\s*100%/);
  assert.match(css, /\.hero-featured[\s\S]*grid-template-columns:\s*minmax\(0,\s*1fr\)/);
});

test('è¡¨å•æŽ§ä»¶æœ€ç»ˆä½¿ç”¨é˜…è¯»å­—ä½“', async () => {
  const css = await read('pixel-style.css');
  assert.match(css, /\.form-group input,\s*\.form-group textarea\s*\{[^}]*font-family:\s*var\(--f-reading\)/s);
});

test('è¡¨å•æŽ§ä»¶å’Œè½®æ’­æŒ‡ç¤ºå™¨ä¿ç•™ç»Ÿä¸€é”®ç›˜ç„¦ç‚¹', async () => {
  const css = await read('pixel-style.css');
  assert.match(css, /\.form-group input:focus,\s*\.form-group textarea:focus\s*\{[^}]*\}[\s\S]*\.form-group input:focus-visible,\s*\.form-group textarea:focus-visible\s*\{[^}]*outline:\s*4px solid var\(--purple-deep\);[^}]*outline-offset:\s*4px;/s);
  assert.match(css, /\.indicator:focus-visible\s*\{[^}]*outline:\s*4px solid var\(--purple-deep\);[^}]*outline-offset:\s*4px;/s);
});


```

