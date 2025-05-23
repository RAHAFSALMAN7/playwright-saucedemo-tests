import * as dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

dotenv.config();

test.describe('Sort Feature Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
  });

  test('Sort products by Name (A to Z)', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.sortBy('az'); // قيمة option للسورت أبجدياً (A-Z)
    const productNames = await productsPage.getProductNames();

    const sortedNames = [...productNames].sort((a, b) => a.localeCompare(b));
    expect(productNames).toEqual(sortedNames);
  });

  test('Sort products by Price (High to Low)', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.sortBy('hilo'); // قيمة option للسورت بالسعر من الأعلى للأدنى
    const productPrices = await productsPage.getProductPrices();

    const sortedPrices = [...productPrices].sort((a, b) => b - a);
    expect(productPrices).toEqual(sortedPrices);
  });
});
