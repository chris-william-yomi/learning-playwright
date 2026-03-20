import { test, expect } from '@playwright/test';

test('@smoke has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('@smoke get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('@smoke Fill a placeholder', async ({ page }) => {
  await page.goto('https://html.com/')

  // Place the product name inside the search box
  await page.getByPlaceholder('Search').fill("Laptop");

  // Click the GO button to search for the product
  await page.getByRole("button", {name: 'Search'}).click();
});