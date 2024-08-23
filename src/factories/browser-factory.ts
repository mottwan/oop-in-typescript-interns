import { Builder, /*WebDriver*/ } from "selenium-webdriver";
import { WebdriverInstance } from "./webdriver-instance";

export class BrowserFactory {

    public static async initializeBrowser() /*:Promise<WebDriver>*/ {
        if(WebdriverInstance.isDriverInitialized()){
            let driver = await new Builder().forBrowser('chrome', '127.0.6533.119').build();
            WebdriverInstance.init(driver);
        }
        // return driver
    }
}