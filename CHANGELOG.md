# Changelog

本文件记录本项目的所有重要改动。格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

改动按顺序累计到 **Unreleased** 下，每满 20 条聚合为一个正式版本。

## [Unreleased]

## [1.0.0] - 2026-04-23

本版本为个人作品集站点从旧版三列卡片布局到像素风维基式 Archive + 中文像素字体 + 可工作的 Contact 表单的整体跃迁，奠定 1.0 形态。

### Added
- 在 Skills 页面的 "Software & Technical Skills" 分类新增三张技能卡片：Python、React Native、Mobile UI/UX，并补充中英文文案（`index.html`、`pixel-script.js`）
- 引入中文像素字体 Zpix（最像素，SolidZORO 出品，MIT 协议）：通过 jsDelivr CDN（`@v3.1.11/website/zpix.woff2`）加载 `@font-face`，和英文的 Press Start 2P 统一像素风格语言，无需本地下载字体包
- Contact 表单接通 Formsubmit.co，提交直接发到 `guoxiaowei7@hotmail.com`；附带隐藏字段 `_subject` / `_honey`（蜜罐反垃圾）/ `_template=table`；移除了 `pixel-script.js` 与 `script.js` 里只弹 alert 不发送的假提交逻辑，改为浏览器原生 `required` + `type="email"` 校验 + Formsubmit 后端接收（`index.html`、`pixel-script.js`、`script.js`）

### Changed
- 导航栏与首页标题：英文 "Game Portfolio" → "Portfolio"，中文 "游戏作品 / 游戏作品集" → "作品集"（`index.html`、`game-detail.html`、`script.js`、`pixel-script.js`）
- 语言切换按钮位置与样式：从 nav 内联移至视口右上角固定悬浮（`position: fixed; top: 22px; right: 24px; z-index: 1001`），加上像素风阴影与按压反馈；移动端保持右上但让出 hamburger 位置（`right: 70px`）（`pixel-style.css`）
- 语言切换按钮尺寸一致化：英文状态下按钮文案由 "English" 改为 "EN"，并为按钮增加 `min-width: 72px` + `text-align: center` + `box-sizing: border-box`，使"中文"与"EN"两种状态视觉宽度完全相同（`pixel-style.css`、`pixel-script.js`、`script.js`）
- 语言切换按钮尺寸一致化（彻底版）：把按钮改成固定 `width: 72px; height: 36px` + `display: inline-flex` 居中，`padding: 0; line-height: 1`，外框完全不随内容变化；并为按钮单独锁定 `font-family` 与 `font-size`，覆盖 `html[lang="zh"] *` 的全局字体/字号放大规则，避免中英文切换时按钮变大变小（`pixel-style.css`）
- 顶部 header 固定高度：原来 `padding: 20px 0` 让高度跟随内容，导致中英文切换时因字体（Press Start 2P vs Orbitron）度量不同 header 整体变矮；改为 `height: 90px; box-sizing: border-box`，容器用 flex 垂直居中，header 在任何语言下都是同一高度；移动端 nav 下拉的 `top` 与 `height: calc(100vh - X)` 也同步更新为 90px（`pixel-style.css`）
- 中文字体整体换成 Zpix 像素字体：`html[lang="zh"]` 全局以及中文标题、导航、hero CTA 按钮、footer、语言切换按钮的 `font-family` 全部从 Orbitron / Exo 2（纯英文字体，中文走系统 fallback）换成 `Zpix` 优先；同时去掉 1.1em 全局放大与 600 / 900 强行加粗（像素字体不支持合成粗体），加 `-webkit-font-smoothing: none` 关掉反锯齿以获得更锐利的像素边缘（`pixel-style.css`）
- Archive 页面改造为维基式双栏布局：左侧 `.archive-sidebar` 是按分组的条目列表（`.archive-item` 为可点击按钮），右侧 `.archive-viewer` 常驻展示所选条目的详情（分类 tag、标题、描述段、外链按钮）；沿用站点 `pixel-border`、粉/紫/蓝三色、`Press Start 2P` / `Zpix` 字体保持风格一致；左侧 sticky、内部可滚动；移动端自动折叠为单列（`index.html`、`pixel-style.css`、`pixel-script.js`）
- Archive 新增 i18n 键：`archive_open`（打开文档）以及各真实条目的 `*_desc` 简介与通用 `archive_coming_desc`，中英文双语（`pixel-script.js`）
- Archive 分组顺序调整：UI/UX Design 提到前面，Game Design Documents 移到后面；默认激活条目切换为 `ecodemand`（`index.html`）
- Archive EcoDemand 条目加入 6 张实际设计截图画廊：`Ecodemand/` 目录下原文件名 `Dashboard  #N.png`（含空格与 `#`，URL 不安全）重命名为 `dashboard-1..6.png`；在 `.archive-entry` 内新增 `.archive-gallery` 响应式缩略图网格（像素风紫边 + 蓝色偏移阴影，hover 漂移换粉色阴影，`image-rendering: auto` 覆盖全局 pixelated 防止 UI 截图糊掉）；新增轻量 lightbox 覆盖层（`#archive-lightbox`）：点击缩略图打开全尺寸、点击遮罩 / 关闭按钮 / ESC 键关闭（`index.html`、`pixel-style.css`、`pixel-script.js`、`Ecodemand/*.png` 文件重命名）
- Lightbox 增加上一张 / 下一张导航：左右两侧蓝色像素风 `‹` / `›` 方向按钮（hover 漂移、粉色阴影），底部居中显示 `1 / 6` 当前进度计数器；键盘 ← / → 循环切换、ESC 关闭；点击缩略图时记录该缩略图所在的 `.archive-gallery` 组与索引，后续 prev/next 在组内循环（`index.html`、`pixel-style.css`、`pixel-script.js`）
- Archive UI/UX 分组重构为两级分类：**Web UI** 与 **Mobile UI** 改为 `.archive-subgroup` 子分类标题（蓝色 + 虚线下划线，比 group-title 小一号），不再是可点击项目；EcoDemand System 移到 Web UI 子分类下；i18n `archive_web_uiux` / `archive_mobile_uiux` 改为 "Web UI" / "Mobile UI"（中文："网页端" / "移动端"）（`index.html`、`pixel-style.css`、`pixel-script.js`）
- Archive Mobile UI 子分类下新增 **CarbCycle** 项目：标题 "CarbCycle — Carb Cycling Calculator / CarbCycle —— 碳水循环计算器"，完整描述覆盖 Today 宏量环 + 饮食记录、Meals 7 天碳水循环计划（AI 生成支持 Claude / OpenAI / DeepSeek）、Foods 食物数据库 + 模板、Profile 连续天数 + 循环配置、Settings 三语（英 / 西 / 中）+ API Key 管理；侧栏条目用 `fa-utensils` 图标；7 张实拍截图（`Carbcycle/carb1.jpg`–`carb7.jpg`）接入 `.archive-gallery`（延用同一套缩略图 + lightbox + 上下张 + 计数器 + 键盘导航）；新增 i18n 键 `archive_carbcycle` / `archive_carbcycle_title` / `archive_carbcycle_desc`（`index.html`、`pixel-script.js`）

### Fixed
- 修复 footer 导航按钮以及 hero 区 "View My Work" / "Contact Me" 按钮点击无响应的问题：页面导航事件原本只绑定到 `.nav-links a`，footer 的 `.footer-links a` 与 hero 的 `.cta-buttons a` 未被绑定；改为按 `a[data-page]` 选择，所有带 `data-page` 属性的链接都会正确切换页面（`pixel-script.js`）

### Removed
- Contact 页面右侧的社交图标只保留 LinkedIn，指向 `https://www.linkedin.com/in/xiaowei-guo`（`target="_blank"` + `rel="noopener noreferrer"`）；移除原占位的 Twitter / GitHub / Instagram 空链接（`index.html`）
- Archive 旧的三列网格卡片布局（`.archive-content` / `.archive-category` / `.archive-list` / `.archive-link`）CSS 全部删除，HTML 也随之替换（`index.html`、`pixel-style.css`）
- Archive 全面清理 Coming Soon 占位：GDD 组内移除 `space-explorers`、UI/UX 组内移除 `uiux-coming`；由于 Art & Concept Work 分类下所有三条都是 Coming Soon，整个分组直接删除；未引用的 i18n 键（`archive_coming_soon` / `archive_coming_desc` / `archive_art` / `archive_space_explorers` / `archive_character_concept` / `archive_environment_sketches` / `archive_uiux_portfolio`）保留在字典中，便于后续重新启用（`index.html`）
- Archive UI/UX 分组移除 Cozy Game UI Design 条目（侧栏按钮 + 右侧详情面板）；i18n 键 `archive_cozy_ui` / `archive_cozy_ui_desc` 保留在字典中备用（`index.html`）
- Archive UI/UX 重构顺带移除原来作为独立条目存在的 `web-uiux` / `mobile-uiux` 详情面板与 `*_desc` 键（`index.html`、`pixel-script.js`）
