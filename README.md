# 🎭 Playwright Learning Journey

> **Purpose:** Personal logbook and architecture record for mastering Playwright E2E testing.  
> **Status:** 🚧 Done

This repository is not a tutorial. It is a documented record of my progress, decisions, and final architecture while learning Playwright.

---

## 🏗 Final Architecture

The goal is to maintain a scalable, clean structure. This is the target layout I am building towards:

```text
.
├── tests/                  # Test suites (organized by feature)
│   ├── auth/               # Login, logout, registration
│   ├── dashboard/          # Main app features
│   └── api/                # API validation tests
├── pages/                  # Page Object Models (POM)
│   ├── login.page.ts
│   └── dashboard.page.ts
├── utils/                  # Helpers (fixtures, data generators)
├── data/                   # Test data (JSON fixtures)
├── playwright.config.ts    # Central configuration
└── .github/                # CI/CD workflows & PR templates