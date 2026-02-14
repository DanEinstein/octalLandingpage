const steps = [
    { number: 1, title: 'Upload Your Units', text: 'Submit your course syllabi for the current semester' },
    { number: 2, title: 'AI Analyzes & Matches', text: 'Our AI maps your coursework to industry skills and career goals' },
    { number: 3, title: 'Get Your Roadmap', text: '12-week plan with curated videos, projects, and tasks' },
    { number: 4, title: 'Build & Track', text: 'Complete projects, earn certificates, showcase your skills' },
];

const differentiators = [
    { emoji: '🎯', title: 'Personalized to YOU', text: "Not generic tutorials. AI analyzes YOUR specific courses and creates a roadmap that complements what you're learning in class." },
    { emoji: '✅', title: 'Verified Content', text: 'Curated videos from trusted channels like freeCodeCamp, 3Blue1Brown, and industry experts—no random YouTube rabbit holes.' },
    { emoji: '💼', title: 'Career-Aligned', text: 'Every task builds toward real job requirements. Software Engineer, Data Scientist, DevOps—we map to actual job postings.' },
];

export default function SolutionSection() {
    return (
        <section id="solution" className="solution-section">
            <div className="container">
                <div className="section-label">The Solution</div>
                <h2 className="section-title">
                    Learn alongside your degree.<br />
                    Graduate with a portfolio.
                </h2>

                <div className="solution-visual">
                    <div className="flow-steps">
                        {steps.map((step) => (
                            <div className="flow-step" key={step.number}>
                                <div className="step-number">{step.number}</div>
                                <h4>{step.title}</h4>
                                <p>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>What Makes Octal Foundry Different?</h3>
                    <div className="problem-grid">
                        {differentiators.map((item) => (
                            <div className="problem-card" key={item.title}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{item.emoji} {item.title}</h4>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
