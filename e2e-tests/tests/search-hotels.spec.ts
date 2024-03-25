import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173/";

test.beforeEach(async ({ page }) => {
    await page.goto(UI_URL);
  
    // get the sign in button
    await page.getByRole("link", { name: "Sign In" }).click();
  
    await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
  
    await page.locator("[name=email]").fill("55@55.com");
    await page.locator("[name=password]").fill("555555");
  
    await page.getByRole("button", { name: "Login" }).click();
  
    await expect(page.getByText("Sign in Successful!")).toBeVisible();
  });
  
  test("should show hotel search results", async ({ page }) => {
    await page.goto(UI_URL);
  
    await page.getByPlaceholder("Where are you going?").fill("Pilibhit");
    await page.getByRole("button", { name: "Search" }).click();
  
    await expect(page.getByText("Hotels found in Pilibhit")).toBeVisible();
    await expect(page.getByRole("link", {name: "The Royal Oasis Hotel"})).toBeVisible();
  });

  test("should show hotel detail", async ({ page }) => {
    await page.goto(UI_URL);
  
    await page.getByPlaceholder("Where are you going?").fill("Pilibhit");
    await page.getByRole("button", { name: "Search" }).click();
  
    await page.getByRole("link", { name: "The Royal Oasis Hotel" }).click();
    await expect(page).toHaveURL(/detail/);
    await expect(page.getByRole("button", { name: "Book now" })).toBeVisible();
  });
  