import './styling/ProjectsPage.css';
import { useTranslation } from "react-i18next";

export const ProjectsPage = () => {
  const { t } = useTranslation();
    return (
      <nav>
          {t("projects_dummy")}
      </nav>
    );
  };
  export default ProjectsPage;