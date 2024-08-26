import { By, WebDriver } from "selenium-webdriver";
import { WebDriverInstance } from "../../webdriver-instance";
import { MenuLocators } from "../../orangehrmlive/tests/enums/menu-enum";

export abstract class BasePage {
  protected driver: WebDriver;
  protected baseUrl = {
    theInternet: "http://the-internet.herokuapp.com",
    orangehrmlive: "https://opensource-demo.orangehrmlive.com"
  };
  protected pageNameLocator = By.css("h3");
  protected abstract url: string;

  constructor() {
    this.driver = WebDriverInstance.getDriver();
  }

  async open(baseUrl: keyof typeof this.baseUrl): Promise<void> {
    await this.driver.get(`${this.baseUrl[baseUrl]}${this.url}`);
  }

  async close(): Promise<void> {
    await this.driver.close();
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

  async clickOnSidePanelMenu(key: keyof typeof MenuLocators){
    const selector = MenuLocators[key]
    await (this.driver.findElement(By.xpath(selector)).click())
  }

}
