import { LoginPage } from "../pages/login-page";
import { Builder, WebDriver } from "selenium-webdriver";
import { expect } from "chai";
import { DashboardPage } from "../pages/dashboard-page";

describe('Login Page Tests', () => {
    let browser: WebDriver;
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;

    before( async () => {
        browser = await new Builder().forBrowser('chrome').build();
        loginPage = new LoginPage(browser);
        dashboardPage = new DashboardPage(browser);

    });

    after(async () => {
        await browser.quit();
    });

    it('should login with valid credentials', async () => {
        await loginPage.open();
        await loginPage.setUsername('testusername')
        await loginPage.setPassword('testpassword')
        await loginPage.clickLoginButton();
        expect(await dashboardPage.isWelcomeMessageDisplayed()).to.be.true;
    });
})
