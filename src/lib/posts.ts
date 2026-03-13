export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags?: string[]
}

export const posts: Post[] = [
  /**{
    slug: "the-crafts-future",
    title: "The Craft Is Not the Tests",
    date: "2026-03-30",
    excerpt:
      "What does it mean to be a test engineer in 2026? After fifteen years in the craft, I think the question deserves a fresh answer — one that has nothing to do with job titles.",
    tags: ["quality", "AI"]
  },**/
  {
    slug: "who-are-we-building-for",
    title: "Who are we building this for?",
    date: "2026-03-13",
    excerpt:
      "If people aren't building the code, why are we building our tests as if they still are?",
    tags: ["SDLC", "AI", "Specification testing"]
  }
  
]
