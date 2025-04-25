import './styling/MyWorkInProgressPage.css';
import { useTranslation } from 'react-i18next';


///* FUNCTIONAL COMPONENT *///
const WorkInProgressPage = () => {
    const { t } = useTranslation();

    return (
        <div className='wip-container'>
            <h1 className='wip-title'>{t('wip_title')}</h1>
            <p className='wip-message'>{t('wip_under_construction')}</p>
            <p className='wip-message'>{t('wip_see_you_soon')}</p>
        </div>
    );
};


///* EXPORT *///
export default WorkInProgressPage;