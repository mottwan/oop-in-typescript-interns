import {expect} from "chai"
import { DragAndDropPage } from "../pages/drag-and-drop-page"; 
import {Builder, WebDriver} from "selenium-webdriver"

describe('Drag and drop a element', () => {
    let browser: WebDriver;
    let dragAndDropPage: DragAndDropPage;

    before( async () => {
        
        browser = await new Builder().forBrowser('chrome', '127.0.6533.119').build();
        dragAndDropPage = new DragAndDropPage(browser);
    });

    after(async () => {

        await browser.quit();

    });

    it('should drag and drop element A to second position', async () => {
        await dragAndDropPage.open();
        // await new Promise(resolve => setTimeout(resolve, 3000));
        await dragAndDropPage.dragAndDropElement();
        expect(await dragAndDropPage.findElementPosition('A') === 'column-b').to.equal(true)
        // await new Promise(resolve => setTimeout(resolve, 1000));

    });
})