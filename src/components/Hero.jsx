import { scrollToElement } from "../utils";

const stats = [
  { number: "4", label: "Weeks of Research" },
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
            4 weeks of structured research across 4 Kenyan universities. 50+ students
            surveyed. Full architecture designed. Development is underway with MVP launch
            targeted before August 2026. We are building the platform in the open and
            looking for contributors and partners to make it happen.
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
              href="#building"
              className="btn btn-secondary"
              onClick={(e) => handleClick(e, "building")}
            >
              Contribute or Partner
            </a>
            <a
              href="#research"
              className="btn btn-secondary"
              onClick={(e) => handleClick(e, "research")}
            >
              View Our Research
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
