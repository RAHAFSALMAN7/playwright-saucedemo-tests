import { chromium } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

async function globalSetup() {
const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(process.env.BASE_URL!);

  // تسجيل الدخول باستخدام المتغيرات المعدلة
await page.fill('#user-name', process.env.APP_USERNAME!);
await page.fill('#password', process.env.APP_PASSWORD!);
await page.click('#login-button');

  // التأكد من نجاح الدخول
await page.waitForURL('**/inventory.html');

  // حفظ حالة الجلسة
await page.context().storageState({ path: 'storageState.json' });

await browser.close();
}

export default globalSetup;
