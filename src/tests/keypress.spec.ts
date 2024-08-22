import { KeyPressesPage } from "../pages/keypresses-page";
import { expect } from "chai";
import { BrowserFactory } from "../browser-factory";
import { PageFactory } from "../page-factory";

describe("Verify key presses actions page", () => {
  let keyPressPage: KeyPressesPage;
  before(() => {
    BrowserFactory.createBrowser("firefox");
    keyPressPage = PageFactory.createPage(KeyPressesPage);
  });

  after(async () => {
    await keyPressPage.close();
  });

  it("Check SHIFT key press", async () => {
    await keyPressPage.open();
    await keyPressPage.clickOnInputField();
    await keyPressPage.keyPress("SHIFT");
    const a = keyPressPage.getKeyPress();
    expect((await a).includes("SHIFT")).to.be.true;
  });
});
