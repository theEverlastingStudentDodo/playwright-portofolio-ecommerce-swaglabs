import { test, expect } from '@playwright/test';
import { LoginPage,  } from '../../pages/login.page';
import { configValues } from '../../env-config/envConfig';
import { mainPageTexts } from '../../messages/mainPageTexts';
import { MainPage } from '../../pages/main.page';
import { Checkout } from '../../pages/checkout.page';
import { checkoutPageTexts } from '../../messages/checkoutPageTexts';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login(configValues.validCreds, configValues.validPass);
    await mainPage.mainPageCheck(); //add a check to main page since the products are all in the main page
  });

test.describe('Add item to cart', () => {
    test('Search for an item and then add to cart and then checkout', async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.browseProductAndAddToCart(mainPageTexts.productName3);
        await mainPage.cartButton.click();
        const productName = mainPage.productName;
        await expect(productName).toHaveText(mainPageTexts.productName3);
        const checkout = new Checkout(page);
        await checkout.checkout(checkoutPageTexts.firstName, checkoutPageTexts.lastName, checkoutPageTexts.postalCode);
        const orderComplete = checkout.completeheader;
        await expect(orderComplete).toHaveText(checkoutPageTexts.checkoutComplete);
    })

test.afterEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.logout();
      });
})