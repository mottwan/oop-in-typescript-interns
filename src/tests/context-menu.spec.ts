import { expect } from "chai";
import { ContextMenuPage } from "../pages/context-menu-page";
import { Builder, WebDriver } from "selenium-webdriver";

describe('Get context message', () => {
    let browser: WebDriver;
    let contextMenuPage: ContextMenuPage;

    before( async () => {

        browser = await new Builder().forBrowser('firefox').build();
        contextMenuPage = new ContextMenuPage(browser);

    });

    after(async () => {

        await contextMenuPage.clickOkOnContextMenu();
        await browser.quit();

    });

    it('should display context message', async () => {
        
        await contextMenuPage.open();
        await contextMenuPage.rightClick();
        // console.log(await contextMenuPage.compareMessageFromContextMenu());
        expect(await contextMenuPage.compareMessageFromContextMenu()).to.equal(true);
        
    });
})