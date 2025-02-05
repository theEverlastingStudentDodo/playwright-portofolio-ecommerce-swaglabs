import { Locator, Page } from '@playwright/test';

export class CartPage {

    private readonly page: Page;
    readonly cartList: Locator;
    readonly removeItemButton: Locator;
    readonly productInTheCart: Locator;

    //Locators
  constructor(page: Page) {
    this.cartList = page.locator('[data-test="cart-list"]');
    this.removeItemButton = page.locator('.btn.btn_secondary.btn_small.cart_button');
    this.productInTheCart = page.locator('.inventory_item_name');
  }

  //Actions
  async browseProductInTheCart(productName: string) {
    const productCardInTheCart = this.productInTheCart.filter({hasText: productName});
    await productCardInTheCart.hover();
}

}    