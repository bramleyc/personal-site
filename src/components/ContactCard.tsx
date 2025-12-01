import { hero } from "@/lib/data"

export default function ContactCard() {
  return (
    <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl shadow-xl shadow-black/60 p-5 space-y-3 text-slate-300 text-sm leading-relaxed">
      <div>
        <div className="text-slate-400 text-[11px] font-mono uppercase tracking-wide">Email</div>
        <div className="text-slate-200 font-medium leading-tight break-all">
          {hero.contact.email}
        </div>
      </div>

      <div>
        <div className="text-slate-400 text-[11px] font-mono uppercase tracking-wide">Location</div>
        <div className="text-slate-200 font-medium leading-tight">
          {hero.contact.location}
        </div>
      </div>
    </div>
  )
}
