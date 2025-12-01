import { render, screen } from "@testing-library/react"
import ContactCard from "@/components/ContactCard"
import { hero } from "@/lib/data"

describe("ContactCard", () => {
  it("displays contact information from hero data", () => {
    render(<ContactCard />)

    expect(screen.getByText(hero.contact.email)).toBeInTheDocument()
    expect(screen.getByText(hero.contact.location)).toBeInTheDocument()
  })
})
