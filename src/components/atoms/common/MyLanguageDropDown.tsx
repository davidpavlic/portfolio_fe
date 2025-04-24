import MyGenericDropDown from '../../molecules/common/MyGenericDropDown';
import { useTranslation } from 'react-i18next';


//* CONSTANTS *///
// Define language items with translation keys
const LANGUAGE_ITEMS = [
  { code: 'en', labelKey: 'env_english' },
  { code: 'de', labelKey: 'env_german' },
  { code: 'fr', labelKey: 'env_french' },
  { code: 'hr', labelKey: 'env_croatian' },
  { code: 'gg', labelKey: 'env_globi' },
];


///* FUNCTIONAL COMPONENT *///
const MyLanguageDropDown = () => {
  const { i18n } = useTranslation();

  return (
    <MyGenericDropDown
      items={LANGUAGE_ITEMS}
      storageKey='language'
      defaultCode='en'
      onSelect={(code) => i18n.changeLanguage(code)}
    />
  );
};


///* EXPORT *///
export default MyLanguageDropDown;