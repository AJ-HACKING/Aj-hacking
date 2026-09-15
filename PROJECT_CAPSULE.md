# COCHIN INTERIOR — Project Capsule / Handoff

**Purpose:** preserve the current repository state, verified project decisions, and implementation limits so the work can be resumed safely. This document describes the files as inspected on **2026-09-15**; it is context, not permission to make unreviewed changes.

## 1. PROJECT IDENTITY

- **Project name:** COCHIN INTERIOR
- **Website/domain:** `cochininterior.in` (intended canonical URL: `https://cochininterior.in`)
- **Purpose:** a premium, responsive marketing website for an interior contracting, turnkey execution, and renovation company.
- **Current development status:** initial foundation and a partial homepage are implemented; no dependency installation or browser verification is currently available in this workspace.
- **Current phase:** Phase A foundation plus the first homepage implementation. The other requested pages are represented only by a catch-all placeholder route.

The intended product is an English-language, premium architectural/editorial website for COCHIN INTERIOR that communicates interior contracting, turnkey execution, renovation, materials/quality, genuine completed work, and enquiry options for Kerala initially, with room to expand geographically later. It is not yet a launch-ready production site.

## 2. SOURCE OF TRUTH

- **Repository path:** `/workspace/Aj-hacking`
- **Current branch:** `work`
- **Current HEAD:** `73bc87364716d88f69bfbe67ae4700000f691299` (`73bc873`, *Initialize Next.js site for COCHIN INTERIOR — pages, layout, components, styles, and config*)
- **Git status when this capsule was created:** clean before creating this document. Creating this document is the only intended working-tree change.
- **Git remotes:** none configured at the time of inspection (`git remote -v` produced no entries).
- **GitHub connection:** the repository is not currently connected to GitHub through a configured Git remote. Do not infer GitHub connectivity from prior conversation context.
- **Important repository information:** there are two local commits (`73bc873` and `7f1de2d`); no lockfile, `node_modules`, or `public/` directory is present.
- **Uncommitted changes:** before this capsule, none. After it is created, `PROJECT_CAPSULE.md` is the only intended uncommitted file until committed.

## 3. TECHNOLOGY STACK

The declared stack is read directly from `package.json`; package ranges below are declarations, not evidence of installed versions.

- **Framework:** Next.js `^15.2.0`
- **UI:** React `^19.0.0`, React DOM `^19.0.0`
- **Language:** TypeScript `^5.0.0`, strict mode enabled
- **Styling:** Tailwind CSS `^4.0.0`, imported from `app/globals.css`; custom CSS supplies most presentational rules.
- **PostCSS:** `@tailwindcss/postcss` `^4.0.0`, enabled in `postcss.config.mjs`.
- **Linting:** ESLint `^9.0.0`, `@eslint/js` `^9.0.0`, and `eslint-config-next` `^15.2.0`; config imports Next Core Web Vitals rules.
- **Type packages:** `@types/node` `^22.0.0`, `@types/react` and `@types/react-dom` `^19.0.0`.
- **Package manager:** npm, based on `package.json` scripts and README instructions. There is no `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, or Bun lockfile.
- **Node/npm requirements:** no `engines` field is declared. The workspace inspected with Node `v24.15.0` and npm `11.4.2`; these are environment observations, not project-enforced requirements.

Relevant configuration files actually present: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `next-env.d.ts`, `.env.example`, and `.gitignore`.

## 4. CURRENT FILE STRUCTURE

```text
.
├── app/
│   ├── [...slug]/page.tsx       # Catch-all placeholder for non-home routes
│   ├── globals.css              # Tailwind import, tokens, global/responsive CSS
│   ├── layout.tsx               # Root HTML layout, metadata, Header/Footer
│   └── page.tsx                 # Homepage composition
├── components/
│   ├── footer.tsx               # Shared company/contact footer
│   ├── header.tsx               # Shared desktop/mobile navigation
│   └── section-heading.tsx      # Reusable eyebrow/title/copy heading
├── content/
│   └── site.ts                  # Capability, service-group, and process arrays
├── .env.example                 # Documented, commented environment keys
├── .gitignore                   # Dependencies/build output/environment exclusions
├── README.md                    # Local setup, deployment, content-policy notes
├── eslint.config.mjs            # ESLint flat configuration
├── next-env.d.ts                # Next TypeScript declarations
├── next.config.ts               # Next config (React strict mode)
├── package.json                 # Scripts and dependency declarations
├── postcss.config.mjs           # Tailwind PostCSS plugin
└── tsconfig.json                # Strict TS + `@/*` path alias configuration
```

There is no `public/`, `lib/`, `styles/` (apart from `app/globals.css`), test directory, asset directory, API route, form route, sitemap file, robots file, or static media file.

## 5. CURRENT WEBSITE IMPLEMENTATION

| Route | Purpose / status | Implementation details |
| --- | --- | --- |
| `/` | **Partial homepage implemented.** | `app/page.tsx` composes all visible homepage sections and imports `SectionHeading` plus arrays from `content/site.ts`. It links to planned routes, but uses CSS-made visual placeholders rather than supplied imagery. |
| `/<any slug>` | **Placeholder, not a completed page.** | `app/[...slug]/page.tsx` converts the slug to an uppercase label and displays a message that verified content will be added later, plus a return-home link. It currently catches `/services`, `/projects`, `/inspiration`, `/about`, `/process`, `/materials-quality`, `/contact`, and arbitrary nested paths. |

`app/layout.tsx` wraps all routes in the shared `Header`, a semantic `main`, and the shared `Footer`. It also contains the current global metadata. There are no route-specific pages, no dynamic project data, and no route-specific page metadata.

## 6. HOMEPAGE STATUS

The following records what exists in `app/page.tsx`, not the full desired blueprint.

1. **Hero — exists, partial.** Contains the COCHIN INTERIOR/Kochi eyebrow; headline “INTERIORS. EXECUTION. BUILT AROUND YOU.”; approved scope sentence; `/contact` and `/projects` CTAs; and CSS architectural line art. No genuine image or video asset is used. The visual treatment is a placeholder/CSS composition, not production photography.
2. **Brand statement — exists.** `SectionHeading` and “MORE THAN INTERIORS.” explain a coordinated approach to interiors, turnkey execution, renovation and related works. Copy is present; no imagery.
3. **Core capabilities — exists, partial.** Maps the four `capabilities` records (Interiors, Contracting, Renovation, Turnkey). Each has a numbered CSS gradient panel explicitly labelled in accessibility text as awaiting COCHIN INTERIOR visual assets. It is not an asset-ready card implementation.
4. **Services — exists.** Maps all four approved groups from `serviceGroups`, including their service names, and links to the placeholder `/services` route. It is a grouped editorial list, not a dedicated services page.
5. **Selected work — exists as explicit placeholder.** States that only genuine COCHIN INTERIOR work will be shown, with a “PROJECT ARCHIVE” placeholder. No project record, image, gallery, or case study is implemented.
6. **Process — exists.** Maps six steps from `processSteps`: Discover, Assess, Plan, Propose, Execute, Handover. It links to the placeholder `/process` route.
7. **Materials & quality — exists as copy placeholder.** Mentions materials, hardware, specifications, workmanship, and scope clarity; explicitly says detailed project-specific information will be added later. No verified technical content exists.
8. **Video — exists as disabled placeholder.** Contains “VERTICAL FILM” and a disabled play button. It does not render a `<video>`, poster, player, source, or advertisement asset.
9. **About preview — exists as placeholder-led preview.** Links to `/about` and says verified company/people information will be added later. No company history or team data is present.
10. **Inspiration preview — exists as visual/text placeholder.** Has MODERN/WARM/MINIMAL CSS blocks and explanatory copy. It is not a gallery, filter system, source catalogue, or lightbox.
11. **Final CTA — exists.** Provides `/contact`, `tel:+919895182659`, and `https://wa.me/919895182659` actions. It does not include an email CTA or an enquiry form.

## 7. DESIGN SYSTEM

### Current implementation

- **Colors/tokens:** `--forest: #163c32`, `--ivory: #f5f1e8`, `--gold: #b99963`, `--charcoal: #222621`, plus a translucent charcoal divider. The Tailwind `@theme` declares corresponding colors.
- **Typography:** display headings use the local CSS font stack `Georgia, "Times New Roman", serif`; body text uses `Arial, Helvetica, sans-serif`. No custom, licensed, or externally loaded brand font is present.
- **Spacing/layout:** viewport-relative horizontal padding (`4.3vw`, `6vw`, `9vw`) and `clamp()` vertical/type sizing; large editorial sections; grids for capabilities, process, and inspiration.
- **Buttons:** `.button` is a small uppercase, letter-spaced flex control with primary/gold, text, outline, and light variants. Minimum height is 48px.
- **Cards/images:** capability and inspiration blocks are CSS color/gradient panels, not image components; simple one-pixel rules define grouping. There are no reusable card components.
- **Borders/shadows:** thin low-opacity borders are used. No box-shadow rules are present.
- **Navigation:** desktop nav is in `Header`; under 800px it switches to a native `<details>`/`<summary>` mobile menu. Links remain normal Next `Link`s.
- **Responsive behavior:** CSS breakpoints at `800px` and `450px` change nav, grids, spacing, hero height, process layout, and footer layout. These rules have not been browser-tested.
- **Motion:** short color/opacity transitions on nav links/buttons and smooth scrolling are present. A `prefers-reduced-motion: reduce` block disables transition/animation and smooth scrolling. No JavaScript animation library is installed.
- **Accessibility behavior:** visible focus outline is defined for anchors and buttons; `details` is keyboard-native; header navigation has labels; CSS placeholders have accessible labels where provided. See the dedicated accessibility section for gaps.

### Intended direction (not proof of completion)

The intended visual direction is premium architectural editorial: premium, professional, trustworthy, modern, and approachable; deep forest green with warm ivory/off-white, restrained champagne gold, and deep charcoal; refined serif display typography paired with a clean modern sans serif. The current color hierarchy and serif/sans arrangement generally point in that direction, but the current system uses generic system font stacks and placeholder gradient panels. It must not be represented as a finished brand-asset implementation.

## 8. BRAND INFORMATION

Verified information supplied for this project:

- **Company:** COCHIN INTERIOR
- **Website:** `cochininterior.in`
- **Email:** `contact@cochininterior.in`
- **Phones:** `+91 98951 82659`; `+91 62825 91940`
- **Office:** 5th Floor, Kandamkulathy Towers, M.G. Road, Kochi - 682011, Ernakulam, Kerala

No years of experience, project/employee count, awards, certifications, testimonials, logos, guarantees, warranties, partnerships, statistics, project values, or other business claims are verified or implemented. Do not add them without supplied evidence and approval.

## 9. BUSINESS / SERVICE CONTENT

Approved taxonomy, fully represented as strings in `content/site.ts` and rendered by the homepage services section:

- **INTERIORS:** Interior Contracting; Home Interiors; Turnkey Interiors; Modular Kitchens; Carpentry; Custom Furniture.
- **FINISHES:** Ceiling Works; Wooden Flooring; Wooden Panelling; Partition Works; Painting.
- **RENOVATION & MAINTENANCE:** Home Renovation; Furniture Repair/Maintenance; Civil Maintenance; General Repair Works; Waterproofing.
- **CONTRACTING:** Fabrication; Related Construction/Contract Works; Other Works.

Only the grouped homepage list is implemented. There are no service detail pages, descriptions per service, images, service cards/components, enquiry flows, or structured service types beyond inferred array object shapes.

## 10. CONTENT RULES

These are permanent rules for future work:

- Never invent company facts, statistics, testimonials, awards, or certifications.
- Never present external inspiration imagery as a COCHIN INTERIOR project.
- Only genuine COCHIN INTERIOR work may appear under Projects.
- External/licensed imagery may appear under Inspiration, with source metadata.
- Handle limited genuine project photography gracefully; never fill a project archive with fabricated work.
- Use an explicit, truthful placeholder or omit content when factual material is missing.

## 11. IMAGE / VIDEO ASSETS

### Repository inventory

No `public/` directory and no image, video, font, SVG, or other static asset file exists in the repository at inspection time. Consequently, there are no asset filenames, asset attribution records, source records, company-material confirmations, or optimization records to document.

The visible "images" and film panel are CSS/HTML placeholders in `app/page.tsx`/`app/globals.css`; they are neither external imagery nor genuine company material and have no source attribution.

**VIDEO ASSET NOT CURRENTLY PRESENT IN REPOSITORY.**

### Known intended advertisement-video usage (pending asset delivery)

- Approximately 40.5 seconds.
- Vertical 9:16, approximately 2160 × 3840.
- Use in a dedicated cinematic video section in its original vertical composition.
- Do not aggressively crop it into a desktop hero.
- Do not autoplay the full video with sound.
- Produce/use an optimized web version and poster image where appropriate.

## 12. ROUTES AND INFORMATION ARCHITECTURE

### Current routes

- `/` — partial homepage.
- `/<any slug>` — catch-all placeholder; therefore the requested paths technically resolve but do not have implemented page content.

### Planned but not yet implemented as dedicated pages

- `/services`
- `/projects`
- `/inspiration`
- `/about`
- `/process`
- `/materials-quality`
- `/contact`

Future expansion, not to be created during this capsule task: `/services/interior-contracting`, `/services/turnkey-interiors`, `/services/renovation`, `/locations/kochi`, `/locations/kerala`, `/locations/bangalore`.

## 13. DATA / CONTENT ARCHITECTURE

- **Existing content file:** `content/site.ts` exports untyped arrays `capabilities`, `serviceGroups`, and `processSteps`.
- **Existing data models/types:** no named TypeScript interfaces/types, project model, inspiration model, CMS schema, or validation schema exists.
- **UI separation:** homepage imports these arrays and maps them to markup; this is the only current content/UI separation.
- **Reusable components:** see Section 14.

Safe future additions that do not require rewriting the homepage: add a capability object, a service name in the appropriate `serviceGroups` object, or a process string in `processSteps`. A future developer should add explicit TypeScript interfaces before the model grows.

There is **no current project data structure** (title, slug, category, location, description, cover image, gallery, tags, featured) and **no inspiration data structure** (image, category, room, style, caption, source, tags). Do not claim that a project or inspiration item can currently be added through a data-only workflow; those models/pages must first be implemented.

## 14. COMPONENT ARCHITECTURE

Actual reusable files:

- `Header` (`components/header.tsx`): wordmark, desktop nav, contact CTA, and native-details mobile menu.
- `Footer` (`components/footer.tsx`): company statement, verified address, phone/email links, secondary links, and current year.
- `SectionHeading` (`components/section-heading.tsx`): optional eyebrow, required title, optional copy.

There are no separate `Hero`, `CapabilityCard`, `ServiceCategory`, `ServiceCard`, `ProjectCard`, `ProjectGrid`, `InspirationCard`, `InspirationGallery`, `ProcessStep`, `QualitySection`, `VideoSection`, `CTASection`, `ContactForm`, or `Lightbox` component files. Corresponding homepage areas are inline JSX in `app/page.tsx`; projects, gallery, contact form, and lightbox do not exist.

## 15. RESPONSIVE / MOBILE STATUS

- **Desktop:** CSS supplies an absolute header over a 92svh hero, four-column capabilities, six-column process, multi-column lists, and broad editorial spacing.
- **Tablet / up to 800px:** nav is hidden in favor of the native mobile menu; capability grid becomes two columns; process becomes two columns; quality/footer collapse; service lists become single-column.
- **Small mobile / up to 450px:** heading size is reduced and capabilities become one column.

The code includes responsive rules, but there has been **no browser/device rendering verification**. Horizontal overflow, real touch ergonomics, the open mobile-menu position, link touch targets, image behavior with real assets, video behavior, and CTA layout must be tested. There is no persistent mobile CALL/WHATSAPP/ENQUIRE contact bar.

Permanent requirement: mobile must be a first-class experience, not a compressed desktop layout.

## 16. ACCESSIBILITY

### Present in source

- Semantic `header`, `nav`, `main`, `footer`, `section`, `article`, `ol`, `address`, and heading elements are used.
- Main nav and mobile nav have `aria-label`s.
- The wordmark home link has an aria label.
- Placeholder image/film areas provide `role="img"` and aria labels.
- The disabled video placeholder button explains why it cannot play.
- Links and buttons have a visible `:focus-visible` outline.
- Native `<details>/<summary>` provides keyboard-operable mobile-menu disclosure.
- `prefers-reduced-motion` disables transitions/animations and smooth scrolling.

### Remaining / not verified

- No formal accessibility audit or contrast test has run; do not claim WCAG conformance.
- There is no actual image alt-text workflow because there are no real images.
- No form, labels, errors, validation, or submission feedback exists.
- Decorative arrow characters are not consistently hidden from assistive technology; only the header CTA arrow is explicitly hidden.
- Heading hierarchy across placeholder pages and future route pages needs route-level review.
- Keyboard focus and mobile menu behavior require browser testing.

## 17. SEO

### Current implementation

`app/layout.tsx` provides:

- Default title: `COCHIN INTERIOR | Interiors. Execution. Built Around You.`
- Title template: `%s | COCHIN INTERIOR`.
- Description for interior contracting, turnkey execution and renovation in Kerala.
- `metadataBase` and canonical alternate `/`, resolving to `https://cochininterior.in/`.
- Open Graph type, locale `en_IN`, URL, site name, title, and description.
- Root HTML language is `en`.
- Semantic headings are present in the homepage.

### Not implemented

- No sitemap.
- No `robots.txt`/`robots.ts`.
- No structured data/JSON-LD.
- No route-specific metadata.
- No Open Graph image.
- No image metadata/alt-text content workflow.

Planned SEO directions: Interior contracting Kochi; Interior contractors Kerala; Home renovation Kochi; Turnkey interiors Kerala; Commercial interior contracting Kochi. Use natural, relevant copy—never keyword stuffing.

## 18. CONTACT / LEAD SYSTEM

### Current state

- **Contact form / validation / email delivery:** not implemented. No route handler, API endpoint, form component, validation schema, or email service code exists.
- **Phone:** final homepage CTA has a `tel:` link for `+91 98951 82659`; footer has both phone links.
- **WhatsApp:** final homepage CTA links to `https://wa.me/919895182659`.
- **Email:** footer has `mailto:contact@cochininterior.in`.
- **Enquiry page:** `/contact` is currently only caught by the generic placeholder page.

Intended public methods are CALL, WHATSAPP, EMAIL, and an ENQUIRY FORM. The pending enquiry fields are Full Name, Phone, Email, Project Type, Location, Project Requirement, and Preferred Contact Method. Pending Project Type options: Residential, Commercial, Renovation, Interior Contracting, Turnkey, Maintenance, Other. The site currently does not send email.

## 19. RESEND / ENVIRONMENT VARIABLES

`.env.example` contains only commented placeholders—no real secret values:

- `RESEND_API_KEY` — intended server-side Resend credential; pending.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional GA4 ID; unset/pending.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — optional Search Console verification value; unset/pending.

Resend is not configured or installed. Before production form delivery, verify `cochininterior.in` as a Resend sending domain; store `RESEND_API_KEY` in server-side Vercel environment variables; never prefix it with `NEXT_PUBLIC_`; never commit a real value.

## 20. ANALYTICS

- **Google Analytics 4:** not implemented; only an optional commented public environment variable is documented.
- **Google Search Console:** not implemented; only an optional commented verification variable is documented.
- **Meta Pixel:** not implemented or configured.
- **Google Ads tracking:** not implemented or configured.

No fake IDs are present.

## 21. DEPLOYMENT PLAN

### Intended production architecture

- **Registrar:** GoDaddy remains the domain registrar.
- **Deployment:** Vercel.
- **Canonical:** `https://cochininterior.in`.
- **Preferred host behavior:** redirect `www.cochininterior.in` to `cochininterior.in`.

### Current configuration vs pending work

The canonical domain is present in root metadata. There is no Vercel project/configuration file, deployed environment, DNS record, domain verification, www redirect configuration, or GitHub-connected deployment evidenced in this repository. Configure Vercel and GoDaddy DNS only when the project is dependency-verified and ready for deployment.

## 22. KNOWN PROBLEMS / BLOCKERS

1. **Dependencies are unavailable in this Codex Cloud workspace.** `node_modules` is absent and `package-lock.json` is absent. Previous `npm install` attempts in this environment returned:

   ```text
   npm error code E403
   npm error 403 403 Forbidden - GET https://registry.npmjs.org/@eslint%2fjs
   ```

   This is an environment/network/proxy restriction, not automatic evidence of website-code failure. Do not bypass proxy/security restrictions, change registries blindly, substitute untrusted mirrors, downgrade packages, or fabricate a lockfile.
2. **Build status:** blocked in this workspace because Next.js is not installed locally (`next: not found` on the prior build attempt).
3. **Typecheck status:** blocked/fails meaningfully without local Next/React type dependencies. Previous output primarily reported missing `next`/React modules and JSX declarations, which is a consequence of absent dependencies.
4. **Lint status:** blocked because local ESLint is absent; the config cannot import `eslint` without installed dependencies.
5. **Browser/render verification:** not run; no screenshot or responsive visual QA exists because the app cannot run here.
6. **Product blockers:** no supplied visual assets, genuine project data, advertisement video, dedicated content pages, contact form, mail delivery, deployment configuration, or production QA.

## 23. TESTING STATUS

| Check | Status | Actual known result |
| --- | --- | --- |
| `npm install` | **BLOCKED** | Environment returned HTTP 403 while fetching `@eslint/js`; did not create dependencies or lockfile. |
| `npm run build` | **BLOCKED** | Prior attempt could not find `next` because installation did not complete. |
| `npm run typecheck` | **BLOCKED** | Prior attempt surfaced missing Next/React declarations due to absent local dependencies; no valid project typecheck result exists. |
| `npm run lint` | **BLOCKED** | Prior attempt could not import local `eslint` because dependencies are absent. |
| `git diff --check` before capsule | **PASS** | Previously run without whitespace errors; rerun after this document is required before commit. |
| Browser/render/mobile verification | **NOT RUN** | App cannot be started in the current workspace. |
| Automated tests | **NOT RUN** | No test suite/files are present. |

Do not convert any BLOCKED status to PASS until dependencies are installed successfully in an approved environment and the relevant command passes there.

## 24. GIT HISTORY

- **Branch:** `work`.
- **HEAD:** `73bc87364716d88f69bfbe67ae4700000f691299` / `73bc873`.
- **Important commits:**
  - `73bc873 Initialize Next.js site for COCHIN INTERIOR — pages, layout, components, styles, and config`
  - `7f1de2d Create README.md`
- **Remote status:** no Git remote configured at inspection time.
- **Uncommitted status:** clean before this capsule; this file is the only intended subsequent change.

Do not rewrite, squash, force-push, or otherwise alter existing history without explicit instruction.

## 25. ORIGINAL PROJECT REQUIREMENTS

- Next.js + TypeScript.
- Tailwind CSS.
- Vercel deployment; GoDaddy remains registrar.
- English only.
- Initial service region: Kerala; possible future expansion to Bangalore/South India.
- No CMS, blog, or client login at launch.
- No price calculator.
- Build work in controlled phases, validate before claiming completion.

## 26. VISUAL / UX NON-NEGOTIABLES

The site must not look like generic WordPress, a cheap local-business site, a generic AI landing page, a furniture catalogue, an Instagram page, an overdecorated luxury site, or a template-style business site.

It should feel like a premium architectural studio, professional interior contractor, turnkey execution company, and modern construction/interiors brand. Motion must be restrained: avoid bouncing, spinning, excessive parallax, animated gradients, constant movement, excessive shadows, and excessive cards. Respect `prefers-reduced-motion`.

## 27. WHAT HAS ALREADY BEEN DECIDED

- Use Next.js + TypeScript and Tailwind CSS; keep the current declared dependency versions unless explicitly changed for a reviewed reason.
- Use Vercel for deployment and GoDaddy as registrar.
- The apex domain is canonical; www should redirect to apex.
- English only; Kerala first, with future geographical expansion possible.
- No CMS/blog/client login or price calculator at launch.
- Use genuine COCHIN INTERIOR projects only; label inspiration separately and retain source metadata.
- Do not invent company facts or claims.
- The vertical advertisement film should retain its composition and not autoplay its full audio version.
- Mobile quality is a first-class requirement.
- Use controlled phases; do not build blindly or claim untested work is complete.
- The current root metadata uses `cochininterior.in`; `@/*` imports resolve from the repository root through `tsconfig.json`.

## 28. WHAT IS STILL LEFT TO DO

### P0 — blocking / must resolve first

- Install declared dependencies in an approved environment with npm registry access; generate a genuine `package-lock.json`.
- Run and record `npm run build`, `npm run typecheck`, and `npm run lint`; resolve only verified code/configuration issues discovered after a valid installation.
- Obtain the required genuine brand assets, project photography/data, and advertisement-video file/poster before treating visual/project/video areas as production content.

### P1 — required before launch

- Build dedicated verified-content pages for Services, Projects, Inspiration, About, Process, Materials & Quality, and Contact; remove generic route placeholders only as replacement pages are ready.
- Establish typed data models and content sources for projects, inspiration (including source metadata), services, and related reusable UI.
- Implement the enquiry form, client/server validation, spam protection approach, accessible states, Resend server-side delivery, and configured production domain sending.
- Integrate phone, WhatsApp, email, and form contact methods appropriately across the final site.
- Add genuine project archive and properly sourced inspiration gallery/lightbox only when data/assets are available.
- Integrate optimized vertical advertisement video and poster without aggressive desktop crop or full sound autoplay.
- Complete sitemap, robots, structured data where appropriate, route metadata/Open Graph images, and natural SEO copy.
- Perform responsive, accessibility, performance, and cross-browser QA.
- Configure Vercel deployment, environment variables, GoDaddy DNS, apex canonical domain, and www-to-apex redirect.

### P2 — important refinement

- Replace generic system font stacks with approved/licensed brand typography if supplied.
- Refine mobile navigation, real asset sizing/loading, touch targets, CTA hierarchy, and possible mobile contact bar after device testing.
- Add analytics/Search Console only after genuine IDs are supplied and consent/privacy requirements are decided.
- Add image optimization, alt-text/content workflows, performance budgets, and final metadata/image QA.

### P3 — future enhancement

- Implement future service detail routes and location pages only when approved content exists.
- Consider structured, maintainable content tooling only after launch needs justify it; no CMS is approved at launch.

## 29. EXACT NEXT ACTION

**NEXT ACTION:** Install dependencies in an approved environment with permitted npm registry access, generate a genuine `package-lock.json`, then run build/typecheck/lint before any further website development.

## 30. FUTURE CODEX RESUME PROMPT

> Read `PROJECT_CAPSULE.md` first, then inspect the current repository and Git state before modifying anything. Treat the capsule as project context, not permission to blindly change files. Preserve existing technical, visual, content, and business decisions; never invent company facts, claims, projects, testimonials, or credentials. Work in controlled phases and inspect current implementation before proposing changes. Test each applicable change before claiming completion; identify dependency, environment, and other blockers honestly. Update `PROJECT_CAPSULE.md` whenever major project decisions or status materially change. Never overwrite working functionality, rewrite history, or change architecture/dependencies without clear justification and explicit instruction.
