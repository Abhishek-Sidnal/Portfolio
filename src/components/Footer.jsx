import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 px-6 border-t border-gray-300 flex justify-between items-center flex-col md:flex-row  gap-5 text-center ">
      <div className="text-light-primary dark:text-dark-text flex gap-2">
        <a href="/terms" className="hover:underline">Terms & Conditions</a>
        <span>|</span>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
      </div>

      <div className="flex gap-4 justify-center w-full sm:w-fit">
        <a href="https://github.com/Abhishek-Sidnal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-light-primary dark:text-dark-text w-6 h-6 hover:text-light-accent dark:hover:text-dark-accent" />
        </a>
        <a href="https://twitter.com/AbhishekSidnal" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="text-light-primary dark:text-dark-text w-6 h-6 hover:text-light-accent dark:hover:text-dark-accent" />
        </a>
        <a href="https://instagram.com/AbhishekSidnal" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-light-primary dark:text-dark-text w-6 h-6 hover:text-light-accent dark:hover:text-dark-accent" />
        </a>
        <a href="https://linkedin.com/in/abhishek-sidnal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-light-primary dark:text-dark-text w-6 h-6 hover:text-light-accent dark:hover:text-dark-accent" />
        </a>
      </div>

      <p className="text-light-primary dark:text-dark-text">© 2024 Abhishek Sidnal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
