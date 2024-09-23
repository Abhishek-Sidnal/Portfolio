import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SkillIcon = ({ IconComponent, skillName, projects = false }) => {
  const skillRef = useRef(null);

  useEffect(() => {
    if (!projects) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            skillRef.current,
            { y: -50, opacity: 0, scale: 0.5 },
            { y: 0, opacity: 1, scale: 1, duration: 1, ease: "bounce.out" }
          );
        } else {
          gsap.set(skillRef.current, { opacity: 0, y: -50, scale: 0.5 });
        }
      });
    }, { threshold: 0.1 });

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [projects]);

  const iconSizeClass = projects ? "text-xs md:text-base" : "text-4xl md:text-5xl waving-icon";
  const textSizeClass = projects ? "text-[10px] sm:text-sm" : "text-sm sm:text-base";
  const boxClass = projects
    ? "w-fit p-1 sm:p-2 flex items-center gap-1 border border-dark-border"
    : "w-28 p-2 sm:p-4 shadow-custom-light dark:shadow-custom-dark";

  return (
    <div
      ref={skillRef}
      className={`skill-box bg-light-card dark:bg-gradient-light-icon text-light-text dark:text-dark-text rounded-lg transition duration-300 text-center ${boxClass}`}
      style={{ zIndex: 1, overflow: "visible" }}
    >
      <IconComponent className={`${iconSizeClass} text-black dark:text-white hover:text-dark-accent dark:hover:text-purple-400 transition duration-300`} />
      <p className={`font-semibold ${textSizeClass}`}>{skillName}</p>
    </div>
  );
};

export default SkillIcon;
