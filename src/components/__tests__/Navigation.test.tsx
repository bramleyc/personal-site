import { render, screen, within } from "@testing-library/react"
import Navigation from "@/components/Navigation"

describe("Header", () => {
  it("renders navigation links in the expected order", () => {
    render(<Navigation />)

    const nav = screen.getByRole("navigation")
    const navLinks = within(nav).getAllByRole("link")
    const labels = navLinks.map((link) => link.textContent)
    expect(labels).toEqual(["About", "Experience", "Q&A", "Projects", "Skills", "Contact"])
  })
})
