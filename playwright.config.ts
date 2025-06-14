import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [['list'], ['allure-playwright']],
  timeout: 60000, // ✅ Allow 60 seconds globally per test
});
