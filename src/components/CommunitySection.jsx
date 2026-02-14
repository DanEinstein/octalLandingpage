const socialLinks = [
    { icon: '💬', title: 'WhatsApp Community', text: 'Join students discussing projects, sharing tips, and supporting each other.', link: import.meta.env.VITE_WHATSAPP_LINK || '#', linkText: 'Join WhatsApp Group', color: '#25D366' },
    { icon: '💼', title: 'LinkedIn', text: 'Connect with us professionally. Company updates, partnerships, and hiring news.', link: import.meta.env.VITE_LINKEDIN_LINK || '#', linkText: 'Follow on LinkedIn', color: '#0077B5' },
];

export default function CommunitySection() {
    return (
        <section id="community" className="community-section">
            <div className="container">
                <div className="section-label" style={{ color: 'var(--accent)' }}>Join the Community</div>
                <h2 className="section-title" style={{ color: 'white' }}>
                    You Don&apos;t Have to Do This Alone
                </h2>
                <p className="community-subtitle">
                    Connect with fellow students, developers, and mentors building the future of education in Kenya.
                </p>

                <div className="community-grid">
                    {socialLinks.map((social) => (
                        <a
                            href={social.link}
                            key={social.title}
                            className="community-card"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="community-icon" style={{ background: social.color }}>
                                {social.icon}
                            </div>
                            <h4>{social.title}</h4>
                            <p>{social.text}</p>
                            <span className="community-link">{social.linkText} →</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
