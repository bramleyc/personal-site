import { render, screen, within } from "@testing-library/react"
import Header from "@/components/Header"

describe("Header", () => {
  it("renders primary navigation links and mobile toggle", () => {
    render(<Header />)

    expect(screen.getByText("Chris Bramley")).toBeInTheDocument()
    expect(
      screen.getByText("Principal Test Engineer & Engineering Leader")
    ).toBeInTheDocument()

    const nav = screen.getByRole("navigation")
    const navLinks = within(nav).getAllByRole("link")
    const labels = navLinks.map((link) => link.textContent)
    expect(labels).toEqual(["About", "Experience", "Q&A", "Projects", "Skills", "Contact"])

    expect(
      screen.getByRole("button", { name: /toggle navigation/i })
    ).toBeInTheDocument()
  })
})
