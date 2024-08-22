import { By } from "selenium-webdriver";
import { BasePage } from "./base-page";

export class CheckBoxPage extends BasePage {
    protected url: string = '/checkboxes'
    private checkboxLocator = {
        first: By.css("#checkboxes input[type='checkbox']:nth-of-type(1)"),
        second: By.css("#checkboxes input[type='checkbox']:nth-of-type(2)")
    };

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle()
    }

    async clickOnCheckbox(position: "first" | "second") {
        return await this.driver.findElement(this.checkboxLocator[position]).click();
    }

    async validateCheckbox(position: "first" | "second") {
        const a = await this.driver.findElement(this.checkboxLocator[position])
        return await (a.getAttribute('checked'));
    } 

}