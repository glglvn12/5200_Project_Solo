# TODOS

## Pre-submission (required)

### ~~Reconcile enrollment numbers~~ FIXED 2026-04-12
**Resolution:** Standardized on 2024 data (42,293). Section 1 overview updated: "Sixteen years later, that number had fallen to 42,293: a decline of 43.7 percent." Section 5 retains 43,149 as a historical 2023 reference (COVID recovery narrative). Stat cards and JSON already used 2024 — no change needed there.

### ~~Verify and reconcile correlation values~~ FIXED 2026-04-12
**Resolution:** Ground truth from notebooks/02_eda.ipynb (cell 12, cell 24):
- QS: Spearman ρ = −0.210 (p=0.5363). Fixed: narrative −0.14 → −0.21; JSON 0.011 (sign was wrong!) → −0.210. Appendix was already correct.
- Tuition: Spearman ρ = +0.243 (p=0.2417). Fixed: narrative r=0.28 → ρ=0.24; JSON 0.24 → 0.243. Appendix was already correct.
- Also fixed: JSON top_university_avg was USC (correct per EDA: 11,176/yr avg). Narrative incorrectly said "NYU has led this list" — corrected to USC leads, NYU follows.

### Fill placeholders
**What:** [Author Name] in index.html:88.
**Why:** Grader will see literal "[Author Name]" in the byline.
**Note:** YOUR_USERNAME GitHub placeholder fixed by /qa on 2026-04-12 (commits 5de81a0). ai-log.md link fixed (commit 0f2ac50). STEM year error "31% in 2016" corrected to "31% in 2015" (commit 9ed05c8).

### Deploy to GitHub Pages
**What:** Configure GitHub Pages (Settings → Pages → Source: main branch / root or /website) and add live URL to README.md and index.html hero byline.
**Why:** The site exists only locally. GitHub Pages is required to submit a live URL.

### ~~Add AI log entry for narrative authorship~~ FIXED 2026-04-12
**Resolution:** Added Entry 8 (student narrative authorship, 2026-04-08) and Entry 9 (Claude fact-check corrections, 2026-04-12) to both ai-log.md and website/ai-log.md. Added two corresponding rows to website/appendix.html AI usage table.
