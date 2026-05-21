---
name: resume
description: Create or update a tailored resume and/or cover letter for a specific job. Use when the user shares a job description and wants a customized resume, cover letter, or both. Triggered by "create a resume", "resume for [job]", "apply for [job]", or /resume. Pulls from master.md and master_cover_letter.md to select and adapt content, then generates docx and PDF output files.
---

# Resume & Cover Letter Creation Skill

This skill guides you through creating a tailored resume and cover letter for Mara Jorgensen.

## Before You Start

**MANDATORY** — read these files completely before doing any work:
1. `Resume/CLAUDE.md` — formatting rules, hard constraints, process
2. `Resume/master.md` — all available resume bullets and skill categories
3. `Resume/master_cover_letter.md` — cover letter templates and paragraphs
4. `Resume/output/create-resume.js` — the docx formatting template (structure, styles, colors)

## Workflow

### Step 1: Get the Job Description
If the user hasn't provided the job description, ask for it. Also ask:
- Resume only, cover letter only, or both?
- Any specific angle or emphasis (e.g., lean into AI, downplay consulting)?
- Target output filename (default: company name + role + date)

### Step 2: Analyze the Job Description
Identify:
- Key required skills and keywords — note exact phrasing for ATS matching
- Role type (Product, AI/ML, Integration, etc.) and level (IC vs. leadership, technical vs. strategic)
- Industry focus (AgTech, Logistics, Commodities, etc.)
- Company name and hiring manager details (for cover letter)

### Step 3: Build the Resume

**Tagline**: One line matching the role. Format: `[Domain/Focus Area] | [Industry Focus]`

**Summary**: 3-5 sentences tailored to this specific role. Lead with years of experience and most relevant domain. Mirror language from the JD where authentic.

**Skills**: Select 2-4 skill categories from `master.md` most relevant to the role. Use 2-column table layout (see `create-resume.js`). Only include skills that are genuinely relevant — do not pad.

**Experience**: For each role, select bullets from `master.md` that best match JD requirements. Every bullet must use the format:
```
• **Bold Lead-In:** Description with metrics/numbers where available
```
Customize wording to mirror JD language where authentic. Prioritize recent roles; trim older roles aggressively to stay within 2 pages.

**2-Page Hard Limit**: After drafting, count the content. Cut bullets from oldest roles first (CF Industries → Tyson → Fast Solutions). The 2-page limit is non-negotiable.

### Step 4: Review with User
Present the draft resume content and ask:
- Does the tagline/summary capture the right focus?
- Are the right skills highlighted?
- Should any bullets be added, removed, or reworded?

### Step 5: Build the Cover Letter (if requested)

Follow the structure in `Resume/CLAUDE.md`:
- Header: Name, mara.jorgensen@gmail.com, phone, LinkedIn, date
- ATTN line: role title + "Hiring Manager"
- Greeting: "Hi,"
- Body: 3-5 paragraphs, ~150-180 words total
- Sign-off: "Sincerely, Mara Jorgensen"

Pull paragraph templates from `master_cover_letter.md` and customize with company-specific details.

### Step 6: Generate Output Files

Use `Resume/output/create-resume.js` as the formatting template. Create a new JS file in `Resume/output/` for this specific resume, then run it:

```bash
node Resume/output/create-[company-role].js
```

Generate PDF using LibreOffice:
```bash
soffice --headless --convert-to pdf "Resume/output/Jorgensen Resume - [Company] [Role] [YYYY-MM].docx" --outdir "Resume/output/"
```

**Naming convention**:
- `Resume/output/Jorgensen Resume - [Company] [Role] [YYYY-MM].docx`
- `Resume/output/Jorgensen Cover Letter - [Company] [Role] [YYYY-MM].docx`

### Step 7: Verify Output

Convert to images and visually confirm page count and formatting:
```bash
pdftoppm -jpeg -r 150 Resume/output/[resume].pdf Resume/output/preview
```

Confirm:
- Exactly 2 pages (or 1 if content fits naturally)
- No formatting artifacts
- Company names appear in dusty blue (#537685)
- All bullet lead-ins are bold

If over 2 pages, cut bullets and regenerate.

### Step 8: Report to User
Tell the user:
- File paths for the generated docx and PDF
- Page count
- Tailoring decisions made (bullets selected, content cut, JD keywords used)
- Any flags if constraints were difficult to satisfy

## Hard Rules

- **Maximum 2 pages** — enforce strictly, no exceptions
- **No emdashes** — use commas, periods, or regular dashes
- **Fonts**: Gill Sans MT for name and section headers; Calibri for body text
- **Brand color**: Dusty Blue #537685 for company names and section headers
- **Email**: Always mara.jorgensen@gmail.com — never the work email
- **Every bullet needs a Bold Lead-In:** format
- **No underwriting claims** — Mara has no underwriting experience
- **Health Insurance phrasing**: "Health Insurance Enrollment" not "Health Insurance Claims"
- **Cover letter greeting**: Always "Hi," — never include a contact name
- **Cover letter length**: ~150-180 words for body paragraphs

## Reference Files
- Master resume content: `Resume/master.md`
- Formatting rules: `Resume/CLAUDE.md`
- Cover letter templates: `Resume/master_cover_letter.md`
- Docx template: `Resume/output/create-resume.js`
- Visual template: `Resume/template/Jorgensen Resume Template.pdf`
