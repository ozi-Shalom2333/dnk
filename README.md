# DNK — Modern Web Experience

> A sleek, performant web application built with **Next.js 16**, **React 19**, and modern web technologies.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🚀 Live Demo

🔗 **https://dnk-drab.vercel.app**

---

## ✨ Features

- **Modern Architecture** — Built with Next.js 16 App Router
- **React 19** — Latest React features and performance improvements
- **TypeScript** — End-to-end type safety
- **Smooth Animations** — Powered by Framer Motion
- **Accessible UI Components** — Built with Radix UI primitives
- **Responsive Design** — Mobile-first with Tailwind CSS v4
- **Interactive Carousels** — Touch-friendly sliders via Embla
- **Rich Iconography** — Lucide React & React Icons
- **Optimized Fonts** — Automatic font optimization using Geist

---

## 🛠 Tech Stack

### Core Framework
- **Next.js 16.1.3** — React framework with App Router
- **React 19.2.3** — UI library
- **TypeScript 5.x** — Type safety

### Styling & UI
- **Tailwind CSS 4.x** — Utility-first styling
- **Radix UI** — Headless UI primitives
- **Class Variance Authority (CVA)** — Component variants
- **tailwind-merge** — Utility class management

### Animations & Interaction
- **Framer Motion 12.28.1**
- **Embla Carousel 8.6.0**
- **tw-animate-css**

### Icons
- **Lucide React 0.562.0**
- **React Icons 5.5.0**

### Tooling
- **ESLint 9.x**
- **ESLint Config Next**

---

## 📁 Project Structure

```txt
dnk/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── ui/                 # UI primitives
│   └── ...
├── lib/                    # Utilities
│   └── utils.ts
├── public/                 # Static assets
│   ├── images/
│   └── ...
├── .vscode/
├── components.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
