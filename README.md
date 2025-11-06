# Global Air Quality and Pollution Trends

Analysis of global air quality patterns using OpenAQ and World Bank datasets to identify pollution trends across regions, time periods, and socioeconomic conditions.

**Evaluation Date**: November 6, 2025

## Data Sources

- [OpenAQ](https://explore.openaq.org/#1.2/20/40) - Global air quality measurements
- World Bank air pollution datasets
- GDP and health statistics (supplementary)

## Research Questions

1. Which countries/cities have the highest and lowest average pollution levels?
2. Do urbanized regions show higher pollution compared to rural areas?
3. How has air quality changed over the last 20 years globally and regionally?
4. What is the relationship between GDP per capita and air pollution levels?
5. Are there seasonal variations in pollution (winter vs. summer)?
6. How do different pollutants (PM2.5, PM10, NO2, CO, O3) correlate?
7. Does air quality change correlate with health conditions associated with pollution?

## Methodology

- Data preprocessing (missing values, outliers, cleaning)
- Exploratory data analysis with interactive visualizations
- Time-series analysis (20-year trends with year selection)
- Correlation analysis (pollutants, GDP, health data)
- Predictive and descriptive modeling

## Project Structure

```
enchanting_echo/
├── data/                      # Raw and processed datasets
├── notebooks/                 # Analysis notebooks
├── src/                       # Data processing, visualization, models
├── docs/                      # Documentation (work plan, methodology, hypotheses, problem statement)
├── reports/                   # Findings and reports
└── requirements.txt
```

## Team Workflow

- Git version control with individual commits tracked
- Clear role assignments and rotating leadership (3 phases)
- Regular progress updates and milestone tracking

**📋 Documentation**:
- [WORK_PLAN.md](docs/WORK_PLAN.md) - Detailed roles, timeline, and evaluation criteria
- [research.md](docs/research.md) - Literature review with key papers and theoretical frameworks

## Setup

```bash
# Clone and setup
git clone <repository-url>
cd enchanting_echo
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install pandas numpy matplotlib seaborn plotly scikit-learn jupyter
```

## Usage

1. Download datasets from OpenAQ and World Bank
2. Run preprocessing scripts in `src/data_processing/`
3. Execute Jupyter notebooks sequentially
4. Generate visualizations and train models

## Deliverables

- [x] Data cleaning pipeline (preprocessing complete - 17,622 cleaned records)
- [x] Raw data collection (OpenAQ dataset - 61,178 records)
- [x] Hypothesis formulation (Hypotheses2.pdf)
- [x] Literature review (research.md with 5 key papers)
- [ ] Interactive visualizations with year selection
- [ ] 20-year pollution trend analysis
- [ ] Correlation analysis (pollutants, GDP, health)
- [ ] Predictive models
- [ ] Final report with methodology and findings

## Git Workflow

```bash
git checkout -b feature/your-feature-name
git add .
git commit -m "Descriptive message"
git push origin feature/your-feature-name
```

## Team

- **Team Lead**: naman394
- **Members**: he11OOwOr1d , NileshChakrabarty
- **Mentor**: ashwin-tewary

## Push History

| Date | Pushed By | Description |
|------|-----------|-------------|
| Nov 5, 2025 | naman394 | Initial project setup with README documentation |
| Nov 6, 2025 | naman394 | Project structure setup: WORK_PLAN.md with 3-phase evaluation, leadership rotation, detailed rubrics |
| Nov 6, 2025 | NileshChakrabarty | Added initial hypothesis document (PDF) |
| Nov 6, 2025 | he11OOwOr1d | Uploaded raw OpenAQ dataset (61,178 records) |
| Nov 6, 2025 | he11OOwOr1d | Data preprocessing - identified missing values across all columns |
| Nov 6, 2025 | he11OOwOr1d | Data cleaning - filled city missing values, dropped low-quality rows |
| Nov 6, 2025 | he11OOwOr1d | Data cleaning - filled coordinate missing values (latitude/longitude) |
| Nov 6, 2025 | he11OOwOr1d | Data cleaning - filled country label missing values |
| Nov 6, 2025 | he11OOwOr1d | Outlier detection and handling across dataset |
| Nov 6, 2025 | he11OOwOr1d | Final preprocessed dataset uploaded (17,622 cleaned records) |
| Nov 6, 2025 | NileshChakrabarty | Updated hypothesis document (Hypotheses2.pdf) |
| Nov 6, 2025 | naman394 | Moved WORK_PLAN.md to docs/ for better organization |
| Nov 6, 2025 | naman394 | Added research.md with literature review (5 key papers, EKC framework, methodology) |
| Nov 6, 2025 | naman394 | Merged all team contributions and pushed comprehensive documentation

---
