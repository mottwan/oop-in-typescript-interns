import { By, WebDriver } from 'selenium-webdriver';

export abstract class BasePage {
    protected driver: WebDriver;
    protected baseUrl: string = 'http://the-internet.herokuapp.com';
    protected pageNameLocator = By.css('h3')

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    abstract open(path: string): Promise<void>;

    abstract getPageTitle(): Promise<string>;

    async getPageName(title: string):Promise<boolean> {
        const pageName = (await this.driver.findElement(this.pageNameLocator))
        const a = await (pageName.getText())
        return title === a
          
    }


}
