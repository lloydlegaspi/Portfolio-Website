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
  const certificationsLink = page.getByRole("link", {
    name: "View all certifications",
  });
  await expect(certificationsLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/john-lloyd-legaspi/details/certifications/",
  );
  await expect(certificationsLink).toHaveAttribute("target", "_blank");
  await expect(certificationsLink).toHaveAttribute("rel", "noreferrer");
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

test("opens the Movie case study from the homepage", async ({ page }) => {
  await page.goto("/");
  const movieCard = page.locator("article").filter({
    hasText:
      "Movie Analytics End-to-End Data Pipeline & Partner Screening Dashboard",
  });

  await movieCard.getByRole("link", { name: /view .* case study/i }).click();
  await expect(page).toHaveURL(/\/projects\/movie-analytics-pipeline$/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /movie analytics end-to-end data pipeline/i,
    }),
  ).toBeVisible();
  await expect(page.locator("figure").first()).toBeVisible();
});

test("opens the Olist case study from the project archive", async ({
  page,
}) => {
  await page.goto("/projects");
  const olistCard = page.locator("article").filter({
    hasText:
      "Olist Ecommerce End-to-End Data Pipeline & Regional Marketplace Analytics",
  });

  await olistCard.getByRole("link", { name: /view .* case study/i }).click();
  await expect(page).toHaveURL(/\/projects\/olist-ecommerce-pipeline$/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /olist ecommerce end-to-end data pipeline/i,
    }),
  ).toBeVisible();
  await expect(page.locator("figure").first()).toBeVisible();
});

test("returns 404 for an unknown project case study", async ({ page }) => {
  const response = await page.goto("/projects/not-a-case-study");

  expect(response?.status()).toBe(404);
  await expect(page.getByText(/this page could not be found/i)).toBeVisible();
});
