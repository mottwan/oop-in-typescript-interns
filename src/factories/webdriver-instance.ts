import { WebDriver} from "selenium-webdriver";


export class WebdriverInstance {
    
    private static driver: WebDriver | null = null;
    
    private constructor(){}
    
    public static init(driver: WebDriver): void {
        if (!this.driver) {
            console.log(this.driver);
            this.driver = driver 
        }   
    }

    public static getDriver(): WebDriver {
        if (!this.driver) {
            throw Error ("Driver does no exist yet!!!"); 
        }
        return this.driver;
    }

    public static isDriverInitialized(): boolean {
        return this.driver === null;
    }
    
    public static async closeDriver(): Promise<void> {
        if (this.driver) {
            await this.driver.close();
            this.driver = null;
        }
    }
}
