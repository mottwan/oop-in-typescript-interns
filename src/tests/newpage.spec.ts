import { NewPage } from "../pages/new-page";
import { PageFactory } from "../page-factory";
import { expect } from "chai";
import { BrowserFactory } from "../browser-factory";

describe("Validate New Page", () => {
  //BrowserFactory.createBrowser("firefox");
  const browser = BrowserFactory.createBrowser('firefox')
  const newPage = PageFactory.createPage(NewPage);

  after(async () => {
    await browser.quit();
  });

  it("Validate something", async () => {
    await newPage.open();
    expect(await newPage.getPageName("Geolocation")).to.be.true;
  });
});
