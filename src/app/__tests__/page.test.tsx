import { render, screen, within } from "@testing-library/react"
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
      "/qa"
    )

    experience.forEach((job) => {
      expect(screen.getAllByText(job.role).length).toBeGreaterThan(0)
    })

    const projectsList = screen.getByTestId("projects-list")
    projects.forEach((project) => {
      expect(within(projectsList).getByText(project.name)).toBeInTheDocument()
    })

    const skillsList = screen.getByTestId("skills-list")
    skills.forEach((skill) => {
      expect(within(skillsList).getByText(skill)).toBeInTheDocument()
    })

    const certificationsList = screen.getByTestId("certifications-list")
    certifications.forEach((cert) => {
      expect(within(certificationsList).getByText(cert.name)).toBeInTheDocument()
    })

    const contactEmail = screen.getByRole("link", { name: "Email me" })
    expect(contactEmail).toHaveAttribute("href", `mailto:${hero.contact.email}`)
  })
})
