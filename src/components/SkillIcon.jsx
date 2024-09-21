import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SkillIcon = ({ IconComponent, skillName }) => {
  const skillRef = useRef(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            skillRef.current,
            { y: -50, opacity: 0, scale: 0.5 },
            { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "bounce.out" }
          );
        } else {
          gsap.set(skillRef.current, { opacity: 0, y: -50, scale: 0.5 });
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={skillRef}
      className="skill-box relative group bg-light-card dark:bg-gradient-light-icon text-light-text dark:text-dark-text p-2 sm:p-4 rounded-lg shadow-custom-light dark:shadow-custom-dark transition duration-300"
      style={{ zIndex: 1, overflow: "visible" }}
    >
      {/* Icon */}
      <IconComponent className="text-4xl md:text-5xl waving-icon text-black dark:text-white hover:text-dark-accent dark:hover:text-purple-400 transition duration-300" />

      {/* Tooltip (moved upwards) */}
      <span
        className="absolute bottom-full z-50 left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300"
        style={{ zIndex: 100 }}
      >
        {skillName}
      </span>
    </div>
  );
};

export default SkillIcon;
