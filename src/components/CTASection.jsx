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
                <div className="section-label" style={{ color: 'var(--accent)' }}>Get Involved</div>
                <h2>Help Us Build the Future of Learning in Africa</h2>
                <p>
                    We are launching before August 2026. Join the waitlist for early access,
                    contribute to the codebase, or partner with us to make this happen.
                </p>
                <p style={{ fontSize: '1.1rem', opacity: 0.85, marginBottom: '2rem' }}>
                    Free for students. Open source. Community-driven.
                </p>

                {submitted ? (
                    <div className="success-message">
                        <div className="success-icon">✓</div>
                        <h3>You are on the list!</h3>
                        <p>We will notify you when Octal Foundry launches. Join our WhatsApp group to follow development and contribute.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                            <a
                                href="https://chat.whatsapp.com/K1ZSSK7MIHm5ZYlenFBNAC"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Join WhatsApp Group
                            </a>
                            <a
                                href="mailto:githukadanson23@gmail.com"
                                className="btn btn-secondary"
                            >
                                Sponsor Us
                            </a>
                        </div>
                    </div>
                ) : (
                    <>
                        <form onSubmit={handleSubmit} className="waitlist-form">
                            <div className="form-row">
                                <input
                                    type="email"
                                    placeholder="Enter your email for launch updates"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="email-input"
                                />
                                <button type="submit" className="btn btn-primary">
                                    Get Early Access
                                </button>
                            </div>
                            <p className="form-note">No spam. We will only email you about launch updates.</p>
                        </form>

                        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                            <p style={{ fontSize: '1rem', opacity: 0.8, marginBottom: '1.5rem' }}>
                                Want to contribute code, funding, or partnerships?
                            </p>
                            <div className="cta-buttons">
                                <a
                                    href="https://chat.whatsapp.com/K1ZSSK7MIHm5ZYlenFBNAC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    Join as Contributor
                                </a>
                                <a
                                    href="mailto:githukadanson23@gmail.com"
                                    className="btn btn-secondary"
                                >
                                    Partner or Sponsor
                                </a>
                                <a
                                    href="https://github.com/DanEinstein"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
