import { expect, test } from "@playwright/test";

[
  { name: "index", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "imprint", path: "/impressum" },
].forEach(({ name, path }) => {
  test(`${name} page`, async ({ page }) => {
    await page.goto(path);
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
  });
});
