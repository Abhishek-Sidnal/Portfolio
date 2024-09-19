import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaCode, FaTimes } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs"; // Icons for dark/light mode toggle
import { navbarData } from "../constants/index"; // Importing the data from data.js

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const sidebarRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-light-bg via-gray-200 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 shadow-lg">
      <div className="flex justify-between items-center py-4 px-2 sm:px-6">
        {/* Brand / Logo */}
        <a href="/" className="flex items-center text-black dark:text-white">
          <FaCode className="text-3xl text-dark-accent" />
          <span className="ml-3 text-xl font-heading font-semibold">
            {navbarData.brand.name}
          </span>
        </a>

        {/* Desktop Navigation (visible on large screens) */}
        <nav className="hidden md:flex space-x-6">
          {navbarData.links.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="text-lg text-black dark:text-white hover:text-dark-accent transition duration-300"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white text-2xl focus:outline-none"
          >
            {isDarkMode ? (
              <BsSun className="text-yellow-400" />
            ) : (
              <BsMoon className="text-gray-400" />
            )}
          </button>
        </nav>

        {/* Dark Mode Toggle and Mobile Menu */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white text-2xl focus:outline-none"
          >
            {isDarkMode ? (
              <BsSun className="text-yellow-400" />
            ) : (
              <BsMoon className="text-gray-400" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="text-black dark:text-white text-3xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (only visible when menu is open) */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-end bg-black bg-opacity-60 z-50">
          <div
            ref={sidebarRef}
            className="w-64 bg-light-card dark:bg-dark-card p-4 space-y-4 shadow-dark-lg"
          >
            <button
              onClick={toggleMenu}
              className="text-black dark:text-white text-3xl"
            >
              <FaTimes />
            </button>
            <nav className="flex flex-col space-y-4">
              {navbarData.links.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="text-lg text-black dark:text-white hover:text-dark-accent transition duration-300"
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
