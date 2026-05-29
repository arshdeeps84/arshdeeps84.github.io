# Portfolio — Angular 17

Dark & dramatic portfolio homepage for a Web/UI Developer.
Built with **Angular 17 standalone components** (no NgModules).

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
ng serve

# Open http://localhost:4200
```

## Build for production
```bash
ng build
# Output → dist/portfolio-angular/
```

---

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          ← Root (cursor + layout)
│   └── components/
│       ├── navbar/               ← Fixed nav bar
│       ├── hero/                 ← Full-screen hero
│       ├── marquee/              ← Skills ticker
│       ├── work/                 ← Project grid
│       ├── about/                ← About + skill bars
│       ├── services/             ← Services cards
│       ├── testimonials/         ← Client testimonials
│       ├── cta/                  ← Contact CTA
│       └── footer/               ← Footer + socials
├── styles/
│   └── global.scss               ← CSS variables, resets, animations
└── index.html
```

## Key Angular 17 Features Used

- **Standalone components** — no NgModule boilerplate
- **`bootstrapApplication`** — standalone bootstrap in main.ts
- **`*ngFor` / `[ngClass]` / `[style]`** — template bindings
- **`IntersectionObserver`** — scroll-triggered skill bar animation
- **`@Inject(PLATFORM_ID)`** — SSR-safe browser API usage
- **Encapsulated component styles** — each component owns its styles

## Customisation

| What to change | Where |
|---|---|
| Your name & bio | `about.component.ts` |
| Projects | `work.component.ts` → `projects` array |
| Skills & percentages | `about.component.ts` → `skills` array |
| Services | `services.component.ts` → `services` array |
| Testimonials | `testimonials.component.ts` |
| Nav links & email | `navbar.component.ts` |
| Accent color | `global.scss` → `--accent` |
