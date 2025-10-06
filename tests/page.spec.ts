import { expect, test } from "@playwright/test";

test("should display correct heading on the landing page", async ({ page }) => {
  await page.goto("/");
  const h1 = page.locator("h1");
  await expect(h1).toHaveText(
    "Kreativer Entwickler,digitaler Tüftler & Öcher Jong",
  );
});

test.describe("navigation", () => {
  [
    {
      name: "Showcase",
      link: "showcase",
    },
    {
      name: "Über mich",
      link: "about-me",
    },
    {
      name: "Kontakt",
      link: "contact",
    },
  ].forEach(({ name, link }) => {
    test(`should navigate to the '${name}' section`, async ({ page }) => {
      await page.goto("/");
      await page.getByRole("link", { name, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`${link}$`));
    });
  });
});
