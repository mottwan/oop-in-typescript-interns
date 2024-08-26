import { BasePage } from "./theinternet/pages/base-page";

export class PageFactory {
  public static createPage<T extends BasePage>(pageClass: new () => T): T {
    return new pageClass();
  }
}
