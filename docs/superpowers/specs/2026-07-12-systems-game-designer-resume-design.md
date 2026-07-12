# Systems / Gameplay Designer Resume Redesign

## Objective

Create a new one-page English resume for Xiaowei Guo focused on Systems / Gameplay Designer roles. The source PDF at `C:\Users\guoxi\Desktop\重要文件\Xiaowei Guo- Resume .pdf` remains unchanged. The revised deliverable will be written to `output/pdf/Xiaowei_Guo_Resume_Systems_Game_Designer.pdf`.

## Positioning

The resume presents Xiaowei first as a game designer, with systems design as the main professional axis. AI behavior, interactive narrative, Unity/C#, React Native, and visual tools support that identity rather than compete with it.

Primary headline:

> Game Designer | Gameplay Systems, AI Behavior & Prototyping

The opening profile will state the same hierarchy in two concise lines without inventing years of experience, shipped-product claims, performance metrics, or proficiency levels.

## Content Architecture

Use a single-column, ATS-friendly reading order:

1. Name, headline, and compact contact line
2. Two-line professional profile
3. Experience
4. Selected Projects
5. Education
6. Skills and Languages

Experience remains reverse chronological. Petch, DraMai.AI, Game of Thrones: Winter Is Coming, and Revelation receive the strongest emphasis. The older game-testing role may be reduced to one line or omitted if required to preserve readable type. The two Global Game Jam projects remain under Selected Projects. The long Other Projects inventory is removed and delegated to the portfolio.

## Writing Rules

- Each experience uses two or three bullets built around design problem, decision, implementation, collaboration, and verified outcome.
- Preserve only facts already present in the source resume; do not add team sizes, performance improvements, retention figures, shipment status, or unverified role labels.
- Keep the existing verified quantities: 16 personality archetypes, 16-tile mechanic, approximately 1,000 playtesters, approximately 10 agents, and two live scenes.
- Replace vague link text such as `Ref Link` with meaningful project or portfolio labels.
- Standardize degree names, locations, punctuation, company/project naming, and dates such as `Jul 2025 - Present`.
- Confirm suspected tool spellings from the source conservatively. Ambiguous tools such as `Canvas` or `Keling` will be omitted rather than silently corrected.
- Use ASCII hyphens in generated PDF content.

## Visual Design

- US Letter, one page, white background, black/dark-gray text, and one restrained blue accent for links and section rules.
- Single-column layout with no tables, text boxes, icons, or decorative graphics that could disrupt ATS extraction.
- Name at approximately 20-22 pt; headline 10.5-11 pt; section headings 10.5-11 pt; body 9.3-10 pt.
- Consistent margins of approximately 0.5-0.6 inches, restrained section spacing, and visible separation between roles.
- Hyperlinks remain clickable, but visible text stays short.

## Source and Link Handling

Extract text and hyperlink annotations from the source PDF. Preserve the email, portfolio, LinkedIn, and relevant project links when their destinations can be mapped confidently. Do not guess missing URLs.

## Validation

- Generate the PDF with ReportLab using the bundled runtime.
- Render the final PDF to PNG and visually inspect the complete page.
- Extract the final PDF text and verify the intended single-column reading order.
- Confirm one page, no clipping, no overlap, no broken glyphs, and no placeholder text.
- Confirm the original PDF modification timestamp and file content are untouched by the workflow.

## Deliverable

`output/pdf/Xiaowei_Guo_Resume_Systems_Game_Designer.pdf`

No replacement, overwrite, move, or edit will be performed on the original resume.
