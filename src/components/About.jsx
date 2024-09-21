import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { aboutData, projectsData } from "../constants/index";
import ProjectCard from "./ProjectCard";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import about from "../assets/images/image.png";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const About = () => {
  const iconsRef = useRef(null);

  useEffect(() => {
    // Animate social media icons with bouncing effect
    const icons = iconsRef.current.children;
    gsap.fromTo(
      icons,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "bounce.out",
        delay: 0.6,
      }
    );
  }, []);

  return (
    <section className="bg-light-bg dark:bg-gradient-dark text-light-text dark:text-dark-text min-h-screen flex flex-col justify-center items-center p-3 md:p-10">
      {/* About Me Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-center text-3xl sm:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          About Me
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-10">
          {/* About Image */}
          <div className="w-3/4 sm:w-1/2">
            <img
              src={about}
              alt="About Me"
              className="w-fit h-96 rounded-lg mx-auto filter drop-shadow-custom-light dark:drop-shadow-custom-dark transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* About Text and Social Icons */}
          <div className="w-full sm:w-1/2 sm:ml-10 mt-6 sm:mt-0 text-left">
            <p className="text-lg sm:text-xl leading-relaxed text-light-text dark:text-dark-text-secondary">
              {aboutData.summary}
            </p>
            {/* Social Media Icons */}
            <div
              ref={iconsRef}
              className="mt-8  flex justify-center gap-8 text-3xl "
            >
              <a
                href="https://github.com/Abhishek-Sidnal"
                className="text-black dark:text-white hover:text-dark-accent dark:hover:text-purple-400 transition-colors duration-300"
                aria-label="GitHub"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-sidnal/"
                className="text-black dark:text-white hover:text-dark-accent dark:hover:text-purple-400 transition-colors duration-300"
                aria-label="LinkedIn"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/apsidnal/"
                className="text-black dark:text-white hover:text-dark-accent dark:hover:text-purple-400 transition-colors duration-300"
                aria-label="Instagram"
                target="_blank"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://x.com/apsidnal"
                className="text-black dark:text-white hover:text-dark-accent dark:hover:text-purple-400 transition-colors duration-300"
                aria-label="Twitter"
                target="_blank"
              >
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Education />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <div className="w-full max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
