export class inputformsumbit {
  
    constructor(page) {
      this.page = page;
      this.nameInput = page.locator('input[name="name"]');
      this.emailInput = page.locator('#inputEmail4');
      this.passwordInput = page.locator('input[name="password"]');
      this.companyInput = page.locator('input[name="company"]');
      this.websiteInput = page.locator('input[name="website"]');
      this.countrySelect = page.locator('select[name="country"]');
      this.cityInput = page.locator('input[name="city"]');
      this.address1Input = page.locator('#inputAddress1');
      this.address2Input = page.locator('#inputAddress2');
      this.stateInput = page.locator('#inputState');
      this.zipInput = page.locator('#inputZip');
      this.submitButton = page.locator("//button[contains(text(),'Submit')]");
      this.successMessage = page.locator('.success-msg');
    }
  
    async navigate() {
      await this.page.goto('https://www.lambdatest.com/selenium-playground');
      await this.page.click('text=Input Form Submit');
    }
  
    async submitEmptyForm() {
      await this.submitButton.click();
    }
  
    async getValidationMessage() {
      return await this.nameInput.evaluate((input) => input.validationMessage);
    }
  
    async fillForm(data) {
      await this.nameInput.fill(data.name);
      await this.emailInput.fill(data.email);
      await this.passwordInput.fill(data.password);
      await this.companyInput.fill(data.company);
      await this.websiteInput.fill(data.website);
      await this.countrySelect.selectOption({ label: data.country });
      await this.cityInput.fill(data.city);
      await this.address1Input.fill(data.address1);
      await this.address2Input.fill(data.address2);
      await this.stateInput.fill(data.state);
      await this.zipInput.fill(data.zip);
    }
  
    async submitForm() {
      await this.submitButton.click();
    }
  
    async getSuccessMessage() {
      return await this.successMessage.textContent();
    }
  }
  
