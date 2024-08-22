import { ImagePage } from "./../pages/image-page";
import { expect } from "chai";
import { BrowserFactory } from "../browser-factory";
import { PageFactory } from "../page-factory";

describe("Image validation page", () => {
  BrowserFactory.createBrowser("firefox");
  //const browser = BrowserFactory.createBrowser('chrome')
  const imagePage = PageFactory.createPage(ImagePage);

  after(async () => {
    await imagePage.quit();
  });

  it("All images must be valid", async () => {
    await imagePage.open();
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
