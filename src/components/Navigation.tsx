import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="hidden md:flex gap-6 text-sm text-slate-300">
      <Link href="/#about" className="hover:text-white" data-testid="header-about">
        About
      </Link>
      <Link href="/#experience" className="hover:text-white" data-testid="header-experience">
        Experience
      </Link>
      <Link href="qa.html" className="hover:text-white" data-testid="header-qa">
        Q&A
      </Link>
      <Link href="/#projects" className="hover:text-white" data-testid="header-projects">
        Projects
      </Link>
      <Link href="/#skills" className="hover:text-white" data-testid="header-skills">
        Skills
      </Link>
      <Link href="/#contact" className="hover:text-white" data-testid="header-contact">
        Contact
      </Link>
    </nav>
  )
}
