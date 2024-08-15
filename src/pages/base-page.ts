import { WebDriver } from 'selenium-webdriver';

export abstract class BasePage {
    protected driver: WebDriver;
    protected baseUrl: string = 'http://the-internet.herokuapp.com';

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    abstract open(path: string): Promise<void>;

    abstract getPageTitle(): Promise<void>;

}
