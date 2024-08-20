
import { Builder, WebDriver } from "selenium-webdriver";
import { UploadPage } from "../pages/upload-page";
import { expect } from "chai";

describe('Test Upload Page', () => {
    let browser: WebDriver;
    let uploadPage: UploadPage;

    before(async () => {
        browser = await new Builder().forBrowser('chrome').build();
        uploadPage = new UploadPage(browser);
    });

    after(async () => {
        await browser.quit();
    });
  
    it('Upload file with "Choose File" button', async () => {
        await uploadPage.open()
        await uploadPage.clickChooseButton('choseFile')
        await uploadPage.clickUploadButton()
        const msg = await uploadPage.successMessage()
        const a = (await msg.getText())
        expect (a.includes('File Uploaded!\n1.txt')).to.be.true
    });

});
