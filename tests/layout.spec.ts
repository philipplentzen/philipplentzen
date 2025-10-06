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
