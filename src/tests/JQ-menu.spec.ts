import { BrowserFactory } from "../factories/browser-factory";
import { PageFactory } from "../factories/page-factory";
// import { WebdriverInstance } from "../factories/webdriver-instance";
import { JQueryUIPage } from "../pages/JQueryUI-page"; 


describe('JQuery menu test', () => {

    let jQueryUIPage: JQueryUIPage;

    before( async () => {
        await BrowserFactory.initializeBrowser();
        jQueryUIPage = PageFactory.createPage(JQueryUIPage);
    });

    after(async () => {
        // await jQueryUIPage.closeBrowser();
        // await WebdriverInstance.closeDriver();
    });

    it('should perform back to jquery UI', async () => {
        await jQueryUIPage.open(jQueryUIPage.jQueryUIPageUrl);
        await jQueryUIPage.clickOnBackButton();
        await new Promise(resolve => setTimeout(resolve, 3000));
    });

});