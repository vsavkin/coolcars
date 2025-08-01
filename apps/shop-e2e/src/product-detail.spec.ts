import { test, expect } from '@playwright/test';

test.describe('Product Detail Page', () => {
  test('should navigate to product detail page when clicking a product', async ({ page }) => {
    await page.goto('/');

    // Click on the first product
    await page.locator('[class*="card"]').first().click();

    // Verify we're on the product detail page
    await expect(page).toHaveURL(/\/products\/1/);

    // Check that product name is displayed
    await expect(page.locator('h1')).toContainText('CoolCar Velocity');
  });

  test('should have working breadcrumb navigation', async ({ page }) => {
    await page.goto('/products/1');

    // Check breadcrumb is present
    const breadcrumb = page.locator('[class*="breadcrumb"]');
    await expect(breadcrumb).toContainText('Home / sports / CoolCar Velocity');

    // Click Home link in breadcrumb
    await breadcrumb.locator('a').click();

    // Verify we're back on the homepage
    await expect(page).toHaveURL('/');
  });

  test('should show add to cart button for in-stock items', async ({ page }) => {
    await page.goto('/products/1');

    // Check add to cart button is visible and enabled
    const addToCartButton = page.locator('button:has-text("Add to Cart")');
    await expect(addToCartButton).toBeVisible();
    await expect(addToCartButton).toBeEnabled();
  });

  test('should show out of stock button for unavailable items', async ({ page }) => {
    // Navigate to out of stock product (CoolCar Ranger - id: 7)
    await page.goto('/products/7');

    // Check that button shows "Out of Stock" and is disabled
    const outOfStockButton = page.locator('button:has-text("Out of Stock")');
    await expect(outOfStockButton).toBeVisible();
    await expect(outOfStockButton).toBeDisabled();
  });
});
