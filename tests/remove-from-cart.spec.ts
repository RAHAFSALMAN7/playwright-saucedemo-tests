import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test.describe('Remove Product from Cart Test', () => {
  test('Add product then remove it from cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);

    const productsPage = new ProductsPage(page);
    await productsPage.addFirstProductToCart();

    await page.click('a.shopping_cart_link');

    const cartPage = new CartPage(page);
    await cartPage.removeFirstProduct();

    // ✅ تحقق أن شارة السلة اختفت (ما عاد فيها رقم)
    await expect(cartPage.cartBadge).toHaveCount(0);
  });
});
