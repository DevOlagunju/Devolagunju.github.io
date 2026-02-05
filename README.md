# Wasiu Ibrahim - Portfolio (React)

A modern, JavaScript-heavy portfolio built with React, featuring smooth animations, interactive components, and responsive design.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Icon library
- **CSS3** - Custom styling with CSS variables

## 🎨 Features

- ⚛️ **Component-Based Architecture** - Modular, reusable React components
- 🎭 **Smooth Animations** - Framer Motion for fluid transitions
- 🌓 **Dark/Light Theme** - Toggle with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Fast Performance** - Optimized with Vite
- 🎯 **Interactive** - Scroll animations, hover effects, counters
- 🔄 **State Management** - React hooks (useState, useEffect, custom hooks)
- 👀 **Intersection Observer** - Lazy loading animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
portfolio/
├── public/
│   ├── profile.png
│   ├── favicon.svg
│   └── WASIU_IBRAHIM.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BackToTop.jsx
│   │   ├── CallToAction.jsx
│   │   ├── Contact.jsx
│   │   ├── Counter.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Preloader.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   └── ThemeToggle.jsx
│   ├── hooks/
│   │   └── useInView.js
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Components Overview

### Core Components
- **App.jsx** - Main application component with state management
- **Preloader.jsx** - Animated loading screen
- **ThemeToggle.jsx** - Dark/light mode switcher

### Section Components
- **Hero.jsx** - Landing section with floating badges
- **About.jsx** - Introduction with animated counters
- **Services.jsx** - Service offerings grid
- **Experience.jsx** - Timeline of work history
- **Projects.jsx** - Portfolio showcase
- **Testimonials.jsx** - Client reviews
- **Contact.jsx** - Contact form and information
- **CallToAction.jsx** - CTA section
- **Footer.jsx** - Footer with links

### Utility Components
- **Counter.jsx** - Animated number counter
- **BackToTop.jsx** - Scroll to top button

### Custom Hooks
- **useInView.js** - Intersection Observer hook for scroll animations

## 🎨 Customization

### Update Personal Information
Edit the respective component files:
- Personal details: `Hero.jsx`, `About.jsx`
- Social links: `Hero.jsx`, `Footer.jsx`
- Experience: `Experience.jsx`
- Projects: `Projects.jsx`
- Services: `Services.jsx`

### Modify Theme Colors
Edit CSS variables in `src/styles/App.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
}
```

### Add New Components
1. Create component in `src/components/`
2. Import in `App.jsx`
3. Add to component tree

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

### Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
```bash
vercel deploy
```

## 📧 Contact

- **Email**: wasiu-ibrahim@outlook.com
- **LinkedIn**: [Wasiu Ibrahim](https://www.linkedin.com/in/wasiu-ibrahim-28497a137/)
- **GitHub**: [DevOlagunju](https://github.com/DevOlagunju)

---

**Built with React** ⚛️ | **Powered by Vite** ⚡ | **Last Updated**: February 2026
