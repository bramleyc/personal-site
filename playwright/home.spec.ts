import { test, expect } from "@playwright/test"

test("navigates from home to QA without console errors", async ({ page }) => {
  const consoleErrors: string[] = []
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text())
    }
  })

  await page.goto("/")
  await expect(
    page.getByRole("heading", {
      name: "Principal Test Engineer & Engineering Leader"
    })
  ).toBeVisible()

  await page.getByRole("link", { name: "Read full ChatGPT Q&A" }).click()
  await expect(page).toHaveURL(/\/qa$/)
  await expect(
    page.getByRole("heading", {
      name: /Q&A/
    })
  ).toBeVisible()

  expect(consoleErrors).toEqual([])
})

test("mobile navigation toggles open and closed", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")

  const toggle = page.getByTestId("mobile-menu-toggle")
  await expect(toggle).toBeVisible()
  await expect(toggle).toHaveAttribute("aria-expanded", "false")

  await toggle.click()
  await expect(toggle).toHaveAttribute("aria-expanded", "true")
  await expect(page.getByTestId("mobile-menu-panel")).toBeVisible()
  await expect(page.getByTestId("mobile-menu-experience")).toBeVisible()

  await page.getByTestId("mobile-menu-projects").click()
  await expect(page).toHaveURL(/#projects$/)
  await expect(toggle).toHaveAttribute("aria-expanded", "false")
  await expect(page.getByTestId("mobile-menu-panel")).toHaveCount(0)
})
