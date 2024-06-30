# Mastering Nuxt 3

This is a repository of my work for the course [Mastering Nuxt 3](https://masteringnuxt.com/nuxt3). It contains the source code for the course project.

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Prerequisites

[Node.js](https://nodejs.org/en/download/) installed on your machine.

[Nuxt.js](https://nuxtjs.org/) installed on your machine.

[Stripe](https://stripe.com/) account to get the API keys.

[Supabase](https://supabase.io/) account to get the API keys.


## Setup

Make sure to install the dependencies:

```bash

# pnpm
pnpm install --shamefully-hoist
```

Configure Prisma:

```bash

prisma generate
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
