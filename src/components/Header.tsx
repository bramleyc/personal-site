import { hero } from "@/lib/data"
import MobileNavigation from "./MobileNavigation"
import Navigation from "./Navigation"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-slate-700/40">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">

        <div className="flex items-start gap-2 font-semibold text-slate-100 text-lg leading-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] mt-2" />
          <div className="flex flex-col">
            <span>{hero.name}</span>
            <span className="hidden sm:inline text-slate-400 text-sm font-normal">
              {hero.title}
            </span>
          </div>
        </div>

        <Navigation />

        <MobileNavigation />
      </div>
    </header>
  )
}
