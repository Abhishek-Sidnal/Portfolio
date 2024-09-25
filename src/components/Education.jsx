import React, { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { educationData } from "../constants/index";

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const animateEducation = () => {
      gsap.fromTo(
        educationRef.current.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          stagger: 0.2,
          ease: "elastic.out(1, 0.75)",
        }
      );
    };

    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateEducation();
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.2 });

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
    <div
      id="education"
      className="w-full mx-auto mb-6 sm:mb-10 p-5 md:p-10"
      ref={educationRef}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Education</h2>
      {educationData.map((edu, index) => (
        <div
          key={index}
          className="bg-light-card dark:bg-dark-card p-4 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-6"
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

export default memo(Education);
