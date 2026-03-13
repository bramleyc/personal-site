import { Post } from "@/lib/posts"

interface BlogPostListProps {
  posts: Post[]
  basePath?: string
  showExcerpt?: boolean
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })
}

export default function BlogPostList({
  posts,
  basePath = "",
  showExcerpt = false
}: BlogPostListProps) {
  return (
    <nav className="space-y-1" aria-label="Blog post list">
      {posts.map((post) => (
        <a
          key={post.slug}
          href={`${basePath}#${post.slug}`}
          data-testid={`sidebar-post-${post.slug}`}
          className="block text-sm text-slate-300 hover:text-white leading-tight py-1.5 pl-3 border-l-2 border-transparent hover:border-emerald-400 transition-colors"
        >
          {post.title}
          <span className="block text-xs text-slate-500 mt-0.5">
            {formatDate(post.date)}
          </span>
          {showExcerpt && (
            <span className="block text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
              {post.excerpt}
            </span>
          )}
        </a>
      ))}
    </nav>
  )
}
