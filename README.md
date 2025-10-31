# WarmPaws — Pet Care in Winter

[![Live Demo](https://img.shields.io/badge/demo-live-blue)](https://warmpaws-pet-care-in-win-8fd50.web.app/) [![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE) [![Firebase](https://img.shields.io/badge/firebase-auth-orange)](https://firebase.google.com)

A cozy winter companion platform designed for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season. Explore local winter pet services, clothing, grooming, and expert tips — all in a clean, responsive SPA.

---

## Table of Contents
- [Key Features](#key-features)
- [Why these packages?](#why-these-packages)
- [Tech & Dependencies](#tech--dependencies)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Requirements & Compliance](#project-requirements--compliance)
- [Notes on README styling](#notes-on-readme-styling)
- [Contributing](#contributing)
- [License](#license)

---

## Key Features
- Secure Authentication
  - Email/password + Google Sign-in (Firebase Auth)
  - Protected routes (service detail pages require login)
  - Profile view + update (updateProfile)
  - Password reset flow (redirect to email)
- Home / Layout
  - Persistent Navbar and Footer
  - Hero slider (warm winter theme)
  - Popular Winter Care Services (data from local JSON)
  - Winter Care Tips (static/fake JSON)
  - Meet Our Expert Vets (static)
  - Extra homepage section (relevant, e.g., "Winter Safety Checklist")
- Services
  - Service cards show image, name, price, rating and "View Details"
  - Service Details is a protected route — includes full data and a "Book Service" form (name, email) with success toast
- Auth pages
  - Login / Signup with validation (password rules: uppercase, lowercase, min 6)
  - Google social login
  - Password show/hide toggle and "Forgot password" flow
- UX
  - Mobile-first responsive design
  - Toast notifications for success / errors
  - Smooth animations and transitions (multiple libs used)
  - SPA behavior: no route reload errors

---

## Why these packages?
- React — UI framework and SPA behavior.
- Tailwind CSS + DaisyUI — fast utility-first styling + accessible UI components.
- Firebase — authentication and user profile management without custom backend.
- React Router v7 — declarative routing and protected routes.
- AOS, Animate.css, @react-spring/web, Swiper, react-fast-marquee — used together to add layered, pleasant micro-interactions (scroll reveals, entrance/exit animations, slider, marquee). Requirement asked for at least three; this project uses all five for richer polish.
- react-hot-toast / react-toastify — user-friendly toast notifications.
- Swiper — hero & card sliders for mobile-friendly gestures.
- Vite — fast development and production builds.

---

## Tech & Key Dependencies
Main:
- react ^19.1.1
- react-dom ^19.1.1
- react-router ^7.9.4
- tailwindcss ^4.1.16
- daisyui ^5.3.9
- firebase ^12.4.0
- @react-spring/web ^10.0.3
- aos ^2.3.4
- animate.css ^4.1.1
- swiper ^12.0.3
- react-fast-marquee ^1.6.5
- react-hot-toast ^2.6.0
- react-icons ^5.5.0
- react-toastify ^11.0.5

Dev / tooling:
- vite ^7.1.7
- @vitejs/plugin-react ^5.0.4
- eslint / @eslint/js / plugins
- types for React

(Full package list is in package.json)

---

## Getting Started
1. Clone
   git clone https://github.com/programming-hero-web-course2/b12-a9-firesheild-ashiqur0
2. Install
   npm install
3. Run dev server
   npm run dev
4. Build for production
   npm run build

---

## Environment Variables
Create a `.env` or `.env.local` (Vite picks up VITE_ prefixed vars):

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

Do not commit this file.

---

## Project Requirements & Compliance
- 10+ meaningful commits (use descriptive commit messages).
- README.md with project details, live URL and used npm packages — done.
- Responsive (mobile / tablet / desktop).
- Environment variables used to hide Firebase config.
- Minimal, modern design with subtle animations (AOS, Animate.css, React Spring, Swiper, Marquee).
- SPA behavior — no route reload crashes; authorized domains added for deployed host.
- Protected Service Details route with redirect-to-login flow and back-navigation.
- Book service form shows success toast and clears (no backend required).
- Signup / Login flows with validation and social (Google) login.

---

## Notes on README styling
- GitHub renders Markdown with limited styling. Plain text size is uniform by design.
- To add visual polish use:
  - Badges (shields.io) — used above.
  - Images, GIFs, or an SVG banner — include at top for colorful header.
  - Tables, code blocks and emojis for readability.
- Inline CSS style attributes are sanitized on GitHub (colors/styles will often be stripped). Use badges/images for colors instead.

Example banner image (host externally) — include at top:
![banner](https://your-image-host.com/warmpaws-banner.gif)

---

## Contributing
Pull requests are welcome. For major changes open an issue to discuss first.

---

## License
MIT — see LICENSE file.