// data.js
import weather from '../assets/images/blog.png'
import weather2 from '../assets/images/blog2.png'
import project1 from '../assets/textures/project5.mp4'
import project2 from '../assets/textures/project4.mp4'



export const navbarData = {
    brand: {
        name: "Abhishek",
        icon: "FaCode", // Using icon name here for flexibility
    },
    links: [
        { name: "Home", path: "#home" },
        { name: "About", path: "#about" },
        { name: "Skills", path: "#skills" },
        { name: "Projects", path: "#projects" },
        { name: "Experience", path: "#experience" },
        { name: "Contact", path: "#contact" },
    ],
};




export const aboutData = {
    name: "Abhishek Sidnal",
    title: "MERN-Stack Developer",
    summary:
        "I am Abhishek Sidnal, a motivated and skilled MERN Stack Developer with experience in creating dynamic and responsive web applications. With proficiency in React, Node.js, MongoDB, Express, and modern front-end technologies like HTML, CSS, Bootstrap, and Tailwind, I am passionate about building efficient, scalable, and user-centric solutions. I enjoy collaborating with teams to develop innovative applications and am always eager to contribute to impactful projects.",
};

export const experienceData = [
    {
        company: "PureCode AI R&D India Pvt Ltd (Internship)",
        duration: "Dec 2023 - Jun 2024",
        responsibilities: [
            "Assisted in the development of web applications by writing clean, efficient code, contributing to a 15% increase in overall application performance.",
            "Participated in code reviews and team meetings to improve coding standards and practices, leading to a 20% reduction in code-related issues.",
            "Worked on bug fixes and enhancements for existing projects.",
            "Gained hands-on experience with frontend development tools and frameworks.",
        ],
    },
];

export const educationData = [
    {
        degree: "Master of Computer Applications",
        institution: "Jain University, Bangalore",
        duration: "2023 - Present",
        description:
            "Pursuing a specialization in Full Stack Development, focusing on building scalable web applications using modern technologies like React, Node.js, and databases.",
    },
    {
        degree: "Bachelor of Computer Applications",
        institution: "KLE College, Belagavi",
        duration: "2019 - 2023",
        description:
            "Graduated with a strong foundation in web development, focusing on front-end technologies like HTML, CSS, JavaScript, and backend development using Node.js and SQL databases.",
    },
];


// data.js

import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaJava, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiGit, SiExpress } from "react-icons/si";

// Updated with Express
export const skillsData = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },  // Added Express with FaNodeJs as its icon
    { name: "MongoDB", icon: SiMongodb },
    { name: "Java", icon: FaJava },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: FaGithub },
];


export const projectsData = [
    {
        image: weather,
        title: "Weather App",
        description:
            "Developed a responsive weather application using React, MUI (Material-UI), and react-hot-toast, featuring real-time weather information retrieval.",
        liveLink: "https://weatherbyaps.netlify.app/",
        skills: ['HTML', 'CSS', 'JavaScript'],
        video: project2

    },
    {
        image: weather2,

        title: "My Blog’s",
        description:
            "Developed a responsive blog application with features such as user authentication, post creation, and dynamic content rendering using React JS and Tailwind CSS.",
        liveLink: "https://frontend-75cg.onrender.com/",
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        video: project1
    },
];


