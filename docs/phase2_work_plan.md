# Phase 2: Work Plan - Consistency and Division of Work

## Team Member Responsibilities

### 🔧 Navnit Naman
**Primary Focus: Research Methodology**

**Responsibilities:**
- Design and document comprehensive research methodology
- Literature review and theoretical framework validation
- Methodology justification and adaptation strategy
- Integration of findings across all work streams

**Deliverables:**
- Research methodology documentation
- Literature-backed analytical framework
- Methodology validation report
- Cross-functional integration document

---

### 🏛️ Nilesh Chakrabarty
**Primary Focus: Predictive/Descriptive Analysis**

**Responsibilities:**
- Conduct sophisticated descriptive statistical analysis
- Model selection, training, and validation
- Performance evaluation and comparison
- Deep interpretation of analytical results
- Discussion of broader implications

**Deliverables:**
- Predictive models (trained and validated)
- Descriptive analysis reports
- Model performance documentation
- Interpretation and implications report

---

### 🌿 Nikhil Raj
**Primary Focus: Exploratory Data Analysis (EDA)**

**Responsibilities:**
- Comprehensive exploratory data analysis
- Novel visualization development
- Statistical summaries and pattern identification
- Correlation analysis (pollutants, GDP, health)
- Time-series analysis and trend identification
- Seasonal variation analysis
- Actionable insights generation

**Deliverables:**
- Comprehensive EDA notebooks
- Novel visualizations and charts
- Statistical analysis reports
- Insights document guiding subsequent analysis

---

## Workflow Integration

```
┌─────────────────────────────────────────────────────────────┐
│              Phase 2: Analysis & Development                 │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌──────────────────────────────────────┐
        │   Cleaned Dataset (17,622 records)   │
        └──────────────────────────────────────┘
                              │
                 ┌────────────┴────────────┐
                 │                         │
                 ▼                         ▼
    ┌─────────────────────┐   ┌──────────────────────┐
    │   EDA (Nikhil Raj)  │   │  Research Methodology│
    │  - Novel visuals    │   │  (Navnit Naman)      │
    │  - Correlations     │   │  - Framework design  │
    │  - Trends           │   │  - Validation        │
    └─────────────────────┘   └──────────────────────┘
                 │                         │
                 └────────────┬────────────┘
                              ▼
              ┌────────────────────────────┐
              │  Predictive/Descriptive    │
              │  Analysis                  │
              │  (Nilesh Chakrabarty)      │
              │  - Model development       │
              │  - Deep interpretation     │
              └────────────────────────────┘
                              │
                              ▼
              ┌────────────────────────────┐
              │   Phase 2 Deliverables     │
              │   - EDA report (25 marks)  │
              │   - Methodology (15 marks) │
              │   - Analysis (50 marks)    │
              └────────────────────────────┘
```

---

## Collaboration Points

### Weekly Integration Meetings
- **Monday**: Review progress and align on methodology
- **Wednesday**: Share insights and preliminary findings
- **Friday**: Integration sync and documentation review

### Shared Responsibilities
- Code reviews for all notebooks and scripts
- Documentation quality checks
- Cross-validation of findings
- Peer feedback on interpretations

### Communication Channels
- **Technical Discussions**: GitHub Issues and Pull Requests
- **Quick Updates**: Team chat
- **Detailed Reviews**: Weekly meetings with mentor
