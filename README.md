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
├── 03_Locators_Commands/
│   ├── 238_LS.spec.ts                      # Basic page.goto() navigation
│   ├── 239_Project_VWO_Login.spec.ts       # CSS selectors, fill, click, auto-wait
│   ├── 240_Xpath.spec.ts                   # XPath locators (placeholder)
│   ├── 241_Project_3_Singup_VWO.spec.ts    # XPath locators, .first(), .textContent()
│   ├── 242_Project_3_Singup_VWO_PW_Locator.spec.ts  # getByRole(), .check(), modern locators
│   ├── 243_PW_Command.spec.ts              # goto() waitUntil options
│   ├── 244_Refere_PW.spec.ts               # Custom referer, page.title(), toHaveURL()
│   ├── 245_GetByRole_PW.spec.ts            # getByRole("link") locator
│   └── 246_PressSeq.spec.ts                # pressSequentially() & goBack()
├── 04_Session_Storage/
│   ├── 247_SessionStorage.spec.ts          # Save browser session to JSON file
│   └── 249_TestVWODashboard_NoCustomReport.spec.ts  # Reuse session — skip login
├── 05_Allure_Reporting/
│   └── 248_TestVWODashboard.spec.ts        # test.step() with attachments & screenshots
├── 06_Multiple_Element/
│   ├── 250_Multi_Element.spec.ts           # Loop through elements, allInnerTexts(), all()
│   └── 251_Multi_Element_Direct.spec.ts    # getByTestId() for unique element targeting
├── 07_WebTables/
│   ├── 252_WebTables_Dynamic_Xpath.spec.ts         # Dynamic XPath for web table traversal
│   ├── 253_WebTable_Dynamic.spec.ts                # Structured row extraction with allInnerTexts()
│   ├── 254_Filter_PageLoc.spec.ts                  # filter({ hasText }) on lists + toHaveCount()
│   ├── 255_WebTable_Xapth.spec.ts                  # XPath preceding-sibling checkbox, tr:has(td)
│   ├── 256_WebTable_Xapth_Pagination.spec.ts       # Pagination loop + email/country extraction
│   ├── 257_WebTable_Xapth_Pagination.spec.ts       # Loop page-N buttons, collect emails
│   └── 258_WebTable_Xapth_Pagination_Fn.spec.ts    # Reusable findRowByName() helper
├── 08_Web_Select_Frames_Iframe/
│   ├── 259_Select.spec.ts                          # selectOption() on native <select>
│   ├── 260_Custom_DD_Select.spec.ts                # Custom dropdown via getByRole('option')
│   └── 261_Advance_Select_Pro.spec.ts              # React-select: single, multi, creatable, async
├── 09_Frame_Iframe/
│   ├── 262_Iframe.spec.ts                          # frameLocator() fill/select/submit in iframe
│   ├── 263_frameSet.spec.ts                        # Frameset frames via [name], enumerate frames
│   └── 264_Iframe_part2.spec.ts                    # Nested iframes chained via frameLocator()
├── 10_Keyboard_Hover_Drag_Drop/
│   ├── 265_Keyboard.spec.ts                        # keyboard.press()/down()/up() + screenshots
│   ├── 266_SpiceJet_Hover.spec.ts                  # .hover() to reveal submenu
│   ├── 267_Drag_Drop.spec.ts                       # dragTo() between elements (the-internet)
│   ├── 268_Advance_Drag_Drop.spec.ts               # dragTo() across kanban columns + manual mouse
│   └── 269_Context_Menu.spec.ts                    # Right-click (button: 'right'), read options
├── 11_JS_Alerts/
│   └── 270_JS.spec.ts                              # JS dialogs: page.on('dialog') accept/dismiss/prompt
├── 12_Handle_SVG/
│   ├── 271_SVG.spec.ts                             # Click SVG search icon + result titles (Flipkart)
│   ├── 272_SVG_Practice.spec.ts                    # SVG shapes: click circle, read bar attributes
│   └── 273_Advance_SVG.spec.ts                     # India map SVG paths via name()=svg
├── 13_Shadow_DOM/
│   └── 274_Shadow_DOM.spec.ts                      # Pierce open Shadow DOM via getByTestId
├── 14_FileUpload/
│   ├── 275_File_Upload.spec.ts                     # setInputFiles() with a real file path
│   └── 276_Multiple_File_Upload.spec.ts            # setInputFiles() with in-memory buffers
├── 15_File_Download/
│   └── 277_File_Download.spec.ts                   # waitForEvent('download') + saveAs()
├── 16_Scroll_toElement/
│   └── 278_ScrollToView.spec.ts                    # scrollIntoViewIfNeeded() + expect.poll lazy list
└── tasks/
    ├── Project_Automate_Login_for_the_Student.spec.ts  # Practice: login automation
    ├── Project_OrageHRM Webtable.spec.ts               # Web table traversal with dynamic XPath on OrangeHRM
    ├── Dynamic_DropDown_LIVE_Project.spec.ts           # SpiceJet search: dynamic dropdown via filter(hasText)
    ├── task19th_1.spec.ts                              # Webtable row filter -> employee country
    ├── task19th_2.spec.ts                              # Paginated webtable: find employee email
    ├── task_22.spec.ts                                 # Hover submenu + allInnerTexts()
    ├── task_24th.spec.ts                               # Flipkart SVG search, parse & sort prices
    ├── task27th.spec.ts                                # India map: click Sikkim by class INSK
    ├── task29th_upload.spec.ts                         # TTA login + profile photo upload
    └── task29_download.spec.ts                         # QA Job login + PDF download
        └── Akshay_Kurle_IDSize_Photo.jpg               # Test asset used by task29th_upload

Utils/
└── CustomReporter.ts                       # Custom HTML reporter (TTA Report)
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
| 247 | `247_SessionStorage.spec.ts` | Save session state (`storageState()`) to JSON for reuse |
| 248 | `248_TestVWODashboard.spec.ts` | `test.step()` with `attach()` screenshots & priority tags |
| 249 | `249_TestVWODashboard_NoCustomReport.spec.ts` | Reuse saved session — skip login via `storageState` |
| 250 | `250_Multi_Element.spec.ts` | `.all()`, `.allInnerTexts()`, loop & click matching element |
| 251 | `251_Multi_Element_Direct.spec.ts` | `getByTestId()` for direct unique element targeting |
| 252 | `252_WebTables_Dynamic_Xpath.spec.ts` | Dynamic XPath construction for web table cell traversal |
| 253 | `253_WebTable_Dynamic.spec.ts` | Structured row extraction with `allInnerTexts()` |
| 254 | `254_Filter_PageLoc.spec.ts` | `filter({ hasText })` to narrow list items + `toHaveCount()` |
| 255 | `255_WebTable_Xapth.spec.ts` | XPath `preceding-sibling` checkbox + `tr:has(td:text())` |
| 256 | `256_WebTable_Xapth_Pagination.spec.ts` | Pagination loop via `next-page` + email/country extraction |
| 257 | `257_WebTable_Xapth_Pagination.spec.ts` | Loop `page-N` buttons, collect emails with `allInnerTexts()` |
| 258 | `258_WebTable_Xapth_Pagination_Fn.spec.ts` | Reusable `findRowByName()` helper for paginated tables |
| 259 | `259_Select.spec.ts` | `selectOption()` on a native `<select>` dropdown |
| 260 | `260_Custom_DD_Select.spec.ts` | Custom (non-`<select>`) dropdown via `getByRole('option')` |
| 261 | `261_Advance_Select_Pro.spec.ts` | React-select: single, multi-chip, creatable, async search |
| 262 | `262_Iframe.spec.ts` | `frameLocator()` for fill/select/submit inside an iframe |
| 263 | `263_frameSet.spec.ts` | Frameset: target frames by `[name]`, enumerate `<frame>` elements |
| 264 | `264_Iframe_part2.spec.ts` | Nested iframes chained `frameLocator().frameLocator()` |
| 265 | `265_Keyboard.spec.ts` | `keyboard.press()` / `down()` / `up()` with screenshots |
| 266 | `266_SpiceJet_Hover.spec.ts` | `.hover()` to reveal a submenu before clicking |
| 267 | `267_Drag_Drop.spec.ts` | `dragTo()` between two elements (the-internet) |
| 268 | `268_Advance_Drag_Drop.spec.ts` | `dragTo()` across kanban columns + manual mouse-path fallback |
| 269 | `269_Context_Menu.spec.ts` | Right-click (`button: 'right'`), read `allInnerTexts()`, select option |
| 270 | `270_JS.spec.ts` | JS dialogs: `page.on('dialog')` accept / dismiss / prompt |
| 271 | `271_SVG.spec.ts` | Click SVG search icon + XPath result titles (Flipkart) |
| 272 | `272_SVG_Practice.spec.ts` | SVG shapes: click circle, read `data-quarter` / `height` bars |
| 273 | `273_Advance_SVG.spec.ts` | India map SVG: iterate `<path class="sm_state">` via `name()` |
| 274 | `274_Shadow_DOM.spec.ts` | Pierce open Shadow DOM with `getByTestId`, incl. nested hosts |
| 275 | `275_File_Upload.spec.ts` | `setInputFiles()` with a real file path |
| 276 | `276_Multiple_File_Upload.spec.ts` | `setInputFiles()` with in-memory buffer payloads |
| 277 | `277_File_Download.spec.ts` | `waitForEvent('download')` + `saveAs()` |
| 278 | `278_ScrollToView.spec.ts` | `scrollIntoViewIfNeeded()` + `expect.poll` on lazy-loaded list |
| - | `Project_OrageHRM Webtable.spec.ts` | Web table traversal on OrangeHRM: dynamic XPath + `allInnerTexts()` loop |
| - | `Dynamic_DropDown_LIVE_Project.spec.ts` | SpiceJet flight search with dynamic dropdown via `filter({ hasText })` |
| - | `task19th_1.spec.ts` | Webtable row filter to read an employee's country |
| - | `task19th_2.spec.ts` | Paginated webtable: find an employee's email across pages |
| - | `task_22.spec.ts` | Hover submenu and collect `allInnerTexts()` |
| - | `task_24th.spec.ts` | Flipkart SVG search, parse & sort prices to find the lowest |
| - | `task27th.spec.ts` | India map: click Sikkim by matching class `INSK` |
| - | `task29th_upload.spec.ts` | Testing Academy login + profile photo upload via `setInputFiles` |
| - | `task29_download.spec.ts` | QA Job login + PDF download via the `download` event |

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

### Session Storage & Reuse

- **Save session** — `context.storageState({ path })` saves cookies + localStorage to a JSON file
- **Reuse session** — `test.use({ storageState: './user-session.json' })` loads saved state, skipping login

### Handling Multiple Elements

- **`.all()`** — Returns array of `Locator` objects for iteration
- **`.allInnerTexts()`** — Returns array of text content from all matched elements
- **`getByTestId()`** — Target a single element via `data-testid` attribute

### Web Table Traversal

- Dynamic XPath construction to iterate rows/columns programmatically
- `allInnerTexts()` on `tr > td` for structured row data extraction
- `filter({ hasText })` to target a specific row, `preceding-sibling::td` for related cells
- Pagination loops: click `next-page`/`page-N` until the row is found (`row.count()` / `isDisabled()`)

### Select & Dropdowns

- **Native `<select>`** — `selectOption(selector, 'Option 2')` / value / label
- **Custom dropdowns** — open trigger, then `getByRole('option', { name })`
- **React-select** — single searchable, multi-chip (remove with `Escape`), creatable, and async (`rs-async`) variants

### Frames & Iframes

- **`frameLocator()`** — target `#frame-one`, `[name="main"]`, `[name="side"]` and scope locators inside
- **Nested frames** — chain `frame1.frameLocator('#pact2').frameLocator('#pact3')`
- **Frameset** — enumerate `<frame>` elements with `.all()` + `getAttribute('name')`

### Keyboard, Mouse & Drag-and-Drop

- `keyboard.press()`, `keyboard.down()`, `keyboard.up()` (e.g. `Shift+O`)
- `.hover()` to reveal submenus, then click
- `dragTo()` between elements; manual `page.mouse.move/down/up()` path for finicky DnD
- Right-click with `click({ button: 'right' })` + read context-menu options

### JS Alerts & Dialogs

- Register `page.on('dialog')` (or `page.once`) **before** triggering the dialog
- `dialog.accept()` / `dialog.dismiss()` / `dialog.accept(inputText)` for prompt input
- Verify `dialog.type()` and `dialog.message()`, assert the post-dialog `#result` text

### SVG Handling

- Click SVG elements directly (`page.locator('svg').first()`) for search icons
- Iterate SVG shapes with `.all()` and read attributes (`data-quarter`, `height`)
- For SVG maps use `//*[name()='svg']//*[name()='path' and contains(@class,'sm_state')]`

### Shadow DOM

- Playwright pierces **open** shadow roots automatically — use `getByTestId` on the host element
- Supports nested shadow hosts (`nested-host` -> `card-inside-*`)

### File Upload / Download

- **Upload** — `setInputFiles()` with a real path or with `{ name, mimeType, buffer }` payloads
- **Download** — `Promise.all([page.waitForEvent('download'), trigger.click()])` then `download.saveAs(path)`

### Scrolling

- `scrollIntoViewIfNeeded()` auto-scrolls before interaction
- `page.evaluate(() => window.scrollBy/scrollTo(...))` for manual control
- `expect.poll()` to wait until lazy-loaded content grows past an initial count

### Custom Reporter

- `Utils/CustomReporter.ts` — Full HTML reporter with step-level screenshots, video playback, and real-time refresh

> **Note:** Files 232, 233, 234, and 247 are standalone scripts (import from `playwright`, not `@playwright/test`). They have `.ts` extension (not `.spec.ts`) so the test runner skips them. Run with `npx ts-node <filename>` directly.

## Configuration

The Playwright config (`playwright.config.ts`) is set up for learning:

- **Headed mode** — browser is always visible
- **Tracing** — always on
- **Screenshots** — always captured
- **Video** — always recorded
- **Browser** — Chromium only (others commented out)

## Contributing

Contributions are welcome! If you'd like to contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-feature`)
3. **Commit** your changes (`git commit -m 'Add new feature'`)
4. **Push** to the branch (`git push origin feature/new-feature`)
5. **Open** a Pull Request

### Guidelines

- Follow existing code style and naming conventions
- Add test files in the appropriate numbered folder (e.g., `01 Basics/`, `02_first_tests/`)
- Use sequential numbering for new test files (254, 255, ...)
- Include descriptive comments explaining the concept being demonstrated
- Update the README.md project structure and learning progression table when adding new files

## License

ISC
