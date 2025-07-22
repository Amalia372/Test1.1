import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/test_cases');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('amalia23.dijmarescu@gm');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').press('CapsLock');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('amalia23.dijmarescu@gm');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').press('CapsLock');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('amalia23.dijmarescu@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('q12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
});