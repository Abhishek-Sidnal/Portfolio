import React from "react";
import {
  aboutData,
  experienceData,
  educationData,
  skillsData,
  projectsData,
} from "../constants/index";
import poo from "../assets/images/pngwing.com.png";

const About = () => {
  return (
    <section className="bg-light-bg dark:bg-gradient-hero text-black dark:text-white min-h-screen flex flex-col justify-center items-center p-6 md:p-10">
      {/* About Me Section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          About Me
        </h1>
        <p className="mt-6 text-lg text-light-text dark:text-dark-text-secondary">
          {aboutData.summary}
        </p>
      </div>

      {/* Experience Section */}
      <div className="w-full max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Experience</h2>
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md mb-6"
          >
            <h3 className="font-bold text-xl">{exp.company}</h3>
            <p className="text-gray-600 dark:text-gray-400">{exp.duration}</p>
            <ul className="list-disc mt-4 ml-6 text-light-text dark:text-dark-text-secondary">
              {exp.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="w-full max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Education</h2>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md mb-6"
          >
            <h3 className="font-bold text-xl">{edu.degree}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {edu.institution} | {edu.duration}
            </p>
            <p className="mt-2 text-light-text dark:text-dark-text-secondary">
              {edu.description}
            </p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="w-full sm:w-1/3 mb-6">
            {/* Skill Image */}
            <img
              src={poo}
              alt="Skills"
              className=" m-auto ml-4  filter drop-shadow-custom-dark transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full sm:w-2/3 flex flex-wrap justify-center gap-6">
            {skillsData.map((skill, index) => {
              const IconComponent = skill.icon; // Dynamic icon rendering
              return (
                <div
                  key={index}
                  className="relative group bg-light-card dark:bg-dark-card text-black dark:text-white p-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center"
                >
                  {/* Skill Icon */}
                  <IconComponent className="text-5xl text-dark-accent dark:text-white transition-colors duration-300" />
                  {/* Tooltip */}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 mt-2 transition-opacity duration-300 z-10">
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
            <div
              key={index}
              className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md"
            >
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-light-text dark:text-dark-text-secondary">
                {project.description}
              </p>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-purple-400 hover:underline mt-4 block"
              >
                Live link
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

// hello
