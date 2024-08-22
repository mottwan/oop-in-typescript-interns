import { WebDriver } from "selenium-webdriver";

export class WebDriverInstance {
  private static driver: WebDriver;

  public static init(driver: WebDriver): void {
    this.driver = driver;
  }

  public static getDriver(): WebDriver {
    if (!this.driver) {
      throw new Error("WebDriver instance is not initialized.");
    }
    return this.driver;
  }
  
  // public static async quit(): Promise<void> {
  //   if (this.driver) {
  //     await this.driver.quit();
  //   }
  // }
}
