import './styling/PageNotFound.css';
import { useTranslation } from "react-i18next";

export const PageNotFound = () => {
  const { t } = useTranslation();
    return (
      <nav>
          {t("page_not_found")}
      </nav>
    );
  };
  export default PageNotFound;