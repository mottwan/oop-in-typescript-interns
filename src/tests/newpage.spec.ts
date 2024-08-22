import { NewPage } from "../pages/new-page";
import { PageFactory } from "../page-factory";
import { expect } from "chai";
import { BrowserFactory } from "../browser-factory";

describe("Validate New Page", () => {
  let newPage: NewPage;

  before(() => {
    BrowserFactory.createBrowser("firefox");
    newPage = PageFactory.createPage(NewPage);
  });

  after(async () => {
    await newPage.close();
  });

  it("Validate something", async () => {
    await newPage.open();
    expect(await newPage.getPageName("Geolocation")).to.be.true;
  });
});
