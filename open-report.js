const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const CHROMIUM_PATH = String.raw`C:\Users\Akshay\AppData\Local\ms-playwright\chromium-1228\chrome-win64\chrome.exe`;
const reportDir = path.resolve("tta-report");

module.exports = async function globalTeardown() {
    if (!fs.existsSync(reportDir)) return;

    const files = fs.readdirSync(reportDir)
        .filter(f => f.startsWith("report_") && f.endsWith(".html"))
        .sort()
        .reverse();

    if (files.length === 0) return;

    const latestReport = path.resolve(reportDir, files[0]);
    const url = "file:///" + latestReport.replace(/\\/g, "/");

    console.log("\nOpening report in Chromium: " + latestReport);
    exec('"' + CHROMIUM_PATH + '" "--new-window" "' + url + '"');
};
