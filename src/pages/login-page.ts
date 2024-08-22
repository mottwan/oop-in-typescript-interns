import {BasePage} from "./base-page";
import {By} from 'selenium-webdriver';

export class LoginPage extends BasePage {
    protected url = '/login';
    private usernameSelector = By.id('username')
    private passwordSelector = By.id('password')
    private loginButtonSelector = By.xpath('//button[@type="submit"]')
    private errorMessage =By.css('.flash.error')

    async setUsername(username: string) {
        return await this.driver.findElement(this.usernameSelector).sendKeys(username)
    }

    async setPassword(password: string) {
        return await this.driver.findElement(this.passwordSelector).sendKeys(password)
    }

    async clickLoginButton() {
        return await this.driver.findElement(this.loginButtonSelector).click();
    }

    async submitLoginForm(username: string, password: string) {
        await this.setUsername(username)
        await this.setPassword(password)
        await this.clickLoginButton()
    }

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle()
    }

    async getErrorMessage(): Promise<string> {
         return this.driver.findElement(this.errorMessage).getText()
    }

}
