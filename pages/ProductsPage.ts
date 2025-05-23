import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly addToCartButtons: Locator;
  readonly cartBadge: Locator;
  readonly sortDropdown: Locator;
  readonly productNames: Locator;
  readonly productPrices: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButtons = page.locator('button[data-test^="add-to-cart"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.sortDropdown = page.locator('.product_sort_container');
    this.productNames = page.locator('.inventory_item_name');
    this.productPrices = page.locator('.inventory_item_price');
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }

  async addMultipleProductsToCart(count: number) {
    for (let i = 0; i < count; i++) {
      await this.addToCartButtons.nth(i).click();
    }
  }

  async getCartCount() {
    return await this.cartBadge.textContent();
  }

  async sortBy(optionValue: string) {
    await this.sortDropdown.selectOption(optionValue);
    // انتظر شوية ليتحدّث ترتيب المنتجات (لو تحتاج)
    await this.page.waitForTimeout(1000);
  }

  async getProductNames(): Promise<string[]> {
    return await this.productNames.allTextContents();
  }

  async getProductPrices(): Promise<number[]> {
    const pricesText = await this.productPrices.allTextContents();
    // نحول النصوص مثل "$29.99" لأرقام 29.99
    return pricesText.map(price => parseFloat(price.replace('$', '')));
  }
}
