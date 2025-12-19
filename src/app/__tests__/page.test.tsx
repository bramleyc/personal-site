import { render, screen } from "@testing-library/react"
import Page from "@/app/page"
import {
  hero,
  experience,
  projects,
  skills,
  certifications
} from "@/lib/data"

describe("Home Page", () => {
  it("renders hero copy and key sections from data", () => {
    render(<Page />)

    expect(
      screen.getByRole("heading", { level: 1, name: hero.name })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { level: 2, name: hero.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "Read full ChatGPT Q&A" })
    ).toHaveAttribute(
      "href",
      "qa.html"
    )

    experience.forEach((job) => {
      expect(screen.getAllByText(job.role).length).toBeGreaterThan(0)
    })

    projects.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument()
    })

    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })

    certifications.forEach((cert) => {
      expect(screen.getByText(cert.name)).toBeInTheDocument()
    })

    const contactEmail = screen.getByRole("link", { name: "Email me" })
    expect(contactEmail).toHaveAttribute("href", `mailto:${hero.contact.email}`)
  })
})
