import { scrollToElement } from '../utils';

export default function CTASection() {
    const handleClick = (e, targetId) => {
        e.preventDefault();
        scrollToElement(targetId);
    };

    return (
        <section className="cta-section">
            <div className="container">
                <h2>Ready to Graduate Job-Ready?</h2>
                <p>
                    Join the movement to make Kenyan students the most employable in Africa.
                </p>
                <p style={{ fontSize: '1.1rem', opacity: 0.85, marginTop: '0.5rem' }}>
                    Free for students. Companies pay a small token to access top talent.
                </p>
                <div className="cta-buttons">
                    <a href="#signup" className="btn btn-primary" onClick={(e) => handleClick(e, 'signup')}>Start Free - Tech Students</a>
                    <a href="#signup" className="btn btn-secondary" onClick={(e) => handleClick(e, 'signup')}>Join Waitlist - Other Majors</a>
                    <a href="#signup" className="btn btn-secondary" onClick={(e) => handleClick(e, 'signup')}>Hire Talent - Companies</a>
                </div>
            </div>
        </section>
    );
}
