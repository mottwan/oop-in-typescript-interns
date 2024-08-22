import { CheckBoxPage } from "../pages/checkbox-page";
import { assert, expect } from "chai";
import { BrowserFactory } from "../browser-factory";
import { PageFactory } from "../page-factory";

describe("Validate checkbox page", () => {
  let checkBoxPage: CheckBoxPage;

  before(() => {
    BrowserFactory.createBrowser("firefox");
    checkBoxPage = PageFactory.createPage(CheckBoxPage);
  });

  after(async () => {
    await checkBoxPage.close();
  });

  it("Validate second checkbox is selected by default", async () => {
    await checkBoxPage.open();
    expect((await checkBoxPage.validateCheckbox("second")).includes("checked"));
  });

  it("Validate first checkbox select action", async () => {
    await checkBoxPage.open();
    assert(await checkBoxPage.getPageName("Checkboxes"));
    await checkBoxPage.clickOnCheckbox("first");
    expect((await checkBoxPage.validateCheckbox("first")).includes("checked"));
  });
});
