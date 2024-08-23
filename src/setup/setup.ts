import { WebdriverInstance } from "../factories/webdriver-instance";
import { after, describe } from 'mocha';

describe('Global teardown', () => {
    after(async () => {
        await WebdriverInstance.closeDriver();
    });

});  