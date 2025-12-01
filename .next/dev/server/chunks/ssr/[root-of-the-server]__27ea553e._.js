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
        answer: "I’ve always been fascinated by how complex systems behave in the real world — not just how they’re built, but how they fail. Early in my career I realised that good testing isn’t about finding bugs, it’s about understanding systems deeply enough to prevent them. That mindset shaped everything since.",
        tags: [
            "Foundations",
            "Mindset"
        ]
    },
    {
        question: "How did your career evolve into quality leadership?",
        answer: "Over time, I moved from writing and executing tests to designing how testing fits into delivery. I started building automation frameworks, then moved into shaping quality strategies across teams, and eventually into roles that focus on test architecture and organisational quality. It’s been a steady shift from “testing software” to “enabling others to deliver quality software at scale.”",
        tags: [
            "Leadership",
            "Career Growth"
        ]
    },
    {
        question: "What does being a Principal Test Engineer in an Architecture team actually involve?",
        answer: "It’s a hybrid role — part strategist, part hands-on engineer. I work with architects and senior engineers to ensure that testability, observability, and quality are built into system design, not bolted on later. That can mean defining quality models, aligning metrics like DORA or SonarQube “releasability,” or guiding the adoption of automation, contract testing, and GenAI-based test generation across domains."
    },
    {
        question: "How do you define “quality” in modern engineering?",
        answer: "Quality isn’t a checklist — it’s a property of the entire system. It’s how reliable, observable, maintainable, and compliant a product is when under real-world conditions. In practice, that means using a blend of metrics, risk modelling, and collaboration to ensure quality is continuously validated, not just “tested at the end.”"
    },
    {
        question: "What’s your philosophy for building a quality strategy that scales?",
        answer: "A scalable quality strategy starts with ownership. Each team should be empowered to measure and improve its own quality signals. I use a layered model — from unit and contract tests through integration and acceptance — supported by consistent tooling, visible metrics, and shared quality principles. The goal isn’t uniformity, but coherence."
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
"[project]/Documents/Dev/personal-site/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
                    className: "max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Chris Bramley"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                            lineNumber: 19,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-400",
                                            children: "Principal Test Engineer & Engineering Leader"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm text-slate-300 hover:text-white border border-slate-600/50 rounded-xl px-3 py-1 bg-slate-800/40",
                            children: "← Back to profile"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-5xl mx-auto px-4 py-10 space-y-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-wide text-emerald-300/80 font-mono",
                                children: "Q&A"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-semibold text-white",
                                children: "Q&A: Chris Bramley – Principal Test Engineer & Quality Leader"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-300 max-w-3xl",
                                children: "Longer-form answers for recruiters, hiring managers, and peers who want to understand how I think about quality, scaling test practices, and using GenAI in real teams."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-white mb-2 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Questions & Answers"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 text-sm leading-relaxed text-slate-300",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$src$2f$lib$2f$qa$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["qa"].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "bg-slate-800/60 border border-slate-700/60 rounded-2xl shadow-xl shadow-black/60 p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-medium text-lg leading-tight",
                                            children: [
                                                idx + 1,
                                                ". ",
                                                item.question
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-slate-200 leading-relaxed",
                                        children: item.answer
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                lineNumber: 34,
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
                    fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Dev/personal-site/src/app/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Dev/personal-site/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Dev/personal-site/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__27ea553e._.js.map