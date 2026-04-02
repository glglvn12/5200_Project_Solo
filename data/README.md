# Data Registry

All datasets used in this project. Update status and notes as files are downloaded.

> **Rule**: Files in `raw/` are never modified. All transformations happen in notebooks and output to `processed/`.

---

## Primary Datasets

### 1. IIE Open Doors — All Places of Origin
| Field | Value |
|-------|-------|
| **File** | `raw/iie_open_doors_korea.csv` |
| **Source** | Institute of International Education (IIE) |
| **URL** | https://opendoorsdata.org/data/international-students/all-places-of-origin/ |
| **Format** | Excel (.xlsx) → convert to CSV |
| **Years Available** | 2000/01 – 2024/25 |
| **Date Downloaded** | |
| **License** | IIE data; free for academic use, cite IIE Open Doors |
| **Notes** | May require email request to opendoors@iie.org for historical tables. Contains total Korean student counts by year. |
| **Status** | ⬜ Not downloaded |

---

### 2. IIE Open Doors — Leading Institutions by Place of Origin
| Field | Value |
|-------|-------|
| **File** | `raw/iie_leading_institutions.csv` |
| **Source** | Institute of International Education (IIE) |
| **URL** | https://opendoorsdata.org/data/international-students/leading-institutions/ |
| **Format** | Excel (.xlsx) → convert to CSV |
| **Years Available** | Multiple years |
| **Date Downloaded** | |
| **License** | IIE data; cite IIE Open Doors |
| **Notes** | Key dataset: shows top 25 universities for each sending country by year. This is central to the project narrative. Password may be required — contact IIE. |
| **Status** | ⬜ Not downloaded |

---

### 3. IIE Open Doors — Fields of Study by Place of Origin
| Field | Value |
|-------|-------|
| **File** | `raw/iie_fields_of_study.csv` |
| **Source** | Institute of International Education (IIE) |
| **URL** | https://opendoorsdata.org/data/international-students/fields-of-study-by-place-of-origin/ |
| **Format** | Excel (.xlsx) → convert to CSV |
| **Years Available** | Multiple years; 2025 data updated 11/16/2025 |
| **Date Downloaded** | |
| **License** | IIE data; cite IIE Open Doors |
| **Notes** | Used for linked view (major category → enrollment trend). Shows business, STEM, humanities breakdown for Korean students. |
| **Status** | ⬜ Not downloaded |

---

### 4. IIE Open Doors — U.S. States Hosting International Students
| Field | Value |
|-------|-------|
| **File** | `raw/iie_states.csv` |
| **Source** | Institute of International Education (IIE) |
| **URL** | https://opendoorsdata.org/data/international-students/ |
| **Format** | Excel (.xlsx) → convert to CSV |
| **Years Available** | Multiple years |
| **Date Downloaded** | |
| **License** | IIE data; cite IIE Open Doors |
| **Notes** | Used for choropleth map. State-level distribution of Korean students. |
| **Status** | ⬜ Not downloaded |

---

### 5. IPEDS — Fall Enrollment by Institution
| Field | Value |
|-------|-------|
| **File** | `raw/ipeds_fall_enrollment_{year}.csv` |
| **Source** | National Center for Education Statistics (NCES) |
| **URL** | https://nces.ed.gov/ipeds/use-the-data |
| **Format** | CSV (zipped) |
| **Years Available** | 1980–81 through Fall 2024 (provisional) |
| **Date Downloaded** | |
| **License** | U.S. Department of Education public data; no restrictions |
| **Notes** | Free, no registration required. Download via "Complete Data Files" option. Select EF (Enrollment) survey component. Filter for international students by country of origin if available, or use total enrollment for institutional context. |
| **Status** | ⬜ Not downloaded |

---

### 6. IPEDS — Institutional Characteristics
| Field | Value |
|-------|-------|
| **File** | `raw/ipeds_inst_characteristics.csv` |
| **Source** | National Center for Education Statistics (NCES) |
| **URL** | https://nces.ed.gov/ipeds/use-the-data |
| **Format** | CSV |
| **Years Available** | Multiple years |
| **Date Downloaded** | |
| **License** | U.S. Department of Education public data |
| **Notes** | Download HD (Institutional Characteristics) survey. Contains: institution type, control (public/private), tuition in/out-of-state, Carnegie classification, geographic info. Used to build the master institution lookup table. |
| **Status** | ⬜ Not downloaded |

---

### 7. DHS SEVIS by the Numbers — Annual Reports
| Field | Value |
|-------|-------|
| **File** | `raw/sevis_{year}.pdf` |
| **Source** | U.S. Department of Homeland Security / ICE |
| **URL** | https://www.ice.gov/sevis |
| **Format** | PDF |
| **Years Available** | 2015–2024 |
| **Date Downloaded** | |
| **License** | U.S. Government public data |
| **Notes** | Direct PDF links: 2024: ice.gov/doclib/sevis/btn/25_0605_2024-sevis-btn.pdf ; 2023: ice.gov/doclib/sevis/btn/24_0510_hsi_sevp-cy23-sevis-btn.pdf ; 2022: ice.gov/doclib/sevis/btn/22_0406_hsi_sevp-cy22-sevis-btn.pdf. Contains visa type breakdown, field of study by nationality, state distribution. Requires PDF parsing (tabula-py recommended). |
| **Status** | ⬜ Not downloaded |

---

### 8. KEDI — Korean Outbound Student Statistics
| Field | Value |
|-------|-------|
| **File** | `raw/kedi_outbound.xlsx` |
| **Source** | Korean Education Development Institute (KEDI) |
| **URL** | https://kess.kedi.re.kr/contents/dataset |
| **Format** | Excel (.xlsx) |
| **Years Available** | Multiple years |
| **Date Downloaded** | |
| **License** | Korean government public data |
| **Notes** | Free download, no registration required. English version available at kess.kedi.re.kr. Contains Korean Ministry of Education data on students studying abroad by destination country. Useful for denominator: what fraction of Korean outbound students go to the U.S.? |
| **Status** | ⬜ Not downloaded |

---

### 9. QS World University Rankings
| Field | Value |
|-------|-------|
| **File** | `raw/qs_rankings.csv` |
| **Source** | QS (via Kaggle) |
| **URL** | https://www.kaggle.com/datasets/akashbommidi/2026-qs-world-university-rankings |
| **Format** | CSV |
| **Years Available** | 2017–2026 (multiple editions on Kaggle) |
| **Date Downloaded** | |
| **License** | Kaggle dataset; check individual dataset license |
| **Notes** | Official QS data is proprietary. Use Kaggle-sourced CSV for research/academic purposes. Historical editions (2017–2022) also available. Used to correlate university rank with Korean enrollment. |
| **Status** | ⬜ Not downloaded |

---

### 10. U.S. Census ACS — Korean-American Population by State
| Field | Value |
|-------|-------|
| **File** | `raw/census_korean_pop.csv` |
| **Source** | U.S. Census Bureau, American Community Survey (ACS) |
| **URL** | https://data.census.gov or https://api.census.gov |
| **Format** | CSV |
| **Years Available** | 2005–2023 (ACS 1-year and 5-year estimates) |
| **Date Downloaded** | |
| **License** | U.S. Government public data |
| **Notes** | Use Census API with table B02015 (Asian alone by detailed group) or S0201 (Selected Population Profile). Filter for "Korean" ancestry. Used as predictor variable: does proximity to Korean diaspora predict university selection? |
| **Status** | ⬜ Not downloaded |

---

### 11. STEM OPT Eligible Programs List
| Field | Value |
|-------|-------|
| **File** | `raw/stem_opt_eligible_programs.csv` |
| **Source** | U.S. Immigration and Customs Enforcement (ICE) / DHS |
| **URL** | https://www.ice.gov/sevis/schools |
| **Format** | PDF or CSV |
| **Years Available** | Current list (updated periodically) |
| **Date Downloaded** | |
| **License** | U.S. Government public data |
| **Notes** | List of CIP codes eligible for STEM OPT extension. Critical variable: universities with strong STEM OPT programs may attract more Korean students post-2016 (when STEM OPT was expanded from 17 to 36 months). |
| **Status** | ⬜ Not downloaded |

---

## Download Status Legend
- ⬜ Not downloaded
- 🔄 In progress
- ✅ Downloaded and verified
- ⚠️ Access issues — see notes

---

## Processed Files

| File | Source Inputs | Created By | Description |
|------|--------------|------------|-------------|
| `processed/korean_students_master.csv` | IIE + IPEDS + QS + Census | `01_data_cleaning.ipynb` | Master merged dataset: one row per institution per year |
| `processed/state_level_timeseries.csv` | IIE states | `01_data_cleaning.ipynb` | Korean students by state and year |
| `processed/field_of_study_timeseries.csv` | IIE fields | `01_data_cleaning.ipynb` | Korean students by major category and year |
