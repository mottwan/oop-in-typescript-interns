import { By } from "selenium-webdriver";
import { BasePage } from "./base-page";

export class ExitIntentPage extends BasePage {
    private static url = '/exit_intent'
    private locators = {
        activeModalWindow: By.xpath("//*[@id='ouibounce-modal' and contains(@style, 'display: block')]"),
        inactiveModalWindow: By.xpath("//*[@id='ouibounce-modal' and contains(@style, 'display: none')]"),
        closeButton: By.css('.modal-footer p')
    }

    async open(path: string = ExitIntentPage.url): Promise<void> {
        return await this.driver.get(this.baseUrl + path);
    }

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle()
    }

    async mouseExitViewPort() {

        await this.driver.executeScript(`
        let targetElement = document.getElementById('ouibounce-modal')
        let event = new MouseEvent('mouseleave', { 
            bubbles: true,
            cancelable: true,
            view: window
            })
        targetElement.dispatchEvent(event)
        `)}

    async closeModalWindow() {
        return await this.driver.findElement(this.locators.closeButton).click()
    }

    async getModalWindow(locators: "activeModalWindow" | "inactiveModalWindow") {
        return (await this.driver.findElement(this.locators[locators]))
    }

}