import { Builder, WebDriver } from "selenium-webdriver"
import { ExitIntentPage } from "../pages/exit-intent-page"
import {  expect,} from "chai";

describe('Verify Exit Mouse Intent page', () => {
    let browser: WebDriver
    let exitintentpage: ExitIntentPage;

    before(async () => {
        browser = await new Builder().forBrowser('chrome').build()
        exitintentpage = new ExitIntentPage(browser)  
    })

    after(async () => {
        await browser.quit();
    })

    it('Modal window must open ', async () => {
        await exitintentpage.open()       
        await exitintentpage.mouseExitViewPort() 
        expect((await (exitintentpage.getModalWindow('activeModalWindow'))).isDisplayed())
    })

    it('Modal window must close', async () => {
        await exitintentpage.open()       
        await exitintentpage.mouseExitViewPort()
        await exitintentpage.closeModalWindow()
        expect((await (exitintentpage.getModalWindow('inactiveModalWindow'))).isDisplayed())
    })


})