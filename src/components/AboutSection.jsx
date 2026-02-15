import { scrollToElement } from '../utils';
import aboutImage from '../assets/struggling_student.png';

export default function AboutSection() {
    const handleClick = (e, targetId) => {
        e.preventDefault();
        scrollToElement(targetId);
    };

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-label">Our Story</div>
                <h2 className="section-title">
                    Built by a Student,<br />
                    for Students.
                </h2>

                <div className="about-grid">
                    <div className="founder-story">
                        <div className="story-quote">&ldquo;</div>
                        <p>
                            I&apos;m Danson Githuka, a Mathematics and Computer Science student at Maseno University.
                            My university gives me a strong theoretical foundation, but when it comes to bridging
                            that knowledge to practical, career-ready skills, I&apos;m left on my own to watch random
                            YouTube tutorials, getting lost in unstructured content, and learning nothing that sticks.
                            The only alternative? Bootcamps that cost over <strong>KSH 100,000</strong>which is a huge amount for me to raise. Also , the only time i can enroll in them is during holidays meaning that i cannot rest from the academic pressure.I believe that during this time i should be gaining real world experience and exposure.
                        </p>
                        <p>
                            Every long holiday, I watch my friends scramble for internships and attachments. Most
                            can&apos;t find any. The few who get them realize they&apos;re not fully prepared and lack
                            the practical skills companies actually need. They end up learning everything
                            from scratch on the job.
                        </p>
                        <div className="highlight-box">
                            <p>
                                <strong>So I decided to build what I wished existed:</strong> a platform that
                                complements your university education by taking your actual courses and turning
                                them into structured, practical learning roadmaps. The platform is completely free for students, AI-powered, and aligned
                                with real career goals.
                            </p>
                        </div>
                        <p>
                            That&apos;s why I&apos;m building <strong>Octal Foundry</strong>and not to replace university
                            education, but to supercharge it. The reality is that I can&apos;t do it alone.
                            I&apos;m calling on <strong>students</strong> who want to get more from their degree,
                            <strong> developers</strong> who want to build something that matters, and
                            <strong> investors</strong> who see the opportunity to transform education in Kenya.
                            Together, we can make this a reality.
                        </p>
                        <div className="founder-info">
                            <div className="founder-name">Danson Githuka</div>
                            <div className="founder-role">Mathematics & Computer Science, Maseno University 🇰🇪</div>
                        </div>
                    </div>

                    <div className="about-image">
                        <img src={aboutImage} alt="Student struggling with unstructured learning" />
                        <div className="impact-stats">
                            <div className="impact-stat-card">
                                <div className="impact-stat-number">100K+</div>
                                <div className="impact-stat-label">KSH bootcamp cost students can&apos;t afford</div>
                            </div>
                            <div className="impact-stat-card">
                                <div className="impact-stat-number">KSH 0</div>
                                <div className="impact-stat-label">What students pay (always free)</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Cards */}
                <div className="mv-grid">
                    <div className="mv-card">
                        <div className="mv-icon">🎯</div>
                        <h3>Mission</h3>
                        <p>
                            Make every Kenyan student career-ready by graduation—no bootcamp,
                            no debt, no wasted holidays.
                        </p>
                    </div>
                    <div className="mv-card">
                        <div className="mv-icon">🌍</div>
                        <h3>Vision</h3>
                        <p>
                            A future where every student graduates with practical skills, a real
                            portfolio, and clear pathways to internships and jobs.
                        </p>
                    </div>
                    <div className="mv-card">
                        <div className="mv-icon">💡</div>
                        <h3>Values</h3>
                        <ul className="mv-values-list">
                            <li><strong>Free for Students:</strong> Companies pay a small token to recruit talent, keeping it free for learners</li>
                            <li><strong>Africa-First:</strong> Built by students, for students</li>
                            <li><strong>Real Impact:</strong> Measured by jobs, not signups</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="about-cta">
                    <h3>Be Part of the Solution</h3>
                    <p>
                        Student, developer, or investor—let&apos;s fix this together.
                    </p>
                    <div className="about-cta-buttons">
                        <a href="#signup" className="btn btn-primary" onClick={(e) => handleClick(e, 'signup')}>
                            Join the Waitlist
                        </a>
                        <a href="#join-dev" className="btn btn-secondary" onClick={(e) => handleClick(e, 'join-dev')}>
                            Join as Developer
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}