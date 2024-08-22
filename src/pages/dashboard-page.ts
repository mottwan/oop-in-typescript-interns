import {BasePage} from "./base-page";
import {By} from "selenium-webdriver";

export class DashboardPage extends BasePage {
    protected url: string = '/secure'
    
    private welcomeMessageSelector: By = By.id('welcomeMessage');

    async isWelcomeMessageDisplayed() {
        return await this.driver.findElement(this.welcomeMessageSelector).isDisplayed()
    }

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle();
    }
}
