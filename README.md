# Chris Bramley – Personal Site
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
   npm run test:unit
   npm run test:e2e 
   ```

5. Build for production (static export)
   ```bash
   npm run build
   ```
   The static build is written to the `out/` directory when `output: "export"` is set in `next.config.js`; These are then uploaded to AWS CLI with the `aws s3 sync ./out s3://<remote bucket name>` command. Use `npm run start` to preview the production build locally.

> **Node.js**: Next.js 16 requires Node 18.18+ (or Node 20+). Use an active LTS release.

## Content & Customisation
- `src/lib/data.ts` – hero copy, experience timeline, featured projects, skills, and certifications.
- `src/lib/qa.ts` – long-form Q&A entries (Markdown supported in answers).
- `public/logos/` – employer/project logos referenced from `data.ts`.
- `src/components/` – layout pieces (`Header`, `Footer`, etc.) for better reuse and expansion to a multipage site.
- `tailwind.config.ts` – inline CSS design system (colours, shadows).

## Project Structure (top-level)
```
src/
  app/           # App Router routes
  components/    # Reusable layout + UI components
  lib/           # Underlying data to decouple content from the UI components
public/          # Static assets (logos, favicons)
```

## Testing & Quality
- `npm run test:unit` runs Jest + React Testing Library component, page, and data integrity checks.
- `npm run test:e2e` builds the static export and executes Playwright smoke scenarios (requires Node 20.9+).
- `npm run test` runs both the unit tests and Playwrite user journey tests.
- `npm run serve:static` serves the `out/` directory locally at `http://127.0.0.1:4173`—Playwright uses this automatically.

For a full breakdown of tooling, coverage, expectations of contributors and future improvements see [quality.md](./quality.md).

## License
MIT Licence.
