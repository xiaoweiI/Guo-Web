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
  const pages = await Promise.all(['index.html', 'game-detail.html', 'thanks.html'].map(read));
  const invalidAccount = ['TO', 'DO-your-code'].join('');
  for (const html of pages) {
    assert.doesNotMatch(html, new RegExp(invalidAccount, 'i'));
    assert.doesNotMatch(html, /gc\.zgo\.at\/count\.js/i);
  }
});

test('感谢页共享语义化移动菜单且语言按钮不触发提交', async () => {
  const html = await read('thanks.html');
  assert.match(html, /<button[^>]*class="hamburger"[^>]*type="button"[^>]*aria-label="Open navigation"[^>]*aria-controls="primary-navigation"[^>]*aria-expanded="false"/);
  assert.match(html, /<ul id="primary-navigation" class="nav-links">/);
  assert.doesNotMatch(html, /<div[^>]*class="hamburger"/);
  assert.match(html, /<button[^>]*id="langSwitcher"[^>]*type="button"/);
});

test('页面导航以 URL hash 为真源且前进后退不新增历史记录', async () => {
  const script = await read('pixel-script.js');
  assert.equal((script.match(/history\.pushState\(/g) || []).length, 1);
  assert.match(script, /function navigateTo\(pageId\)\s*\{[^}]*if \(pageId !== getPageFromHash\(\)\)\s*\{\s*history\.pushState\(null, null, `#\$\{pageId\}`\);\s*\}\s*renderPage\(\);\s*\}/);
  assert.match(script, /addEventListener\('popstate', function\(\) \{\s*renderPage\(\);\s*\}\)/);
  assert.match(script, /\/\/ Initialize based on URL hash or default to home\s*renderPage\(\);/);
  assert.doesNotMatch(script, /function renderPage\(\)\s*\{(?:(?!\n    \}).)*pushState/s);
});

test('未知或大小写错误的 hash 回退到首页并原地修正 URL', async () => {
  const script = await read('pixel-script.js');
  assert.match(script, /window\.location\.hash\.substring\(1\)\.toLowerCase\(\)/);
  assert.match(script, /return hasPage\(pageId\) \? pageId : 'home';/);
  assert.match(script, /if \(window\.location\.hash !== `#\$\{pageId\}`\)\s*\{\s*history\.replaceState\(history\.state, '', `#\$\{pageId\}`\);/);
});

test('当前文档没有目标页面区块时导航链接保留自身 href', async () => {
  const script = await read('pixel-script.js');
  assert.match(script, /const pageId = this\.getAttribute\('data-page'\);[^}]*if \(!hasPage\(pageId\)\) return;\s*e\.preventDefault\(\);\s*navigateTo\(pageId\);/);
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

test('详情页说明窗口的标题栏抵消内容侧边距以铺满窗口', async () => {
  const css = await read('game-detail.css');
  assert.match(css, /\[data-win\]\.game-detail-info\s*\{[^}]*padding:\s*0 24px 24px;/s);
  assert.match(css, /\[data-win\]\.game-detail-info::before\s*\{[^}]*margin:\s*0 -24px;/s);
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

test('详情页预览列仅在桌面双栏布局下吸顶于站点头部下方', async () => {
  const css = await read('game-detail.css');
  const base = await read('pixel-style.css');
  assert.match(base, /\nheader\s*\{[^}]*position:\s*sticky;[^}]*height:\s*76px;/s);
  assert.match(css, /@media \(min-width: 1100px\)\s*\{\s*\.game-detail-left\s*\{[^}]*position:\s*sticky;[^}]*top:\s*100px;/s);
  assert.equal((css.match(/position:\s*sticky/g) || []).length, 1);
  assert.ok(
    css.lastIndexOf('@media (max-width: 1099px)') > css.indexOf('position: sticky'),
    '窄屏 display: contents 必须位于吸顶规则之后'
  );
});

test('英文模式不为语言按钮或 Zpix 缺失的装饰符号下载中文字体', async () => {
  const css = await read('pixel-style.css');
  const rule = css.match(/html:not\(\[lang="zh"\]\) \.lang-switcher\s*\{([^}]*)\}/);
  assert.ok(rule, '非中文模式的语言按钮需要独立字体规则');
  assert.match(rule[1], /font-family:[^;]*sans-serif;/);
  assert.doesNotMatch(rule[1], /Zpix/);
  assert.match(css, /\n\.lang-switcher\s*\{[^}]*font-family:\s*'Press Start 2P',\s*'Zpix',\s*monospace;/s);
  assert.match(css, /@font-face\s*\{[^}]*font-family:\s*'Zpix';[^}]*unicode-range:\s*U\+0-25AD,\s*U\+25AF-25B9,\s*U\+25BB-10FFFF;/s);
  assert.match(css, /html\[lang="zh"\]\s*\{\s*--f-head:\s*'Zpix',/);
});

test('首屏三张预览图以外的图片延迟加载', async () => {
  const html = await read('index.html');
  const detail = await read('game-detail.js');
  const script = await read('pixel-script.js');
  const images = html.match(/<img\b[^>]*>/g) || [];
  const lazy = images.filter((tag) => /\bloading="lazy"/.test(tag));
  assert.equal(images.length - lazy.length, 3);
  assert.equal((html.match(/<a class="mini-win"[^>]*>\s*<img\b(?![^>]*\bloading=)[^>]*>/g) || []).length, 3);
  for (const tag of lazy) assert.match(tag, /\bdecoding="async"/);
  assert.match(detail, /if \(index > 0\)\s*\{\s*img\.loading = 'lazy';\s*img\.decoding = 'async';\s*\}\s*img\.src = imageSrc;/);
  assert.match(script, /new IntersectionObserver\([\s\S]*?image\.loading = 'eager';[\s\S]*?\}\)\.observe\(carouselContainer\);/);
});

test('作品卡片的角色与链接文案走 data-i18n 且中文角色与详情数据一致', async () => {
  const html = await read('index.html');
  const detailHtml = await read('game-detail.html');
  const script = await read('pixel-script.js');
  const detail = await read('game-detail.js');
  const zhStart = script.indexOf('\n        zh: {');
  const blocks = {
    en: script.slice(script.indexOf('\n        en: {'), zhStart),
    zh: script.slice(zhStart, script.indexOf('// Function to get current language'))
  };
  const translation = (lang, key) => (blocks[lang].match(new RegExp(`"${key}":\\s*"((?:[^"\\\\]|\\\\.)*)"`)) || [])[1];

  assert.doesNotMatch(html, /<span class="role-(?:label|value)"(?![^>]*data-i18n=)/);
  const cards = [...html.matchAll(/class="game-card[^"]*"[^>]*game-detail\.html\?id=([\w-]+)'[\s\S]*?<span class="role-label" data-i18n="(\w+)">([^<]*)<\/span>\s*<span class="role-value" data-i18n="(\w+)">([^<]*)<\/span>/g)];
  assert.equal(cards.length, (html.match(/class="game-card/g) || []).length);
  for (const [, id, labelKey, label, roleKey, role] of cards) {
    assert.equal(translation('en', labelKey), label);
    assert.ok(translation('zh', labelKey), `${labelKey} 缺少中文`);
    assert.equal(translation('en', roleKey), role);
    const source = detail.match(new RegExp(`'?${id}'?: \\{\\s*title: \\{[^}]*\\},\\s*role: \\{\\s*en: '[^']*',\\s*zh: '([^']*)'`));
    assert.ok(source, `game-detail.js 缺少 ${id} 的角色`);
    assert.equal(translation('zh', roleKey), source[1], `${roleKey} 必须沿用 game-detail.js 的中文角色`);
  }

  assert.match(detailHtml, /<span class="role-label" data-i18n="role_label_my_title">My Title:<\/span>/);
  assert.equal(translation('en', 'role_label_my_title'), 'My Title:');
  assert.ok(translation('zh', 'role_label_my_title'));

  const links = [...html.matchAll(/class="(?:archive-link|pixel-btn secondary-btn)" data-i18n="(link_\w+)">([^<]*)<\/a>/g)];
  assert.equal(links.length, 7);
  for (const [, key, text] of links) {
    assert.equal(translation('en', key), text);
    assert.ok(translation('zh', key), `${key} 缺少中文`);
  }
  assert.doesNotMatch(html, /target="_blank"\s*class="[^"]*">[^<]/);

  for (const page of [html, detailHtml]) {
    assert.doesNotMatch(page.replace(/中文/g, ''), /\p{Script=Han}/u, 'HTML 中除语言名「中文」外不写死中文');
  }
});

test('打字效果单实例运行、尊重减少动态效果且每次加载只播放一次', async () => {
  const script = await read('typing-effect.js');
  assert.equal((script.match(/setInterval\(/g) || []).length, 1);
  assert.match(script, /function cancelTyping\(\)\s*\{[^}]*clearInterval\(typingInterval\);[^}]*clearTimeout\(startTimeout\);/s);
  assert.match(script, /function typeText\(text, speed\)\s*\{\s*\/\/[^\n]*\s*cancelTyping\(\);/);
  assert.match(script, /matchMedia\('\(prefers-reduced-motion: reduce\)'\)/);
  assert.match(script, /if \(hasTyped \|\| reducedMotion\.matches\)\s*\{\s*hasTyped = true;\s*showFullText\(fullText\);\s*return;\s*\}/);
  assert.match(script, /typeText\(fullText, 150\);/);
  assert.match(script, /addEventListener\('languageChanged', function\(\) \{\s*if \(hasTyped\)/);
  assert.match(script, /hello: "Hello, I'm Violet"/);
  assert.match(script, /hello: "你好，我是Violet"/);
});

test('运行时状态只存在于当前页面加载，preferredLanguage 是唯一持久化键', async () => {
  const sources = await Promise.all(['pixel-script.js', 'game-detail.js', 'typing-effect.js'].map(read));
  const calls = sources.flatMap((source) => source.match(/localStorage\.\w+\([^)]*\)/g) || []);
  assert.ok(calls.length > 0);
  for (const call of calls) assert.match(call, /^localStorage\.(?:getItem|setItem)\('preferredLanguage'/);
  for (const source of sources) {
    assert.doesNotMatch(source, /localStorage\s*\[|=\s*(?:window\.)?localStorage\s*[;,)]|sessionStorage|indexedDB|document\.cookie/);
  }
});

test('联系页邮箱是 mailto 链接并复用简历链接样式，关于页保持纯文本', async () => {
  const html = await read('index.html');
  const mail = html.match(/<p><a href="mailto:([^"]+)" class="archive-link">([^<]+)<\/a><\/p>/);
  assert.ok(mail);
  assert.equal(mail[1], mail[2]);
  assert.match(html, /<p><a href="assets\/resume\.pdf" class="archive-link"/);
  assert.ok(html.includes(`<span class="info-value">${mail[1]}</span>`));
  assert.equal((html.match(/href="mailto:/g) || []).length, 1);
});

test('轮播指示器扩大点击区域且访客手动切换后不再自动播放', async () => {
  const css = await read('pixel-style.css');
  const js = await read('pixel-script.js');
  assert.match(css, /\.carousel-indicators\s*\{[^}]*gap:\s*12px;/s);
  assert.match(css, /\.indicator\s*\{[^}]*position:\s*relative;[^}]*width:\s*12px;[^}]*height:\s*12px;[^}]*outline:\s*4px solid var\(--border\);/s);
  assert.match(css, /\.indicator::before\s*\{[^}]*content:\s*'';[^}]*position:\s*absolute;[^}]*inset:\s*-16px -6px;/s);
  assert.match(js, /let visitorTookControl = false/);
  assert.match(js, /function takeControl\(\)\s*\{\s*visitorTookControl = true;\s*stopAutoPlay\(\);\s*\}/);
  assert.equal((js.match(/takeControl\(\);/g) || []).length, 3);
  assert.match(js, /if \(!visitorTookControl && !reducedMotion\.matches && !pointerOverCarousel && !focusWithinCarousel\)/);
  assert.match(js, /indicator\.getAttribute\('data-slide'\)/);
  assert.doesNotMatch(js, /addEventListener\('click', (?:nextSlide|prevSlide)\)/);
  assert.match(js, /window\.setInterval\(nextSlide, 5000\)/);
});
