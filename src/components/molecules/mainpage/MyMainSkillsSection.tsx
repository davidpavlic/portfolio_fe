import '../styling/MyMainSkillsSection.css';

type SkillItem = {
  name: string;
  level: number;
};

type SkillCategory = {
  title: string;
  icon: string;
  skills: SkillItem[];
};

const MyMainSkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "C#", level: 75 },
        { name: "Bash", level: 70 }
      ]
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 88 },
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Backend & Databases",
      icon: "⚙️",
      skills: [
        { name: "Spring API", level: 85 },
        { name: "SQL", level: 90 },
        { name: "PowerBuilder", level: 80 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "🔧",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Jenkins", level: 80 },
        { name: "Selenium", level: 85 }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">Languages, frameworks, and tools I work with</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">
                <span className="category-icon">{category.icon}</span>
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-progress">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyMainSkillsSection;