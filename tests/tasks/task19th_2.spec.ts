import { test,expect} from '@playwright/test';

test("Identify Employee EmailID - Pagination", async({page})=>{
     await page.goto ("https://app.thetestingacademy.com/playwright/tables/webtable");
    
     const NametoSearch = "Mia Hoffmann"

    while(true){
        const row = page.locator('#employees-tbody tr').filter({hasText:NametoSearch});
        if(await (row.count()) > 0) 
            {
            const getEmailID = await row.locator('[data-col="email"]').innerText();
            console.log(`${NametoSearch} has Email :  ${getEmailID}`);

            break;
            }
        else
        {
            const NextbuttonLocator = page.getByRole('button',{name:'Next '});
            if (await (NextbuttonLocator).isDisabled()) throw new Error("Row not found");
            await NextbuttonLocator.click();
        }
    }
}); 