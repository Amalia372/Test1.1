import { test, expect, chromium } from '@playwright/test';

test('test', async () => {
  // Lansăm browserul cu slowMo = 300ms
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://automationexercise.com/');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('amalia234');
  await page.locator('form:has-text("Signup") >> [placeholder="Email Address"]').fill('maria2.dijmarescu@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('radio', { name: 'Mrs.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).fill('112345678');
  await page.getByRole('textbox', { name: 'First name *' }).fill('maria23');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('dijmarescu23');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('amska');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('assdd');
  await page.getByRole('textbox', { name: 'State *' }).fill('sdfv');
   await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('fffd');
  await page.locator('#zipcode').fill('12345');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('3457558');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();

  await browser.close();
});
