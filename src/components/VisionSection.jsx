const timelineItems = [
    {
        marker: '01',
        title: 'Phase 1: Tech Students (Now)',
        text: 'Starting with students in Computer Science, Mathematics & Computer Science, IT, Information Systems, ICTM, Computer Technology, Software Engineering, and related courses. Upload semester units, get AI-powered roadmaps, and build real portfolios.',
        tags: ['CS', 'IT', 'Software Engineering', 'Information Systems', 'AI Roadmaps', 'Portfolio Building'],
    },
    {
        marker: '02',
        title: 'Phase 2: Internship Matching',
        text: 'Partner with Kenyan tech companies and startups. Match tech students with internships based on their portfolio, skills, and career goals. Direct pipeline from learning to real-world experience.',
        tags: ['Company Partnerships', 'Internship Board', 'Skills Verification', 'Placement Support'],
    },
    {
        marker: '03',
        title: 'Phase 3: Job Placement',
        text: 'Tech students graduate job-ready with verified skills and real experience. Direct hiring partnerships with companies across Kenya and East Africa. No 6-month job search—immediate opportunities.',
        tags: ['Job Board', 'Employer Network', 'Interview Prep', 'Career Coaching'],
    },
    {
        marker: '04',
        title: 'Phase 4: Expand to All Fields',
        text: 'Extend the platform beyond tech to Engineering, Actuarial Science, Mathematical Sciences, Medicine, and more. The same AI-powered roadmap model adapted for every discipline—making EVERY Kenyan student career-ready.',
        tags: ['Engineering', 'Actuarial Science', 'Medicine', 'University Partnerships', 'Pan-African Scale'],
    },
];

export default function VisionSection() {
    return (
        <section id="vision" className="vision-section">
            <div className="container">
                <div className="section-label" style={{ color: 'var(--accent)' }}>The Vision</div>
                <h2 className="section-title" style={{ color: 'white' }}>
                    From Learning to Employment:<br />
                    The Complete Journey
                </h2>

                <div className="vision-timeline">
                    <div className="timeline-line"></div>

                    {timelineItems.map((item) => (
                        <div className="timeline-item" key={item.marker}>
                            <div className="timeline-marker">{item.marker}</div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <div className="timeline-features">
                                    {item.tags.map((tag) => (
                                        <span className="feature-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
