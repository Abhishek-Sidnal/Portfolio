// data.js
import project1 from '../assets/textures/project5.mp4'
import project2 from '../assets/textures/project4.mp4'
import blog from '../assets/blog-solid.svg'
import weather from '../assets/cloud-sun-rain-solid.svg'




export const navbarData = {
    brand: {
        name: "Abhishek",
        icon: "FaCode",
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
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Java", icon: FaJava },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: FaGithub },
];


export const projectsData = [
    {
        image: blog,

        title: "My Blog’s",
        description: "This full-stack blog application features user authentication, post creation, and editing capabilities. Developed using React JS, Tailwind CSS, Node.js, Express, and MongoDB, the app allows users to manage dynamic content effortlessly. Integrated with Cloudinary for image uploads and JWT-based authentication, the app ensures secure user sessions. The project focuses on providing a smooth user experience across devices, emphasizing responsive design and secure data handling in both front-end and back-end implementations."
        , liveLink: "https://frontend-75cg.onrender.com/",
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
        video: project1
    },
    {
        image: weather,
        title: "Weather App",
        description: "This responsive weather application was developed using React, Material-UI (MUI), and the react-hot-toast library. It allows users to retrieve real-time weather information based on location, featuring a sleek UI and error handling for seamless user experience. The app integrates the OpenWeatherMap API to fetch current weather data and provides notifications for any potential issues. The focus was on creating a user-friendly interface and reliable real-time data retrieval, ensuring a dynamic and responsive design across devices"
        ,
        liveLink: "https://weatherbyaps.netlify.app/",
        skills: ['HTML', 'CSS', 'JavaScript'],
        video: project2

    },

];

// : React JS, Tailwind CSS, Node.js, Express, MongoDB, Cloudinary, JWT
