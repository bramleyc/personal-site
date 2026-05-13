module.exports = [
"[project]/Documents/Dev/new-personal-site/src/app/icon.svg.mjs { IMAGE => \"[project]/Documents/Dev/new-personal-site/src/app/icon.svg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/app/icon.svg.mjs { IMAGE => \"[project]/Documents/Dev/new-personal-site/src/app/icon.svg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/Dev/new-personal-site/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/Documents/Dev/new-personal-site/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
        "My focus is bringing Testing and Quality into the AI era, by fundamentally changing the way quality outcomes are achieved at scale.",
        "I specialise in aligning testing strategy with business outcomes, scaling high-quality engineering practices, and driving compliance and reliability at pace. I mentor senior quality and engineering leaders, shape large-scale quality transformations, and embed pragmatic, AI and automated testing practices across organisations.",
        "I'm also deeply passionate about the Developer Experience and how to make it possible for any engineer to do the right thing, in the easiest way.",
        "I've created this site to showcase my work, link of to some projects I've worked on (including this site), and publish my thoughts on the future to a blog.",
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
        role: "Principal Test Engineer (Enterprise Quality Strategy & Governance)",
        period: "Feb 2021 – Present",
        bullets: [
            "Senior quality leader within Booking.com’s Central Technology Enterprise Architecture / Engineering Enablement organisation, providing strategic direction, governance, and enablement for testing and quality across global product and platform teams.",
            "Co-authored and implemented a company-wide Quality Strategy, setting standards for testability, automation, release readiness, and risk-based validation across hundreds of engineers.",
            "Led adoption of GenAI-assisted testing, including test case and test data generation, through guidelines, prompt frameworks, and hands-on workshops.",
            "Led Developer Experience guiding principal across all business units, with >80% adoption and >10% improvement in engineering maturity.",
            "Defined and delivered shared quality assets including a central testing knowledge base, SonarQube quality and releasability profiles, and DORA-aligned evaluation models used across business units.",
            "Led quality strategy, testing governance, and release oversight for the EU Digital Markets Act (DMA) rollout, including coordinated fire drills, production monitoring, and staged rollouts.",
            "Designed and delivered scalable training initiatives to uplift testing and engineering capability across multiple business units."
        ]
    },
    {
        company: "Booking.com",
        companyLogo: "/logos/bookingcom.svg",
        companyAlt: "Booking.com",
        role: "Senior Engineering Manager – Test",
        period: "Feb 2019 – Feb 2021",
        bullets: [
            "Led a globally distributed organisation of ~40 direct and indirect reports across Manchester, London, and Amsterdam.",
            "Defined and rolled out company-wide Test Engineering career frameworks, hiring standards, job specifications, and interview playbooks.",
            "Integrated quality and testing approaches across different business units.",
            "Owned automation strategy and delivery across frontend and backend systems in a large-scale microservices, event-driven AWS environment.",
            "Owned tooling budget (circa £100k) and vendor relationships, including joint enablement and training initiatives."
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
        name: "This site",
        blurb: "I've added the code for this site to my public Github profile. I scaffolded it with OpenAI Codex, then did a fair bit of refactoring to make it more useable (eg adding tests, testids for testability, extracting navigation elements into components for reusability). Then set up AWS so it can run as a static site on S3 behind Cloudflare.",
        link: "https://github.com/bramleyc/personal-site",
        tags: [
            "GenAI",
            "TypeScript",
            "Playwright",
            "Automated Testing"
        ]
    },
    {
        name: "Automation Challenge Platform",
        blurb: "Hands-on backend and frontend automation challenges (RestAssured) used for onboarding, upskilling and hiring. Includes failing tests to understand a candidate's approach to identifying test failues, using logs, and coding.",
        link: "https://github.com/bramleyc/api-test",
        tags: [
            "RestAssured",
            "Automated Testing"
        ]
    },
    {
        name: "Job notifier",
        blurb: "Small project using AWS Lambda and SES to send email alerts when jobs are posted",
        link: "https://github.com/bramleyc/job-notifier",
        tags: [
            "AWS",
            "Lambda"
        ]
    },
    {
        name: "Traffic push alerts",
        blurb: "Small project using AWS Lambda and EventBridge to send traffic alerts as push notifications based on schedule and/or Google calendar events",
        link: "https://github.com/bramleyc/traffic-alert",
        tags: [
            "AWS",
            "Lambda",
            "EventBridge"
        ]
    }
];
const skills = [
    "Software Testing & Quality",
    "GenAI in Test Engineering",
    "GenAI Agents and Skills",
    "Engineering Leadership",
    "Strategic Programme Leadership",
    "Engineering Tech Strategy",
    "Automation Framework Design (Playwright, TestCafe, RestAssured)",
    "Contract Testing (Pact)",
    "DORA Metrics & Engineering Maturity",
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
"[project]/Documents/Dev/new-personal-site/src/components/MobileNavigation.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/Dev/new-personal-site/src/components/MobileNavigation.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/Dev/new-personal-site/src/components/MobileNavigation.tsx <module evaluation>", "default");
}),
"[project]/Documents/Dev/new-personal-site/src/components/MobileNavigation.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/Dev/new-personal-site/src/components/MobileNavigation.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/Dev/new-personal-site/src/components/MobileNavigation.tsx", "default");
}),
"[project]/Documents/Dev/new-personal-site/src/components/MobileNavigation.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$MobileNavigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/components/MobileNavigation.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$MobileNavigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/components/MobileNavigation.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$MobileNavigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/Dev/new-personal-site/src/components/Navigation.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function Navigation({ testIdPrefix }) {
    const testId = (name)=>testIdPrefix ? {
            "data-testid": `${testIdPrefix}-${name}`
        } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "hidden md:flex gap-6 text-sm text-slate-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/#about",
                className: "hover:text-white",
                ...testId("about"),
                children: "About"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/new-personal-site/src/components/Navigation.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/#experience",
                className: "hover:text-white",
                ...testId("experience"),
                children: "Experience"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/new-personal-site/src/components/Navigation.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/qa",
                className: "hover:text-white",
                ...testId("qa"),
                children: "Q&A"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/new-personal-site/src/components/Navigation.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/blog",
                className: "hover:text-white",
                ...testId("blog"),
                children: "Blog"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/new-personal-site/src/components/Navigation.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/#projects",
                className: "hover:text-white",
                ...testId("projects"),
                children: "Projects"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/new-personal-site/src/components/Navigation.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/#skills",
                className: "hover:text-white",
                ...testId("skills"),
                children: "Skills"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/new-personal-site/src/components/Navigation.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/#contact",
                className: "hover:text-white",
                ...testId("contact"),
                children: "Contact"
            }, void 0, false, {
                fileName: "[project]/Documents/Dev/new-personal-site/src/components/Navigation.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Dev/new-personal-site/src/components/Navigation.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Dev/new-personal-site/src/components/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$MobileNavigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/components/MobileNavigation.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/components/Navigation.tsx [app-rsc] (ecmascript)");
;
;
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-slate-700/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto flex items-center justify-between px-4 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-2 font-semibold text-slate-100 text-lg leading-tight",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] mt-2"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Dev/new-personal-site/src/components/Header.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hero"].name
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Dev/new-personal-site/src/components/Header.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline text-slate-400 text-sm font-normal",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hero"].title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Dev/new-personal-site/src/components/Header.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Dev/new-personal-site/src/components/Header.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Dev/new-personal-site/src/components/Header.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    testIdPrefix: "header"
                }, void 0, false, {
                    fileName: "[project]/Documents/Dev/new-personal-site/src/components/Header.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$MobileNavigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/Dev/new-personal-site/src/components/Header.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Dev/new-personal-site/src/components/Header.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Dev/new-personal-site/src/components/Header.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Dev/new-personal-site/src/components/Footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/components/Navigation.tsx [app-rsc] (ecmascript)");
;
;
function Footer() {
    const year = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-slate-700/40 bg-slate-900/60 py-10 px-4 text-center text-[11px] text-slate-500 leading-relaxed",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-m mx-auto flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-slate-500",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        testIdPrefix: "footer"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Dev/new-personal-site/src/components/Footer.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Dev/new-personal-site/src/components/Footer.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-slate-600",
                    children: [
                        "© ",
                        year,
                        " Chris Bramley"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Dev/new-personal-site/src/components/Footer.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Dev/new-personal-site/src/components/Footer.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Dev/new-personal-site/src/components/Footer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Dev/new-personal-site/src/components/BlogPostList.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPostList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
function BlogPostList({ posts, basePath = "", showExcerpt = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "space-y-1",
        "aria-label": "Blog post list",
        children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `${basePath}#${post.slug}`,
                "data-testid": `sidebar-post-${post.slug}`,
                className: "block text-sm text-slate-300 hover:text-white leading-tight py-1.5 pl-3 border-l-2 border-transparent hover:border-emerald-400 transition-colors",
                children: [
                    post.title,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-xs text-slate-500 mt-0.5",
                        children: formatDate(post.date)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Dev/new-personal-site/src/components/BlogPostList.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    showExcerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2",
                        children: post.excerpt
                    }, void 0, false, {
                        fileName: "[project]/Documents/Dev/new-personal-site/src/components/BlogPostList.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this)
                ]
            }, post.slug, true, {
                fileName: "[project]/Documents/Dev/new-personal-site/src/components/BlogPostList.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/Dev/new-personal-site/src/components/BlogPostList.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Dev/new-personal-site/src/lib/posts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "posts",
    ()=>posts
]);
const posts = [
    {
        slug: "the-crafts-future",
        title: "The Craft Is Not the Tests",
        date: "2026-04-10",
        excerpt: "What does it mean to be a test engineer in 2026? After fifteen years in the craft, I think the question deserves a fresh answer — one that has nothing to do with job titles.",
        tags: [
            "quality",
            "AI",
            "craft"
        ]
    },
    {
        slug: "who-are-we-building-for",
        title: "Who are we building this for?",
        date: "2026-03-13",
        excerpt: "If people aren't building the code, why are we building our tests as if they still are?",
        tags: [
            "SDLC",
            "AI",
            "Specification testing"
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
"[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/components/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/components/Footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$BlogPostList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/components/BlogPostList.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/lib/posts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/Documents/Dev/new-personal-site/node_modules/react-markdown/lib/index.js [app-rsc] (ecmascript) <export Markdown as default>");
;
;
;
;
;
;
;
;
const metadata = {
    title: "Blog – Chris Bramley",
    description: "Thoughts on software quality, testing, engineering leadership, and the craft of building reliable software."
};
function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
function BlogPage() {
    const postsWithContent = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$lib$2f$posts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posts"].map((post)=>{
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "src", "content", "blog", `${post.slug}.md`);
        const content = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf-8");
        return {
            ...post,
            content
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-6xl mx-auto px-4 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl uppercase tracking-wide text-emerald-300/80 font-mono",
                                children: "Blog"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-300",
                                children: "Thoughts on quality, craft, and the ever-changing world of software engineering."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-8 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "hidden md:block w-56 shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-6 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xs uppercase tracking-widest text-emerald-300/60 font-mono mb-3",
                                            children: "Posts"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$BlogPostList$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            posts: postsWithContent
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 space-y-16 min-w-0",
                                children: postsWithContent.map((post, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        id: post.slug,
                                        "data-testid": `blog-post-${post.slug}`,
                                        className: "bg-slate-800/60 border border-slate-700/60 rounded-2xl shadow-xl shadow-black/60 p-6 scroll-mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap items-start justify-between gap-4 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-3xl font-bold text-white leading-tight",
                                                                children: post.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                                lineNumber: 73,
                                                                columnNumber: 21
                                                            }, this),
                                                            post.tags && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: post.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium",
                                                                        children: tag
                                                                    }, tag, false, {
                                                                        fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                                        lineNumber: 79,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                        dateTime: post.date,
                                                        className: "text-sm text-slate-400",
                                                        children: formatDate(post.date)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "prose prose-invert prose-sm max-w-none text-slate-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                                    children: post.content
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                                className: "mt-8 pt-6 border-t border-slate-700/40 flex justify-between items-center text-sm gap-4",
                                                children: [
                                                    idx > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `#${postsWithContent[idx - 1].slug}`,
                                                        "data-testid": `prev-post-${post.slug}`,
                                                        className: "text-slate-400 hover:text-white transition-colors truncate",
                                                        children: [
                                                            "← ",
                                                            postsWithContent[idx - 1].title
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                        fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 21
                                                    }, this),
                                                    idx < postsWithContent.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `#${postsWithContent[idx + 1].slug}`,
                                                        "data-testid": `next-post-${post.slug}`,
                                                        className: "text-slate-400 hover:text-white transition-colors truncate text-right",
                                                        children: [
                                                            postsWithContent[idx + 1].title,
                                                            " →"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                        fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, post.slug, true, {
                                        fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Dev$2f$new$2d$personal$2d$site$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Dev/new-personal-site/src/app/blog/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0c8e02de._.js.map