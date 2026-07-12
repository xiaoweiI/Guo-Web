# Task 3 Re-review Package

Original diff: `.superpowers/sdd/task-3-review-package.md`

## Inert fix and test excerpts

```text
Exit code: 0
Wall time: 1.1 seconds
Output:
  942:     let autoPlayInterval = null;
  943:     let pointerOverCarousel = false;
  944:     let focusWithinCarousel = false;
  945:     
  946:     if (slides.length > 0) {
  947:         // Initialize carousel
  948:         function updateCarousel() {
  949:             // Update slide visibility
  950:             slides.forEach((slide, index) => {
  951:                 const active = index === currentSlide;
  952:                 slide.classList.toggle('active', active);
  953:                 slide.setAttribute('aria-hidden', String(!active));
  954:                 slide.toggleAttribute('inert', !active);
  955:             });
  956:             
  957:             // Update indicators
  958:             indicators.forEach((indicator, index) => {
  959:                 const active = index === currentSlide;
  960:                 indicator.classList.toggle('active', active);

test('è¡¨å•æŽ§ä»¶å’Œè½®æ’­æŒ‡ç¤ºå™¨ä¿ç•™ç»Ÿä¸€é”®ç›˜ç„¦ç‚¹', async () => {
  const css = await read('pixel-style.css');
  assert.match(css, /\.form-group input:focus,\s*\.form-group textarea:focus\s*\{[^}]*\}[\s\S]*\.form-group input:focus-visible,\s*\.form-group textarea:focus-visible\s*\{[^}]*outline:\s*4px solid var\(--purple-deep\);[^}]*outline-offset:\s*4px;/s);
  assert.match(css, /\.indicator:focus-visible\s*\{[^}]*outline:\s*4px solid var\(--purple-deep\);[^}]*outline-offset:\s*4px;/s);
});

test('èœå•ä¸Žè½®æ’­åŒæ­¥å¯è®¿é—®çŠ¶æ€å¹¶å°Šé‡å‡å°‘åŠ¨æ€æ•ˆæžœ', async () => {
  const html = await read('index.html');
  const js = await read('pixel-script.js');
  assert.match(html, /id="prevBtn"[^>]*aria-label="Previous featured project"/);
  assert.match(html, /id="nextBtn"[^>]*aria-label="Next featured project"/);
  assert.match(html, /class="indicator active"[^>]*aria-label="Show featured project 1"/);
  assert.match(js, /function setMobileMenu\(open\)/);
  assert.match(js, /setAttribute\('aria-expanded'/);
  assert.match(js, /setAttribute\('aria-current'/);
  assert.match(js, /matchMedia\('\(prefers-reduced-motion: reduce\)'\)/);
  assert.match(js, /addEventListener\('focusin', stopAutoPlay\)/);
  assert.match(js, /event\.key === 'Escape'/);
  assert.match(js, /matchMedia\('\(min-width: 769px\)'\)/);
});

test('è½®æ’­å°†éžæ´»åŠ¨é¡¹ç›®çš„æ•´ä¸ªäº¤äº’å­æ ‘ç§»å‡ºé”®ç›˜é¡ºåº', async () => {
  const js = await read('pixel-script.js');
  assert.match(js, /slide\.toggleAttribute\('inert', !active\)/);
  assert.doesNotMatch(js, /slide\.setAttribute\('tabindex'/);
});

test('è½®æ’­ä»…åœ¨æ‚¬åœå’Œç„¦ç‚¹æš‚åœæ¡ä»¶éƒ½è§£é™¤åŽæ¢å¤', async () => {
  const js = await read('pixel-script.js');
  assert.match(js, /let pointerOverCarousel = false/);
  assert.match(js, /let focusWithinCarousel = false/);
  assert.match(js, /!pointerOverCarousel && !focusWithinCarousel/);
  assert.match(js, /focusWithinCarousel = carouselContainer\.contains\(event\.relatedTarget\)/);
});

```

