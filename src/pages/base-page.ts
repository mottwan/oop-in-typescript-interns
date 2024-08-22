import { By, WebDriver } from "selenium-webdriver";
import { WebDriverInstance } from "../webdriver-instance";

export abstract class BasePage {
  protected driver: WebDriver;
  protected baseUrl: string = "http://the-internet.herokuapp.com";
  protected pageNameLocator = By.css("h3");
  protected abstract url: string;

  constructor() {
    this.driver = WebDriverInstance.getDriver();
  }

  async open(): Promise<void> {
    await this.driver.get(`${this.baseUrl}${this.url}`);
  }

  async quit(): Promise<void> {
    await this.driver.quit();
  }

  abstract getPageTitle(): Promise<string>;

  async sleep(seconds: number): Promise<void> {
    await this.driver.sleep(seconds)   
    }

  async getPageName(title: string): Promise<boolean> {
    const pageName = await this.driver.findElement(this.pageNameLocator);
    const a = await pageName.getText();
    return title === a;
  }

}
