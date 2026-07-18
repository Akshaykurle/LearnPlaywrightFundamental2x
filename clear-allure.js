const fs = require("fs");
const path = require("path");

const allureDir = path.resolve("allure-results");
if (fs.existsSync(allureDir)) {
    fs.rmSync(allureDir, { recursive: true, force: true });
    console.log("🧹 Cleared old allure-results");
}
