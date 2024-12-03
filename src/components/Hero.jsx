import React, { useRef, useEffect, useContext } from "react";
import { gsap } from "gsap";
import dev2 from "../assets/images/MERN_light.jpg";
import dev from "../assets/images/MERN_Dark.jpg";
import { ThemeContext } from "../contexts/ThemeContext";
import { MdWavingHand } from "react-icons/md";

const Hero = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const summaryRef = useRef(null);

  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
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
      tl.kill(); 
    };
  }, []);

  return (
    <section
      id="home"
      className="text-black dark:text-white lg:min-h-screen flex flex-col justify-center items-center p-5 md:p-10"
    >
      <div
        ref={imgRef}
        className="sm:h-72 h-64 sm:w-72 w-64   drop-shadow-2xl overflow-hidden relative mb-8 c-border"
      >
        <img
          src={isDarkMode ? dev : dev2}
          alt="developer"
          className="w-full object-cover"
        />
      </div>

      <div className="sm:text-center">
        <h1
          ref={titleRef}
          className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-heading font-extrabold text-dark-primary dark:text-light-border"
        >
          Hi, I'm Abhishek P S <MdWavingHand className="inline waving-hand " />
          <span className="block  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
            MERN-Stack Developer
          </span>
        </h1>
        <p
          ref={summaryRef}
          className="mt-2 sm:mt-6 text-base sm:text-lg md:text-xl text-light-text dark:text-dark-text-secondary max-w-4xl mx-auto"
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
