import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Feature Test without login in test', () => {
  test('Complete checkout process after adding a product', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    // نذهب مباشرة إلى صفحة المنتجات لأننا مفترضين الجلسة محفوظة
    await page.goto('/inventory.html');

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
