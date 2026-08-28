import ScrollReveal from "./ScrollReveal";
import "./About.css";

function About() {

    return (
        <section id="about" className="gastornis-about">

            <div className="container">

                <div className="about-grid">

                    <ScrollReveal>

                    <div className="about-label">

                        <p className="section-eyebrow">
                            ABOUT GASTORNIS
                        </p>

                    </div>

                    </ScrollReveal>

                    <ScrollReveal delay={150}>

                    <div className="about-content">

                        <h2>
                            Technology should
                            <span> move forward.</span>
                        </h2>

                        <p>
                            GASTORNIS is a technology and digital
                            solutions company focused on building
                            modern experiences, software and products
                            that help ideas evolve into something real.
                        </p>

                        <p>
                            We believe great technology is not simply
                            about writing code. It is about understanding
                            problems, designing better experiences and
                            building solutions that create lasting value.
                        </p>

                        <ScrollReveal>

                        <div className="about-statement">

                            <span>01</span>

                            <p>
                                BUILD WITH PURPOSE.
                            </p>

                        </div>

                        </ScrollReveal>

                        <ScrollReveal>


                        <div className="about-statement">

                            <span>02</span>

                            <p>
                                DESIGN FOR PEOPLE.
                            </p>

                        </div>

                        </ScrollReveal>

                        <ScrollReveal>

                        <div className="about-statement">

                            <span>03</span>

                            <p>
                                ALWAYS EVOLVE.
                            </p>

                        </div>

                        </ScrollReveal>

                    </div>
                    </ScrollReveal>

                </div>

            </div>

        </section>
    );
}

export default About;