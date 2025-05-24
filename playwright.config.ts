import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  retries: 0,

  // 🟡 1. نستخدم global setup script لتسجيل الدخول مرة واحدة
  globalSetup: require.resolve('./global-setup'),

  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com/',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    // 🟡 2. نستخدم storageState المخزن من global-setup
    storageState: 'storageState.json',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],

  outputDir: 'test-results/',
});
