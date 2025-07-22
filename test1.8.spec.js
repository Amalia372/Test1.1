import { chromium, test, expect } from '@playwright/test';

test('test', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://automationexercise.com/test_cases');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.locator('div:nth-child(11) > .product-image-wrapper > .choose > .nav > li > a').click();
  await page.getByText('Rs.').click();
  await page.getByText('Quantity:').click();
  await page.locator('#quantity').click();
  await page.getByText('Availability: In Stock').click();
  await page.getByText('Condition: New').click();
  await page.getByText('Brand: Babyhug').click();

  await browser.close();
});
