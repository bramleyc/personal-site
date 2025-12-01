module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/Dev/personal-site/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Dev/personal-site/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/Dev/personal-site/src/lib/qa.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "qa",
    ()=>qa
]);
const qa = [
    {
        question: "What first drew you to software testing and quality engineering?",
        answer: "I've always liked to understand how things work, not necessarily to break them - which I think was the classic tester mindset when I was starting out. I'd rather get out a Haynes manual and work on my car, or solder new pickups into my guitar, or set up a new PC from components - build not break. I think this mindset led me to testing, where I would get to see how things worked so I could better understand the ways in which defects could be prevented.\n\nAnd the landscape of software development has changed massively over the last 15 years, so there is always something new to discover - agile, automation, cloud, GenAI have all really become established during my career so I've always had something new to tackle.",
        tags: [
            "career",
            "motivation",
            "philosophy"
        ]
    },
    {
        question: "When you look back, was there a particular moment or project where that mindset really clicked for you? A time when you realised testing could be a creative, engineering-driven discipline rather than a reactive one?",
        answer: "Absolutely. It was a job I wasn't in very long, at Stagecoach, but the Engineering Lead Mikey Smith really opened my eyes to this. I'd worked closely with developers before but I'd largely worked in waterfall organisations, so most interactions were up front (requirements stage) or at the end (testing phase, defect reports, customer support). One day, as he was finishing a ticket, he called me over to his desk. The conversation was something like 'OK this is the code I've written to handle the seat assignment, I've created these unit tests that cover the acceptance criteria but I wanted to get your input into cases I might not have covered or even considered'.\n\nThis was a lightbulb moment - 'yeah, this is my area of expertise, why have I never helped create unit tests? And now I know what's covered there, I can make sure my higher-level tests aren't just repeating the same thing'. This led me down the path of TDD, of pairing with developers during code to make sure we were preventing issues, thinking of ways to engineer software to make it easy to test, and sharing and evangelising a quality mindset with my developer peers. Which I think is another cornerstone of my philosophy - testing alone doesn't improve quality, so test engineers need to help build quality into the development process.",
        tags: [
            "creativity",
            "collaboration",
            "mindset"
        ]
    },
    {
        question: "How has that philosophy evolved now that you’re influencing quality at organisational scale? In other words, when you’re working across multiple teams or even entire business units, how do you help others reach that same lightbulb moment you had back then?",
        answer: "The core of that philosophy has influenced a lot in my approach. In Booking I have been the craft lead for test engineering. This has covered everything from job titles, interview process, and career frameworks, and I think there are two things that stand out.\n\nOne, the roles used to be 'Test Manager'. I made sure these were changed to align with the development craft, so they had 'Engineering Manager' and we had 'Engineering Manager - Test'. The intent was to signal that these roles are equal and equally important in achieving the same mission.\n\nThe second was the introduction of the career framework. It outlines 6 core competencies for test engineers - and only one of those is actually executing testing. The rest are focused on things like advocacy - how test engineers can influence their peers, projects, departments, etc to focus on building quality - and testability - as I've mentioned before about making testing easier to do, lowering the bar to entry.",
        tags: [
            "leadership",
            "craft",
            "culture"
        ]
    },
    {
        question: "How do you approach those conversations at VP or SVP level, where quality needs to be argued for in the language of architecture, risk, or business impact rather than testing?",
        answer: "Yeah it's totally central and it's just as vital at my level as it is at a core level. Maybe more so, as if I'm not able to advocate effectively across the VPs of Engineering then it's going to make it harder for anyone else to advocate within their teams. I work in a central team now, so I have more of a remit to work with the VPs across the business, but even so I have no authority so getting the right message framed in the right way is key.\n\nI'm a big believer in metrics as indicators of health and as a way to demonstrate the impact of quality engineering on the things that matter most - customers. And I don't like to reinvent the wheel so DORA metrics are a big part of how I approach these conversations. Nobody wants a high change failure rate, or a long lead time for change, but what I need to do is demonstrate how investing in quality can improve these.\n\nA lot of times this is about breaking misconceptions - and lead time for change is a good example of this. There is default assumption that testing takes time, and you can't have both, so introducing more testing practices is going to slow us down and increase our lead time for change, right? Not for me. If we make things testable, we will spend less time testing. If we shift testing left and invest more in unit and contract, we will spend less time passing builds back and forth when they break, and less time blocking or blocked by dependencies. I can use data both internally and from the industry that proves this.\n\nAt the same time, risk is a big factor. I will never advocate for testing everything, all of the time. Failures are normal and being able to observe, detect, and fix quickly are another important part of testability. And I think this flexibility helps show we're on the same page - I don't want to slow you down, and I don't want to cause customer problems, but there is a way we can manage this effectively.",
        tags: [
            "stakeholders",
            "metrics",
            "alignment"
        ]
    },
    {
        question: "Your role, while titled Principal Test Engineer, actually spans a lot of what a Director of QA would do — defining vision, aligning leaders, shaping metrics. How do you balance that strategic remit with staying close to the craft itself? How do you ensure you’re still credible as an engineer, not just a strategist?",
        answer: "That's a good point - in a lot of places a Principal Test Engineer is much more hands on and a much more direct progression from a Senior Test Engineer. But here at Booking, I do a lot of stuff that doesn't feel like a Principal role - the craft leadership I've mentioned, shaping the company wide Quality Strategy being another. In a lot of ways it's more like an architect role, and it's probably no coincidence that I've been in a couple of architecture teams now.\n\nOne of the key ideas I've taken from that is the concept of the Architecture Elevator by Gregor Hohpe. In brief, it says that we need to avoid 'ivory tower' architecture where the people making the decisions are far removed from the problems, and the way to do this is to visit different floors. Get off at the ground floor, spend time with developers and test engineers, understand what's going on day to day. I do this in a couple of ways - I am still engaged with the community, I run workshops and sessions, I am active in Slack where I can help solve problems, and generally make myself available for anyone for a chat or mentoring or for fixing a problem.\n\nI also lead the Dev++ community - this is a forum where any engineer of any level can come and work with the community on problems, or on a good idea they've had, and we can solve it collaboratively and use Dev++ to broadcast this effectively to the company.\n\nOn the other hand, I need to get off at higher levels too - I run major projects that need test architecture and design, such as the Digital Markets Act project that's on my CV. This was a massively complex project with short timeframes and huge potential fines if we didn't deliver the right thing on time. I lead this project because it needed that blend of skills - I would go from conversations with Senior Directors and VPs to digging through production logs to track issues, to running fire drills across the business to manage the risk of the phased launch I'd planned.",
        tags: [
            "leadership",
            "architecture",
            "craft"
        ]
    },
    {
        question: "Do you see yourself as a tester who’s expanded into engineering, or as an engineer whose lens happens to be quality?",
        answer: "It's intentional. I think at the end of the day we (we being engineering and test) all want the same thing, we just have different specialisms. Although despite starting off on the engineer path (computer science degree, engineering graduate scheme) I still see myself as a test specialist who has expanded into engineering. I hope this gives me a few more strings to my bow than someone who is purely one or the other. I think my exposure in architecture teams and engineering practices teams has helped shape this too.",
        tags: [
            "identity",
            "engineering"
        ]
    },
    {
        question: "You’ve clearly moved through a lot of change in your career — from waterfall to agile, from manual to automated, from on-prem to cloud, and now into AI-assisted testing. When you look back, which transformation or evolution in the industry has most challenged or reshaped the way you think about quality?",
        answer: "I think they all have in some way - and I think that's healthy - but I think the two biggest are agile, and AI. I'll start with Agile. I touched upon this when talking about that close collaboration at Stagecoach, but at the BBC it really brought it home. I was lucky to work with people like Anna Dick who showed me Agile wasn't just a set of buzzwords but an actionable set of practices that focused on team working, focusing on delivering and releasing value as soon as possible, and building on feedback. These are all things that matter to me.\n\nOn the second, GenAI has had a much more immediate impact than anything else before. Agile is OLD. It's been around for longer than I've been in this career but it didn't really become the standard until much later. GenAI though is everywhere now - I mean this is literally a conversation with an LLM. I see it as largely a positive for the craft though. There are plenty of people who lack coding knowledge so may not have the experience in automation, but we now have this amazing tool that can turn a test engineer's vision based on their knowledge and experience into code. And that's just one example.\n\nI think automation was seen as the boogeyman that was going to make test engineering redundant; that didn't happen because the craft is more than just the tests. I see GenAI in the same light, an assistant that can help us unlock our potential and deliver the impact we want more quickly. We need though to keep that test engineering mindset and intelligence, and no blindly put faith in this tool, which might actually make our role even more critical.",
        tags: [
            "agile",
            "AI",
            "evolution of testing"
        ]
    },
    {
        question: "Which achievements best demonstrate the scale of your impact?",
        answer: "One of the biggest things I'm proud of comes from my first couple of years at Booking.com. When I joined, releases were slow and painful and not very agile. As a Test Lead (as it was before the title change), I could see that this was not only slowing us down, but increasing risk - we had releases with over 30 changes in them, which took up to an hour to deploy and had non-zero downtime whilst deploying. If it went wrong (which it did) then it could be hours of unpicking those changes until the root cause was found and fixed.\n\nI started working with the Engineering Managers and DevOps leads to both focus on a more lean way of delivering changes, as well as taking advantage of AWS to enact blue-green deployments and canary releases to reduce user-facing impact. We went from 6 releases per month with up to 30 tickets per release when I joined to 69 releases with up to 2 tickets within a year. A year after that, each ticket was its own release, and we were delivering 183 releases to our customers each month with no release downtime.\n\nIn the past year or two, two more stand out. At Booking.com we had to comply with the Digital Markets Act (DMA) compliance act. As the most senior tester, I was asked to take the lead. I had to organise and deliver a test strategy across several product verticals, coordinating cross-BU testing at scale, working with teams and technologies I'd never used and with incredibly tight deadlines. I organised fire drills, collaborated with Site Reliability Engineers and Major Incidents teams to plan the most effective rollouts, worked with Internal Communications to run large awareness campaigns due to the sheer size and impact of the project, as well as managing Senior Director and VP stakeholders. The project was delivered on time and without and service interruption, which was a huge achievement.\n\nOn a smaller scale - but an important building block, I worked with other Principal Test Engineers to introduced SonarQube-based “Releasability” profiles and mutation-testing benchmarks that now underpin quality reviews across a large number of repositories and have proven useful - raising the code releasability rating from E to B.",
        tags: [
            "achievements",
            "metrics"
        ]
    },
    {
        question: "When you describe achievements like that, what stands out is how much of it depends on alignment — getting people with very different goals and pressures moving in the same direction. How do you approach situations where there isn’t natural agreement between different priorities like speed, safety, and visibility?",
        answer: "I actually think at the heart we all want the same thing, and that thing is quality. What quality is depends on who you are, but it runs through all those things. I remember reading Zen and the Art of Motorcycle Maintenance, which at its heart is a discussion on what quality is, because it's not measurable and is often based on feeling and intuition. This resonated with me and I think I've probably spent a lot of time since trying to weave it into a story about testing and quality.\n\nBut in the question you've asked, it makes a bit more sense - engineers don't want speed if it means the site doesn't work and nobody can use it. Compliance don't want safety if it means your product is too difficult to use as a result of all of the controls. Product doesn't want visibility if what they see is a 1 start Trustpilot rating or dwindling user numbers. And I don't want quality if it harms innovation and experimentation and breaking the mold.\n\nSo I guess my approach is to make this visible - my goal is not to have more engineers than anyone else, or to not accept any risk. After all the safest way to protect users is just not to release at all. I want to highlight how our goals can be aligned and realised together.",
        tags: [
            "alignment",
            "strategy",
            "risk"
        ]
    },
    {
        question: "Let’s end on a forward-looking note. You’ve led change through multiple generations of technology and mindset — agile, automation, observability, AI. When you think about the next phase of your career, what kind of challenges or environments do you want to be tackling next? What would feel like the right next frontier for you?",
        answer: "I almost think the next step is shedding the 'test' title. Not because I don't think it's important but more that I think it's SO important it needs to be a fundamental part of engineering and product culture and singling it out or attaching that label only helps make it look like 'someone else's responsibility'. I guess one part of this is also looking back at the career frameworks and designing a new way of thinking about testing and quality - acknowledge the impact of AI for one, but also recognise that any engineer - core to VP - needs not only a solid understanding about their role when it comes to quality, but also a set of tools that make it simple for them to apply it.\n\nI want to turn the talking about it - testability, advocacy, and so on - into something actionable. I think using AI and crafting really solid prompts will be a key way that the test craft is able to support the engineering craft seamlessly.\n\nThe other challenge I want to focus on though is enabling and encouraging innovation without sacrificing quality. Too often I think we talk about best practices, and we use analogies about production lines and try to apply Toyota Production Systems to what is a much more creative craft, that we lose some of that spark.\n\nI've sort of gone full circle - but the reason I got involved in computing was because I liked to try stuff out and see what happened. I don't want the next generation to feel like the guardrails are too restrictive and not enjoy the creative process. And I also want people to see Test or Quality Engineering as an important and aspirational role, not something easily replaced. So maybe that's the answer - the next frontier is the next generation. How do we keep software engineering as exciting and engaging as it was for me?",
        tags: [
            "future",
            "AI",
            "leadership"
        ]
    }
];
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[project]/Documents/Dev/personal-site/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "certifications",
    ()=>certifications,
    "experience",
    ()=>experience,
    "hero",
    ()=>hero,
    "projects",
    ()=>projects,
    "skills",
    ()=>skills
]);
const hero = {
    name: "Chris Bramley",
    title: "Principal Test Engineer & Engineering Leader",
    paragraphs: [
        "I'm an experienced technical leader in both management and individual contributor roles, with a record of delivering measurable outcomes through strategic quality initiatives, cross-functional collaboration, and engineering maturity uplift.",
        "I specialise in aligning testing strategy with business outcomes, scaling high-quality engineering practices, and driving compliance and reliability at pace. I mentor senior quality and engineering leaders, shape large-scale quality transformations, and embed pragmatic, automated testing practices across organisations.",
        "I've created this site to showcase my work, link of to some projects I've worked on (including this site), and maybe start a blog one day.",
        "If you'd like to know more about me, an overview of my CV is below, but I've also had a deep and meaningful chat with... ChatGPT. Just to try something different."
    ],
    badges: [
        "GenAI for Test Engineering",
        "Quality Engineering at Scale",
        "Developer Experience"
    ],
    contact: {
        location: "Manchester, UK",
        email: "bramley@gmail.com",
        githubUrl: "https://github.com/bramleyc",
        githubLabel: "github.com/bramleyc"
    }
};
const experience = [
    {
        company: "Booking.com",
        companyLogo: "/logos/bookingcom.svg",
        companyAlt: "Booking.com",
        role: "Principal Test Engineer",
        period: "Feb 2021 – Present",
        bullets: [
            "Part of the central Enterprise Architecture team at Booking.com, responsible for leading on improving the developer experience and quality practices across the business, and giving technical leadership across the software engineering lifecycle.",
            "Co-authored and implemented company-wide Quality Strategy, reducing Change Failure Rate by >55%.",
            "Led Developer Experience guiding principal across all business units, with >80% adoption and >10% improvement in engineering maturity.",
            "Delivered resources such as a comprehensive Quality knowledge base, Sonarqube quality profiles and templating, and refreshed evaluation metrics based on DORA.",
            "Key collaborator on the company-wide Quality Strategy and leader of its rollout workstream, including GenAI guidance for test case and test data generation, SonarQube quality profiles, and refreshed DORA-based metrics.",
            "Led DMA compliance testing and rollout: daily release plans, company-wide fire drills, production monitoring and fast remediation to deliver on-time against EU regulatory deadlines.",
            "Drove adoption of unit and contract testing via a train-the-trainer model: unit test adoption 29% → 93%, contract testing 29% → 50%, elevating code releasability from E → B in 9 months.",
            "Mentored Principal / Senior Test Engineers and Engineering Managers in Test; built cross-business-unit collaboration and career progression pathways."
        ]
    },
    {
        company: "Booking.com",
        companyLogo: "/logos/bookingcom.svg",
        companyAlt: "Booking.com",
        role: "Senior Engineering Manager – Test",
        period: "Feb 2019 – Feb 2021",
        bullets: [
            "Led Engineering Managers in Test across Manchester, London, and Amsterdam (organisation size ~40 including indirect reports).",
            "Built working practices between UK-based Transport and Netherlands-based Accommodation units for the first time, improving cross-functional integration.",
            "Created learning paths, competencies and training materials for automation, web, and native app quality practices.",
            "Scaled frontend and backend automation frameworks around AWS-native microservices and event-driven systems (CloudWatch, Kinesis, DynamoDB)."
        ]
    },
    {
        company: "Booking.com",
        companyLogo: "/logos/bookingcom.svg",
        companyAlt: "Booking.com",
        role: "Test Engineering Lead",
        period: "Sep 2017 – Feb 2019",
        bullets: [
            "Built testing as a function in a startup-style environment: hiring, team structure, embedded testers, environments, release process.",
            "Introduced automation (Selenium/Java via BrowserStack, RestAssured API tests in Bamboo CI).",
            "Enabled an 11× increase in release frequency by pushing incremental delivery and quality-first practices."
        ]
    },
    {
        company: "BBC",
        companyLogo: "/logos/bbc.svg",
        companyAlt: "BBC Design & Engineering",
        role: "Test Manager (TV & Radio – Mobile)",
        period: "Mar 2015 – Sep 2017",
        bullets: [
            "Led up to 25 engineers delivering BBC iPlayer and BBC iPlayer Radio on iOS / Android, including contractors and permanent staff.",
            "Owned Test Strategy, shortening mobile regression from two weeks to two days via risk-based coverage, exploratory testing and pairing.",
            "Worked on BBC-wide initiatives: supplier selection, on-device automation, and Test Craftsmanship community.",
            "Actively involved in inclusive hiring and early-career schemes (Leonard Cheshire Change 100, Extend, Apprenticeships & Graduates)."
        ]
    },
    {
        company: "BBC",
        companyLogo: "/logos/bbc.svg",
        companyAlt: "BBC Design & Engineering",
        role: "Senior Test Engineer",
        period: "Apr 2014 – Feb 2015",
        bullets: [
            "Test Lead for BBC iPlayer mobile native applications on iOS and Android. Reorganised the existing team to fit into a lean, crew-based agile delivery model.",
            "In charge of planning and process improvement, including reducing the regression test spend from two weeks to two days by introducing test automation and the use of audience statistics to help drive a risk-based approach to device coverage."
        ]
    },
    {
        company: "BJSS",
        role: "Senior Test Engineer",
        period: "Jan 2014 - Apr 2014"
    },
    {
        company: "Stagecoach",
        role: "Senior QA Engineer",
        period: "Jul 2013 - Dec 2013"
    },
    {
        company: "Waters Corporation",
        role: "Software Test Team Leader",
        period: "Mar 2013 - Jul 2013"
    },
    {
        company: "Waters Corporation",
        role: "Software Test Engineer",
        period: "Jan 2010 - Mar 2013"
    },
    {
        company: "T-Mobile UK",
        role: "Test Analyst",
        period: "Sept 2007 - Jan 2010"
    }
];
const projects = [
    {
        name: "Quality Strategy & GenAI Guidance",
        blurb: "Company-wide Quality Strategy, GenAI prompts for test case / data generation, SonarQube quality profiles, and DORA-aligned evaluation metrics. (Public summary / guidance link here.)",
        link: "#",
        tags: [
            "GenAI",
            "DORA",
            "SonarQube"
        ]
    },
    {
        name: "Automation Challenge Platform",
        blurb: "Hands-on backend and frontend automation challenges (Playwright, RestAssured, Pact) used for onboarding, upskilling and hiring. Includes failing tests, mutation coverage angles, and quality scoring.",
        link: "https://github.com/bramleyc/api-test",
        tags: [
            "RestAssured"
        ]
    },
    {
        name: "DMA Compliance Rollout Framework",
        blurb: "End-to-end test strategy and coordinated release execution for Digital Markets Act compliance: daily release plans, fire drills, stakeholder comms, and production monitoring. Delivered on-time against EU regulatory deadlines.",
        link: "#",
        tags: [
            "Compliance",
            "Observability",
            "Release Ops"
        ]
    },
    {
        name: "Unlock Programme Quality Uplift",
        blurb: "Shift-left / Train-the-Trainer programme that increased core service unit test adoption from 29% to 93% and contract testing from 29% to 50%, moving releasability from E → B in 9 months.",
        link: "#",
        tags: [
            "Shift Left",
            "Train-the-Trainer",
            "Quality Uplift"
        ]
    }
];
const skills = [
    "Software Testing & Quality",
    "Engineering Leadership",
    "Strategic Programme Leadership",
    "Engineering Tech Strategy",
    "Automation Framework Design (Playwright, TestCafe, RestAssured)",
    "Contract Testing (Pact)",
    "DORA Metrics & Engineering Maturity",
    "GenAI in Test Engineering",
    "AWS"
];
const certifications = [
    {
        name: "Architecting on AWS",
        year: "2021"
    },
    {
        name: "Developing on AWS",
        year: "2021"
    },
    {
        name: "Association for Project Management - APMP (IPMA Level D, SCQF Level 7)",
        year: "2012"
    },
    {
        name: "ISTQB Foundation Certificate in Software Testing",
        year: "2007"
    },
    {
        name: "BSc (Hons) Computing Science, University of Newcastle upon Tyne",
        year: "2007"
    }
];
}),
"[project]/Documents/Dev/personal-site/src/components/MobileMenuClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/Dev/personal-site/src/components/MobileMenuClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/Dev/personal-site/src/components/MobileMenuClient.tsx <module evaluation>", "default");
}),
"[project]/Documents/Dev/personal-site/src/components/MobileMenuClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/Dev/personal-site/src/components/MobileMenuClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/Dev/personal-site/src/components/MobileMenuClient.tsx", "default");
}),
"[project]/Documents/Dev/personal-site/src/components/MobileMenuClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$components$2f$MobileMenuClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/src/components/MobileMenuClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$components$2f$MobileMenuClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/src/components/MobileMenuClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$components$2f$MobileMenuClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/Dev/personal-site/src/components/Nav.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeaderNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function HeaderNav() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "hidden md:flex gap-6 text-sm text-slate-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/#about",
                className: "hover:text-white",
                "data-testid": "header-about",
                children: "About"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/personal-site/src/components/Nav.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/#experience",
                className: "hover:text-white",
                "data-testid": "header-experience",
                children: "Experience"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/personal-site/src/components/Nav.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/qa",
                className: "hover:text-white",
                "data-testid": "header-qa",
                children: "Q&A"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/personal-site/src/components/Nav.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/#projects",
                className: "hover:text-white",
                "data-testid": "header-projects",
                children: "Projects"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/personal-site/src/components/Nav.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/#skills",
                className: "hover:text-white",
                "data-testid": "header-skills",
                children: "Skills"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/personal-site/src/components/Nav.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/#contact",
                className: "hover:text-white",
                "data-testid": "header-contact",
                children: "Contact"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/personal-site/src/components/Nav.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Dev/personal-site/src/components/Nav.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Dev/personal-site/src/components/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$components$2f$MobileMenuClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/src/components/MobileMenuClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$components$2f$Nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/src/components/Nav.tsx [app-rsc] (ecmascript)");
;
;
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-slate-700/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto flex items-center justify-between px-4 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2 font-semibold text-slate-100 text-lg leading-tight",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] mt-2"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Dev/personal-site/src/components/Header.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hero"].name
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Dev/personal-site/src/components/Header.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline text-slate-400 text-sm font-normal",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hero"].title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Dev/personal-site/src/components/Header.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Dev/personal-site/src/components/Header.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Dev/personal-site/src/components/Header.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$components$2f$Nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/Dev/personal-site/src/components/Header.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$components$2f$MobileMenuClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/Dev/personal-site/src/components/Header.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Dev/personal-site/src/components/Header.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Dev/personal-site/src/components/Header.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Dev/personal-site/src/app/qa/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QAPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$lib$2f$qa$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/src/lib/qa.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/node_modules/react-markdown/lib/index.js [app-rsc] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/src/components/Header.tsx [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "Q&A: Chris Bramley – Principal Test Engineer & Quality Leader",
    description: "An in-depth Q&A with Chris Bramley covering quality strategy, GenAI in testing, DORA metrics, and leadership."
};
function QAPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto px-4 py-10 space-y-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl uppercase tracking-wide text-emerald-300/80 font-mono",
                                children: "Q&A"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-300",
                                children: "This interview is based on an interactive conversation between me and ChatGPT (GPT-5), that I hoped would bring my experience to life more than a CV. It was quite an interesting exercise, and I think it really helped me reflect on the people and connections I've made in my career. It was conducted using the following prompt if you'd like to try it (I also attached a CV):"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "mt-4 bg-slate-900/60 text-emerald-300/80 text-xs rounded-xl p-4 border border-slate-700/50 whitespace-pre-wrap",
                                children: [
                                    "I want to create an interactive Q&A. You will ask the questions, and then I will answer. We can start with a generic intro ('What first drew you to software testing and quality engineering?') but then I'd like subsequent questions to be based on my answers where relevant – seeking clarification, digging deeper into responses, and so on.",
                                    "\n",
                                    "\n",
                                    "You can also reference my CV and experience for creating questions. We will have 10 questions. You should act more like a reporter or media interviewer than a recruiter or hiring manager, so that the answers reveal more about me than the content of my CV."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 text-sm leading-relaxed text-slate-300",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$lib$2f$qa$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["qa"].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "bg-slate-800/60 border border-slate-700/60 rounded-2xl shadow-xl shadow-black/60 p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-white font-medium text-lg leading-tight flex-1",
                                                children: [
                                                    idx + 1,
                                                    ". ",
                                                    item.question
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 21
                                            }, this),
                                            item.tags && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: item.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium",
                                                        children: tag
                                                    }, tag, false, {
                                                        fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                                lineNumber: 46,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 text-slate-200 leading-relaxed prose prose-invert whitespace-pre-line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                            children: item.answer
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                lineNumber: 36,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-10 text-center text-xs text-slate-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Chris Bramley"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Documents/Dev/personal-site/src/app/qa/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Dev/personal-site/src/app/qa/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5475c243._.js.map