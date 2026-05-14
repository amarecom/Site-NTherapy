# Site NTherapy

Site vitrine pour un ostéopathe (NTherapy), construit avec Next.js.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — hero, services, témoignages, réservation |
| `/services` | Détail des prestations |
| `/reservation` | Prise de rendez-vous |
| `/a-propos` | Présentation du praticien |
| `/contact` | Formulaire de contact |

## Stack

- **Framework** : Next.js 15 (App Router)
- **Styles** : CSS modules + Tailwind
- **Déploiement** : Vercel

## Installation

```bash
npm install
npm run dev
```

## Structure

```
src/
├── app/          # Routes (App Router)
├── components/   # Navbar, Footer, AnimatedSection
└── sections/     # Hero, Services, About, Booking, Contact, Testimonials
```
