import './styling/MyMainPage.css';
import MyMainHeaderSection from '../components/molecules/mainpage/MyMainHeaderSection';
import MyMainSkillsSection from '../components/molecules/mainpage/MyMainSkillsSection';
import MyMainJourneySection from '../components/molecules/mainpage/MyMainJourneySection';
import MyMainReferencesSection from '../components/molecules/mainpage/MyMainReferencesSection';
import MyMainContactSection from '../components/molecules/mainpage/MyMainContactSection';

export const MainPage = () => {
  return (
      <div>
        <MyMainHeaderSection/>
        <MyMainSkillsSection/>
        <MyMainJourneySection/>
        <MyMainReferencesSection/>
        <MyMainContactSection/>
      </div>
  );
};
export default MainPage;