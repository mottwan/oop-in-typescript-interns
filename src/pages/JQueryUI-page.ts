import {BasePage} from "./base-page";
import {By} from "selenium-webdriver";


export class JQueryUIPage extends BasePage {
    private static contextMenuPage: string = '/jqueryui/menu#';
    private menuSelector = By.id('ui-id-3');
    // private backButtonSelector = By.id('ui-id-8');

    async open(path: string = JQueryUIPage.contextMenuPage) {
        return await this.driver.get(this.baseUrl + path);
    }

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle();
    }


    async clickOnBackButton() {
        
        const menu = await this.driver.findElement(this.menuSelector);
        const backButton = await this
        await this.driver.actions().click(menu).perform();

    }
}