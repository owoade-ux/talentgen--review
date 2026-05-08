import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 15000 });

await page.screenshot({ path: '/tmp/preview-top.png', fullPage: false });
await page.evaluate(() => window.scrollTo(0, 900));
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: '/tmp/preview-2.png', fullPage: false });
await page.evaluate(() => window.scrollTo(0, 1800));
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: '/tmp/preview-3.png', fullPage: false });
await page.evaluate(() => window.scrollTo(0, 2700));
await new Promise(r => setTimeout(r, 300));
await page.screenshot({ path: '/tmp/preview-4.png', fullPage: false });

await browser.close();
console.log('done');
