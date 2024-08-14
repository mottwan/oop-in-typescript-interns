import {BasePage} from "./base-page";
import {By} from "selenium-webdriver";

export class DashboardPage extends BasePage {
    private static dashboardPageURL: string = '/dashboard';
    private welcomeMessageSelector: By = By.id('welcomeMessage');

    async open(path: string = DashboardPage.dashboardPageURL) {
        return await this.driver.get(path);
    }


    async isWelcomeMessageDisplayed() {
        return await this.driver.findElement(this.welcomeMessageSelector).isDisplayed()
    }
}