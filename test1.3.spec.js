import { test as base, expect, chromium } from '@playwright/test';

// Definim un test custom cu slowMo
const test = base.extend({
  context: async ({}, use) => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 }); // 300ms între acțiuni
    const context = await browser.newContext();
    await use(context);
    await browser.close();
  },
});

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/test_cases');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('amalia@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
});
