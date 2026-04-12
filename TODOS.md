# TODOS

## Pre-submission (required)

### Reconcile enrollment numbers
**What:** The narrative prose uses 43,149 (2023/24 year) as the "current" enrollment figure throughout, but the stat card hardcode and summary_stats.json use 42,293 (2024/25). Decide on one reference year and make all values consistent.
**Why:** A grader reading the page will see "43,149" in the prose and "42,293" in the stat card side by side — they look like a typo or data error.
**How to fix:** Open notebooks/02_eda.ipynb, pick one year as the "current" reference, update index.html:103,143,410 and summary_stats.json.current_enrollment to match.
**Depends on:** Correlation value verification pass (do these together in the notebook).

### Verify and reconcile correlation values
**What:** The QS correlation appears as: r=−0.14 (narrative), ρ=0.011 (stats.json), ρ=−0.210 (appendix table). The tuition correlation appears as: r=0.28 (narrative), ρ=0.24 (stats.json), ρ=+0.243 (appendix table). These need to match.
**Why:** A grader who reads both the narrative and the appendix will notice the numbers differ. The sign flip on QS (negative vs. positive) is particularly visible.
**How to fix:** Run notebooks/02_eda.ipynb → find actual Spearman outputs → update narrative (index.html:300,308) and stats.json to match the appendix table values (which appear to come from actual code).
**Note:** The appendix table (ρ=−0.210 for QS, ρ=+0.243 for tuition) is most likely the ground truth since it shows p-values and n.

### Fill placeholders
**What:** [Author Name] in index.html:88.
**Why:** Grader will see literal "[Author Name]" in the byline.
**Note:** YOUR_USERNAME GitHub placeholder fixed by /qa on 2026-04-12 (commits 5de81a0). ai-log.md link fixed (commit 0f2ac50). STEM year error "31% in 2016" corrected to "31% in 2015" (commit 9ed05c8).

### Deploy to GitHub Pages
**What:** Configure GitHub Pages (Settings → Pages → Source: main branch / root or /website) and add live URL to README.md and index.html hero byline.
**Why:** The site exists only locally. GitHub Pages is required to submit a live URL.

### Add AI log entry for narrative authorship
**What:** Add an entry to ai-log.md and the appendix AI usage table documenting "Student authored narrative prose for all 6 sections."
**Why:** The current log entries say "narrative placeholders left blank for student authorship" — there's no entry showing the narrative was eventually written by the student. The log is incomplete.
