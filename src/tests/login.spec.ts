import { LoginPage } from "../pages/login-page";
import { Builder, WebDriver } from "selenium-webdriver";
import { expect } from "chai";
import { DashboardPage } from "../pages/dashboard-page";



describe('Login Page Tests', () => {
    let browser: WebDriver;
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;

    before( async () => {
        // browser = await new Builder().forBrowser('chrome').build();
        browser = await new Builder().forBrowser('firefox').build();
        loginPage = new LoginPage(browser);
        dashboardPage = new DashboardPage(browser);

    });

    after(async () => {
        // await browser.close();
        await browser.quit();
    });

    it('should login with valid credentials', async () => {
        await loginPage.open();
        await loginPage.setUsername('tomsmith')
        await loginPage.setPassword('SuperSecretPassword!')
        await loginPage.clickLoginButton();
        expect(await dashboardPage.getPageTitle()).to.contain('The Internet');
    });
})



