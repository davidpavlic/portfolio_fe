import { useState, useRef } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MyDropdownToggle from '../atoms/MyDropdownToggle';
import MyDropdownList from '../atoms/MyDropdownList';


//* TYPE DEFINITIONS *///
// Defines items which are displayed in the dropdown
type MenuItem = {
    code: string;
    labelKey: string;
};
// Defines the expected properties for the MyGenericDropDown component.
// - items: an object array for the items in the menu.
// - storageKey: a string key for localStorage.
// - defaultCode: a string for the default code.
// - onSelect: a function that takes a string and returns void.
type MyGenericDropDownProps = {
    items: MenuItem[];
    storageKey: string;
    defaultCode: string;
    onSelect: (code: string) => void;
};


///* FUNCTIONAL COMPONENT *///
const MyGenericDropDown = ({ items, storageKey, defaultCode, onSelect }: MyGenericDropDownProps) => {
    const { t } = useTranslation();
    const toggleRef = useRef<HTMLButtonElement>(null); // Ref for the toggle button
    const [code, setCode] = useState<string>(localStorage.getItem(storageKey) || defaultCode);   // Retrieve stored code from localStorage or fallback to defaultCode
    const [show, setShow] = useState(false); // Control dropdown visibility

    // Derive the current language label from i18n.
    const currentLabel = t(items.find(item => item.code === code)?.labelKey || '');

    const handleSelect = (eventKey: string | null) => {
        if (!eventKey) return;

        // Execute the onSelect function with the selected code.
        onSelect(eventKey);

        // Update localStorage and state with the selected code.
        localStorage.setItem(storageKey, eventKey);
        setCode(eventKey);

        // Close the dropdown and blur the toggle button.
        setShow(false);
        requestAnimationFrame(() => toggleRef.current?.blur()); // Blurs the button with the next free frame
    };

    return (
        <Dropdown show={show} onToggle={setShow} onSelect={handleSelect}>
        <MyDropdownToggle inputRef={toggleRef} title={currentLabel} />
        <MyDropdownList items={items.map(i => ({ code: i.code, label: t(i.labelKey) }))} />
      </Dropdown>
    );
};


///* EXPORT *///
export default MyGenericDropDown;