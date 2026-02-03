# DNK — Modern Web Experience

> A sleek, performant web application built with **Next.js 16**, **React 19**, and modern web technologies.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🚀 Live Demo

🔗 **[dnk-drab.vercel.app](https://dnk-drab.vercel.app)**

---

## ✨ Features

- **Modern Architecture** — Built with Next.js 16 App Router for server-side rendering and static site generation.
- **Authentication** — Secure user authentication flows (Login, Register, Forgot Password).
- **Dashboard** — Protected dashboard routes for user management and data visualization.
- **Responsive Design** — Fully responsive layouts optimized for mobile, tablet, and desktop using Tailwind CSS v4.
- **Interactive UI** — Smooth animations with Framer Motion and touch-friendly carousels via Embla.
- **Theme Support** — Built-in support for light and dark modes (via `next-themes`).
- **Type Safety** — Comprehensive TypeScript support for reliable code.

---

## 🛠 Tech Stack

### Core Framework
- **Next.js 16.1.3** — Research-grade React framework including the new App Router.
- **React 19.2.3** — The latest version of the React library for building user interfaces.
- **TypeScript 5.x** — Typed JavaScript for scalable application development.

### Styling & UI Components
- **Tailwind CSS 4.x** — A utility-first CSS framework for rapid UI development.
- **Radix UI** — Unstyled, accessible components for building high-quality design systems.
- **Lucide React & React Icons** — Beautiful, consistent icons.
- **Sonner** — An opinionated toast component for React.

### Animation & Interaction
- **Framer Motion** — Production-ready motion library for React.
- **Embla Carousel** — A lightweight carousel library with fluid motion and great swipe precision.

### Backend & Services
- **Firebase** — Backend-as-a-Service for authentication and data storage.

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/dnk.git
   cd dnk
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory and add your Firebase configuration keys:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MESSUREMENT_ID=your_measurement_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📜 Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with hot-reloading. |
| `npm run build` | Builds the application for production usage. |
| `npm run start` | Starts the production server (after building). |
| `npm run lint` | Runs ESLint to catch code issues. |

---

## 📁 Project Structure

```txt
dnk/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Authentication routes (Login, Register)
│   ├── (dashboard)/        # Dashboard & protected routes
│   ├── (public)/           # Public facing routes
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/             # Reusable UI components
│   ├── auth/               # Auth-specific components
│   ├── home/               # Landing page components
│   ├── ui/                 # Accessible UI primitives (Radix/Shadcn)
│   └── web/                # Shared web components (Navbar, Footer)
├── context/                # React Context providers (AuthContext)
├── lib/                    # Utilities & Library configurations
│   ├── firebase.ts         # Firebase initialization
│   └── utils.ts            # Helper functions
├── public/                 # Static assets (images, fonts)
└── ...config files (tailwind, next, tsconfig)
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
