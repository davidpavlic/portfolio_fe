import '../styling/MyEnvDropDown.css';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

//* CONSTANTS *///
const ENV_ITEMS = [
    { code: 'p', labelKey: 'env_prod' },
    { code: 't', labelKey: 'env_test' },
];

///* FUNCTIONAL COMPONENT *///
const MyEnvDropDown = () => {
    const { t } = useTranslation();
    const toggleRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [code, setCode] = useState<string>(localStorage.getItem('env') || 'p');
    const [show, setShow] = useState(false);

    // Derive the current environment label from i18n
    const currentLabel = t(ENV_ITEMS.find(item => item.code === code)?.labelKey || '');

    const handleSelect = (selectedCode: string) => {
        // Execute the onSelect function with the selected code.
        // TODO: Switch environment logic

        // Update localStorage and state
        localStorage.setItem('env', selectedCode);
        setCode(selectedCode);
        setShow(false);
        requestAnimationFrame(() => toggleRef.current?.blur());
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="my-env-dropdown" ref={dropdownRef}>
            <li className="nav-item">
                <a className="icon-button" onClick={() => setShow(!show)}>
                    {currentLabel}
                </a>
            </li>
            {show && (
                <div className="dropdown">
                    <div className="menu">
                        {ENV_ITEMS.map(({ code, labelKey }) => (
                            <a key={code} className="menu-item" onClick={() => handleSelect(code)}>
                                {t(labelKey)}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyEnvDropDown;