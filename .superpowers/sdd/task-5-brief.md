# Task 5: 真实浏览器桌面端、移动端与关键交互 QA

## 目标流程

`首页 -> 移动菜单 -> Portfolio -> 分类筛选 -> 精选轮播 -> Dramai.AI 详情 -> 语言切换 -> Contact`

## 浏览器与技能

- 使用 Build Web Apps 的 frontend-testing-debugging 流程。
- 使用 Browser 插件和应用内浏览器；在任何浏览器动作前完整阅读 Browser skill 与选中浏览器的完整 documentation。
- 不使用外部 Playwright、Chrome 或 Computer Use 替代应用内浏览器。
- 启动本地静态站点时保持 `http://127.0.0.1:4173/`。

## 文件范围

发现问题时只允许最小修改：

- `index.html`
- `pixel-style.css`
- `pixel-script.js`
- `game-detail.html`
- `game-detail.css`
- `game-detail.js`
- `tests/portfolio-contract.test.mjs`

截图保存到：

`C:\Users\guoxi\.codex\visualizations\2026\07\11\019f4e80-3c60-77f2-8619-908030e406fb\guo-web-qa\`

至少生成：

- `desktop-home-1280.png`
- `mobile-home-390.png`
- `mobile-menu-390.png`
- `portfolio-768.png`
- `detail-1024.png`
- `contact-390.png`

## 强约束

- 用户授权直接修改当前 `main` 工作区，但禁止提交、暂存、还原或格式化无关内容。
- 保留紫粉配色、CRT、像素标题、4px 边框、硬阴影、窗口结构、双语、所有资产与链接。
- 不提交联系表单，不向外部服务传输个人信息。
- 任何新发现的可修复缺陷，先获得失败证据：优先增加契约测试并运行 RED；纯视觉问题记录失败的浏览器测量/截图，再做最小 CSS 修复并重复同一测量。
- 不安装依赖，不创建代码提交。

## 静态前置检查

运行：

```powershell
node --test tests/portfolio-contract.test.mjs
node --check pixel-script.js
node --check game-detail.js
```

预期：13/13 测试通过，两个脚本语法通过。

## 必做浏览器检查

1. Page identity：URL 与标题正确。
2. DOM 非空：包含 Violet Guo 首页或对应项目内容。
3. 无框架错误覆盖层或空白状态。
4. 控制台 error/warn 无相关应用错误；若有，逐条解释或修复。
5. 每个关键状态保存并检查截图。
6. 至少一个交互路径有状态变化证据。

## 四档响应式测量

依次设置 390×844、768×900、1024×800、1280×720，并在页面稳定后读取：

```js
({
  viewportWidth: innerWidth,
  documentWidth: document.documentElement.scrollWidth,
  overflow: document.documentElement.scrollWidth > innerWidth,
  clipped: [...document.querySelectorAll('h1,h2,p,a,button,img')]
    .filter((element) => {
      const rect = element.getBoundingClientRect();
      return rect.left < -1 || rect.right > innerWidth + 1;
    })
    .slice(0, 20)
    .map((element) => ({
      tag: element.tagName,
      text: element.textContent?.trim().slice(0, 60)
    }))
})
```

预期：`overflow=false`；`clipped` 不包含主要标题、CTA、项目卡片、导航或详情正文。非当前轮播 slide 因变换暂时在视口外，不计为布局缺陷。

## 必做交互

- 390px：点击菜单后 `aria-expanded=true` 且导航可见；按 Escape 后恢复为 false。
- 点击 Portfolio 后菜单关闭、作品页激活。
- 点击 Personal Projects 后商业项目隐藏、个人项目显示。
- 点击轮播 Next 后 `aria-current=true` 移至下一指示点；焦点进入轮播后等待超过 5 秒不自动前进。
- 打开 Dramai.AI 后存在标题、成果摘要、主图、Challenge、What I Designed 和 Links。
- 详情页切换中文后 `<html lang="zh">` 且导航、Outcome 标签和项目内容更新。
- 打开 Contact 后四个字段具有可见标签和 `required`，但不提交表单。

## 视觉对照

检查旧审视截图：

`C:\Users\guoxi\Desktop\现代项目1 - 副本\Guo-Web\.codex-audit\`

与新截图对照至少六项：

1. 配色、CRT 和背景图案未改变。
2. Logo、Hero、CTA 与首个项目窗口完整显示。
3. 像素字体保留，长正文更易读。
4. 窗口边框、标题栏和粉色硬阴影一致。
5. 1024px 详情页单栏，1280px 受控双栏。
6. 移动端无横向裁切、重叠和异常空白。

## 完成验证

浏览器修复完成后重新运行：

```powershell
node --test tests/portfolio-contract.test.mjs
node --check pixel-script.js
node --check game-detail.js
git diff --check -- index.html pixel-style.css pixel-script.js game-detail.html game-detail.css game-detail.js tests/portfolio-contract.test.mjs
```

## 报告

用 `apply_patch` 写入 `.superpowers/sdd/task-5-report.md`，包含：

- 环境、URL 与四档视口。
- 页面身份、非空、覆盖层、控制台、截图和交互检查的通过/失败表。
- 精确交互路径与状态变化证据。
- 每个发现、复现、RED/GREEN 或浏览器前后测量、最小修复。
- 六项视觉对照账本。
- 截图绝对路径。
- 最终测试与语法输出。
- 文件变更、自检、风险。

不要提交。最终回复只给 Status、无提交、测试/浏览器摘要、顾虑、报告与截图目录。
