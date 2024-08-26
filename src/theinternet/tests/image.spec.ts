import { ImagePage } from "./../pages/image-page";
import { expect } from "chai";
import { BrowserFactory } from "../../browser-factory";
import { PageFactory } from "../../page-factory";
//import { WebDriverInstance } from "../../webdriver-instance";

describe("Image validation page", () => {
  let imagePage: ImagePage;
  before(() => {
    BrowserFactory.createBrowser("firefox");
    imagePage = PageFactory.createPage(ImagePage);
  });

  after(async () => {
    //WebDriverInstance.close();
  });

  it("All images must be valid", async () => {
    await imagePage.open("theInternet");
    const images = await imagePage.findAllImages();
    for (let image of images) {
      const attrValue = await image.getAttribute("src");
      if (!(await image.getAttribute("src")).includes("/img/")) {
        console.log("Provided images are borken " + attrValue);
        expect(image.isDisplayed).to.be.true;
      }
    }
  });
});
