import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { WebdriverInstance } from '../factories/webdriver-instance';

export abstract class BasePage {
    protected driver: WebDriver;
    protected baseUrl: string = 'http://the-internet.herokuapp.com';
    

    constructor() {
        this.driver = WebdriverInstance.getDriver();
    }

    async open(pageUrl: string): Promise<this> {
        await this.driver.get(`${this.baseUrl}${pageUrl}`);
        return this;
    }

    async rightClick(objSelector: By): Promise<this> {
        
        const el1 = await this.driver.findElement(objSelector);
        
        const actions = await this.driver.actions({async: true});
        
        await actions.contextClick(el1).perform();

        return this;
    }

    async leftClick(objSelector: By): Promise<this> {
        await this.driver.findElement(objSelector).click();
        return this;
    }

    async findElem(objSelector: By): Promise<WebElement> {
        return this.driver.findElement(objSelector);
    } 


    async closeBrowser() {
        await this.driver.close();
    }

    abstract getPageTitle(): Promise<string>;




    
}
