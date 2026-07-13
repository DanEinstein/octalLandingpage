export default function DevBuilding() {
    return (
        <section id="building" className="developer-section">
            <div className="container">
                <div className="section-label">Building Now</div>
                <h2 className="section-title">
                    Development Is Active.<br />
                    We Need Your Help.
                </h2>

                <div className="developer-content">
                    <div className="developer-perks">
                        <div className="perk">
                            <div className="perk-icon">📋</div>
                            <div className="perk-content">
                                <h4>Research Complete (4 Weeks)</h4>
                                <p>Literature review, competitive analysis, student surveys, curriculum analysis, RAG architecture, YouTube API strategy, timetable parsing, Gemini API evaluation, African projects dataset, privacy compliance, and small model feasibility. All documented and ready for the dev team.</p>
                            </div>
                        </div>
                        <div className="perk">
                            <div className="perk-icon">🚀</div>
                            <div className="perk-content">
                                <h4>MVP Launch Before August 2026</h4>
                                <p>The dev team is actively building. Architecture decisions are documented. Tech stack is validated. We know exactly what we are building and why. The research phase transitions into development this week.</p>
                            </div>
                        </div>
                        <div className="perk">
                            <div className="perk-icon">💻</div>
                            <div className="perk-content">
                                <h4>Built by Students for Students</h4>
                                <p>We understand the problem because we live it every day. Our team is made of Maseno University students who know exactly what their peers need. We are building in the open and welcoming contributors.</p>
                            </div>
                        </div>
                        <div className="perk">
                            <div className="perk-icon">🤝</div>
                            <div className="perk-content">
                                <h4>We Need Contributors</h4>
                                <p>We are looking for developers, designers, and technical writers to join the build. If you are a student or professional who wants to contribute to African EdTech, join our WhatsApp group or reach out.</p>
                            </div>
                        </div>
                        <div className="perk">
                            <div className="perk-icon">💰</div>
                            <div className="perk-content">
                                <h4>We Need Funding and Partners</h4>
                                <p>To scale beyond the MVP, we need funding for cloud infrastructure, API costs at scale, and potential contributor stipends. We are looking for grants, sponsors, and partners who believe in making African students career-ready.</p>
                            </div>
                        </div>
                    </div>

                    <div className="tech-stack">
                        <h4>Validated Tech Stack</h4>
                        <p style={{ marginBottom: '1.5rem', color: '#666', lineHeight: '1.6' }}>
                            Every tool below was researched, compared against alternatives, and
                            selected based on our specific requirements for African students.
                        </p>
                        <div className="tech-list">
                            <span className="tech-badge">React + Vite</span>
                            <span className="tech-badge">FastAPI</span>
                            <span className="tech-badge">Gemini API</span>
                            <span className="tech-badge">Gemma 3:4B (Offline)</span>
                            <span className="tech-badge">ChromaDB</span>
                            <span className="tech-badge">YouTube Data API</span>
                            <span className="tech-badge">Python</span>
                            <span className="tech-badge">Tailwind CSS</span>
                            <span className="tech-badge">PostgreSQL</span>
                            <span className="tech-badge">Docker</span>
                        </div>

                        <div className="dev-cta" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a
                                href="https://chat.whatsapp.com/K1ZSSK7MIHm5ZYlenFBNAC"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}
                            >
                                Join Our WhatsApp Community
                            </a>
                            <a
                                href="mailto:githukadanson23@gmail.com"
                                className="btn btn-secondary"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', background: 'var(--primary)', color: 'white', border: 'none' }}
                            >
                                Sponsor or Partner With Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
