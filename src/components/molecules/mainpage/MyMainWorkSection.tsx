import '../styling/MyMainWorkSection.css';

type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
};

const MyMainWorkSection = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Fullstack Software Engineer",
      company: "Informaticon AG",
      period: "06/2023 - 01/2025",
      location: "Badenerstrasse 549, Zürich",
      description: [
        "Organized and implemented solutions for Informaticon client ZAKU AG",
        "Enhanced customer interactions and PowerBuilder development",
        "Conducted framework updates for various clients",
        "Analyzed SQL Anywhere databases and Powerbuilder frameworks",
        "Developed interfaces for data synchronization between APIs and local systems"
      ],
      technologies: ["PowerBuilder", "SQL", "API Integration", "Cloud Solutions"]
    },
    {
      id: 2,
      role: "Test Automation Engineer",
      company: "Accenture AG",
      period: "08/2020 - 07/2022",
      location: "Fraumünsterstrasse 16, Zürich",
      description: [
        "Created internal test automation for Accenture's grading system",
        "Worked on CI/CD pipeline testing for client projects",
        "Developed Selenium test cases",
        "Improved adaptability across different work environments"
      ],
      technologies: ["Selenium", "CI/CD", "Test Automation", "Gherkin"]
    },
    {
      id: 3,
      role: "Apprentice Software Developer",
      company: "Noser Young Professionals AG",
      period: "08/2018 - 07/2020",
      location: "Herostrasse 12, Zürich",
      description: [
        "Trained in Python, C, JavaScript, and Java",
        "Gained practical experience with React/Spring applications",
        "Worked in SCRUM teams using MS Teams and Slack"
      ],
      technologies: ["Java", "React", "Spring", "SCRUM"]
    }
  ];

  return (
    <section className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">Where I've worked and what I've accomplished</p>
        
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <div className="experience-header">
                <div className="experience-period">{exp.period}</div>
                <div className="experience-role">{exp.role}</div>
                <div className="experience-company">
                  {exp.company} • {exp.location}
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="experience-description">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <div className="experience-technologies">
                  <div className="tech-label">Technologies:</div>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyMainWorkSection;