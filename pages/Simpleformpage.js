export class Simpleformpage {
    constructor(page) {
      this.page = page;
      this.messageInput = page.locator('input[id="user-message"]');
      this.showMessageButton = page.locator('#showInput');
      this.displayedMessage = page.locator('#message');
    }
  
    async navigate() {
      await this.page.goto('https://www.lambdatest.com/selenium-playground');
      await this.page.click('text=Simple Form Demo');
    }
  
    async enterMessage(message) {
        console.log(message)
      await this.messageInput.fill(message);
      
    }

    async showmessage_btn(){
        await this.showMessageButton.click();
    }
  
    async getDisplayedMessage() {
      return await this.displayedMessage.textContent();
    }
  }
  