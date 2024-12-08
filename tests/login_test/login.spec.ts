//This is personal portfolio of the gitHub user with username theEverlastingStudentDodo
// theEverlastingStudentDodo does not give consent to everybody copying this script for whatever use

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { configValues } from '../../env-config/envConfig';
import { loginMessages } from '../../messages/loginMessages';
import { MainPage } from '../../pages/main.page';


test.describe('Login Functionality', () => {

test('Login with valid credential', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login(configValues.validCreds, configValues.validPass);
    const header = mainPage.headerField;
    await expect(header).toBeVisible();
})

test('Login with invalid credential', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login(configValues.invalidCreds, configValues.invalidPass);
    const error = loginPage.errorBox;
    await expect(error).toHaveText(loginMessages.invalidCreds);
})

test('Login with empty username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login('', configValues.validPass);
    const error = loginPage.errorBox;
    await expect(error).toHaveText(loginMessages.missingUsername);
})

test('Login with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login(configValues.validCreds, '');
    const error = loginPage.errorBox;
    await expect(error).toHaveText(loginMessages.missingPassword);
})

test('Login with empty username and empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login('', '');
    const error = loginPage.errorBox;
    await expect(error).toHaveText(loginMessages.missingUsername);
})

test('Login with locked creds', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login('', '');
    const error = loginPage.errorBox;
    await expect(error).toHaveText(loginMessages.missingUsername);
})

test('Logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login(configValues.validCreds, configValues.validPass);
    const header = mainPage.headerField;
    await expect(header).toBeVisible();
    await mainPage.logout();
    const loginButton = loginPage.loginButton;
    await expect(loginButton).toBeVisible();
})

})