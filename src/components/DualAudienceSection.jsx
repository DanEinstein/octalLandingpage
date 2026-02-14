import { scrollToElement } from '../utils';

const studentFeatures = [
    '✅ AI-powered personalized roadmaps',
    '✅ Curated video content from top creators',
    '✅ Real-world projects for your portfolio',
    '✅ Skills tracking & certificates',
    '✅ Community of fellow students',
    '✅ 100% free — always',
];

const companyFeatures = [
    '✅ Access verified, skilled graduates',
    '✅ Skills-matched intern pipeline',
    '✅ Reduce hiring & training costs',
    '✅ Portfolio-verified candidates',
    '✅ Direct connection to universities',
    '✅ Shape curriculum relevance',
];

export default function DualAudienceSection() {
    const handleClick = (e, targetId) => {
        e.preventDefault();
        scrollToElement(targetId);
    };

    return (
        <section id="for-you" className="dual-section">
            <div className="container">
                <div className="section-label" style={{ textAlign: 'center' }}>Who Is This For?</div>
                <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 4rem' }}>
                    Built for Students. Valued by Employers.
                </h2>

                <div className="dual-grid">
                    <div className="audience-card audience-student">
                        <div className="audience-header">
                            <span className="audience-emoji">🎓</span>
                            <h3>For Students</h3>
                        </div>
                        <p className="audience-tagline">
                            Turn your degree into a career advantage
                        </p>
                        <ul className="audience-features">
                            {studentFeatures.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                        <a
                            href="#signup"
                            className="btn btn-primary"
                            style={{ width: '100%', textAlign: 'center' }}
                            onClick={(e) => handleClick(e, 'signup')}
                        >
                            Start Free Today
                        </a>
                    </div>

                    <div className="audience-card audience-company">
                        <div className="audience-header">
                            <span className="audience-emoji">🏢</span>
                            <h3>For Companies</h3>
                        </div>
                        <p className="audience-tagline">
                            Hire students and graduates who are actually job-ready
                        </p>
                        <ul className="audience-features">
                            {companyFeatures.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                        <a
                            href="#signup"
                            className="btn btn-primary"
                            style={{ width: '100%', textAlign: 'center' }}
                            onClick={(e) => handleClick(e, 'signup')}
                        >
                            Partner With Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
