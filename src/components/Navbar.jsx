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
                    <li><a href="#research" onClick={(e) => handleClick(e, 'research')}>Our Research</a></li>
                    <li><a href="#how-it-works" onClick={(e) => handleClick(e, 'how-it-works')}>How It Works</a></li>
                    <li><a href="#building" onClick={(e) => handleClick(e, 'building')}>Building Now</a></li>
                    <li>
                        <a
                            href="#cta"
                            className="btn btn-primary"
                            style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                            onClick={(e) => handleClick(e, 'cta')}
                        >
                            Get Notified
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
