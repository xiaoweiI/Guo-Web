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
