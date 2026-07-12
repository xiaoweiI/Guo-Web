# Task 2: 修复首页、精选区和作品档案的响应式布局

## 目标

在保留像素视觉系统的前提下，增加阅读字体变量、统一焦点样式与 1024/768/480 三档布局，确保 Hero、CTA、精选作品和完整作品网格不会超出容器。

## 文件

- 修改：`tests/portfolio-contract.test.mjs`
- 修改：`pixel-style.css`

## 强约束

- 用户授权直接修改当前 `main` 工作区，但禁止提交网站代码。
- 文件已有用户改动；不得还原、覆盖或格式化无关区域。
- 必须使用 `apply_patch`，严格执行 TDD 并记录 RED/GREEN。
- 保留现有颜色、字体职责、CRT、边框、硬阴影、窗口结构和图片。
- 不引入依赖，不修改 HTML 或 JavaScript。

## RED 测试

向现有测试文件追加：

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

运行 `node --test tests/portfolio-contract.test.mjs`。预期新增测试失败，原因是缺少 `--f-reading`、统一焦点状态与 480px 断点。

## GREEN 实施

在 `:root` 增加：

```css
--f-reading: ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", "Courier New", monospace;
```

增加收缩保护与焦点样式：

```css
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

在现有媒体查询内合并以下行为，避免重复冲突：

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

允许根据现有 CSS 结构调整插入位置，但不能改变这些行为。若发现指定数值在现有容器下仍会产生明确裁切，先报告而不是自行扩大范围。

## 验证

运行：

```powershell
node --test tests/portfolio-contract.test.mjs
git diff --check -- pixel-style.css tests/portfolio-contract.test.mjs
```

预期：全部测试通过，无空白错误。

## 报告

用 `apply_patch` 写入 `.superpowers/sdd/task-2-report.md`，包含实现内容、RED/GREEN 证据、文件与准确位置、自检、顾虑。不要创建提交。最终回复只给状态、无提交、测试摘要、顾虑和报告路径。
