import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => localStorage.theme === 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-2xl p-2 rounded-full transition-all duration-300 hover:bg-[#e6f7f8] dark:hover:bg-[#2a2a2a]"
      aria-label="Toggle dark mode"
    >
      <AnimatePresence mode="wait" initial={false}>
        {darkMode ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaMoon className="text-amber-400" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaSun className="text-amber-400" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
