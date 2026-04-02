# Project Instructions: Where Do Korean Students Go?
## Changing Distribution of Korean International Students Across U.S. Universities

> **Course Rubric Source**: Data-Driven Narrative Project (see `project.pdf`)
> **Last updated**: 2026-04-02

---

## Project Overview

**Research Question**: How has the distribution of Korean international students across U.S. universities changed over the past two decades — and what factors (rankings, STEM OPT eligibility, tuition, geography, Korean-American community size) actually drive those patterns?

**Why this matters**: There is abundant aggregate data on international students by country of origin, but very few in-depth narratives analyze *why* they concentrate at specific schools or regions. By cross-analyzing enrollment figures with QS/US News rankings, post-graduation employment rates, STEM OPT eligibility, tuition, and local Korean diaspora size, this project can surface genuinely non-obvious insights — for instance, whether prestige or job outcomes matter more, or whether community clustering outweighs institutional ranking.

**Target audience**: General public (main narrative) + data science students (appendix)

**Submission deliverables**:
1. URL to hosted project website (GitHub Pages recommended)
2. URL to GitHub repository with full source code

---

## Narrative Arc (Story Structure)

The story moves through five beats:

1. **Hook** — Open with a striking statistic. Example: Korean students have declined ~40% since peak year X — but the *distribution* across universities has shifted even more dramatically than the total numbers.
2. **Where do they go?** — Geographic concentration: which states, which cities, and how that has shifted.
3. **Which universities?** — Top 20 institutions by Korean enrollment, and what they share in common.
4. **Why those universities?** — The analytical core: cross-analysis of rankings, STEM OPT, tuition, proximity to Korean communities.
5. **What changed and why?** — Macro events (COVID, visa policy shifts, Korean economy changes, STEM OPT rule changes in 2016) mapped onto enrollment inflection points.
6. **Conclusion** — 3 key takeaways + 1 open question for the reader.

---

## Required Visualization Components (Minimum)

All visualizations must share a **uniform color palette and typography**.

### Static (≥ 2)
| # | Type | Data | File |
|---|------|------|------|
| S1 | Annotated line chart | Korean student totals 2000–2023 with event markers | `figures/static/01_timeseries.png` |
| S2 | Horizontal bar chart | Top 20 universities by avg Korean enrollment, color-coded by institution type | `figures/static/02_top20_universities.png` |

### Interactive (≥ 2)
| # | Type | Features | File |
|---|------|----------|------|
| I1 | Choropleth map + time slider | State-level counts by year; hover shows top 3 universities in that state | `figures/interactive/map_choropleth.html` |
| I2 | Multi-variable scatter plot | X-axis selectable (QS rank / tuition / STEM OPT / Korean pop); dot size = intl enrollment; color = institution type | `figures/interactive/scatter_explorer.html` |

### Linked View (≥ 1)
| # | Description | File |
|---|-------------|------|
| L1 | Clickable donut chart (fields of study) linked to line chart (enrollment over time for selected field) | `figures/interactive/linked_major_trend.html` |

### Infographic (≥ 1)
| # | Description | File |
|---|-------------|------|| F1 | "Korean Students in America at a Glance" — peak year, current year, % change, top 3 states/universities/majors, mini-timeline | `figures/static/infographic_summary.png` |

### Optional (nice-to-have)
- Interactive dashboard combining all views
- Flow map showing origin-to-destination patterns
- Animated time-lapse of state-level distribution

---

## Data Sources to Collect

See `data/README.md` for download status, licenses, and file locations.

| Priority | Dataset | Source | File |
|----------|---------|--------|------|
| ★★★ | IIE Open Doors — All Places of Origin | opendoorsdata.org | `data/raw/iie_open_doors_korea.csv` |
| ★★★ | IIE Open Doors — Leading Institutions by Place of Origin | opendoorsdata.org | `data/raw/iie_leading_institutions.csv` |
| ★★★ | IIE Open Doors — Fields of Study by Place of Origin | opendoorsdata.org | `data/raw/iie_fields_of_study.csv` |
| ★★★ | IIE Open Doors — U.S. States Hosting International Students | opendoorsdata.org | `data/raw/iie_states.csv` |
| ★★★ | IPEDS Fall Enrollment by Institution | nces.ed.gov/ipeds | `data/raw/ipeds_fall_enrollment_{year}.csv` |
| ★★★ | IPEDS Institutional Characteristics (tuition, type, control) | nces.ed.gov/ipeds | `data/raw/ipeds_inst_characteristics.csv` |
| ★★ | DHS SEVIS by the Numbers (annual PDFs 2015–2024) | ice.gov/sevis | `data/raw/sevis_{year}.pdf` |
| ★★ | QS World University Rankings | topuniversities.com | `data/raw/qs_rankings.csv` |
| ★★ | US News Best Colleges Rankings | usnews.com | `data/raw/usnews_rankings.csv` |
| ★★ | KEDI Korean Outbound Student Stats | kess.kedi.re.kr | `data/raw/kedi_outbound.xlsx` |
| ★ | U.S. Census ACS — Korean-American population by state | census.gov | `data/raw/census_korean_pop.csv` |
| ★ | BLS Employment Outcomes by Major / OPT STEM list | dol.gov / ice.gov | `data/raw/stem_opt_eligible_programs.csv` |

---

## Analysis Tasks (Notebooks)

### `notebooks/01_data_cleaning.ipynb`
- Standardize year columns (e.g. "2020/21" → 2020)
- Filter IIE data to South Korea rows only
- Standardize institution names across IIE and IPEDS (handle "Univ." vs "University", abbreviations)
- Build master institution lookup table: `institution_name`, `ipeds_unit_id`, `state`, `type`, `qs_rank`, `tuition`
- Merge Korean student counts onto lookup table
- Export: `data/processed/korean_students_master.csv`
- Document all decisions in a markdown cell at top of notebook

### `notebooks/02_eda.ipynb`
Answer each question with code + 2–3 sentences of plain-English interpretation:
1. Overall trend 2000–2023 (mark IMF, 9/11, 2008 crisis, 2016 STEM OPT expansion, COVID)
2. Top 20 universities by average Korean enrollment
3. State-level distribution shift (CA/NY share vs rest)
4. Correlation: QS ranking ↔ Korean enrollment
5. Correlation: STEM OPT eligibility ↔ Korean enrollment
6. Field-of-study mix shift (business vs STEM vs humanities) over time
7. Comparison to China and India enrollment trends as reference

### `notebooks/03_static_viz.ipynb`
- Produce S1 and S2 at 300 DPI
- Apply consistent color palette (defined in `website/css/theme.css`)

### `notebooks/04_interactive_viz.ipynb`
- Produce I1, I2, L1 as self-contained HTML files
- Verify all work without a backend server

---

## Website Structure

The website is a **static HTML/CSS/JS site** deployable to GitHub Pages. No server required.

```
website/
├── index.html          ← Main narrative
├── appendix.html       ← Technical appendix (data science audience)
├── css/
│   ├── styles.css      ← Global layout and typography
│   └── theme.css       ← Color palette + visualization tokens
├── js/
│   ├── main.js         ← Scroll behavior, section transitions
│   └── charts/         ← Individual chart initialization scripts
├── assets/
│   ├── images/         ← Static figures (PNG)
│   └── data/           ← Pre-processed JSON for client-side charts
└── figures/            ← Symlinked or copied from /figures/interactive/
```

### Narrative Sections (`index.html`)
| Section | Word Count | Embedded Viz |
|---------|-----------|--------------|
| 1. Hook | 150–200 | Infographic or S1 time series |
| 2. Where Do They Go? | 300–400 | I1 choropleth map |
| 3. The Universities They Choose | 300–400 | S2 bar chart |
| 4. Why Those Universities? | 400–500 | I2 scatter plot |
| 5. What Changed and Why | 300–400 | L1 linked view |
| 6. Conclusion | 150–200 | — |

**Important**: Narrative prose must be written by you (the student), not by AI. AI may be used for editing, proofreading, and code generation only.

---

## Technical Stack

| Layer | Tool | Notes |
|-------|------|-------|
| Data processing | Python (pandas, numpy) | Jupyter notebooks |
| Static visualization | matplotlib / seaborn | 300 DPI PNG export |
| Interactive visualization | Plotly / D3.js / Observable Plot | Self-contained HTML |
| Website | HTML5 + CSS3 + vanilla JS | No framework required |
| Hosting | GitHub Pages | Deploy from `/docs` or `gh-pages` branch |
| Version control | Git + GitHub | Incremental commits required |

---

## GitHub Repository Structure

```
korean-students-us/
├── data/
│   ├── raw/              ← Original files, never modified (gitignored if >20MB)
│   ├── processed/        ← Clean CSVs ready for analysis
│   └── README.md         ← Dataset registry (source, URL, date, license)
├── notebooks/
│   ├── 01_data_cleaning.ipynb
│   ├── 02_eda.ipynb
│   ├── 03_static_viz.ipynb
│   └── 04_interactive_viz.ipynb
├── website/              ← All website source files (deployed to GitHub Pages)
│   ├── index.html
│   ├── appendix.html
│   ├── css/
│   └── js/
├── figures/
│   ├── static/           ← PNG exports (300 DPI)
│   └── interactive/      ← Self-contained HTML files
├── ai-log.md             ← Required: log every AI interaction
├── .gitignore
└── README.md             ← Weekly progress tracker
```

---

## AI Usage Policy

Per rubric: AI **may not** write narrative prose. AI **may** be used for:
- Code generation and debugging
- Data cleaning scripts
- Visualization code
- Proofreading and editing suggestions
- Image generation (if cited with model + prompt)

Every AI interaction must be logged in `ai-log.md` using this format:

```
## Entry [N]
- Date: YYYY-MM-DD
- Tool: [Claude / ChatGPT / Copilot / etc.]
- Task: [data cleaning / code / proofreading / etc.]
- Description: [1–2 sentence summary]
- Human oversight applied: [what was reviewed or changed]
```

---

## Weekly Progress Checklist

| Week | Milestone | Status |
|------|-----------|--------|
| 1–2 | All raw data downloaded and documented | [ ] |
| 3–4 | Cleaning notebook complete, master CSV exported | [ ] |
| 5–6 | EDA complete, key findings identified | [ ] |
| 7–8 | All static + interactive figures exported | [ ] |
| 9 | Linked view and infographic complete | [ ] |
| 10 | Narrative draft written (no AI authorship) | [ ] |
| 11 | Website integrated, design unified | [ ] |
| 12 | Appendix written, quality checklist complete, submitted | [ ] |

---

## Quality Checklist (Run Before Submission)

### Visualizations
- [ ] All charts share the same color palette (hex codes in `theme.css`)
- [ ] All fonts consistent across static and interactive figures
- [ ] All charts have titles, axis labels, and source annotations
- [ ] Static figures are 300 DPI or higher
- [ ] All interactive features work without a backend server
- [ ] All interactive visualizations work on mobile

### Narrative
- [ ] No AI-written prose in main narrative text
- [ ] All data claims linked to a specific source
- [ ] Limitations of the data acknowledged
- [ ] Narrative flows as a story, not a list of findings

### Technical
- [ ] Website loads correctly at the hosted URL
- [ ] GitHub repo has incremental commit history
- [ ] `data/raw/` files >20MB are in `.gitignore`
- [ ] GitHub Pages deployment is working

### Documentation
- [ ] `data/README.md` lists every file with source and download date
- [ ] `ai-log.md` records every AI use instance
- [ ] `appendix.html` is complete and technically rigorous

---

## Success Criteria (from Rubric)

An excellent project demonstrates:
- **Analytical rigor** — sound methodology, honest representation of uncertainty
- **Narrative clarity** — a coherent story that guides readers without oversimplifying
- **Visual effectiveness** — graphics that illuminate, with careful design
- **Ethical responsibility** — accurate data representation, acknowledged limitations
- **Audience engagement** — respects intelligence while staying accessible
- **Technical proficiency** — reliable hosting, functional interactivity, professional quality
