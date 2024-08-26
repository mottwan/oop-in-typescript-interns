
import {By} from 'selenium-webdriver';
import { BasePage } from '../../theinternet/pages/base-page';

export class LoginPage extends BasePage {
    protected url = '/web/index.php/auth/login';
    private usernameSelector = By.css("input[name='username']")
    private passwordSelector = By.css("input[name='password']")
    private loginButtonSelector = By.css("button[type='submit']")

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

    async getPageName(title: string): Promise<boolean> {
        const pageName = await this.driver.findElement(By.css('.oxd-topbar-header-breadcrumb .oxd-text--h6'));
        const a = await pageName.getText();
        return title === a;
      }

}