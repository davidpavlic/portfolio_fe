// Import necessary dependencies
import '../styling/MyProjectTechStack.css'; // Import CSS styles
import { useTranslation } from "react-i18next"; // For i18n translation support
import { useState, useEffect } from "react"; // Import React hooks for state and side effects

///* TYPE DEFINITION *///
// Defines the expected properties for the MyProjectFormFieldProps component.
// - id: Unique identifier for the form field
// - label: The label text for the form field
// - value: The current value of the form field
// - error: Optional error message to be displayed
// - disabled: Optional boolean to disable the form field
// - isTextArea: Optional boolean to indicate if it's a textarea
// - onChange: Function to handle value changes in the form field
// - techStack: The list of technologies in the tech stack
// - setTechStack: Function to update the tech stack array
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


///* FUNCTIONAL COMPONENT *///
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

    const { t } = useTranslation();
    const [errorMessage, setErrorMessage] = useState(error);

    // Handler to add tech stack item when the Enter key is pressed
    const handleTechStackAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Check if the Enter key is pressed
        if (e.key === 'Enter') {
            // Only add the tech if it's not already in the stack, and it's within the character limit
            if (value.trim() && !techStack.includes(value.trim()) && value.trim().length <= 20) {
                setTechStack([...techStack, value.trim()]);                                 // Add to tech stack
                onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>); // Clear the input
                setErrorMessage("");                                                        // Clear the error message
            } else if (value.trim().length > 20) {
                // If the tech stack entry exceeds the length limit, set an error message
                setErrorMessage(t("projects_form_error_techstack_limit"));
            }
            e.preventDefault(); // Prevent the default behavior of the Enter key
        }
    };

    // Handler to remove a tech stack item when its corresponding "✕" button is clicked
    const handleTechStackRemove = (tech: string, e: React.MouseEvent) => {
        e.preventDefault();                                         // Prevent the default button click behavior
        setTechStack(techStack.filter((item) => item !== tech));    // Filter out the tech item from the stack and update the state
    };

    // Update error message when the 'error' prop changes
    useEffect(() => setErrorMessage(error), [error]);

    return (
        <div className="form-group">
            {/* Label for the form field */}
            <label htmlFor={id}>{label}</label>
            
            <div className="techstack-input-container">
                {/* Input field for tech stack */}
                <input
                    className="techstack-input"
                    type="text"
                    id={id}
                    value={value} // Bind the input value to the component's state
                    onChange={onChange} // Handle value changes
                    onKeyDown={handleTechStackAdd} // Listen for the Enter key
                    disabled={disabled} // Disable input if specified
                />
                
                {/* Display tech stack bubbles */}
                <div className="techstack-bubbles">
                    {techStack.map((tech, index) => (
                        <div key={index} className="techstack-bubble">
                            {tech}
                            {/* Remove button for each tech stack item */}
                            <button className="techstack-remove-bubble" onClick={(e) => handleTechStackRemove(tech, e)}> ✕</button>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Display error message if there's an error */}
            {errorMessage && <span className="techstack-error">{errorMessage}</span>}
        </div>
    );
};


///* EXPORT *///
export default MyProjectFormField;