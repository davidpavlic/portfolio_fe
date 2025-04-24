import MyGenericDropDown from './MyGenericDropDown';


//* CONSTANTS *///
// Define environment items with translation keys
const ENV_ITEMS = [
  { code: 'p', labelKey: 'env_prod' },
  { code: 't', labelKey: 'env_test' },
];


///* FUNCTIONAL COMPONENT *///
const MyEnvDropDown = () => {
  return (
    <MyGenericDropDown
      items={ENV_ITEMS}
      storageKey='env'
      defaultCode='p'
      onSelect={(_) => {
        // TODO: switch environment logic
      }}
    />
  );
};


///* EXPORT *///
export default MyEnvDropDown;