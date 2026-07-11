# 个人作品集系统化改进实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在不改变现有像素电脑美术语言的前提下，修复响应式裁切、信息重复、长文可读性和关键无障碍交互问题。

**Architecture:** 保持当前静态 HTML、CSS 和原生 JavaScript 架构，通过小范围语义化标记、流式网格、受控断点和状态同步函数完成改进。使用 Node 内置测试运行器检查静态契约，再使用应用内浏览器完成真实布局与交互验证。

**Tech Stack:** HTML5、CSS3、原生 JavaScript、Node.js `node:test`、Codex 应用内浏览器。

## Global Constraints

- 保留现有颜色变量、浅紫背景、CRT 扫描线、4 像素边框、硬质错位阴影和窗口标题栏。
- 标题、按钮、窗口标签继续使用 Press Start 2P / Zpix；长正文只增加等宽字体回退。
- 保留中英文切换、现有图片资产、Font Awesome 图标和 `.exe` / `.txt` 文件叙事。
- 不引入前端框架、构建工具、第三方测试依赖或新图片。
- 不提交联系表单，不发送个人信息。
- 当前工作区已有大量用户改动；实现阶段不得还原、覆盖或自动提交无关内容。每个任务只记录精确差异，除非用户再次授权，否则不创建包含既有改动的代码提交。

---

### Task 1: 建立静态契约测试并修正页面语义外壳

**Files:**
- Create: `tests/portfolio-contract.test.mjs`
- Modify: `index.html:23-52, 1075-1077`
- Modify: `game-detail.html:17-46, 137-139`

**Interfaces:**
- Consumes: 当前 `index.html` 与 `game-detail.html`。
- Produces: `tests/portfolio-contract.test.mjs` 中的 `read(relativePath)` 测试辅助函数；两个页面统一的 `.logo`、`.hamburger`、`#primary-navigation`、`main` 结构。

- [ ] **Step 1: 写入会失败的语义契约测试**

```js
// tests/portfolio-contract.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const read = (relativePath) => readFile(new URL(relativePath, root), 'utf8');

test('首页具有唯一主内容区域与语义化移动菜单', async () => {
  const html = await read('index.html');
  assert.match(html, /<main id="main-content">/);
  assert.match(html, /<a class="logo"[^>]*>VIOLET GUO<\/a>/);
  assert.match(html, /<button[^>]*class="hamburger"[^>]*aria-controls="primary-navigation"[^>]*aria-expanded="false"/);
  assert.match(html, /<ul id="primary-navigation" class="nav-links">/);
});

test('详情页共享相同的语义化导航契约', async () => {
  const html = await read('game-detail.html');
  assert.match(html, /<main id="main-content">/);
  assert.match(html, /<a class="logo"[^>]*>VIOLET GUO<\/a>/);
  assert.match(html, /<button[^>]*class="hamburger"[^>]*aria-controls="primary-navigation"[^>]*aria-expanded="false"/);
});

test('页面不启用无有效账户标识的统计脚本', async () => {
  const pages = await Promise.all(['index.html', 'game-detail.html'].map(read));
  const invalidAccount = ['TO', 'DO-your-code'].join('');
  for (const html of pages) {
    assert.doesNotMatch(html, new RegExp(invalidAccount, 'i'));
    assert.doesNotMatch(html, /gc\.zgo\.at\/count\.js/i);
  }
});
```

- [ ] **Step 2: 运行测试并确认失败**

Run: `node --test tests/portfolio-contract.test.mjs`

Expected: 3 个测试失败，原因分别是缺少 `main`、Logo 仍为标题元素、移动菜单仍为 `div`，且无效统计配置仍存在。

- [ ] **Step 3: 用最小标记改动满足语义契约**

将两个页面的品牌和导航统一为以下结构；详情页只把 Logo 的链接改为 `index.html#home`：

```html
<a class="logo" href="#home" aria-label="Violet Guo, Home">VIOLET GUO</a>
<nav aria-label="Primary navigation">
  <ul id="primary-navigation" class="nav-links">
    <!-- 保留现有六个 li 链接及其 data 属性 -->
  </ul>
  <button id="langSwitcher" class="lang-switcher" type="button" aria-label="Switch language">中文</button>
  <button class="hamburger" type="button" aria-label="Open navigation" aria-controls="primary-navigation" aria-expanded="false">
    <span class="bar" aria-hidden="true"></span>
    <span class="bar" aria-hidden="true"></span>
    <span class="bar" aria-hidden="true"></span>
  </button>
</nav>
```

在每个页面的 Header 后打开 `<main id="main-content">`，在 Footer 前关闭 `</main>`。删除两个页面中无有效账户标识的统计注释与脚本标签。

- [ ] **Step 4: 重新运行语义契约测试**

Run: `node --test tests/portfolio-contract.test.mjs`

Expected: 3 个测试全部通过。

- [ ] **Step 5: 检查任务差异，不提交既有用户改动**

Run: `git diff --check -- index.html game-detail.html tests/portfolio-contract.test.mjs`

Expected: 无空白错误；仅记录本任务涉及的新增测试与语义化差异。

---

### Task 2: 修复首页、精选区和作品档案的响应式布局

**Files:**
- Modify: `tests/portfolio-contract.test.mjs`
- Modify: `pixel-style.css:64-72, 202-251, 383-480, 546-760, 1416-1545`

**Interfaces:**
- Consumes: Task 1 的 `.logo`、`.hamburger`、`#primary-navigation` 结构。
- Produces: `--f-reading` 字体变量、全局焦点样式、1024/768/480 三档布局规则，以及不会超出容器的 Hero、CTA、Featured 和 Archive 网格。

- [ ] **Step 1: 增加响应式 CSS 契约测试**

将以下测试追加到 `tests/portfolio-contract.test.mjs`：

```js
test('样式定义阅读字体、焦点状态和三个响应式断点', async () => {
  const css = await read('pixel-style.css');
  assert.match(css, /--f-reading:/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /@media \(max-width: 1024px\)/);
  assert.match(css, /@media \(max-width: 768px\)/);
  assert.match(css, /@media \(max-width: 480px\)/);
  assert.match(css, /\.cta-buttons \.pixel-btn[\s\S]*width:\s*100%/);
  assert.match(css, /\.hero-featured[\s\S]*grid-template-columns:\s*minmax\(0,\s*1fr\)/);
});
```

- [ ] **Step 2: 运行新增测试并确认失败**

Run: `node --test tests/portfolio-contract.test.mjs`

Expected: 新增测试失败，因为尚无 `--f-reading`、统一 `:focus-visible` 与 480 像素断点。

- [ ] **Step 3: 增加共享字体、收缩保护与焦点样式**

在 `:root` 与基础样式中加入：

```css
:root {
  --f-reading: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", "Courier New", monospace;
}

.container,
.hero-content,
.hero-featured,
.mini-win,
.games-grid,
.game-card,
.featured-item,
.featured-content {
  min-width: 0;
}

:where(a, button, input, textarea, select):focus-visible {
  outline: 4px solid var(--purple-deep);
  outline-offset: 4px;
  box-shadow: 6px 6px 0 var(--hard);
}

.game-info p,
.contact-form input,
.contact-form textarea {
  font-family: var(--f-reading);
}
```

- [ ] **Step 4: 调整 1024、768 和 480 像素断点**

在现有响应式区域合并以下规则，避免建立重复冲突的媒体查询：

```css
@media (max-width: 1024px) {
  .container { width: 100%; padding-inline: 24px; }
  .games-grid--flagship { grid-template-columns: minmax(0, 1fr); }
  .featured-content { padding-inline: 68px; }
}

@media (max-width: 768px) {
  header .container { padding-inline: 16px; }
  .hamburger {
    display: inline-flex;
    width: 44px;
    height: 44px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0;
    background: transparent;
  }
  .hero { padding: 40px 0; }
  .hero-content { width: 100%; }
  .hero-content h1,
  .hero-content h2,
  .hero-content p { max-width: 100%; overflow-wrap: anywhere; }
  .cta-buttons { flex-direction: column; align-items: stretch; gap: 16px; }
  .cta-buttons .pixel-btn { width: 100%; max-width: 420px; margin-inline: auto; }
  .hero-featured { grid-template-columns: minmax(0, 1fr); width: 100%; max-width: 420px; }
  .featured-content { padding: 20px 60px 24px; }
  .game-info { padding: 16px; }
}

@media (max-width: 480px) {
  .container { padding-inline: 16px; }
  .logo { font-size: 11px; }
  .lang-switcher { width: 56px; min-width: 56px; }
  .hero-content h1 { font-size: 20px; }
  .hero-content p { font-size: 19px; }
  .mini-win img { height: auto; aspect-ratio: 16 / 9; }
  .featured-image { height: 420px; }
  .featured-content { padding: 18px 52px 22px; }
  .featured-content p { font-size: 18px; line-height: 1.35; }
  .filter-buttons { display: grid; grid-template-columns: minmax(0, 1fr); }
  .filter-btn { width: 100%; }
}
```

- [ ] **Step 5: 运行静态测试与 CSS 检查**

Run: `node --test tests/portfolio-contract.test.mjs`

Expected: 全部测试通过。

Run: `git diff --check -- pixel-style.css tests/portfolio-contract.test.mjs`

Expected: 无空白错误。

---

### Task 3: 同步移动菜单和精选轮播的可访问状态

**Files:**
- Modify: `tests/portfolio-contract.test.mjs`
- Modify: `index.html:235-251`
- Modify: `pixel-script.js:578-598, 922-1004`

**Interfaces:**
- Consumes: Task 1 的 `.hamburger` 按钮与 `#primary-navigation`；现有 `.featured-item`、`.indicator`、`#prevBtn`、`#nextBtn`。
- Produces: `setMobileMenu(open)`、`startAutoPlay()`、`stopAutoPlay()` 和同步的 `aria-expanded`、`aria-hidden`、`aria-current` 状态。

- [ ] **Step 1: 增加交互源代码契约测试**

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
});
```

- [ ] **Step 2: 运行测试并确认失败**

Run: `node --test tests/portfolio-contract.test.mjs`

Expected: 新增测试失败，当前 HTML 控件无名称，JavaScript 也未同步 ARIA 状态。

- [ ] **Step 3: 为轮播按钮与指示点增加名称**

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

- [ ] **Step 4: 用单一函数管理移动菜单状态**

将当前菜单切换代码替换为：

```js
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function setMobileMenu(open) {
  if (!hamburger || !navLinks) return;
  hamburger.classList.toggle('active', open);
  navLinks.classList.toggle('active', open);
  hamburger.setAttribute('aria-expanded', String(open));
  hamburger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

hamburger?.addEventListener('click', () => {
  setMobileMenu(hamburger.getAttribute('aria-expanded') !== 'true');
});

document.querySelectorAll('.nav-links a').forEach((item) => {
  item.addEventListener('click', () => setMobileMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMobileMenu(false);
});

window.matchMedia('(min-width: 769px)').addEventListener('change', (event) => {
  if (event.matches) setMobileMenu(false);
});
```

- [ ] **Step 5: 使轮播状态、焦点与动效偏好一致**

在现有轮播闭包中加入以下完整行为；保留现有前后切换与位移计算：

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
  if (!reducedMotion.matches) autoPlayInterval = window.setInterval(nextSlide, 5000);
}

carouselContainer?.addEventListener('mouseenter', stopAutoPlay);
carouselContainer?.addEventListener('mouseleave', startAutoPlay);
carouselContainer?.addEventListener('focusin', stopAutoPlay);
carouselContainer?.addEventListener('focusout', startAutoPlay);
reducedMotion.addEventListener('change', () => reducedMotion.matches ? stopAutoPlay() : startAutoPlay());
```

- [ ] **Step 6: 运行测试并检查语法**

Run: `node --test tests/portfolio-contract.test.mjs`

Expected: 全部测试通过。

Run: `node --check pixel-script.js`

Expected: 无语法错误。

---

### Task 4: 优化详情页阅读顺序、单栏布局和公开文案

**Files:**
- Modify: `tests/portfolio-contract.test.mjs`
- Modify: `game-detail.html:57-137`
- Modify: `game-detail.css:20-150, 240-390`
- Modify: `game-detail.js:950-1007, 1114-1153`
- Modify: `index.html:551-570`
- Modify: `pixel-script.js` 中 `game_falling_kingdom_desc` 的中英文翻译条目

**Interfaces:**
- Consumes: Task 1 的详情页 `main` 与共享导航结构。
- Produces: `#game-outcome-summary`、`.game-outcome-summary`、1100 像素双栏断点、长文阅读字体，以及无未完成标记的中英文项目数据。

- [ ] **Step 1: 增加详情页与内容清理契约测试**

```js
test('详情页提供成果摘要并在较窄宽度使用单栏', async () => {
  const html = await read('game-detail.html');
  const css = await read('game-detail.css');
  assert.match(html, /id="game-outcome-summary"/);
  assert.match(css, /@media \(min-width: 1100px\)/);
  assert.match(css, /grid-template-columns:\s*minmax\(0,\s*1\.1fr\)\s+minmax\(320px,\s*0\.9fr\)/);
  assert.match(css, /font-family:\s*var\(--f-reading\)/);
});

test('公开页面和双语数据不包含未完成标记', async () => {
  const sources = await Promise.all([
    'index.html',
    'pixel-script.js',
    'game-detail.html',
    'game-detail.js'
  ].map(read));
  const unfinished = new RegExp('\\[(?:TO){1}DO', 'i');
  for (const source of sources) assert.doesNotMatch(source, unfinished);
});
```

- [ ] **Step 2: 运行测试并确认失败**

Run: `node --test tests/portfolio-contract.test.mjs`

Expected: 两个新增测试失败，详情页没有成果摘要、双栏断点过早，且项目数据仍包含未完成标记。

- [ ] **Step 3: 在详情页元数据后增加成果摘要**

在 `.game-detail-header` 内、`.game-detail-meta` 之后加入：

```html
<div id="game-outcome-summary" class="game-outcome-summary" hidden>
  <span class="outcome-label" data-i18n="game_outcome">Outcome</span>
  <p id="game-outcome-summary-text"></p>
</div>
```

在 `loadGameData()` 更新可选字段的位置加入：

```js
const outcomeSummary = document.getElementById('game-outcome-summary');
const outcomeSummaryText = document.getElementById('game-outcome-summary-text');
if (outcomeSummary && outcomeSummaryText && game.outcome?.[lang]) {
  outcomeSummaryText.textContent = game.outcome[lang];
  outcomeSummary.hidden = false;
} else if (outcomeSummary) {
  outcomeSummary.hidden = true;
}
```

- [ ] **Step 4: 延后双栏断点并约束正文**

将原 768 像素双栏媒体查询替换为：

```css
.game-detail-main,
.game-detail-left,
.game-detail-info,
.game-detail-meta,
.game-role-detail,
.game-category,
.tech-tags {
  min-width: 0;
}

.game-detail-main {
  grid-template-columns: minmax(0, 1fr);
}

@media (min-width: 1100px) {
  .game-detail-main {
    grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  }
}

.game-info-section p,
.feature-list,
.fact-tile-value,
.game-outcome-summary p {
  font-family: var(--f-reading);
  overflow-wrap: anywhere;
}

.game-info-section p,
.game-outcome-summary p {
  max-width: 68ch;
}

.game-outcome-summary {
  margin-top: 20px;
  padding: 16px;
  width: min(100%, 760px);
  background: var(--panel);
  border: 4px solid var(--border);
  box-shadow: 4px 4px 0 var(--hard);
}

.game-outcome-summary[hidden] { display: none; }
```

在 767 像素以下同时让 `.game-role-detail`、`.game-category`、`.back-button .pixel-btn` 宽度不超过容器，并允许文字换行。

- [ ] **Step 5: 用中性事实文案替换未完成内容**

统一使用以下文案，不增加未经用户确认的机制或成果：

```js
// Revelation description: 删除末尾未完成段落，仅保留现有已确认的第一段。

// Falling Kingdom
description: {
  en: 'Physical board game designed and produced independently.',
  zh: '独立设计并制作的实体桌游。'
},
features: {
  en: ['Independent physical game design', 'Physical prototyping and playtesting'],
  zh: ['独立实体桌游设计', '实体原型制作与游戏测试']
}
```

同时将 `index.html` 与 `pixel-script.js` 中 Falling Kingdom 的列表描述同步为上述中英文内容。

- [ ] **Step 6: 运行测试和语法检查**

Run: `node --test tests/portfolio-contract.test.mjs`

Expected: 全部测试通过。

Run: `node --check game-detail.js`

Expected: 无语法错误。

Run: `git diff --check -- game-detail.html game-detail.css game-detail.js index.html pixel-script.js tests/portfolio-contract.test.mjs`

Expected: 无空白错误。

---

### Task 5: 在真实页面完成桌面端、移动端和关键交互验证

**Files:**
- Modify when required by findings: `index.html`, `pixel-style.css`, `pixel-script.js`, `game-detail.html`, `game-detail.css`, `game-detail.js`
- Create outside committed source: `C:/tmp/guo-web-qa/desktop-home.png`
- Create outside committed source: `C:/tmp/guo-web-qa/mobile-home.png`
- Create outside committed source: `C:/tmp/guo-web-qa/mobile-menu.png`
- Create outside committed source: `C:/tmp/guo-web-qa/detail-1024.png`

**Interfaces:**
- Consumes: Tasks 1–4 的静态契约、响应式样式和交互状态。
- Produces: 390、768、1024、1280 像素检查结果、关键交互证据、控制台健康记录和最终截图。

- [ ] **Step 1: 运行全部静态检查**

Run: `node --test tests/portfolio-contract.test.mjs`

Expected: 全部测试通过。

Run: `node --check pixel-script.js`

Expected: 无语法错误。

Run: `node --check game-detail.js`

Expected: 无语法错误。

- [ ] **Step 2: 通过应用内浏览器打开本地静态网站**

目标流程：`首页 -> 移动菜单 -> Portfolio -> 分类筛选 -> 精选轮播 -> Dramai.AI 详情 -> 语言切换 -> Contact`。

检查页面 URL、标题、DOM 快照、框架错误覆盖层以及浏览器控制台中的 error/warn。

- [ ] **Step 3: 验证四个响应式宽度**

依次设置 390×844、768×900、1024×800、1280×720。每个宽度读取：

```js
({
  viewportWidth: innerWidth,
  documentWidth: document.documentElement.scrollWidth,
  overflow: document.documentElement.scrollWidth > innerWidth,
  clipped: [...document.querySelectorAll('h1,h2,p,a,button,img')]
    .filter((element) => {
      const rect = element.getBoundingClientRect();
      return rect.left < -1 || rect.right > innerWidth + 1;
    })
    .slice(0, 20)
    .map((element) => ({ tag: element.tagName, text: element.textContent?.trim().slice(0, 60) }))
})
```

Expected: `overflow` 为 `false`，`clipped` 不包含主要标题、CTA、项目卡片、导航或详情正文。

- [ ] **Step 4: 验证交互状态**

- 移动菜单点击后 `aria-expanded="true"` 且导航可见；Escape 后恢复为 `false`。
- 点击 Portfolio 后菜单关闭且作品页激活。
- 点击 Personal Projects 后商业项目隐藏、个人项目显示。
- 点击轮播下一张后 `aria-current="true"` 移到下一指示点；焦点进入轮播时五秒后不自动前进。
- 打开 Dramai.AI 后标题、成果摘要、图片、Challenge、What I Designed 和 Links 均存在。
- 切换中文后 `<html lang="zh">` 且导航和项目标题更新。
- 打开 Contact 后四个表单字段都具有可见标签和 `required`；不触发表单提交。

- [ ] **Step 5: 做视觉对照并记录至少五项比较**

将审视截图与新截图并排检查：

1. 紫粉配色、CRT 扫描线与背景图案未改变。
2. Logo、Hero、CTA 和首个项目窗口在首屏中完整显示。
3. 像素字体仍用于标题与控件，长正文更易读。
4. 窗口边框、标题栏和粉色硬阴影一致。
5. 详情页在 1024 像素改为单栏，在 1280 像素为受控双栏。
6. 移动端没有横向裁切、重叠或异常空白。

若出现可修复偏差，回到对应文件做最小修改，然后重新加载并重复本任务的检查。

- [ ] **Step 6: 最终差异与工作区安全检查**

Run: `git diff --check -- index.html pixel-style.css pixel-script.js game-detail.html game-detail.css game-detail.js tests/portfolio-contract.test.mjs`

Expected: 无空白错误。

Run: `git status --short`

Expected: 用户原有改动保持存在；新增或修改文件范围与本计划一致；不自动暂存或提交包含既有用户改动的网站文件。
