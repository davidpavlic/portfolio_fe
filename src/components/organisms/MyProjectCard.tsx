import "./styling/MyProjectCard.css";
import { BsTrash } from "react-icons/bs";


///* TYPE DEFINTION *///
// Defines the expected properties for the ProjectCard component.
// - projectcard_id: references the projectcard for the deletion in the backend.
// - title, description, imageUrl, techStack represent the data shown in the projectcard.
// - layout: empty or right for adjusting the card content to the right,
// - onDelete: executed, when the deletion in the backend works out successfully.
type ProjectCardProps = {
  projectcard_id: number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  layout: boolean;
  onDelete: (id: number) => void;
}


///* FUNCTIONAL COMPONENT *///
const ProjectCard = ({
  projectcard_id,
  title,
  description,
  imageUrl,
  techStack,
  layout,
  onDelete,
}: ProjectCardProps) => {

  //Calls the backend to delete the the project card
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/projectcard/${projectcard_id}`, { method: "DELETE" });
      if (response.ok) 
        onDelete(projectcard_id);
    } catch (error) {
      console.error("Error deleting project card: ", error);
    }
  };

  return (
    <div className={"cardContainer " + (layout?"right":"")}>
      <div className="imageContainer">
        <img src={imageUrl} alt={title} className="projectImage" />
      </div>
      <div className="contentContainer">
        <div className="titleContainer">
          <h3 className="title">{title}</h3>
          <button className="deleteButton" onClick={handleDelete}>
            <BsTrash />
          </button>
        </div>
        <p className="description">{description}</p>
        <div className="techStack">
          {techStack.map((tech, index) => (
            <span key={index} className="techItem">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
