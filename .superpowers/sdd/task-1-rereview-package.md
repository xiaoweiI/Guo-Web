# Task 1 Re-review Package

Original HTML review package: `.superpowers/sdd/task-1-review-package.md`

## Current hamburger CSS excerpt

```css
Exit code: 0
Wall time: 0.9 seconds
Output:
  220: }
  221: 
  222: .lang-switcher:active {
  223:     transform: translate(4px, 4px);
  224:     box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  225: }
  226: 
  227: .hamburger {
  228:     display: none;
  229:     cursor: pointer;
  230:     padding: 8px;
  231:     background: transparent;
  232:     border: 0;
  233: }
  234: 
  235: .hamburger .bar {
  236:     display: block;
  237:     width: 24px;
  238:     height: 4px;
  239:     background: var(--ink);
  240:     margin: 4px 0;
  241:     transition: transform 0.2s steps(3), opacity 0.2s steps(3);
  242: }
  243: 
  244: .hamburger.active .bar:nth-child(1) {
  245:     transform: translateY(8px) rotate(45deg);
  246: }
  247: 
  248: .hamburger.active .bar:nth-child(2) {
  249:     opacity: 0;
  250: }
  251: 
  252: .hamburger.active .bar:nth-child(3) {
  253:     transform: translateY(-8px) rotate(-45deg);
  254: }
  255: 

```

## Current mobile-menu JavaScript excerpt

```js
Exit code: 0
Wall time: 1.1 seconds
Output:
  575:     // Initialize language based on localStorage or default to English
  576:     updateLanguage(getCurrentLanguage());
  577:     
  578:     // Mobile Navigation Toggle
  579:     const hamburger = document.querySelector('.hamburger');
  580:     const navLinks = document.querySelector('.nav-links');
  581: 
  582:     function setMobileMenu(open) {
  583:         if (!hamburger || !navLinks) return;
  584:         hamburger.classList.toggle('active', open);
  585:         navLinks.classList.toggle('active', open);
  586:         hamburger.setAttribute('aria-expanded', String(open));
  587:         hamburger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  588:     }
  589: 
  590:     if (hamburger && navLinks) {
  591:         hamburger.addEventListener('click', function() {
  592:             setMobileMenu(!hamburger.classList.contains('active'));
  593:         });
  594:     }
  595: 
  596:     // Close mobile menu when clicking on a nav link
  597:     const navItems = document.querySelectorAll('.nav-links a');
  598:     navItems.forEach(item => {
  599:         item.addEventListener('click', function() {
  600:             setMobileMenu(false);
  601:         });
  602:     });
  603: 
  604:     // Game Portfolio Filtering
  605:     const filterButtons = document.querySelectorAll('.filter-btn');
  606:     const gameCards = document.querySelectorAll('.game-card');
  607: 
  608:     filterButtons.forEach(button => {
  609:         button.addEventListener('click', function() {
  610:             // Remove active class from all buttons
  611:             filterButtons.forEach(btn => btn.classList.remove('active'));
  612:             
  613:             // Add active class to clicked button
  614:             this.classList.add('active');
  615:             

```

## Current contract tests

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


```

