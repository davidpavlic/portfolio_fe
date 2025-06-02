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
            <button
                ref={toggleRef}
                className={`my-dropdown-toggle ${show ? 'show' : ''}`}
                onClick={() => setShow(!show)}
                aria-expanded={show}
            >
                {currentLabel}
            </button>
            {show && (
                <div className="my-dropdown-menu">
                    {ENV_ITEMS.map(({ code, labelKey }) => (
                        <button
                            key={code}
                            className="my-dropdown-menu-item"
                            onClick={() => handleSelect(code)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleSelect(code);
                                }
                            }}
                            tabIndex={0}
                        >
                            {t(labelKey)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyEnvDropDown;