import {BasePage} from "./base-page";
import {By} from "selenium-webdriver";

export class DashboardPage extends BasePage {
    private static dashboardPageURL: string = '/secure';
    private welcomeMessageSelector: By = By.id('welcomeMessage');

    async open(path: string = DashboardPage.dashboardPageURL) {
        return await this.driver.get(this.baseUrl + path);
    }


    async isWelcomeMessageDisplayed() {
        return await this.driver.findElement(this.welcomeMessageSelector).isDisplayed()
    }

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle();
    }
}
