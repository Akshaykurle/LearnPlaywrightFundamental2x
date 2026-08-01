import { test, expect } from "@playwright/test";
import path from 'path';

test("login to testing academy and profile photo upload", async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/login");
        await page.waitForTimeout(5000);
        const emailInput = page.getByPlaceholder("Enter your email address");
        if (await emailInput.isVisible().catch(() => false)) {
            await emailInput.fill("My@gmail.com");
            await page.getByPlaceholder("Enter your password").fill("MyPass#");
            await page.getByRole('button', { name: 'Continue', exact: true }).click();
            await page.waitForFunction(
                () => !window.location.href.includes("/login"),
                null,
                { timeout: 120000 }                
            );
    
            await page.getByRole('link', { name: 'Settings' }).click();
        
        await page.waitForTimeout(2000);
        const filepath = path.join(__dirname, 'Akshay_Kurle_IDSize_Photo.jpg');
        console.log("File Path", filepath);
        await page.getByRole('button', { name: 'Dismiss' }).click();

        await expect(page.locator("//h1")).toHaveText('Profile & Settings');
        await page.waitForTimeout(1500);
        await page.setInputFiles("label[for^='avatar']", filepath);
        await page.click("label[for^='avatar']");

    }
});
