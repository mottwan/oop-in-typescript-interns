import { By } from "selenium-webdriver";
import { BasePage } from "./base-page";

export class ImagePage extends BasePage{
    protected url:string = '/broken_images'
    private imageLocator = By.xpath('//*[@id="content"]//img')

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle()
    }

    async findAllImages() {
        return await this.driver.findElements(this.imageLocator)
    }

}