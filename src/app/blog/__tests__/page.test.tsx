import { render, screen, within } from "@testing-library/react"
import type { ReactNode } from "react"
import BlogPage from "@/app/blog/page"

const mockPosts = [
  {
    slug: "first-post",
    title: "First Post",
    date: "2026-01-01",
    excerpt: "The first post excerpt.",
    tags: ["tag-a", "tag-b"]
  },
  {
    slug: "second-post",
    title: "Second Post",
    date: "2026-01-02",
    excerpt: "The second post excerpt.",
    tags: ["tag-c"]
  }
]

jest.mock("@/lib/posts", () => ({
  posts: [
    {
      slug: "first-post",
      title: "First Post",
      date: "2026-01-01",
      excerpt: "The first post excerpt.",
      tags: ["tag-a", "tag-b"]
    },
    {
      slug: "second-post",
      title: "Second Post",
      date: "2026-01-02",
      excerpt: "The second post excerpt.",
      tags: ["tag-c"]
    }
  ]
}))

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => "Mock post content")
}))

jest.mock("react-markdown", () => ({
  __esModule: true,
  default: ({ children }: { children: ReactNode }) => <>{children}</>
}))

describe("Blog Page", () => {
  it("renders the blog heading", () => {
    render(<BlogPage />)

    expect(
      screen.getByRole("heading", { level: 1, name: /Blog/i })
    ).toBeInTheDocument()
  })

  it("renders all mockPosts as articles", () => {
    const { container } = render(<BlogPage />)

    const articles = container.querySelectorAll("article")
    expect(articles).toHaveLength(mockPosts.length)
  })

  it("renders each post title and tags", () => {
    render(<BlogPage />)

    mockPosts.forEach((post) => {
      expect(screen.getAllByText(post.title)[0]).toBeInTheDocument()
      if (post.tags) {
        post.tags.forEach((tag) => {
          expect(screen.getAllByText(tag)[0]).toBeInTheDocument()
        })
      }
    })
  })

  it("renders a sidebar link for each post", () => {
    render(<BlogPage />)

    const sidebar = screen.getByRole("navigation", { name: "Blog post list" })
    const links = within(sidebar).getAllByRole("link")
    expect(links).toHaveLength(mockPosts.length)

    mockPosts.forEach((post) => {
      expect(
        within(sidebar).getAllByText(post.title)[0]
      ).toBeInTheDocument()
    })
  })

  it("sidebar links point to post anchors", () => {
    render(<BlogPage />)

    mockPosts.forEach((post) => {
      const link = screen.getByTestId(`sidebar-post-${post.slug}`)
      expect(link).toHaveAttribute("href", `#${post.slug}`)
    })
  })

  it("renders prev/next navigation between mockPosts", () => {
    render(<BlogPage />)

    // First post has no prev, but has a next link
    expect(screen.queryByTestId(`prev-post-${mockPosts[0].slug}`)).toBeNull()
    if (mockPosts.length > 1) {
      expect(screen.getByTestId(`next-post-${mockPosts[0].slug}`)).toBeInTheDocument()
    }

    // Last post has a prev link, but no next
    const lastPost = mockPosts[mockPosts.length - 1]
    if (mockPosts.length > 1) {
      expect(screen.getByTestId(`prev-post-${lastPost.slug}`)).toBeInTheDocument()
    }
    expect(screen.queryByTestId(`next-post-${lastPost.slug}`)).toBeNull()
  })
})
