import {expect} from "chai"
import { DragAndDropPage } from "../pages/drag-and-drop-page"; 

import { BrowserFactory } from "../factories/browser-factory";
import { PageFactory } from "../factories/page-factory";
// import { WebdriverInstance } from "../factories/webdriver-instance";

describe('Drag and drop a element', () => {
    
    let dragAndDropPage: DragAndDropPage;
    
    before( async () => {
    
        await BrowserFactory.initializeBrowser();
        dragAndDropPage = PageFactory.createPage(DragAndDropPage)
    
    });
    
    after(async () => {

        // await dragAndDropPage.closeBrowser();
        // await WebdriverInstance.closeDriver();
    });

    it('should drag and drop element A to second position', async () => {
        await dragAndDropPage.open(dragAndDropPage.dragAndDropPageUrl);
        // await new Promise(resolve => setTimeout(resolve, 3000));
        await dragAndDropPage.dragAndDropElement();
        expect(await dragAndDropPage.findElementPosition('A') === 'column-b').to.equal(true)
        // await new Promise(resolve => setTimeout(resolve, 1000));

    });
})