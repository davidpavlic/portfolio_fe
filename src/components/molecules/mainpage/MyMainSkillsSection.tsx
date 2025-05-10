import { useState } from 'react';
import '../styling/MyMainSkillsSection.css';

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
    title: "Programming Languages",
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
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "HTML", level: 80, icon: "🌐" },
      { name: "CSS", level: 80, icon: "🖥️" },
    ]
  },
  {
    title: "Backend & Databases",
    icon: "⚙️",
    skills: [
      { name: "SQL", level: 95, icon: "🧮" },
      { name: "SpringBoot", level: 80, icon: "🌱" },
      { name: "PowerBuilder", level: 80, icon: "🏗️" }
    ]
  },
  {
    title: "DevOps & Tools",
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
    title: "Interests",
    icon: "🌍",
    skills: [
      { name: "Martial Arts", level: 80, icon: "🥋" },
      { name: "Cooking", level: 60, icon: "🍳" },
      { name: "Travel", level: 50, icon: "✈️" },
      { name: "Hiking", level: 40, icon: "🥾" },
      { name: "Gaming", level: 30, icon: "🎮" },
      { name: "Reading", level: 20, icon: "📚" },
    ]
  },
  {
    title: "Languages",
    icon: "🗣️",
    skills: [
      { name: "German", level: 100, icon: "🇩🇪" },
      { name: "English", level: 90, icon: "🇬🇧" },
      { name: "Croatian", level: 60, icon: "🇭🇷" },
      { name: "French", level: 40, icon: "🇫🇷" },
      { name: "Spanish", level: 10, icon: "🇪🇸" },
    ]
  }
];

const MyMainSkillsSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section className="my-main-header-container">
      <div className="my-main-skills-wrapper">
        <div className="my-main-skills-content">
          <div>
            <header className="my-main-skills-title">
              <h1 className="my-main-header-name">My Skills & Interests</h1>
            </header>
            <div className="my-main-skills-text">
              <h2 className="my-main-header-title">Every Day is a New Opportunity to: </h2>
              <ul className="my-main-skills-text-list">
                <li>Finally finish that one project laying around</li>
                <li>Stare at a bug for an hour and fix it in five seconds</li>
                <li>Write code that works... and then wonder why</li>
                <li>Stay curious and dive into something new</li>
                <li>Teach something you didn’t know six months ago</li>
                <li>Work with people who challenge your thinking</li>
                <li>Take a few hits in MMA and still show up smiling</li>
                <li>Experiment in the kitchen even if it turns out weird</li>
                <li>To live life pursuing what you love</li>
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