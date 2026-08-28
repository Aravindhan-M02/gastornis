import ScrollReveal from "./ScrollReveal";
import "./Work.css";

function Work() {

    const projects = [
    {
        number: "01",
        title: "British Airways Virtual",
        category: "WEB EXPERIENCE",
        description:
            "A modern virtual airline management platform built for Infinite Flight pilots.",
        year: "2026",
        link: "https://british-airways-virtual.onrender.com/"
    },
    {
        number: "02",
        title: "Thiraipadam",
        category: "WEB APPLICATION",
        description:
            "A movie buy and rent platform with film listings, wishlist functionality and a simulated payment flow.",
        year: "2026",
        link: null
    },
     {
        number: "03",
        title: "Cyberbullying Detection",
        category: "AI · MACHINE LEARNING",
        description:
            "An intelligent platform designed to detect potentially harmful online language using machine learning.",
        year: "2026",
        link: null
    },
    {
        number: "04",
        title: "GenZ Pasanga",
        category: "WEB APPLICATION",
        description:
            "A short film showcase platform using the YouTube Data API for dynamic video content.",
        year: "2026",

        link: null
    },
    {
        number: "05",
        title: "Web Pharmacy",
        category: "WEB APPLICATION",
        description:
            "A responsive pharmacy platform designed to simplify the digital shopping experience.",
        year: "2026",
        link: null
    },
    {
        number: "06",
        title: "Hotel Zevera",
        category: "WEB EXPERIENCE",
        description:
            "A modern hospitality website focused on creating a clean and engaging digital experience.",
        year: "2026",
        link: null
    },
];

    return (
        <section id="work" className="gastornis-work">

            <div className="container">

                <div className="work-heading">

                    <p className="section-eyebrow">
                        SELECTED WORK
                    </p>

                    <h2>
                        Ideas turned into
                        <span> experiences.</span>
                    </h2>

                    <p className="work-intro">
                        A selection of digital experiences and
                        technology projects created with purpose.
                    </p>

                </div>


                <div className="work-list">

                    {projects.map((project, index) => (

    <ScrollReveal
        key={project.number}
        className="work-reveal"
        delay={index * 150}
    >

        <article
            className="work-card"
        >

            <div className="work-card-top">

                <span className="work-number">
                    {project.number}
                </span>

                <span className="work-category">
                    {project.category}
                </span>

                <span className="work-year">
                    {project.year}
                </span>

            </div>


            <div className="work-card-content">

                <h3>
                    {project.title}
                </h3>

                <p>
                    {project.description}
                </p>

    {project.link ? (
    <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="work-button"
    >
        Explore Project
        <span>↗</span>
    </a>
) : (
    <span className="work-button work-unavailable">
        Live Demo Unavailable
    </span>
)}

            </div>


            <div className="work-card-visual">

                <div className="visual-orb"></div>

                <div className="visual-grid"></div>

            </div>

        </article>

    </ScrollReveal>

))}

                </div>

            </div>

        </section>
    );
}

export default Work;