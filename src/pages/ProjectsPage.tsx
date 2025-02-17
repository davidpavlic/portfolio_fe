import './styling/ProjectsPage.css';
import { useState, useEffect } from "react";
import ProjectCard from "../components/organisms/MyProjectCard";
import AddProjectCardForm from '../components/organisms/MyAddProjectCardForm';
import { fetchProjectCards } from '../services/ProjectCardService';


///* TODOS *///
//Refactor
//Solve ProjectCard TODO
//Refactor all css namings, to be unique for each component
//Git branching
//Password secured CRUD operations

//Find a way to add multiple languages on creation
//Search Field for techstack
//Update Cards


///* TYPE DEFINITION *///
// Defines the expected properties for the fetch of ProjectCard elements from the backend.
// - projectcard_id: references the projectcard for the deletion in the backend.
// - title, description, base64Image represent the data shown in the projectcard.
type ProjectCardData = {
  projectcard_id: number;
  title: string;
  description: string;
  base64Image?: string;
  techStacks: [];
}


///* FUNCTIONAL COMPONENT *///
export const ProjectsPage = () => {

  const [projectscards, setProjectcards] = useState<ProjectCardData[]>([]);

  useEffect(() => {
    loadProjectCards();
  }, []);

  const loadProjectCards = async () => {
    const data = await fetchProjectCards();
    setProjectcards(data);
  };

  const handleDelete = (id: number) => {
    setProjectcards(prev => prev.filter(card => card.projectcard_id !== id));
  };

  return (
    <div>
      <AddProjectCardForm onProjectAdded={loadProjectCards} />

      {projectscards.map((projectCard, index) => (
        <ProjectCard
          key={index}
          projectcard_id={projectCard.projectcard_id}
          title={projectCard.title}
          description={projectCard.description}
          imageUrl={projectCard.base64Image ? `data:image/jpeg;base64,${projectCard.base64Image}` : ""}
          techStack={projectCard.techStacks}
          layout={index % 2 === 0}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
export default ProjectsPage;