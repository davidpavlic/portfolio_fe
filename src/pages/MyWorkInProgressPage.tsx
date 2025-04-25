import "./styling/MyWorkInProgressPage.css";
import { useTranslation } from "react-i18next";


///* FUNCTIONAL COMPONENT *///
const WorkInProgressPage = () => {
    const { t } = useTranslation();

    return (
        <div className="wip-container">
            <div className="wip-title">
                {t("wip_title")}
            </div>
            <p className="wip-message">
                {t("wip_under_construction")}
            </p>
            <p className="wip-message">
                {t("wip_see_you_soon")}
            </p>
        </div>
    );
};


///* EXPORT *///
export default WorkInProgressPage;