# Systems / Gameplay Designer Resume Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a new one-page, ATS-friendly Systems / Gameplay Designer resume PDF while leaving the source PDF unchanged.

**Architecture:** A focused Python builder owns verified resume content and ReportLab layout; a separate pytest contract validates page count, reading order, required facts, forbidden placeholders, hyperlinks, and source-file immutability. The final PDF is rendered with pypdfium2 for visual verification and extracted with pypdf for ATS-order verification.

**Tech Stack:** Python 3, ReportLab, pypdf, pypdfium2, pytest.

## Global Constraints

- Source PDF `C:\Users\guoxi\Desktop\重要文件\Xiaowei Guo- Resume .pdf` must never be modified, replaced, moved, or overwritten.
- Final artifact: `output/pdf/Xiaowei_Guo_Resume_Systems_Game_Designer.pdf`.
- US Letter, exactly one page, single-column ATS-friendly layout.
- Use only facts already present in the source resume.
- Preserve the verified quantities: 16 personality archetypes, 16-tile mechanic, approximately 1,000 playtesters, approximately 10 agents, and two live scenes.
- Use ASCII hyphens in generated content.
- Do not guess missing URLs; use only the source annotations listed in Task 1.
- Do not stage or commit the generated PDF or implementation files unless the user separately requests it; the source repo contains unrelated dirty changes.

---

## File Map

- Create `tools/resume/build_systems_resume.py`: verified content model, ReportLab styles, hyperlinks, one-page PDF generation, and inspection helpers.
- Create `tests/resume/test_systems_resume.py`: artifact and source-protection contracts.
- Create `output/pdf/Xiaowei_Guo_Resume_Systems_Game_Designer.pdf`: final user deliverable.
- Create temporary `tmp/pdfs/systems-resume/page-1.png` and `tmp/pdfs/systems-resume/extracted.txt`: visual and ATS verification artifacts; remove after approval.

### Task 1: Encode Source Facts and Contracts

**Files:**
- Create: `tests/resume/test_systems_resume.py`
- Create: `tools/resume/build_systems_resume.py`

**Interfaces:**
- Consumes: source PDF path and verified annotation URLs.
- Produces: `SOURCE_PDF`, `OUTPUT_PDF`, `RESUME`, `LINKS`, `sha256(path: Path) -> str`, and `build_resume(output_path: Path = OUTPUT_PDF) -> Path`.

- [ ] **Step 1: Write the failing contract tests**

Create tests that import the future builder and assert:

```python
from pathlib import Path
from pypdf import PdfReader

from tools.resume.build_systems_resume import OUTPUT_PDF, SOURCE_PDF, build_resume, sha256


def test_source_is_not_output():
    assert SOURCE_PDF.resolve() != OUTPUT_PDF.resolve()


def test_generated_resume_is_one_page_and_ats_ordered(tmp_path: Path):
    source_hash = sha256(SOURCE_PDF)
    result = build_resume(tmp_path / "resume.pdf")
    reader = PdfReader(result)
    text = "\n".join(page.extract_text() or "" for page in reader.pages)
    assert len(reader.pages) == 1
    assert text.index("EXPERIENCE") < text.index("SELECTED PROJECTS")
    assert text.index("SELECTED PROJECTS") < text.index("EDUCATION")
    assert text.index("EDUCATION") < text.index("SKILLS")
    assert sha256(SOURCE_PDF) == source_hash


def test_generated_resume_preserves_verified_facts_and_omits_noise(tmp_path: Path):
    result = build_resume(tmp_path / "resume.pdf")
    text = "\n".join(page.extract_text() or "" for page in PdfReader(result).pages)
    for required in [
        "16 personality archetypes",
        "16-tile",
        "1,000 players",
        "10 AI agents",
        "two live scenes",
        "Unity",
        "C#",
    ]:
        assert required in text
    for forbidden in ["Ref Link", "Organizational Skill", "TODO", "TBD"]:
        assert forbidden not in text


def test_generated_resume_contains_meaningful_links(tmp_path: Path):
    result = build_resume(tmp_path / "resume.pdf")
    annotations = [
        annotation.get_object().get("/A", {}).get("/URI")
        for page in PdfReader(result).pages
        for annotation in (page.get("/Annots") or [])
    ]
    assert "mailto:guoxiaowei723@gmail.com" in annotations
    assert "https://xiaoweii.github.io/Guo-Web/" in annotations
    assert "https://www.linkedin.com/in/xiaowei-guo" in annotations
    assert len([url for url in annotations if url]) >= 7
```

- [ ] **Step 2: Run tests and verify RED**

Run:

```powershell
& 'C:\Users\guoxi\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' -m pytest tests/resume/test_systems_resume.py -v
```

Expected: import failure because `tools/resume/build_systems_resume.py` does not exist.

- [ ] **Step 3: Add the verified content model and paths**

Create `tools/resume/build_systems_resume.py` with:

```python
from hashlib import sha256 as _sha256
from pathlib import Path


SOURCE_PDF = Path(r"C:\Users\guoxi\Desktop\重要文件\Xiaowei Guo- Resume .pdf")
OUTPUT_PDF = Path("output/pdf/Xiaowei_Guo_Resume_Systems_Game_Designer.pdf")

LINKS = {
    "email": "mailto:guoxiaowei723@gmail.com",
    "portfolio": "https://xiaoweii.github.io/Guo-Web/",
    "linkedin": "https://www.linkedin.com/in/xiaowei-guo",
    "petch": "https://www.petchapp.com/",
    "dramai": "https://dramai.world/test/",
    "got": "https://got.gtarcade.com/",
    "quoted_out": "https://globalgamejam.org/games/2024/funny-street-quiz-2",
    "ai_adoption": "https://itch.io/jam/jam-o-lantern-2023/rate/2349931",
}

RESUME = {
    "name": "Xiaowei Guo",
    "headline": "Game Designer | Gameplay Systems, AI Behavior & Prototyping",
    "contact": ["Email", "Portfolio", "LinkedIn", "+1 (765) 701-8635", "Boston, MA | Open to relocation"],
    "summary": (
        "Systems-focused game designer experienced in gameplay mechanics, AI behavior, "
        "interactive narrative, and rapid prototyping. Designed personality-driven PvP, "
        "multi-agent interactions, and combat AI using Unity and C#."
    ),
    "experience": [
        {
            "organization": "Petch",
            "role": "Game Designer",
            "location": "Irvine, CA",
            "dates": "Jul 2025 - Present",
            "link": "petch",
            "bullets": [
                "Architected pet personality and MBTI-based systems spanning 16 personality archetypes, integrating a roguelike social PvP mode with a 16-tile matching mechanic to support personality-driven builds and strategic trait pairing.",
                "Prototyped personality-driven interactions in Unity, React Native, and C#, and mapped UI/UX flows in Figma.",
                "Playtested with approximately 1,000 players in the first year and iterated systems from live feedback with product, gameplay engineering, and UI/UX partners.",
            ],
        },
        {
            "organization": "Cuboid.AI - DraMai.AI",
            "role": "AI Game Designer",
            "location": "Burlingame, CA",
            "dates": "Apr 2025 - Jul 2025",
            "link": "dramai",
            "bullets": [
                "Designed and prototyped multi-agent narrative systems for approximately 10 AI agents across two live scenes, defining emotional logic, role constraints, and conflict rules.",
                "Developed prompt guardrails to constrain hallucination and out-of-character behavior, and collaborated with AI developers on the platform's storytelling and gameplay foundation.",
            ],
        },
        {
            "organization": "NetEase - Game of Thrones: Winter Is Coming",
            "role": "AI Designer",
            "location": "Hangzhou, China",
            "dates": "Aug 2024 - Sep 2024",
            "link": "got",
            "bullets": [
                "Designed and tuned combat AI for NPCs and bots, focusing on decision-making logic, threat evaluation, and combat pacing across multiple encounter types.",
                "Implemented AI behaviors in Unity with C# and aligned feature flows with AI engineers, combat system designers, and project leads.",
            ],
        },
        {
            "organization": "NetEase - Revelation",
            "role": "Game Narrative Designer",
            "location": "Hangzhou, China",
            "dates": "Jan 2021 - Mar 2021",
            "bullets": [
                "Developed character kits and narrative arcs for a mobile MMORPG, aligning story, abilities, mechanics, and worldbuilding.",
                "Authored narrative documentation with Excel, Twine, and in-house scripting tools in collaboration with narrative directors and gameplay designers.",
            ],
        },
    ],
    "projects": [
        {
            "name": "Quoted Out! - Global Game Jam 2024",
            "role": "Main Designer / Team Lead",
            "dates": "2024",
            "link": "quoted_out",
            "description": "Designed narrative and gameplay systems for a comedic game and led team direction across non-technical disciplines.",
        },
        {
            "name": "AI Adoption - Global Game Jam 2023",
            "role": "Main Designer / Team Lead",
            "dates": "2023",
            "link": "ai_adoption",
            "description": "Created the story and core mechanics for a suspense game based on the theme Behind You, leading design vision and team execution.",
        },
    ],
    "education": [
        ("Northeastern University", "M.S. in Game Design", "Sep 2023 - Dec 2025"),
        ("Purdue University", "B.S. in Applied Mathematics", "Sep 2018 - Jun 2023"),
    ],
    "skills": {
        "Design": "Gameplay Systems, Mechanics Design, Combat AI, Level Design, Prototyping, Playtesting, Interactive Narrative",
        "Technical": "Unity, Unreal Engine, C#, C++, React Native",
        "AI & Tools": "Multi-Agent Design, AI Behavior, Prompt Guardrails, Figma, Twine, Photoshop, Blender",
        "Languages": "Chinese, English",
    },
}


def sha256(path: Path) -> str:
    return _sha256(path.read_bytes()).hexdigest()
```

- [ ] **Step 4: Run tests and confirm remaining failures are only `build_resume`**

Expected: import succeeds; tests fail because `build_resume` is not defined.

---

### Task 2: Build the One-Page PDF

**Files:**
- Modify: `tools/resume/build_systems_resume.py`
- Test: `tests/resume/test_systems_resume.py`
- Create: `output/pdf/Xiaowei_Guo_Resume_Systems_Game_Designer.pdf`

**Interfaces:**
- Consumes: `RESUME`, `LINKS`, `OUTPUT_PDF` from Task 1.
- Produces: `build_resume(output_path: Path = OUTPUT_PDF) -> Path`.

- [ ] **Step 1: Implement safe inline markup and ReportLab styles**

Use `xml.sax.saxutils.escape` for all text and allow only builder-generated `<a>` and `<b>` tags. Define Helvetica-based paragraph styles with these targets:

```python
PAGE_SIZE = letter
MARGIN_X = 39
MARGIN_TOP = 32
MARGIN_BOTTOM = 30
ACCENT = colors.HexColor("#1F5FBF")
TEXT = colors.HexColor("#161616")
MUTED = colors.HexColor("#4A4A4A")

name_style = ParagraphStyle("Name", fontName="Helvetica-Bold", fontSize=21, leading=23, alignment=TA_CENTER)
headline_style = ParagraphStyle("Headline", fontName="Helvetica-Bold", fontSize=10.8, leading=13, alignment=TA_CENTER)
contact_style = ParagraphStyle("Contact", fontName="Helvetica", fontSize=8.8, leading=11, alignment=TA_CENTER)
summary_style = ParagraphStyle("Summary", fontName="Helvetica", fontSize=9.2, leading=11.4, textColor=MUTED)
section_style = ParagraphStyle("Section", fontName="Helvetica-Bold", fontSize=10.8, leading=12.5, textColor=ACCENT)
role_style = ParagraphStyle("Role", fontName="Helvetica-Bold", fontSize=9.4, leading=11.2)
bullet_style = ParagraphStyle("Bullet", fontName="Helvetica", fontSize=8.85, leading=10.6, leftIndent=9, firstLineIndent=-7, bulletIndent=0)
compact_style = ParagraphStyle("Compact", fontName="Helvetica", fontSize=8.8, leading=10.5)
```

- [ ] **Step 2: Implement `build_resume`**

The function must:

```python
def build_resume(output_path: Path = OUTPUT_PDF) -> Path:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=letter,
        leftMargin=MARGIN_X,
        rightMargin=MARGIN_X,
        topMargin=MARGIN_TOP,
        bottomMargin=MARGIN_BOTTOM,
        title="Xiaowei Guo - Systems Game Designer Resume",
        author="Xiaowei Guo",
    )
    story = []
    # Header and verified links.
    # Section order: EXPERIENCE, SELECTED PROJECTS, EDUCATION, SKILLS.
    # Role rows use a two-column Table only for left title/right date alignment;
    # all narrative content remains in a single reading column.
    # Bullets use the Unicode bullet only as a ReportLab bulletText marker;
    # all sentence punctuation uses ASCII hyphens.
    doc.build(story)
    return output_path
```

For each linked item, render human-readable labels (`Email`, `Portfolio`, `LinkedIn`, project name) and use `href` from `LINKS`. Use `KeepTogether` only at the role-header plus first-bullet level so page fitting is not blocked by oversized groups.

- [ ] **Step 3: Run the contract tests**

Expected: all Task 1 tests pass. If the PDF exceeds one page, reduce vertical spacers first; body type must not drop below 8.7 pt.

- [ ] **Step 4: Generate the final PDF**

Run:

```powershell
& 'C:\Users\guoxi\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' tools/resume/build_systems_resume.py
```

The module's `__main__` block must call `build_resume()` and print the resulting absolute path.

Expected: `output/pdf/Xiaowei_Guo_Resume_Systems_Game_Designer.pdf` exists and the source hash is unchanged.

---

### Task 3: Render, Inspect, and Finalize

**Files:**
- Modify if necessary: `tools/resume/build_systems_resume.py`
- Modify if necessary: `tests/resume/test_systems_resume.py`
- Verify: `output/pdf/Xiaowei_Guo_Resume_Systems_Game_Designer.pdf`
- Temporary: `tmp/pdfs/systems-resume/page-1.png`
- Temporary: `tmp/pdfs/systems-resume/extracted.txt`

**Interfaces:**
- Consumes: final PDF from Task 2.
- Produces: verified PDF ready for user delivery.

- [ ] **Step 1: Render at 2.5x scale**

Use pypdfium2:

```python
pdf = pdfium.PdfDocument(OUTPUT_PDF)
assert len(pdf) == 1
bitmap = pdf[0].render(scale=2.5)
bitmap.to_pil().save("tmp/pdfs/systems-resume/page-1.png")
```

- [ ] **Step 2: Inspect the PNG visually**

Check the complete page for clipped text, overlap, broken glyphs, inconsistent role spacing, weak hierarchy, crowded footer, or excessive empty space. If any defect is visible, adjust only spacers, leading, or section grouping, regenerate, and render again.

- [ ] **Step 3: Verify ATS reading order and metadata**

Extract text with pypdf and save it to `tmp/pdfs/systems-resume/extracted.txt`. Confirm the order is header, summary, EXPERIENCE, SELECTED PROJECTS, EDUCATION, SKILLS. Confirm the PDF title is `Xiaowei Guo - Systems Game Designer Resume` and all eight verified links are present.

- [ ] **Step 4: Run final verification**

Run:

```powershell
& 'C:\Users\guoxi\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' -m pytest tests/resume/test_systems_resume.py -v
& 'C:\Users\guoxi\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' -m py_compile tools/resume/build_systems_resume.py tests/resume/test_systems_resume.py
```

Expected: all tests pass; compilation exits 0; final PDF remains one page; source hash remains unchanged.

- [ ] **Step 5: Clean temporary artifacts**

After successful visual inspection, remove only the verified workspace-contained directory `tmp/pdfs/systems-resume`. Retain the final PDF, builder, tests, design spec, and implementation plan.

- [ ] **Step 6: Deliver**

Provide a clickable absolute link to the new PDF, state that the original file was untouched, summarize the positioning changes, and include the rendered page preview inline.
