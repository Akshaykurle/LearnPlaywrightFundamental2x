import { test, expect, Page } from "@playwright/test";
import path from "path";

test("login to QA Job and File download", async ({ page }) => {
    await page.goto("https://qajobfit.com/auth");
    await page.waitForTimeout(3000);
    const emailInput = page.getByPlaceholder("your.email@example.com");
    if (await emailInput.isVisible().catch(() => false)) {
        await emailInput.fill("my@gmail.com");
        await page.locator('input[type="password"]').fill("MyPass#");
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page.locator("//h2[text()='Dashboard']")).toBeVisible({ timeout: 120000 });
        await page.getByRole('link', { name: 'Resume Studio', exact: true }).click();
        const [staticDownload] = await Promise.all([
        page.waitForEvent('download'),
        page.locator("//button[contains(text(),'PDF')]").click()
    ]);

    const filepath = path.join("out", staticDownload.suggestedFilename());
    await staticDownload.saveAs(filepath);
}
});
