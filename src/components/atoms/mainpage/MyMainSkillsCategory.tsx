import '../styling/MyMainSkillsCategory.css';
import MyMainSkillsItem from './MyMainSkillsItem';


///* TYPE DEFINITIONS *///
type SkillItem = {
    name: string;
    level: number;
    icon?: string;
};

type MyMainSkillsCategoryProps = {
    title: string;
    icon: string;
    skills: SkillItem[];
    expanded: boolean;
    onToggle: () => void;
};


///* FUNCTIONAL COMPONENT *///
const MyMainSkillsCategory = ({ title, icon, skills, expanded, onToggle }: MyMainSkillsCategoryProps) => {
    return (
        <div className={`my-main-skills-category ${expanded ? 'expanded' : ''}`} onClick={onToggle}>
            <div className='my-main-skills-category-header'>
                <h3 className='my-main-skills-category-title'>
                    <span className='my-main-skills-category-icon'>{icon}</span>
                    {title}
                </h3>
                <span className='my-main-skills-category-toggle-icon'>{expanded ? '-' : '+'}</span>
            </div>

            <div className={`my-main-skills-list-wrapper ${expanded ? 'expanded' : ''}`}>
                <div className='my-main-skills-list'>
                    {skills.map((skill, index) => (
                        <MyMainSkillsItem key={index} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};


///* EXPORTS *///
export default MyMainSkillsCategory;