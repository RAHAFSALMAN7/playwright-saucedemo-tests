import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe(' Add Product to Cart Test', () => {

  test(' Add first product to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    // الانتقال إلى صفحة المنتجات مباشرة (الجلسة محفوظة مسبقًا)
    await page.goto('https://www.saucedemo.com/inventory.html');

    await productsPage.addFirstProductToCart();
    const count = await productsPage.getCartCount();
    expect(count).toBe('1');
  });

  test('✅ Add multiple products to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await page.goto('https://www.saucedemo.com/inventory.html');

    await productsPage.addMultipleProductsToCart(3);
    const count = await productsPage.getCartCount();
    expect(count).toBe('3');
  });

});
