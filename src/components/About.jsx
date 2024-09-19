import React from "react";
import {
  aboutData,
  experienceData,
  educationData,
  skillsData,
  projectsData,
} from "../constants/index";
import poo from "../assets/images/pngwing.com.png";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component

const About = () => {
  return (
    <section className="bg-light-bg dark:bg-gradient-dark text-light-text dark:text-dark-text min-h-screen flex flex-col justify-center items-center p-3 md:p-10">
      {/* About Me Section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          About Me
        </h1>
        <p className="mt-6 text-light-text dark:text-dark-text-secondary">
          {aboutData.summary}
        </p>
      </div>

      {/* Experience Section */}
      <div className="w-full max-w-5xl mx-auto mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Experience</h2>
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="bg-light-card dark:bg-dark-card p-4 sm:p-6 rounded-lg shadow-md mb-4 sm:mb-6"
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

      {/* Education Section */}
      <div className="w-full max-w-5xl mx-auto mb-6 sm:mb-10">
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

      {/* Skills Section */}
      <div className="w-full max-w-5xl mx-auto mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="w-full h-64 sm:h-full sm:w-1/3 mb-6 ">
            <img
              src={poo}
              alt="Skills"
              className=" mx-auto h-full  filter drop-shadow-custom-light dark:drop-shadow-custom-dark transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full sm:w-2/3 flex flex-wrap justify-center gap-6">
            {skillsData.map((skill, index) => {
              const IconComponent = skill.icon; // Dynamic icon rendering
              return (
                <div
                  key={index}
                  className="relative group bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text p-2 sm:p-4 rounded-lg shadow-md"
                >
                  <IconComponent className="text-5xl text-black dark:text-white hover:text-dark-accent dark:hover:text-purple-400 transition duration-300" />
                  <span className="absolute -bottom-2 z-10 left-1/2 transform -translate-x-1/2 translate-y-full mt-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} /> // Use the new ProjectCard component
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
