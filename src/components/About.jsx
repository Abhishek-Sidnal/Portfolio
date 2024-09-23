import React, { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { aboutData } from "../constants/index";
import about from "../assets/images/image-removebg.png";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const About = () => {
  const iconsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, iconsRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    {
      href: "https://github.com/Abhishek-Sidnal",
      icon: <FaGithubSquare />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/abhishek-sidnal/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/apsidnal/",
      icon: <FaInstagramSquare />,
      label: "Instagram",
    },
    {
      href: "https://x.com/apsidnal",
      icon: <FaSquareXTwitter />,
      label: "Twitter",
    },
  ];

  return (
    <section
      id="about"
      className="bg-transparent text-light-text dark:text-dark-text min-h-screen flex flex-col justify-center items-center p-5 md:p-10"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-center text-3xl sm:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          About Me
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-10">
          <div className="w-3/4 sm:w-1/2 ">
            <div className="p-5 w-fit shadow-light-lg dark:shadow-custom-dark rounded-xl">
              <img
                src={about}
                alt="About Me"
                className="w-fit h-60 sm:h-96 rounded-lg mx-auto transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2 sm:ml-10 mt-6 sm:mt-0 text-left">
            <p className="text-lg sm:text-xl leading-relaxed text-light-text dark:text-dark-text-secondary">
              {aboutData.summary}
            </p>
            <div
              ref={iconsRef}
              className="mt-8 flex justify-center gap-8 text-3xl"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-black dark:text-white hover:text-dark-accent dark:hover:text-purple-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About); 
