import { test, expect } from "@playwright/test";


test.describe("Sikking State Selection", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://simplemaps.com/svg/country/in");
    });

    test("Open Map find the Sikkim and click", async ({ page }) => {
        const StateNames = {
            INAN: "Andaman and Nicobar",
            INAP: "Andhra Pradesh",
            INAR: "Arunachal Pradesh",
            INAS: "Assam",
            INBR: "Bihar",
            INCH: "Chandigarh",
            INCT: "Chhattisgarh",
            INDH: "Dādra and Nagar Haveli and Damān and Diu",
            INDL: "Delhi",
            INGA: "Goa",
            INGJ: "Gujarat",
            INHP: "Himachal Pradesh",
            INHR: "Haryana",
            INJH: "Jharkhand",
            INJK: "Jammu and Kashmir",
            INKA: "Karnataka",
            INKL: "Kerala",
            INLA: "Ladakh",
            INLD: "Lakshadweep",
            INMH: "Maharashtra",
            INML: "Meghalaya",
            INMN: "Manipur",
            INMP: "Madhya Pradesh",
            INMZ: "Mizoram",
            INNL: "Nagaland",
            INOR: "Orissa",
            INPB: "Punjab",
            INPY: "Puducherry",
            INRJ: "Rajasthan",
            INSK: "Sikkim",
            INTG: "Telangana",
            INTN: "Tamil Nadu",
            INTR: "Tripura",
            INUP: "Uttar Pradesh",
            INUT: "Uttaranchal",
            INWB: "West Bengal",
        };

        const Allstates = await page.locator(".sm_state").all();

        for (const state of Allstates) {
            const classState = await state.getAttribute("class");

            if (classState?.includes("INSK")) {
                state.click();
            }
        }

    });
});