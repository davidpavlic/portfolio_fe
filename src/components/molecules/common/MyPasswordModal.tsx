import { useState } from 'react';
import '../styling/MyPasswordModal.css';

const MyPasswordModal = ({ closeModal, onAuthorized }: { closeModal: () => void, onAuthorized: (success: boolean, password: string) => void }) => {
    const [passwordA, setPasswordA] = useState("");
    const [passwordB, setPasswordB] = useState("");
    const [error, setError] = useState("");

    const CORRECT_A = "abc123";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (passwordA === CORRECT_A) {
            onAuthorized(true, passwordB);
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
                            value={passwordA}
                            onChange={(e) => setPasswordA(e.target.value)}
                            className="my-password-input"
                        />
                    </div>
                    <div className="my-password-input-group">
                        <label>Backend Password:</label>
                        <input
                            type="password"
                            value={passwordB}
                            onChange={(e) => setPasswordB(e.target.value)}
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