import React, { useRef, useContext, useEffect, useState, useMemo } from "react";
import { FaBars, FaCode, FaTimes } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { navbarData } from "../constants/index";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const sidebarRef = useRef();

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

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

  const navbarLinks = useMemo(() => navbarData.links, []);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-light-bg via-gray-200 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 shadow-lg">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 relative">
        <a href="/" className="flex items-center text-black dark:text-white">
          <FaCode
            className="text-3xl text-light-accent dark:text-dark-accent"
            aria-label="Code Logo"
          />
          <span className="ml-3 text-xl font-heading font-semibold">
            {navbarData.brand.name}
          </span>
        </a>

        <nav className="hidden md:flex space-x-6 relative">
          {navbarLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className={`relative text-lg transition-all duration-700 ease-in-out ${
                activeLink === index
                  ? "font-bold text-light-accent dark:text-dark-accent"
                  : "text-black dark:text-white hover:text-light-accent dark:hover:text-dark-accent"
              }`}
              onClick={(e) => {
                handleLinkClick(index);
              }}
            >
              {link.name}

              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-light-accent dark:bg-dark-accent transition-all duration-700 ease-in-out ${
                  activeLink === index ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}

          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white text-2xl focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <BsSun className="text-yellow-400" />
            ) : (
              <BsMoon className="text-gray-400" />
            )}
          </button>
        </nav>

        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white text-2xl focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <BsSun className="text-yellow-400" />
            ) : (
              <BsMoon className="text-gray-400" />
            )}
          </button>

          <button
            onClick={toggleMenu}
            className="text-black dark:text-white text-3xl"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex justify-end bg-black bg-opacity-60 z-50">
          <div
            ref={sidebarRef}
            className="w-64 bg-light-card dark:bg-dark-card p-4 space-y-4 shadow-dark-lg"
          >
            <button
              onClick={toggleMenu}
              className="text-black dark:text-white text-3xl"
              aria-label="Close Menu"
            >
              <FaTimes />
            </button>
            <nav className="flex flex-col space-y-4">
              {navbarLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className={`text-lg transition-all duration-300 ease-in-out ${
                    activeLink === index
                      ? "font-bold text-light-accent dark:text-dark-accent underline"
                      : "text-black dark:text-white hover:text-light-accent dark:hover:text-dark-accent"
                  }`}
                  onClick={() => handleLinkClick(index)}
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
