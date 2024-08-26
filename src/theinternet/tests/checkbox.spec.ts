import { BrowserFactory } from "../../browser-factory";
import { PageFactory } from "../../page-factory";
//import { WebDriverInstance } from "../../webdriver-instance";
import { CheckBoxPage } from "../pages/checkbox-page";
import { assert, expect } from "chai";

describe("Validate checkbox page", () => {
  let checkBoxPage: CheckBoxPage;

  before(() => {
    BrowserFactory.createBrowser("firefox");
    checkBoxPage = PageFactory.createPage(CheckBoxPage);
  });

  after(async () => {
    //WebDriverInstance.close();
  });

  it("Validate second checkbox is selected by default", async () => {
    await checkBoxPage.open("theInternet");
    expect((await checkBoxPage.validateCheckbox("first")).includes("checked"));
  });

  it("Validate first checkbox select action", async () => {
    await checkBoxPage.open("theInternet");
    assert(await checkBoxPage.getPageName("Checkboxes"));
    await checkBoxPage.clickOnCheckbox("first");
    expect((await checkBoxPage.validateCheckbox("first")).includes("checked"));
  });
});
