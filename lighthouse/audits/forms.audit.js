import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';

async function runAudit(name, url) {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox'] });
    const options = { logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port };
    const runnerResult = await lighthouse(url, options);

    const reportHtml = runnerResult.report;
    const reportDir = './reports/lighthouse';
    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
    }
    fs.writeFileSync(`${reportDir}/${name}.report.html`, reportHtml);

    console.log('Report is done for', runnerResult.lhr.finalUrl);
    console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

    await chrome.kill();
}

runAudit('forms', 'https://reqres.in/#support-heading');
