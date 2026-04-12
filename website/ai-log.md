# AI Usage Log

This file documents every instance of AI tool use in this project, per the course rubric requirement. All narrative prose was written by the human author; AI was used for technical tasks only.

---

## Entry 1
- **Date**: 2026-04-02
- **Tool**: Claude (Anthropic)
- **Task**: Project setup — instructions file, file structure, data source research
- **Description**: Used Claude to parse the project PDF rubric and generate INSTRUCTIONS.md, scaffold the repository directory structure, create data/README.md with dataset registry and download URLs, create this ai-log.md template, create the website skeleton (index.html, appendix.html, CSS, JS), and research primary data sources (IIE Open Doors, IPEDS, SEVIS, KEDI, QS Rankings, Census ACS) including direct download URLs and access requirements.
- **Human oversight applied**: All file contents reviewed and edited for accuracy. Data source URLs and access notes will be verified manually before downloading. Narrative structure is a scaffold — all prose will be written by the student.

---

---

## Entry 2
- **Date**: 2026-04-04
- **Tool**: Claude (Anthropic, Cowork mode)
- **Task**: Deep research + data assembly + data cleaning notebook + EDA notebook + static visualization notebook
- **Description**: Claude researched the topic using web search across IIE Open Doors annual reports, WENR analyses, KEIA reports, DHS SEVIS publications, and peer-reviewed sources; assembled 8 raw CSV datasets from published IIE Open Doors figures (2000–2025), IPEDS, QS Rankings, U.S. Census ACS, and ICE STEM OPT data; wrote fully executable code for notebooks 01_data_cleaning.ipynb (data merging, fuzzy matching, export of 5 processed CSVs), 02_eda.ipynb (10 analysis questions with statistical tests and 10 figures), and 03_static_viz.ipynb (S1, S2, F1 at 300 DPI). Generated summary_stats.json and updated data/README.md with download status.
- **Human oversight applied**: All data anchor points (peak year, peak enrollment, 2024 enrollment, field-of-study percentages, state distribution) must be verified against the actual IIE Open Doors downloadable Excel files when accessed. Statistical correlations (Spearman ρ values) and all EDA interpretations should be re-validated with the final real dataset. Intermediate-year enrollment values that were interpolated/estimated are labeled in data/README.md and should be replaced with actual IIE figures. No narrative prose was written by AI.

---

---

## Entry 3
- **Date**: 2026-04-05
- **Tool**: Claude (Anthropic, Cowork mode)
- **Task**: Real data verification, file placement, IPEDS guidance, master dataset rebuild
- **Description**: Verified contents of 3 real IIE Open Doors Excel files (iie_open_doors_korea.xlsx: 35 years 1949/50–2024/25; iie_leading_institutions.xlsx: 25 years × 25 institutions 2000/01–2024/25; iie_fields_of_study.xlsx: 16 years 2009/10–2024/25 × 12 field categories). Copied all 3 IIE Excel files and 8 SEVIS PDFs to data/raw/ with correct .xlsx/.pdf extensions. Answered IPEDS question: use HD2023.csv (institutional characteristics) and IC2023.csv (tuition/fees) from Complete Data Files at nces.ed.gov/ipeds. Rebuilt processed CSVs from real IIE data: leading_institutions.csv (625 rows), field_of_study_timeseries.csv (16 years × 12 fields), country_comparison.csv (Korea/China/India/Japan 2000–2024). Rebuilt korean_students_master.csv (625 rows, 25 years × ~25 institutions) with IPEDS/QS join. Updated summary_stats.json (peak=2008/75,065, current=2024/42,293, −43.7%). Regenerated S1, S2, F1 figures at 300 DPI with real data.
- **Human oversight applied**: Real IIE data values confirmed row-by-row. Corrections applied: (1) Year offset fixed — 1999/00=41,191 was misassigned to 2000/01 in assembled data; real 2000/01=45,685. (2) Leading institutions corrected — NYU was #1 in 2000/01 (5,399 intl students), not USC; USC led from 2001/02 onward. (3) Real peak confirmed as 2008/09 (75,065), not 2010/11. IPEDS/QS/Census data is still partially assembled — must be replaced when IPEDS HD/IC CSVs are downloaded.

---

## Entry 4
- **Date**: 2026-04-05
- **Tool**: Claude (Anthropic, Cowork mode)
- **Task**: IPEDS real data integration — inspect HD/IC files, rewrite cleaning pipeline
- **Description**: Inspected newly downloaded IPEDS files: HD2002–HD2024 (23 years × ~6,163 institutions each) and IC2002–IC2007 + IC2024. Key finding: HD files contain institutional metadata (UNITID, name, state, control, Carnegie, location) but NOT tuition dollar amounts. Tuition lives in separate ICAY (Academic Year Cost) files which were not downloaded. IC files are program-characteristic tables, not tuition. Updated `notebooks/01_data_cleaning.ipynb` to: (1) load real IIE Open Doors Excel files instead of assembled CSVs, (2) load HD2023 (6,163 institutions) instead of 40-institution assembled file for fuzzy matching, (3) added 45-institution manual override table with correct UNITIDs verified against HD2023 and out-of-state tuition values sourced from published data. Fixed UC system UNITID errors in old assembled file (old file had UCB=110635 which is correct, but had wrong mapping for UCLA/UCSD). Re-executed all 3 notebooks (01, 02, 03) clean. Updated figures at 300 DPI.
- **Data quality improvements**: Control coverage 100% (was ~68%), Tuition coverage 100% (was ~68%), Carnegie coverage 100% (was ~68%). QS rank coverage 41% (limited by QS file scope — community colleges and regional universities don't appear in global rankings).
- **Known limitation**: ICAY (Academic Year cost) files not downloaded — tuition values for 2023/24 sourced from institutional websites/published data and remain static (not year-varying). To enable year-varying tuition analysis, download `icay{year}.csv` files from IPEDS Complete Data Files.

## Entry 5
- **Date**: 2026-04-05
- **Tool**: Claude (Anthropic, Cowork mode)
- **Task**: Interactive visualization generation — notebooks/04_interactive_viz.ipynb
- **Description**: Built three self-contained interactive HTML figures: (1) `map_choropleth.html` — Plotly animated USA choropleth with year slider 2000–2023, hover shows state count + top-3 universities per state; (2) `scatter_explorer.html` — Plotly bubble scatter with dropdown to switch X-axis between QS rank, tuition, STEM program %, and Korean-American population; (3) `linked_major_trend.html` — Plotly donut (latest-year field distribution) linked to line chart via click events, with 2016 STEM OPT annotation. All three are self-contained with CDN-hosted Plotly.js, no backend required. Notebook 04 updated with full working code replacing prior commented-out scaffolds.
- **Human oversight applied**: All three HTML files should be opened in browser to verify interactivity. Scatter plot correlation interpretation (e.g., positive tuition–enrollment relationship) requires student analysis and explanation in narrative.

## Entry 6
- **Date**: 2026-04-05
- **Tool**: Claude (Anthropic, Cowork mode)
- **Task**: Website integration — index.html and appendix.html
- **Description**: Rebuilt website/index.html as clean standalone HTML (stripped ~400 lines of Quarto-generated boilerplate), embedded all 5 figures via iframe/img with correct relative paths, added properly-labeled narrative placeholder blocks for each of the 6 story-beat sections. Updated appendix.html with real computed Spearman correlations (tuition ρ=0.474, p=0.001; QS ρ=0.011, p=0.970; STEM % ρ=−0.406, p=0.133; diaspora ρ=0.051, p=0.744), real missing-data rates, and 45-institution name-matching methodology. Filled AI usage table with entries 1–6. Updated summary_stats.json to include rank field and corrected pct_change format.
- **Human oversight applied**: Narrative placeholder sections left intentionally blank for student authorship per rubric. Spearman values require interpretation by student in the analysis section. Student must fill in [Author Name], [Date], course number, and GitHub URL before deployment.

## Entry 7
- **Date**: 2026-04-05
- **Tool**: Claude (Anthropic, Cowork mode)
- **Task**: Figure quality fixes — 5 figures corrected and regenerated
- **Description**: Applied all fixes identified in Figure Quality Report: (1) Fig 02 — corrected x-axis label from "International Student Enrollment" to "Korean Student Enrollment" in notebook 03 Cell 5; (2) Fig 03 — fixed flat right-panel lines by computing state shares using national total from country_comparison.csv as denominator (previously used sum of tracked states only); CA share now shows 27.0%→30.0%, NY share 10.8%→12.0%; (3) Fig 05 — replaced empty Non-STEM comparison (has_strong_stem=1 for all 45 institutions) with high/low STEM split using pct_programs_stem median (0.44) — high STEM = 6 institutions with ≥44% STEM programs, low STEM = 39 institutions; (4) Fig 06 — fixed STEM OPT annotation using data-derived y position instead of ax2.get_ylim() called before lines are drawn; (5) Fig 10 — changed from 2000→2024 comparison (all grew) to estimated Korean enrollment 2008→2024 using institution's proportional share of tracked international students × national Korean total; colored by outperformed vs underperformed national avg decline of −43.7% (2 outperformed, 13 underperformed). Updated appendix Spearman table: tuition ρ changed from 0.474 (cross-institution all-years) to 0.24 (2023 cross-sectional, p=0.242) to match actual figure computation. Updated summary_stats.json accordingly. Applied same code changes to notebooks 02 and 03 source cells.
- **Human oversight applied**: Student should review Fig 05 interpretation — the STEM grouping is now high/low pct_programs_stem split, not STEM vs non-STEM institution type. Fig 10 uses estimated Korean enrollment (proportional allocation), not direct observation; caption includes this caveat. Tuition correlation is not statistically significant (p=0.242); student should update narrative accordingly.

<!-- Add new entries below as AI is used -->
