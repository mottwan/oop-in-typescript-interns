import { By } from "selenium-webdriver";
import { BasePage } from "./base-page";
import { expect } from "chai";

export class CheckBoxPage extends BasePage {
    private static url = '/checkboxes'
    private checkboxLocator = {
        first: By.css("#checkboxes input[type='checkbox']:nth-of-type(1)"),
        second: By.css("#checkboxes input[type='checkbox']:nth-of-type(2)")
    };

    async open(path: string = CheckBoxPage.url): Promise<void> {
        return await this.driver.get(this.baseUrl + path);
    }

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle()
    }

    async clickOnCheckbox(position: "first" | "second") {
        return await this.driver.findElement(this.checkboxLocator[position]).click();
    }

    async validateCheckbox(position: "first" | "second") {
        const a = await this.driver.findElement(this.checkboxLocator[position])
         return expect((await a.getAttribute('checked')).includes('checked'))    
        
        //return await this.driver.findElement(this.checkboxLocator[position])
    } 

}