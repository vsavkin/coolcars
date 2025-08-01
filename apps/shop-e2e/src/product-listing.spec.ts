import { test, expect } from '@playwright/test';

test.describe('Product Listing', () => {
  test('should display all products on the homepage', async ({ page }) => {
    await page.goto('/');

    // Check that product cards are displayed
    const productCards = page.locator('[class*="card"]');
    await expect(productCards).toHaveCount(8); // We have 8 products
  });

  test('should display product information correctly', async ({ page }) => {
    await page.goto('/');

    // Check first product details
    const firstProduct = page.locator('[class*="card"]').first();
    
    // Check that product name is visible
    await expect(firstProduct.locator('h3')).toContainText('CoolCar Velocity');
    
    // Check that category is displayed
    await expect(firstProduct.locator('[class*="category"]')).toContainText('SPORTS');
    
    // Check that price is displayed
    await expect(firstProduct.locator('[class*="price"]')).toContainText('$89,999');
  });

  test('should show SVG car illustrations instead of photos', async ({ page }) => {
    await page.goto('/');

    // Check that SVG elements are present in product cards
    const firstProductSvg = page.locator('[class*="card"]').first().locator('svg');
    await expect(firstProductSvg).toBeVisible();
    
    // Verify SVG has viewBox attribute (characteristic of our custom SVGs)
    await expect(firstProductSvg).toHaveAttribute('viewBox', '0 0 400 200');
  });

  test('should indicate out of stock products', async ({ page }) => {
    await page.goto('/');

    // Find the out of stock product (CoolCar Ranger)
    const outOfStockProduct = page.locator('[class*="card"]').filter({ hasText: 'CoolCar Ranger' });
    
    // Check that out of stock indicator is visible
    await expect(outOfStockProduct.locator('[class*="outOfStock"]')).toBeVisible();
    await expect(outOfStockProduct.locator('[class*="outOfStock"]')).toContainText('Out of Stock');
  });
});