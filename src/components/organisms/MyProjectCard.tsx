import "./styling/MyProjectCard.css";
import { BsTrash } from "react-icons/bs";
import { deleteProjectCard } from "../../services/ProjectCardService";


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
  techStack: [];
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
    const success = await deleteProjectCard(projectcard_id);
    if (success) onDelete(projectcard_id);
  };

  return (
    <div className={"cardContainer " + (layout ? "right" : "")}>
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
