# We Teach Remotely - Cloned and Redesigned Homepage

This project is a cloned and redesigned version of the homepage of the website [weteachremotely.com](https://weteachremotely.com). The goal of this project is to replicate the look and feel of the original homepage while improving the design and user experience using modern web technologies.

## Project Overview

- The homepage is built using **React** for the frontend UI.
- Styling is done with **Tailwind CSS**, providing a responsive and modern design.
- The project structure is modular, with components organized under the `src/components/Home` directory.
- Various UI sections such as Hero, About, Testimonials, FAQ, and more are implemented as separate React components for maintainability and reusability.

## Features

- Responsive design optimized for desktop and mobile devices.
- Smooth animations and interactive elements.
- Theme toggle functionality for light and dark modes.
- Clean and modern UI inspired by the original weteachremotely.com homepage.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd we-teach-remotely
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the homepage.

The page will reload automatically if you make edits to the source code.

## Project Structure

```
src/
├── components/
│   └── Home/
│       ├── About.jsx
│       ├── CTA.jsx
│       ├── FAQ.jsx
│       ├── Footer.jsx
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Quote.jsx
│       ├── RevealOnScroll.jsx
│       ├── RotatingGlobe.jsx
│       ├── Testimonials.jsx
│       ├── ThemeToggle.jsx
│       └── WhyUs.jsx
├── hooks/
│   └── useTypingEffect.js
├── App.jsx
├── index.css
└── index.js
```

## Customization

- You can customize the styles by editing the Tailwind CSS configuration in `tailwind.config.js`.
- Images and assets are located in the `src/assets/images` directory.
- Components can be modified or extended to add new features or change the layout.

## Acknowledgements

- This project is inspired by and cloned from [weteachremotely.com](https://weteachremotely.com).
- Built with React and Tailwind CSS.

## License

This project is for educational and demonstration purposes only.
