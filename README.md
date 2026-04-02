# Where Do Korean Students Go?
### A Data-Driven Narrative on the Changing Distribution of Korean International Students Across U.S. Universities

---

## Project Summary

This project investigates how Korean international students have distributed themselves across U.S. universities over the past two decades — and what actually drives their choices. By cross-analyzing enrollment data with university rankings, STEM OPT eligibility, tuition, and local Korean-American community size, the project reveals non-obvious patterns in one of America's most significant international student populations.

**Live site**: [URL to be added after deployment]
**GitHub repo**: [URL to be added]

---

## Repository Structure

```
.
├── data/
│   ├── raw/              ← Original downloaded files (never modified)
│   ├── processed/        ← Cleaned CSVs ready for analysis
│   └── README.md         ← Dataset registry (source, date, license)
├── notebooks/
│   ├── 01_data_cleaning.ipynb
│   ├── 02_eda.ipynb
│   ├── 03_static_viz.ipynb
│   └── 04_interactive_viz.ipynb
├── website/              ← Static site source (deployed via GitHub Pages)
│   ├── index.html
│   ├── appendix.html
│   ├── css/
│   └── js/
├── figures/
│   ├── static/           ← PNG exports (300 DPI)
│   └── interactive/      ← Self-contained HTML visualizations
├── ai-log.md             ← Log of all AI tool usage
├── INSTRUCTIONS.md       ← Full project instructions and rubric
├── .gitignore
└── README.md             ← This file
```

---

## Quickstart

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/korean-students-us.git
cd korean-students-us

# Install Python dependencies
pip install -r requirements.txt

# Run notebooks in order
jupyter notebook notebooks/01_data_cleaning.ipynb
```

---

## Weekly Progress

| Week | Milestone | Status |
|------|-----------|--------|
| 1–2 | All raw data downloaded and documented in `data/README.md` | [ ] |
| 3–4 | `01_data_cleaning.ipynb` complete, `korean_students_master.csv` exported | [ ] |
| 5–6 | `02_eda.ipynb` complete, key findings written up | [ ] |
| 7–8 | All static and interactive figures exported | [ ] |
| 9 | Linked view and infographic complete | [ ] |
| 10 | Narrative draft written (no AI authorship in prose) | [ ] |
| 11 | Website integrated, design unified across all visuals | [ ] |
| 12 | Appendix written, quality checklist passed, submitted | [ ] |

---

## Data Sources

See `data/README.md` for full registry. Primary sources:
- IIE Open Doors (opendoorsdata.org)
- IPEDS (nces.ed.gov/ipeds)
- DHS SEVIS by the Numbers (ice.gov/sevis)
- KEDI Korean Education Statistics (kess.kedi.re.kr)
- QS World University Rankings (via Kaggle)

---

## Technical Stack

- **Data processing**: Python, pandas, numpy (Jupyter notebooks)
- **Static viz**: matplotlib, seaborn (300 DPI PNG)
- **Interactive viz**: Plotly / D3.js / Observable Plot (self-contained HTML)
- **Website**: HTML5 + CSS3 + vanilla JavaScript
- **Hosting**: GitHub Pages

---

## AI Usage

All AI tool usage is documented in `ai-log.md`. Per project rubric, AI was not used to write narrative prose. See the appendix for a complete disclosure.
