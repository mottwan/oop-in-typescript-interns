import { expect } from "chai";
import { ContextMenuPage } from "../pages/context-menu-page";
import { PageFactory } from "../factories/page-factory";
import { BrowserFactory } from "../factories/browser-factory";
// import { WebdriverInstance } from "../factories/webdriver-instance";

describe('Get context message', () => {
    

    let contextMenuPage: ContextMenuPage;
    
    before(async () => {
        await BrowserFactory.initializeBrowser();
        contextMenuPage = PageFactory.createPage(ContextMenuPage);
    
    });
    
    after(async () => {

        await contextMenuPage.clickOkOnContextMenu();
        // await contextMenuPage.closeBrowser();
        // await WebdriverInstance.closeDriver();

    });

    it('should display context message', async () => {
        
        await (await contextMenuPage
        .open(contextMenuPage.pageUrl))
        .rightClick(contextMenuPage.hotSpotSelector)
        expect(await contextMenuPage.compareMessageFromContextMenu()).to.be.true;
        
    });
})