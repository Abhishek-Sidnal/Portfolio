import React, { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { experienceData } from "../constants/index";

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const animateExperience = () => {
      gsap.fromTo(
        experienceRef.current.children,
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
          animateExperience();
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.2 });

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div
      id="experience"
      className="w-full mx-auto mb-6 sm:mb-10 p-5 md:p-10"
      ref={experienceRef}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Experience</h2>
      {experienceData.map((exp, index) => (
        <div
          key={index}
          className="bg-light-card  dark:bg-dark-card p-4 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-6  "
        >
          <h3 className="font-bold text-xl">{exp.company}</h3>
          <p className="text-light-text dark:text-dark-text-secondary">
            {exp.duration}
          </p>
          <ul className="list-disc mt-4 ml-4 sm:ml-6 text-light-text dark:text-dark-text-secondary">
            {exp.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default memo(Experience);
