import '../styling/MyProjectTechStack.css';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import MyProjectTechStackBubbles from "../../atoms/projectspage/MyProjectTechStackBubbles";

///* TYPE DEFINITION *///
// Defines the expected properties for the MyProjectTechStackProps component.
// - id: Unique identifier for the form field
// - label: The label text for the form field
// - value: The current value of the form field
// - error: Optional error message to be displayed
// - disabled: Optional boolean to disable the form field
// - isTextArea: Optional boolean to indicate if it's a textarea
// - onChange: Function to handle value changes in the form field
// - techStack: The list of technologies in the tech stack
// - setTechStack: Function to update the tech stack array
type MyProjectTechStackProps = {
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


///* FUNCTIONAL COMPONENT *///
const MyProjectTechStack = ({
    id,
    label,
    value,
    error,
    disabled,
    onChange,
    techStack,
    setTechStack,
}: MyProjectTechStackProps) => {

    const { t } = useTranslation();
    const [localError, setLocalError] = useState<string>("");
    const MAX_TECH_STACK_LENGTH = 20;

    // Handler to add tech stack item when the Enter key is pressed
    const handleTechStackAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {

        if (e.key !== "Enter") return; 

        e.preventDefault();                                                         
        const trimmedValue = value.trim();

        if (!trimmedValue || techStack.includes(trimmedValue)) 
            return;
        if (trimmedValue.length > MAX_TECH_STACK_LENGTH){
            setLocalError(t("projects_form_error_techstack_limit"));
            return;
        }

        setTechStack([...techStack, trimmedValue]);                                 // Add to tech stack
        onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>); // Clear the input
        setLocalError("");                                                          // Clear the error message
    };

    // Handler to remove a tech stack item when its corresponding "✕" button is clicked
    const handleTechStackRemove = (tech: string, e: React.MouseEvent) => {
        e.preventDefault();                                         // Prevent the default button click behavior
        setTechStack(techStack.filter((item) => item !== tech));    // Filter out the tech item from the stack and update the state
    };

    return (
        <div className="my-project-form-field-group">
            {/* Label for the form field */}
            <label htmlFor={id}>{label}</label>

            <div className="my-project-techstack-input-container">
                {/* Input field for tech stack */}
                <input
                    className="my-project-techstack-input"
                    type="text"
                    id={id}
                    value={value} // Bind the input value to the component's state
                    onChange={onChange} // Handle value changes
                    onKeyDown={handleTechStackAdd} // Listen for the Enter key
                    disabled={disabled} // Disable input if specified
                />

                <MyProjectTechStackBubbles
                    techStack={techStack}
                    onRemove={handleTechStackRemove}
                />
            </div>

            {/* Display error message if there's an error */}
            {(error || localError) && <span className="my-project-techstack-error">{error || localError}</span>}
        </div>
    );
};


///* EXPORT *///
export default MyProjectTechStack;