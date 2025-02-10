import React from "react";
import "./styling/ProjectCard.css";

interface ProjectCardProps {
  projectcard_id: number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  layout: boolean;
  onDelete?: (id: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectcard_id,
  title,
  description,
  imageUrl,
  techStack,
  layout,
  onDelete,
}) => {
  const handleDelete = () => {
    fetch(`http://localhost:8080/projectcard/${projectcard_id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Project card deleted successfully.");
          // Call the callback if provided.
          if (onDelete) {
            onDelete(projectcard_id);
          }
        } else {
          console.error("Failed to delete project card.");
        }
      })
      .catch((error) => {
        console.error("Error deleting project card:", error);
      });
  };

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
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ProjectCard;