import { test, expect } from '@playwright/test';

test.use({ launchOptions: { slowMo: 500 } }); // fiecare acțiune are delay de 500ms

test('subscribe with email and check message', async ({ page }) => {
  // Mergem pe pagina de test
  await page.goto('https://automationexercise.com/test_cases');

  // Acceptăm consent-ul
  await page.getByRole('button', { name: 'Consent' }).click();

  // Mergem pe Home
  await page.getByRole('link', { name: ' Home' }).click();
  await expect(page).toHaveURL('https://automationexercise.com/');

  // Introducem emailul în câmpul de abonare
  await page.getByRole('textbox', { name: 'Your email address' }).click();
  await page.getByRole('textbox', { name: 'Your email address' }).fill('amalia.dijmarescu@gmail.com');

  // Apăsăm butonul de abonare
  await page.getByRole('button', { name: '' }).click();

  // Verificăm mesajul de confirmare
  await expect(page.locator('#success-subscribe')).toHaveText('You have been successfully subscribed!');
});
 