# Task 1 Review Package

## index.html diff

```diff
Exit code: 0
Wall time: 0.8 seconds
Output:
diff --git a/.superpowers/sdd/snapshots/task-1-before/index.html b/index.html
index 10953f1..c1c847f 100644
--- a/.superpowers/sdd/snapshots/task-1-before/index.html
+++ b/index.html
@@ -20,16 +20,14 @@
     <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet">
     <script src="pixel-script.js" defer></script>
     <script src="typing-effect.js" defer></script>
-    <!-- GoatCounter analytics — replace TODO-your-code with your goatcounter.com code -->
-    <script data-goatcounter="https://TODO-your-code.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
 </head>
 <body>
     <!-- Header Section -->
     <header>
         <div class="container">
-            <h1 class="logo">VIOLET GUO</h1>
-            <nav>
-                <ul class="nav-links">
+            <a class="logo" href="#home" aria-label="Violet Guo, Home">VIOLET GUO</a>
+            <nav aria-label="Primary navigation">
+                <ul id="primary-navigation" class="nav-links">
                     <li><a href="#home" data-page="home" data-i18n="nav_home">Home</a></li>
                     <li><a href="#about" data-page="about" data-i18n="nav_about">About</a></li>
                     <li><a href="#games" data-page="games" data-i18n="nav_games">Portfolio</a></li>
@@ -37,16 +35,17 @@
                     <li><a href="#skills" data-page="skills" data-i18n="nav_skills">Skills</a></li>
                     <li><a href="#contact" data-page="contact" data-i18n="nav_contact">Contact</a></li>
                 </ul>
-                <button id="langSwitcher" class="lang-switcher">中文</button>
-                <div class="hamburger">
-                    <div class="bar"></div>
-                    <div class="bar"></div>
-                    <div class="bar"></div>
-                </div>
+                <button id="langSwitcher" class="lang-switcher" type="button" aria-label="Switch language">中文</button>
+                <button class="hamburger" type="button" aria-label="Open navigation" aria-controls="primary-navigation" aria-expanded="false">
+                    <span class="bar" aria-hidden="true"></span>
+                    <span class="bar" aria-hidden="true"></span>
+                    <span class="bar" aria-hidden="true"></span>
+                </button>
             </nav>
         </div>
     </header>
 
+    <main id="main-content">
     <!-- Home Page -->
     <div id="home-page" class="page active">
         <section class="hero">
@@ -1074,6 +1073,8 @@
         </div>
     </div>
 
+    </main>
+
     <!-- Footer -->
     <footer>
         <div class="container">
warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it

```

## game-detail.html diff

```diff
Exit code: 0
Wall time: 0.8 seconds
Output:
diff --git a/.superpowers/sdd/snapshots/task-1-before/game-detail.html b/game-detail.html
index 45a0257..ab3e982 100644
--- a/.superpowers/sdd/snapshots/task-1-before/game-detail.html
+++ b/game-detail.html
@@ -14,16 +14,14 @@
     <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet">
     <script src="pixel-script.js" defer></script>
     <script src="game-detail.js" defer></script>
-    <!-- GoatCounter analytics — replace TODO-your-code with your goatcounter.com code -->
-    <script data-goatcounter="https://TODO-your-code.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
 </head>
 <body>
     <!-- Header Section -->
     <header>
         <div class="container">
-            <h1 class="logo">VIOLET GUO</h1>
-            <nav>
-                <ul class="nav-links">
+            <a class="logo" href="index.html#home" aria-label="Violet Guo, Home">VIOLET GUO</a>
+            <nav aria-label="Primary navigation">
+                <ul id="primary-navigation" class="nav-links">
                     <li><a href="index.html#home" data-i18n="nav_home">Home</a></li>
                     <li><a href="index.html#about" data-i18n="nav_about">About</a></li>
                     <li><a href="index.html#games" data-i18n="nav_games">Portfolio</a></li>
@@ -31,16 +29,17 @@
                     <li><a href="index.html#skills" data-i18n="nav_skills">Skills</a></li>
                     <li><a href="index.html#contact" data-i18n="nav_contact">Contact</a></li>
                 </ul>
-                <button id="langSwitcher" class="lang-switcher">中文</button>
-                <div class="hamburger">
-                    <div class="bar"></div>
-                    <div class="bar"></div>
-                    <div class="bar"></div>
-                </div>
+                <button id="langSwitcher" class="lang-switcher" type="button" aria-label="Switch language">中文</button>
+                <button class="hamburger" type="button" aria-label="Open navigation" aria-controls="primary-navigation" aria-expanded="false">
+                    <span class="bar" aria-hidden="true"></span>
+                    <span class="bar" aria-hidden="true"></span>
+                    <span class="bar" aria-hidden="true"></span>
+                </button>
             </nav>
         </div>
     </header>
 
+    <main id="main-content">
     <!-- Game Detail Page -->
     <div id="game-detail-page" class="page active">
         <section class="game-detail">
@@ -136,6 +135,8 @@
         </section>
     </div>
 
+    </main>
+
     <!-- Footer -->
     <footer>
         <div class="container">
warning: in the working copy of 'game-detail.html', LF will be replaced by CRLF the next time Git touches it

```

## New test file

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
  assert.match(html, /<main id="main-content">/);
  assert.match(html, /<a class="logo"[^>]*>VIOLET GUO<\/a>/);
  assert.match(html, /<button[^>]*class="hamburger"[^>]*aria-controls="primary-navigation"[^>]*aria-expanded="false"/);
  assert.match(html, /<ul id="primary-navigation" class="nav-links">/);
});

test('è¯¦æƒ…é¡µå…±äº«ç›¸åŒçš„è¯­ä¹‰åŒ–å¯¼èˆªå¥‘çº¦', async () => {
  const html = await read('game-detail.html');
  assert.match(html, /<main id="main-content">/);
  assert.match(html, /<a class="logo"[^>]*>VIOLET GUO<\/a>/);
  assert.match(html, /<button[^>]*class="hamburger"[^>]*aria-controls="primary-navigation"[^>]*aria-expanded="false"/);
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

