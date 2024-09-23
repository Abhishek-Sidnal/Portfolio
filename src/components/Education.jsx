import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { educationData } from "../constants/index";

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            educationRef.current.children,
            { opacity: 0, scale: 0.8, rotation: 0 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8, // Reduced duration for better responsiveness
              stagger: 0.2,
              ease: "power1.out", // Changed to a smoother ease
            }
          );
          observer.unobserve(entry.target); // Unobserve after animation
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mb-6 sm:mb-10 p-5 md:p-10" ref={educationRef}>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Education</h2>
      {educationData.map((edu, index) => (
        <div
          key={index}
          className="bg-light-card dark:bg-dark-card p-4 sm:p-6 rounded-lg shadow-md mb-6"
        >
          <h3 className="font-bold text-xl">{edu.degree}</h3>
          <p className="text-light-text dark:text-dark-text-secondary">
            {edu.institution} | {edu.duration}
          </p>
          <p className="mt-2 text-light-text dark:text-dark-text-secondary">
            {edu.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;
