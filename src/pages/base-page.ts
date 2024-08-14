import { WebDriver } from 'selenium-webdriver';

export abstract class BasePage {
    protected driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    abstract open(path: string): Promise<void>;


}