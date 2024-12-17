//This is personal portfolio of the gitHub user with username theEverlastingStudentDodo
// theEverlastingStudentDodo does not give consent to everybody copying this script for whatever use

import { test, expect } from '@playwright/test';
import { LoginPage,  } from '../../pages/login.page';
import { configValues } from '../../env-config/envConfig';
import { mainPageTexts } from '../../messages/mainPageTexts';
import { MainPage } from '../../pages/main.page';
import { CartPage } from '../../pages/cart.page';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login(configValues.validCreds, configValues.validPass);
    await mainPage.mainPageCheck(); //add a check to main page since the products are all in the main page
  });

test.describe('Add item to cart', () => {
    test('Search for an item and then add to cart', async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.browseProductAndAddToCart(mainPageTexts.productName3);
        await mainPage.cartButton.click();
        const productName = mainPage.productName;
        await expect(productName).toHaveText(mainPageTexts.productName3);
    })

    test('Search for two items and then add to cart', async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.browseProductAndAddToCart(mainPageTexts.productName1);
        await mainPage.browseProductAndAddToCart(mainPageTexts.productName2);
        await mainPage.cartButton.click();
        const cartPage = new CartPage(page);
        const cartList = cartPage.cartList;
        await expect(cartList).toContainText(mainPageTexts.productName1);
        await expect(cartList).toContainText(mainPageTexts.productName2);
    })

test.afterEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.logout();
      });
})