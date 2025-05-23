import * as dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

dotenv.config();

test.describe('Add Product to Cart Test', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
  });

  test('Add first product to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addFirstProductToCart();
    const count = await productsPage.getCartCount();
    expect(count).toBe('1');
  });

  test('Add multiple products to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addMultipleProductsToCart(3);
    const count = await productsPage.getCartCount();
    expect(count).toBe('3');
  });
});
