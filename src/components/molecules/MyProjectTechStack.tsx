import './styling/MyProjectTechStack.css';

type MyProjectFormFieldProps = {
    id: string;
    label: string;
    value: string;
    error?: string;
    disabled?: boolean;
    isTextArea?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    techStack: string[];
    setTechStack: React.Dispatch<React.SetStateAction<string[]>>;
};

const MyProjectFormField = ({
    id,
    label,
    value,
    error,
    disabled,
    onChange,
    techStack,
    setTechStack,
}: MyProjectFormFieldProps) => {

    const handleTechStackAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (value.trim() && !techStack.includes(value.trim())) {
                setTechStack([...techStack, value.trim()]);
                onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
            }
            e.preventDefault();
        }
    };

    const handleTechStackRemove = (tech: string, e: React.MouseEvent) => {
        console.log(tech);
        e.preventDefault();
        setTechStack(techStack.filter((item) => item !== tech));
    };

    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <div className="techstack-input-container">
                <input
                    className="techstack-input"
                    type="text"
                    id={id}
                    value={value}
                    onChange={onChange}
                    onKeyDown={handleTechStackAdd}
                    disabled={disabled}
                />
                <div className="techstack-bubbles">
                    {techStack.map((tech, index) => (
                        <div key={index} className="techstack-bubble">
                            {tech}
                            <button
                                className="techstack-remove-bubble"
                                onClick={(e) => handleTechStackRemove(tech, e)}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {error && <span className="techstack-error">{error}</span>}
        </div>
    );
};

export default MyProjectFormField;