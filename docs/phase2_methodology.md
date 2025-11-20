# Phase 2: Research Methodology

## Overview

This document outlines the comprehensive research methodology for Phase 2 of the Global Air Quality and Pollution Trends analysis project. Our approach follows a systematic workflow from data acquisition through analysis to actionable conclusions.

---

## Methodology Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                   RESEARCH METHODOLOGY                       │
│                        WORKFLOW                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                ┌──────────────────────────┐
                │   OPEN AQ DATASET        │
                │   (61,178 records)       │
                └──────────────────────────┘
                              │
                              ▼
                ┌──────────────────────────┐
                │    PREPROCESSING         │
                │  - Missing values        │
                │  - Outlier handling      │
                │  - Data cleaning         │
                │  (17,622 clean records)  │
                └──────────────────────────┘
                              │
                              ▼
                ┌──────────────────────────┐
                │         EDA              │
                │  - Visual exploration    │
                │  - Pattern discovery     │
                │  - Statistical summaries │
                └──────────────────────────┘
                              │
                              ▼
                ┌──────────────────────────┐
                │   PREDICTIVE -           │
                │   DESCRIPTIVE ANALYSIS   │
                │  - Model development     │
                │  - Statistical inference │
                └──────────────────────────┘
                              │
                              ▼
                ┌──────────────────────────┐
                │      CONCLUSION          │
                │  - Findings summary      │
                │  - Implications          │
                │  - Recommendations       │
                └──────────────────────────┘
```

---

## 1. Data Acquisition

### 1.1 Primary Data Source: OpenAQ
- **Platform:** OpenAQ (Open Air Quality Data Platform)
- **Initial Dataset:** 61,178 records
- **Coverage:** Global air quality measurements
- **Parameters:** PM2.5, PM10, NO₂, SO₂, O₃, CO
- **Time Period:** Multi-year data for temporal analysis

### 1.2 Supplementary Data Sources
- World Bank: GDP per capita, economic indicators
- WHO: Health statistics and air quality guidelines
- National databases: Country-specific air quality standards

### 1.3 Data Collection Strategy
- Systematic download from OpenAQ API
- Batch processing for large datasets
- Version control of raw data files
- Metadata documentation

---

## 2. Preprocessing

### 2.1 Missing Value Analysis
**Methodology:**
- Identify missing data patterns across all columns
- Calculate missingness percentage per variable
- Assess if data is Missing Completely at Random (MCAR), Missing at Random (MAR), or Missing Not at Random (MNAR)

**Handling Strategy:**
- **City labels:** Forward/backward fill based on location coordinates
- **Coordinates:** Imputation using city/country centroids
- **Country labels:** Geographic lookup tables
- **Measurement values:** Domain-specific imputation or deletion based on threshold

### 2.2 Outlier Detection
**Methods Applied:**
- **Interquartile Range (IQR):** Statistical outlier identification
- **Domain Knowledge:** WHO air quality standards as reference
- **Z-score Analysis:** For normally distributed variables
- **Visual Inspection:** Box plots and scatter plots

**Outlier Treatment:**
- Retain physically plausible extreme values (e.g., pollution spikes during events)
- Remove data entry errors and sensor malfunctions
- Document all outlier decisions with justification

### 2.3 Data Cleaning Pipeline
**Steps:**
1. Remove duplicate records
2. Standardize date/time formats
3. Normalize country and city names
4. Validate coordinate ranges (latitude: -90 to 90, longitude: -180 to 180)
5. Convert units to standard measurements (μg/m³)
6. Create derived variables (e.g., AQI categories)

**Output:** Clean dataset of 17,622 high-quality records

---

## 3. Exploratory Data Analysis (EDA)

### 3.1 Univariate Analysis
**Objectives:**
- Understand distribution of each pollutant
- Identify central tendencies and spread
- Detect skewness and kurtosis

**Methods:**
- Descriptive statistics (mean, median, std, min, max)
- Histograms and density plots
- Box plots for distribution visualization
- QQ plots for normality assessment

### 3.2 Bivariate Analysis
**Objectives:**
- Explore relationships between pollutants
- Examine pollution vs. economic indicators
- Investigate temporal patterns

**Methods:**
- Scatter plots with trend lines
- Correlation matrices and heatmaps
- Cross-tabulations for categorical variables
- Grouped comparisons (urban vs. rural)

### 3.3 Multivariate Analysis
**Objectives:**
- Understand complex interactions
- Identify principal drivers of air quality
- Cluster similar regions/time periods

**Methods:**
- Principal Component Analysis (PCA)
- Cluster analysis (K-means, hierarchical)
- Parallel coordinate plots
- 3D surface plots for multiple variables

### 3.4 Temporal Analysis
**Objectives:**
- Identify long-term trends (20-year analysis)
- Detect seasonal patterns
- Examine cyclical variations

**Methods:**
- Time-series decomposition (trend, seasonal, residual)
- Moving averages and smoothing
- Year-over-year comparison plots
- Seasonal subseries plots

### 3.5 Geospatial Analysis
**Objectives:**
- Map pollution hotspots
- Compare regional variations
- Visualize urban-rural divide

**Methods:**
- Choropleth maps (country-level aggregation)
- Point maps with size/color encoding
- Spatial clustering analysis
- Distance-based metrics

### 3.6 Novel Visualizations
**Innovative Approaches:**
- Interactive multi-pollutant dashboards
- Animated temporal evolution maps
- Ridgeline plots for distribution comparison
- Sankey diagrams for pollution flow
- Radar charts for multi-dimensional comparison

---

## 4. Predictive and Descriptive Analysis

### 4.1 Descriptive Statistical Analysis

#### 4.1.1 Central Tendency and Dispersion
- Mean, median, mode for all pollutants
- Standard deviation, variance, coefficient of variation
- Percentile analysis (25th, 50th, 75th, 95th)

#### 4.1.2 Comparative Analysis
- **Geographic:** Highest vs. lowest pollution countries/cities
- **Temporal:** Pollution changes over 20 years
- **Economic:** High-GDP vs. low-GDP countries
- **Urban-Rural:** Pollution differentials by urbanization level

#### 4.1.3 Correlation Analysis
- Pearson correlation for linear relationships
- Spearman correlation for monotonic relationships
- Pollutant inter-correlations
- Pollution-GDP correlations
- Pollution-health outcome correlations

#### 4.1.4 Hypothesis Testing
- T-tests: Urban vs. rural pollution differences
- ANOVA: Multi-country pollution comparisons
- Chi-square: Categorical associations
- Mann-Whitney U: Non-parametric comparisons

### 4.2 Predictive Modeling

#### 4.2.1 Regression Models

**Linear Regression:**
- Environmental Kuznets Curve (EKC) testing
- GDP per capita vs. pollution levels
- Simple and multiple regression variants

**Polynomial Regression:**
- Capture non-linear EKC relationship
- Model pollution peaks and declines

**Ridge/Lasso Regression:**
- Handle multicollinearity among pollutants
- Feature selection for key drivers

#### 4.2.2 Time-Series Forecasting

**ARIMA Models:**
- Autoregressive Integrated Moving Average
- Short-term pollution forecasting
- Seasonal ARIMA for cyclical patterns

**Prophet:**
- Robust to missing data and outliers
- Automatic seasonality detection
- Trend changepoint identification

**LSTM (Long Short-Term Memory):**
- Deep learning for complex temporal patterns
- Multi-step ahead forecasting
- Multi-variate time-series modeling

#### 4.2.3 Machine Learning Models

**Random Forest:**
- Non-linear relationship modeling
- Feature importance ranking
- Robust to overfitting

**Gradient Boosting (XGBoost, LightGBM):**
- High predictive accuracy
- Handle missing values natively
- Interpretable feature contributions

**Support Vector Machines (SVM):**
- Classification: Air quality categories (Good, Moderate, Unhealthy)
- Regression: Continuous pollution prediction

#### 4.2.4 Model Evaluation

**Metrics:**
- **Regression:** R², RMSE, MAE, MAPE
- **Classification:** Accuracy, Precision, Recall, F1-score, AUC-ROC
- **Time-series:** Forecast error, trend accuracy

**Validation Strategy:**
- Train-test split (80-20)
- Cross-validation (5-fold or 10-fold)
- Temporal validation (train on earlier years, test on later)

**Model Comparison:**
- Baseline models for reference
- Performance benchmarking
- Statistical significance testing
- Best model selection with justification

### 4.3 Advanced Analytical Techniques

#### 4.3.1 Causal Inference
- Investigate causal relationships (not just correlations)
- Difference-in-differences for policy evaluation
- Instrumental variables for confounding control

#### 4.3.2 Sensitivity Analysis
- Test robustness of findings
- Vary assumptions and parameters
- Assess impact of outlier treatment decisions

#### 4.3.3 Scenario Analysis
- "What-if" scenarios for policy interventions
- Simulate GDP growth impact on pollution
- Model technology adoption effects

---

## 5. Interpretation and Conclusion

### 5.1 Deep Interpretation
**Approach:**
- Translate statistical findings into real-world meaning
- Connect results to theoretical frameworks (EKC, etc.)
- Discuss alignment or divergence from literature
- Explain unexpected findings with domain reasoning

**Key Questions:**
- What do the patterns tell us about air quality drivers?
- How do economic and geographic factors interact?
- What mechanisms explain observed correlations?
- Are there policy implications?

### 5.2 Broader Implications

#### 5.2.1 Public Health
- Mortality and morbidity reduction potential
- Vulnerable population identification
- Health policy recommendations

#### 5.2.2 Economic Policy
- GDP-pollution trade-offs
- Cost-benefit of clean technology adoption
- Economic incentives for pollution reduction

#### 5.2.3 Environmental Policy
- Emission standards effectiveness
- International cooperation opportunities
- Technology transfer needs

#### 5.2.4 Social Equity
- Pollution exposure disparities
- Urban-rural inequality
- Access to clean air as environmental justice issue

### 5.3 Limitations and Assumptions

**Data Limitations:**
- Measurement inconsistencies across countries
- Temporal gaps in some regions
- Potential selection bias in data availability

**Methodological Limitations:**
- Correlation does not imply causation
- Model assumptions (linearity, normality, etc.)
- Generalizability constraints

**Mitigation Strategies:**
- Sensitivity analysis
- Multiple model validation
- Transparent documentation of all assumptions

### 5.4 Recommendations

**For Policymakers:**
- Evidence-based air quality standards
- Targeted interventions for hotspots
- Economic incentives alignment

**For Future Research:**
- Longitudinal studies with causal designs
- High-frequency data collection
- Integration with satellite and IoT data

**For Practitioners:**
- Best practices in data preprocessing
- Robust modeling frameworks
- Reproducible analysis pipelines

---

## 6. Quality Assurance

### 6.1 Reproducibility
- All code in version control
- Random seeds set for stochastic processes
- Environment specifications documented (requirements.txt)
- Clear execution instructions

### 6.2 Validation Checks
- Internal consistency checks
- Cross-reference with external sources
- Peer review of code and findings
- Mentor feedback incorporation

### 6.3 Documentation Standards
- Inline code comments
- Markdown explanations in notebooks
- Methodology justification
- Decision log for key choices

---

## 7. Tools and Technologies

### 7.1 Programming Languages
- **Python:** Primary language for analysis
  - pandas: Data manipulation
  - numpy: Numerical computing
  - scipy/statsmodels: Statistical analysis
  - scikit-learn: Machine learning
  - matplotlib/seaborn/plotly: Visualization

### 7.2 Development Environment
- **Jupyter Notebook:** Interactive analysis
- **VS Code:** Code development
- **Git/GitHub:** Version control

### 7.3 Computational Resources
- Local machines for development
- Cloud resources if needed for large-scale modeling

---

## 8. Timeline

| Week | Phase | Activities | Owner |
|------|-------|-----------|-------|
| **Week 4** | Data Prep & Initial EDA | Preprocessing validation, descriptive stats, initial visualizations | Nikhil Raj |
| **Week 5** | Advanced EDA & Modeling | Correlation analysis, time-series, model development | Nilesh Chakrabarty |
| **Week 6** | Analysis & Interpretation | Model evaluation, deep interpretation, documentation | Navnit Naman |

---

## References

See [research.md](research.md) for comprehensive literature review supporting this methodology.

---

**Document Owner:** Navnit Naman (naman394)  
**Phase:** Phase 2 - Analysis & Development  
**Target Marks:** Research Methodology (15/15)  
**Last Updated:** November 6, 2025  
**Status:** Active Implementation

