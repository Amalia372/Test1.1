import { test, expect, chromium } from '@playwright/test';

test('test cu slowMo', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();

  await page.goto('https://automationexercise.com/test_cases');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('maria234');
  await page.locator('form').filter({ hasText: 'Signup' })
    .getByPlaceholder('Email Address').fill('amalia23.dijmarescu@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();

  // Așteaptă să vezi mesajul "Email Address already exist!"
  await expect(page.locator('form:has-text("Signup") p'))
    .toHaveText('Email Address already exist!');

  await browser.close();
});
