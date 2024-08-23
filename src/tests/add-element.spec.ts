import { AddRemoveElementsPage } from "../pages/add-remove-elements";
import { expect } from "chai";
import { BrowserFactory } from "../factories/browser-factory";
import { PageFactory } from "../factories/page-factory";
// import { WebdriverInstance } from "../factories/webdriver-instance";

describe('Add Element Test', () => {
    
    let addRemoveElements: AddRemoveElementsPage;

    before( async () => {
        
        await BrowserFactory.initializeBrowser();
        addRemoveElements = PageFactory.createPage(AddRemoveElementsPage);
        
    });

    after(async () => {
        // await addRemoveElements.closeBrowser();
        // await WebdriverInstance.closeDriver();
    });

    it('should add two button', async () => {
        await addRemoveElements.open(addRemoveElements.addRemoveElementsPageURL);
        await addRemoveElements.addElement();
        await addRemoveElements.addElement();
        expect(await (addRemoveElements.findDeleteButtons())).to.equal(2);
        // expect((await (addRemoveElements.findDeleteButtons()))===2);
    });
})