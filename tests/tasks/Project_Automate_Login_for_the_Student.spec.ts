import { test, expect } from '@playwright/test';


test('Student Login', async ({ page }) => {

    await page.goto ('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("student@thetestingacademy.com").fill("whyyyy@gmail.com");
    await page.getByLabel("password").fill ("Whyyy@123");
    await page.getByText("Remember me").click();
    await page.getByTestId('login-button').click();
    console.log(await page.url())
    await expect(page).toHaveURL(/#login-success/)


});