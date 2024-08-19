import {BasePage} from "./base-page";
import {By} from "selenium-webdriver";


export class AddRemoveElementsPage extends BasePage {
    private static addRemoveElementsPageURL: string = '/add_remove_elements/';
    private addButtonSelector = By.xpath("//button[contains(text(), 'Add Element')]");
    private deleteButtonSelector = By.xpath("//*[@id='elements']/button");

    async open(path: string = AddRemoveElementsPage.addRemoveElementsPageURL) {
        return await this.driver.get(this.baseUrl + path);
    }

    async addElement() {
        return await this.driver.findElement(this.addButtonSelector).click();
    }

    async findDeleteButtons(): Promise<number>{
        return (await this.driver.findElements(this.deleteButtonSelector)).length;
    }

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle();
    }


}