# Task 1: 建立静态契约测试并修正页面语义外壳

## 目标

为当前静态作品集建立 Node 内置测试契约，并用最小标记改动修正首页与详情页的主内容区域、Logo、移动菜单和无效统计配置。

## 文件

- 新建：`tests/portfolio-contract.test.mjs`
- 修改：`index.html`
- 修改：`game-detail.html`

## 强约束

- 直接在当前 `main` 工作区修改，这是用户明确授权的方式。
- 当前文件包含用户既有改动；不得还原、覆盖或提交任何网站代码。
- 使用 `apply_patch` 修改文件。
- 必须执行 TDD：先写测试并运行，记录预期失败；再改生产文件；再运行并记录通过。
- 不引入依赖，不提交联系表单，不修改其他文件。
- 保留现有六个导航链接、`data-*` 属性、双语行为和视觉类名。

## 测试文件完整内容

```js
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

## RED

运行：

```powershell
node --test tests/portfolio-contract.test.mjs
```

预期：3 个测试失败，因为两个页面没有 `main`，Logo 仍是标题元素，移动菜单仍是 `div`，无效统计配置仍存在。必须把命令、关键失败输出和失败原因写入报告。

## GREEN 实施

两个页面使用同一语义契约：

```html
<a class="logo" href="#home" aria-label="Violet Guo, Home">VIOLET GUO</a>
<nav aria-label="Primary navigation">
  <ul id="primary-navigation" class="nav-links">
    <!-- 原有六个 li 链接原样保留 -->
  </ul>
  <button id="langSwitcher" class="lang-switcher" type="button" aria-label="Switch language">中文</button>
  <button class="hamburger" type="button" aria-label="Open navigation" aria-controls="primary-navigation" aria-expanded="false">
    <span class="bar" aria-hidden="true"></span>
    <span class="bar" aria-hidden="true"></span>
    <span class="bar" aria-hidden="true"></span>
  </button>
</nav>
```

详情页 Logo 的 `href` 使用 `index.html#home`。在每个页面 Header 后打开 `<main id="main-content">`，在 Footer 前关闭 `</main>`。删除两个页面中无有效账户标识的统计注释与脚本标签。

再次运行：

```powershell
node --test tests/portfolio-contract.test.mjs
```

预期：3 个测试全部通过。

最后运行：

```powershell
git diff --check -- index.html game-detail.html tests/portfolio-contract.test.mjs
```

预期：无空白错误。

## 报告

用 `apply_patch` 写入 `.superpowers/sdd/task-1-report.md`，包含：实现内容、RED/GREEN 命令与关键输出、文件列表、自检结果、准确的修改位置和任何顾虑。不要创建 Git 提交。最终回复只包含状态、测试摘要、顾虑和报告路径。
