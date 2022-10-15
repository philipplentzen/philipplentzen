import { test, expect } from '@playwright/test';

test(`homepage has "Hello World!" as content`, async ({ page }) => {
	await page.goto(`/`);
	const h1 = page.locator(`h1`);
	await expect(h1).toHaveText(`Hello World!`);
});
