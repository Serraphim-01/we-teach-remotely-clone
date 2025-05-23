import React from "react";
import RotatingGlobe from "./RotatingGlobe";

export default function Quote() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-white overflow-hidden shadow-xl">
      {/* Background Illustration */}
      <div className="absolute inset-0 opacity-20 blur-3xl pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Content */}
        <div className="md:flex-1 text-center md:text-left ">
          <h2 className="text-4xl font-bold mb-4 leading-snug">
            Teach English Online & Earn from Anywhere
          </h2>
          <p className="text-lg md:text-xl font-light mb-8">
            Make <strong>$15 - $25 per hour</strong> helping international
            students improve their English skills—all from the comfort of your
            home.
          </p>
          <a
            href="#apply"
            className="inline-block px-8 py-3 bg-white text-cyan-600 dark:text-[#FFB300] font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-[#f0f0f0] dark:hover:bg-[#2d2d2d] hover:scale-105 transition duration-300"
          >
            Apply to Start Tutoring
          </a>
        </div>

        {/* Rotating Globe */}
        <div className="md:flex-1 flex justify-center md:justify-end">
          <RotatingGlobe />
        </div>
      </div>
    </section>
  );
}
