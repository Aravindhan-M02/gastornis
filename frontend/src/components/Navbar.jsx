import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="gastornis-navbar">
            <div className="container">

                {/* Logo */}
                <a className="gastornis-logo" href="/">
                    <img
                        src="/gastornis-logo.png"
                        alt="GASTORNIS Logo"
                    />

                    <span>GASTORNIS</span>
                </a>


                {/* Mobile Menu Button */}
                <button
                    className="gastornis-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <i
                        className={
                            menuOpen
                                ? "bi bi-x-lg"
                                : "bi bi-list"
                        }
                    ></i>
                </button>


                {/* Navigation */}
                <div
                    className={
                        menuOpen
                            ? "gastornis-navigation mobile-open"
                            : "gastornis-navigation"
                    }
                >

                    <a href="#services">Services</a>

                    <a href="#work">Work</a>

                    <a href="#about">About</a>

                    <a href="#founder">The Founder</a>

                    <a href="#contact">Contact</a>

                    <a
                        href="#contact"
                        className="gastornis-nav-button"
                    >
                        Let's Talk <span>→</span>
                    </a>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;