import React from "react";
import illustration1 from "../../assets/images/gallery01/undraw_certificate_71gt.svg";
import illustration2 from "../../assets/images/gallery01/undraw_time-management_fedt.svg";
import illustration3 from "../../assets/images/gallery01/undraw_connected-world_anke.svg";
import RevealOnScroll from "./RevealOnScroll";

const reasons = [
  {
    image: illustration1,
    alt: "Dedicated Support",
    title: "Dedicated Support",
    caption:
      "We prioritize the success of our tutors. Benefit from our unwavering support system, designed to assist you in achieving your teaching goals and providing the best learning experience for your students.",
  },
  {
    image: illustration2,
    alt: "Flexibility",
    title: "Flexibility",
    caption:
      "Enjoy the freedom to set your own hours. We understand the importance of work-life balance and support your journey as a tutor with flexible scheduling.",
  },
  {
    image: illustration3,
    alt: "Global Impact",
    title: "Global Impact",
    caption:
      "Join a community that transcends borders. Through partnerships with global organizations, our tutors play a crucial role in shaping the future of learners internationally.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-5xl text-black dark:text-white font-semibold text-center mb-16">
        Why <span className="text-[#18ece4]">We Teach Remotely</span>
      </h2>

      <div className="space-y-20 max-w-7xl mx-auto">
        {reasons.map(({ image, alt, title, caption }, index) => {
          const isReversed = index % 2 === 1;
          const direction = isReversed ? 'right' : 'left';

          return (
            <RevealOnScroll
              key={index}
              direction={direction}
              delay={0.2 * index}
            >
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  isReversed ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
              >
                {/* Image */}
                <div
                  className={`flex-1 w-full flex justify-center  ${
                    isReversed ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <img
                    src={image}
                    alt={alt}
                    className="w-auto h-auto max-h-[200px] md:max-h-[350px] object-contain"
                  />
                </div>

                {/* Text Block */}
                <div className="flex-1 w-full flex justify-center">
                  <div className="w-[90%] max-w-lg text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-black dark:text-[#18ece4]">
                      {title}
                    </h3>
                    <p className="text-md md:text-lg font-light text-[#555] dark:text-white leading-relaxed">
                      {caption}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
