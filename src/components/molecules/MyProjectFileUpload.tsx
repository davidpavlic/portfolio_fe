import { useCallback } from "react";
import './styling/MyProjectFileUpload.css';

type FileUploadProps = {
    file: File | null;
    error?: string;
    isSubmitting: boolean;
    onFileSelect: (file: File | null) => void;
};

const FileUpload = ({ file, error, isSubmitting, onFileSelect }: FileUploadProps) => {
    const handleDrag = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        onFileSelect(e.dataTransfer.files?.[0] || null);
    }, [onFileSelect]);

    return (
        <div className="file-section">
            <h3>Upload Project Image</h3>
            <label
                className={`drop-zone ${error ? 'has-error' : ''} ${file ? 'has-file' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <div className="drop-content">
                    <div className="upload-icon-wrapper">
                        <svg className="upload-icon" viewBox="0 0 24 24">
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
                        </svg>
                    </div>
                    {file ? (
                        <>
                            <p>{file.name}</p>
                            <p>Click to change file</p>
                        </>
                    ) : (
                        <>
                            <p>Drag & drop your file</p>
                            <p>or browse files</p>
                        </>
                    )}
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
};

export default FileUpload;
