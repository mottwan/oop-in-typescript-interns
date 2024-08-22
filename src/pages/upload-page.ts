import { By, } from "selenium-webdriver";
import { BasePage } from "./base-page";

export class UploadPage extends BasePage {
    protected url = '/upload'
    private locators = {
        choseFile: By.css("#file-upload"),
        dragDrop: By.css("#drag-drop-upload"),
        uploadButon: By.css("#file-submit"),
        successMessage: By.css(".example")
    }

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle()
    }

    async clickChooseButton(locators: "choseFile" | "dragDrop") {
        const filePath = `${process.cwd()}/1.txt`
        await this.driver.findElement(this.locators[locators]).sendKeys(filePath)
    }

    async clickUploadButton() {
        await this.driver.findElement(this.locators.uploadButon).click()
    }

    async successMessage() {
        return await this.driver.findElement(this.locators.successMessage)
    }

    
}