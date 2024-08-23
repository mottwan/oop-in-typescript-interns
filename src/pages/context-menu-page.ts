import {BasePage} from "./base-page";
import {By} from "selenium-webdriver";

export class ContextMenuPage extends BasePage {
    pageUrl: string = '/context_menu';
    hotSpotSelector = By.xpath("//*[@id='content']//div[@id='hot-spot']")
    

    
    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle();
    }



    async getMessageFromContextMenu(): Promise<string> {
        return this.driver.switchTo().alert().getText();
    }
    
    async compareMessageFromContextMenu() {
        const message: string = await this.getMessageFromContextMenu();
        return message ==='You selected a context menu';
    }

    async clickOkOnContextMenu() {
        this.driver.switchTo().alert().accept();
    }

}