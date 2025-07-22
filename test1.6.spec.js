import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/test_cases');
  await page.getByRole('button', { name: 'Consent' }).click();
  await page.getByRole('link', { name: ' Contact us' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('amaliaa');
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('malia.dijmarescu@gmail.com');
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('dwfegryh');
  await page.getByRole('textbox', { name: 'Your Message Here' }).click();
  await page.getByRole('textbox', { name: 'Your Message Here' }).fill('etjejiwjif');

  // Variante pentru a accepta dialog sau apăsa buton OK după Submit:

  // 1. Dialog JS (alert/confirm)
  page.once('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });

  await page.getByRole('button', { name: 'Submit' }).click();

  // 2. Buton OK pe pagină (dacă există)
  // Încearcă să apeși butonul OK, dacă nu există va arunca eroare, deci poți folosi try/catch:
  try {
    await page.getByRole('button', { name: 'OK' }).click();
  } catch {
    console.log('Butonul OK nu a fost găsit pe pagină, sărim peste');
  }

  // Mai departe
  await page.getByRole('link', { name: ' Home' }).click();
});
