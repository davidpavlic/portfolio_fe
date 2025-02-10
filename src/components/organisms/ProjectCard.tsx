import React from "react";
import "./styling/ProjectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  layout: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  techStack,
  layout,
}) => {
  return (
<div className={"cardContainer " + (layout ? "right" : "")}>
<div className="imageContainer">
        <img src={imageUrl} alt={title} className="projectImage" />
      </div>
      <div className="contentContainer">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <div className="techStack">
          {techStack.map((tech, index) => (
            <span key={index} className="techItem">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;