import '../styling/MyMainSkillsSection.css';
import { useState } from 'react';
import i18n from 'i18next';
import MyMainSkillsTextSection from '../../atoms/mainpage/MyMainSkillsTextSection';
import MyMainSkillsCategory from '../../atoms/mainpage/MyMainSkillsCategory';


///* TYPE DEFINITIONS */
type SkillItem = {
  name: string;
  level: number;
  icon?: string;
};

type SkillCategory = {
  title: string;
  icon: string;
  skills: SkillItem[];
};


///* CONSTANTS *///
const skillCategories: SkillCategory[] = [
  {
    title: i18n.t('main_skills_programming_languages'),
    icon: '💻',
    skills: [
      { name: 'Java', level: 90, icon: '☕' },
      { name: 'TypeScript', level: 80, icon: '📘' },
      { name: 'Python', level: 60, icon: '🐍' },
      { name: 'C', level: 50, icon: '🔤' },
      { name: 'C#', level: 40, icon: '🎯' }
    ]
  },
  {
    title: i18n.t('main_skills_fontend_development'),
    icon: '🎨',
    skills: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'HTML', level: 80, icon: '🌐' },
      { name: 'CSS', level: 80, icon: '🖥️' },
    ]
  },
  {
    title: i18n.t('main_skills_backend_databases'),
    icon: '⚙️',
    skills: [
      { name: 'SQL', level: 95, icon: '🧮' },
      { name: 'SpringBoot', level: 80, icon: '🌱' },
      { name: 'PowerBuilder', level: 80, icon: '🏗️' }
    ]
  },
  {
    title: i18n.t('main_skills_devops_tools'),
    icon: '🔧',
    skills: [
      { name: 'Git', level: 90, icon: '🌿' },
      { name: 'Selenium', level: 80, icon: '🪲' },
      { name: 'Docker', level: 60, icon: '🐳' },
      { name: 'Jenkins', level: 40, icon: '🤖' },
      { name: 'Azure', level: 20, icon: '☁️' }
    ]
  },
  {
    title: i18n.t('main_skills_interests'),
    icon: '🌍',
    skills: [
      { name: i18n.t('main_skills_martial_arts'), level: 80, icon: '🥋' },
      { name: i18n.t('main_skills_cooking'), level: 60, icon: '🍳' },
      { name: i18n.t('main_skills_travel'), level: 50, icon: '✈️' },
      { name: i18n.t('main_skills_hiking'), level: 40, icon: '🥾' },
      { name: i18n.t('main_skills_gaming'), level: 30, icon: '🎮' },
      { name: i18n.t('main_skills_reading'), level: 20, icon: '📚' },
    ]
  },
  {
    title: i18n.t('main_skills_languages'),
    icon: '🗣️',
    skills: [
      { name: i18n.t('env_german'), level: 100, icon: '🇩🇪' },
      { name: i18n.t('env_english'), level: 90, icon: '🇬🇧' },
      { name: i18n.t('env_croatian'), level: 60, icon: '🇭🇷' },
      { name: i18n.t('env_french'), level: 40, icon: '🇫🇷' },
      { name: i18n.t('main_skills_spanish'), level: 10, icon: '🇪🇸' },
    ]
  }
];


///* FUNCTIONAL COMPONENT *///
const MyMainSkillsSection = () => {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className='my-main-header-container'>
      <div className='my-main-skills-wrapper'>
        <div className='my-main-skills-content'>
          <MyMainSkillsTextSection />
          <div className='my-main-skills-category-wrapper'>
            <div className='my-main-skills-category-grid'>
              {skillCategories.map((category, index) => (
                <MyMainSkillsCategory
                  key={index}
                  title={category.title}
                  icon={category.icon}
                  skills={category.skills}
                  expanded={expandedIndex === index}
                  onToggle={() => toggleCategory(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


///* EXPORT *///
export default MyMainSkillsSection;