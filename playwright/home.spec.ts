import { test, expect } from "@playwright/test"

// ─── Home → QA ───────────────────────────────────────────────────────────────

test("navigates from home to QA via desktop nav", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile-chrome", "Desktop nav hidden on mobile")

  const consoleErrors: string[] = []
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()) })

  await page.goto("/")
  await page.locator("header").getByTestId("header-qa").click()
  await expect(page).toHaveURL(/\/qa/)
  await expect(page.getByRole("heading", { name: /Q&A/ })).toBeVisible()
  expect(consoleErrors).toEqual([])
})

test("navigates from home to QA via mobile menu", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-chrome", "Mobile menu test — desktop uses header nav")

  const consoleErrors: string[] = []
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()) })

  await page.goto("/")
  await page.getByTestId("mobile-menu-toggle").click()
  await page.getByTestId("mobile-menu-qna").click()
  await expect(page).toHaveURL(/\/qa/)
  await expect(page.getByRole("heading", { name: /Q&A/ })).toBeVisible()
  expect(consoleErrors).toEqual([])
})

// ─── Blog → Home ─────────────────────────────────────────────────────────────

test("navigates from blog back to home via desktop nav", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile-chrome", "Desktop nav hidden on mobile")

  const consoleErrors: string[] = []
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()) })

  await page.goto("/blog")
  await page.locator("header").getByTestId("header-about").click()
  await expect(page).toHaveURL(/\/#about$/)
  await expect(page.getByRole("heading", { name: /Principal Test Engineer/ })).toBeVisible()
  expect(consoleErrors).toEqual([])
})

test("navigates from blog back to home via mobile menu", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-chrome", "Mobile menu test — desktop uses header nav")

  const consoleErrors: string[] = []
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()) })

  await page.goto("/blog")
  await page.getByTestId("mobile-menu-toggle").click()
  await page.getByTestId("mobile-menu-about").click()
  await expect(page).toHaveURL(/\/#about$/)
  await expect(page.getByRole("heading", { name: /Principal Test Engineer/ })).toBeVisible()
  expect(consoleErrors).toEqual([])
})

// ─── QA → Home ───────────────────────────────────────────────────────────────

test("navigates from QA back to home via desktop nav", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile-chrome", "Desktop nav hidden on mobile")

  const consoleErrors: string[] = []
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()) })

  await page.goto("/qa")
  await page.locator("header").getByTestId("header-about").click()
  await expect(page).toHaveURL(/\/#about$/)
  await expect(page.getByRole("heading", { name: /Principal Test Engineer/ })).toBeVisible()
  expect(consoleErrors).toEqual([])
})

test("navigates from QA back to home via mobile menu", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-chrome", "Mobile menu test — desktop uses header nav")

  const consoleErrors: string[] = []
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()) })

  await page.goto("/qa")
  await page.getByTestId("mobile-menu-toggle").click()
  await page.getByTestId("mobile-menu-about").click()
  await expect(page).toHaveURL(/\/#about$/)
  await expect(page.getByRole("heading", { name: /Principal Test Engineer/ })).toBeVisible()
  expect(consoleErrors).toEqual([])
})

// ─── Existing ─────────────────────────────────────────────────────────────────

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
