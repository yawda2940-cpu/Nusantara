# Nusantara

Nusantara Meal Prep is a modern, premium web application built for a catering business that provides healthy, macro-calculated meal plans with authentic Indonesian flavors. The platform showcases menus, promotions, and company values while offering a seamless user experience.

## Features

- **Modern Tech Stack**: Built with React 19, Vite, and TypeScript for a fast, type-safe development experience.
- **Responsive & Accessible Design**: Crafted with Tailwind CSS v4 to ensure the website looks beautiful on all devices (mobile, tablet, and desktop).
- **Smooth Animations**: Integrated with `motion` (Framer Motion) for elegant page transitions and micro-interactions, along with `lenis` for buttery smooth scrolling.
- **Internationalization (i18n)**: Fully supports dual languages (English and Bahasa Indonesia) through a custom context-based i18n implementation.
- **Full-Stack Architecture**: Powered by a custom Express backend (`server.ts`) to serve API routes and static assets in production, seamlessly integrated with Vite's middleware during development.
- **Interactive UI Components**: Includes a parallax image effect, dynamic map integration via Google Maps embed, and an automated WhatsApp ordering system.

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (Navbar, Footer, FadeIn, etc.)
│   ├── i18n/            # Internationalization context and locale dictionaries
│   ├── pages/           # Route-level components (Home, About, Menu, Promo, Contact)
│   ├── App.tsx          # Main application component & router setup
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles & Tailwind configuration
├── server.ts            # Express server entry point
├── package.json         # Dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## Getting Started

### Prerequisites

Make sure you have Node.js (v18+) installed on your machine.

### Installation

1. Clone the repository and navigate into the project directory.
2. Install the dependencies:

```bash
npm install
```

### Development

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Building for Production

To build the application for production:

```bash
npm run build
```

This command will:
1. Compile the React frontend using Vite into the `dist/` folder.
2. Bundle the Express server (`server.ts`) into a standalone CommonJS file (`dist/server.cjs`) using `esbuild`.

### Running in Production

After building, you can start the production server:

```bash
npm run start
```

The production server will serve the static assets from the `dist` directory and handle any API routes defined in `server.cjs`.

## Technologies Used

- **Frontend**: React, React Router DOM, Tailwind CSS
- **Backend**: Node.js, Express
- **Tooling**: Vite, esbuild, TypeScript
- **Animation**: Motion, Lenis
- **Icons**: Google Material Symbols

## License

All rights reserved. © 2026 Nusantara Meal Prep.
