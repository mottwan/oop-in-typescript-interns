import { NewPage } from "../pages/new-page";
import { PageFactory } from "../../page-factory";
import { expect } from "chai";
import { BrowserFactory } from "../../browser-factory";
//import { WebDriverInstance } from "../../webdriver-instance";

describe("Validate New Page", () => {
  let newPage: NewPage;

  before(() => {
    BrowserFactory.createBrowser("firefox");
    newPage = PageFactory.createPage(NewPage);
  });

  after(async () => {
    //WebDriverInstance.close();
  });

  it("Validate something", async () => {
    await newPage.open("theInternet");
    expect(await newPage.getPageName("Geolocation")).to.be.true;
  });
});
