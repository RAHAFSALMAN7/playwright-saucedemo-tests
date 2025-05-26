// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';
import dotenv from 'dotenv';

// تحميل متغيرات البيئة من ملف .env
dotenv.config();

async function globalSetup(config: FullConfig) {
  // تشغيل المتصفح
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // الذهاب إلى صفحة تسجيل الدخول
  await page.goto(process.env.BASE_URL || 'https://www.saucedemo.com/');

  // تعبئة بيانات الدخول
  await page.fill('#user-name', process.env.APP_USERNAME || '');
  await page.fill('#password', process.env.APP_PASSWORD || '');
  await page.click('#login-button');

  // التأكد من الانتقال إلى صفحة المنتجات
  await page.waitForURL('**/inventory.html');

  // حفظ حالة الجلسة في ملف storageState.json (يتطابق مع config)
  await page.context().storageState({ path: 'storageState.json' });

  // إغلاق المتصفح
await browser.close();
}

export default globalSetup;
