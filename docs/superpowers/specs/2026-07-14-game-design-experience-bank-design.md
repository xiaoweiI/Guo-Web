# Game Design Experience Bank Design

## Objective

Create an editable Excel master library that helps Xiaowei Guo reuse verified project experience across resumes, portfolio case studies, applications, mentoring sessions, and interviews. The workbook will use Chinese for analysis and English for resume-ready bullets.

Final artifact:

`output/spreadsheets/Xiaowei_Guo_Game_Design_Experience_Bank.xlsx`

## Source Material

The workbook will consolidate facts from:

- `C:\Users\guoxi\Desktop\重要文件\Xiaowei Guo- Resume .pdf`
- `output/pdf/Xiaowei_Guo_Resume_Systems_Game_Designer.pdf`
- Current portfolio content in `index.html`, `pixel-script.js`, `game-detail.html`, and `game-detail.js`
- The mentor feedback screenshots supplied in the conversation

Source descriptions are evidence, not automatic truth. Marketing-style claims, ambiguous outcomes, and unsupported numbers will be marked for confirmation rather than presented as verified facts.

## Coverage

Include commercial work, Game Jam projects, personal digital games, board games, app prototypes, and relevant testing experience found in the sources. Expected entries include:

- Petch
- DraMai.AI
- Game of Thrones: Winter Is Coming
- Revelation
- New Smiling Proud Wanderer
- Quoted Out!
- AI Adoption
- Party! Paidui! Fiesta!
- Back Home
- Dorm Unpacking
- Zombie Juice
- Beneath the Ruins
- Wallet War
- Falling Kingdom
- Princess Lianan
- Above the Fountain
- The Silent Majority
- Menstrual Cycle Tracker
- ADHD Companion
- Carb Cycling Tracker

If a source contains another clearly distinct project, it may be added. Duplicate names or inconsistent spellings must be normalized and recorded in the notes column.

## Workbook Architecture

### 1. `项目总库`

One row per experience. Columns:

- Project ID
- 项目名称
- 英文名称
- 类型
- 时间
- 公司／赛事／课程
- 团队与协作对象
- 我的角色
- 负责内容
- 玩家／产品问题
- 设计目标
- 约束条件
- 核心设计决策
- 决策原因
- 难点
- 失败方案／迭代
- 测试方法
- 数据／反馈
- 最终结果
- 个人贡献
- 核心能力标签
- 可投岗位
- 作品证据
- 来源
- 可信度
- 待补充信息
- 优先级

This sheet is filterable, uses frozen headers, wrapped text, controlled widths, and data-validation lists for type, confidence, and priority.

### 2. `重点项目深挖`

Focus on Petch, DraMai.AI, Game of Thrones: Winter Is Coming, Revelation, Quoted Out!, and AI Adoption. Each project receives a structured block covering:

- 背景与目标
- 设计问题
- 约束
- 我的职责边界
- 关键决策及原因
- 具体机制／系统
- 原型和协作方式
- 测试与迭代
- 数据和结果
- 复盘
- 可用于面试的 STAR / design story
- 当前证据
- 仍需补充的问题

### 3. `岗位映射`

Map every experience against these target families:

- Systems / Gameplay Designer
- General Game Designer
- AI Game Designer
- Narrative Designer
- Technical / Prototyping adjacent roles

Columns include relevance level, supporting evidence, transferable skill, recommended emphasis, and risks or missing proof.

### 4. `英文Bullet库`

Store resume-ready English bullets for the strongest experiences. Every bullet includes:

- Project ID
- Project
- Target role version
- English bullet
- Supporting source
- Verification status
- Missing metric or evidence

Bullets must not introduce invented team sizes, performance gains, shipment claims, player counts, or proficiency levels. Existing verified quantities may be retained with cautious language.

### 5. `待补充证据`

Convert missing information into concrete questions. Columns:

- Project ID
- Project
- Missing category
- Exact question to answer
- Why it matters
- Suggested evidence
- Priority
- Status

Examples include team size, player-facing problem, rejected alternatives, iteration history, success criteria, playtest findings, measurable result, and proof artifact.

### 6. `使用说明`

Explain how to filter the bank for a job description, select project stories, turn Chinese analysis into English bullets, and update verification status without overwriting source evidence.

## Evidence and Confidence Rules

Use three confidence levels:

- `已验证`: directly supported by the resume or specific portfolio facts.
- `部分验证`: supported in broad form but missing precise scope, metric, or attribution.
- `待确认`: inferred, marketing-oriented, contradictory, or absent from the available sources.

Unknown fields remain visibly marked `待补充`; they are never silently filled with plausible content.

## Visual and Usability Design

- Professional white workbook with restrained navy/blue headers.
- Freeze panes and filters on the master sheets.
- Wrapped text with top alignment for long analysis fields.
- Alternating row fills or structured table styles for scanning.
- Consistent colors for confidence and priority.
- No merged cells in filterable data sheets.
- Merged cells are allowed only in deep-dive section titles when they do not interfere with editing.
- Hyperlinks are clickable and use concise labels.
- Workbook should open without formula errors, clipped headers, or unreadable default widths.

## Validation

- Validate the workbook with the bundled spreadsheet runtime.
- Confirm all expected sheets exist and contain headers.
- Confirm at least 20 experience entries or document the source-based reason for fewer.
- Confirm the six priority projects have deep-dive sections.
- Confirm all English bullets have a verification field and source.
- Confirm every `待确认` claim is paired with a question in `待补充证据`.
- Render representative ranges from each sheet and visually inspect formatting, wrapping, filters, and legibility.
- Ensure no source file is overwritten or modified.

## Deliverable Boundary

The workbook is a structured first version based on existing evidence, not a substitute for Xiaowei's personal recollection. It must make missing depth visible so that later mentoring sessions can turn unverified fields into stronger, evidence-backed stories.
