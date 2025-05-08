import './styling/MyMainPage.css';
import MyMainHeaderSection from '../components/molecules/mainpage/MyMainHeaderSection';
import MyMainSkillsSection from '../components/molecules/mainpage/MyMainSkillsSection';
import MyMainWorkSection from '../components/molecules/mainpage/MyMainWorkSection';
import MyMainEducationSection from '../components/molecules/mainpage/MyMainEducationSection';
import MyMainReferencesSection from '../components/molecules/mainpage/MyMainReferencesSection';
import MyMainContactSection from '../components/molecules/mainpage/MyMainContactSection';

export const MainPage = () => {
  return (
      <div>
        <MyMainHeaderSection/>
        <MyMainSkillsSection/>
        <MyMainWorkSection/>
        <MyMainEducationSection/>
        <MyMainReferencesSection/>
        <MyMainContactSection/>
      </div>
  );
};
export default MainPage;