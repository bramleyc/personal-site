import { test, expect } from "@playwright/test"

test("navigates from home to blog via desktop nav without console errors", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile-chrome", "Desktop nav is hidden on mobile — see mobile navigation test")

  const consoleErrors: string[] = []
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text())
    }
  })

  await page.goto("/")
  await page.locator("header").getByTestId("header-blog").click()
  await expect(page).toHaveURL(/\/blog/)
  await expect(page.getByRole("heading", { name: /Blog/ })).toBeVisible()

  expect(consoleErrors).toEqual([])
})

test("navigates from home to blog via mobile menu without console errors", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-chrome", "Mobile menu test — desktop uses header nav")

  const consoleErrors: string[] = []
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text())
    }
  })

  await page.goto("/")
  await page.getByTestId("mobile-menu-toggle").click()
  await page.getByTestId("mobile-menu-blog").click()
  await expect(page).toHaveURL(/\/blog/)
  await expect(page.getByRole("heading", { name: /Blog/ })).toBeVisible()

  expect(consoleErrors).toEqual([])
})

test("blog page renders post articles", async ({ page }) => {
  await page.goto("/blog")

  await expect(page.locator("article").first()).toBeVisible()
})

test("blog sidebar renders with post links (desktop only)", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile-chrome", "Sidebar is hidden on mobile — prev/next navigation is used instead")

  await page.goto("/blog")

  const sidebar = page.getByRole("navigation", { name: "Blog post list" })
  await expect(sidebar).toBeVisible()

  const firstSidebarLink = page.locator("[data-testid^='sidebar-post-']").first()
  await expect(firstSidebarLink).toBeVisible()

  const href = await firstSidebarLink.getAttribute("href")
  expect(href).toMatch(/^#/)
})

test("blog prev/next navigation links are present when multiple posts exist", async ({ page }) => {
  await page.goto("/blog")

  const articles = page.locator("article")
  const count = await articles.count()

  if (count < 2) {
    // Single post: no prev/next links should be rendered at all
    await expect(page.locator("[data-testid^='next-post-']")).toHaveCount(0)
    await expect(page.locator("[data-testid^='prev-post-']")).toHaveCount(0)
    return
  }

  // First article has a next link but no prev
  const firstId = await articles.first().getAttribute("id")
  await expect(page.getByTestId(`next-post-${firstId}`)).toBeVisible()
  expect(await page.getByTestId(`prev-post-${firstId}`).count()).toBe(0)

  // Last article has a prev link but no next
  const lastId = await articles.last().getAttribute("id")
  await expect(page.getByTestId(`prev-post-${lastId}`)).toBeVisible()
  expect(await page.getByTestId(`next-post-${lastId}`).count()).toBe(0)
})

test("mobile navigation includes blog link", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")

  await page.getByTestId("mobile-menu-toggle").click()
  await expect(page.getByTestId("mobile-menu-blog")).toBeVisible()
})
