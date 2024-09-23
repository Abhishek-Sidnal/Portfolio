import React, { useState, useEffect, useRef, Suspense } from "react";
import { FaArrowRight, FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { projectsData, skillsData } from "../constants/index";
import SkillIcon from "./SkillIcon";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import Laptop from "./Laptop";
import { useMediaQuery } from 'react-responsive';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const skillsRef = useRef(null);
  const isTablet = useMediaQuery ({ minWidth: 768, maxWidth: 1024 });


  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === "previous"
        ? prevIndex === 0
          ? projectsData.length - 1
          : prevIndex - 1
        : prevIndex === projectsData.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handleReadMoreToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const currentProject = projectsData[currentIndex];
  const isLongDescription = currentProject.description.length > 150;

  const displayedDescription = isExpanded
    ? currentProject.description
    : `${currentProject.description.substring(0, 150)}...`;

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillIcons = skillsRef.current.querySelectorAll(".skill-box");
          gsap.fromTo(
            skillIcons,
            { opacity: 0, y: 50, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.5,
              stagger: 0.2,
              ease: "power3.out",
            }
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const getSkillIconComponent = (skillName) => {
    const skill = skillsData.find(
      (s) => s.name.toLowerCase() === skillName.toLowerCase()
    );
    return skill ? skill.icon : null;
  };

  return (
    <div
      id="projects"
      className="w-full mx-auto mt-16 p-5 md:p-10 shadow-light-lg dark:shadow-dark-lg"
    >
      <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-12 text-center text-dark-primary dark:text-dark-text">
        My Projects
      </h2>

      <div className="flex flex-col md:flex-row items-center">
        {/* Project details */}
        <div className="flex-1 flex flex-col gap-3 lg:gap-3 w-full md:w-1/2 p-3 lg:p-6 text-light-primary dark:text-dark-text">
          <div className="flex items-center gap-4">
            <div className="p-2 backdrop-blur-md w-fit rounded-lg bg-gradient-dark-accent dark:bg-gradient-light-accent shadow-custom-light dark:shadow-custom-dark">
              <img
                className="w-8 h-8 shadow-md rounded-full"
                src={currentProject.image}
                alt="logo"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              {currentProject.title}
            </h3>
          </div>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            {displayedDescription}
            {isLongDescription && (
              <button
                onClick={handleReadMoreToggle}
                className="text-light-accent dark:text-dark-accent ml-2 hover:underline focus:outline-none"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </p>

          <div ref={skillsRef} className="flex flex-wrap  gap-2">
            {currentProject.skills.map((skill, index) => {
              const IconComponent = getSkillIconComponent(skill);
              return (
                <SkillIcon
                  key={index}
                  IconComponent={IconComponent}
                  skillName={skill}
                  projects={true}
                />
              );
            })}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <a
              className="flex items-center gap-2 cursor-pointer text-light-accent dark:text-dark-accent hover:underline"
              href={currentProject.liveLink}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-sm sm:text-base">Check Live Site</p>
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-5 sm:mt-10">
            <button
              className="arrow-btn p-3 rounded-full bg-light-accent dark:bg-dark-accent text-white hover:bg-light-primary dark:hover:bg-dark-primary transition-all"
              onClick={() => handleNavigation("previous")}
            >
              <FaArrowLeft className="w-5 h-5" />
            </button>

            <button
              className="arrow-btn p-3 rounded-full bg-light-accent dark:bg-dark-accent text-white hover:bg-light-primary dark:hover:bg-dark-primary transition-all"
              onClick={() => handleNavigation("next")}
            >
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D Model */}
        <div className="w-full md:h-128 h-64  p-5 md:w-1/2 flex items-center justify-center lg:justify-end">
          <Canvas shadows camera={{ position: [0, 1.5, 2.5], fov: 50 }}>
            <ambientLight intensity={0} />
            <directionalLight
              position={[10, 10, 10]}
              castShadow
              intensity={-6}
            />
            <pointLight position={[10, 20, 0]} intensity={-10} />
            <spotLight
              position={[0, 5, 0]}
              angle={0.3}
              penumbra={1}
              intensity={0.6}
              castShadow
            />

            <Suspense fallback={<CanvasLoader />}>
              <Laptop
                // scale={12}
                scale={isTablet? 18:12}
                screenImage={currentProject.image}
                // position={[0, -1.0, -0.3]}
                position={ [0, -1.8, -0.8]}

                // position={ [0, -1.8, -0.8]}


                // rotation={[-0.63, 0.0, 0]}
                rotation={[-0.72, 0.0, 0]}
                texture={currentProject.video}
              />
            </Suspense>

            <Environment preset="studio" />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Projects;
