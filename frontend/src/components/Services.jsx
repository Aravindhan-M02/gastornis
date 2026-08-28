import ScrollReveal from "./ScrollReveal";
import "./Services.css";

import { useState } from "react";

function Services() {

    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            number: "01",
            title: "Web Development",
            description:
                "Modern, responsive websites designed to turn ideas into digital experiences."
        },
        {
            number: "02",
            title: "Software Development",
            description:
                "Reliable software solutions built around real business requirements."
        },
        {
            number: "03",
            title: "Digital Products",
            description:
                "From concept to launch, we transform ideas into useful digital products."
        },
        {
            number: "04",
            title: "Custom Solutions",
            description:
                "Technology tailored to solve specific problems and create new opportunities."
        }
    ];

    return (
        <section id="services" className="gastornis-services">

            <div className="container">

                <ScrollReveal>

                <div className="services-heading">

                    <p className="section-eyebrow">
                        WHAT WE BUILD
                    </p>

                    <h2>
                        Digital products
                        <span> built to evolve.</span>
                    </h2>

                    <p className="services-intro">
                        We combine technology, design and engineering
                        to create digital experiences that move businesses forward.
                    </p>

                </div>

                </ScrollReveal>


                <div className="services-list">

    {services.map((service, index) => (

        <ScrollReveal
            key={service.number}
            delay={index * 100}
        >

            <div
                className={
                    activeService === index
                        ? "service-item active"
                        : "service-item"
                }

                onMouseEnter={() =>
                    setActiveService(index)
                }

                onMouseLeave={() =>
                    setActiveService(null)
                }

                onClick={() =>
                    setActiveService(
                        activeService === index
                            ? null
                            : index
                    )
                }
            >

                <div className="service-number">
                    {service.number}
                </div>


                <div className="service-info">

                    <h3>
                        {service.title}
                    </h3>

                    <p>
                        {service.description}
                    </p>

                </div>


                <div className="service-arrow">
                    →
                </div>

            </div>

        </ScrollReveal>

    ))}

</div>

</div>

</section>
    );
}

export default Services;