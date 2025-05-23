import '../styling/MyProjectFormField.css';


///* TYPE DEFINITION *///
// Defines the expected properties for the MyProjectFormField component.
// - id: The unique identifier for the form field (used for the label and input association).
// - label: The text that appears as the label for the form field.
// - value: The current value of the input or textarea field.
// - error: An optional error message to display if there's an issue with the input.
// - disabled: An optional boolean that disables the input field when set to true (useful during form submission).
// - isTextArea: An optional boolean indicating whether to render a textarea instead of a standard input field.
// - onChange: A function to handle changes to the value of the input or textarea (updates the parent component's state).
// - onKeyDown: A function to prevent unintentionally executing any submits.
type MyProjectFormFieldProps = {
    id: string;
    label: string;
    value: string;
    error?: string;
    disabled?: boolean;
    isTextArea?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};


///* FUNCTIONAL COMPONENT *///
const MyProjectFormField = ({
    id,
    label,
    value,
    error,
    disabled,
    isTextArea,
    onChange,
    onKeyDown,
}: MyProjectFormFieldProps) => (
    <div className='my-project-form-field-group'>
        <label htmlFor={id}>{label}</label>
        {/* Conditionally renders either a text area or input field based on isTextArea prop */}
        {isTextArea ? (
            <textarea id={id} value={value} onChange={onChange} disabled={disabled} onKeyDown={onKeyDown} />
        ) : (
            <input type='text' id={id} value={value} onChange={onChange} disabled={disabled} onKeyDown={onKeyDown} />
        )}
        {/* Conditionally render error message if an error exists */}
        {error && <span className='my-project-form-field-error'>{error}</span>}
    </div>
);

///* EXPORT *///
export default MyProjectFormField;