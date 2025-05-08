import './styling/MyProjectsPage.css';
import { useState, useEffect } from 'react';
import MyProjectCard from '../components/organisms/projectspage/MyProjectCard';
import AddProjectCardForm from '../components/organisms/projectspage/MyAddProjectCardForm';
import { fetchProjectCards } from '../services/MyProjectCardService';


///* TYPE DEFINITION *///
// Defines the expected properties for the fetch of ProjectCard elements from the backend.
// - projectcard_id: references the projectcard for the deletion in the backend.
// - title, description, base64Image represent the data shown in the projectcard.
type ProjectCardData = {
  id: string;
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

  const handleDelete = (id: string) => {
    setProjectcards(prev => prev.filter(card => card.id !== id));
  };

  return (
    <div>
      <AddProjectCardForm onProjectAdded={loadProjectCards} />
      {projectscards.map((projectCard, index) => (
        <MyProjectCard
          key={index}
          id={projectCard.id}
          title={projectCard.title}
          description={projectCard.description}
          imageUrl={projectCard.base64Image ? `data:image/jpeg;base64,${projectCard.base64Image}` : ''}
          techStack={projectCard.techStacks}
          layout={index % 2 === 0}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
export default ProjectsPage;