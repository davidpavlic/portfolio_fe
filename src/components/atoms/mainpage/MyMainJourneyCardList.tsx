import '../styling/MyMainJourneyCardList.css'
import MyMainJourneyCard from '../../atoms/mainpage/MyMainJourneyCard';

type JourneyItem = {
  id: number;
  period: string;
  name: string;
  institution: string;
  location: string;
  description: string[];
  technologies?: string[];
  achievements?: string[];
};

type MyMainJourneyCardListProps = {
  items: JourneyItem[];
  type: 'experience' | 'education';
};

const MyMainJourneyCardList = ({ items, type }: MyMainJourneyCardListProps) => (
  <div className="timeline-items">
    {items.map((item) => (
      <MyMainJourneyCard
        key={item.id}
        period={item.period}
        title={item.name}
        subtitle={`${item.institution} • ${item.location}`}
        description={item.description}
        {...(type === 'experience'
          ? { tags: item.technologies }
          : { achievements: item.achievements })}
      />
    ))}
  </div>
);

export default MyMainJourneyCardList;
