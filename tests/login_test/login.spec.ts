//This is personal portfolio of the gitHub user with username theEverlastingStudentDodo
// theEverlastingStudentDodo does not give consent to everybody copying this script for whatever use

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { configValues } from '../../env-config/envConfig';


test.describe('Login Functionality', () => {
    test('Login with valid credential', async ({ page }) => {
        const loginPage = new LoginPage(page);
       await loginPage.navigateToLogin();
       await loginPage.login(configValues.validCreds, configValues.validPass)
})

})