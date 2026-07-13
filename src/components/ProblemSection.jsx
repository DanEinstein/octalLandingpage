const problems = [
  { icon: '🎓', title: 'Theory Heavy, Practice Light', text: 'University syllabi give you strong theory but leave you on your own to build practical skills. Graduates have degrees but no portfolios or real project experience.' },
  { icon: '⏰', title: 'No Time for Extra Learning', text: 'Between lectures, assignments, and personal time, students think they have no room to learn coding or data skills. But our research shows 67% of your day is free time between classes.' },
  { icon: '💰', title: 'Bootcamps Cost KSH 100K+', text: 'The only alternative is expensive bootcamps that cost more than a semester of tuition. And they only run during holidays when you should be resting or gaining work experience.' },
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

                <div className="problem-grid three-col">
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
