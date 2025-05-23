import React, { useState } from "react";
import Header from "./Header";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaArrowRight, FaExclamation } from "react-icons/fa";
import bgImage from "../../assets/images/container02.jpg";

export default function Hero() {
  const [showTyping, setShowTyping] = useState(false);

  return (
    <>
      <Header />
      <section className="relative h-[80vh] sm:h-[100vh] text-white dark:text-gray-100 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a5451]/70 to-transparent dark:from-[#202124]/80 pointer-events-none z-0" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-24">
          <motion.div
            className="lg:max-w-5xl"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => setShowTyping(true)}
          >
            <p className="max-w-[250px] md:max-w-xl lg:max-w-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-snug mb-4">
              Become a{" "}
              <strong className="font-bold text-white dark:text-gray-200">
                fully remote
              </strong>{" "}
              English tutor. Your journey begins here with
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#18ece4] dark:text-cyan-400 mb-6 min-h-[3rem]">
              {showTyping && (
                <Typewriter
                  options={{
                    strings: ["We Teach Remotely"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    cursor: "|",
                  }}
                />
              )}
            </h1>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              {/* Start Tutoring Button */}
              <a
                href="#tutor-english-online"
                className="group inline-flex w-[max-content] items-center justify-between gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#18ece4] to-blue-800 dark:from-[#202124] dark:to-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:pl-8 hover:pr-4"
              >
                Start Tutoring
                <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              {/* About Us Button */}
              <a
                href="#about-us"
                className="group inline-flex w-[max-content] items-center justify-between gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#18ece4] to-blue-800 dark:from-[#202124] dark:to-gray-700  text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:pl-8 hover:pr-4"
              >
                About Us
                <FaExclamation className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
