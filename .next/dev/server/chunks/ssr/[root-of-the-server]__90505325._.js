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

// src/lib/qa.ts
__turbopack_context__.s([
    "qa",
    ()=>qa
]);
const qa = [
    {
        question: "What first drew you to software testing and quality engineering?",
        answer: "I've always liked to understand how things work, not necessarily to break them - which I think was the classic tester mindset when I was starting out. I'd rather get out a Heynes manual and work on my car, or solder new pickups into my guitar, or set up a new PC from components - build not break. I think this mindset led me to testing, where I would get to see how things worked so I could better understand the ways in which defects could be prevented. That mindset has shaped everything since.",
        tags: [
            "Foundations",
            "Mindset"
        ]
    },
    {
        question: "How did your career evolve into quality leadership?",
        answer: "It felt like a natural evolution to me. I've been lucky to work in a number of different industries - networking, medial devices, public service, e-commerce - and every sector grew me in different ways: speed in commerce, compliance in medical devices, user focus in public service. Working across these diverse areas reinforced that culture matters just as much as tooling. And over time, I moved from writing and executing test strategies to thinking about how testing fits into delivery at a larger scale. I moved into shaping quality strategies across teams and departments, and leading and enabling others to do the same.",
        tags: [
            "Leadership",
            "Career Growth"
        ]
    },
    {
        question: "What does being a Principal Test Engineer in an Architecture team actually involve?",
        answer: "UPDATE It’s a hybrid role — part strategist, part hands-on engineer. I work with architects and senior engineers to ensure that testability, observability, and quality are built into system design, not bolted on later. That can mean defining quality models, aligning metrics like DORA or SonarQube “releasability,” or guiding the adoption of automation, contract testing, and GenAI-based test generation across domains."
    },
    {
        question: "What are some of your key achievements in recent years?",
        answer: `One of the biggest things I'm proud of comes from my first couple of years at Booking.com. When I joined, releases were slow and painful and not very agile. As a Test Lead, I could see that this was not only slowing us down, but increasing risk - we had releases with over 30 changes in them, which took up to an hour to deploy and had non-zero downtime whilst deploying. If it went wrong (which it did) then it could be hours of unpicking those changes until the root cause was found and fixed. I started working with the Engineering Managers and DevOps leads to both focus on a more lean way of delivering changes, as well as taking advantage of AWS to enact blue-green deployments and canary releases to reduce user-facing impact. We went from 6 releases per month with up to 30 tickets per release when I joined to 69 releases with up to 2 tickets within a year. A year after that, each ticket was its own release, and we were delivering 183 releases to our customers each month with no release downtime. 
      
      In the past year or two, two more stand out. At Booking.com we had to comply with the Digital Markets Act (DMA) compliance act. As the most senior tester, I was asked to take the lead. I had to organise and deliver a test strategy across several product verticals, coordinating cross-BU testing at scale, working with teams and technologies I'd never used and with incredibly tight deadlines. I organised fire drills, collaborated with Site Reliability Engineers and Major Incidents teams to plan the most effective rollouts, worked with Internal Communications to run large awareness campaigns due to the sheer size and impact of the project, as well as managing Senior Director and VP stakeholders. The project was delivered on time and without and service interruption, which was a huge achievement. 
      
      On a smaller scale - but an important building block, I worked with other Principal Test Engineers to introduced SonarQube-based “Releasability” profiles and mutation-testing benchmarks that now underpin quality reviews across a large number of repositories and have proven useful - raising the code releasability rating from E to B.`
    },
    {
        question: "How do you influence senior stakeholders and drive alignment across a large organisation?",
        answer: "I sit in a central technology and architecture function, so my role depends on influence rather than authority. I engage directly with VPs and SVPs to translate engineering metrics and risk signals into business language — connecting quality to revenue protection, customer experience, and regulatory compliance. That allows me to secure alignment for long-term quality investments while keeping local teams autonomous. It’s less about reporting upwards and more about shaping shared accountability for quality across leadership tiers."
    },
    {
        question: "How do you define “quality” in modern engineering?",
        answer: "Quality isn’t a checklist — it’s a property of the entire system. It’s how reliable, observable, maintainable, and compliant a product is when under real-world conditions. In practice, that means using a blend of metrics, risk modelling, and collaboration to ensure quality is continuously validated, not just “tested at the end.”"
    },
    {
        question: "What does “craft leadership” mean to you?",
        answer: "Craft leadership is about stewarding the discipline, not just managing people. I treat quality as an evolving craft — blending engineering principles, metrics, and empathy. My remit spans mentoring Test Managers, defining company-wide Quality Principles, and ensuring consistent patterns in how we test APIs, data flows, and experiences. Although my title says “Principal,” the work is effectively at Director level — setting the vision for how a global organisation approaches quality engineering."
    },
    {
        question: "How do you see the boundary between testing and engineering?",
        answer: "There shouldn’t be one. I view testing as a core engineering discipline — as much about architecture, observability, and resilience as about validation. I spend as much time discussing API contract design, CI/CD optimisation, and telemetry pipelines as I do test frameworks. In modern systems, quality emerges from how we engineer; testing is simply how we make it visible."
    },
    {
        question: "What’s your philosophy for building a quality strategy that scales?",
        answer: "A scalable quality strategy starts with ownership. Each team should be empowered to measure and improve its own quality signals. I use a layered model — from unit and contract tests through integration and acceptance — supported by consistent tooling, visible metrics, and shared quality principles. The goal isn’t uniformity, but coherence."
    },
    {
        question: "What’s your approach to scaling quality strategy across multiple teams?",
        answer: "I use a layered “Quality Pyramid” approach that aligns testing levels (unit → contract → integration → acceptance) with ownership. Teams are empowered to measure and improve their own quality indicators, guided by shared tooling and principles. My role is to ensure consistency where it matters — patterns, metrics, and guardrails — while encouraging autonomy in implementation."
    },
    {
        question: "What excites you most about where testing is heading?",
        answer: "The convergence of AI and engineering observability. Large language models are already helping us generate, cluster, and reason about tests — but the real opportunity is in using them to interpret quality signals at scale. That’s where we’ll move from automated testing to truly intelligent validation.",
        tags: [
            "GenAI",
            "Innovation",
            "Future"
        ]
    },
    {
        question: "How have your experiences across different industries shaped your approach?",
        answer: "Every sector brings its own constraints: speed in travel, compliance in medical devices, precision in financial systems. Working across them taught me to design quality systems that adapt to context — balancing risk, regulation, and user impact. It also reinforced that culture matters just as much as tooling."
    },
    {
        question: "How do you balance delivery speed with quality?",
        answer: "By making quality visible and measurable. When teams can see how quality correlates with release frequency, defect rate, or customer satisfaction, it stops being a trade-off conversation. Instead, quality becomes a performance enabler — the thing that makes faster, safer delivery possible."
    },
    {
        question: "What’s one piece of advice you’d give to someone moving from automation into leadership?",
        answer: "Stop optimising for coverage; start optimising for influence. The real impact comes from changing how people think about quality, not how many tests you write. Focus on communication, metrics, and alignment — and never lose your curiosity about how things fail."
    },
    {
        question: "What do you still find most rewarding about your work?",
        answer: "Seeing teams grow in confidence because they understand and own their quality. Whether it’s through better metrics, clearer strategies, or smarter automation, helping people believe in the quality of what they deliver is still the most satisfying part of the job."
    }
];
}),
"[project]/Documents/Dev/personal-site/src/app/qa/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/qa/page.tsx
__turbopack_context__.s([
    "default",
    ()=>QAPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$lib$2f$qa$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/personal-site/src/lib/qa.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: "Q&A: Chris Bramley – Principal Test Engineer & Quality Leader",
    description: "An in-depth Q&A with Chris Bramley covering quality strategy, GenAI in testing, DORA metrics, and leadership."
};
function QAPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-slate-700/40 bg-slate-900/70 backdrop-blur sticky top-0 z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Chris Bramley"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400",
                                            children: "Principal Test Engineer & Engineering Leader"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm text-slate-300 hover:text-white border border-slate-600/50 rounded-xl px-3 py-1 bg-slate-800/40",
                            children: "← Back to profile"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-4xl mx-auto px-4 py-10 space-y-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-wide text-emerald-300/80 font-mono",
                                children: "Q&A"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-semibold text-white",
                                children: "Q&A: Chris Bramley – Principal Test Engineer & Quality Leader"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-300 max-w-2xl",
                                children: "Longer-form answers for recruiters, hiring managers, and peers who want to understand how I think about quality, scaling test practices, and using GenAI in real teams."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                        lineNumber: 36,
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
                                                lineNumber: 56,
                                                columnNumber: 21
                                            }, this),
                                            item.tags && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: item.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium",
                                                        children: tag
                                                    }, tag, false, {
                                                        fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-slate-200 leading-relaxed whitespace-pre-line",
                                        children: item.answer
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                lineNumber: 35,
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
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Dev/personal-site/src/app/qa/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Dev/personal-site/src/app/qa/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Dev/personal-site/src/app/qa/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__90505325._.js.map