# Task 2 Review Package

## pixel-style.css diff

```diff
Exit code: 0
Wall time: 1.8 seconds
Output:
diff --git a/.superpowers/sdd/snapshots/task-2-before/pixel-style.css b/pixel-style.css
index 6bc292f..61a40b5 100644
--- a/.superpowers/sdd/snapshots/task-2-before/pixel-style.css
+++ b/pixel-style.css
@@ -32,6 +32,7 @@
     /* type */
     --f-head: 'Press Start 2P', 'Zpix', monospace;
     --f-body: 'VT323', 'Zpix', monospace;
+    --f-reading: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", "Courier New", monospace;
 
     /* the grid */
     --px: 4px;
@@ -99,6 +100,29 @@ a {
     text-decoration: none;
 }
 
+.container,
+.hero-content,
+.hero-featured,
+.mini-win,
+.games-grid,
+.game-card,
+.featured-item,
+.featured-content {
+    min-width: 0;
+}
+
+:where(a, button, input, textarea, select):focus-visible {
+    outline: 4px solid var(--purple-deep);
+    outline-offset: 4px;
+    box-shadow: 6px 6px 0 var(--hard);
+}
+
+.game-info p,
+.contact-form input,
+.contact-form textarea {
+    font-family: var(--f-reading);
+}
+
 ::selection {
     background: var(--pink);
     color: var(--dark);
@@ -1439,14 +1463,27 @@ html[lang="zh"] .footer-bottom {
 /* ---------- responsive ---------- */
 
 @media (max-width: 1024px) {
+    .container {
+        width: 100%;
+        padding-inline: 24px;
+    }
+
     .games-grid,
     .skills-grid {
         grid-template-columns: repeat(2, minmax(0, 1fr));
     }
 
+    .games-grid--flagship {
+        grid-template-columns: minmax(0, 1fr);
+    }
+
     .archive-wiki {
         grid-template-columns: 240px minmax(0, 1fr);
     }
+
+    .featured-content {
+        padding-inline: 68px;
+    }
 }
 
 @media (max-width: 768px) {
@@ -1454,8 +1491,17 @@ html[lang="zh"] .footer-bottom {
         height: 68px;
     }
 
+    header .container {
+        padding-inline: 16px;
+    }
+
     .hamburger {
-        display: block;
+        display: inline-flex;
+        width: 44px;
+        height: 44px;
+        flex-direction: column;
+        align-items: center;
+        justify-content: center;
     }
 
     .nav-links {
@@ -1486,11 +1532,35 @@ html[lang="zh"] .footer-bottom {
     }
 
     .hero {
-        padding: 48px 0;
+        padding: 40px 0;
+    }
+
+    .hero-content {
+        width: 100%;
+    }
+
+    .hero-content h1,
+    .hero-content h2,
+    .hero-content p {
+        max-width: 100%;
+        overflow-wrap: anywhere;
+    }
+
+    .cta-buttons {
+        flex-direction: column;
+        align-items: stretch;
+        gap: 16px;
+    }
+
+    .cta-buttons .pixel-btn {
+        width: 100%;
+        max-width: 420px;
+        margin-inline: auto;
     }
 
     .hero-featured {
         grid-template-columns: minmax(0, 1fr);
+        width: 100%;
         max-width: 420px;
     }
 
@@ -1519,13 +1589,17 @@ html[lang="zh"] .footer-bottom {
     }
 
     .featured-content {
-        padding: 20px 56px;
+        padding: 20px 60px 24px;
     }
 
     .featured-content h3 {
         font-size: 12px;
     }
 
+    .game-info {
+        padding: 16px;
+    }
+
     .about-image {
         max-width: 320px;
     }
@@ -1546,3 +1620,53 @@ html[lang="zh"] .footer-bottom {
         right: 8px;
     }
 }
+
+@media (max-width: 480px) {
+    .container {
+        padding-inline: 16px;
+    }
+
+    .logo {
+        font-size: 11px;
+    }
+
+    .lang-switcher {
+        width: 56px;
+        min-width: 56px;
+    }
+
+    .hero-content h1 {
+        font-size: 20px;
+    }
+
+    .hero-content p {
+        font-size: 19px;
+    }
+
+    .mini-win img {
+        height: auto;
+        aspect-ratio: 16 / 9;
+    }
+
+    .featured-image {
+        height: 420px;
+    }
+
+    .featured-content {
+        padding: 18px 52px 22px;
+    }
+
+    .featured-content p {
+        font-size: 18px;
+        line-height: 1.35;
+    }
+
+    .filter-buttons {
+        display: grid;
+        grid-template-columns: minmax(0, 1fr);
+    }
+
+    .filter-btn {
+        width: 100%;
+    }
+}
warning: in the working copy of '.superpowers/sdd/snapshots/task-2-before/pixel-style.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'pixel-style.css', LF will be replaced by CRLF the next time Git touches it

```

## contract test diff

```diff
Exit code: 0
Wall time: 0.8 seconds
Output:
diff --git a/.superpowers/sdd/snapshots/task-2-before/portfolio-contract.test.mjs b/tests/portfolio-contract.test.mjs
index f1c4343..65a7f2e 100644
--- a/.superpowers/sdd/snapshots/task-2-before/portfolio-contract.test.mjs
+++ b/tests/portfolio-contract.test.mjs
@@ -42,3 +42,14 @@ test('页面不启用无有效账户标识的统计脚本', async () => {
     assert.doesNotMatch(html, /gc\.zgo\.at\/count\.js/i);
   }
 });
+
+test('样式定义阅读字体、焦点状态和三个响应式断点', async () => {
+  const css = await read('pixel-style.css');
+  assert.match(css, /--f-reading:/);
+  assert.match(css, /:focus-visible/);
+  assert.match(css, /@media \(max-width: 1024px\)/);
+  assert.match(css, /@media \(max-width: 768px\)/);
+  assert.match(css, /@media \(max-width: 480px\)/);
+  assert.match(css, /\.cta-buttons \.pixel-btn[\s\S]*width:\s*100%/);
+  assert.match(css, /\.hero-featured[\s\S]*grid-template-columns:\s*minmax\(0,\s*1fr\)/);
+});
warning: in the working copy of '.superpowers/sdd/snapshots/task-2-before/portfolio-contract.test.mjs', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tests/portfolio-contract.test.mjs', LF will be replaced by CRLF the next time Git touches it

```

