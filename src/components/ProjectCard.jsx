import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, image, links }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <h3>{title}</h3>
          <div className="project-links">
            {links.length === 1 ? (
              <a
                href={links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
              >
                {links[0].label || "Ver más"}
              </a>
            ) : (
              links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  {link.label}
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 