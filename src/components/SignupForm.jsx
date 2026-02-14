import { useState } from 'react';

// Google Apps Script URL loaded from .env (VITE_ prefix required by Vite)
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export default function SignupForm() {
    const [formData, setFormData] = useState({
        user_type: '',
        name: '',
        email: '',
        phone: '',
        university: '',
        message: '',
        newsletter: false,
    });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const payload = {
                ...formData,
                newsletter: formData.newsletter ? 'Yes' : 'No',
                timestamp: new Date().toLocaleString(),
            };

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            // With no-cors we can't read the response, but if no error was thrown the request was sent
            setStatus('success');
            setFormData({
                user_type: '',
                name: '',
                email: '',
                phone: '',
                university: '',
                message: '',
                newsletter: false,
            });
        } catch (err) {
            console.error('Submission error:', err);
            setStatus('error');
        }
    };

    return (
        <section id="signup" className="form-section">
            <div className="container">
                <div className="form-card">
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Get Early Access</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>
                        Join as a student, developer, or investor. Let&apos;s build the future together.
                    </p>

                    {status === 'success' ? (
                        <div style={{
                            textAlign: 'center',
                            padding: '3rem 1rem',
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Thank you for your interest!</h3>
                            <p style={{ color: '#666', marginBottom: '2rem' }}>We&apos;ll be in touch soon.</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => setStatus('idle')}
                            >
                                Submit Another Response
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>I am a...</label>
                                <select name="user_type" required value={formData.user_type} onChange={handleChange}>
                                    <option value="">Select...</option>
                                    <option value="student">Tech Student (Start Learning)</option>
                                    <option value="developer">Developer (Join the Team)</option>
                                    <option value="investor">Investor/Partner</option>
                                    <option value="other-student">Student (Other Field - Waitlist)</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" required value={formData.name} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Phone Number (Optional)</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label>University / Organization</label>
                                <input
                                    type="text"
                                    name="university"
                                    placeholder="e.g., University of Nairobi"
                                    value={formData.university}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Tell us more (Optional)</label>
                                <textarea
                                    name="message"
                                    placeholder="What excites you about Octal Foundry? What skills do you bring? What do you hope to achieve?"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="form-group checkbox-group">
                                <input
                                    type="checkbox"
                                    id="newsletter"
                                    name="newsletter"
                                    checked={formData.newsletter}
                                    onChange={handleChange}
                                />
                                <label htmlFor="newsletter">Send me updates about Octal Foundry&apos;s progress</label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', fontSize: '1.2rem' }}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Submitting...' : 'Submit'}
                            </button>

                            {status === 'error' && (
                                <p style={{ textAlign: 'center', marginTop: '1rem', color: '#e74c3c', fontWeight: 600 }}>
                                    Something went wrong. Please try again.
                                </p>
                            )}

                            <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
                                By submitting, you agree to join our community and receive occasional updates.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
