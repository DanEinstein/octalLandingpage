const findings = [
  {
    icon: '📊',
    title: 'Survey of 50+ Students',
    text: 'We surveyed university students across Kenya to understand their time use, learning habits, and willingness to adopt an AI-powered learning platform. The results confirmed that tutorial hell and resource overload are the top frustrations.',
    tag: 'Week 1',
  },
  {
    icon: '📚',
    title: 'Curriculum Analysis (4 Universities)',
    text: 'We analysed CS programmes at JKUAT, Maseno, CUK, and Kibabii. Found that mathematics-heavy courses consume 30-45% of credit hours while practical software courses account for only 15-25%.',
    tag: 'Week 3',
  },
  {
    icon: '⏳',
    title: 'White Space Analysis',
    text: 'Real JKUAT timetables were parsed and analysed. A second-year CS student has 27 hours of class per week with 67% white space (free gaps between lectures). That is 4 hours per day available for micro-learning.',
    tag: 'Week 2',
  },
  {
    icon: '🧠',
    title: 'RAG Architecture Specified',
    text: 'We designed the AI pipeline using Gemini Embedding 2 + ChromaDB for Phase 1, migrating to a fine-tuned local model in Phase 2. Free tier supports up to 500 students at near-zero cost.',
    tag: 'Week 2',
  },
  {
    icon: '🌍',
    title: '50 African Project Ideas',
    text: 'We compiled a seed dataset of 50 African-context software project ideas across fintech, agritech, healthtech, edtech, govtech, and e-commerce. Each project solves a real African problem.',
    tag: 'Week 3',
  },
  {
    icon: '📋',
    title: 'Privacy Framework Ready',
    text: 'A full compliance checklist based on the Kenya Data Protection Act 2019 was completed covering consent, data subject rights, breach notification, and cross-border data transfer for the MVP.',
    tag: 'Week 3',
  },
];

export default function ResearchSection() {
    return (
        <section id="research" className="research-section">
            <div className="container">
                <div className="section-label">Our Research</div>
                <h2 className="section-title">
                    3 Weeks of Structured Research.<br />
                    Now We Are Building.
                </h2>
                <p className="section-subtitle">
                    Before writing a single line of platform code, we spent 3 weeks validating
                    every assumption through academic literature, student surveys, curriculum
                    analysis, and technical prototyping. Here is what we found.
                </p>

                <div className="research-grid">
                    {findings.map((item) => (
                        <div className="research-card" key={item.title}>
                            <div className="research-icon">{item.icon}</div>
                            <div className="research-content">
                                <div className="research-tag">{item.tag}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
