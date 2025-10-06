import { expect, test } from "@playwright/test";

test("should display correct heading on the landing page", async ({ page }) => {
  await page.goto("/");
  const h1 = page.locator("h1");
  await expect(h1).toHaveText(
    "Kreativer Entwickler,digitaler Tüftler & Öcher Jong",
  );
});
