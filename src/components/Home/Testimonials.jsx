import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import author1 from '../../assets/images/image01.jpg';
import author2 from '../../assets/images/image45.jpg';
import author3 from '../../assets/images/image13.jpg';

const testimonials = [
  {
    image: author1,
    text: "Starting to teach English was a breeze... makes getting started a lot less daunting.",
    author: "Steve, Houston TX"
  },
  {
    image: author2,
    text: "Teaching English has been a solid gig for me... it's been a great side hustle.",
    author: "Jessica, Portland OR"
  },
  {
    image: author3,
    text: "We Teach Remotely has been a lifesaver... steady source of income.",
    author: "David, Lima Peru"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const visibleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2;

  useEffect(() => {
    const handleResize = () => {
      setIndex((prev) => (prev % testimonials.length));
    };
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getVisibleTestimonials = () => {
    return [...Array(visibleCount)].map((_, i) => {
      return testimonials[(index + i) % testimonials.length];
    });
  };

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-800 text-center">
      <h2 className="text-5xl text-center font-bold text-black dark:text-white mb-12">Testimonials</h2>

      <div className="max-w-[800px] mx-auto overflow-hidden relative">
        <div className="flex transition-transform duration-700 ease-in-out py-4"
             style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full md:w-1/2 px-3"
            >
              <div className="flex gap-2 items-center bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 md:p-6 h-full">
                {/* Profile Image */}
                <div className="w-2/6 flex-shrink-0 pr-4">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-full aspect-square rounded-full object-cover shadow-md"
                  />
                </div>

                {/* Text Content */}
                <div className="w-4/6 text-left">
                  <p className="text-[#18ece4] mb-2">
                    <FaQuoteLeft className="inline mr-2" />
                    <span className="text-black dark:text-white font-light">{t.text}</span>
                    <FaQuoteRight className="inline ml-2" />
                  </p>
                  <p className="text-black dark:text-white font-bold mt-2">{t.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
