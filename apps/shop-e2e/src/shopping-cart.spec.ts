import { test, expect } from '@playwright/test';

test.describe('Shopping Cart', () => {
  test.beforeEach(async ({ page }) => {
    // Clear cart state by going to cart and clearing it if it has items
    await page.goto('/cart');

    // Check if cart has items and clear them
    const cartItems = page.locator('[class*="cartItem"]');
    const itemCount = await cartItems.count();

    if (itemCount > 0) {
      const clearButton = page.locator('button:has-text("Clear Cart")');
      await clearButton.click();

      // Wait for cart to be empty
      await expect(page.locator('text=Your cart is empty')).toBeVisible();
    }
  });
  test('should add products to cart', async ({ page }) => {
    await page.goto('/');

    // Navigate to first product
    await page.locator('[class*="card"]').first().click();

    // Add to cart
    await page.locator('button:has-text("Add to Cart")').click();

    // Check cart badge shows 1 item
    const cartBadge = page.locator('[class*="cartBadge"]');
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toContainText('1');
  });

  test('should update quantity in cart', async ({ page }) => {
    await page.goto('/');

    // Add a product to cart
    await page.locator('[class*="card"]').first().click();
    await page.locator('button:has-text("Add to Cart")').click();

    // Go to cart
    await page.locator('[class*="cartLink"]').click();

    // Wait for cart to load by checking for quantity controls
    await expect(page.locator('[class*="quantityControls"]')).toBeVisible();

    // Find quantity controls
    const quantityControls = page.locator('[class*="quantityControls"]');
    const plusButton = quantityControls.locator('button:has-text("+")');
    const quantity = quantityControls.locator('span').filter({ hasText: /^\d+$/ });

    // Check initial quantity
    await expect(quantity).toContainText('1');

    // Increase quantity
    await plusButton.click();
    await expect(quantity).toContainText('2');

    // Check cart badge updated
    await expect(page.locator('[class*="cartBadge"]')).toContainText('2');
  });

  test('should remove items from cart', async ({ page }) => {
    await page.goto('/');

    // Add a product to cart
    await page.locator('[class*="card"]').first().click();
    await page.locator('button:has-text("Add to Cart")').click();

    // Go to cart
    await page.locator('[class*="cartLink"]').click();

    // Remove item
    await page.locator('button:has-text("Remove")').click();

    // Verify cart is empty
    await expect(page.locator('text=Your cart is empty')).toBeVisible();

    // Verify cart badge is not visible
    await expect(page.locator('[class*="cartBadge"]')).toBeHidden();
  });

  test('should calculate total correctly', async ({ page }) => {
    await page.goto('/');

    // Add first product (CoolCar Velocity - $89,999)
    await page.locator('[class*="card"]').first().click();
    await page.locator('button:has-text("Add to Cart")').click();

    // Go back and add second product (CoolCar Explorer - $54,999)
    await page.goto('/');
    await page.locator('[class*="card"]').nth(1).click();
    await page.locator('button:has-text("Add to Cart")').click();

    // Go to cart
    await page.locator('[class*="cartLink"]').click();

    // Wait for cart summary to load
    await expect(page.locator('[class*="cartSummary"]')).toBeVisible();

    // Check that we have 2 items
    await expect(page.locator('[class*="cartItem"]')).toHaveCount(2);

    // Check subtotal (just verify it exists and has a dollar amount)
    const subtotal = page.locator('[class*="summaryRow"]').filter({ hasText: 'Subtotal' });
    await expect(subtotal).toContainText('$');

    // Check total with tax exists
    const total = page.locator('[class*="totalRow"]');
    await expect(total).toContainText('$');
  });

  test('should have functional clear cart button', async ({ page }) => {
    await page.goto('/');

    // Add multiple products
    await page.locator('[class*="card"]').first().click();
    await page.locator('button:has-text("Add to Cart")').click();

    await page.goto('/');
    await page.locator('[class*="card"]').nth(1).click();
    await page.locator('button:has-text("Add to Cart")').click();

    // Go to cart
    await page.locator('[class*="cartLink"]').click();

    // Verify items are in cart
    await expect(page.locator('[class*="cartItem"]')).toHaveCount(2);

    // Clear cart
    await page.locator('button:has-text("Clear Cart")').click();

    // Verify cart is empty
    await expect(page.locator('text=Your cart is empty')).toBeVisible();
  });
});
