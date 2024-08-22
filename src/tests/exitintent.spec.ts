
import {  expect,} from "chai";
import { BrowserFactory } from "../browser-factory";
import { PageFactory } from "../page-factory";
import { ExitIntentPage } from "../pages/exit-intent-page";

describe('Verify Exit Mouse Intent page', () => {
    BrowserFactory.createBrowser('firefox')
    const exitIntentPage = PageFactory.createPage(ExitIntentPage)

    after(async () => {
        await exitIntentPage.quit();
    })

    it('Modal window must open ', async () => {
        await exitIntentPage.open()       
        await exitIntentPage.mouseExitViewPort() 
        expect((await (exitIntentPage.getModalWindow('activeModalWindow'))).isDisplayed())
    })

    it('Modal window must close', async () => {
        await exitIntentPage.open()       
        await exitIntentPage.mouseExitViewPort()
        await exitIntentPage.sleep(1000)
        await exitIntentPage.closeModalWindow()
        expect((await (exitIntentPage.getModalWindow('inactiveModalWindow'))).isDisplayed())
    })


})