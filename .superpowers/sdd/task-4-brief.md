# Task 4: 优化详情页阅读顺序、单栏布局和公开文案

## 目标

在详情页标题与元数据后提供唯一的成果摘要，让 1024px 等较窄宽度使用单栏，1100px 及以上才进入受控双栏；长正文使用阅读字体；清除公开中英文内容中的未完成标记，不虚构信息。

## 文件

- 修改：`tests/portfolio-contract.test.mjs`
- 修改：`game-detail.html`
- 修改：`game-detail.css`
- 修改：`game-detail.js`
- 修改：`index.html`
- 修改：`pixel-script.js`

## 强约束

- 用户授权直接修改当前 `main` 工作区，但禁止提交、暂存、还原或格式化无关内容。
- 使用 `apply_patch`，严格 TDD，保留现有 11 个测试。
- 保留所有现有项目图片、图库、链接、双语机制、像素标题、窗口结构和颜色。
- 不虚构 Falling Kingdom 的机制、玩家人数、时长或成果。
- 成果只在标题/元数据后的摘要中展示一次；移除或停用 README 内旧的重复 Outcome 区块与渲染路径。
- 不引入依赖，不修改联系表单。

## RED 测试

追加：

```js
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

运行 `node --test tests/portfolio-contract.test.mjs`。预期新增测试失败：没有成果摘要、仍有旧 Outcome 区块、双栏断点为 768px、公开数据仍有未完成标记。

## GREEN HTML 与数据流

在 `.game-detail-header` 内、`.game-detail-meta` 之后加入：

```html
<div id="game-outcome-summary" class="game-outcome-summary" hidden>
    <span class="outcome-label" data-i18n="game_outcome">Outcome</span>
    <p id="game-outcome-summary-text"></p>
</div>
```

从 README 窗口中移除旧 `#section-outcome` 与 `#game-outcome` 区块，避免重复。

在 `loadGameData()` 的可选字段处理附近加入：

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

从原 team/challenge/outcome 通用数组中删除 outcome 项，只保留 team 与 challenge。

## GREEN CSS

移除原 `@media (min-width: 768px)` 双栏规则，改为：

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

.game-outcome-summary[hidden] {
    display: none;
}
```

为 `.outcome-label` 使用现有标题字体和紫色/粉色层级，不引入新颜色。767px 以下确保角色、类别、返回按钮和标签不超过容器，并允许 `overflow-wrap:anywhere`。

## GREEN 文案

Revelation：删除中英文 description 末尾的未完成段落，只保留现有已确认的第一段。

Falling Kingdom 统一为：

```js
description: {
    en: 'Physical board game designed and produced independently.',
    zh: '独立设计并制作的实体桌游。'
},
features: {
    en: ['Independent physical game design', 'Physical prototyping and playtesting'],
    zh: ['独立实体桌游设计', '实体原型制作与游戏测试']
}
```

同时同步：

- `index.html` 英文列表描述：`Physical board game designed and produced independently.`
- `pixel-script.js` 英文翻译同上。
- `pixel-script.js` 中文翻译：`独立设计并制作的实体桌游。`

## 验证

运行：

```powershell
node --test tests/portfolio-contract.test.mjs
node --check game-detail.js
node --check pixel-script.js
git diff --check -- game-detail.html game-detail.css game-detail.js index.html pixel-script.js tests/portfolio-contract.test.mjs
```

预期：全部测试、语法和空白检查通过。

## 报告

用 `apply_patch` 写入 `.superpowers/sdd/task-4-report.md`，包含实现、RED/GREEN、文件与准确位置、自检、顾虑。不要提交。最终只给 Status、无提交、测试摘要、顾虑和报告路径。
