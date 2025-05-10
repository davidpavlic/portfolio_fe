import '../styling/MyMainSkillsTextSection.css'
import { useTranslation } from 'react-i18next';


///* FUNCTIONAL COMPONENT *///
const MyMainSkillsTextSection = () => {
  const { t } = useTranslation();

  return (
    <div>
      <header className="my-main-skills-title">
        <h1 className="my-main-header-name">{t('main_skills_title')}</h1>
      </header>
      <div className="my-main-skills-text">
        <h2 className="my-main-header-title">{t('main_skills_subtitle')}</h2>
        <ul className="my-main-skills-text-list">
          <li>{t('main_skills_text_entry_1')}</li>
          <li>{t('main_skills_text_entry_2')}</li>
          <li>{t('main_skills_text_entry_3')}</li>
          <li>{t('main_skills_text_entry_4')}</li>
          <li>{t('main_skills_text_entry_5')}</li>
          <li>{t('main_skills_text_entry_6')}</li>
          <li>{t('main_skills_text_entry_7')}</li>
          <li>{t('main_skills_text_entry_8')}</li>
          <li>{t('main_skills_text_entry_9')}</li>
        </ul>
      </div>
    </div>
  );
};


/* EXPORT */
export default MyMainSkillsTextSection;