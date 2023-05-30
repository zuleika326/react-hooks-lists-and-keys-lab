import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <div>
        <h2>{name}</h2>
        <p>{about}</p>
        <button>
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}</button>
      </div>
    </div>
  );
}

export default ProjectItem;