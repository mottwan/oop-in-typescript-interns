import {BasePage} from "./base-page";
import webdriver from 'selenium-webdriver';
const { By } = webdriver;

// import { By, Actions } from 'selenium-webdriver';



export class DragAndDropPage extends BasePage {
    private static dragAndDropPage: string = '/drag_and_drop';
    private columnASelector = By.id('column-a');
    private columnBSelector = By.id('column-b');
    
    async open(path: string = DragAndDropPage.dragAndDropPage) {
        return await this.driver.get(this.baseUrl + path);
    }

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle();
    }

    async dragAndDropElement() {
        
        const source = this.driver.findElement(this.columnASelector);
        const target = await this.driver.findElement(this.columnBSelector);
        
        await this.driver.actions().dragAndDrop(source, target).perform();
        
    }

    async findElementPosition(elem: 'A' | 'B'): Promise<string> {

        const elementsPath = By.xpath(`//div[@id='columns']//header[contains(text(), '${elem}')]/..`);
        const elementItSelf = await this.driver.findElement(elementsPath);

        return await elementItSelf.getAttribute('id')
    }

}