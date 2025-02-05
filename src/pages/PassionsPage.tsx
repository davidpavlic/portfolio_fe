import './styling/PassionPage.css';
import { useTranslation } from "react-i18next";

export const PassionsPage = () => {
  const { t } = useTranslation();
  return (
    <nav>
        {t("passions_dummy")}
    </nav>
  );
};
export default PassionsPage;