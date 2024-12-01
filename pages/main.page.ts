//
//

import { Locator, Page, expect } from '@playwright/test';

export class MainPage {

    private readonly page: Page;
    readonly headerField: Locator;

    //Locators
    constructor(page: Page) {
        this.page = page;
        this.headerField = page.getByText('Swag Labs');
    }
}