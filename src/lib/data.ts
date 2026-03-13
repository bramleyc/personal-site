import type { Job, Project } from "@/components/types.d"

export const hero = {
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
    "Developer Experience",
  ],
  contact: {
    location: "Manchester, UK",
    email: "bramley@gmail.com", 
    githubUrl: "https://github.com/bramleyc",
    githubLabel: "github.com/bramleyc"
  }
}

export const experience: Job[] = [
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
      "In charge of planning and process improvement, including reducing the regression test spend from two weeks to two days by introducing test automation and the use of audience statistics to help drive a risk-based approach to device coverage.",
    ]
  },
  {
    company: "BJSS",
    role: "Senior Test Engineer",
    period: "Jan 2014 - Apr 2014",
  },
  {
    company: "Stagecoach",
    role: "Senior QA Engineer",
    period: "Jul 2013 - Dec 2013",
  },
  {
    company: "Waters Corporation",
    role: "Software Test Team Leader",
    period: "Mar 2013 - Jul 2013",
  },
  {
    company: "Waters Corporation",
    role: "Software Test Engineer",
    period: "Jan 2010 - Mar 2013",
  },
  {
    company: "T-Mobile UK",
    role: "Test Analyst",
    period: "Sept 2007 - Jan 2010",
  }
]

export const projects: Project[] = [
  {
    name: "This site",
    blurb:
      "I've added the code for this site to my public Github profile. I scaffolded it with OpenAI Codex, then did a fair bit of refactoring to make it more useable (eg adding tests, testids for testability, extracting navigation elements into components for reusability). Then set up AWS so it can run as a static site on S3 behind Cloudflare.",
    link: "https://github.com/bramleyc/personal-site", 
    tags: ["GenAI", "TypeScript", "Playwright", "Automated Testing"]
  },
  {
    name: "Automation Challenge Platform",
    blurb:
      "Hands-on backend and frontend automation challenges (RestAssured) used for onboarding, upskilling and hiring. Includes failing tests to understand a candidate's approach to identifying test failues, using logs, and coding.",
    link: "https://github.com/bramleyc/api-test", 
    tags: ["RestAssured",  "Automated Testing"]
  },
  {
    name: "Job notifier",
    blurb:
      "Small project using AWS Lambda and SES to send email alerts when jobs are posted",
    link: "https://github.com/bramleyc/job-notifier", 
    tags: ["AWS",  "Lambda"]
  }
]

export const skills = [
  "Software Testing & Quality",
  "GenAI in Test Engineering",
  "GenAI Agents and Skills",
  "Engineering Leadership",
  "Strategic Programme Leadership",
  "Engineering Tech Strategy",
  "Automation Framework Design (Playwright, TestCafe, RestAssured)",
  "Contract Testing (Pact)",
  "DORA Metrics & Engineering Maturity",
  "AWS",
]

export const certifications = [
  { name: "Architecting on AWS", year: "2021" },
  { name: "Developing on AWS", year: "2021" },
  {
    name: "Association for Project Management - APMP (IPMA Level D, SCQF Level 7)",
    year: "2012"
  },
  { name: "ISTQB Foundation Certificate in Software Testing", year: "2007" },
  { name: "BSc (Hons) Computing Science, University of Newcastle upon Tyne", year: "2007" }
]
