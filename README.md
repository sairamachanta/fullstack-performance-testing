# 🎯 Performance & Load Testing Suite (k6 + Lighthouse + ReqRes.in)

Enterprise-grade performance testing framework demonstrating backend scalability and frontend user experience audits.

## 🚀 Overview
This project proves that performance testing is a specialist skill. It uses **k6** for backend API performance and **Lighthouse** for frontend performance metrics, tracking Core Web Vitals and defining strict pass/fail thresholds.

## 📁 Project Structure
```text
performance-load-testing-suite/
├── .github/workflows/      ← CI/CD pipeline
├── k6/
│   ├── scenarios/          ← Load, Stress, Spike, Soak tests
│   ├── endpoints/          ← Reusable API call helpers
│   ├── thresholds/         ← Pass/fail performance gates
│   └── utils/              ← Helpers & Test Data
├── lighthouse/
│   ├── audits/             ← Page-specific performance audits
│   ├── config/             ← Lighthouse thresholds
│   └── reports/            ← Generated audit results
├── reports/                ← Centralised reports directory
└── config/                 ← Environment configurations
```

## 🧪 Test Scenarios

| Scenario | Simulation | VUs | Duration |
| :--- | :--- | :--- | :--- |
| **Load Test** | Normal expected traffic | 50 VUs | 5 mins |
| **Stress Test** | Beyond normal — find breaking point | 0 → 200 VUs | 10 mins |
| **Spike Test** | Sudden traffic burst | 0 → 300 VUs | 2 mins |
| **Soak Test** | Sustained load over time (memory leaks) | 50 VUs | 30 mins |

## 📊 VU Ramping (Stress Test)
```text
    VUs
    200 |           _______
        |          /       \
    100 |     ____/         \____
        |    /                   \
     50 |___/                     \___
        |_______________________________
                Time (10 mins)
```

## 🛑 Performance Thresholds (Quality Gates)
We define strict criteria in `k6/thresholds/thresholds.config.js`:
- `p(95) < 1000ms`: 95% of requests must be under 1 second.
- `p(99) < 2000ms`: 99% of requests must be under 2 seconds.
- `Error Rate < 1%`: Reliability is key.
- `RPS > 10`: Minimum throughput target.

## 💡 Lighthouse Core Web Vitals
| Metric | Measure | Target |
| :--- | :--- | :--- |
| **LCP** | Loading Speed | < 2.5s |
| **FCP** | First Paint | < 1.8s |
| **CLS** | Visual Stability | < 0.1 |
| **TTI** | Time to Interactive | < 3.8s |
| **TBT** | Thread Blocking | < 200ms |

## 🛠 Setup & Run

### Prerequisites
- [k6](https://k6.io/docs/getting-started/installation/)
- [Node.js](https://nodejs.org/)

### Installation
```bash
npm install
```

### Running Tests
```bash
# Backend - k6
npm run k6:load
npm run k6:stress

# Frontend - Lighthouse
npm run lighthouse:homepage
```

## 📈 Reporting
- **k6 Reports**: HTML reports with graphs are generated in `reports/k6/`.
- **Lighthouse Reports**: HTML reports are generated in `reports/lighthouse/`.

---
*Developed as a high-visibility portfolio project for QA/SDET roles.*
