import '../styling/MyMainJourneyCard.css'
import { useTranslation } from 'react-i18next';


///* TYPE DEFINITIONS *///
// - period: string - The time period of the journey (e.g., "2020 - Present").
// - title: string - The title of the journey (e.g., "Software Engineer").
// - subtitle: string - A brief subtitle or description (e.g., "Tech Company • Remote").
// - description: string[] - An array of strings describing the journey (e.g., ["Developed features", "Collaborated with teams"]).
// - tags?: string[] - Optional array of tags or technologies related to the journey (e.g., ["JavaScript", "React"]).
type MyMainJourneyCardProps = {
    period: string;
    title: string;
    subtitle: string;
    description: string[];
    tags?: string[];
};


///* FUNCTIONAL COMPONENT *///
const MyMainJourneyCard = ({
    period,
    title,
    subtitle,
    description,
    tags
}: MyMainJourneyCardProps) => {
    const { t } = useTranslation();
    return (
        <div className={'my-main-journey-card'}>
            <div>
                <div className='my-main-journey-card-period'>{period}</div>
                <h4 className='my-main-journey-card-title'>{title}</h4>
                <p className='my-main-journey-card-subtitle'>{subtitle}</p>

                <ul className='my-main-journey-card-description'>
                    {description.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>

                {tags && tags.length > 0 && (
                    <div>
                        <h5 className='my-main-journey-tags-title'>{t('main_journey_technologies')}</h5>
                        <div className='my-main-journey-tags-container'>
                            {tags.map((tag, index) => (
                                <span key={index} className='my-main-journey-tag'>{tag}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


///* EXPORT *///
export default MyMainJourneyCard;