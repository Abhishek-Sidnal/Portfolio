import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { skillsData } from "../constants/index";
import poo from "../assets/images/pngwing.com.png";
import poo2 from "../assets/images/poo2.png";
import poo3 from "../assets/images/poo3.png"; // Make sure the path is correct

import SkillIcon from "./SkillIcon";

const Skills = () => {
  const skillsRef = useRef(null);
  const imageRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(poo);
  const images = [poo, poo2, poo3]; // Array of images

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillIcons = skillsRef.current.querySelectorAll(".skill-box");
          gsap.fromTo(
            skillIcons,
            { opacity: 0, y: 50, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 1.5, stagger: 0.2, ease: "power3.out" }
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentImage((prev) => {
            const currentIndex = images.indexOf(prev);
            const nextIndex = (currentIndex + 1) % images.length; // Cycle through images
            return images[nextIndex];
          });
          gsap.to(imageRef.current, {
            opacity: 1,
            duration: 0.5,
          });
        },
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mb-6 sm:mb-10" ref={skillsRef}>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="relative w-full h-64 sm:h-full sm:w-1/3 mb-6">
          <img
            ref={imageRef}
            src={currentImage}
            alt="Skills"
            className="mx-auto h-full rounded-lg object-cover filter drop-shadow-custom-light dark:drop-shadow-custom-dark  transition-transform duration-300"
          />
        </div>
        <div className="w-full sm:w-2/3 flex flex-wrap justify-center gap-6">
          {skillsData.map((skill, index) => (
            <SkillIcon
              key={index}
              IconComponent={skill.icon}
              skillName={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
