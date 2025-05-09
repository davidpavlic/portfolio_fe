import '../styling/MyMainHeaderSection.css';
import profileImage from '../../../assets/DavidPavlicImage.jpeg';
import { useTranslation } from 'react-i18next';

export const MyMainHeaderSection = () => {

  const { t } = useTranslation();

  return (
    <header className='my-main-header-container'>
      <div className='my-main-header-content'>
        <div className='my-main-header-image-container'>
          <img
            src={profileImage}
            alt='David Pavlic'
            className='my-main-header-image'
          />
        </div>
        <div>
          <h1 className='my-main-header-name'>David Pavlic</h1>
          <h2 className='my-main-header-title'>{t('main_header_title')}</h2>
          <p className='my-main-header-summary'>{t('main_header_summary')}</p>
          <div className='my-main-header-social-links'>
            <a href='https://www.linkedin.com/in/david-pavlic-481743180/' className='my-main-header-social-link my-main-header-linkedin'>LinkedIn</a>
            <a href='https://github.com/davidpavlic' className='my-main-header-social-link my-main-header-github'>GitHub</a>
          </div>
        </div>
      </div>
    </header>
  )
};

export default MyMainHeaderSection;