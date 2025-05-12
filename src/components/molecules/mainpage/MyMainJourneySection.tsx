import '../styling/MyMainJourneySection.css';
import { useTranslation } from 'react-i18next';
import { useExperiences, useEducation } from '../../../pages/MyMainPageData';
import MyMainJourneyCardList from '../../atoms/mainpage/MyMainJourneyCardList';

const MyMainJourneySection = () => {

  const { t } = useTranslation();
  const experiences = useExperiences();
  const education = useEducation();

  return (
    <section className="journey-section">
      <div className="journey-container">
        <div className="journey-header">
          <h2 className="my-main-header-name">{t('main_journey_title')}</h2>
          <p className="my-main-journey-title">{t('main_journey_subtitle')}</p>
        </div>

        <div className="journey-timeline">
          <div className="timeline-column">
            <h3 className="timeline-category">{t('main_journey_experience')}</h3>
            <MyMainJourneyCardList type="experience" items={experiences} />
          </div>

          <div className="timeline-column">
            <h3 className="timeline-category">{t('main_journey_education')}</h3>
            <MyMainJourneyCardList type="education" items={education} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyMainJourneySection;