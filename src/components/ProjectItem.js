import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <div>
      <h2>{name}</h2>
      <p>{about}</p>
      {technologies.map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
    </div>
    </div>
  );
}

export default ProjectItem;