import { render, screen } from "@testing-library/react"
import Footer from "@/components/Footer"

describe("Footer", () => {
  it("renders navigation shortcuts and current year", () => {
    render(<Footer />)

    const shortcuts = ["About", "Experience", "Projects", "Skills", "Contact"]
    shortcuts.forEach((label) => {
      expect(screen.getAllByRole("link", { name: label })[0]).toBeInTheDocument()
    })

    const year = new Date().getFullYear()
    expect(screen.getByText(`© ${year} Chris Bramley`)).toBeInTheDocument()
  })
})
