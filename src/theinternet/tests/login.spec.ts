import { LoginPage } from "../pages/login-page";
import { expect } from "chai";
import { DashboardPage } from "../pages/dashboard-page";
import { BrowserFactory } from "../../browser-factory";
import { PageFactory } from "../../page-factory";
//import { WebDriverInstance } from "../../webdriver-instance";

describe("Login Page Tests", () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  before(() => {
    BrowserFactory.createBrowser("firefox");
    loginPage = PageFactory.createPage(LoginPage);
    dashboardPage = PageFactory.createPage(DashboardPage);
  });

  beforeEach(async () => {
    await loginPage.open("theInternet");
  });

  after(async () => {
    //WebDriverInstance.close();
  });

  it("should login with valid credentials", async () => {
    await loginPage.setUsername("tomsmith");
    await loginPage.setPassword("SuperSecretPassword!");
    await loginPage.clickLoginButton();
    expect(await dashboardPage.getPageTitle()).to.contain("The Internet");
  });

  it("login with invalid username and invalid password", async () => {
    await loginPage.setUsername("invaliduser");
    await loginPage.setPassword("invalidpass");
    await loginPage.clickLoginButton();
    expect(await loginPage.getErrorMessage()).to.contain(
      "Your username is invalid!\n×"
    );
  });
});
