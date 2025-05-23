import React from "react";
import About from "./Home/About";
import CTA from "./Home/CTA";
import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import Quote from "./Home/Quote";
import WhyUs from "./Home/WhyUs";
import Testimonials from "./Home/Testimonials";
import FAQ from "./Home/FAQ";
import RevealOnScroll from "./Home/RevealOnScroll";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
    <RevealOnScroll direction="right">
      <Hero />
    </RevealOnScroll>

    <RevealOnScroll direction="left" delay={0.3}>
      <Quote />
    </RevealOnScroll>

    <RevealOnScroll direction="Left">
      <About />
    </RevealOnScroll>

    <RevealOnScroll direction="right">
      <WhyUs />
    </RevealOnScroll>

    <RevealOnScroll direction="left" >
      <Testimonials />
    </RevealOnScroll>

    <RevealOnScroll direction="top" delay={0.8}>
      <CTA />
    </RevealOnScroll>

    <RevealOnScroll direction="left" delay={0.3}>
      <FAQ />
    </RevealOnScroll>

    <RevealOnScroll direction="bottom" delay={0.8} >
      <Footer />
    </RevealOnScroll>
    </div>
  );
}

