import { By } from "selenium-webdriver";
import { BasePage } from "./base-page";

export class ImagePage extends BasePage{
    private static imageUrl = '/broken_images'
    private imageLocator = By.xpath('//*[@id="content"]//img')

    async open(path: string = ImagePage.imageUrl): Promise<void> {
        return await this.driver.get(this.baseUrl + path);
    }

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle()
    }

    async findAllImages() {
        return await this.driver.findElements(this.imageLocator)
    }

}