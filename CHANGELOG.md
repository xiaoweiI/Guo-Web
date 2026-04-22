# Changelog

本文件记录本项目的所有重要改动。格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

改动按顺序累计到 **Unreleased** 下，每满 20 条聚合为一个正式版本。

## [Unreleased]

### Added
- 在 Skills 页面的 "Software & Technical Skills" 分类新增三张技能卡片：Python、React Native、Mobile UI/UX，并补充中英文文案（`index.html`、`pixel-script.js`）
- 引入中文像素字体 Zpix（最像素，SolidZORO 出品，MIT 协议）：通过 jsDelivr CDN（`@v3.1.11/website/zpix.woff2`）加载 `@font-face`，和英文的 Press Start 2P 统一像素风格语言，无需本地下载字体包

### Changed
- 导航栏与首页标题：英文 "Game Portfolio" → "Portfolio"，中文 "游戏作品 / 游戏作品集" → "作品集"（`index.html`、`game-detail.html`、`script.js`、`pixel-script.js`）
- 语言切换按钮位置与样式：从 nav 内联移至视口右上角固定悬浮（`position: fixed; top: 22px; right: 24px; z-index: 1001`），加上像素风阴影与按压反馈；移动端保持右上但让出 hamburger 位置（`right: 70px`）（`pixel-style.css`）
- 语言切换按钮尺寸一致化：英文状态下按钮文案由 "English" 改为 "EN"，并为按钮增加 `min-width: 72px` + `text-align: center` + `box-sizing: border-box`，使"中文"与"EN"两种状态视觉宽度完全相同（`pixel-style.css`、`pixel-script.js`、`script.js`）
- 语言切换按钮尺寸一致化（彻底版）：把按钮改成固定 `width: 72px; height: 36px` + `display: inline-flex` 居中，`padding: 0; line-height: 1`，外框完全不随内容变化；并为按钮单独锁定 `font-family` 与 `font-size`，覆盖 `html[lang="zh"] *` 的全局字体/字号放大规则，避免中英文切换时按钮变大变小（`pixel-style.css`）
- 顶部 header 固定高度：原来 `padding: 20px 0` 让高度跟随内容，导致中英文切换时因字体（Press Start 2P vs Orbitron）度量不同 header 整体变矮；改为 `height: 90px; box-sizing: border-box`，容器用 flex 垂直居中，header 在任何语言下都是同一高度；移动端 nav 下拉的 `top` 与 `height: calc(100vh - X)` 也同步更新为 90px（`pixel-style.css`）
- 中文字体整体换成 Zpix 像素字体：`html[lang="zh"]` 全局以及中文标题、导航、hero CTA 按钮、footer、语言切换按钮的 `font-family` 全部从 Orbitron / Exo 2（纯英文字体，中文走系统 fallback）换成 `Zpix` 优先；同时去掉 1.1em 全局放大与 600 / 900 强行加粗（像素字体不支持合成粗体），加 `-webkit-font-smoothing: none` 关掉反锯齿以获得更锐利的像素边缘（`pixel-style.css`）

### Fixed
- 修复 footer 导航按钮以及 hero 区 "View My Work" / "Contact Me" 按钮点击无响应的问题：页面导航事件原本只绑定到 `.nav-links a`，footer 的 `.footer-links a` 与 hero 的 `.cta-buttons a` 未被绑定；改为按 `a[data-page]` 选择，所有带 `data-page` 属性的链接都会正确切换页面（`pixel-script.js`）
