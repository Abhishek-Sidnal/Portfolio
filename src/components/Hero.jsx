import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dev from "../assets/images/profile_img-isMTF2gD.svg";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Hero = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const iconsRef = useRef(null);
  const summaryRef = useRef(null);

  useEffect(() => {
    // Animate profile image
    gsap.fromTo(
      imgRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
      }
    );

    // Animate title
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    // Animate summary
    gsap.fromTo(
      summaryRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      }
    );

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
    <section
      id="home"
      className="bg-light-bg dark:bg-gradient-dark text-black dark:text-white min-h-screen flex flex-col justify-center items-center p-3 md:p-10"
    >
      {/* Profile Image */}
      <div
        ref={imgRef}
        className="rounded-full h-64 w-64 drop-shadow-2xl overflow-hidden relative mb-8"
      >
        <img
          src={dev}
          alt="developer"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Hero Title and Subheading */}
      <div className="sm:text-center">
        {/* Gradient Text for the Hero Title */}
        <h1
          ref={titleRef}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold"
        >
          Abhishek |
          <span className="block sm:inline whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            {" "}
            MERN-Stack Developer
          </span>
        </h1>

        {/* Subheading Text */}
        <p
          ref={summaryRef}
          className="mt-6 text-lg sm:text-xl text-light-text dark:text-dark-text-secondary max-w-4xl mx-auto"
        >
          I am a MERN Stack Developer from Bangalore, Karnataka, India, with hands-on experience in building responsive and dynamic applications. Skilled in working with modern technologies like React, Node.js, MongoDB, and Express, I am passionate about developing scalable and innovative web solutions.
        </p>
      </div>

      {/* Social Media Icons */}
      <div
        ref={iconsRef}
        className="mt-8 flex gap-6 text-3xl"
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
    </section>
  );
};

export default Hero;
