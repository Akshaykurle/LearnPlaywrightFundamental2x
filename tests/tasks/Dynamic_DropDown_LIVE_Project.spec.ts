import { expect, test } from '@playwright/test';

test('Verify Element by Filter', async ({ page }) => {
    await page.goto("https://www.spicejet.com/");
    // await page.pause()
    await page.getByTestId('one-way-radio-button').click();
    await page.getByTestId('to-testID-origin').getByRole('textbox').fill('De');
    await page.locator('div').filter({ hasText: /^Delhi$/ }).first().click()
    await page.waitForTimeout(5000);
    // await page.pause()
    
    await page.getByTestId('to-testID-destination').getByRole('textbox').fill('Ban');
    await page.locator('div').filter({ hasText: /^Bengaluru$/ }).first().click();
    const Departure = await page.getByTestId('departure-date-dropdown-label-test-id');
    await page.locator('div').filter({ hasText: /^31$/ }).nth(1).click();
    await page.getByTestId('home-page-travellers').getByText('Passengers');
    await page.locator('div').filter({ hasText: /^1 Adult$/ }).first().click();
    // await page.pause()
    await page.getByTestId('Adult-testID-plus-one-cta').click();
    await page.locator('div').filter({ hasText: /^2 Adults$/ }).first();
    // Sawait page.waitForTimeout(5000);
    await page.getByTestId('home-page-flight-cta').click();
    // await page.pause()
    await page.locator('#list-results-section-0');

let SelectyourDeparturetoBengaluru = await page.locator('#list-results-section-0');
console.log(SelectyourDeparturetoBengaluru);
}); 