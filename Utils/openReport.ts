import { exec } from "child_process";
import * as fs from "fs";
import * as path from "path";

const CHROMIUM_PATH = "C:\\Users\\Akshay\\AppData\\Local\\ms-playwright\\chromium-1228\\chrome-win64\\chrome.exe";

export default async function globalTeardown() {
    const reportDir = path.resolve("tta-report");
    if (!fs.existsSync(reportDir)) return;

    const files = fs.readdirSync(reportDir)
        .filter(f => f.startsWith("report_") && f.endsWith(".html"))
        .sort()
        .reverse();

    if (files.length === 0) return;

    const latestReport = path.resolve(reportDir, files[0]);
    console.log(`\n🚀 Opening report in Chromium: ${latestReport}`);

    const url = `file:///${latestReport.replace(/\\/g, "/")}`;
    exec(`"${CHROMIUM_PATH}" "--new-window" "${url}"`);
}
