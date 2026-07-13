export default function DevBuilding() {
    return (
        <section id="building" className="developer-section">
            <div className="container">
                <div className="section-label">Building Now</div>
                <h2 className="section-title">
                    Research Complete.<br />
                    MVP Under Development.
                </h2>

                <div className="developer-content">
                    <div className="developer-perks">
                        <div className="perk">
                            <div className="perk-icon">📋</div>
                            <div className="perk-content">
                                <h4>Research Phase Done</h4>
                                <p>3 weeks of structured research covering literature review, competitive analysis, student surveys, curriculum analysis, RAG architecture, YouTube API strategy, timetable parsing, Gemini API evaluation, African projects dataset, privacy compliance, and small model feasibility.</p>
                            </div>
                        </div>
                        <div className="perk">
                            <div className="perk-icon">🚀</div>
                            <div className="perk-content">
                                <h4>MVP Launch Before August 2026</h4>
                                <p>The dev team is actively building. Architecture decisions are documented. Tech stack is validated. We know what we are building and why.</p>
                            </div>
                        </div>
                        <div className="perk">
                            <div className="perk-icon">💻</div>
                            <div className="perk-content">
                                <h4>Built by Students for Students</h4>
                                <p>We understand the problem because we live it every day. Our team is made of Maseno University students who know exactly what their peers need.</p>
                            </div>
                        </div>
                        <div className="perk">
                            <div className="perk-icon">🤝</div>
                            <div className="perk-content">
                                <h4>Join the Community</h4>
                                <p>Over 50+ students have already contributed through surveys and interviews. Join our WhatsApp group to follow development and get early access.</p>
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
                        </div>
                        <div className="dev-cta" style={{ marginTop: '2rem' }}>
                            <a
                                href="https://chat.whatsapp.com/K1ZSSK7MIHm5ZYlenFBNAC"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                Join WhatsApp Group
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
