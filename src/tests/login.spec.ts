import { LoginPage } from "../pages/login-page";
import { expect } from "chai";
import { DashboardPage } from "../pages/dashboard-page";
import { BrowserFactory } from "../browser-factory";
import { PageFactory } from "../page-factory";



describe('Login Page Tests', () => {
    BrowserFactory.createBrowser('firefox')
    const loginPage = PageFactory.createPage(LoginPage);
    const dashboardPage = PageFactory.createPage(DashboardPage);

    beforeEach(async () => {
        await loginPage.open();
    });

    after(async () => {
        // await browser.close();
        await loginPage.quit();
    });

    it('should login with valid credentials', async () => {
        await loginPage.setUsername('tomsmith')
        await loginPage.setPassword('SuperSecretPassword!')
        await loginPage.clickLoginButton();
        expect(await dashboardPage.getPageTitle()).to.contain('The Internet');
    });

    it('login with invalid username and invalid password', async () => {

        await loginPage.setUsername('invaliduser')
        await loginPage.setPassword('invalidpass')
        await loginPage.clickLoginButton();
        expect(await loginPage.getErrorMessage()).to.contain('Your username is invalid!\n×')
    });

});
