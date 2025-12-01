export interface OldQA {
  question: string
  answer: string
  tags?: string[]
}

export const oldqa: OldQA[] = [
  {
    question: "What first drew you to software testing and quality engineering?",
    answer:
      "I've always liked to understand how things work, not necessarily to break them - which I think was the classic tester mindset when I was starting out. I'd rather get out a Haynes manual and work on my car, or solder new pickups into my guitar, or set up a new PC from components - build not break. I think this mindset led me to testing, where I would get to see how things worked so I could better understand the ways in which defects could be prevented. That mindset has shaped everything since.",
    tags: ["Foundations", "Mindset"]
  },
  {
    question: "How did your career evolve into quality leadership?",
    answer:
      `It felt like a natural evolution to me. I've been lucky to work in a number of different industries - networking, medial devices, public service, e-commerce - and every sector grew me in different ways: speed in commerce, compliance in medical devices, user focus in public service. Working across these diverse areas reinforced that culture matters just as much as tooling. And over time, I moved from writing and executing test strategies to thinking about how testing fits into delivery at a larger scale. I moved into shaping quality strategies across teams and departments, and leading and enabling others to do the same.
      
At Booking.com that also lead to craft leadership - not just delivering a strategy (the _what_), but the ecosystem to enable that (the _how_). I created a full career framwork listing compentencies, skills, and expectations for all levels of Test Engineer, as well as a performance review and promotion process. I also delivered supporting presentations and workshops to the whole Test Engineering community, whose input and collaboration helped shape the final product. I then collaborated with the Test Managers to create a new interview playbook and question set linked to these competencies so we could be sure we were aligning our hiring with our expectations of the role.`,
      tags: ["Leadership", "Career Growth"]
  },
  {
    question: "What does being a Principal Test Engineer in an Architecture team actually involve?",
    answer:
      "UPDATE It’s a hybrid role — part strategist, part hands-on engineer. I work with architects and senior engineers to ensure that testability, observability, and quality are built into system design, not bolted on later. That can mean defining quality models, aligning metrics like DORA or SonarQube “releasability,” or guiding the adoption of automation, contract testing, and GenAI-based test generation across domains."
  },
  {
    question: "What are some of your key achievements in recent years?",
    answer:
      `One of the biggest things I'm proud of comes from my first couple of years at Booking.com. When I joined, releases were slow and painful and not very agile. As a Test Lead, I could see that this was not only slowing us down, but increasing risk - we had releases with over 30 changes in them, which took up to an hour to deploy and had non-zero downtime whilst deploying. If it went wrong (which it did) then it could be hours of unpicking those changes until the root cause was found and fixed. I started working with the Engineering Managers and DevOps leads to both focus on a more lean way of delivering changes, as well as taking advantage of AWS to enact blue-green deployments and canary releases to reduce user-facing impact. We went from 6 releases per month with up to 30 tickets per release when I joined to 69 releases with up to 2 tickets within a year. A year after that, each ticket was its own release, and we were delivering 183 releases to our customers each month with no release downtime. 


In the past year or two, two more stand out. At Booking.com we had to comply with the Digital Markets Act (DMA) compliance act. As the most senior tester, I was asked to take the lead. I had to organise and deliver a test strategy across several product verticals, coordinating cross-BU testing at scale, working with teams and technologies I'd never used and with incredibly tight deadlines. I organised fire drills, collaborated with Site Reliability Engineers and Major Incidents teams to plan the most effective rollouts, worked with Internal Communications to run large awareness campaigns due to the sheer size and impact of the project, as well as managing Senior Director and VP stakeholders. The project was delivered on time and without and service interruption, which was a huge achievement. 


On a smaller scale - but an important building block, I worked with other Principal Test Engineers to introduced SonarQube-based “Releasability” profiles and mutation-testing benchmarks that now underpin quality reviews across a large number of repositories and have proven useful - raising the code releasability rating from E to B.`
  },
  {
    question: "How do you influence senior stakeholders and drive alignment across a large organisation?",
    answer:
      "I sit in a central technology and architecture function, so my role depends on influence rather than authority. I engage directly with VPs and SVPs to translate engineering metrics and risk signals into business language — connecting quality to revenue protection, customer experience, and regulatory compliance. That allows me to secure alignment for long-term quality investments while keeping local teams autonomous. It’s less about reporting upwards and more about shaping shared accountability for quality across leadership tiers."
  },
  {
    question: "How do you define “quality” in modern engineering?",
    answer:
      "Quality isn’t a checklist — it’s a property of the entire system. It’s how reliable, observable, maintainable, and compliant a product is when under real-world conditions. In practice, that means using a blend of metrics, risk modelling, and collaboration to ensure quality is continuously validated, not just “tested at the end.”"
  },  
  {
    question: "What does “craft leadership” mean to you?",
    answer:
      "Craft leadership is about stewarding the discipline, not just managing people. I treat quality as an evolving craft — blending engineering principles, metrics, and empathy. My remit spans mentoring Test Managers, defining company-wide Quality Principles, and ensuring consistent patterns in how we test APIs, data flows, and experiences. Although my title says “Principal,” the work is effectively at Director level — setting the vision for how a global organisation approaches quality engineering."
  },
  {
    question: "How do you see the boundary between testing and engineering?",
    answer:
      "There shouldn’t be one. I view testing as a core engineering discipline — as much about architecture, observability, and resilience as about validation. I spend as much time discussing API contract design, CI/CD optimisation, and telemetry pipelines as I do test frameworks. In modern systems, quality emerges from how we engineer; testing is simply how we make it visible."
  },
  {
    question: "What’s your philosophy for building a quality strategy that scales?",
    answer:
      "A scalable quality strategy starts with ownership. Each team should be empowered to measure and improve its own quality signals. I use a layered model — from unit and contract tests through integration and acceptance — supported by consistent tooling, visible metrics, and shared quality principles. The goal isn’t uniformity, but coherence."
  },
    {
    question: "What’s your approach to scaling quality strategy across multiple teams?",
    answer:
      "I use a layered “Quality Pyramid” approach that aligns testing levels (unit → contract → integration → acceptance) with ownership. Teams are empowered to measure and improve their own quality indicators, guided by shared tooling and principles. My role is to ensure consistency where it matters — patterns, metrics, and guardrails — while encouraging autonomy in implementation."
  },
  {
    question: "What excites you most about where testing is heading?",
    answer:
      "The convergence of AI and engineering observability. Large language models are already helping us generate, cluster, and reason about tests — but the real opportunity is in using them to interpret quality signals at scale. That’s where we’ll move from automated testing to truly intelligent validation.",
      tags: ["GenAI", "Innovation", "Future"]
  },
  {
    question: "How have your experiences across different industries shaped your approach?",
    answer:
      "Every sector brings its own constraints: speed in travel, compliance in medical devices, precision in financial systems. Working across them taught me to design quality systems that adapt to context — balancing risk, regulation, and user impact. It also reinforced that culture matters just as much as tooling."
  },
  {
    question: "How do you balance delivery speed with quality?",
    answer:
      "By making quality visible and measurable. When teams can see how quality correlates with release frequency, defect rate, or customer satisfaction, it stops being a trade-off conversation. Instead, quality becomes a performance enabler — the thing that makes faster, safer delivery possible."
  },
  {
    question: "What’s one piece of advice you’d give to someone moving from automation into leadership?",
    answer:
      "Stop optimising for coverage; start optimising for influence. The real impact comes from changing how people think about quality, not how many tests you write. Focus on communication, metrics, and alignment — and never lose your curiosity about how things fail."
  },
  {
    question: "What do you still find most rewarding about your work?",
    answer:
      "Seeing teams grow in confidence because they understand and own their quality. Whether it’s through better metrics, clearer strategies, or smarter automation, helping people believe in the quality of what they deliver is still the most satisfying part of the job."
  }
]
