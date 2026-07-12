# Task 1 实施报告

## 状态

DONE_WITH_CONCERNS。未创建 Git 提交，未还原或覆盖工作区中的既有用户改动。

## 实现内容

- 新增 Node 内置测试契约，覆盖首页语义外壳、详情页共享导航语义，以及无效统计配置不得启用。
- 首页与详情页均将文本 Logo 改为可访问的首页链接，为主导航补充标签和稳定 ID，并把移动菜单从 `div` 改为带 ARIA 状态的 `button`；三个视觉条保留原 `.bar` 类并标记为装饰性内容。
- 两页语言切换器补充 `type="button"` 与可访问名称，原 ID、类名、中文文本和双语行为挂钩均保留。
- 两页均在 Header 后打开唯一 `<main id="main-content">`，在 Footer 前关闭。
- 删除两页中包含占位账户 `TODO-your-code` 的 GoatCounter 注释与脚本。
- 两页原有六个主导航链接、链接内容、`data-*` 属性和视觉类名均保留。

## TDD 证据

### RED

命令：

```powershell
node --test tests/portfolio-contract.test.mjs
```

关键输出：

```text
✖ 首页具有唯一主内容区域与语义化移动菜单
✖ 详情页共享相同的语义化导航契约
✖ 页面不启用无有效账户标识的统计脚本
ℹ tests 3
ℹ pass 0
ℹ fail 3
```

失败原因符合预期：首个断言报告缺少 `<main id="main-content">`；现有 Logo 为标题元素、移动菜单为 `div` 且导航列表无目标 ID；两个页面仍包含 `TODO-your-code` 与 `gc.zgo.at/count.js`。失败是契约尚未实现，而非测试语法或运行环境错误。

### GREEN

首次 GREEN 命令：

```powershell
node --test tests/portfolio-contract.test.mjs
```

关键输出：

```text
✔ 首页具有唯一主内容区域与语义化移动菜单
✔ 详情页共享相同的语义化导航契约
✔ 页面不启用无有效账户标识的统计脚本
ℹ tests 3
ℹ pass 3
ℹ fail 0
```

完成前的新鲜复验使用同一测试命令，结果仍为 `pass 3 / fail 0`，退出码 0。

### 空白检查

命令：

```powershell
git diff --check -- index.html game-detail.html tests/portfolio-contract.test.mjs
```

结果：退出码 0，无空白错误；Git 额外提示 `index.html` 和 `game-detail.html` 的工作区 LF 将来可能由 Git 转为 CRLF，该提示不属于 `diff --check` 错误。

## 文件列表

- `tests/portfolio-contract.test.mjs`：新增，完整契约测试位于第 1–30 行；三个测试分别从第 8、16、23 行开始。
- `index.html`：修改。
- `game-detail.html`：修改。
- `.superpowers/sdd/task-1-report.md`：本实施报告；不属于网站代码。

## 准确修改位置

### `index.html`

- 原第 23–24 行：删除无效 GoatCounter 注释与脚本；当前 Head 中已不存在占位账户或统计脚本 URL。
- 当前第 28–44 行：Logo 链接、主导航标签/ID、语言按钮属性、语义化 hamburger 按钮与装饰条。
- 当前第 48 行：打开 `<main id="main-content">`。
- 当前第 1076 行：在 Footer 前关闭 `</main>`。

### `game-detail.html`

- 原第 17–18 行：删除无效 GoatCounter 注释与脚本；当前 Head 中已不存在占位账户或统计脚本 URL。
- 当前第 22–38 行：详情页 Logo 链接（`index.html#home`）、主导航标签/ID、语言按钮属性、语义化 hamburger 按钮与装饰条。
- 当前第 42 行：打开 `<main id="main-content">`。
- 当前第 138 行：在 Footer 前关闭 `</main>`。

### `tests/portfolio-contract.test.mjs`

- 第 1–30 行：按任务简报逐字建立 Node 内置测试契约（测试标题为简报指定中文文本）。

## 自检

- TDD 顺序：已先新增测试并观察 3 个预期失败，再修改生产 HTML，再观察 3 个测试通过。
- 最终测试：3/3 通过，0 失败。
- 结构计数：`index.html main=1/1 primaryNavLinks=6`；`game-detail.html main=1/1 primaryNavLinks=6`。
- 统计配置：契约确认两页均无 `TODO-your-code` 和 `gc.zgo.at/count.js`。
- 范围：网站实现只涉及简报列出的三个文件；另按要求创建本报告。未修改脚本、样式或联系表单。
- 版本控制：未提交、未暂存、未还原任何文件。

## 顾虑

- 工作区在任务开始前已包含大量已修改、已删除和未跟踪文件，包括两个目标 HTML 的既有用户改动；本任务仅以窄范围补丁叠加指定标记，没有处理或审查那些无关改动。
- `git diff --check` 报告两份 HTML 的 LF/CRLF 转换警告，但退出码为 0 且没有空白错误；未为消除提示而重写文件，以避免扩大改动范围。

---

## 审查修复追加报告

### 修复内容

- 将首页和详情页的“唯一主内容区域”契约从仅匹配存在改为统计 `<main id="main-content">`，并要求每页计数严格等于 1；原 Logo、hamburger、导航列表和统计配置断言全部保留。
- 为 `.hamburger` 增加 `background: transparent` 与 `border: 0`，消除语义化 `button` 的浏览器默认背景和边框；为 `.hamburger .bar` 增加 `display: block`，使空内联 `span` 按已有宽高正常绘制。
- 新增最小 `setMobileMenu(open)` 函数，统一同步 hamburger 与导航列表的 `active` class、`aria-expanded` 和 `aria-label`；点击 hamburger 调用该函数切换状态，点击导航链接调用该函数关闭菜单。
- 未实现 Escape 或 resize 行为，按审查要求留待 Task 3；未触碰其他脚本功能。

### 第二轮 RED 证据

先仅修改契约测试，运行：

```powershell
node --test tests/portfolio-contract.test.mjs
```

关键输出：

```text
✔ 首页具有唯一主内容区域与语义化移动菜单
✔ 详情页共享相同的语义化导航契约
✖ 移动菜单按钮重置默认外观并绘制内联条
✖ 移动菜单状态同步到可访问属性
✔ 页面不启用无有效账户标识的统计脚本
ℹ tests 5
ℹ pass 3
ℹ fail 2
```

失败原因符合预期：`.hamburger` 规则没有透明背景或零边框，`.hamburger .bar` 没有块级显示；`pixel-script.js` 没有 `setMobileMenu(open)`，也没有 `aria-expanded` / `aria-label` 状态同步。两个新的 `<main>` 严格计数断言已通过。

### 第二轮 GREEN 与最终验证

运行：

```powershell
node --test tests/portfolio-contract.test.mjs
node --check pixel-script.js
git diff --check -- index.html game-detail.html pixel-style.css pixel-script.js tests/portfolio-contract.test.mjs
```

关键输出与结果：

```text
✔ 首页具有唯一主内容区域与语义化移动菜单
✔ 详情页共享相同的语义化导航契约
✔ 移动菜单按钮重置默认外观并绘制内联条
✔ 移动菜单状态同步到可访问属性
✔ 页面不启用无有效账户标识的统计脚本
ℹ tests 5
ℹ pass 5
ℹ fail 0
```

- `node --check pixel-script.js`：退出码 0，无语法错误。
- `git diff --check ...`：退出码 0，无空白错误。
- 完成前按同一组三条命令再次新鲜复验，结果保持测试 5/5、语法通过、空白检查通过。

### 本轮文件与准确位置

- `tests/portfolio-contract.test.mjs`
  - 第 10、18 行：首页与详情页分别严格统计唯一 `<main id="main-content">`。
  - 第 23–28 行：新增 hamburger CSS 契约。
  - 第 30–35 行：新增菜单函数及 ARIA 同步契约。
- `pixel-style.css`
  - 第 227–233 行：hamburger 默认按钮外观重置。
  - 第 235–242 行：`.bar` 块级绘制及原有尺寸/视觉规则。
- `pixel-script.js`
  - 第 582–588 行：新增 `setMobileMenu(open)` 集中状态函数。
  - 第 590–594 行：hamburger 点击使用集中函数切换。
  - 第 597–602 行：导航链接点击使用集中函数关闭。
- `.superpowers/sdd/task-1-report.md`：追加本审查修复证据。
- `index.html`、`game-detail.html`：本轮未再次修改；仍由扩充后的契约覆盖。

### 本轮自检与顾虑

- TDD 顺序符合要求：契约先改、观察 2 个预期失败、再修改 CSS/JS、观察 5 个测试全部通过。
- 本轮仅对菜单视觉和状态做最小修复，无提交、无暂存、无还原。
- 工作区仍包含任务开始前的其他用户改动；均未处理。
- 最终空白检查仍提示目标 HTML/CSS/JS 将来可能由 Git 从 LF 转为 CRLF，但退出码为 0、无空白错误；为避免扩大差异未做换行符重写。
