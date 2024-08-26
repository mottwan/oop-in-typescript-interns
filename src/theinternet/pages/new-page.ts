import { BasePage } from "./base-page";

export class NewPage extends BasePage {
  protected  url:string = "/geolocation";

  async getPageTitle(): Promise<string> {
    return await this.driver.getTitle();
  }


}
