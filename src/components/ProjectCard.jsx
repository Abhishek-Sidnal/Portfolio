import React from 'react';
import { skillsData } from '../constants/index'; // Import skills data for icons
import { FaArrowRight, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

// Helper function to get the icon for each skill
const getSkillIcon = (skillName) => {
  const skill = skillsData.find((s) => s.name.toLowerCase() === skillName.toLowerCase());
  return skill ? React.createElement(skill.icon, { className: 'w-5 h-5' }) : null;
};

const ProjectCard = ({ project, handleNavigation }) => {
  return (
    <div className="flex flex-col gap-5  sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 dark:bg-dark-card bg-light-card rounded-4xl">
      {/* Spotlight image */}
      <div className=" top-0 right-0 w-full h-96">
        <img
          src={project.image} // Using the image from the data.js
          alt={project.title}
          className="w-full h-full object-cover rounded-4xl"
        />
      </div>

      {/* Logo image */}
      <div className="p-3 backdrop-blur-3xl w-fit rounded-lg bg-gradient-dark-accent dark:bg-gradient-dark-accent">
        <img className="w-10 h-10 shadow-sm" src={project.image} alt="logo" />
      </div>

      {/* Project details */}
      <div className="flex flex-col gap-5 my-5 dark:text-dark-text text-light-text">
        <p className="text-2xl font-semibold font-heading">{project.title}</p>
        <p className="animatedText">{project.description}</p>
      </div>

      {/* Skills Icons */}
     

      {/* Live link */}
      <div className="flex items-center justify-between flex-wrap gap-5 mt-5">
        <a
          className="flex items-center gap-2 cursor-pointer dark:text-dark-text text-light-text"
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
        >
          <p >Check Live Site</p>
          <FaExternalLinkAlt className="w-3 h-3" />
        </a>
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-between items-center mt-7">
        <button className="arrow-btn p-2 rounded-full dark:bg-dark-border bg-light-border">
          <FaArrowLeft className="w-4 h-4" onClick={() => handleNavigation('previous')} />
        </button>

        <button className="arrow-btn p-2 rounded-full dark:bg-dark-border bg-light-border">
          <FaArrowRight className="w-4 h-4" onClick={() => handleNavigation('next')} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
