import { test, expect } from '@playwright/test';

test(`Index Page`, async ({ page }) => {
	await page.goto(`/`);
	await expect(page).toHaveScreenshot(`index.png`);
});
