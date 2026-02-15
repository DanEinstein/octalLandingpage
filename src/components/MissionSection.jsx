const values = [
    {
        icon: '🎯',
        title: 'Mission',
        text: 'To make every Kenyan student career-ready by graduation—no bootcamp, no debt, no wasted time.',
    },
    {
        icon: '🔭',
        title: 'Vision',
        text: 'A future where every university student in Africa graduates with the practical skills, portfolio, and confidence to land their dream job on day one.',
    },
    {
        icon: '💡',
        title: 'Innovation',
        text: 'AI-powered personalization that adapts to your specific courses, career goals, and learning pace—not one-size-fits-all content.',
    },
    {
        icon: '🤝',
        title: 'Community',
        text: 'We believe in growing together. Students, developers, and mentors building a supportive ecosystem across Kenya.',
    },
    {
        icon: '🌍',
        title: 'Accessibility',
        text: 'Completely free for students—always. Companies pay a small token to access and recruit top talent from our platform, keeping education accessible while creating real career opportunities.',
    },
    {
        icon: '🚀',
        title: 'Impact',
        text: 'Every feature we build is measured by one metric: how many students it helps move closer to their career goals.',
    },
];

export default function MissionSection() {
    return (
        <section id="mission" className="mission-section">
            <div className="container">
                <div className="section-label">What Drives Us</div>
                <h2 className="section-title">
                    Mission, Vision &amp; Values
                </h2>

                <div className="values-grid">
                    {values.map((value) => (
                        <div className="value-card" key={value.title}>
                            <div className="value-icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
