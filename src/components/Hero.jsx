import { scrollToElement } from '../utils';

const stats = [
    { number: '80K+', label: 'Tech Students in Kenya' },
    { number: 'KSH 0', label: 'Cost for Students' },
    { number: '12', label: 'Week Roadmaps' },
    { number: '100%', label: 'Free for Students' },
];

export default function Hero() {
    const handleClick = (e, targetId) => {
        e.preventDefault();
        scrollToElement(targetId);
    };

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-label">🚀 Building the Future of Education in Kenya</div>
                    <h1>
                        Graduate <span className="highlight">Job-Ready</span><br />
                        No Bootcamp Needed
                    </h1>
                    <p>
                        AI-powered learning roadmaps that transform university theory into career-ready skills—for
                        technology students across Kenya and beyond.
                    </p>
                    <p className="subtitle">
                        Upload your course units. Get personalized projects, curated videos, and skills tracking. Built for
                        tech students, expanding to all majors.
                    </p>
                    <div className="cta-group">
                        <a href="#signup" className="btn btn-primary" onClick={(e) => handleClick(e, 'signup')}>Start Free - Tech Students</a>
                        <a href="#join-dev" className="btn btn-secondary" onClick={(e) => handleClick(e, 'join-dev')}>Join as Developer</a>
                    </div>

                    <div className="stats-grid">
                        {stats.map((stat) => (
                            <div className="stat" key={stat.label}>
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
