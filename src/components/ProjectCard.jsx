import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxChars = 100;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const displayDescription =
    isExpanded || project.description.length <= maxChars
      ? project.description
      : `${project.description.slice(0, maxChars)}...`;

  return (
    <div className="bg-light-card dark:bg-dark-card p-4 sm:p-6 rounded-lg shadow-md">
      <img src={project.image} alt={project.title} className="mb-4 rounded-lg" />
      <h3 className="font-bold text-xl mb-2">{project.title}</h3>
      <p className="text-light-text dark:text-dark-text-secondary">
        {displayDescription}
        {project.description.length > maxChars && (
          <span
            className="text-blue-600 dark:text-purple-400 cursor-pointer"
            onClick={handleToggle}
          >
            {isExpanded ? " Read less" : " Read more"}
          </span>
        )}
      </p>
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-purple-400 hover:underline mt-4 block"
      >
        Live link
      </a>
    </div>
  );
};

export default ProjectCard;
