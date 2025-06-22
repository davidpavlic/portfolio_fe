import '../styling/MyAddProjectCardForm.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { addProjectCard } from '../../../services/MyProjectCardService';
import MyProjectFileUpload from '../../molecules/projectspage/MyProjectFileUpload';
import MyProjectFormField from '../../molecules/projectspage/MyProjectFormField';
import MyProjectTechStack from '../../molecules/projectspage/MyProjectTechStack';
import MyPasswordModal from '../../molecules/common/MyPasswordModal';


///* FUNCTIONAL COMPONENT *///
const MyAddProjectCardForm = ({ onProjectAdded }: { onProjectAdded: () => void }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        techStack: '',
        file: null as File | null
    });
    const [techStack, setTechStack] = useState<string[]>([]);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [popupMessage, setPopupMessage] = useState<string | null>(null);
    const [showPasswordModal, setShowPasswordModal] = useState(false);

    // Function to validate the form
    const validateForm = () => {
        const newErrors: Record<string, string> = {
            ...(formData.title.trim() ? {} : { title: t('projects_form_error_no_title') }),                     // Validate title field
            ...(formData.description.trim() ? {} : { description: t('projects_form_error_no_description') }),   // Validate description field
            ...(techStack.length > 0 ? {} : { techStack: t('projects_form_error_no_techstack') }),              // Validate tech stack
            ...(formData.file                                                                                   // Validate file
                ? ['application/pdf', 'image/png', 'image/jpeg'].includes(formData.file.type)
                    ? {}
                    : { file: t('projects_form_error_invalid_image') }
                : { file: t('projects_form_error_no_image') })
        };

        setErrors(newErrors);                   // Set errors in state
        return !Object.keys(newErrors).length;  // Returns true if object is empty, false if it contains errors
    };

    // Function to handle form submission authorization
    const authorizeSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setShowPasswordModal(true);
    }

    const onAuthorized = (success: boolean, password: string) => {
        setShowPasswordModal(false);
        if (success) {
            handleSubmit(password); 
        }
    };

    // Handle form submission
    const handleSubmit = async (password: string) => {
        console.log(password)
        setIsSubmitting(true);
        const formPayload = new FormData();
        formPayload.append('title', formData.title);
        formPayload.append('description', formData.description);
        techStack.forEach((tech) => { formPayload.append('techstacks', tech); });  // Append each tech stack to the form data
        if (formData.file) formPayload.append('image', formData.file);

        const success = await addProjectCard(formPayload);
        setPopupMessage(success ? ('✅ ' + t('projects_form_success')) : ('❌ ' + t('projects_form_fail')));

        if (success) {
            setFormData({ title: '', description: '', file: null, techStack: '' });   // Reset form fields if submission is successful
            setTechStack([]);                                                         // Reset techstack
            onProjectAdded();                                                         // Refresh project list after adding
        }

        setIsSubmitting(false);                         // Reset submitting state
        setTimeout(() => setPopupMessage(null), 5000);  // Hide popup message after 5 seconds
    };

    return (
        <div>
            {showPasswordModal && (
                <MyPasswordModal
                    closeModal={() => setShowPasswordModal(false)}
                    onAuthorized={onAuthorized}
                />
            )}
            <div className='my-project-card-form-container'>
                <h2>{t('projects_form_title')}</h2>
                <form onSubmit={authorizeSubmit}>
                    <div className='my-project-card-split-layout'>
                        <div className='my-project-card-left-column'>
                            <MyProjectFormField
                                id='title'
                                label={t('projects_form_card_title')}
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                error={errors.title}
                                disabled={isSubmitting}
                                onKeyDown={e => e.key === 'Enter' && e.preventDefault()}    // Prevent form submission on Enter key
                            />
                            <MyProjectFormField
                                id='description'
                                label={t('projects_form_card_description')}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                error={errors.description}
                                disabled={isSubmitting}
                                isTextArea
                            />
                            <MyProjectTechStack
                                id='techStack'
                                label={t('projects_form_card_techstack')}
                                value={formData.techStack}
                                onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                                error={errors.techStack}
                                disabled={isSubmitting}
                                techStack={techStack}
                                setTechStack={setTechStack}
                            />
                        </div>
                        <div className='my-project-card-right-column'>
                            <MyProjectFileUpload
                                file={formData.file}
                                error={errors.file}
                                isSubmitting={isSubmitting}
                                onFileSelect={(file) => setFormData({ ...formData, file })}
                            />
                        </div>
                    </div>
                    <button type='submit' disabled={isSubmitting} className='my-project-card-submit-button'>
                        {isSubmitting ? t('projects_form_submitting') : t('projects_form_submit')}
                    </button>
                </form>

                {/* Popup message for feedback */}
                {popupMessage && <div className='my-project-card-popup-message'>{popupMessage}</div>}
            </div>
        </div>
    );
};


///* EXPORT *///
export default MyAddProjectCardForm;