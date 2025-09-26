const { test, expect } = require('@playwright/test');
const { InputFormPage, inputformsumbit } = require('../pages/inputformsumbit');

test('Test Scenario 3: Input Form Submit using POM', async ({ page }) => {
  const formPage = new inputformsumbit(page);

  // Step 1: Navigate to the form
  await formPage.navigate();

  // Step 2: Submit empty form
  await formPage.submitEmptyForm();

  // Step 3: Assert validation message
  const validationMessage = await formPage.getValidationMessage();
  console.log('Validation Message:', validationMessage);
  expect(validationMessage).toContain('Please fill out this field');

  // Step 4: Fill in all fields
  await formPage.fillForm({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'SecurePass123',
    company: 'Doe Enterprises',
    website: 'https://doeenterprises.com',
    country: 'United States',
    city: 'New York',
    address1: '123 Main St',
    address2: 'Suite 456',
    state: 'NY',
    zip: '10001',
  });

  // Step 6: Submit the form
  await formPage.submitForm();

  // Step 7: Validate success message
  const successText = await formPage.getSuccessMessage();
  expect(successText).toBe('Thanks for contacting us, we will get back to you shortly.');
});