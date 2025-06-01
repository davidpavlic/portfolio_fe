import '../styling/MyMainJourneySection.css';
import { useTranslation } from 'react-i18next';
import { useExperiences, useEducation } from '../../../pages/MyMainPageData';
import MyMainJourneyCardList from '../../atoms/mainpage/MyMainJourneyCardList';


///* FUNCTIONAL COMPONENT *///
const MyMainJourneySection = () => {

  const { t } = useTranslation();
  const experiences = useExperiences();
  const education = useEducation();

  return (
    <section className='my-main-journey-section'>
      <div className='my-main-journey-container'>
        <div className='my-main-journey-header'>
          <h2 className='my-main-header-name'>{t('main_journey_title')}</h2>
          <p className='my-main-journey-title'>{t('main_journey_subtitle')}</p>
        </div>

        <div className='my-main-journey-timeline'>
          <div className='my-main-timeline-column'>
            <h3 className='my-main-timeline-category'>{t('main_journey_experience')}</h3>
            <MyMainJourneyCardList type='experience' items={experiences} />
          </div>

          <div className='my-main-timeline-column'>
            <h3 className='my-main-timeline-category'>{t('main_journey_education')}</h3>
            <MyMainJourneyCardList type='education' items={education} />
          </div>
        </div>
      </div>
    </section>
  );
};


///* EXPORT *///
export default MyMainJourneySection;