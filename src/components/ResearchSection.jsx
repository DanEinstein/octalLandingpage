const findings = [
  {
    icon: '📊',
    title: 'Student Survey (50+ Responses)',
    text: 'We surveyed university students across Kenya on time use, learning habits, and willingness to adopt AI-powered learning. Tutorial hell and resource overload are the top frustrations. Results confirm strong demand for a platform like Octal Foundry.',
    tag: 'Week 1',
  },
  {
    icon: '📚',
    title: 'Curriculum Analysis (4 Universities)',
    text: 'Analysed CS programmes at JKUAT, Maseno, CUK, and Kibabii. Mathematics-heavy courses consume 30-45% of credit hours while practical software courses account for only 15-25%. This confirms the theory-practice gap is structural, not individual.',
    tag: 'Week 3',
  },
  {
    icon: '⏳',
    title: 'White Space Analysis',
    text: 'Real JKUAT timetables were parsed and analysed. A second-year CS student has 27 hours of class per week with 67% white space (free gaps between lectures). That is roughly 4 hours per day available for micro-learning sessions of 15-45 minutes.',
    tag: 'Week 2',
  },
  {
    icon: '🧠',
    title: 'RAG Architecture Designed',
    text: 'Full AI pipeline specified using Gemini Embedding 2 + ChromaDB for Phase 1, migrating to a fine-tuned Gemma 3:4B local model in Phase 2. Free tier supports up to 500 students at near-zero infrastructure cost. Ollama models already installed for offline fallback.',
    tag: 'Week 2',
  },
  {
    icon: '🌍',
    title: '50 African Project Ideas Compiled',
    text: 'Seed dataset of 50 African-context software projects across fintech, agritech, healthtech, edtech, govtech, and e-commerce. Each project solves a real African problem from M-Pesa payment wrappers to boda boda safety trackers.',
    tag: 'Week 3',
  },
  {
    icon: '📋',
    title: 'Privacy Compliance Mapped',
    text: 'Full compliance checklist based on the Kenya Data Protection Act 2019. Covers ODPC registration, consent flows, data subject rights, breach notification, cross-border data transfer with Gemini API, and retention schedules.',
    tag: 'Week 4',
  },
  {
    icon: '🤖',
    title: 'Small Model Feasibility Confirmed',
    text: 'Evaluated Gemma 3:1B and 3:4B for offline AI capability. Gemma 3:4B can handle 70% of student interactions offline. LoRA fine-tuning possible on Google Colab free tier for under $10. Viable fallback when internet is unavailable.',
    tag: 'Week 4',
  },
  {
    icon: '📄',
    title: 'Academic Paper in Progress',
    text: 'Structuring the complete research paper titled "Reclaiming the White Spaces: An AI-Powered Micro-Learning Framework for Practical Skill Acquisition Within University Timetable Gaps in African Higher Education." IEEE format ready for submission.',
    tag: 'Week 4',
  },
];

export default function ResearchSection() {
    return (
        <section id="research" className="research-section">
            <div className="container">
                <div className="section-label">Research</div>
                <h2 className="section-title">
                    4 Weeks of Research. Dozens of Findings.<br />
                    Now We Are Building.
                </h2>
                <p className="section-subtitle">
                    Before writing platform code, we spent 4 weeks validating every assumption
                    through academic literature, student surveys, curriculum analysis, technical
                    prototyping, privacy compliance, and model evaluation. Every finding
                    directly shapes what we are building.
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
