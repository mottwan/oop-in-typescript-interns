import { Builder, WebDriver } from "selenium-webdriver"
import { CheckBoxPage } from "../pages/checkbox-page"
import { assert } from "chai"

describe('Validate checkbox page', () => {
    let browser: WebDriver
    let checkBoxPage: CheckBoxPage

    before(async () => {
        browser = await new Builder().forBrowser('chrome').build()
        checkBoxPage = new CheckBoxPage(browser)
    })

    after(async () => {
        await browser.quit();
    });

    it('Validate second checkbox is selected by default', async () => {
        await checkBoxPage.open()
        await checkBoxPage.validateCheckbox('second')
    });

    it('Validate first checkbox select action', async () => {
        await checkBoxPage.open()      
        assert (await checkBoxPage.getPageName('Checkboxes'))  
        await checkBoxPage.clickOnCheckbox('first')
        await checkBoxPage.validateCheckbox('first')
        await checkBoxPage.validateCheckbox('second')
    });


})