import { Locator, Page } from '@playwright/test';

// Твоя задача реализовать все нужные методы в классе, чтобы тесты успешно выполнялись
// В самих тестах никаких изменений вносить не надо
// В классе нужно реализовать следующие методы
// async navigate() to https://osstep.github.io/login
// async fillUsername(username: string)
// async fillPassword(password: string)
// async clickLogin()
// async login(username: string, password: string)
// async getErrorMessage()
// async isErrorMessageVisible()
// Если не понятно по названию метода, что он должен выполнять, можно заглянуть в шпарганку

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-btn');
    this.errorMessage = page.locator('#error-message');
  }

  async navigate() {
    await this.page.goto('https://osstep.github.io/login');
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async isErrorMessageVisible() {
    return await this.errorMessage.isVisible();
  }
}
