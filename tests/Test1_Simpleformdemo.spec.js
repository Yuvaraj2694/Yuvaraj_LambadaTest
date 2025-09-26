import { test, expect } from '@playwright/test';
import { Simpleformpage, SimpleFormPage } from '../pages/Simpleformpage';

test('Simple Form Demo Test', async ({ page }) => {
  const formPage = new Simpleformpage(page);
  await formPage.navigate();

  expect(page.url()).toContain('simple-form-demo');

  const message = 'Welcome to LambdaTest';
  await page.waitForTimeout(3000)
  await formPage.enterMessage(message);
  await formPage.showmessage_btn()

  const displayed = await formPage.getDisplayedMessage();
  expect(displayed).toBe(message);
});
