import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {

    const [heroLoaded, setHeroLoaded] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            setHeroLoaded(true);
        }, 300);

        return () => clearTimeout(timer);

    }, []);

    return (
        <section className="gastornis-hero">

            {/* Animated background */}
            <div className="hero-background">

                <div className="hero-glow hero-glow-one"></div>
                <div className="hero-glow hero-glow-two"></div>

                <div className="hero-orbit orbit-one"></div>
                <div className="hero-orbit orbit-two"></div>

                <div className="hero-dot dot-one"></div>
                <div className="hero-dot dot-two"></div>
                <div className="hero-dot dot-three"></div>

            </div>


            {/* Hero content */}
            <div className="container hero-container">

                <div className="hero-content">

                    {/* Eyebrow - Letter by Letter */}
                    <p
                        className={`hero-eyebrow ${
                            heroLoaded ? "hero-loaded" : ""
                        }`}
                    >

                        {"TECHNOLOGY · DESIGN · EVOLUTION".split("").map(
                            (char, index) => (

                                <span
                                    key={index}
                                    style={{
                                        animationDelay: `${index * 35}ms`
                                    }}
                                >
                                    {char === " "
                                        ? "\u00A0"
                                        : char}
                                </span>

                            )
                        )}

                    </p>


                    {/* Main Heading */}
                    <h1
    className={
        heroLoaded
            ? "hero-loaded"
            : ""
    }
>

    <span className="hero-letter-group">
        {"Technology".split("").map((char, index) => (
            <span
                className="hero-letter"
                key={index}
                style={{
                    animationDelay: `${index * 45}ms`
                }}
            >
                {char}
            </span>
        ))}
    </span>

    {" "}

    <span className="hero-letter-group">
        {"that".split("").map((char, index) => (
            <span
                className="hero-letter"
                key={index}
                style={{
                    animationDelay: `${(index + 10) * 45}ms`
                }}
            >
                {char}
            </span>
        ))}
    </span>

    {" "}

    <span className="hero-letter-group">
        {"moves".split("").map((char, index) => (
            <span
                className="hero-letter"
                key={index}
                style={{
                    animationDelay: `${(index + 14) * 45}ms`
                }}
            >
                {char}
            </span>
        ))}
    </span>

    {" "}

   <span className="hero-letter-group gradient-word">

    <span className="gradient-text">

        {"forward.".split("").map((char, index) => (
            <span
                className="hero-letter"
                key={index}
                style={{
                    animationDelay: `${(index + 19) * 45}ms`
                }}
            >
                {char}
            </span>
        ))}

    </span>

</span>

</h1>


                    {/* Description */}
                    <p
                        className={`hero-description ${
                            heroLoaded
                                ? "hero-description-visible"
                                : ""
                        }`}
                    >
                        We build modern websites, software solutions
                        and digital products for businesses ready to evolve.
                    </p>


                    {/* Buttons */}
                    <div
                        className={`hero-actions ${
                            heroLoaded
                                ? "hero-actions-visible"
                                : ""
                        }`}
                    >

                        <a
                            href="#contact"
                            className="hero-primary-button"
                        >
                            Start a Project
                            <span>→</span>
                        </a>


                        <a
                            href="#work"
                            className="hero-secondary-button"
                        >
                            Explore Our Work
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;