# V. Suresh Kumar - CAD Designer Portfolio

This is a premium, production-ready personal portfolio website for V. Suresh Kumar, built with React, TypeScript, Vite, Tailwind CSS, GSAP, and Framer Motion.

## Features

- **Cinematic Hero**: Pinned scroll experience with 360-degree rotation support (currently using a robust fallback as 3D assets are pending).
- **Smooth Scrolling**: Integrated Lenis for a premium scroll feel.
- **GSAP & Framer Motion**: Restrained, professional animations and scroll-linked interactions.
- **Editorial Layouts**: Clean, architectural typography and generous spacing.
- **Fully Responsive**: Carefully considered layouts for desktop, tablet, and mobile.
- **No Backend**: Frontend-only architecture with a configurable `mailto:` form integration.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Production Build

To create a production-ready build:

```bash
npm run build
```

This will run TypeScript compilation (`tsc`) and generate optimized static files in the `dist` directory using Vite.

### Deployment

This project is configured for seamless deployment on Vercel:
1. Push the code to a GitHub repository.
2. Import the project in Vercel.
3. Vercel will automatically detect Vite and use `npm run build` with the output directory `dist`.

## Customization & Adding Assets

- **Images**: Place actual project images and the male reference portrait in `src/assets/images/`. Update the paths in `src/data/projects.ts` and `src/components/Hero.tsx`.
- **Data**: All professional details, skills, services, and projects are centralized in the `src/data/` folder for easy updating.
- **3D Hero**: If multi-angle rendered frames or a 3D model become available, replace the fallback container in `src/components/Hero.tsx` with a Three.js Canvas or an image sequence renderer hooked to the GSAP ScrollTrigger.
