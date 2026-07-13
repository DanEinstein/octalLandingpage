import { useState } from "react";

export default function CTASection() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
        }
    };

    return (
        <section id="cta" className="cta-section">
            <div className="container">
                <div className="section-label" style={{ color: 'var(--accent)' }}>Get Early Access</div>
                <h2>Ready to Graduate Job-Ready?</h2>
                <p>
                    We are launching before August 2026. Join the waitlist to get early access,
                    exclusive updates, and a chance to shape the platform with your feedback.
                </p>
                <p style={{ fontSize: '1.1rem', opacity: 0.85, marginBottom: '2rem' }}>
                    Free for students. Always.
                </p>

                {submitted ? (
                    <div className="success-message">
                        <div className="success-icon">✓</div>
                        <h3>You are on the list!</h3>
                        <p>We will notify you when Octal Foundry launches. Follow our WhatsApp group for updates.</p>
                        <a
                            href="https://chat.whatsapp.com/K1ZSSK7MIHm5ZYlenFBNAC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ display: 'inline-block', marginTop: '1rem' }}
                        >
                            Join WhatsApp Group
                        </a>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="waitlist-form">
                        <div className="form-row">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="email-input"
                            />
                            <button type="submit" className="btn btn-primary">
                                Get Notified
                            </button>
                        </div>
                        <p className="form-note">No spam. We will only email you about launch updates.</p>
                    </form>
                )}
            </div>
        </section>
    );
}
