import { expect } from "chai";
import { BrowserFactory } from "../../browser-factory";
import { PageFactory } from "../../page-factory";
import { UploadPage } from "../pages/upload-page";
//import { WebDriverInstance } from "../../webdriver-instance";

describe("Test Upload Page", () => {
  let uploadPage: UploadPage;

  before(() => {
    BrowserFactory.createBrowser("firefox");
    uploadPage = PageFactory.createPage(UploadPage);
  });

  after(async () => {
    uploadPage.close();
  });

  it('Upload file with "Choose File" button', async () => {
    await uploadPage.open("theInternet");
    await uploadPage.clickChooseButton("choseFile");
    await uploadPage.clickUploadButton();
    const msg = await uploadPage.successMessage();
    const a = await msg.getText();
    expect(a.includes("File Uploaded!\n1.txt")).to.be.true;
  });
});
