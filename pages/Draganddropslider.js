export class Draganddropslider {
    constructor(page) {
      this.page = page;
     this.slider = page.locator('input[type="range"][value="15"]');
     this.rangeValue = page.locator('#rangeSuccess');
    }
  
    async navigate() {
      await this.page.goto('https://www.lambdatest.com/selenium-playground');
      await this.page.click('text=Drag & Drop Sliders');
    }
  
    async setSliderTo() {
     const box = await this.slider.boundingBox();
    const xOffset =await box.width * 0.93; // move to 95% of slider width
    await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await this.page.mouse.down();
    await this.page.mouse.move(box.x + xOffset, box.y + box.height / 2, { steps: 10 });
    await this.page.mouse.up();
    }

    
    async getSliderValue() {
        //  const output = page.locator('xpath=//output[@id="rangeSuccess"]');
        //   await expect(output).toHaveText('95');
      return await this.rangeValue.textContent();
    }
  }
  