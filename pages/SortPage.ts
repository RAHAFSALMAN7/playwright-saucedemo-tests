import { Page } from '@playwright/test';

export class SortPage {
  constructor(public page: Page) { }

  async waitForSortDropdown() {
    await this.page.waitForSelector('[data-test="product_sort_container"]', {
      state: 'visible',
      timeout: 15000,
    });
  }

  async sortBy(option: 'az' | 'hilo') {
    // هذا السطر يمكن تبسيطه لأنه قيم option هي نفسها اللي يتم تمريرها
    await this.page.selectOption('[data-test="product_sort_container"]', option);

    // إضافة انتظار صغير عشان الصفحة تحدث ترتيب المنتجات بعد السورت (اختياري)
    await this.page.waitForTimeout(1000);
  }

  async getProductTitles(): Promise<string[]> {
    return await this.page.locator('.inventory_item_name').allInnerTexts();
  }

  async getProductPrices(): Promise<number[]> {
    const prices = await this.page.locator('.inventory_item_price').allInnerTexts();
    return prices.map(price => parseFloat(price.replace('$', '')));
  }
}
