import { LoginPage } from "../pages/login-page";
import { Builder, WebDriver } from "selenium-webdriver";
import { expect } from "chai";
import { DashboardPage } from "../pages/dashboard-page";



describe('Login Page Tests', () => {
    let browser: WebDriver;
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;

    before(async () => {
        browser = await new Builder().forBrowser('chrome').build();
        loginPage = new LoginPage(browser);
        dashboardPage = new DashboardPage(browser);

    });

    beforeEach(async () => {
        await loginPage.open();
    })

    after(async () => {
        // await browser.close();
        await browser.quit();
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
    })

})
