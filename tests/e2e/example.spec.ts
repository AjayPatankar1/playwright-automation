import { test, expect } from '@playwright/test';

test.describe('Example Test Suite', () => {
  test.beforeEach(async ({ page }) => {
    // Setup before each test
    await page.goto('https://example.com');
  });

  test('should have the correct title', async ({ page }) => {
    // Assert page title
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('should verify page heading', async ({ page }) => {
    // Verify main heading
    const heading = page.locator('h1');
    await expect(heading).toContainText('Example Domain');
  });

  test('should verify paragraph text', async ({ page }) => {
    // Verify paragraph content
    const paragraph = page.locator('p').first();
    await expect(paragraph).toContainText('This domain is for use in examples');
  });
});
