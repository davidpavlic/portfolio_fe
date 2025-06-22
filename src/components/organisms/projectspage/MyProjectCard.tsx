import '../styling/MyProjectCard.css';
import MyDeleteButton from '../../atoms/common/MyDeleteButton';
import { deleteProjectCard } from '../../../services/MyProjectCardService';
import { useState } from 'react';
import MyPasswordModal from '../../molecules/common/MyPasswordModal';


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
}: MyProjectCardProps) => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // Function to handle form submission authorization
  const authorizeSubmit = () => {
    setShowPasswordModal(true);
  }

  const onAuthorized = (success: boolean, password: string) => {
    setShowPasswordModal(false);
    if (success) {
      handleSubmit(password);
    }
  };

  const handleSubmit = async (password: string) => {
    const success = await deleteProjectCard(id, password);
    if (success) onDelete(id);
  }


  return (
    <div>
      {showPasswordModal && (
        <MyPasswordModal
          closeModal={() => setShowPasswordModal(false)}
          onAuthorized={onAuthorized}
        />
      )}
      <div className={'my_project_card_container ' + (layout ? 'my_project_card_align_right' : '')}>
        <div className='my_project_card_image_container'>
          <img src={imageUrl} alt={title} className='my_project_card_image' />
        </div>
        <div className='my_project_card_content'>
          <div className='my_project_card_title_container'>
            <h3 className='my_project_card_title'>{title}</h3>
            <MyDeleteButton
              onClick={authorizeSubmit}
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
    </div>
  );
}



///* EXPORT *///
export default MyProjectCard;