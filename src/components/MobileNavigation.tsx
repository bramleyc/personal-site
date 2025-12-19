"use client"

import { useState } from "react"

export default function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        data-testid="mobile-menu-toggle"
        className="md:hidden p-2 rounded-lg border border-slate-700/60 bg-slate-800/60 text-slate-200"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      {open && (
        <div
          data-testid="mobile-menu-panel"
          className="md:hidden border-t border-slate-700/40 bg-slate-900/90 px-4 pb-4 text-sm text-slate-300"
        >
          <div className="flex flex-col gap-3 pt-3">
            <a href="qa.html" className="hover:text-white" data-testid="mobile-menu-qna" onClick={() => setOpen(false)}>ChatGPT Q&A</a>
            <a href="#about" className="hover:text-white" data-testid="mobile-menu-about" onClick={() => setOpen(false)}>About</a>
            <a href="#experience" className="hover:text-white" data-testid="mobile-menu-experience" onClick={() => setOpen(false)}>Experience</a>
            <a href="#projects" className="hover:text-white" data-testid="mobile-menu-projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#skills" className="hover:text-white" data-testid="mobile-menu-skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" className="hover:text-white" data-testid="mobile-menu-contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </>
  )
}
