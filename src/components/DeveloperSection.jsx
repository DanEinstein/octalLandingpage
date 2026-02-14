import { scrollToElement } from '../utils';

const perks = [
    { icon: '🚀', title: 'Mission-Driven Impact', text: 'Build something that directly helps thousands of Kenyan students graduate job-ready. Your code changes lives.' },
    { icon: '💡', title: 'Cutting-Edge Tech', text: 'Work with AI/LLMs (Ollama, LangChain), modern web stacks, and build scalable EdTech infrastructure.' },
    { icon: '📈', title: 'Equity & Growth', text: 'Early team members get equity. Grow with the company as we scale across Kenya and East Africa.' },
    { icon: '🤝', title: 'Collaborative Culture', text: "Remote-friendly, flexible hours, learn from peers. We're building a strong dev community in Kenya." },
];

const techBadges = ['Python', 'FastAPI', 'Ollama', 'LangChain', 'PHP', 'MySQL', 'React', 'Bootstrap', 'Docker'];

const roles = [
    { bold: 'Backend Engineers', rest: ' (Python/FastAPI)' },
    { bold: 'Frontend Developers', rest: ' (React/PHP)' },
    { bold: 'AI/ML Engineers', rest: ' (LLM integration)' },
    { bold: 'DevOps Engineers', rest: ' (Deployment/Scale)' },
    { bold: 'Product Designers', rest: ' (UI/UX)' },
];

export default function DeveloperSection() {
    const handleClick = (e, targetId) => {
        e.preventDefault();
        scrollToElement(targetId);
    };

    return (
        <section id="join-dev" className="developer-section">
            <div className="container">
                <div className="section-label">Join the Mission</div>
                <h2 className="section-title">
                    Calling Kenyan Developers:<br />
                    Help Build the Future
                </h2>

                <div className="developer-content">
                    <div className="developer-perks">
                        {perks.map((perk) => (
                            <div className="perk" key={perk.title}>
                                <div className="perk-icon">{perk.icon}</div>
                                <div className="perk-content">
                                    <h4>{perk.title}</h4>
                                    <p>{perk.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="tech-stack">
                        <h4>Tech Stack</h4>
                        <div className="tech-list">
                            {techBadges.map((tech) => (
                                <span className="tech-badge" key={tech}>{tech}</span>
                            ))}
                        </div>

                        <h4 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Roles Needed:</h4>
                        <ul style={{ paddingLeft: '1.5rem', lineHeight: 2 }}>
                            {roles.map((role) => (
                                <li key={role.bold}><strong>{role.bold}</strong>{role.rest}</li>
                            ))}
                        </ul>

                        <a
                            href="#signup"
                            className="btn btn-primary"
                            style={{ width: '100%', marginTop: '2rem', textAlign: 'center' }}
                            onClick={(e) => handleClick(e, 'signup')}
                        >
                            Apply to Join the Team
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
