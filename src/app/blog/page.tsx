import fs from "fs"
import path from "path"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BlogPostList from "@/components/BlogPostList"
import { posts } from "@/lib/posts"
import ReactMarkdown from "react-markdown"

export const metadata = {
  title: "Blog – Chris Bramley",
  description:
    "Thoughts on software quality, testing, engineering leadership, and the craft of building reliable software."
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })
}

export default function BlogPage() {
  const postsWithContent = posts.map((post) => {
    const filePath = path.join(
      process.cwd(),
      "src",
      "content",
      "blog",
      `${post.slug}.md`
    )
    const content = fs.readFileSync(filePath, "utf-8")
    return { ...post, content }
  })

  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="space-y-3 mb-10">
          <h1 className="text-3xl uppercase tracking-wide text-emerald-300/80 font-mono">
            Blog
          </h1>
          <p className="text-slate-300">
            Thoughts on quality, craft, and the ever-changing world of software
            engineering.
          </p>
        </div>

        <div className="flex gap-8 items-start">
          {/* Sticky sidebar */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-6 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4">
              <h2 className="text-xs uppercase tracking-widest text-emerald-300/60 font-mono mb-3">
                Posts
              </h2>
              <BlogPostList posts={postsWithContent} />
            </div>
          </aside>

          {/* Posts */}
          <div className="flex-1 space-y-16 min-w-0">
            {postsWithContent.map((post, idx) => (
              <article
                key={post.slug}
                id={post.slug}
                data-testid={`blog-post-${post.slug}`}
                className="bg-slate-800/60 border border-slate-700/60 rounded-2xl shadow-xl shadow-black/60 p-6 scroll-mt-6"
              >
                <header className="mb-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <h1 className="text-3xl font-bold text-white leading-tight">
                      {post.title}
                    </h1>
                    {post.tags && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <time
                    dateTime={post.date}
                    className="text-sm text-slate-400"
                  >
                    {formatDate(post.date)}
                  </time>
                </header>

                <div className="prose prose-invert prose-sm max-w-none text-slate-300">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                {/* Prev / Next navigation */}
                <footer className="mt-8 pt-6 border-t border-slate-700/40 flex justify-between items-center text-sm gap-4">
                  {idx > 0 ? (
                    <a
                      href={`#${postsWithContent[idx - 1].slug}`}
                      data-testid={`prev-post-${post.slug}`}
                      className="text-slate-400 hover:text-white transition-colors truncate"
                    >
                      ← {postsWithContent[idx - 1].title}
                    </a>
                  ) : (
                    <span />
                  )}
                  {idx < postsWithContent.length - 1 ? (
                    <a
                      href={`#${postsWithContent[idx + 1].slug}`}
                      data-testid={`next-post-${post.slug}`}
                      className="text-slate-400 hover:text-white transition-colors truncate text-right"
                    >
                      {postsWithContent[idx + 1].title} →
                    </a>
                  ) : (
                    <span />
                  )}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
