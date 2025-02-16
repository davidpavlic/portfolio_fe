import "./styling/MyAddProjectCardForm.css"; 
import { useState } from "react";
import { addProjectCard } from "../../services/ProjectCardService"; 
import MyProjectFileUpload from "../molecules/MyProjectFileUpload"; 
import MyFormField from "../molecules/MyProjectFormField";  

///* FUNCTIONAL COMPONENT *///
const MyAddProjectCardForm = ({ onProjectAdded }: { onProjectAdded: () => void }) => {
    // State variables for form data, errors, submission status, and popup message
    const [formData, setFormData] = useState({ title: '', description: '', file: null as File | null });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [popupMessage, setPopupMessage] = useState<string | null>(null);

    // Function to validate the form
    const validateForm = () => {
        const newErrors: Record<string, string> = {
            ...(formData.title.trim() ? {} : { title: 'Title is required' }),                   // Validate title field
            ...(formData.description.trim() ? {} : { description: 'Description is required' }), // Validate description field
            ...(formData.file                                                                   // Validate file
                ? ['application/pdf', 'image/png', 'image/jpeg'].includes(formData.file.type)
                    ? {} 
                    : { file: 'Only PDF, PNG, and JPG files are allowed' }
                : { file: 'File is required' })
        };

        // Set errors in state
        setErrors(newErrors);
        
        // Return true if there are no errors, false otherwise
        return !Object.keys(newErrors).length; // Returns true if object is empty, false if it contains errors
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();             // Prevent default form submission
        if (!validateForm()) return;    // Stop submission if validation fails
        setIsSubmitting(true);          // Set submitting state to true

        // Create a FormData object to send the form data
        const formPayload = new FormData();
        formPayload.append("title", formData.title);
        formPayload.append("description", formData.description);
        if (formData.file) formPayload.append("image", formData.file);
        
        // Call API service to add project card
        const success = await addProjectCard(formPayload);

        // Show success or error message
        setPopupMessage(success ? "✅ Project card created successfully!" : "❌ Error creating project card");
        
        if (success) {
            setFormData({ title: "", description: "", file: null });    // Reset form fields if submission is successful
            onProjectAdded();                                           // Refresh project list after adding
        }

        setIsSubmitting(false);                         // Reset submitting state
        setTimeout(() => setPopupMessage(null), 5000);  // Hide popup message after 5 seconds
    };

    return (
        <div className="form-container">
            <h2>Upload Project Card</h2>
            <form onSubmit={handleSubmit}>
                <div className="split-layout">
                    {/* Left column for text fields */}
                    <div className="left-column">
                        <MyFormField
                            id="title"
                            label="Title:"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            error={errors.title}
                            disabled={isSubmitting}
                        />
                        <MyFormField
                            id="description"
                            label="Description:"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            error={errors.description}
                            disabled={isSubmitting}
                            isTextArea
                        />
                    </div>

                    {/* Right column for file upload */}
                    <div className="right-column">
                        <MyProjectFileUpload
                            file={formData.file}
                            error={errors.file}
                            isSubmitting={isSubmitting}
                            onFileSelect={(file) => setFormData({ ...formData, file })}
                        />
                    </div>
                </div>
                
                {/* Submit button */}
                <button type="submit" disabled={isSubmitting} className="submit-button">
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {/* Popup message for feedback */}
            {popupMessage && (
                <div className="popup-message">
                    {popupMessage}
                </div>
            )}
        </div>
    );
};

///* EXPORT *///
export default MyAddProjectCardForm;
