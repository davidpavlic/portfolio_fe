import { useState } from 'react';
import '../styling/MyPasswordModal.css';
import bcrypt from 'bcryptjs'; // Import the bcryptjs library

const MyPasswordModal = ({ closeModal, onAuthorized }: { closeModal: () => void, onAuthorized: (success: boolean, password: string) => void }) => {
    const [frontendPassword, setFrontendPassword] = useState("");
    const [backendPassword, setBackendPassword] = useState("");
    const [error, setError] = useState("");

    const PREFIX = "i_NeeD!!S7cur1ty-";
    const SUFFIX = "justARandom_Suffix";
    const SALT = "$2b$10$HtLKA7MroEjbY2WjKaFVmu";
    const HASH = "$2b$10$HtLKA7MroEjbY2WjKaFVmu6n2hqpqRGM2r4VnNm..dclz21hSTu0W";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const generatedPassword = await bcrypt.hash(PREFIX + frontendPassword + SUFFIX, SALT);
        if (generatedPassword === HASH) {
            onAuthorized(true, backendPassword);
        } else {
            setError("Wrong passwords");
        }
    };

    return (
        <div className="my-password-overlay">
            <div className="my-password-container">
                <button onClick={closeModal} className="my-password-modal-close-button">
                    ✕
                </button>
                <div className="my-password-header">
                    Enter Admin Passwords
                </div>
                <form onSubmit={handleSubmit} className="my-password-form">
                    <div className="my-password-input-group">
                        <label>Frontend Password:</label>
                        <input
                            type="password"
                            value={frontendPassword}
                            onChange={(e) => setFrontendPassword(e.target.value)}
                            className="my-password-input"
                        />
                    </div>
                    <div className="my-password-input-group">
                        <label>Backend Password:</label>
                        <input
                            type="password"
                            value={backendPassword}
                            onChange={(e) => setBackendPassword(e.target.value)}
                            className="my-password-input"
                        />
                    </div>
                    <button type="submit" className="my-password-button">
                        Submit
                    </button>
                    {error && <p className="my-password-error">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default MyPasswordModal;