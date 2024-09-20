import React from "react";
import {
  aboutData,
  experienceData,
  educationData,
  skillsData,
  projectsData,
} from "../constants/index";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";



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
     <Experience/>

      {/* Education Section */}
     <Education/>

      {/* Skills Section */}
      <Skills/>


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
