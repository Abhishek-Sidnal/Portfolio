import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dev from "../assets/images/profile1.jpg";

const Hero = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
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
  }, []);

  return (
    <section
      id="home"
      className="bg-light-bg dark:bg-gradient-dark text-black dark:text-white min-h-screen flex flex-col justify-center items-center p-3 md:p-10"
    >
      {/* Profile Image */}
      <div ref={imgRef} className="h-72 w-72 drop-shadow-2xl overflow-hidden relative mb-8 c-path">
        <img src={dev} alt="developer" className="w-full object-cover" />
      </div>

      {/* Hero Title and Subheading */}
      <div className="sm:text-center">
        <h1 ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold">
          Abhishek |{" "}
          <span className="block sm:inline whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            MERN-Stack Developer
          </span>
        </h1>
        <p ref={summaryRef} className="mt-6 text-lg sm:text-xl text-light-text dark:text-dark-text-secondary max-w-4xl mx-auto">
          I am a MERN Stack Developer from Bangalore, Karnataka, India, with hands-on experience in building responsive and dynamic applications. Skilled in modern technologies like React, Node.js, MongoDB, and Express, I am passionate about developing scalable web solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
