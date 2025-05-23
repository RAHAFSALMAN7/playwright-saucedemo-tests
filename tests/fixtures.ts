import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = baseTest.extend({
  login: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await use(page);
  }
});