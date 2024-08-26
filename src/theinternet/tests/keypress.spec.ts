import { KeyPressesPage } from "../pages/keypresses-page";
import { expect } from "chai";
import { BrowserFactory } from "../../browser-factory";
import { PageFactory } from "../../page-factory";
//import { WebDriverInstance } from "../../webdriver-instance";

describe("Verify key presses actions page", () => {
  let keyPressPage: KeyPressesPage;
  before(() => {
    BrowserFactory.createBrowser("firefox");
    keyPressPage = PageFactory.createPage(KeyPressesPage);
  });

  after(async () => {
   // WebDriverInstance.close();
  });

  it("Check SHIFT key press", async () => {
    await keyPressPage.open("theInternet");
    await keyPressPage.clickOnInputField();
    await keyPressPage.keyPress("SHIFT");
    const a = keyPressPage.getKeyPress();
    expect((await a).includes("SHIFT")).to.be.true;
  });
});
