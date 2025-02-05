import './styling/NewsScraperPage.css';
import { useTranslation } from "react-i18next";

export const NewsScraperPage = () => {
  const { t } = useTranslation();
    return (
      <nav>
          {t("news_dummy")}
      </nav>
    );
  };
  export default NewsScraperPage;