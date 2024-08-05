import React from "react";

function ProjectItem({ name, description, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
