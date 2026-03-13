import { posts } from "@/lib/posts"

describe("posts data integrity", () => {
  it("has at least one post", () => {
    expect(posts.length).toBeGreaterThan(0)
  })

  it("provides posts with required fields", () => {
    posts.forEach((post) => {
      expect(post.slug.trim()).not.toHaveLength(0)
      expect(post.title.trim()).not.toHaveLength(0)
      expect(post.date.trim()).not.toHaveLength(0)
      expect(post.excerpt.trim()).not.toHaveLength(0)
    })
  })

  it("has slugs that are URL-safe", () => {
    posts.forEach((post) => {
      expect(post.slug).toMatch(/^[a-z0-9-]+$/)
    })
  })

  it("has dates in YYYY-MM-DD format", () => {
    posts.forEach((post) => {
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    })
  })

  it("has unique slugs", () => {
    const slugs = posts.map((p) => p.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(posts.length)
  })

  it("has unique tags within each post", () => {
    posts.forEach((post) => {
      if (post.tags) {
        const uniqueTags = new Set(post.tags)
        expect(uniqueTags.size).toBe(post.tags.length)
      }
    })
  })
})
