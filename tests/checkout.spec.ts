import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';

dotenv.config();

test.describe('Checkout Feature Test', () => {
  test('Complete checkout process after adding a product', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);

    await productsPage.addFirstProductToCart();
    await checkoutPage.openCart();
    await checkoutPage.clickCheckout();

    await checkoutPage.fillInformation('John', 'Doe', '12345');
    await checkoutPage.continueCheckout();
    await checkoutPage.finishCheckout();

    const success = await checkoutPage.isCheckoutComplete();
    expect(success).toBeTruthy();
  });
});
