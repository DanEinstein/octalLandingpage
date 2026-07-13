import { scrollToElement } from "../utils";

const stats = [
  { number: "3", label: "Weeks of Research" },
  { number: "50+", label: "Survey Responses" },
  { number: "67%", label: "White Space in Student Schedules" },
  { number: "42", label: "African Projects Identified" },
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
          <div className="hero-label">
            Research-Backed. Student-Built. Free.
          </div>
          <h1>
            Learn Skills That <span className="highlight">Match Your Degree</span>
          </h1>
          <p>
            Octal Foundry turns your university timetable into a personalised learning
            plan that fits in the gaps between your classes. No bootcamps. No extra time.
            Just practical skills alongside your degree.
          </p>
          <p className="subtitle">
            We have spent 3 weeks researching how African university students learn,
            surveyed 50+ students, and analysed curricula across 4 Kenyan universities.
            Now we are building.
          </p>
          <div className="cta-group">
            <a
              href="#cta"
              className="btn btn-primary"
              onClick={(e) => handleClick(e, "cta")}
            >
              Join the Waitlist
            </a>
            <a
              href="#research"
              className="btn btn-secondary"
              onClick={(e) => handleClick(e, "research")}
            >
              See Our Research
            </a>
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
