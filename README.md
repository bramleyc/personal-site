# Chris Bramley – Personal Site
[![CI](https://github.com/bramleyc/personal-site/actions/workflows/ci-and-deploy.yml/badge.svg?branch=main)](https://github.com/bramleyc/personal-site/actions/workflows/ci-and-deploy.yml)


Personal profile built with Next.js and Tailwind CSS to showcase experience, featured projects, skills, and a long-form quality engineering Q&A. The site exports to static HTML so it can be hosted on any static host (GitHub Pages, Vercel static, S3, etc.). In reality, it is hosted on AWS on S3 behind a CloudFlare distribution, using Route53 for DNS management and can be viewed at https://www.chrisbramley.com.

## Stack
- Next.js 16 with the App Router (set `output: "export"` for static builds)
- React 19 + TypeScript
- Tailwind CSS for styling
- React Markdown for rendered Q&A content

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
   
2. Start the dev server
   ```bash
   npm run dev
   ```
   The app runs at http://localhost:3000.

3. Lint or type-check as needed
   ```bash
   npm run lint
   ```

4. Run the automated test suites
   ```bash
   npm run test
   ```

5. Build for production (static export)
   ```bash
   npm run build
   ```
   The static build is written to the `out/` directory when `output: "export"` is set in `next.config.js`; These are then uploaded to AWS CLI with the `aws s3 sync ./out s3://<remote bucket name>` command. Use `npm run start` to preview the production build locally.

> **Node.js**: Next.js 16 requires Node 18.18+. Use an active LTS release; Node 20+ is what this project is tested with.

## Content & Customisation
- `src/lib/data.ts` – hero copy, experience timeline, featured projects, skills, and certifications.
- `src/lib/qa.ts` – long-form Q&A entries (Markdown supported in answers).
- `public/logos/` – employer/project logos referenced from `data.ts`.
- `src/components/` – layout pieces (`Header`, `Footer`, etc.) for better reuse and expansion to a multipage site.
- `tailwind.config.ts` – inline CSS design system (colours, shadows).

## Project Structure (top-level)
```
src/
  app/             # App Router routes, metadata, global styles, and page tests in __tests__/
  components/      # Reusable layout + UI components (Header, Footer, Navigation, ContactCard, etc.)
  lib/             # Content data (hero copy, experience timeline, projects, Q&A entries)
public/            # Static assets (logos, favicons referenced in src/lib/data.ts)
playwright/        # Playwright smoke/end-to-end specs (npm run test:e2e)
test/              # Jest setup and shared test utilities
out/               # Static export output from npm run build
```

## Testing & Quality
- `npm run test:unit` runs Jest + React Testing Library component, page, and data integrity checks.
- `npm run test:e2e` builds the static export and executes Playwright smoke scenarios (Node 20+ recommended).
- `npm run test` runs both the unit tests and Playwright user journey tests.
- `npm run serve:static` serves the `out/` directory locally at `http://127.0.0.1:4173`. Playwright uses this automatically.

For a full breakdown of tooling, coverage, expectations of contributors and future improvements see [quality.md](./quality.md).

## Deployment
Github Actions have been configured in the repository to run the tests, create the static build if the tests pass, and upload it to s3 after every commit is pushed. The steps are in `.github/workflows/ci-and-deploy.yml`.

## Monitoring
Real-user monitoring uses **AWS CloudWatch RUM**: page load times, Core Web Vitals, and JS errors from real visitors. The client (`src/lib/rum.ts`, mounted via `src/components/RumInit.tsx` in the root layout) only activates when the `NEXT_PUBLIC_RUM_*` values in `.env.production` are present at build time — local dev and tests are unaffected. Those values are public identifiers (they ship in the JS bundle), not secrets. `NEXT_PUBLIC_RUM_SAMPLE_RATE` (0–1) controls the fraction of sessions recorded; lower it if traffic makes RUM event costs noticeable ($1 per 100k events).

The AWS resources (app monitor, Cognito identity pool, IAM role) were created by `scripts/aws-rum-setup.sh` (one-off).

`scripts/grafana-dashboard.json` is a Grafana dashboard combining the RUM metrics with CloudFront delivery metrics (requests, 4xx/5xx error rates, bytes). Import it into a Grafana instance with a CloudWatch data source (the CloudFront queries target `us-east-1`, where CloudFront publishes metrics; RUM metrics are in `eu-west-2`).

## License
MIT Licence.
