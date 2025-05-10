import '../styling/MyMainSkillsItem.css'


///* TYPE DEFINITIONS *///
type MyMainSkillItemProps = {
    name: string;
    level: number;
    icon?: string;
};


///* FUNCTIONAL COMPONENT *///
const MyMainSkillsItem = ({ name, level, icon }: MyMainSkillItemProps) => {
    return (
        <div className="my-main-skills-item">
            <div className="my-main-skills-item-info">
                {icon && <span>{icon}</span>}
                <span className="my-main-skills-item-name">{name}</span>
                <span className="my-main-skills-item-level">{level}%</span>
            </div>
            <div className="my-main-skills-item-progress">
                <div
                    className="my-main-skills-item-progress-bar"
                    style={{ width: `${level}%` }}
                    aria-valuenow={level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                ></div>
            </div>
        </div>
    );
};


///* EXPORT *///
export default MyMainSkillsItem;