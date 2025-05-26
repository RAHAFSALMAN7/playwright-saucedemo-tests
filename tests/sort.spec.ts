import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Sort Feature Tests', () => {
  test.beforeEach(async ({ page }) => {
    // افتح صفحة المنتجات مباشرة (الجلسة محفوظة مسبقًا)
    await page.goto('/inventory.html');
  });

  test('Sort products by Name (A to Z)', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.sortBy('az'); // السورت أبجدياً (A-Z)
    const productNames = await productsPage.getProductNames();

    const sortedNames = [...productNames].sort((a, b) => a.localeCompare(b));
    expect(productNames).toEqual(sortedNames);
  });

  test('Sort products by Price (High to Low)', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.sortBy('hilo'); // السورت بالسعر من الأعلى للأدنى
    const productPrices = await productsPage.getProductPrices();

    const sortedPrices = [...productPrices].sort((a, b) => b - a);
    expect(productPrices).toEqual(sortedPrices);
  });
});
