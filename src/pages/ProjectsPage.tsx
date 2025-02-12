import './styling/ProjectsPage.css';
import { useState, useEffect } from "react";
import ProjectCard from "../components/organisms/ProjectCard";

//TODO: Refactor
//TODO: Comment
//TODO: Add and make add form look good
//TODO: Add techstack attributes to backend
//TODO: Password secured CRUD operations
//TODO: Solve ProjectCard TODO

interface ProjectCardData {
  projectcard_id: number;
  title: string;
  description: string;
  base64Image?: string;
}


export const ProjectsPage = () => {

  const [projectscards, setProjectcards] = useState<ProjectCardData[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!file) {
      setMessage('Please select an image.');
      return;
    }
  
    // Build the form data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', file);
  
    fetch('http://localhost:8080/projectcard/', {
      method: 'POST',
      // Do not set Content-Type when using FormData!
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        setMessage('Project card added successfully!');
        setTitle('');
        setDescription('');
        setFile(null);
        setProjectcards(prev => [...prev, data]);
      })
      .catch(error => {
        console.error('Error creating project card:', error);
        setMessage('Error creating project card.');
      });
  };

  const handleDelete = (id: number) => {
    setProjectcards(prev => prev.filter(card => card.projectcard_id !== id));
  };

  useEffect(() => {
    fetch('http://localhost:8080/projectcard/') // Make sure the endpoint URL matches your backend
      .then(response => {
        return response.json(); // Return the parsed JSON promise
      })
      .then(data => {
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
        <div>
          <label htmlFor="image">Image:</label>
          <br />
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFile(e.target.files[0]);
              }
            }}
            required
          />
        </div>
        <br />
        <button type="submit">Add Project Card</button>
      </form>
      {message && <p>{message}</p>}

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