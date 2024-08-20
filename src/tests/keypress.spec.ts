import {Builder,  WebDriver} from "selenium-webdriver"
import { KeyPressesPage } from "../pages/keypresses-page";
import { expect } from "chai";


describe('Verify key presses actions page', () => {
    let browser: WebDriver;
    let keyPressPage: KeyPressesPage;

    before( async () => {
        browser = await new Builder().forBrowser('chrome').build();
        keyPressPage = new KeyPressesPage(browser);
    });

    after(async () => {
        await browser.quit();

    });

    it('Check SHIFT key press', async () => {
        await keyPressPage.open();
        await keyPressPage.clickOnInputField()
        await keyPressPage.keyPress("SHIFT")
        const a =  keyPressPage.getKeyPress()
        expect ((await a).includes('SHIFT')).to.be.true
    })

})