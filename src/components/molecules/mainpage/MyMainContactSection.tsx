import '../styling/MyMainContactSection.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../services/MyMainService.tsx';
import { sendEmail } from '../../../services/MyMainService.tsx';


///* FUNCTIONAL COMPONENT *///
const MyMainContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {
      ...(formData.name.trim() ? {} : { name: t('main_contact_form_error_no_name') }), 
      ...(formData.subject.trim() ? {} : { subject: t('main_contact_form_error_no_subject') }),
      ...(formData.message.trim() ? {} : { message: t('main_contact_form_error_no_message') }),
    };

    setErrors(newErrors);                   // Set errors in state
    return !Object.keys(newErrors).length;  // Returns true if object is empty, false if it contains errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const success = await sendEmail('By: ' + formData.name + ' - Betreff: ' + formData.subject, formData.message);
    setPopupMessage(success ? ('✅ ' + t('main_contact_form_success')) : ('❌ ' + t('main_contact_form_fail')));
    setIsSubmitting(false);                         // Reset submitting state
    setTimeout(() => setPopupMessage(null), 5000);  // Hide popup message after 5 seconds
  };


  return (
    <section className='my-main-contact-section'>
      <div className='my-main-contact-container'>
        <h1 className='my-main-contact-title'>{t('main_contact_title')}</h1>
        <h2 className='my-main-contact-subtitle'>{t('main_contact_subtitle')}</h2>

        <div className='my-main-contact-card'>
          <form className='my-main-contact-form' onSubmit={handleSubmit}>
            <div className='my-main-contact-field'>
              <label>{t('main_contact_form_name')}</label>
              <input
                className='my-main-contact-input'
                id='name'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <span className='my-project-form-field-error'>{errors.name}</span>}
            </div>

            <div className='my-main-contact-field'>
              <label>{t('main_contact_form_subject')}</label>
              <input
                className='my-main-contact-input'
                id='subject'
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              {errors.subject && <span className='my-project-form-field-error'>{errors.subject}</span>}
            </div>

            <div className='my-main-contact-field'>
              <label>{t('main_contact_form_message')}</label>
              <textarea
                className='my-main-contact-textarea'
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && <span className='my-project-form-field-error'>{errors.message}</span>}
            </div>

            <button className='my-main-contact-button' type='submit' disabled={isSubmitting}>
              {t('main_contact_form_submit')}
            </button>
          </form>
        </div>
      </div>
      {/* Popup message for feedback */}
      {popupMessage && <div className='my-main-contact-popup-message'>{popupMessage}</div>}
    </section>
  );
};


///* EXPORT *///
export default MyMainContactSection;