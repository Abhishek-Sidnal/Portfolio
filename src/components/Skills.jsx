import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { skillsData } from '../constants/index';
import poo from "../assets/images/pngwing.com.png";

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            skillsRef.current.children,
            {
              opacity: 0,
              scale: 0,
              rotation: 0,
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 3,
              stagger: 0.2,
              ease: "elastic.out(1, 0.5)",
            }
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mb-6 sm:mb-10" ref={skillsRef}>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full h-64 sm:h-full sm:w-1/3 mb-6 ">
          <img
            src={poo}
            alt="Skills"
            className="mx-auto h-full filter drop-shadow-custom-light dark:drop-shadow-custom-dark transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full sm:w-2/3 flex flex-wrap justify-center gap-6">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon; // Dynamic icon rendering
            return (
              <div
                key={index}
                className="relative group bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text p-2 sm:p-4 rounded-lg shadow-custom-light dark:shadow-custom-dark transition duration-300"
              >
                <IconComponent className="text-5xl waving-icon text-black dark:text-white hover:text-dark-accent dark:hover:text-purple-400 transition duration-300" />
                <span className="absolute -bottom-2 z-10 left-1/2 transform -translate-x-1/2 translate-y-full mt-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
