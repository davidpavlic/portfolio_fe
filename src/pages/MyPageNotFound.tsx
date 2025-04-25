import './styling/MyPageNotFound.css';
import { useTranslation } from 'react-i18next';


///* FUNCTINOAL COMPONENT *///
export const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className='pnf-container'>
      <div className='pnf-title'>
        404
      </div>
      <p className='pnf-message'>{t('page_not_found')}</p>
    </div>
  );
};


///* EXPORT *///
export default PageNotFound;