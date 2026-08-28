import React from "react";
import ScrollReveal from "./ScrollReveal";
import "./Contact.css";

function Contact() {
    return (
        <section id="contact" className="gastornis-contact">

            {/* ========================================
                BACKGROUND
            ======================================== */}

            <div className="contact-background">

                <div className="contact-glow-one"></div>
                <div className="contact-glow-two"></div>

                <div className="contact-orbit contact-orbit-one"></div>
                <div className="contact-orbit contact-orbit-two"></div>

                <span className="contact-particle particle-one"></span>
                <span className="contact-particle particle-two"></span>
                <span className="contact-particle particle-three"></span>

            </div>


            {/* ========================================
                MAIN CONTAINER
            ======================================== */}

            <div className="container contact-container">

                <ScrollReveal>

                    <div className="contact-card">

                        {/* ========================================
                            EYEBROW
                        ======================================== */}

                        <div className="contact-eyebrow">

                            <span className="eyebrow-line"></span>

                            LET'S WORK TOGETHER

                            <span className="eyebrow-line"></span>

                        </div>


                        {/* ========================================
                            MAIN TITLE
                        ======================================== */}

                        <h2 className="contact-title">

                            <span className="contact-title-main">
                                Have an idea?
                            </span>


                            <span className="contact-title-build">

                                <span className="build-word">
                                    Let's
                                </span>

                                <span className="build-word">
                                    build
                                </span>

                                <span className="build-word build-highlight">
                                    it.
                                </span>

                            </span>

                        </h2>


                        {/* ========================================
                            DESCRIPTION
                        ======================================== */}

                        <p className="contact-description">
                            Whether you're starting something new or looking
                            to transform an existing idea, GASTORNIS is ready
                            to build something meaningful with you.
                        </p>


                        {/* ========================================
                            BUTTON
                        ======================================== */}

                        <a
    href="/start-project"
    className="contact-button"
>

                            <span className="button-text">
                                Start a Project
                            </span>

                            <span className="button-arrow">
                                ↗
                            </span>

                        </a>


                        {/* ========================================
                            BOTTOM ACCENT
                        ======================================== */}

                        <div className="contact-accent">

                            <span></span>
                            <span></span>
                            <span></span>

                        </div>

                    </div>

                </ScrollReveal>

            </div>

        </section>
    );
}

export default Contact;