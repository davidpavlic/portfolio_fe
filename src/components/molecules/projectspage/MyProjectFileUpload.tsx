import '../styling/MyProjectFileUpload.css';
import { useTranslation } from 'react-i18next';
import { FaCloudArrowUp } from 'react-icons/fa6';


///* TYPE DEFINITION *///
// Defines the expected properties for the MyProjectFileUpload component.
// - file: The currently selected file or null if no file is selected.
// - error: An optional error message string to display if there's an issue with the file upload.
// - isSubmitting: A boolean indicating whether the form submission is in progress (disables file input).
// - onFileSelect: A callback function that handles file selection, accepting a File object or null.
type MyProjectFileUploadProps = {
    file: File | null;
    error?: string;
    isSubmitting: boolean;
    onFileSelect: (file: File | null) => void;
};


///* FUNCTIONAL COMPONENT *///
const MyProjectFileUpload = ({ file, error, isSubmitting, onFileSelect }: MyProjectFileUploadProps) => {
    const { t } = useTranslation();

    return (
        <div>
            <label className='my-project-file-upload-label'>{t('projects_form_card_image')}</label>
            {/* Drop zone area where users can drag & drop or click to select files */}
            <label
                className={`my-project-file-upload-drop-zone ${error ? 'my-project-file-upload-has-error' : ''} ${file ? 'my-project-file-upload-has-file' : ''}`}
                onDragOver={(e) => e.preventDefault()}                              // Prevents browser from opening the dropped file
                onDrop={(e) => {
                    e.preventDefault();                                             // Prevents browser from opening the dropped file
                    onFileSelect(e.dataTransfer.files?.[0] || null);                // Selects first dropped file
                }}
            >
                <div>
                    {/* Cloud Icon in drop down container */}
                    <FaCloudArrowUp className='my-project-file-upload-icon' />
                    {/* test section in drop down container */}
                    <p>
                        {file ? (
                            <>
                                {file.name} <br /> ({t('projects_form_card_added_text')})
                            </>
                        ) : t('projects_form_card_initial_text')}
                    </p>
                </div>
                {/* Hidden file input element that triggers when user clicks the drop zone */}
                <input
                    type='file'
                    onChange={(e) => onFileSelect(e.target.files?.[0] || null)}     // Selects first selected file
                    disabled={isSubmitting}                                         // Disables input when submitting to prevent change
                    accept='.pdf,.png,.jpg,.jpeg'                                   // Restrict file types to these formats
                    hidden                                                          // Hides the default file input UI
                />
            </label>
            {/* Display error message if the file is invalid */}
            {error && <div className='my-project-file-upload-error-message'>{error}</div>}
        </div>
    )
};


///* EXPORT *///
export default MyProjectFileUpload;