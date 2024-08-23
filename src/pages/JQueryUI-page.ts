import {BasePage} from "./base-page";
import {By, } from "selenium-webdriver";


export class JQueryUIPage extends BasePage {
    jQueryUIPageUrl: string = '/jqueryui/menu#';
    private menuSelector = By.css('.ui-menu-item#ui-id-3');
    private backButtonSelector = By.id('ui-id-8');

    

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle();
    }


    async clickOnBackButton() {
        
        await this.driver.findElement(this.menuSelector).click()
        await new Promise(resolve => setTimeout(resolve, 1000));
        await this.driver.findElement(this.backButtonSelector).click()
        await new Promise(resolve => setTimeout(resolve, 1000));
        
    }
}