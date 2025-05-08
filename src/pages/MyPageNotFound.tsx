import './styling/MyPageNotFound.css';
import { useTranslation } from 'react-i18next';


///* FUNCTINOAL COMPONENT *///
export const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className='pnf-container'>
      <h1 className='pnf-title'>404</h1>
      <p className='pnf-message'>{t('pnf_page_not_found')}</p>
    </div>
  );
};


///* EXPORT *///
export default PageNotFound;