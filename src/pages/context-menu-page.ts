import {BasePage} from "./base-page";
import {By} from "selenium-webdriver";

export class ContextMenuPage extends BasePage {
    private static contextMenuPage: string = '/context_menu';
    private hotSpotSelector = By.xpath("//*[@id='content']//div[@id='hot-spot']")
    
    async open(path: string = ContextMenuPage.contextMenuPage) {
        return await this.driver.get(this.baseUrl + path);
    }
    
    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle();
    }

    async rightClick() {
        
        const el1 = await this.driver.findElement(this.hotSpotSelector);
        
        const actions = await this.driver.actions({async: true});
        
        return await actions.contextClick(el1).perform();
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