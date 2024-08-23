import { LoginPage } from "../pages/login-page";
// import { Builder, WebDriver } from "selenium-webdriver";
import { expect } from "chai";
import { DashboardPage } from "../pages/dashboard-page";
import { PageFactory } from "../factories/page-factory";
import { BrowserFactory } from "../factories/browser-factory";
import { WebdriverInstance } from "../factories/webdriver-instance";


describe('Login Page Tests', () => {
    let loginPage: LoginPage
    let dashboardPage: DashboardPage


    before(async () => {

        await BrowserFactory.initializeBrowser();
        loginPage = PageFactory.createPage(LoginPage);
        dashboardPage = PageFactory.createPage(DashboardPage);
    
    });

    after(async () => {
        // await loginPage.closeBrowser();
        await WebdriverInstance.closeDriver();
    });
// 
    it('should login with valid credentials', async () => {
        await loginPage.open(loginPage.loginUrl);
        await loginPage.setUsername('tomsmith')
        await loginPage.setPassword('SuperSecretPassword!')
        await loginPage.clickLoginButton();
        expect(await dashboardPage.getPageTitle()).to.contain('The Internet');
    });
})



