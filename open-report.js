const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const CHROMIUM_PATH = String.raw`C:\Users\Akshay\AppData\Local\ms-playwright\chromium-1228\chrome-win64\chrome.exe`;
const reportDir = path.resolve("tta-report");

if (!fs.existsSync(reportDir)) process.exit(0);

const files = fs.readdirSync(reportDir)
    .filter(f => f.startsWith("report_") && f.endsWith(".html"))
    .sort()
    .reverse();

if (files.length === 0) process.exit(0);

const latestReport = path.resolve(reportDir, files[0]);
const url = "file:///" + latestReport.replace(/\\/g, "/");

console.log("\n🚀 Opening report in Chromium: " + latestReport);
exec('"' + CHROMIUM_PATH + '" "--new-window" "' + url + '"');
