import '../styling/MyProjectCard.css';
import MyDeleteButton from '../../atoms/common/MyDeleteButton';
import { deleteProjectCard } from '../../../services/MyProjectCardService';


///* TYPE DEFINTION *///
// Defines the expected properties for the ProjectCard component.
// - id: references the projectcard for the deletion in the backend.
// - title, description, imageUrl, techStack represent the data shown in the projectcard.
// - layout: empty or right for adjusting the card content to the right,
// - onDelete: executed, when the deletion in the backend works out successfully.
type MyProjectCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  layout: boolean;
  onDelete: (id: string) => void;
}


///* FUNCTIONAL COMPONENT *///
const MyProjectCard = ({
  id,
  title,
  description,
  imageUrl,
  techStack,
  layout,
  onDelete,
}: MyProjectCardProps) => (
  <div className={'my_project_card_container ' + (layout ? 'my_project_card_align_right' : '')}>
    <div className='my_project_card_image_container'>
      <img src={imageUrl} alt={title} className='my_project_card_image' />
    </div>
    <div className='my_project_card_content'>
      <div className='my_project_card_title_container'>
        <h3 className='my_project_card_title'>{title}</h3>
        <MyDeleteButton
          onClick={async () => {
            const success = await deleteProjectCard(id);
            if (success) onDelete(id);
          }}
          className='my-project-card-deletebutton'
        />
      </div>
      <p className='my_project_card_description'>{description}</p>
      <div className='my_project_card_tech_stack'>
        {techStack.map((tech, index) => (
          <span key={index} className='my_project_card_tech_item'>{tech}</span>
        ))}
      </div>
    </div>
  </div>
);



///* EXPORT *///
export default MyProjectCard;