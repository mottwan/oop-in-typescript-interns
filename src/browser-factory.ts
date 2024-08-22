import { Builder, WebDriver } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";
import * as firefox from "selenium-webdriver/firefox";
import { WebDriverInstance } from "./webdriver-instance";


export class BrowserFactory {
  public static createBrowser(browser: string): WebDriver {
    let driver: WebDriver;

    switch (browser) {
      case "chrome":driver = new Builder().forBrowser(browser).setChromeOptions(new chrome.Options()).build();
        break;
      case "firefox":driver = new Builder().forBrowser(browser).setFirefoxOptions(new firefox.Options()).build();
        break;
      default:
        throw new Error(`Unknown browser: ${browser}`);
    }

    WebDriverInstance.init(driver);
    return driver;
  }
}
