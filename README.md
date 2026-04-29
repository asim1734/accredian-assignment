# Accredian Enterprise — Partial Clone

A responsive landing page clone of [enterprise.accredian.com](https://enterprise.accredian.com), built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

---

## Live Demo

🔗 [your-vercel-url.vercel.app](https://accredian-assignment-dna340ie7-asim-rupanis-projects.vercel.app/) 


---

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/accredian-enterprise.git
cd accredian-enterprise

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo directly at [vercel.com/new](https://vercel.com/new) — zero config needed for Next.js.

---

## Project Structure

```
accredian-enterprise/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Composes all sections in order
│   └── api/
│       └── leads/
│           └── route.ts    # POST endpoint — saves lead to leads.json
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav, mobile hamburger menu
│   │   └── Footer.tsx      # 4-column footer
│   └── sections/
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       ├── Testimonials.tsx
│       ├── Partners.tsx
│       └── LeadCaptureForm.tsx
├── lib/
│   └── data.ts             # All mock data (stats, features, testimonials etc.)
├── types/
│   └── index.ts            # Shared TypeScript interfaces
└── public/
```

---

## Approach

### 1. Planning
I started by going through the reference site section by section and mapping out the component breakdown before writing any code. This made the AI scaffolding phase much more efficient since I could give precise, scoped prompts per section rather than one vague ask.

### 2. Component Architecture
Every section is a standalone, self-contained component that receives no required props — all data is imported from `lib/data.ts`. This keeps `page.tsx` clean (just a list of imports) and makes individual sections easy to swap or update without touching other parts of the app.

### 3. Styling Strategy
Used Tailwind CSS throughout with a mobile-first approach (`base → sm → md → lg` breakpoints). Avoided inline styles entirely. Color tokens and spacing follow Tailwind defaults with a few custom values in `tailwind.config.ts` to match Accredian's blue palette.

### 4. Lead Capture Form
The bonus form uses a controlled React component with client-side validation (required fields, email regex). On submission it POSTs to `/api/leads` — a Next.js App Router route handler that appends the lead to `leads.json` in the project root. This is mock/local storage, not a real database, but it demonstrates the full request-response cycle with proper error handling and success/error UI states.

### 5. Responsive Design
Tested at 375px (iPhone SE), 768px (tablet), and 1280px (desktop). The main fixes involved:
- Collapsing grid layouts to single-column on mobile
- Making the Navbar hamburger menu fully functional
- Ensuring no horizontal overflow anywhere (added `overflow-x: hidden` to body)

---

## AI Usage

I used three AI tools during this project and want to be transparent about exactly where each one helped and what I changed manually.

### GPT Codex (Agent Mode) — Primary scaffolding
Used for the bulk of the initial code generation. I provided a detailed prompt specifying the full project structure, tech stack, and a description of every section. Codex scaffolded the entire component tree, API route, and Tailwind layout in one pass.

**What I modified manually after Codex output:**
- Adjusted the color palette — Codex defaulted to generic blues; I updated them to closer match Accredian's actual brand navy/blue (`#1A3C6E`, `#1D72E8`)
- Fixed the mobile hamburger menu — it toggled open but didn't close when a nav link was clicked; added an `onClick` handler on each link to close the menu
- Replaced all placeholder Lorem Ipsum text with realistic content (actual course names, realistic company names in testimonials, real-sounding job titles)
- Rewrote the form validation logic — Codex only checked if fields were non-empty; I added email format validation and a `touched` state so errors only show after the user interacts with a field

### Claude — Planning and README
Used Claude during the planning phase to structure my component breakdown and write prompts for Codex. Also used it to help draft this README.

**What I modified:**
- Rewrote the README in my own voice after using Claude's draft as a starting point
- Adjusted the component structure based on what made sense for the actual reference site, not just Claude's suggestion

### Gemini Pro — Bug fixing
Used for targeted debugging after the initial build — specifically for a TypeScript type error in the API route and a Tailwind class not applying correctly on Safari mobile.

---

## What I Would Improve With More Time

**Real database integration** — Right now leads are stored in a flat JSON file. With more time I'd swap this for a proper database (Supabase or PlanetScale) with a leads table, timestamps, and a simple admin view to see submissions.

**Animations** — The page is functional but static. I'd add scroll-triggered entrance animations (using Framer Motion) on the Stats and Features sections to make the page feel more polished and alive.

**Accessibility audit** — I focused on visual correctness and responsiveness but didn't do a full a11y pass. I'd want to add proper ARIA labels to the hamburger menu, ensure sufficient color contrast on all text, and verify full keyboard navigation.

**Image optimization** — Currently using placeholder divs where logos and images would go. With more time I'd source proper assets and use Next.js `<Image>` with correct `sizes` and `priority` attributes for performance.

**Testing** — Would add Playwright e2e tests for the lead form submission flow and a smoke test that checks all sections render without errors.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Font | Inter (via `next/font/google`) |
| API | Next.js Route Handlers |
| Deployment | Vercel |