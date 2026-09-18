import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import "./Founder.css";

/* =========================================================
   TEAM DATA
   Add / edit people here only.
   ========================================================= */

const TEAM = [
    {
        id: "aravindhan",
        eyebrow: "THE FOUNDER",
        titleOne: "The person",
        titleTwo: "behind GASTORNIS.",
        description:
            "GASTORNIS was founded with a simple idea — to build meaningful digital experiences by combining technology, creativity and continuous learning.",
        name: "ARAVINDHAN M",
        role: "FOUNDER & CEO",
        image: "/Founder80s.jpeg",
        alt: "Aravindhan M - Founder of GASTORNIS",
        links: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/aravindhan-m-off/"
            },
            {
                label: "GitHub",
                url: "https://github.com/Aravindhan-M02"
            }
        ],
        switchLabel: "Meet the CPO"
    },

    {
        id: "girinath",
        eyebrow: "THE CPO",
        titleOne: "The person",
        titleTwo: "Behind GASTORNIS.",
        description:
            "Turning the vision into working interfaces — building fast, responsive React front-ends with clean components, smooth animations and a focus on real user experience.",
        name: "GIRINATH",
        role: "Chief Product Officer",
        image: "/Girinath.jpeg",
        alt: "Girinath - Chief Product Officer at GASTORNIS",
        links: [
            {
                /* TODO: replace with your real profile URLs */
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/girinathe/"
            },
            {
                label: "GitHub",
                url: "https://github.com/girinath22"
            }
        ],
        switchLabel: "Back to the founder"
    }
];

/* =========================================================
   LETTER SPLIT HELPER
   Used for the title and the name — splits text into
   words, then letters, so each letter can animate with
   its own delay.
   ========================================================= */

function SplitText({ text, wordClass, letterClass, step, offset = 0 }) {
    return text.split(" ").map((word, wordIndex) => (
        <span className={wordClass} key={wordIndex}>
            {word.split("").map((char, charIndex) => (
                <span
                    className={letterClass}
                    key={charIndex}
                    style={{
                        animationDelay: `${(offset + wordIndex * 10 + charIndex) * step
                            }ms`
                    }}
                >
                    {char}
                </span>
            ))}
        </span>
    ));
}

function Founder() {
    /* Index of the person currently on screen (0 = founder, 1 = developer) */
    const [activeIndex, setActiveIndex] = useState(0);

    /* True for ~700ms right after a switch — drives the ring/orbit flash */
    const [switching, setSwitching] = useState(false);

    const person = TEAM[activeIndex];
    const nextPerson = TEAM[(activeIndex + 1) % TEAM.length];

    const handleSwitch = (nextIndex) => {
        if (nextIndex === activeIndex) return;

        setSwitching(true);
        setActiveIndex(nextIndex);

        window.setTimeout(() => setSwitching(false), 700);
    };

    const handleToggle = () => {
        handleSwitch((activeIndex + 1) % TEAM.length);
    };

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

                            <div
                                className="section-eyebrow"
                                key={`eyebrow-${person.id}`}
                            >
                                {person.eyebrow}
                            </div>

                            {/* ========================================
                                FOUNDER / DEVELOPER TITLE
                                key = person.id so the letter-reveal
                                animation replays every switch
                            ======================================== */}

                            <h2 className="founder-title" key={`title-${person.id}`}>
                                <span className="founder-title-line">
                                    <SplitText
                                        text={person.titleOne}
                                        wordClass="founder-title-word"
                                        letterClass="founder-letter"
                                        step={45}
                                    />
                                </span>

                                <span className="founder-title-line founder-gradient">
                                    <SplitText
                                        text={person.titleTwo}
                                        wordClass="founder-title-word"
                                        letterClass="founder-letter"
                                        step={45}
                                        offset={person.titleOne.length}
                                    />
                                </span>
                            </h2>

                            {/* ========================================
                                DESCRIPTION
                            ======================================== */}

                            <p
                                className="founder-description founder-fade-swap"
                                key={`desc-${person.id}`}
                            >
                                {person.description}
                            </p>

                            {/* ========================================
                                NAME + ROLE
                            ======================================== */}

                            <div className="founder-info">
                                <h3 className="founder-name" key={`name-${person.id}`}>
                                    <SplitText
                                        text={person.name}
                                        wordClass="founder-name-word"
                                        letterClass="founder-name-letter"
                                        step={55}
                                    />
                                </h3>

                                <span
                                    className="founder-role founder-role-swap"
                                    key={`role-${person.id}`}
                                >
                                    {person.role}
                                </span>
                            </div>

                            {/* ========================================
                                SOCIAL LINKS
                            ======================================== */}

                            <div
                                className="founder-links founder-fade-swap"
                                key={`links-${person.id}`}
                            >
                                {person.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="founder-link"
                                    >
                                        {link.label}
                                        <span>↗</span>
                                    </a>
                                ))}
                            </div>

                            {/* ========================================
                                SWITCH BUTTON
                            ======================================== */}

                            <div className="founder-switch">
                                <button
                                    type="button"
                                    className="founder-switch-btn"
                                    onClick={handleToggle}
                                    aria-label={`Show ${nextPerson.name}`}
                                >
                                    <span
                                        className="founder-switch-text"
                                        key={`switch-${person.id}`}
                                    >
                                        {person.switchLabel}
                                    </span>

                                    <span className="founder-switch-icon">⇄</span>
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* ========================================
                        RIGHT SIDE — PHOTO
                        Clicking the photo also switches (same
                        as the button / dots).
                    ======================================== */}

                    <div className="founder-visual">
                        <ScrollReveal>
                            <div
                                className={`founder-image-wrapper founder-image-clickable ${switching ? "is-switching" : ""
                                    }`}
                                onClick={handleToggle}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        handleToggle();
                                    }
                                }}
                                aria-label={`Show ${nextPerson.name}`}
                            >
                                <div className="founder-image-stack">
                                    {TEAM.map((member, index) => (
                                        <img
                                            key={member.id}
                                            src={member.image}
                                            alt={member.alt}
                                            className={`founder-image founder-image-layer ${index === activeIndex ? "is-active" : ""
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <div
                            className={`founder-orbit ${switching ? "is-switching" : ""}`}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Founder;