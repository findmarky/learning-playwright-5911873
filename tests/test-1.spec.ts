import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('heading', { name: 'AmbassadorsDirect link to' }).click();
  await expect(page.getByRole('article')).toContainText('Check out our Ambassador page to the see the awesome people creating Playwright content and sharing it with the community.');
});