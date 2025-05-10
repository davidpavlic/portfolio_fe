import { useState } from 'react';
import '../styling/MyMainSkillsSection.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


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

const skillCategories: SkillCategory[] = [
  {
    title: i18n.t('main_skills_programming_languages'),
    icon: "💻",
    skills: [
      { name: "Java", level: 90, icon: "☕" },
      { name: "TypeScript", level: 80, icon: "📘" },
      { name: "Python", level: 60, icon: "🐍" },
      { name: "C", level: 50, icon: "🔤" },
      { name: "C#", level: 40, icon: "🎯" }
    ]
  },
  {
    title: i18n.t('main_skills_fontend_development'),
    icon: "🎨",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "HTML", level: 80, icon: "🌐" },
      { name: "CSS", level: 80, icon: "🖥️" },
    ]
  },
  {
    title: i18n.t('main_skills_backend_databases'),
    icon: "⚙️",
    skills: [
      { name: "SQL", level: 95, icon: "🧮" },
      { name: "SpringBoot", level: 80, icon: "🌱" },
      { name: "PowerBuilder", level: 80, icon: "🏗️" }
    ]
  },
  {
    title: i18n.t('main_skills_devops_tools'),
    icon: "🔧",
    skills: [
      { name: "Git", level: 90, icon: "🌿" },
      { name: "Selenium", level: 80, icon: "🪲" },
      { name: "Docker", level: 60, icon: "🐳" },
      { name: "Jenkins", level: 40, icon: "🤖" },
      { name: "Azure", level: 20, icon: "☁️" }
    ]
  },
  {
    title: i18n.t('main_skills_interests'),
    icon: "🌍",
    skills: [
      { name: i18n.t('main_skills_martial_arts'), level: 80, icon: "🥋" },
      { name: i18n.t('main_skills_cooking'), level: 60, icon: "🍳" },
      { name: i18n.t('main_skills_travel'), level: 50, icon: "✈️" },
      { name: i18n.t('main_skills_hiking'), level: 40, icon: "🥾" },
      { name: i18n.t('main_skills_gaming'), level: 30, icon: "🎮" },
      { name: i18n.t('main_skills_reading'), level: 20, icon: "📚" },
    ]
  },
  {
    title: i18n.t('main_skills_languages'),
    icon: "🗣️",
    skills: [
      { name: i18n.t('env_german'), level: 100, icon: "🇩🇪" },
      { name: i18n.t('env_english'), level: 90, icon: "🇬🇧" },
      { name: i18n.t('env_croatian'), level: 60, icon: "🇭🇷" },
      { name: i18n.t('env_french'), level: 40, icon: "🇫🇷" },
      { name: i18n.t('main_skills_spanish'), level: 10, icon: "🇪🇸" },
    ]
  }
];

const MyMainSkillsSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section className="my-main-header-container">
      <div className="my-main-skills-wrapper">
        <div className="my-main-skills-content">
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

          <div className="my-main-skills-category-wrapper">
            <div className="my-main-skills-category-grid">
              {skillCategories.map((category, index) => (
                <div
                  className={`my-main-skills-category ${expandedCategory === index ? 'expanded' : ''}`}
                  key={index}
                  onClick={() => toggleCategory(index)}
                >
                  <div className="my-main-skills-category-header">
                    <h3 className="my-main-skills-category-title">
                      <span className="my-main-skills-category-icon">{category.icon}</span>
                      {category.title}
                    </h3>
                    <span className="my-main-skills-category-toggle-icon">
                      {expandedCategory === index ? '−' : '+'}
                    </span>
                  </div>

                  <div className="my-main-skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div className="my-main-skills-item" key={skillIndex}>
                        <div className="my-main-skills-item-info">
                          {skill.icon && <span>{skill.icon}</span>}
                          <span className="my-main-skills-item-name">{skill.name}</span>
                          <span className="my-main-skills-item-level">{skill.level}%</span>
                        </div>
                        <div className="my-main-skills-item-progress">
                          <div
                            className="my-main-skills-item-progress-bar"
                            style={{ width: `${skill.level}%` }}
                            aria-valuenow={skill.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyMainSkillsSection;