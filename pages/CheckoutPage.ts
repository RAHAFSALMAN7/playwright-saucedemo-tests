import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  async clickCheckout() {
    await this.page.click('[data-test="checkout"]');
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', postalCode);
  }

  async continueCheckout() {
    await this.page.click('[data-test="continue"]');
  }

  async finishCheckout() {
    await this.page.click('[data-test="finish"]');
  }

  async isCheckoutComplete() {
    return await this.page.locator('.complete-header').isVisible();
  }
}
