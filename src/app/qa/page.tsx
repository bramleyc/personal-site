import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { qa } from "@/lib/qa"
import ReactMarkdown from "react-markdown"

export const metadata = {
  title: "Q&A: Chris Bramley – Principal Test Engineer & Quality Leader",
  description:
    "An in-depth Q&A with Chris Bramley covering quality strategy, GenAI in testing, DORA metrics, and leadership."
}

export default function QAPage() {
  return (
    <>
    <Header />
          
         
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl uppercase tracking-wide text-emerald-300/80 font-mono">
            Q&amp;A
          </h1>
          <p className="text-slate-300">
            This interview is based on an interactive conversation between me and ChatGPT (GPT-5), that I hoped would bring my experience to life more than a CV. It was quite an interesting exercise, and I think it really helped me reflect on the people and connections I&apos;ve made in my career. It was conducted using the following prompt if you&apos;d like to try it (I also attached a CV):
          </p>
            <pre className="mt-4 bg-slate-900/60 text-emerald-300/80 text-xs rounded-xl p-4 border border-slate-700/50 whitespace-pre-wrap">
                I want to create an interactive Q&A. You will ask the questions, and then I will answer. We can start with a generic intro (&apos;What first drew you to software testing and quality engineering?&apos;) but then I&apos;d like subsequent questions to be based on my answers where relevant – seeking clarification, digging deeper into responses, and so on. 
                {"\n"}
                {"\n"}
                You can also reference my CV and experience for creating questions. We will have 10 questions. You should act more like a reporter or media interviewer than a recruiter or hiring manager, so that the answers reveal more about me than the content of my CV.
            </pre>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-slate-300">
            {qa.map((item, idx) => (
                <article
                key={idx}
                className="bg-slate-800/60 border border-slate-700/60 rounded-2xl shadow-xl shadow-black/60 p-6"
                >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <h3 className="text-white font-medium text-lg leading-tight flex-1">
                    {idx + 1}. {item.question}
                    </h3>

                    {item.tags && (
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
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
                <div className="mt-4 text-slate-200 leading-relaxed prose prose-invert whitespace-pre-line">
                <ReactMarkdown>
                    {item.answer}
                </ReactMarkdown>
                </div>
                </article>
            ))}
            </div>
      </main>

      <Footer />

    </>
  )
}
