# Task 3 Review Package

## index.html diff

```diff
Exit code: 0
Wall time: 0.7 seconds
Output:
diff --git a/.superpowers/sdd/snapshots/task-3-before/index.html b/index.html
index c1c847f..2a1ccd1 100644
--- a/.superpowers/sdd/snapshots/task-3-before/index.html
+++ b/index.html
@@ -233,20 +233,20 @@
                             
                             <!-- Carousel Controls -->
                             <div class="carousel-controls">
-                                <button class="carousel-btn prev-btn" id="prevBtn">
-                                    <i class="fas fa-chevron-left"></i>
+                                <button class="carousel-btn prev-btn" id="prevBtn" type="button" aria-label="Previous featured project">
+                                    <i class="fas fa-chevron-left" aria-hidden="true"></i>
                                 </button>
-                                <button class="carousel-btn next-btn" id="nextBtn">
-                                    <i class="fas fa-chevron-right"></i>
+                                <button class="carousel-btn next-btn" id="nextBtn" type="button" aria-label="Next featured project">
+                                    <i class="fas fa-chevron-right" aria-hidden="true"></i>
                                 </button>
                             </div>
                             
                             <!-- Carousel Indicators -->
-                            <div class="carousel-indicators">
-                                <button class="indicator active" data-slide="0"></button>
-                                <button class="indicator" data-slide="1"></button>
-                                <button class="indicator" data-slide="2"></button>
-                                <button class="indicator" data-slide="3"></button>
+                            <div class="carousel-indicators" aria-label="Featured project selection">
+                                <button class="indicator active" type="button" data-slide="0" aria-label="Show featured project 1" aria-current="true"></button>
+                                <button class="indicator" type="button" data-slide="1" aria-label="Show featured project 2" aria-current="false"></button>
+                                <button class="indicator" type="button" data-slide="2" aria-label="Show featured project 3" aria-current="false"></button>
+                                <button class="indicator" type="button" data-slide="3" aria-label="Show featured project 4" aria-current="false"></button>
                             </div>
                         </div>
                     </div>
warning: in the working copy of '.superpowers/sdd/snapshots/task-3-before/index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it

```

## pixel-script.js diff

```diff
Exit code: 0
Wall time: 0.6 seconds
Output:
diff --git a/.superpowers/sdd/snapshots/task-3-before/pixel-script.js b/pixel-script.js
index ce4a0b0..37839f6 100644
--- a/.superpowers/sdd/snapshots/task-3-before/pixel-script.js
+++ b/pixel-script.js
@@ -601,6 +601,14 @@ document.addEventListener('DOMContentLoaded', function() {
         });
     });
 
+    document.addEventListener('keydown', (event) => {
+        if (event.key === 'Escape') setMobileMenu(false);
+    });
+
+    window.matchMedia('(min-width: 769px)').addEventListener('change', (event) => {
+        if (event.matches) setMobileMenu(false);
+    });
+
     // Game Portfolio Filtering
     const filterButtons = document.querySelectorAll('.filter-btn');
     const gameCards = document.querySelectorAll('.game-card');
@@ -930,18 +938,27 @@ document.addEventListener('DOMContentLoaded', function() {
     const prevBtn = document.getElementById('prevBtn');
     const nextBtn = document.getElementById('nextBtn');
     const carouselTrack = document.getElementById('featuredCarousel');
+    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
+    let autoPlayInterval = null;
+    let pointerOverCarousel = false;
+    let focusWithinCarousel = false;
     
     if (slides.length > 0) {
         // Initialize carousel
         function updateCarousel() {
             // Update slide visibility
             slides.forEach((slide, index) => {
-                slide.classList.toggle('active', index === currentSlide);
+                const active = index === currentSlide;
+                slide.classList.toggle('active', active);
+                slide.setAttribute('aria-hidden', String(!active));
+                slide.setAttribute('tabindex', active ? '0' : '-1');
             });
             
             // Update indicators
             indicators.forEach((indicator, index) => {
-                indicator.classList.toggle('active', index === currentSlide);
+                const active = index === currentSlide;
+                indicator.classList.toggle('active', active);
+                indicator.setAttribute('aria-current', String(active));
             });
             
             // Move carousel track
@@ -980,16 +997,15 @@ document.addEventListener('DOMContentLoaded', function() {
             });
         });
         
-        // Auto-play carousel (optional)
-        let autoPlayInterval;
-        
-        function startAutoPlay() {
-            autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
-        }
-        
         function stopAutoPlay() {
-            if (autoPlayInterval) {
-                clearInterval(autoPlayInterval);
+            if (autoPlayInterval !== null) window.clearInterval(autoPlayInterval);
+            autoPlayInterval = null;
+        }
+
+        function startAutoPlay() {
+            stopAutoPlay();
+            if (!reducedMotion.matches && !pointerOverCarousel && !focusWithinCarousel) {
+                autoPlayInterval = window.setInterval(nextSlide, 5000);
             }
         }
         
@@ -999,9 +1015,28 @@ document.addEventListener('DOMContentLoaded', function() {
         // Pause auto-play on hover
         const carouselContainer = document.querySelector('.carousel-container');
         if (carouselContainer) {
+            carouselContainer.addEventListener('mouseenter', () => {
+                pointerOverCarousel = true;
+            });
             carouselContainer.addEventListener('mouseenter', stopAutoPlay);
+            carouselContainer.addEventListener('mouseleave', () => {
+                pointerOverCarousel = false;
+            });
             carouselContainer.addEventListener('mouseleave', startAutoPlay);
+            carouselContainer.addEventListener('focusin', () => {
+                focusWithinCarousel = true;
+            });
+            carouselContainer.addEventListener('focusin', stopAutoPlay);
+            carouselContainer.addEventListener('focusout', (event) => {
+                focusWithinCarousel = carouselContainer.contains(event.relatedTarget);
+            });
+            carouselContainer.addEventListener('focusout', startAutoPlay);
         }
+
+        reducedMotion.addEventListener('change', (event) => {
+            if (event.matches) stopAutoPlay();
+            else startAutoPlay();
+        });
         
         // Initialize carousel on page load
         updateCarousel();
warning: in the working copy of '.superpowers/sdd/snapshots/task-3-before/pixel-script.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'pixel-script.js', LF will be replaced by CRLF the next time Git touches it

```

## tests diff

```diff
Exit code: 0
Wall time: 0.6 seconds
Output:
diff --git a/.superpowers/sdd/snapshots/task-3-before/portfolio-contract.test.mjs b/tests/portfolio-contract.test.mjs
index 0c2bfcd..0a99767 100644
--- a/.superpowers/sdd/snapshots/task-3-before/portfolio-contract.test.mjs
+++ b/tests/portfolio-contract.test.mjs
@@ -64,3 +64,31 @@ test('表单控件和轮播指示器保留统一键盘焦点', async () => {
   assert.match(css, /\.form-group input:focus,\s*\.form-group textarea:focus\s*\{[^}]*\}[\s\S]*\.form-group input:focus-visible,\s*\.form-group textarea:focus-visible\s*\{[^}]*outline:\s*4px solid var\(--purple-deep\);[^}]*outline-offset:\s*4px;/s);
   assert.match(css, /\.indicator:focus-visible\s*\{[^}]*outline:\s*4px solid var\(--purple-deep\);[^}]*outline-offset:\s*4px;/s);
 });
+
+test('菜单与轮播同步可访问状态并尊重减少动态效果', async () => {
+  const html = await read('index.html');
+  const js = await read('pixel-script.js');
+  assert.match(html, /id="prevBtn"[^>]*aria-label="Previous featured project"/);
+  assert.match(html, /id="nextBtn"[^>]*aria-label="Next featured project"/);
+  assert.match(html, /class="indicator active"[^>]*aria-label="Show featured project 1"/);
+  assert.match(js, /function setMobileMenu\(open\)/);
+  assert.match(js, /setAttribute\('aria-expanded'/);
+  assert.match(js, /setAttribute\('aria-current'/);
+  assert.match(js, /matchMedia\('\(prefers-reduced-motion: reduce\)'\)/);
+  assert.match(js, /addEventListener\('focusin', stopAutoPlay\)/);
+  assert.match(js, /event\.key === 'Escape'/);
+  assert.match(js, /matchMedia\('\(min-width: 769px\)'\)/);
+});
+
+test('轮播仅让当前可见项目进入键盘顺序', async () => {
+  const js = await read('pixel-script.js');
+  assert.match(js, /slide\.setAttribute\('tabindex', active \? '0' : '-1'\)/);
+});
+
+test('轮播仅在悬停和焦点暂停条件都解除后恢复', async () => {
+  const js = await read('pixel-script.js');
+  assert.match(js, /let pointerOverCarousel = false/);
+  assert.match(js, /let focusWithinCarousel = false/);
+  assert.match(js, /!pointerOverCarousel && !focusWithinCarousel/);
+  assert.match(js, /focusWithinCarousel = carouselContainer\.contains\(event\.relatedTarget\)/);
+});
warning: in the working copy of '.superpowers/sdd/snapshots/task-3-before/portfolio-contract.test.mjs', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tests/portfolio-contract.test.mjs', LF will be replaced by CRLF the next time Git touches it

```

