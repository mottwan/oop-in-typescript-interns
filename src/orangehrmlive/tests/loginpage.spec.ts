import { LoginPage } from "../pages/login-page";
import { BrowserFactory } from "../../browser-factory";
import { PageFactory } from "../../page-factory";
import { expect } from "chai";
//import { WebDriverInstance } from "../../webdriver-instance";

describe("Login Page Tests", () => {
  let loginPage: LoginPage;
  

  before(() => {
    BrowserFactory.createBrowser("firefox");
    loginPage = PageFactory.createPage(LoginPage);
    
  });

  beforeEach(async () => {
    await loginPage.open("orangehrmlive");
    await loginPage.sleep(500);
  });

  after(async () => {
    //await WebDriverInstance.close();
  });

  it("should login with valid credentials", async () => {
    await loginPage.setUsername("Admin");
    await loginPage.setPassword("admin123");
    await loginPage.clickLoginButton();
    await loginPage.sleep(500)
    expect (await loginPage.getPageName('Dashboard')).to.be.true
    
  });
});
