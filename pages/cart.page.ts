//This is personal portfolio of the gitHub user with username theEverlastingStudentDodo
// theEverlastingStudentDodo does not give consent to everybody copying this script for whatever use

import { Locator, Page } from '@playwright/test';
import { configValues } from '../env-config/envConfig';

export class CartPage {

    private readonly page: Page;
    readonly cartList: Locator;

    //Locators
  constructor(page: Page) {
    this.cartList = page.locator('[data-test="cart-list"]')
  }
}    