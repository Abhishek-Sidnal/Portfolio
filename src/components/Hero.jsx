import React from "react";
import dev from "../assets/images/profile_img-isMTF2gD.svg";
import { FaGithubSquare, FaInstagramSquare , FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Hero = () => {
  return (
    <section
      id="home"
      className="bg-light-bg dark:bg-gradient-dark text-black dark:text-white min-h-screen flex flex-col justify-center items-center p-3 md:p-10 "
    >
      {/* Profile Image */}

      
      <div className="rounded-full h-64 w-64 drop-shadow-2xl overflow-hidden relative mb-8">
        <img
          src={dev}
          alt="developer"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Hero Title and Subheading */}
      <div className="sm:text-center">
        {/* Gradient Text for the Hero Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold">
          Abhishek |
          <span className="block sm:inline whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            {" "}
            MERN-Stack Developer
          </span>
        </h1>

        {/* Subheading Text */}
        <p className="mt-6 text-lg sm:text-xl text-light-text dark:text-dark-text-secondary max-w-xl mx-auto">
          I'm a MERN Stack Developer with expertise in React, Node.js, MongoDB,
          Express, and much more. As a dynamic and forward-thinking programmer,
          I’m committed to staying up to date with the latest trends and
          technologies in the field.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex gap-6 text-3xl">
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
          <FaInstagramSquare  />
        </a>
        <a
          href="https://x.com/apsidnal"
          className="text-black dark:text-white hover:text-dark-accent dark:hover:text-purple-400 transition-colors duration-300"
          aria-label="Instagram"
          target="_blank"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </section>
  );
};

export default Hero;
