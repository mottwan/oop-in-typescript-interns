import { KeyPressesPage } from "../pages/keypresses-page";
import { expect } from "chai";
import { BrowserFactory } from "../browser-factory";
import { PageFactory } from "../page-factory";

describe("Verify key presses actions page", () => {
  BrowserFactory.createBrowser("firefox");
  //const browser = BrowserFactory.createBrowser('chrome')
  const keyPressPage = PageFactory.createPage(KeyPressesPage);

  after(async () => {
    await keyPressPage.quit();
  });

  it("Check SHIFT key press", async () => {
    await keyPressPage.open();
    await keyPressPage.clickOnInputField();
    await keyPressPage.keyPress("SHIFT");
    const a = keyPressPage.getKeyPress();
    expect((await a).includes("SHIFT")).to.be.true;
  });
});
