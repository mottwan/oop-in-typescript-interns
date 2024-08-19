import { AddRemoveElementsPage } from "../pages/add-remove-elements";
import { Builder, WebDriver } from "selenium-webdriver";
import { expect } from "chai";

describe('Add Element Test', () => {
    let browser: WebDriver;
    let addRemoveElements: AddRemoveElementsPage;

    before( async () => {
        // browser = await new Builder().forBrowser('chrome').build();
        browser = await new Builder().forBrowser('firefox').build();
        addRemoveElements = new AddRemoveElementsPage(browser);
    });

    after(async () => {
        // await browser.close();
        await browser.quit();
    });

    it('should add two button', async () => {
        await addRemoveElements.open();
        await addRemoveElements.addElement();
        await addRemoveElements.addElement();
        expect(await (addRemoveElements.findDeleteButtons())).to.equal(2);
        // expect((await (addRemoveElements.findDeleteButtons()))===2);
    });
})