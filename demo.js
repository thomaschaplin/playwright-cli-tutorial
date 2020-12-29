const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click input[name="search"]
  await page.click('input[name="search"]');

  // Fill input[name="search"]
  await page.fill('input[name="search"]', 'automation');

  // Click //button[normalize-space(.)='Search']
  await page.click('//button[normalize-space(.)=\'Search\']');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Automation');

  // Click text="Random article"
  await page.click('text="Random article"');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Beehunter,_Indiana');

  console.log(await page.video().path());

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();
