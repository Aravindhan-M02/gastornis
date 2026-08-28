import ScrollReveal from "./ScrollReveal";
import "./Founder.css";

function Founder() {

    const titleOne = "The person";
    const titleTwo = "behind GASTORNIS.";
    const founderName = "ARAVINDHAN M";

    return (
        <section id="founder" className="gastornis-founder">

            <div className="container">

                <div className="founder-grid">

                    {/* ========================================
                        LEFT SIDE
                    ======================================== */}

                    <ScrollReveal>

                        <div className="founder-content">

                            {/* Section Eyebrow */}

                            <div className="section-eyebrow">
                                THE FOUNDER
                            </div>


                            {/* ========================================
                                FOUNDER TITLE
                            ======================================== */}

                            <h2 className="founder-title">

                                {/* THE PERSON */}

                                <span className="founder-title-line">

                                    {titleOne.split(" ").map((word, wordIndex) => (

                                        <span
                                            className="founder-title-word"
                                            key={wordIndex}
                                        >

                                            {word.split("").map((char, charIndex) => (

                                                <span
                                                    className="founder-letter"
                                                    key={charIndex}
                                                    style={{
                                                        animationDelay: `${(
                                                            wordIndex * 10 +
                                                            charIndex
                                                        ) * 45}ms`
                                                    }}
                                                >
                                                    {char}
                                                </span>

                                            ))}

                                        </span>

                                    ))}

                                </span>


                                {/* BEHIND GASTORNIS */}

                                <span className="founder-title-line founder-gradient">

                                    {titleTwo.split(" ").map((word, wordIndex) => (

                                        <span
                                            className="founder-title-word"
                                            key={wordIndex}
                                        >

                                            {word.split("").map((char, charIndex) => (

                                                <span
                                                    className="founder-letter"
                                                    key={charIndex}
                                                    style={{
                                                        animationDelay: `${(
                                                            titleOne.length +
                                                            wordIndex * 10 +
                                                            charIndex
                                                        ) * 45}ms`
                                                    }}
                                                >
                                                    {char}
                                                </span>

                                            ))}

                                        </span>

                                    ))}

                                </span>

                            </h2>


                            {/* ========================================
                                DESCRIPTION
                            ======================================== */}

                            <p className="founder-description">

                                GASTORNIS was founded with a simple idea —
                                to build meaningful digital experiences by
                                combining technology, creativity and continuous
                                learning.

                            </p>


                            {/* ========================================
                                FOUNDER INFORMATION
                            ======================================== */}

                            <div className="founder-info">

                                <h3 className="founder-name">

                                    {founderName.split(" ").map((word, wordIndex) => (

                                        <span
                                            className="founder-name-word"
                                            key={wordIndex}
                                        >

                                            {word.split("").map((char, charIndex) => (

                                                <span
                                                    className="founder-name-letter"
                                                    key={charIndex}
                                                    style={{
                                                        animationDelay: `${
                                                            (
                                                                wordIndex * 10 +
                                                                charIndex
                                                            ) * 55
                                                        }ms`
                                                    }}
                                                >
                                                    {char}
                                                </span>

                                            ))}

                                        </span>

                                    ))}

                                </h3>


                                <span className="founder-role">
                                    FOUNDER & LEAD DEVELOPER
                                </span>

                            </div>


                            {/* ========================================
                                SOCIAL LINKS
                            ======================================== */}

                            <div className="founder-links">

                                <a
                                    href="https://www.linkedin.com/in/aravindhan-m-off/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="founder-link"
                                >
                                    LinkedIn
                                    <span>↗</span>
                                </a>


                                <a
                                    href="https://github.com/Aravindhan-M02"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="founder-link"
                                >
                                    GitHub
                                    <span>↗</span>
                                </a>

                            </div>

                        </div>

                    </ScrollReveal>


                    {/* ========================================
                        RIGHT SIDE
                    ======================================== */}

                    <div className="founder-visual">

                        <ScrollReveal>

                            <div className="founder-image-wrapper">

                                <img
                                    src="/founder.jpeg"
                                    alt="Aravindhan M - Founder of GASTORNIS"
                                    className="founder-image"
                                />

                            </div>

                        </ScrollReveal>


                        <div className="founder-orbit"></div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Founder;