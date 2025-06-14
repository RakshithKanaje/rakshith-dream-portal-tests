# Rakshith QA: Dream Portal Automated Test Suite

This repository contains an end-to-end functional and AI-enhanced test suite for the Dream Portal UI, built using Playwright and an offline Naive Bayes classifier. The suite tests the homepage, dream diary, and summary pages, and includes bonus AI-based validation — without any API key or billing requirement.

------------------------------------------------------------

🚀 Project Structure

rakshith-qa-project/
├── pages/
│   ├── home.page.ts         # Homepage Page Object Model
│   ├── diary.page.ts        # Diary table POM
│   └── total.page.ts        # Summary page POM
├── tests/
│   └── specs/
│       ├── home.spec.ts     # Homepage test
│       ├── diary.spec.ts    # Diary test with AI validation
│       └── total.spec.ts    # Summary stats test
├── utils/
│   └── ai-validator.ts      # Offline ML logic using Naive Bayes (natural)
├── screenshots/
│   └── allure_report.png    # Visual proof of Allure report
├── .gitignore
├── playwright.config.ts
├── tsconfig.json
└── README.md

------------------------------------------------------------

🛠 Setup Instructions

1. Install dependencies
   npm install
   npx playwright install

2. Run All Tests
   npx playwright test --headed

3. Run Individual Tests (with browser)
   npx playwright test tests/specs/home.spec.ts --headed
   npx playwright test tests/specs/diary.spec.ts --headed
   npx playwright test tests/specs/total.spec.ts --headed

------------------------------------------------------------

🤖 AI-Based Dream Classification

- diary.spec.ts uses a trained offline model (Naive Bayes via natural)
- It classifies each dream as "Good" or "Bad" based on learned patterns
- Compared against the Dream Type column in the UI
- Fully implemented in utils/ai-validator.ts
- No internet or OpenAI API required ✅

------------------------------------------------------------

✅ Test Coverage

Page            | Coverage Details
----------------|------------------------------------------------------------
Homepage        | Loader wait, “MY DREAMS” button, tab open logic
Dream Diary     | Validates 10 dreams, types, and AI-based classification
Summary Page    | Checks Good/Bad/Total/Recurring stats and dream names

------------------------------------------------------------

📊 Allure Report (Optional)

1. Install Allure Reporter
   npm install -D allure-playwright

2. Run Tests with Allure Reporter
   npx playwright test --reporter=line,allure-playwright

3. Generate HTML Report
   allure generate ./allure-results --clean -o ./allure-report

4. Open the Report
   allure open ./allure-report

------------------------------------------------------------

🖼️ Allure Report Screenshot

All 3 test cases passed successfully with 100% coverage.

(Screenshot stored at: screenshots/allure_report.png)

------------------------------------------------------------

👨‍💻 Author

Rakshith V — 2025 QA Internship Assignment

------------------------------------------------------------

🧠 Pro Tip

Use this to debug tests visually:
npx playwright test tests/specs/home.spec.ts --debug

------------------------------------------------------------

Happy Testing 🚀
