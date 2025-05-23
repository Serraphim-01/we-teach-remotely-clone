import React from 'react';
import ThemeToggle from './ThemeToggle';
import logo from '../../assets/images/image05.png';

export default function Header() {
  return (
   <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md backdrop-saturate-150 bg-transparent text-cyan-900 dark:text-white shadow-lg transition-all duration-300">
  <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
    <a href="#home" className="flex items-center hover:opacity-80 transition-opacity duration-200">
      <img src={logo} alt="We Teach Remotely Logo" className="h-10 w-auto mr-3" />
      <span className="text-xl font-semibold tracking-tight hidden sm:inline">We Teach Remotely</span>
    </a>
    <ThemeToggle />
  </div>
</header>

  );
}
