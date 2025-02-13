import { useState } from "react";
import "./styling/AddProjectCardForm.css";
import MyProjectFileUpload from "../molecules/MyProjectFileUpload";

type FormFieldProps = {
    id: string;
    label: string;
    value: string;
    error?: string;
    disabled?: boolean;
    isTextArea?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FormField = ({ id, label, value, error, disabled, isTextArea, onChange }: FormFieldProps) => (
    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        {isTextArea ? (
            <textarea id={id} value={value} onChange={onChange} disabled={disabled} />
        ) : (
            <input type="text" id={id} value={value} onChange={onChange} disabled={disabled} />
        )}
        {error && <span className="error">{error}</span>}
    </div>
);

const AddProjectCardForm = () => {
    const [formData, setFormData] = useState({ title: '', description: '', file: null as File | null });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [popupMessage, setPopupMessage] = useState<string | null>(null);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.title.trim()) newErrors.title = 'Title is required';
        else if (formData.title.length < 3) newErrors.title = 'Title must be at least 3 characters';

        if (!formData.description.trim()) newErrors.description = 'Description is required';
        else if (formData.description.length < 10) newErrors.description = 'Description must be at least 10 characters';

        if (!formData.file) newErrors.file = 'File is required';
        else if (!['application/pdf', 'image/png', 'image/jpeg'].includes(formData.file.type)) {
            newErrors.file = 'Only PDF, PNG, and JPG files are allowed';
        }

        setErrors(newErrors);
        return !Object.keys(newErrors).length;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        const formPayload = new FormData();
        formPayload.append('title', formData.title);
        formPayload.append('description', formData.description);
        formData.file && formPayload.append('image', formData.file);

        try {
            const response = await fetch('http://localhost:8080/projectcard/', { method: 'POST', body: formPayload });
            if (!response.ok) throw new Error();
            setPopupMessage('✅ Project card created successfully!');
            setFormData({ title: '', description: '', file: null });
        } catch {
            setPopupMessage('❌ Error creating project card');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setPopupMessage(null), 5000);
        }
    };

    return (
        <div className="form-container">
            <h2>Upload Project Card</h2>
            <form onSubmit={handleSubmit}>
                <div className="split-layout">
                    <div className="left-column">
                        <FormField
                            id="title"
                            label="Title:"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            error={errors.title}
                            disabled={isSubmitting}
                        />
                        <FormField
                            id="description"
                            label="Description:"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            error={errors.description}
                            disabled={isSubmitting}
                            isTextArea
                        />
                    </div>

                    <div className="right-column">
                        <MyProjectFileUpload
                            file={formData.file}
                            error={errors.file}
                            isSubmitting={isSubmitting}
                            onFileSelect={(file) => setFormData({ ...formData, file })}
                        />
                    </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="submit-button">
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {popupMessage && (
                <div className="popup-message">
                    {popupMessage}
                </div>
            )}
        </div>
    );
};

export default AddProjectCardForm;
