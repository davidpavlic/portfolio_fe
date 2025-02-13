import './styling/MyProjectFileUpload.css';
import { FaCloudArrowUp } from "react-icons/fa6";


///* TYPE DEFINITION *///
// Defines the expected properties for the MyProjectFileUpload component.
// - file: The currently selected file or null if no file is selected.
// - error: An optional error message string to display if there's an issue with the file upload.
// - isSubmitting: A boolean indicating whether the form submission is in progress (disables file input).
// - onFileSelect: A callback function that handles file selection, accepting a File object or null.
type FileUploadProps = {
    file: File | null;
    error?: string;
    isSubmitting: boolean;
    onFileSelect: (file: File | null) => void;
};


///* FUNCTIONAL COMPONENT *///
const FileUpload = ({ file, error, isSubmitting, onFileSelect }: FileUploadProps) => (
    <div>
        <label className="my-project-card-label">Upload Project Image:</label>
        <label
            className={`drop-zone ${error ? 'has-error' : ''} ${file ? 'has-file' : ''}`}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                e.preventDefault();
                onFileSelect(e.dataTransfer.files?.[0] || null);
            }}
        >
            <div className="drop-content">
                <div className="upload-icon-wrapper">
                    <FaCloudArrowUp className="upload-icon" />
                </div>
                <p>
                    {file ? (
                        <>
                            {file.name} <br /> (Click to change file)
                        </>
                    ) : (
                        "Drag & drop your file or browse files"
                    )}                </p>
            </div>
            <input
                type="file"
                onChange={(e) => onFileSelect(e.target.files?.[0] || null)}
                disabled={isSubmitting}
                accept=".pdf,.png,.jpg,.jpeg"
                hidden
            />
        </label>
        {error && <div className="error-message">{error}</div>}
    </div>
);


///* EXPORT *///
export default FileUpload;