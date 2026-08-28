import { useEffect, useRef } from "react";
import "./ScrollReveal.css";

function ScrollReveal({
    children,
    className = "",
    delay = 0
}) {

    const elementRef = useRef(null);

    useEffect(() => {

        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {

                    element.classList.add("reveal-visible");

                    observer.unobserve(element);

                }

            },
            {
                threshold: 0.15
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };

    }, []);

    return (
        <div
            ref={elementRef}
            className={`scroll-reveal ${className}`}
            style={{
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
}

export default ScrollReveal;