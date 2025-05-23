import * as dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

dotenv.config();

test.describe('Login Feature', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('✅ Login with valid credentials', async () => {
    await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
    await expect(loginPage.page).toHaveURL(/inventory\.html/);
  });

  test('❌ Login with invalid username', async () => {
    await loginPage.login('invalid_user', process.env.APP_PASSWORD!);
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
  });

  test('❌ Login with invalid password', async () => {
    await loginPage.login(process.env.APP_USERNAME!, 'invalid_password');
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
  });

  test('❌ Login with empty username and password', async () => {
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });
});
