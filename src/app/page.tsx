import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactCard from "@/components/ContactCard"
import { SectionHeading } from "@/components/SectionHeading"
import {
  hero,
  experience,
  projects,
  skills,
  certifications
} from "@/lib/data"
import { Key } from "react"

export default function Page() {
  return (
    <>
    <section
          id="about"
        ></section>
      <Header />

      <main>
        <section
          className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-[2fr,1fr] gap-10"
        >
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {hero.name}
            </h1>
            <h2 className="text-2xl sm:text-2xl font-semibold text-white leading-tight">
              {hero.title}
            </h2>

            {hero.paragraphs.map((text, i) => (
              <p
                key={i}
                className="text-slate-300 text-base leading-relaxed"
              >
                {text}
              </p>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 text-sm font-semibold">
              <a
                href="/qa"
                className="inline-block rounded-2xl shadow-lg shadow-emerald-500/20 bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-4 py-2 text-center"
              >
                Read full ChatGPT Q&amp;A
              </a>
              <a
                href="#projects"
                className="inline-block rounded-2xl border border-slate-600 bg-slate-800/60 text-slate-200 hover:bg-slate-700 hover:text-white px-4 py-2 text-center"
              >
                View featured work
              </a>
              <a
                href="#contact"
                className="inline-block rounded-2xl border border-slate-600 bg-slate-800/60 text-slate-200 hover:bg-slate-700 hover:text-white px-4 py-2 text-center"
              >
                Get in touch
              </a>
            </div>
          </div>

          <aside className="flex flex-col gap-4 text-sm text-slate-300">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl shadow-xl shadow-black/60 p-5 space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="h-4 w-4 text-slate-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div>
                  <div className="text-slate-200 font-medium leading-tight">
                    {hero.contact.location}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="h-4 w-4 text-slate-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.82 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <div>
                  <a
                    className="text-slate-200 font-medium leading-tight hover:text-white break-all"
                    href={`mailto:${hero.contact.email}`}
                  >
                    {hero.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="h-4 w-4 text-slate-400 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.39 7.868 10.905.575.102.786-.25.786-.558
                0-.275-.01-1.002-.015-1.968-3.2.695-3.877-1.543-3.877-1.543-.523-1.327-1.277-1.68-1.277-1.68-1.043-.713.08-.699.08-.699
                1.154.082 1.762 1.185 1.762 1.185 1.026 1.758 2.693 1.25 3.35.956.104-.744.402-1.25.731-1.538-2.553-.29-5.236-1.277-5.236-5.686
                0-1.256.448-2.283 1.185-3.087-.119-.29-.513-1.457.112-3.037 0 0 .967-.31 3.169 1.18a11.066 11.066 0 0 1 2.886-.388
                c.979.005 1.966.132 2.886.388 2.2-1.49 3.166-1.18 3.166-1.18.627 1.58.233 2.747.115 3.037.739.804 1.184 1.831 1.184 3.087
                0 4.42-2.688 5.392-5.253 5.676.414.36.781 1.096.781 2.215 0 1.598-.015 2.885-.015 3.277
                0 .311.207.667.793.554C20.213 21.387 23.5 17.083 23.5 12 23.5 5.648 18.352.5 12 .5Z"
                  />
                </svg>
                <div className="text-slate-200 font-medium leading-tight flex flex-col">
                  <a
                    className="underline-offset-4 hover:underline hover:text-white break-all"
                    href={hero.contact.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {hero.contact.githubLabel}
                  </a>
                  <span className="text-xs text-slate-400">
                    Personal + training repos
                  </span>
                </div>
              </div>
            </div>
                        <div className="flex flex-wrap gap-3 text-sm">
              {hero.badges.map((b, i) => {
                const colourMap = [
                  "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30",
                  "bg-sky-500/10 text-sky-300 border border-sky-500/30",
                  "bg-indigo-500/10 text-indigo-300 border border-indigo-500/30",
                  "bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/30"
                ]
                const cls =
                  colourMap[i] ??
                  "bg-slate-700/20 text-slate-200 border border-slate-600/40"
                return (
                  <span
                    key={i}
                    className={`rounded-full px-3 py-1 ${cls}`}
                  >
                    {b}
                  </span>
                )
              })}
            </div>
          </aside>
        </section>

        <section
          id="experience"
          className="bg-slate-900/40 border-y border-slate-700/40 py-16 px-4"
        >
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              colourClass="bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              title="Experience"
            />

            <div className="space-y-10 text-sm leading-relaxed text-slate-300">
              {experience.map((job, idx) => (
                <article
                  key={idx}
                  className="bg-slate-800/60 border border-slate-700/60 rounded-2xl shadow-xl shadow-black/60 p-6 card-hover"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <div>
                      <div className="text-slate-300 text-sm leading-tight flex items-center gap-2">
                        {job.companyLogo ? (
                          <img
                            src={job.companyLogo}
                            alt={job.companyAlt || job.company}
                            className="h-5 w-auto opacity-90"
                            loading="lazy"
                          />
                        ) : (
                          job.company
                        )}
                      </div>
                      <div className="text-white font-medium text-lg leading-tight">
                        {job.role}
                      </div>
                    </div>
                    <div className="text-slate-400 text-xs font-mono">
                      {job.period}
                    </div>
                  </div>
                  
                  {job.bullets &&
                    <ul className="mt-4 space-y-2">
                      {job.bullets.map((b: string | null | undefined, i: Key | null | undefined) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-emerald-400">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  }
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="max-w-5xl mx-auto px-4 py-16 text-sm leading-relaxed text-slate-300"
        >
          <SectionHeading
            colourClass="bg-emerald-400 shadow-[0_0_10px_#34d399]"
            title="Featured Work"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <article
                key={idx}
                className="relative overflow-hidden bg-slate-800/60 border border-slate-700/60 rounded-2xl shadow-xl shadow-black/60 card-hover hover:border-emerald-500/50 hover:shadow-glow-emerald"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-white font-medium text-lg leading-tight">
                        {proj.name}
                      </div>
                      <a
                        className="shrink-0 inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300"
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>View</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 4h6m0 0v6m0-6L13 11"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 14v4.25A1.75 1.75 0 0118.25 20H6.75A1.75 1.75 0 015 18.25V6.75A1.75 1.75 0 016.75 5H11"
                          />
                        </svg>
                      </a>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mt-3">
                      {proj.blurb}
                    </p>
                  </div>

                  <div className="pt-4 text-[11px] text-slate-400 font-mono flex flex-wrap gap-2">
                    {proj.tags.map((t: string | null | undefined, i: Key | null | undefined) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-slate-900/60 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="bg-slate-900/40 border-y border-slate-700/40 py-16 px-4 text-sm leading-relaxed text-slate-300"
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeading
                colourClass="bg-indigo-400 shadow-[0_0_10px_#818cf8]"
                title="Skills & Focus Areas"
              />
              <ul className="flex flex-wrap gap-2 text-[13px] leading-relaxed">
                {skills.map((skill, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-slate-600/60 bg-slate-800/60 text-slate-200 px-3 py-2 shadow-lg shadow-black/60"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading
                colourClass="bg-fuchsia-400 shadow-[0_0_10px_#f0abfc]"
                title="Qualifications"
              />
              <ul className="space-y-3 text-slate-300">
                {certifications.map((c, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-slate-200">{c.name}</span>
                    <span className="text-slate-500 text-xs font-mono">
                      {c.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="max-w-5xl mx-auto px-4 py-16 text-sm leading-relaxed text-slate-300"
        >
          <SectionHeading
            colourClass="bg-sky-400 shadow-[0_0_10px_#38bdf8]"
            title="Contact"
          />

          <div className="grid md:grid-cols-[2fr,1fr] gap-10">
            <div className="space-y-4">
              <p className="leading-relaxed">
                Open to senior quality / test engineering leadership roles
                (Director / Head of Quality / Head of Test / Principal Quality
                Engineering Architect) and strategic consulting around quality
                transformation, test strategy, or developer experience.
              </p>

              <p className="leading-relaxed">
                For speaking, advisory, or collaboration queries, the best way
                to reach me is email.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 text-sm font-semibold">
                <a
                  href={`mailto:${hero.contact.email}`}
                  className="inline-block rounded-2xl shadow-lg shadow-sky-500/20 bg-sky-500 hover:bg-sky-400 text-slate-900 px-4 py-2 text-center"
                >
                  Email me
                </a>

                <a
                  href={hero.contact.githubUrl}
                  className="inline-block rounded-2xl border border-slate-600 bg-slate-800/60 text-slate-200 hover:bg-slate-700 hover:text-white px-4 py-2 text-center"
                >
                  View GitHub
                </a>
              </div>
            </div>

            <aside className="space-y-4">
              <ContactCard />
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
