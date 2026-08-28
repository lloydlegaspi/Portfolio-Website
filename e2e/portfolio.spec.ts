import { expect, test } from "@playwright/test";

test("critical navigation and project modal flow", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: "John Lloyd Legaspi" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "View projects" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  const trigger = page.getByRole("button", {
    name: /enlarge image for tanggol/i,
  });
  await trigger.focus();
  await trigger.press("Enter");
  await expect(page.getByRole("dialog", { name: "Tanggol" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(trigger).toBeFocused();
});
