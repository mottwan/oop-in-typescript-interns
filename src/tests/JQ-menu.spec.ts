import { JQueryUIPage } from "../pages/JQueryUI-page"; 
import {Builder, WebDriver} from "selenium-webdriver"

describe.only('JQuery menu test', () => {
    let browser: WebDriver;
    let jQueryUIPage: JQueryUIPage;

    before( async () => {
        browser = await new Builder().forBrowser('chrome', '127.0.6533.119').build();
        jQueryUIPage= new JQueryUIPage(browser);
    });

    after(async () => {
        await browser.quit();
    });

    it('should perform back to jquery UI', async () => {
        await jQueryUIPage.open();
        await jQueryUIPage.clickOnBackButton();
        await new Promise(resolve => setTimeout(resolve, 3000));
    });

});