import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const read = (relativePath) => readFile(new URL(relativePath, root), 'utf8');

test('首页具有唯一主内容区域与语义化移动菜单', async () => {
  const html = await read('index.html');
  assert.equal((html.match(/<main id="main-content">/g) || []).length, 1);
  assert.match(html, /<a class="logo"[^>]*>VIOLET GUO<\/a>/);
  assert.match(html, /<button[^>]*class="hamburger"[^>]*aria-controls="primary-navigation"[^>]*aria-expanded="false"/);
  assert.match(html, /<ul id="primary-navigation" class="nav-links">/);
});

test('详情页共享相同的语义化导航契约', async () => {
  const html = await read('game-detail.html');
  assert.equal((html.match(/<main id="main-content">/g) || []).length, 1);
  assert.match(html, /<a class="logo"[^>]*>VIOLET GUO<\/a>/);
  assert.match(html, /<button[^>]*class="hamburger"[^>]*aria-controls="primary-navigation"[^>]*aria-expanded="false"/);
});

test('移动菜单按钮重置默认外观并绘制内联条', async () => {
  const css = await read('pixel-style.css');
  assert.match(css, /\.hamburger\s*\{[^}]*background:\s*transparent;/s);
  assert.match(css, /\.hamburger\s*\{[^}]*border:\s*0;/s);
  assert.match(css, /\.hamburger \.bar\s*\{[^}]*display:\s*block;/s);
});

test('移动菜单状态同步到可访问属性', async () => {
  const script = await read('pixel-script.js');
  assert.match(script, /function setMobileMenu\(open\)/);
  assert.match(script, /hamburger\.setAttribute\('aria-expanded', String\(open\)\)/);
  assert.match(script, /hamburger\.setAttribute\('aria-label', open \? 'Close navigation' : 'Open navigation'\)/);
});

test('页面不启用无有效账户标识的统计脚本', async () => {
  const pages = await Promise.all(['index.html', 'game-detail.html'].map(read));
  const invalidAccount = ['TO', 'DO-your-code'].join('');
  for (const html of pages) {
    assert.doesNotMatch(html, new RegExp(invalidAccount, 'i'));
    assert.doesNotMatch(html, /gc\.zgo\.at\/count\.js/i);
  }
});

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

test('表单控件最终使用阅读字体', async () => {
  const css = await read('pixel-style.css');
  assert.match(css, /\.form-group input,\s*\.form-group textarea\s*\{[^}]*font-family:\s*var\(--f-reading\)/s);
});

test('表单控件和轮播指示器保留统一键盘焦点', async () => {
  const css = await read('pixel-style.css');
  assert.match(css, /\.form-group input:focus,\s*\.form-group textarea:focus\s*\{[^}]*\}[\s\S]*\.form-group input:focus-visible,\s*\.form-group textarea:focus-visible\s*\{[^}]*outline:\s*4px solid var\(--purple-deep\);[^}]*outline-offset:\s*4px;/s);
  assert.match(css, /\.indicator:focus-visible\s*\{[^}]*outline:\s*4px solid var\(--purple-deep\);[^}]*outline-offset:\s*4px;/s);
});

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

test('轮播将非活动项目的整个交互子树移出键盘顺序', async () => {
  const js = await read('pixel-script.js');
  assert.match(js, /slide\.toggleAttribute\('inert', !active\)/);
  assert.doesNotMatch(js, /slide\.setAttribute\('tabindex'/);
});

test('轮播仅在悬停和焦点暂停条件都解除后恢复', async () => {
  const js = await read('pixel-script.js');
  assert.match(js, /let pointerOverCarousel = false/);
  assert.match(js, /let focusWithinCarousel = false/);
  assert.match(js, /!pointerOverCarousel && !focusWithinCarousel/);
  assert.match(js, /focusWithinCarousel = carouselContainer\.contains\(event\.relatedTarget\)/);
});

test('详情页提供唯一成果摘要并在较窄宽度使用单栏', async () => {
  const html = await read('game-detail.html');
  const css = await read('game-detail.css');
  assert.match(html, /id="game-outcome-summary"/);
  assert.equal((html.match(/id="game-outcome-summary"/g) || []).length, 1);
  assert.doesNotMatch(html, /id="section-outcome"/);
  assert.match(css, /@media \(min-width: 1100px\)/);
  assert.match(css, /grid-template-columns:\s*minmax\(0,\s*1\.1fr\)\s+minmax\(320px,\s*0\.9fr\)/);
  assert.match(css, /font-family:\s*var\(--f-reading\)/);
});

test('详情页在 1100px 以下按阅读任务重排内容且保留桌面双栏', async () => {
  const html = await read('game-detail.html');
  const css = await read('game-detail.css');
  assert.match(html, /id="section-overview"/);
  assert.match(html, /id="section-features"/);
  assert.match(html, /id="section-links"/);
  assert.match(css, /@media \(max-width: 1099px\)/);
  assert.match(css, /\.game-detail-header,\s*\.game-detail-main,\s*\.game-detail-left,\s*\.game-detail-info\s*\{[^}]*display:\s*contents;/s);
  assert.match(css, /#section-facts\s*\{[^}]*order:\s*3;[\s\S]*\.game-outcome-summary\s*\{[^}]*order:\s*4;[\s\S]*\.game-detail-image\s*\{[^}]*order:\s*5;[\s\S]*#section-overview\s*\{[^}]*order:\s*6;[\s\S]*#section-team\s*\{[^}]*order:\s*7;[\s\S]*#section-challenge\s*\{[^}]*order:\s*8;[\s\S]*#section-features\s*\{[^}]*order:\s*9;[\s\S]*#game-gallery\s*\{[^}]*order:\s*10;[\s\S]*#section-links\s*\{[^}]*order:\s*11;/s);
  assert.ok(
    css.lastIndexOf('@media (max-width: 1099px)') > css.indexOf('.game-detail-left {'),
    '窄屏 display: contents 必须位于基础 left-column display 之后，避免被级联覆盖'
  );
  assert.match(css, /@media \(min-width: 1100px\)[\s\S]*grid-template-columns:\s*minmax\(0,\s*1\.1fr\)\s+minmax\(320px,\s*0\.9fr\)/);
});

test('Archive 缩略图具有按钮语义并用统一处理支持 Enter 和 Space', async () => {
  const script = await read('pixel-script.js');
  const css = await read('pixel-style.css');
  assert.match(script, /thumb\.setAttribute\('role',\s*'button'\)/);
  assert.match(script, /thumb\.tabIndex\s*=\s*0/);
  assert.match(script, /const activateThumb\s*=\s*\(\)\s*=>\s*openLightbox\(thumbs,\s*i\)/);
  assert.match(script, /thumb\.addEventListener\('click',\s*activateThumb\)/);
  assert.match(script, /event\.key\s*===\s*'Enter'\s*\|\|\s*event\.key\s*===\s*' '/);
  assert.match(script, /event\.preventDefault\(\)[\s\S]*activateThumb\(\)/);
  assert.match(css, /\.archive-gallery-thumb:focus-visible\s*\{[^}]*outline:/s);
});

test('带 lang 参数的语言按钮以当前页面状态切换并同步 URL', async () => {
  const script = await read('pixel-script.js');
  assert.match(script, /function syncLanguageUrl\(lang\)/);
  assert.match(script, /url\.searchParams\.has\('lang'\)/);
  assert.match(script, /url\.searchParams\.set\('lang',\s*lang\)/);
  assert.match(script, /history\.replaceState\(history\.state,\s*'',\s*url\)/);
  assert.match(script, /const currentLang\s*=\s*document\.documentElement\.lang\s*===\s*'zh'\s*\?\s*'zh'\s*:\s*'en'/);
  assert.match(script, /updateLanguage\(newLang\)/);
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
