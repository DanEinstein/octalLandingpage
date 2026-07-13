import logo from '../assets/octalFoundrylogo.jpg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src={logo} alt="Octal Foundry" className="footer-logo" />
                        <h3>Octal Foundry</h3>
                        <p>Making African university students career-ready by graduation.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <a href="#problem">The Problem</a>
                        <a href="#research">Our Research</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#building">Building Now</a>
                        <a href="#cta">Get Early Access</a>
                    </div>

                    <div className="footer-links">
                        <h4>Connect</h4>
                        <a href="mailto:githukadanson23@gmail.com">Email Us</a>
                        <a href="https://linkedin.com/in/dansongithuka" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/DanEinstein" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://chat.whatsapp.com/K1ZSSK7MIHm5ZYlenFBNAC" target="_blank" rel="noopener noreferrer">WhatsApp Group</a>
                    </div>

                    <div className="footer-research">
                        <h4>Research</h4>
                        <p>3 weeks of structured research across 4 Kenyan universities. Survey of 50+ students. 42 African projects identified. Full privacy compliance mapped.</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Built with ❤️ in Maseno, Kenya. Free for students. Always.</p>
                    <p>&copy; 2026 Octal Foundry. Research paper under development.</p>
                </div>
            </div>
        </footer>
    );
}
