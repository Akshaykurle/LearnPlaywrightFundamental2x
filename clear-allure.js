const fs = require("fs");
const path = require("path");

module.exports = async function globalSetup() {
    const allureDir = path.resolve("allure-results");
    if (fs.existsSync(allureDir)) {
        fs.rmSync(allureDir, { recursive: true, force: true });
        console.log("Cleared old allure-results");
    }
    fs.mkdirSync(allureDir, { recursive: true });
    console.log("Created fresh allure-results directory");
};
