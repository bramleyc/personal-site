import { render, screen } from "@testing-library/react"
import { SectionHeading } from "@/components/SectionHeading"

describe("SectionHeading", () => {
  it("renders title with colour indicator", () => {
    const colourClass = "bg-white"
    render(<SectionHeading colourClass={colourClass} title="Experience" />)

    const heading = screen.getByRole("heading", { level: 2, name: "Experience" })
    expect(heading).toBeInTheDocument()
    const indicator = heading.querySelector("span")
    expect(indicator?.className).toContain(colourClass)
  })
})
