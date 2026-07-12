# Task 2 实施报告

## Status

已按 RED→GREEN 完成首页、精选区和作品档案的响应式 CSS 契约与实现。未提交、未暂存、未还原或格式化任何文件。

## 实现

- 在 `pixel-style.css:35` 增加 `--f-reading` 阅读字体变量。
- 在 `pixel-style.css:103-123` 增加关键网格/卡片的 `min-width: 0` 收缩保护、统一 `:focus-visible` 像素焦点样式，以及正文/表单阅读字体职责。
- 在 `pixel-style.css:1465` 的现有 1024px 媒体查询中合并容器宽度与内边距、旗舰网格单列和精选内容内边距。
- 在 `pixel-style.css:1489` 的现有 768px 媒体查询中合并移动页头、44px 菜单按钮、Hero 文本换行、纵向 CTA、单列精选窗口、精选内容和卡片内边距。
- 在 `pixel-style.css:1624` 增加 480px 媒体查询，覆盖紧凑页头、Hero 字号、16:9 迷你窗口、精选内容与单列筛选按钮。
- 在 `tests/portfolio-contract.test.mjs:46-56` 增加阅读字体、焦点状态、三档断点、CTA 全宽及 Hero 单列契约测试；保留 Task 1 的 5 个测试。

## RED 证据

命令：`node --test tests/portfolio-contract.test.mjs`

关键输出：退出码 1；`tests 6`、`pass 5`、`fail 1`。新增测试“样式定义阅读字体、焦点状态和三个响应式断点”按预期失败，首个失败断言为缺少 `/--f-reading:/`。

## GREEN 证据

命令：`node --test tests/portfolio-contract.test.mjs`

关键输出：退出码 0；`tests 6`、`pass 6`、`fail 0`。

命令：`git diff --check -- pixel-style.css tests/portfolio-contract.test.mjs`

关键输出：退出码 0，无空白错误；Git 仅提示 `pixel-style.css` 下次触碰时 LF 将转换为 CRLF。

## 自检

- 仅改动任务允许的网站文件：`pixel-style.css` 与 `tests/portfolio-contract.test.mjs`；本报告为简报要求的交付记录。
- 没有修改 HTML、JavaScript、依赖、颜色、CRT、边框、硬阴影、窗口结构或图片。
- 所有新生产行为均由先失败的契约测试覆盖，GREEN 后保留原有 5 个测试全部通过。
- 对现有媒体查询采用就地合并，没有新增重复的 1024px 或 768px 查询。

## 顾虑

- 无阻塞顾虑。验证为静态契约测试与空白检查，未在真实浏览器中逐视口截图比对。
- `git diff --check` 的 LF→CRLF 信息是行尾提示，不是空白错误；未为消除提示而格式化文件。

## 审查修复：CSS 级联覆盖

### 实现

- 在 `tests/portfolio-contract.test.mjs:57-66` 增加两个独立契约：较后的表单控件规则必须最终使用 `var(--f-reading)`；原 `:focus` 规则之后必须存在表单控件与轮播指示器的高特异性 `:focus-visible` 覆盖。
- 在 `pixel-style.css:1338-1347` 将实际 `.form-group input, .form-group textarea` 规则的字体改为 `var(--f-reading)`，消除其对早期阅读字体规则的覆盖。
- 在 `pixel-style.css:722-725` 为 `.indicator:focus-visible` 增加 `4px solid var(--purple-deep)` 轮廓和 `4px` offset。
- 在 `pixel-style.css:1360-1364`、原表单 `:focus` 规则之后加入更具体的表单 `:focus-visible` 覆盖；保留原鼠标 focus 的粉色边框行为。

### RED 证据

命令：`node --test tests/portfolio-contract.test.mjs`

关键输出：退出码 1；`tests 8`、`pass 6`、`fail 2`。失败测试为“表单控件最终使用阅读字体”和“表单控件和轮播指示器保留统一键盘焦点”，分别证明 `var(--f-body)` 级联覆盖与特异性覆盖问题可稳定复现。

### GREEN 证据

命令：`node --test tests/portfolio-contract.test.mjs`

关键输出：退出码 0；`tests 8`、`pass 8`、`fail 0`。

### 审查修复自检

- 没有删除 `.form-group input:focus, .form-group textarea:focus` 的 `border-color: var(--pink)`，鼠标 focus 行为保持不变。
- 新增规则只覆盖被后续声明破坏的字体与键盘焦点属性，没有扩展选择器范围或改变其他视觉状态。
- 最终运行 `git diff --check -- pixel-style.css tests/portfolio-contract.test.mjs`，退出码 0、无空白错误；仅保留既有 LF→CRLF 行尾提示。
