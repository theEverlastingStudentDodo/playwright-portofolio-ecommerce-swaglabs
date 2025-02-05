import { Locator, Page } from '@playwright/test';
import { configValues } from '../env-config/envConfig';


export class LoginPage {
  
  private readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly errorBox: Locator;

  //Locators
  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#user-name');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorBox = page.locator('[data-test="error"]');
  }

  // Actions
  async navigateToLogin() {
    await this.page.goto(configValues.baseURL);
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}

