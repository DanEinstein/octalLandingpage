const steps = [
    {
        number: '1',
        title: 'Upload Your Courses',
        text: 'Share your current semester units—upload a PDF, photo, or just type them in.',
        icon: '📤',
    },
    {
        number: '2',
        title: 'Get Your Roadmap',
        text: 'Our AI creates a personalized 12-week plan with videos, projects, and milestones tailored to your courses.',
        icon: '🗺️',
    },
    {
        number: '3',
        title: 'Build & Graduate Ready',
        text: 'Complete projects, grow your portfolio, earn certificates, and graduate with skills employers actually want.',
        icon: '🎓',
    },
];

export default function ProcessSection() {
    return (
        <section id="process" className="process-section">
            <div className="container">
                <div className="section-label" style={{ textAlign: 'center' }}>How It Works</div>
                <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 4rem' }}>
                    Three Steps to Career-Ready
                </h2>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div className="process-step" key={step.number}>
                            <div className="process-icon">{step.icon}</div>
                            <div className="process-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                            {index < steps.length - 1 && <div className="process-arrow">→</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
