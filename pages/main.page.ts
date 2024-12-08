//
//

import { Locator, Page, expect } from '@playwright/test';
import { configValues } from '../env-config/envConfig';

export class MainPage {

    private readonly page: Page;
    readonly headerField: Locator;
    readonly sidebarButton: Locator;
    readonly logoutButton: Locator;
    readonly addToCartButton: Locator;
    readonly product: Locator;
    readonly productName: Locator;
    readonly cartButton: Locator;

    //Locators
    constructor(page: Page) {
        this.page = page;
        this.headerField = page.getByText('Swag Labs');
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');
        this.sidebarButton = page.getByRole('button', { name: 'Open Menu' });
        this.addToCartButton = page.locator('.btn_inventory'); //general locator for add to cart button
        this.product = page.locator('.inventory_item');
        this.productName = page.locator('.inventory_item_name ');
        this.cartButton = page.locator('[data-test="shopping-cart-link"]')
    }

    //Actions
    async logout() {
        const currentUrl = this.page.url();
        if (currentUrl !== configValues.mainPageURL) {
            console.log('Navigating to main page.');
            await this.page.goto(configValues.mainPageURL); // Navigate to the logout page
          } else {
            console.log('Already on the main page.');
          }
        await this.sidebarButton.click();
        await this.logoutButton.click();
      }

      async mainPageCheck() {
        const currentUrl = this.page.url();
        if (currentUrl !== configValues.mainPageURL) {
            console.log('Navigating to main page.');
            await this.page.goto(configValues.mainPageURL);
          } else {
            console.log('Already on the main page.');
          }
      }  
}