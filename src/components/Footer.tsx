import Navigation from "./Navigation"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-700/40 bg-slate-900/60 py-10 px-4 text-center text-[11px] text-slate-500 leading-relaxed">
      <div className="max-w-m mx-auto flex flex-col gap-2">

        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-slate-500">
          <Navigation/>
        </div>

        <div className="text-slate-600">
          © {year} Chris Bramley
        </div>
      </div>
    </footer>
  )
}
