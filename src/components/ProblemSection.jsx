const problems = [
    { icon: '💸', title: 'Expensive Bootcamps', text: 'After 4 years of university, students spend KSH 100K+ on bootcamps to learn what they should have learned during their degree.' },
    { icon: '📚', title: 'Theory vs Practice Gap', text: 'University syllabi focus on theory. Students graduate without portfolios, GitHub profiles, or real-world project experience.' },
    { icon: '⏰', title: 'Wasted Time', text: '6-12 months post-graduation searching for jobs because students lack the practical skills employers actually want.' },
    { icon: '🎯', title: 'No Clear Path', text: "Overwhelmed by scattered YouTube tutorials, online courses, and conflicting advice. No structured roadmap aligned with their degree." },
    { icon: '🔍', title: 'Skills Mismatch', text: 'Employers want React, Docker, AWS. Universities teach outdated tech or focus purely on fundamentals without application.' },
    { icon: '🚫', title: 'Limited Opportunities', text: 'No internship connections, no industry mentorship, no clear bridge from academic life to professional careers.' },
];

export default function ProblemSection() {
    return (
        <section id="problem" className="problem-section">
            <div className="container">
                <div className="section-label">The Problem</div>
                <h2 className="section-title">
                    University teaches theory.<br />
                    Careers demand practice.
                </h2>

                <div className="problem-grid">
                    {problems.map((problem) => (
                        <div className="problem-card" key={problem.title}>
                            <div className="problem-icon">{problem.icon}</div>
                            <h3>{problem.title}</h3>
                            <p>{problem.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
