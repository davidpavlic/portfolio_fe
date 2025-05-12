import '../styling/MyMainJourneyCard.css'
import { useTranslation } from 'react-i18next';

type MyMainJourneyCardProps = {
    period: string;
    title: string;
    subtitle: string;
    description: string[];
    achievements?: string[];
    tags?: string[];
};

const MyMainJourneyCard = ({
    period,
    title,
    subtitle,
    description,
    achievements,
    tags
}: MyMainJourneyCardProps) => {
    const { t } = useTranslation();
    return (
        <div className={`timeline-card experience`}>
            <div className="timeline-marker"></div>
            <div>
                <div className="card-period">{period}</div>
                <h4 className="card-title">{title}</h4>
                <p className="card-subtitle">{subtitle}</p>

                <ul className="card-description">
                    {description.map((item, index) => (
                        <li key={index}>
                            <span className="bullet">•</span>
                            {item}
                        </li>
                    ))}
                </ul>

                {achievements && achievements.length > 0 && (
                    <div className="card-achievements">
                        <h5 className="achievements-title">{t('main_journey_notable_achievements')}</h5>
                        <ul>
                            {achievements.map((achievement, index) => (
                                <li key={index}>
                                    <span className="bullet">•</span>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {tags && tags.length > 0 && (
                    <div className="card-tags">
                        <h5 className="tags-title">{t('main_journey_technologies')}</h5>
                        <div className="tags-container">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyMainJourneyCard;