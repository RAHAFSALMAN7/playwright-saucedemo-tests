import { Page, Locator } from '@playwright/test';

export class CartPage {
readonly page: Page;
readonly removeButtons: Locator;
readonly cartBadge: Locator;

constructor(page: Page) {
    this.page = page;
    this.removeButtons = page.locator('button[data-test^="remove-"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
}

async removeFirstProduct() {
    await this.removeButtons.first().click();
}

async isCartBadgeVisible(): Promise<boolean> {
    return await this.cartBadge.isVisible();
}

async getCartCount(): Promise<string | null> {
    return await this.cartBadge.textContent();
}
}
