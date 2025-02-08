import './styling/PageNotFound.css';
import { useTranslation } from "react-i18next";

export const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <nav className="page-not-found">
      <h1>404</h1>
      <p>{t("page_not_found")}</p>
    </nav>
  );
};

export default PageNotFound;