# Stallion Connect Pvt Ltd — Website (React edition)

Company website for **Stallion Connect Pvt Ltd**: call centre, BPO, sales, customer support, recruitment and back-office services.

A single-page site built with **React + Vite + Tailwind CSS + TypeScript**. Sections: Home, About, Services, Industries, Careers and Contact.

## Project layout

| Path | What it holds |
| --- | --- |
| `src/content.ts` | All site copy: services, industries, jobs, contact details |
| `src/components/` | One component per section, plus the looping video background and scroll reveal |
| `src/styles/fonts.css` | Instrument Serif (display) and Inter (body) |
| `src/styles/theme.css` | Colours, fonts and the `fade-rise` animations (Tailwind v4 `@theme`) |
| `src/lib/forms.ts` | Form submission and `FORM_ENDPOINT` |
| `public/` | Logos, favicon and the logo options page |

## Run locally

```bash
npm install
npm run dev
```

`npm run build` writes the production site to `dist/`.

## Deploying

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The `base` path in `vite.config.ts` matches the repository name; change it if the repository is renamed or moved to a custom domain.

## Before launch

- **Forms** run in demo mode and send nothing. Set `FORM_ENDPOINT` in `src/lib/forms.ts` (for example a Formspree form URL) to receive enquiries and job applications by email.
- **Placeholders** are marked `TODO` in `src/content.ts` and the components: office address, phone number, social media links, the "24×7" figure, careers perks and job openings.
