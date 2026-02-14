import { useState } from 'react';
import { scrollToElement } from '../utils';
import logo from '../assets/octalFoundrylogo.jpg';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (e, targetId) => {
        e.preventDefault();
        scrollToElement(targetId);
        setMenuOpen(false);
    };

    return (
        <nav>
            <div className="container">
                <a href="#" className="logo">
                    <img src={logo} alt="Octal Foundry" className="logo-img" />
                    Octal Foundry
                </a>

                <button
                    className={`hamburger${menuOpen ? ' active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
                    <li><a href="#problem" onClick={(e) => handleClick(e, 'problem')}>The Problem</a></li>
                    <li><a href="#solution" onClick={(e) => handleClick(e, 'solution')}>How It Works</a></li>
                    <li><a href="#vision" onClick={(e) => handleClick(e, 'vision')}>Vision</a></li>
                    <li><a href="#join-dev" onClick={(e) => handleClick(e, 'join-dev')}>Join Us</a></li>
                    <li>
                        <a
                            href="#signup"
                            className="btn btn-primary"
                            style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                            onClick={(e) => handleClick(e, 'signup')}
                        >
                            Get Started
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
