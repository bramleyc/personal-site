import type { Job, Project } from "@/components/types.d"

export const hero = {
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
  }
]

export const skills = [
  "Software Testing & Quality",
  "Engineering Leadership",
  "Strategic Programme Leadership",
  "Engineering Tech Strategy",
  "Automation Framework Design (Playwright, TestCafe, RestAssured)",
  "Contract Testing (Pact)",
  "DORA Metrics & Engineering Maturity",
  "GenAI in Test Engineering",
  "AWS"
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
