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
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLAnchorElement>(null);
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
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node) &&
            !toggleRef.current?.contains(event.target as Node)
        ) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <ul className="my-env-dropdown-container">
            <li>
                <a
                    ref={toggleRef}
                    className="my-env-dropdown-toggle"
                    onClick={() => setShow(!show)}
                >
                    {currentLabel}
                </a>
                {show && (
                    <div className="my-env-dropdown" ref={dropdownRef}>
                        <div className="my-env-dropdown-menu">
                            {ENV_ITEMS.map(({ code, labelKey }) => (
                                <a key={code} className="my-env-dropdown-menu-item" onClick={() => handleSelect(code)}>
                                    {t(labelKey)}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </li>
        </ul>
    );
};

export default MyEnvDropDown;