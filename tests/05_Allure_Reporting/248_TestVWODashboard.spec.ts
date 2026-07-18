import { test, expect } from "@playwright/test";

test.use({
    storageState: "./user-session.json"
});

test.describe("VWO — session reuse", () => {

    test("go directly to dashboard — no login @P0 @smoke", async ({ page }, testInfo) => {

        await test.step("Launch browser and navigate to VWO dashboard", async () => {
            await page.goto("https://app.wingify.com/#/dashboard/get-started?accountId=1227004");
            console.log("Step 1: Navigated to VWO dashboard URL");
            await testInfo.attach("step-0-dashboard-loaded", {
                body: await page.screenshot(),
                contentType: "image/png",
            });
        });

        await test.step("Wait for dashboard page to fully load", async () => {
            await page.waitForLoadState("networkidle");
            console.log("Step 2: Dashboard page fully loaded (networkidle)");
            await testInfo.attach("step-1-page-loaded", {
                body: await page.screenshot(),
                contentType: "image/png",
            });
        });

        await test.step("Verify dashboard URL contains /dashboard", async () => {
            await expect(page).toHaveURL(/dashboard/);
            console.log(`Step 3: URL verified — ${page.url()}`);
            await testInfo.attach("step-2-url-verified", {
                body: await page.screenshot(),
                contentType: "image/png",
            });
        });

        await test.step("Verify dashboard heading is visible", async () => {
            const heading = page.locator("h1, h2, [class*='heading'], [class*='title']").first();
            await expect(heading).toBeVisible();
            console.log("Step 4: Dashboard heading is visible");
            await testInfo.attach("step-3-heading-visible", {
                body: await page.screenshot(),
                contentType: "image/png",
            });
        });

        await test.step("Capture final dashboard state", async () => {
            await testInfo.attach("step-4-final-state", {
                body: await page.screenshot({ fullPage: true }),
                contentType: "image/png",
            });
            console.log("Step 5: Final dashboard screenshot captured");
        });
    });

    test("go directly to settings — no login @P1 @regression", async ({ page }, testInfo) => {

        await test.step("Launch browser and navigate to VWO account settings", async () => {
            await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227007");
            console.log("Step 1: Navigated to VWO settings URL");
            await testInfo.attach("step-0-settings-loaded", {
                body: await page.screenshot(),
                contentType: "image/png",
            });
        });

        await test.step("Wait for settings page to fully load", async () => {
            await page.waitForLoadState("networkidle");
            console.log("Step 2: Settings page fully loaded (networkidle)");
            await testInfo.attach("step-1-page-loaded", {
                body: await page.screenshot(),
                contentType: "image/png",
            });
        });

        await test.step("Verify settings URL contains /settings", async () => {
            await expect(page).toHaveURL(/settings/);
            console.log(`Step 3: URL verified — ${page.url()}`);
            await testInfo.attach("step-2-url-verified", {
                body: await page.screenshot(),
                contentType: "image/png",
            });
        });

        await test.step("Verify account settings section is visible", async () => {
            const settingsSection = page.locator("[class*='settings'], [class*='account'], [class*='general']").first();
            await expect(settingsSection).toBeVisible();
            console.log("Step 4: Account settings section is visible");
            await testInfo.attach("step-3-section-visible", {
                body: await page.screenshot(),
                contentType: "image/png",
            });
        });

        await test.step("Capture final settings state", async () => {
            await testInfo.attach("step-4-final-state", {
                body: await page.screenshot({ fullPage: true }),
                contentType: "image/png",
            });
            console.log("Step 5: Final settings screenshot captured");
        });
    });
});
