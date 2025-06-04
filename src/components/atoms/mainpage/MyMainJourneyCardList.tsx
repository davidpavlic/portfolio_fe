import '../styling/MyMainJourneyCardList.css'
import MyMainJourneyCard from '../../atoms/mainpage/MyMainJourneyCard';


///* TYPE DEFINITIONS *///
// - id: number - Unique identifier for the journey item.
// - period: string - The time period of the journey (e.g., "2020 - Present").
// - name: string - The name of the journey item (e.g., "Software Engineer").
// - institution: string - The institution or company associated with the journey item (e.g., "Tech Company").
// - location: string - The location of the institution or company (e.g., "Remote").
// - description: string[] - An array of strings describing the journey item (e.g., ["Developed features", "Collaborated with teams"]).
// - technologies?: string[] - Optional array of technologies or skills related to the journey item (e.g., ["JavaScript", "React"]).
type JourneyItem = {
  id: number;
  period: string;
  name: string;
  institution: string;
  location: string;
  description: string[];
  technologies?: string[];
};

// - items: JourneyItem[] - An array of journey items to be displayed in the card list.
// - type: 'experience' | 'education' - The type of journey items, either 'experience' or 'education'.
type MyMainJourneyCardListProps = {
  items: JourneyItem[];
  type: 'experience' | 'education';
};


///* FUNCTIONAL COMPONENT */
const MyMainJourneyCardList = ({ items, type }: MyMainJourneyCardListProps) => (
  <div className='my-main-journey-cardlist'>
    {items.map((item) => (
      <MyMainJourneyCard
        key={item.id}
        period={item.period}
        title={item.name}
        subtitle={`${item.institution} • ${item.location}`}
        description={item.description}
        {...(type === 'experience'
          ? { tags: item.technologies }
          : null)}
      />
    ))}
  </div>
);


///* EXPORT *///
export default MyMainJourneyCardList;