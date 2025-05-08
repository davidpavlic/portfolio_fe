import '../styling/MyMainEducationSection.css';

type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string[];
  achievements?: string[];
  gpa?: string;
};

const MyMainEducationSection = () => {
  const education: EducationItem[] = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "ZHAW (Zurich University of Applied Sciences)",
      period: "09/2023 - 08/2027 (Expected)",
      location: "Winterthur, Switzerland",
      description: [
        "Current GPA: 5.5/6",
        "Relevant coursework: Algorithms, Data Structures, Software Engineering, Database Systems"
      ],
      achievements: [
        "University project: Receipt splitter application with JavaFX and Microsoft Services"
      ]
    },
    {
      id: 2,
      degree: "EFZ in Apprenticeship in Application Development",
      institution: "Technische Berufsschule Zürich",
      period: "08/2018 - 07/2022",
      location: "Zurich, Switzerland",
      description: [
        "Graduated with honors (GPA: 5.5/6)",
        "Focus on Java, Python, and web development"
      ],
      achievements: [
        "Developed a test automation system with Selenium and Gherkin as final project"
      ]
    },
    {
      id: 3,
      degree: "Technische BMS",
      institution: "Berufsmaturitätsschule Zürich",
      period: "08/2018 - 07/2022",
      location: "Zurich, Switzerland",
      description: [
        "Graduated with GPA: 5.2/6",
        "Strong performance in Mathematics, Physics, and English"
      ]
    }
  ];

  return (
    <section className="education-section">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey and achievements</p>
        
        <div className="education-timeline">
          {education.map((edu) => (
            <div className="education-card" key={edu.id}>
              <div className="education-header">
                <div className="education-period">{edu.period}</div>
                <div className="education-degree">{edu.degree}</div>
                <div className="education-institution">
                  {edu.institution} • {edu.location}
                </div>
              </div>
              
              <div className="education-content">
                <ul className="education-description">
                  {edu.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                {edu.achievements && (
                  <div className="education-achievements">
                    <div className="achievements-label">Notable Achievements:</div>
                    <ul className="achievements-list">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyMainEducationSection;