import { scrollToElement } from '../utils';

const productLinks = [
    { href: 'solution', label: 'How It Works' },
    { href: 'vision', label: 'Our Vision' },
    { href: 'signup', label: 'Get Started' },
];

const companyLinks = [
    { href: 'problem', label: 'About Us' },
    { href: 'join-dev', label: 'Join the Team' },
    { href: 'signup', label: 'Partner With Us' },
];

export default function Footer() {
    const handleClick = (e, targetId) => {
        e.preventDefault();
        scrollToElement(targetId);
    };

    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Octal Foundry</h4>
                        <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                            Transforming university education into career-ready skills. Built in Kenya, for Africa and the
                            world.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Product</h4>
                        <ul>
                            {productLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={`#${link.href}`} onClick={(e) => handleClick(e, link.href)}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={`#${link.href}`} onClick={(e) => handleClick(e, link.href)}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href={`tel:${import.meta.env.VITE_PHONE || ''}`}>{import.meta.env.VITE_PHONE || 'Phone'}</a></li>
                            <li><a href={`mailto:${import.meta.env.VITE_EMAIL || ''}`}>{import.meta.env.VITE_EMAIL || 'Email'}</a></li>
                            <li><a href={import.meta.env.VITE_WHATSAPP_LINK || ''} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                            <li><a href={import.meta.env.VITE_LINKEDIN_LINK || ''} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Octal Foundry. Made with ❤️ in Maseno, Kenya.</p>
                </div>
            </div>
        </footer>
    );
}
