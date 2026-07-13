const steps = [
  {
    number: 1,
    title: "Upload Your Timetable",
    text: "Upload a PDF of your university timetable or enter it manually. Our system analyses your schedule and finds the white spaces between your classes.",
  },
  {
    number: 2,
    title: "AI Generates Your Roadmap",
    text: "Tell us what skill you want to learn (Python, web dev, data science, mobile dev). Our AI creates a 12-week personalised plan that fits into your specific time gaps.",
  },
  {
    number: 3,
    title: "Learn in 15-45 Minute Sessions",
    text: "Each day you get a curated video and a micro-task that fits exactly into your free time. No more searching for what to learn next.",
  },
  {
    number: 4,
    title: "Build Projects & Track Progress",
    text: "Complete weekly projects from our African-context dataset. Submit via GitHub. Build a portfolio that proves your skills to employers.",
  },
];

const differentiators = [
  {
    emoji: "🎯",
    title: "Personalised to Your Degree",
    text: "Your roadmap is built around your actual university courses. What you learn in class and what you build with us reinforce each other.",
  },
  {
    emoji: "⏳",
    title: "Fits Your Schedule, Not the Other Way",
    text: "No fixed class times. The platform adapts to your gaps. Micro-learning sessions of 15-45 minutes backed by research showing 20-30% better retention.",
  },
  {
    emoji: "🌍",
    title: "African Context, Not Copy-Paste",
    text: "Projects are grounded in African problems. Build M-Pesa payment wrappers, farm market price trackers, and boda boda safety apps. Not another to-do list.",
  },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="solution-section">
            <div className="container">
                <div className="section-label">How It Works</div>
                <h2 className="section-title">
                    Four Steps From Timetable<br />
                    to Job-Ready Skills.
                </h2>

                <div className="solution-visual">
                    <div className="flow-steps">
                        {steps.map((step) => (
                            <div className="flow-step" key={step.number}>
                                <div className="step-number">{step.number}</div>
                                <h4>{step.title}</h4>
                                <p>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <h3 className="text-center" style={{ fontSize: '2rem', marginTop: '4rem', marginBottom: '3rem' }}>
                    What Makes Octal Foundry Different
                </h3>

                <div className="differentiators-grid">
                    {differentiators.map((item) => (
                        <div className="perk" key={item.title}>
                            <div className="perk-icon">{item.emoji}</div>
                            <div className="perk-content">
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
