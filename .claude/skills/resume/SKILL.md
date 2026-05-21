---
name: resume
description: Create or update a tailored resume and/or cover letter for a specific job. Use when the user shares a job description and wants a customized resume, cover letter, or both. Pulls from master.md and master_cover_letter.md in Resume/ to select and adapt content, then generates docx and PDF output files.
---

# Resume & Cover Letter Creation Skill

This skill guides you through creating a tailored resume and cover letter for Mara Jorgensen. All constraints and formatting rules are in `Resume/CLAUDE.md` — read it before beginning.

## Before You Start

**MANDATORY**: Read these files completely before doing any work:
1. `Resume/CLAUDE.md` — formatting rules, hard constraints, process
2. `Resume/master.md` — all available resume bullets and skill categories
3. `Resume/master_cover_letter.md` — cover letter templates and paragraphs
4. `Resume/output/create-resume.js` — the docx formatting template (structure, styles, colors)

## Workflow

### Step 1: Get the Job Description
If the user hasn't provided the job description, ask for it. Also ask:
- Is this resume only, cover letter only, or both?
- Any specific angle or emphasis they want (e.g., lean into AI, downplay consulting)?
- Target output filename (default: company name + role + date)

### Step 2: Analyze the Job Description
Identify:
- Key required skills and keywords (note exact phrasing for ATS matching)
- Role level and focus (IC vs. leadership, technical vs. strategic)
- Industry context and domain expertise needed
- Company name and hiring manager details (for cover letter)

### Step 3: Build the Resume

**Tagline**: Write a 1-line tagline matching the role. Format: `[Domain/Focus Area] | [Industry]`

**Summary**: Write 3-5 sentences tailored to this specific role. Lead with years of experience and most relevant domain. Pull language from the JD.

**Skills**: Select 2-4 skill categories from `master.md` most relevant to the role. Use 2-column table layout (see `create-resume.js`). Only include skills that are actually relevant — do not pad.

**Experience**: For each role, select bullets from `master.md` that best match JD requirements. Customize wording to mirror JD language where authentic. Prioritize recent roles; trim older roles aggressively to stay within 2 pages.

**2-Page Hard Limit**: After drafting, count the content. If it will exceed 2 pages, cut bullets from older roles first (CF Industries → Tyson → Fast Solutions). The 2-page limit is non-negotiable.

### Step 4: Build the Cover Letter (if requested)

Follow the structure in `Resume/CLAUDE.md`:
- Header: Name, email (mara.jorgensen@gmail.com), phone, LinkedIn, date
- ATTN line: role title + "Hiring Manager"
- Greeting: "Hi,"
- Body: 3-5 paragraphs, ~150-180 words total
- Sign-off: "Sincerely, Mara Jorgensen"

Pull paragraph templates from `master_cover_letter.md` and customize with company-specific details.

### Step 5: Generate Output Files

Use `Resume/output/create-resume.js` as the formatting template. Create a new JS file in `Resume/output/` for this specific resume.

**Naming convention**: `Resume/output/Jorgensen Resume - [Company] [Role] [YYYY-MM].docx`
**Cover letter naming**: `Resume/output/Jorgensen Cover Letter - [Company] [Role] [YYYY-MM].docx`

Run the script to generate the docx:
```bash
node Resume/output/create-[company-role].js
```

Then generate PDF using LibreOffice:
```bash
soffice --headless --convert-to pdf "Resume/output/Jorgensen Resume - [Company] [Role] [YYYY-MM].docx" --outdir "Resume/output/"
```

### Step 6: Verify Output

Convert the generated docx to an image to visually verify page count and formatting:
```bash
soffice --headless --convert-to pdf Resume/output/[resume].docx
pdftoppm -jpeg -r 150 Resume/output/[resume].pdf Resume/output/preview
```

Read the preview images to confirm:
- Exactly 2 pages (or 1 if content fits)
- No formatting artifacts
- Company name appears in dusty blue (#537685)
- Bullet lead-ins are bold

If over 2 pages, cut bullets and regenerate.

## Key Constraints (from CLAUDE.md)

- **Maximum 2 pages** — enforce strictly
- **No emdashes** — use commas, periods, or regular dashes
- **Fonts**: Gill Sans MT for name/section headers, Calibri for body
- **Brand color**: Dusty Blue #537685 for company names and section headers
- **Email**: Always use mara.jorgensen@gmail.com (not work email)
- **No underwriting claims** — Mara has no underwriting experience
- **Health Insurance**: Use "Health Insurance Enrollment" not "Health Insurance Claims"
- **Cover letter greeting**: Always "Hi," — never include contact names
- **Cover letter word count**: ~150-180 words for body paragraphs

## Output Summary

When complete, tell the user:
- File paths for the generated docx and PDF files
- Word count / page count
- Any tailoring decisions made (which bullets were selected, what was cut, JD keywords used)
- Any flags if constraints were difficult to satisfy
