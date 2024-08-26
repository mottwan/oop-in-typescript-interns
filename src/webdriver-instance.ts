import { WebDriver } from "selenium-webdriver";

export class WebDriverInstance {
  private static driver: WebDriver | null = null;

  private constructor() {}

  public static init(driver: WebDriver): void {
    if (this.driver === null) {
      console.warn(this.driver);
      this.driver = driver;
    }
  }

  public static getDriver(): WebDriver {
    if (this.driver === null) {
      throw new Error("instance is not initialized");
    }
    return this.driver;
  }

  public static isDriverInitialize(): boolean {
   return this.driver === null
  }

  // public static async close(): Promise<void> {
  //   if (this.driver !== null) {
  //     await this.driver.close();
  //     this.driver = null;
  //   }
  // }
}

