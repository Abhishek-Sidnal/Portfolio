import React, { useRef, useEffect, useContext } from "react";
import { gsap } from "gsap";
import dev2 from "../assets/images/MERN_light.jpg"; // Image for dark mode
import dev from "../assets/images/MERN_Dark.jpg"; // Image for light mode
import { ThemeContext } from "../contexts/ThemeContext"; // Import ThemeContext

const Hero = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const summaryRef = useRef(null);

  const { isDarkMode } = useContext(ThemeContext); // Use ThemeContext to get dark mode

  useEffect(() => {
    // GSAP timeline for smoother animations
    const tl = gsap.timeline();
    tl.fromTo(
      imgRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
    )
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: "power2.out" }
      )
      .fromTo(
        summaryRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: "power2.out" }
      );

    return () => {
      tl.kill(); // Cleanup GSAP animation to avoid memory leaks
    };
  }, []);

  return (
    <section
      id="home"
      className="text-black dark:text-white min-h-screen flex flex-col justify-center items-center p-5 md:p-10"
    >
      {/* Profile Image */}
      <div
        ref={imgRef}
        className="h-72 w-72 drop-shadow-2xl overflow-hidden relative mb-8 c-border"
      >
        <img
          src={isDarkMode ? dev : dev2} // Use image based on isDarkMode
          alt="developer"
          className="w-full object-cover"
        />
      </div>

      {/* Hero Title and Subheading */}
      <div className="sm:text-center">
        <h1
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold"
        >
          Abhishek |{" "}
          <span className="block sm:inline whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            MERN-Stack Developer
          </span>
        </h1>
        <p
          ref={summaryRef}
          className="mt-6 text-lg sm:text-xl text-light-text dark:text-dark-text-secondary max-w-4xl mx-auto"
        >
          I am a MERN Stack Developer from Bangalore, Karnataka, India, with
          hands-on experience in building responsive and dynamic applications.
          Skilled in modern technologies like React, Node.js, MongoDB, and
          Express, I am passionate about developing scalable web solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
