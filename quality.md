# Testing & Quality Overview

## Philosophy & Scope
- **Static export first**: The site ships as a static Next.js export, so the primary quality risks are content drift, UI regressions, and navigation regressions rather than complex server logic. Automated checks therefore focus on rendering correctness, accessibility primitives, and high-signal smoke tests.
- **Fast feedback**: Component and data validations run in milliseconds to flag copy or binding issues before a deploy. Playwright smokes run against the exported site to mirror the production deployment model. 
- **Test Pyramid**: The primary focus should be on unit and component level for quickness, esepcially with the relative simplicity of the site, with minimal Playwright coverage at user journey / end to end level to test common or critical flows.
- **Testability**: Use `data-testid` for important components and elements to make ensure good testability.

## Tooling
- **Unit & component tests**: Jest (via `next/jest`) with React Testing Library and `@testing-library/user-event`. Custom DOM matchers are provided by `@testing-library/jest-dom`.
- **Content integrity**: Plain Jest assertions over the data modules ensure required fields stay populated and unique.
- **End-to-end**: Playwright runs against the `out/` static export using the bundled server (`npm run serve:static`). The configuration spins up Chromium desktop and a Pixel 5 viewport, capturing traces/screenshots on retry.
- **Utilities**: `identity-obj-proxy` handles CSS module stubbing, and `serve` provides a lightweight static web server for Playwright.

## Coverage Summary
- **Components**
  - `MobileNavigation`: menu toggle accessibility, aria state, and close-on-link behaviour (`MobileNavigation.test.tsx`).
  - `Header`, `Footer`, `SectionHeading`, `Navigation`, `ContactCard`: render smoke tests for navigation links, current year, colour indicators, and hero bindings.
- **Pages**
  - `src/app/page.tsx`: verifies hero headline, CTA link targets, experience/project/skills counts against data sources.
  - `src/app/qa/page.tsx`: confirms every Q&A entry and tag renders (with `react-markdown` mocked for deterministic markup).
- **Data**
  - `src/lib/data.ts` & `src/lib/qa.ts`: validates non-empty strings, duplicate detection for skills/tags, and ensures experience roles plus any optional bullet/tag/link fields contain meaningful values.
- **End-to-end (Playwright)**
  - `home.spec.ts`: static export smoke covering hero rendering, Q&A navigation, console error checks, and mobile menu behaviour (open/close + anchor navigation) on both desktop and mobile viewports.

## Commands
- `npm run test:unit` – executes all Jest suites (components, pages, data).
- `npm run test:unit:watch` – watch mode for rapid local feedback.
- `npm run test:e2e` – builds the static export and runs the Playwright suite. Requires Node.js ≥ 20.9.0 to satisfy Next.js 16.
- `npm run test` runs both the unit and Playwright suites.
- `npm run serve:static` – serves the `out/` directory at `http://127.0.0.1:4173`; used automatically by Playwright but handy for manual verification.

## Next Steps
- Extend component tests with accessibility assertions (e.g., `jest-axe`) for landmark structure.
- Add GitHub Action workflow or other CI automation to run `test:unit` and `test:e2e` on push. 
- Add Mutation testing
