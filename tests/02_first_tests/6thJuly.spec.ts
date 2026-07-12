import { test, expect } from '@playwright/test';

test( 'Context1 For TTACART And & Context2  For TTABANK', async ( { browser } ) => {

    let context1 = await browser.newContext();
    let page1 = await context1.newPage();
    await page1.goto( 'https://app.thetestingacademy.com/playwright/ttacart/' );
    console.log( "Context1: TTACART " );

    let context2 = await browser.newContext();
    let page2 = await context2.newPage();
    await page2.goto( 'https://tta-bank-digital-973242068062.us-west1.run.app/' );
    console.log( "Context2 TTABANK" );

    await context1.close();
    await context2.close();

} );