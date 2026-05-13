import Link from "next/link";

interface NavigationProps {
  testIdPrefix?: string
}

export default function Navigation({ testIdPrefix }: NavigationProps) {
  const testId = (name: string) =>
    testIdPrefix ? { "data-testid": `${testIdPrefix}-${name}` } : {}

  return (
    <nav className="hidden md:flex gap-6 text-sm text-slate-300">
      <Link href="/#about" className="hover:text-white" {...testId("about")}>
        About
      </Link>
      <Link href="/#experience" className="hover:text-white" {...testId("experience")}>
        Experience
      </Link>
      <Link href="/qa" className="hover:text-white" {...testId("qa")}>
        Q&A
      </Link>
      <Link href="/blog" className="hover:text-white" {...testId("blog")}>
        Blog
      </Link>
      <Link href="/#projects" className="hover:text-white" {...testId("projects")}>
        Projects
      </Link>
      <Link href="/#skills" className="hover:text-white" {...testId("skills")}>
        Skills
      </Link>
      <Link href="/#contact" className="hover:text-white" {...testId("contact")}>
        Contact
      </Link>
    </nav>
  )
}
