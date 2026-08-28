import "./Footer.css";

function Footer() {
    return (
        <footer className="gastornis-footer">

            <div className="footer-container">

                {/* ========================================
                    FOOTER MAIN
                ======================================== */}

                <div className="footer-main">

                    {/* BRAND */}

                    <div className="footer-brand">

                        <a href="#home" className="footer-logo">
                            GASTORNIS
                        </a>

                        <p>
                            Building modern digital experiences,
                            intelligent software, and technology
                            designed for the future.
                        </p>

                        <a href="#contact" className="footer-cta">
                            <span>Start a project</span>
                            <span className="footer-arrow">↗</span>
                        </a>

                    </div>


                    {/* EXPLORE */}

                    <div className="footer-column">

                        <span className="footer-title">
                            Explore
                        </span>

                        <a href="#home">Home</a>
                        <a href="#services">Services</a>
                        <a href="#work">Selected Work</a>
                        <a href="#about">About</a>
                        <a href="#founder">The Founder</a>

                    </div>


                    {/* SERVICES */}

                    <div className="footer-column">

                        <span className="footer-title">
                            Services
                        </span>

                        <a href="#services">Web Development</a>
                        <a href="#services">Backend Systems</a>
                        <a href="#services">Digital Products</a>
                        <a href="#services">Custom Software</a>

                    </div>


                    {/* CONNECT */}

                    <div className="footer-column">

                        <span className="footer-title">
                            Connect
                        </span>

                        <a
                            href="https://www.linkedin.com/company/gastornis/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn <span>↗</span>
                        </a>

                        <a
                            href="https://github.com/GastornisHQ"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub <span>↗</span>
                        </a>

                        <a href="mailto:gastornis.team@gmail.com">
                            Email <span>↗</span>
                        </a>

                    </div>

                </div>


                {/* ========================================
                    FOOTER CONTACT
                ======================================== */}

                <div className="footer-contact">

                    <span className="footer-contact-label">
                        HAVE A PROJECT IN MIND?
                    </span>

                    <a href="#contact" className="footer-contact-link">
                        Let's build something
                        <span>↗</span>
                    </a>

                </div>


                {/* ========================================
                    FOOTER BOTTOM
                ======================================== */}

                <div className="footer-bottom">

                    <span>
                        © 2026 GASTORNIS. All rights reserved.
                    </span>

                    <div className="footer-legal">

                        <a href="#">
                            Privacy Policy
                        </a>

                        <a href="#">
                            Terms
                        </a>

                    </div>

                    <span>
                        Built with curiosity &amp; technology.
                    </span>

                </div>


                {/* ========================================
                    GIANT WORDMARK
                ======================================== */}

                <div className="footer-wordmark" aria-hidden="true">
                    GASTORNIS
                </div>

            </div>

        </footer>
    );
}

export default Footer;