import { test, expect } from "@playwright/test";

test("Hover", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    // await page.pause();

    await page.getByTestId("nav-add-ons").hover();
    await page.getByTestId("test-id-Wifi").click();
    // await page.pause();


    const menuitems: String[] = await page.locator('[data-testid="nav-add-ons"] .submenu .submenu-item').allInnerTexts();

        console.log(menuitems);

});