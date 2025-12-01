import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import MobileNavigation from "@/components/MobileNavigation"

describe("MobileMenuClient", () => {
  it("toggles the mobile navigation links", async () => {
    const user = userEvent.setup()
    render(<MobileNavigation />)

    const toggle = screen.getByTestId("mobile-menu-toggle")
    expect(toggle).toHaveAttribute("aria-expanded", "false")
    expect(screen.queryByTestId("mobile-menu-panel")).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByTestId("mobile-menu-panel")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "About" })).toBeVisible()

    await user.click(screen.getByRole("link", { name: "Projects" }))
    expect(toggle).toHaveAttribute("aria-expanded", "false")
    expect(screen.queryByTestId("mobile-menu-panel")).not.toBeInTheDocument()
  })
})
