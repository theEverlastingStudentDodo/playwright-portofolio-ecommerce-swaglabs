//This is personal portfolio of the gitHub user with username theEverlastingStudentDodo
// theEverlastingStudentDodo does not give consent to everybody copying this script for whatever use

import { test, expect } from '@playwright/test';

test("Login to Swag Labs using wrong credential", async({page}) => {
await page.goto('https://www.saucedemo.com/');
//since script below is a simple one, QA does not check in the database whether the creds is actually not exist or not
await page.fill('#user-name', 'fake_user');
await page.fill('#password', 'fake_password');
await page.click('#login-button');
const error = page.locator('[data-test="error"]');
await expect(error).toHaveText('Epic sadface: Username and password do not match any user in this service');

})