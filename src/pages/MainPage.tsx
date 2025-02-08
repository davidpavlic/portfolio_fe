import './styling/MainPage.css';
import { useTranslation } from "react-i18next";

export const MainPage = () => {
  const { t } = useTranslation();
  
  return (
    <nav>
        {Array.from({ length: 100 }, () => (
          <div>
            {t("home_dummy")}<br />
          </div>
        ))}
    </nav>
  );
};
export default MainPage;