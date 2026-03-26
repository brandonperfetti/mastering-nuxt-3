# Mastering Nuxt 3

<div align="center">

<img src="https://img.shields.io/badge/Nuxt_3-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white" />
<img src="https://img.shields.io/badge/Vue_3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Pinia-FFD859?style=for-the-badge&logo=pinia&logoColor=black" />
<img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
<img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" />
<img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />

**Course project from [Mastering Nuxt 3](https://masteringnuxt.com/nuxt3) — a full-stack course platform with authentication, payments, and content management.**

</div>

---

## Overview

This repository contains the completed course project from [Mastering Nuxt 3](https://masteringnuxt.com/nuxt3) by Michael Thiessen. It's a **full-stack online course platform** built entirely with Nuxt 3, demonstrating production patterns including Prisma ORM with a relational database, Stripe checkout and webhook handling, Supabase Auth, Pinia state management, and Nuxt's server-side API routes.

The project covers the complete lifecycle of a SaaS-style course platform: landing page, authentication, course enrollment, lesson progress tracking, and payment integration.

---

## Features

- 🎓 **Course Platform** — Multi-course catalog with individual lesson pages and progress tracking
- 💳 **Stripe Payments** — Full checkout flow with webhook handling for purchase confirmation
- 🔐 **Authentication** — Supabase Auth integration via `@nuxtjs/supabase`
- 🗄️ **Database Layer** — Prisma ORM with a relational schema (courses, lessons, users, purchases)
- 🧠 **State Management** — Pinia stores for auth and course state
- 🎨 **Tailwind CSS** — Utility-first styling with typography plugin
- 🔄 **Server API Routes** — Nuxt server endpoints for Stripe webhooks and data mutations
- 🌐 **SSR / SSG** — Full server-side rendering with Nuxt 3's hybrid rendering
- 🔀 **Middleware** — Route protection with Nuxt route middleware
- 🧩 **Composables** — Reusable logic extracted into Vue 3 composables

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Nuxt 3](https://nuxt.com/) | Full-stack Vue framework (SSR/SSG) |
| [Vue 3](https://vuejs.org/) | Composition API frontend |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Pinia](https://pinia.vuejs.org/) | State management |
| [Prisma](https://www.prisma.io/) | Database ORM |
| [Supabase](https://supabase.com/) | Auth + Postgres database |
| [Stripe](https://stripe.com/) | Payment processing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [VueUse](https://vueuse.org/) | Composition utilities |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) (recommended)
- A [Supabase](https://supabase.com/) project
- A [Stripe](https://stripe.com/) account (test mode for development)

### Installation

```bash
git clone https://github.com/brandonperfetti/mastering-nuxt-3.git
cd mastering-nuxt-3
pnpm install --shamefully-hoist
```

### Environment Variables

Create a `.env` file in the project root:

```env
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_supabase_anon_key

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PUBLISHABLE_KEY=pk_test_...

# App
BASE_URL=http://localhost:3000
```

### Database Setup

Generate the Prisma client and apply migrations:

```bash
npx prisma generate
npx prisma db push
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

For Stripe webhook testing locally, use the [Stripe CLI](https://stripe.com/docs/stripe-cli):

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### Production Build

```bash
pnpm build
pnpm preview
```

---

## Project Structure

```
mastering-nuxt-3/
├── pages/
│   ├── index.vue         # Landing page
│   ├── landing.vue       # Marketing landing page
│   ├── login.vue         # Authentication page
│   ├── confirm.vue       # Email confirmation
│   ├── course.vue        # Course overview
│   └── course/           # Individual lesson pages
├── components/           # Reusable Vue components
├── composables/          # Shared composable logic
├── stores/               # Pinia state stores
├── middleware/           # Nuxt route middleware (auth guards)
├── server/
│   ├── api/              # Nuxt server API routes
│   └── middleware/       # Server-side middleware
├── layouts/              # App layout components
├── prisma/               # Prisma schema and migrations
├── types/                # TypeScript type definitions
└── assets/               # Global styles and static assets
```

---

## Course Reference

This project was built following the [Mastering Nuxt 3](https://masteringnuxt.com/nuxt3) course curriculum. Key modules covered:

- Nuxt 3 project structure and file-based routing
- Server routes and API endpoints
- Prisma integration with Supabase Postgres
- Stripe payments and webhook handling
- Authentication with `@nuxtjs/supabase`
- Pinia stores and composables
- Middleware for route protection
- Deployment to Netlify

---

## Deployment

This project includes a `netlify.toml` for Netlify deployment. Add environment variables in your Netlify project settings.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/brandonperfetti/mastering-nuxt-3)

---

## License

MIT © [Brandon Perfetti](https://brandonperfetti.com)
