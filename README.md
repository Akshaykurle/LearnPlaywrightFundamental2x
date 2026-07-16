# Learn Playwright Fundamentals 2X

A hands-on learning project covering Playwright Test fundamentals, progressing from basic tests to Browser-Context-Page (BCP) architecture and advanced context configuration.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test 235_TEST_I_PW

# Run in headed mode (visible browser)
npx playwright test --headed

# Run with specific browser
npx playwright test --project=chromium
```

## Project Structure

```
tests/
├── example.spec.ts                         # Basic title verification
├── Template.spec.ts                        # Blank template for new tests
├── 01 Basics/
│   ├── 229_Basic_Test.spec.ts              # Fundamentals: goto + toHaveTitle
│   └── 230_Test_Annoations.spec.ts         # Annotations: skip, only, fail, slow
├── 02_first_tests/
│   ├── 231_First_Running_Verify.spec.ts    # Locators & visibility assertions
│   ├── 232_BCP.ts                          # Browser-Context-Page hierarchy
│   ├── 233_BCP_MultipeContext.ts           # Multiple contexts = multiple users
│   ├── 234_BCP_Multiple_Pages.ts           # Multiple pages (tabs) per context
│   ├── 235_TEST_I_PW.spec.ts               # Playwright Test isolation & fill/click
│   ├── 236_BCP_TEST_PW.spec.ts             # Manual multi-user with browser fixture
│   ├── 237_BCP_Test_Options.spec.ts        # Context options: viewport, locale, mobile
│   └── 6thJuly.spec.ts                     # Multi-context with different apps
└── 03_Locators_Commands/
    ├── 238_LS.spec.ts                      # Basic page.goto() navigation
    ├── 239_Project_VWO_Login.spec.ts       # CSS selectors, fill, click, auto-wait
    ├── 240_Xpath.spec.ts                   # XPath locators (placeholder)
    ├── 241_Project_3_Singup_VWO.spec.ts    # XPath locators, .first(), .textContent()
    ├── 242_Project_3_Singup_VWO_PW_Locator.spec.ts  # getByRole(), .check(), modern locators
    ├── 243_PW_Command.spec.ts              # goto() waitUntil options
    ├── 244_Refere_PW.spec.ts               # Custom referer, page.title(), toHaveURL()
    ├── 245_GetByRole_PW.spec.ts            # getByRole("link") locator
    └── 246_PressSeq.spec.ts                # pressSequentially() & goBack()
```

## Learning Progression

| # | File | Concept |
|---|------|---------|
| 229 | `229_Basic_Test.spec.ts` | Most basic test: `page.goto()` + `expect().toHaveTitle()` |
| 230 | `230_Test_Annoations.spec.ts` | Test annotations: `skip`, `only`, `fail`, `slow`, conditional skip |
| 231 | `231_First_Running_Verify.spec.ts` | Locator by CSS ID (`#id`) + `toBeVisible()` assertion |
| 232 | `232_BCP.ts` | Browser -> Context -> Page hierarchy (standalone script) |
| 233 | `233_BCP_MultipeContext.ts` | Multiple contexts for multi-user simulation (standalone script) |
| 234 | `234_BCP_Multiple_Pages.ts` | Multiple pages (tabs) sharing cookies in one context (standalone script) |
| 235 | `235_TEST_I_PW.spec.ts` | Playwright Test auto-isolation + `fill()` / `click()` |
| 236 | `236_BCP_TEST_PW.spec.ts` | Using `{ browser }` fixture for manual multi-user control |
| 237 | `237_BCP_Test_Options.spec.ts` | Context options: viewport, locale, geolocation, mobile emulation |
| 238 | `238_LS.spec.ts` | Basic `page.goto()` navigation |
| 239 | `239_Project_VWO_Login.spec.ts` | CSS selectors, `fill()`, `click()`, auto-wait, `toContainText()` |
| 240 | `240_Xpath.spec.ts` | XPath locators (placeholder) |
| 241 | `241_Project_3_Singup_VWO.spec.ts` | XPath locators, `.first()`, `.textContent()`, form validation |
| 242 | `242_Project_3_Singup_VWO_PW_Locator.spec.ts` | `getByRole()`, `.check()`, modern Playwright locators |
| 243 | `243_PW_Command.spec.ts` | `goto()` waitUntil options: commit, domcontentloaded, load, networkidle |
| 244 | `244_Refere_PW.spec.ts` | Default `goto()`, `page.title()`, `toHaveURL()`, custom referer |
| 245 | `245_GetByRole_PW.spec.ts` | `getByRole("link")` with name & disabled options |
| 246 | `246_PressSeq.spec.ts` | `pressSequentially()` with delay, `goBack()` navigation |

## Key Concepts

### Browser-Context-Page (BCP) Hierarchy

- **Browser** — The heaviest object. Launch once and reuse.
- **Context** — An isolated browser session (fresh cookies, storage). Each test gets its own context automatically.
- **Page** — A single tab within a context. One or more pages can exist per context.

### Playwright Test Isolation

Each `test()` block receives a fresh `page` fixture in a fresh `context`, ensuring zero shared state between tests by default.

### Locators & Commands

- **CSS Selectors** — `page.locator('#id')`, `page.locator('.class')`, `page.locator('[name=value]')`
- **XPath** — `page.locator("//button[@data-qa='submit']")`, `.first()` to disambiguate
- **Playwright Recommended** — `page.getByRole('textbox')`, `page.getByRole('button')`, `page.getByRole('link')`
- **Actions** — `fill()`, `click()`, `check()`, `pressSequentially()`, `goBack()`
- **Navigation** — `goto()` with `waitUntil` options (`commit`, `domcontentloaded`, `load`, `networkidle`) and `referer`

> **Note:** Files 232, 233, and 234 are standalone scripts (import from `playwright`, not `@playwright/test`). They have `.ts` extension (not `.spec.ts`) so the test runner skips them. Run with `npx ts-node <filename>` directly.

## Configuration

The Playwright config (`playwright.config.ts`) is set up for learning:

- **Headed mode** — browser is always visible
- **Tracing** — always on
- **Screenshots** — always captured
- **Video** — always recorded
- **Browser** — Chromium only (others commented out)

## License

ISC
