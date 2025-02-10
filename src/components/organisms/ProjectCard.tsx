// ProjectCard.tsx
import React from "react";
import styles from "./styling/ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  layout: "left" | "right";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  techStack,
  layout,
}) => {
  return (
    <div className={`${styles.cardContainer} ${styles[layout]}`}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.projectImage} />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.techStack}>
          {techStack.map((tech, index) => (
            <span key={index} className={styles.techItem}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;