# Task 3 实施报告

## 实现

- 扩展既有 `setMobileMenu(open)` 使用链路：Escape 关闭移动菜单，媒体查询恢复到 `min-width: 769px` 时重置菜单；未创建第二套菜单状态逻辑。
- 为精选轮播上一项、下一项和 4 个指示器补充按钮类型、可访问名称与初始 `aria-current`；装饰图标从辅助技术树隐藏。
- `updateCarousel()` 同步 slide 的 `aria-hidden`/`tabindex` 与 indicator 的 `aria-current`，保持 4 张内容、25% 位移、外部链接和视觉不变。
- 自动播放保持 5000ms；先清理旧 interval，尊重 `prefers-reduced-motion`，并在 hover 或键盘焦点任一暂停条件仍成立时不恢复。

## TDD：RED / GREEN

1. RED：追加简报指定契约后运行 `node --test tests/portfolio-contract.test.mjs`；8/9 通过，新增测试按预期首先失败于 `prevBtn` 缺少 `aria-label`。
2. GREEN：完成简报最小实现后运行同一命令；9/9 通过。
3. 审阅 RED：为隐藏 slide 退出 Tab 顺序及 hover/focus 组合暂停分别先加契约；运行同一命令，9/11 通过，2 项按预期失败。
4. 审阅 GREEN：同步 `tabindex` 并组合暂停状态后运行同一命令；11/11 通过。

## 文件与位置

- `tests/portfolio-contract.test.mjs:68-95`：Task 3 主契约及两项审阅回归契约；保留原有 8 项测试。
- `index.html:234-250`：轮播控制和指示器可访问名称、按钮类型及初始状态。
- `pixel-script.js:582-610`：保留并复用 `setMobileMenu(open)`，增加 Escape 与桌面宽度重置。
- `pixel-script.js:934-1040`：轮播状态同步、自动播放、减少动态效果及组合暂停逻辑。

## 最终验证

- `node --test tests/portfolio-contract.test.mjs`：11 tests，11 pass，0 fail。
- `node --check pixel-script.js`：退出码 0，无输出。
- `git diff --check -- index.html pixel-script.js tests/portfolio-contract.test.mjs`：退出码 0；仅显示工作区既有 LF/CRLF 转换提示，无 whitespace error。

## 自检

- 独立只读审阅首轮发现 2 个 Important：隐藏 slide 仍可聚焦、hover/focus 暂停相互覆盖；均以新增 RED 契约驱动修复。
- 复核结果为 0 Critical、0 Important、0 Minor；单一菜单状态函数、4 张内容、5 秒间隔及 25% 位移均保留。
- 未提交、未暂存、未还原、未引入依赖、未修改 CSS，也未格式化无关内容。

## 顾虑

- `git diff --check` 会提示 `index.html` 与 `pixel-script.js` 将来由 Git 处理时可能从 LF 转为 CRLF；当前检查退出码为 0，未主动改写行尾以避免扩大差异。
- 项目知识图查询因当前工具用量限制不可用，本任务按简报限定的三个文件做了直接、聚焦检查。

## 根级复核修复：inactive slide 交互子树

- 根因：父级 slide 的 `tabindex="-1"` 只移除父容器自身，无法移除内部链接的 Tab 焦点；active slide 的 `tabindex="0"` 还额外创建了一个没有 Enter/Space 激活语义的焦点目标。
- RED：将原回归契约改为要求 `slide.toggleAttribute('inert', !active)` 且禁止 `slide.setAttribute('tabindex', ...)`，运行 `node --test tests/portfolio-contract.test.mjs`；11 项中 10 项通过、1 项按预期失败于缺少 `inert` 同步。
- GREEN：在 `updateCarousel()` 中移除 slide 父容器 `tabindex` 同步，改为同步 `inert`；保留 `aria-hidden`，使 inactive slide 整个交互子树退出焦点顺序，同时 active slide 内部链接维持正常键盘访问。再次运行同一命令，11/11 通过。
- 范围：本轮实现只修改 `pixel-script.js` 与 `tests/portfolio-contract.test.mjs`；本段按要求追加到报告。未增加 slide 自身键盘激活逻辑。
