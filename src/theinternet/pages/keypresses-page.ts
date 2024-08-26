import { By, Key, } from "selenium-webdriver";
import { BasePage } from "./base-page";

export class KeyPressesPage extends BasePage{
    protected url = '/key_presses'
    private locators = {
        inputField: By.css('#target'),
        textResult: By.css('#result')
    }
    
    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle()
    }

    async clickOnInputField() {
       await this.driver.findElement(this.locators.inputField).click()
    }

    async keyPress(key: keyof typeof Key) {
        await this.driver.actions().keyDown(Key[key] as string).keyUp(Key[key] as string).perform()
    }

    async getKeyPress(): Promise<string> {
        return (await this.driver.findElement(this.locators.textResult)).getText()
    }

}