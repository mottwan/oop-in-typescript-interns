import { expect } from "chai";
import { ImagePage } from "../pages/image-page";
import { Builder, WebDriver } from "selenium-webdriver";


describe('Image validation page', () => {
    let browser: WebDriver;
    let imagepage: ImagePage;

    before(async () => {
        browser = await new Builder().forBrowser('chrome').build();
        imagepage = new ImagePage(browser);
    });

    after(async () => {
        await browser.quit();
    });

    

    it('All images must be valid', async () => {
        await imagepage.open();
        const images = await imagepage.findAllImages()
        for (let image of images) {
            const attrValue = await image.getAttribute('src')
            if (!(await image.getAttribute('src')).includes('/img/')) {
                console.log('Provided images are borken ' + attrValue);
                expect(image.isDisplayed).to.be.true
            }
        }
    });

});
