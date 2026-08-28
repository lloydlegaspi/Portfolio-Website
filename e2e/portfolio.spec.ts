import { expect, test } from "@playwright/test";

test("critical navigation and project modal flow", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: "John Lloyd Legaspi" }),
  ).toBeVisible();
  const resume = page.getByRole("link", { name: "Download CV" });
  await expect(resume).toHaveAttribute(
    "href",
    "/Legaspi_John_Lloyd_Resume.pdf",
  );
  const resumeResponse = await page.request.get(
    "/Legaspi_John_Lloyd_Resume.pdf",
  );
  expect(resumeResponse.ok()).toBe(true);
  expect(resumeResponse.headers()["content-type"]).toContain("application/pdf");
  await page.getByRole("link", { name: "View all certifications" }).click();
  await expect(page).toHaveURL(/\/certifications$/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Credentials and continued learning.",
    }),
  ).toBeVisible();
  await page.goto("/");
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
