# Resume Guidelines

## Hard Constraints
- **Maximum length**: 2 pages - NEVER exceed this
- **Output formats**: docx (for Mara) and PDF (for recruiters)
- Use brand colors (Dusty Blue #537685 for company names/section dividers)
- **Fonts**:
  - Headers (name, section headers): Gill Sans MT (fallback: Verdana)
  - Body text (summary, bullets, contact, education): Calibri
- **No emdashes** - Use commas, periods, or regular dashes instead

## Resume Structure

### Header Format
```
MARA JORGENSEN
[Tagline - customized per role] | [Industry Focus]
+1-712-898-2341 | mara.jorgensen@gmail.com | LinkedIn
```

### Sections (in order)
1. **Summary** - 3-5 sentence paragraph tailored to the role
2. **Skills** - Organized by category (can use 2-column layout)
3. **Professional Experience** - Reverse chronological
4. **Education** - At the end

### Bullet Format
Each bullet uses a **Bold Lead-In:** followed by the description:
```
• **Lead-In Phrase:** Description of accomplishment with metrics when possible
```

### Professional Experience Format
```
[Role Title] at [Company Name] | [Brief company description] | [Date Range]
• **Bold Lead-In:** Bullet point description
• **Bold Lead-In:** Bullet point description
```

## Work History (for reference)
- Strategic Consulting Corp. | CEO, AI & Technical Implementation Strategist | 1/2020 - present
- Kontango | Head of Freight [Product] and Customer Operations | 4/2023 - 12/2024
- Roger (JV of Cargill, Andersons, Scoular, CGB, Koch) | GM, Product Management | 3/2020 - 3/2023
- Fast Solutions | Partner, Director of Business Solutions | 6/2013 - 1/2020
- Tyson Foods | Business Analyst/Software Engineer | 7/2010 - 6/2013
- CF Industries | Software Developer/Security Analyst | 4/2001 - 6/2010

## Education
- Masters in Management | Bellevue University, Bellevue, Nebraska
- BS in Computer Science and Mathematics | Morningside University, Sioux City, Iowa

## Important Notes - Do Not Repeat
- **No underwriting claims**: Mara does NOT have underwriting experience. Never claim expertise in underwriting.
- **Insurance domain expert + AI expert**: Position as both an insurance domain expert AND an AI expert (two distinct areas of expertise).
- **Health Insurance**: Use "Health Insurance Enrollment" NOT "Health Insurance Claims"

## Master Resume Structure
The master resume (`master.md`) has two main sections:

### Skills Section
Organized by skill category, each containing specific skills with supporting bullets.
```
## AI Product Strategy & Leadership
- AI Roadmapping (90-day and beyond)
- Executive Advisory on Technical Initiatives
- "Build vs. Buy" Economic Analysis
...
```

### Roles Section
Organized by company/role in reverse chronological order.
Each role contains all bullets ever used for that role across all resume versions.

## Process for Creating a Tailored Resume
1. Get the job description from the user
2. Identify relevant skills and keywords
3. Select/customize Summary and Tagline for the specific role
4. Select relevant skill categories and bullets from master.md
5. Select/adapt role bullets that match job requirements
6. Generate docx and PDF in `output/` folder
7. **Verify final output is ≤ 2 pages**

## Template Reference
- Formatting template PDF: `template/Jorgensen Resume Template.pdf`

---

# Cover Letter Guidelines

## Hard Constraints
- **Maximum length**: 5 paragraphs - NEVER exceed this
- **Word count**: ~150-180 words total for body paragraphs. Be concise, not verbose.
- **No emdashes** - Use commas, periods, or regular dashes instead
- **Output formats**: docx and PDF (same as resume)
- **Greeting**: Always use "Hi," - never include contact names
- **No mailing address** - only email, phone, LinkedIn in header
- **Email**: mara.jorgensen@gmail.com (use gmail, not work email)

## Cover Letter Structure

### Header Format
```
Mara Jorgensen
mara.jorgensen@gmail.com
712-898-2341
LinkedIn
[Date - Month Day, Year format]
```

### Attention Line
```
ATTN: [Role Title] Hiring Manager
```

### Greeting
```
Hi,
```

### Body (3-5 paragraphs)
1. **Opening**: Expression of excitement + role + experience hook
2. **Body (1-2 paragraphs)**: Relevant experience, value proposition, company fit
3. **Closing**: Thank you + forward-looking statement

### Sign-Off
```
Sincerely,
Mara Jorgensen
```

## Tone Guidelines
- Professional but warm
- Confident without arrogance
- Concise and direct
- Personal when authentic (farm background, industry experience)

## Key Phrases
- **Opening**: "I am excited to apply for..." or "I am excited to be considered for..."
- **Experience**: "With over 20 years of experience in [product leadership/engineering]..."
- **Passion**: "I am drawn to...", "I thrive in..."
- **Closing**: "Thank you for your time and consideration. I look forward to..."

## Process for Creating a Cover Letter
1. Get the job description (same as resume)
2. Select appropriate opening template from `master_cover_letter.md`
3. Choose relevant body paragraphs based on role focus
4. Customize with company-specific details
5. Select closing paragraph
6. Generate docx and PDF alongside resume in `output/` folder

## Master Cover Letter Reference
- Content templates: `master_cover_letter.md`

---

# Bio Guidelines

## Hard Constraints
- **No emdashes** - Use commas, periods, or regular dashes instead
- **Concise**: 3-5 sentences max; no verbose filler
- **AI mentioned by sentence 3** at the latest
- **No reconciliation framework language**
- **Framing**: Mara is a strategic leader, not an architect or implementer

## Bio Structure
1. **Sentence 1**: Years of experience + domain breadth (ERP, ETRM/CTRM, TMS, etc.)
2. **Sentence 2**: Specialization / what she leads
3. **Sentence 3**: Specific platform/domain credibility + AI track record
4. **Final sentence**: What she delivers on THIS engagement, ending with a concrete output (roadmap, deliverable, etc.)

## ETRM/CTRM Platform Notes
- Mara has experience with the **Ion family** (Right Angle, Allegro) — do NOT list Right Angle and Allegro separately; they are part of Ion
- Mara does NOT have FIS Aligne experience; reference Ion family as comparable

## Output
- Save bios as `.md` in `bios/` folder at repo root
- Generate `.docx` when bio will be shared externally; name format: `Mara Jorgensen - [Client] [Role] Bio.docx`
