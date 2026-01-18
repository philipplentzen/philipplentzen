import { expect, test } from "@playwright/test";

test(`landing page`, async ({ page }) => {
  await page.goto(`/`);
  await expect(page).toHaveScreenshot("index.png", { fullPage: true });
});
