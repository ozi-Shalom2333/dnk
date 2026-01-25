     1	# DNK - Modern Web Experience
     2	
     3	> A sleek, performant web application built with Next.js 16, React 19, and cutting-edge web technologies.
     4	
     5	[![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?style=flat&logo=next.js)](https://nextjs.org/)
     6	[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat&logo=react)](https://reactjs.org/)
     7	[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
     8	[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
     9	[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
    10	
    11	## 🚀 Live Demo
    12	
    13	Visit the live application: [**dnk-drab.vercel.app**](https://dnk-drab.vercel.app)
    14	
    15	---
    16	
    17	## ✨ Features
    18	
    19	- **Modern Architecture**: Built with Next.js 16 App Router for optimal performance and developer experience
    20	- **React 19**: Leveraging the latest React features and improvements
    21	- **TypeScript**: Full type safety throughout the entire codebase
    22	- **Smooth Animations**: Enhanced user experience with Framer Motion
    23	- **Beautiful UI Components**: Customizable components using Radix UI primitives
    24	- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
    25	- **Interactive Carousels**: Touch-friendly image sliders with Embla Carousel
    26	- **Icon Library**: Rich iconography with Lucide React and React Icons
    27	- **Optimized Fonts**: Automatic font optimization with Geist font family
    28	
    29	---
    30	
    31	## 🛠️ Tech Stack
    32	
    33	### Core Framework
    34	- **[Next.js 16.1.3](https://nextjs.org/)** - React framework with App Router
    35	- **[React 19.2.3](https://reactjs.org/)** - UI library
    36	- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type safety
    37	
    38	### Styling & UI
    39	- **[Tailwind CSS 4.x](https://tailwindcss.com/)** - Utility-first CSS framework
    40	- **[Radix UI](https://www.radix-ui.com/)** - Headless UI primitives (`@radix-ui/react-slot`)
    41	- **[Class Variance Authority](https://cva.style/)** - Component variants
    42	- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Class name utilities
    43	
    44	### Animations & Interactions
    45	- **[Framer Motion 12.28.1](https://www.framer.com/motion/)** - Production-ready animations
    46	- **[Embla Carousel 8.6.0](https://www.embla-carousel.com/)** - Touch-friendly carousels
    47	- **[tw-animate-css](https://github.com/ixahmed/tw-animate-css)** - Animation utilities
    48	
    49	### Icons
    50	- **[Lucide React 0.562.0](https://lucide.dev/)** - Beautiful open-source icons
    51	- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Popular icon libraries
    52	
    53	### Development Tools
    54	- **[ESLint 9.x](https://eslint.org/)** - Code linting
    55	- **[ESLint Config Next](https://nextjs.org/docs/app/building-your-application/configuring/eslint)** - Next.js ESLint rules
    56	
    57	---
    58	
    59	## 📁 Project Structure
    60	
    61	```
    62	dnk/
    63	├── app/                    # Next.js App Router (pages, layouts, components)
    64	│   ├── page.tsx           # Home page
    65	│   ├── layout.tsx         # Root layout
    66	│   └── globals.css        # Global styles
    67	├── components/            # Reusable UI components
    68	│   ├── ui/               # Component primitives
    69	│   └── ...               # Feature components
    70	├── lib/                  # Utility functions
    71	│   └── utils.ts          # Helper functions
    72	├── public/               # Static assets
    73	│   ├── images/           # Images
    74	│   └── ...               # Other static files
    75	├── .vscode/              # VS Code configuration
    76	├── components.json       # Component configuration
    77	├── next.config.ts        # Next.js configuration
    78	├── tailwind.config.ts    # Tailwind CSS configuration
    79	├── tsconfig.json         # TypeScript configuration
    80	└── package.json          # Dependencies and scripts
    81	```
    82	
    83	---
    84	
    85	## 🚀 Getting Started
    86	
    87	### Prerequisites
    88	
    89	- Node.js 18.x or higher
    90	- npm, yarn, pnpm, or bun package manager
    91	
    92	### Installation
    93	
    94	1. **Clone the repository**
    95	   ```bash
    96	   git clone https://github.com/ozi-Shalom2333/dnk.git
    97	   cd dnk
    98	   ```
    99	
   100	2. **Install dependencies**
   101	   ```bash
   102	   npm install
   103	   # or
   104	   yarn install
   105	   # or
   106	   pnpm install
   107	   # or
   108	   bun install
   109	   ```
   110	
   111	3. **Run the development server**
   112	   ```bash
   113	   npm run dev
   114	   # or
   115	   yarn dev
   116	   # or
   117	   pnpm dev
   118	   # or
   119	   bun dev
   120	   ```
   121	
   122	4. **Open your browser**
   123	   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.
   124	
   125	---
   126	
   127	## 📋 Available Scripts
   128	
   129	| Script | Description |
   130	|--------|-------------|
   131	| `npm run dev` | Start development server |
   132	| `npm run build` | Build production application |
   133	| `npm run start` | Start production server |
   134	| `npm run lint` | Run ESLint for code quality |
   135	
   136	---
   137	
   138	## 🎨 Customization
   139	
   140	### Adding New Components
   141	
   142	This project uses a component-based architecture. To add new components:
   143	
   144	1. **Use the component generator** (if configured):
   145	   ```bash
   146	   npx shadcn-ui@latest add button
   147	   ```
   148	
   149	2. **Or create manually** in the `components/ui/` directory following the existing patterns.
   150	
   151	### Styling
   152	
   153	- Global styles are in `app/globals.css`
   154	- Component styles use Tailwind CSS utility classes
   155	- Custom animations are configured with Framer Motion
   156	- Color scheme and design tokens are in Tailwind config
   157	
   158	---
   159	
   160	## 🏗️ Building for Production
   161	
   162	1. **Create production build**
   163	   ```bash
   164	   npm run build
   165	   ```
   166	
   167	2. **Start production server**
   168	   ```bash
   169	   npm run start
   170	   ```
   171	
   172	3. **Deploy**
   173	   
   174	   The easiest way to deploy is using [Vercel](https://vercel.com):
   175	   
   176	   ```bash
   177	   vercel --prod
   178	   ```
   179	   
   180	   Or deploy to your preferred platform. The app is configured for static export or server-side rendering.
   181	
   182	---
   183	
   184	## 🌟 Key Features Implemented
   185	
   186	### ✅ Navigation
   187	- Animated navbar with Framer Motion
   188	- Smooth scroll behavior
   189	- Mobile-responsive hamburger menu
   190	
   191	### ✅ Hero Section
   192	- Dynamic hero component with animations
   193	- Call-to-action buttons
   194	- Responsive layout
   195	
   196	### ✅ Footer
   197	- Copyright information
   198	- Brand name display
   199	- Social links (ready for configuration)
   200	
   201	### ✅ UI Components
   202	- Button variants with CVA
   203	- Card components
   204	- Carousel/slider components
   205	- Icon integration
   206	
   207	---
   208	
   209	## 🔧 Development Guidelines
   210	
   211	### Code Style
   212	- Use TypeScript for type safety
   213	- Follow ESLint configuration
   214	- Use functional components with hooks
   215	- Implement proper error boundaries
   216	
   217	### File Naming
   218	- Use PascalCase for components (e.g., `MyComponent.tsx`)
   219	- Use camelCase for utilities (e.g., `myUtility.ts`)
   220	- Use kebab-case for CSS classes (e.g., `my-class`)
   221	
   222	### Git Workflow
   223	- Create feature branches for new work
   224	- Use descriptive commit messages
   225	- Follow conventional commits (optional but recommended)
   226	
   227	---
   228	
   229	## 📱 Responsive Breakpoints
   230	
   231	The application is fully responsive across all devices:
   232	
   233	- **Mobile**: < 640px
   234	- **Tablet**: 640px - 1024px
   235	- **Desktop**: > 1024px
   236	
   237	---
   238	
   239	## 🤝 Contributing
   240	
   241	Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.
   242	
   243	1. Fork the repository
   244	2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
   245	3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
   246	4. Push to the branch (`git push origin feature/AmazingFeature`)
   247	5. Open a Pull Request
   248	
   249	---
   250	
   251	## 📄 License
   252	
   253	This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
   254	
   255	---
   256	
   257	## 🙏 Acknowledgments
   258	
   259	- Built with [Next.js](https://nextjs.org/) - The React Framework
   260	- Styled with [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
   261	- Animated with [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
   262	- Icons from [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
   263	
   264	---
   265	
   266	## 📞 Contact
   267	
   268	For questions or suggestions, please open an [issue](https://github.com/ozi-Shalom2333/dnk/issues) on GitHub.
   269	
   270	---
   271	
   272	**Happy coding!** 🎉
   273	