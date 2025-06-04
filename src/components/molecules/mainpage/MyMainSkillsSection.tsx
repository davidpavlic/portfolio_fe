import '../styling/MyMainSkillsSection.css';
import { useState } from 'react';
import MyMainSkillsTextSection from '../../atoms/mainpage/MyMainSkillsTextSection';
import MyMainSkillsCategory from '../../atoms/mainpage/MyMainSkillsCategory';
import { useSkillCategories } from '../../../pages/MyMainPageData';


///* FUNCTIONAL COMPONENT *///
const MyMainSkillsSection = () => {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const skillCategories = useSkillCategories();
  
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