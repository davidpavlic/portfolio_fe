import './styling/ProjectsPage.css';
import { useState, useEffect } from "react";
import ProjectCard from "../components/organisms/MyProjectCard";
import AddProjectCardForm from '../components/organisms/MyAddProjectCardForm';


///* TODOS *///
//Add and make add form look good
//Add techstack attributes to backend
//Create Service classes
//Password secured CRUD operations
//Solve ProjectCard TODO


///* TYPE DEFINITION *///
// Defines the expected properties for the fetch of ProjectCard elements from the backend.
// - projectcard_id: references the projectcard for the deletion in the backend.
// - title, description, base64Image represent the data shown in the projectcard.
type ProjectCardData = {
  projectcard_id: number;
  title: string;
  description: string;
  base64Image?: string;
}


///* FUNCTIONAL COMPONENT *///
export const ProjectsPage = () => {

  const [projectscards, setProjectcards] = useState<ProjectCardData[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/projectcard/')
      .then((res) => res.json())
      .then((data) => setProjectcards(data))
      .catch((error) => console.error("Error fetching project cards:", error));
  }, [projectscards]);

  const handleDelete = (id: number) => {
    setProjectcards(prev => prev.filter(card => card.projectcard_id !== id));
  };

  return (
    <div>
      <AddProjectCardForm/>

      {projectscards.map((projectCard, index) => (
        <ProjectCard
          key={index}
          projectcard_id={projectCard.projectcard_id}
          title={projectCard.title}
          description={projectCard.description}
          imageUrl={projectCard.base64Image ? `data:image/jpeg;base64,${projectCard.base64Image}` : ""}
          techStack={["Next.js", "Node.js", "MongoDB", "Stripe"]}
          layout={index % 2 === 0}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
export default ProjectsPage;