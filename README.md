# Personal Website

Personal portfolio website of Foka Idriss - a self-taught Python, C++ and frontend developer.

## About

This is my personal portfolio website showcasing:
- **Who I am**: A 22-year-old developer passionate about Python, C++, and frontend development
- **My skills**: JavaScript, C++, Python, Svelte, Node.js
- **My projects**: Displayed via blog cards
- **How to contact me**: Through social links and contact forms

### Tech Stack

- **SvelteKit** - Web framework
- **Tailwind CSS + DaisyUI** - Styling
- **Supabase** - Backend/database
- **ButterCMS** - Blog content management
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5050`

### Build

```bash
# Build for production
npm run build
```

### Preview

```bash
# Preview production build
npm run preview
```

## Project Structure

```
src/
├── lib/
│   ├── components/    # Reusable Svelte components
│   ├── scripts/       # Utility scripts (Supabase, theme, etc.)
│   ├── store/         # Svelte stores
│   └── css/           # CSS files
└── routes/
    ├── index.svelte   # Home page
    └── projects/       # Projects page
```

## License

MIT
