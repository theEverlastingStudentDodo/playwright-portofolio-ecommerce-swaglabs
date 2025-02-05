import { Locator, Page } from '@playwright/test';

export class Checkout {

    private readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly checkoutButton: Locator;
    readonly completeheader: Locator;

     //Locators
  constructor(page: Page) {
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.checkoutButton = page.locator('#checkout');
    this.completeheader = page.locator('.complete-header');
  }

  async checkout(firstName: string, lastName: string, postalCode: string) {
    await this.checkoutButton.click();
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.continueButton.click();
    await this.finishButton.click();
  }
}