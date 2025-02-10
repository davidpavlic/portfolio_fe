import './styling/ProjectsPage.css';
import { useState, useEffect } from "react";
import ProjectCard from "../components/organisms/ProjectCard";
import SchweizImage from "../assets/images/Schweiz.png";


interface ProjectCardData {
  projectcard_id: number;
  projectcard_title: string;
  projectcard_description: string;
}


export const ProjectsPage = () => {

  const [projectscards, setProjectcards] = useState<ProjectCardData[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create an object with title and description only
    const newProjectCard = { 
      title: title, 
      description: description 
    };

    fetch('http://localhost:8080/projectcard/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProjectCard)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        setMessage('Project card added successfully!');
        // Clear the form
        setTitle('');
        setDescription('');
        // Optionally add the new project card to your state immediately
        setProjectcards(prev => [...prev, data]);
      })
      .catch(error => {
        console.error('Error creating project card:', error);
        setMessage('Error creating project card.');
      });
  };

  useEffect(() => {
    fetch('http://localhost:8080/projectcard/') // Make sure the endpoint URL matches your backend
      .then(response => {
        return response.json(); // Return the parsed JSON promise
      })
      .then(data => {
        console.log("Fetched data:", data);
        setProjectcards(data);
      })
      .catch(error => console.error("Error fetching project cards:", error));
  }, []);


  return (
    <div>
      <h2>Add a New Project Card</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Add Project Card</button>
      </form>
      {message && <p>{message}</p>}

      {projectscards.map((projectCard, index) => (
        <ProjectCard
          key={projectCard.projectcard_id}
          title={projectCard.projectcard_title}
          description={projectCard.projectcard_description}
          imageUrl={SchweizImage}
          techStack={["Next.js", "Node.js", "MongoDB", "Stripe"]}
          layout={index % 2 === 0} 
          />
      ))}
    </div>
  );
};
export default ProjectsPage;