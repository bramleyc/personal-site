import { render, screen } from "@testing-library/react"
import type { ReactNode } from "react"
import QAPage from "@/app/qa/page"
import { qa } from "@/lib/qa"

jest.mock("react-markdown", () => ({
  __esModule: true,
  default: ({ children }: { children: ReactNode }) => <>{children}</>
}))

describe("QA Page", () => {
  it("renders all Q&A entries with optional tags", () => {
    const { container } = render(<QAPage />)

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Q&A/i
      })
    ).toBeInTheDocument()

    const articles = container.querySelectorAll("article")
    expect(articles).toHaveLength(qa.length)

    const escapeRegex = (value: string) =>
      value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

    qa.forEach((entry) => {
      const questionMatches = screen.getAllByText(
        new RegExp(escapeRegex(entry.question))
      )
      expect(questionMatches.length).toBeGreaterThan(0)
      if (entry.tags) {
        entry.tags.forEach((tag) => {
          expect(screen.getAllByText(tag)[0]).toBeInTheDocument()
        })
      }
    })
  })
})
