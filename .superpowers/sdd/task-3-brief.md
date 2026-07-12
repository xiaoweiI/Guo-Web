# Task 3: 同步移动菜单和精选轮播的可访问状态

## 目标

为精选轮播控件增加名称与实时状态，让自动播放在悬停、键盘焦点和减少动态效果偏好下正确暂停；扩展现有 `setMobileMenu(open)`，支持 Escape 关闭与恢复桌面宽度时重置。

## 文件

- 修改：`tests/portfolio-contract.test.mjs`
- 修改：`index.html`
- 修改：`pixel-script.js`

## 已有接口

Task 1 已提供：

```js
function setMobileMenu(open) {
    if (!hamburger || !navLinks) return;
    hamburger.classList.toggle('active', open);
    navLinks.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}
```

必须保留并扩展该函数，不得复制第二套菜单逻辑。

## 强约束

- 直接修改用户授权的当前 `main` 工作区，不提交、不暂存、不还原。
- 使用 `apply_patch`，只修改列出的三个文件，保留既有 8 个测试。
- 严格执行 TDD，记录 RED/GREEN。
- 不改变轮播现有 4 张内容、5 秒间隔、25% 位移、像素视觉和外部链接。
- 不引入依赖，不修改 CSS；Task 2 已提供焦点样式。

## RED 测试

追加以下测试：

```js
test('菜单与轮播同步可访问状态并尊重减少动态效果', async () => {
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
```

运行 `node --test tests/portfolio-contract.test.mjs`。预期新增测试失败，原因是轮播控件无名称，脚本未同步 `aria-current`、未读取减少动态效果、未响应 focusin/Escape/桌面媒体查询。

## GREEN HTML

```html
<button class="carousel-btn prev-btn" id="prevBtn" type="button" aria-label="Previous featured project">
    <i class="fas fa-chevron-left" aria-hidden="true"></i>
</button>
<button class="carousel-btn next-btn" id="nextBtn" type="button" aria-label="Next featured project">
    <i class="fas fa-chevron-right" aria-hidden="true"></i>
</button>

<div class="carousel-indicators" aria-label="Featured project selection">
    <button class="indicator active" type="button" data-slide="0" aria-label="Show featured project 1" aria-current="true"></button>
    <button class="indicator" type="button" data-slide="1" aria-label="Show featured project 2" aria-current="false"></button>
    <button class="indicator" type="button" data-slide="2" aria-label="Show featured project 3" aria-current="false"></button>
    <button class="indicator" type="button" data-slide="3" aria-label="Show featured project 4" aria-current="false"></button>
</div>
```

## GREEN 菜单扩展

在现有菜单代码后增加：

```js
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMobileMenu(false);
});

window.matchMedia('(min-width: 769px)').addEventListener('change', (event) => {
    if (event.matches) setMobileMenu(false);
});
```

## GREEN 轮播

在轮播作用域内使用：

```js
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let autoPlayInterval = null;

function updateCarousel() {
    slides.forEach((slide, index) => {
        const active = index === currentSlide;
        slide.classList.toggle('active', active);
        slide.setAttribute('aria-hidden', String(!active));
    });
    indicators.forEach((indicator, index) => {
        const active = index === currentSlide;
        indicator.classList.toggle('active', active);
        indicator.setAttribute('aria-current', String(active));
    });
    if (carouselTrack) {
        carouselTrack.style.transform = `translateX(${-currentSlide * 25}%)`;
    }
}

function stopAutoPlay() {
    if (autoPlayInterval !== null) window.clearInterval(autoPlayInterval);
    autoPlayInterval = null;
}

function startAutoPlay() {
    stopAutoPlay();
    if (!reducedMotion.matches) {
        autoPlayInterval = window.setInterval(nextSlide, 5000);
    }
}
```

保留现有 next/prev/indicator 事件。为现有 `carouselContainer` 增加 `mouseenter`/`mouseleave`、`focusin`/`focusout`；为 `reducedMotion` 增加 `change` 监听，偏好开启时停止，关闭时开始。避免重复 interval。

## 验证

运行：

```powershell
node --test tests/portfolio-contract.test.mjs
node --check pixel-script.js
git diff --check -- index.html pixel-script.js tests/portfolio-contract.test.mjs
```

预期：全部测试通过，脚本语法与空白检查通过。

## 报告

用 `apply_patch` 写入 `.superpowers/sdd/task-3-report.md`，记录实现、RED/GREEN、文件与位置、自检、顾虑。不要提交。最终只给 Status、无提交、测试摘要、顾虑和报告路径。
