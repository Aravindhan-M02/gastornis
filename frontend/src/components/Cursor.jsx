import { useEffect, useState } from "react";
import "./Cursor.css";

function Cursor() {
    const [position, setPosition] = useState({
        x: -100,
        y: -100
    });

    const [particles, setParticles] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorReady, setCursorReady] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e;

            setPosition({
                x: clientX,
                y: clientY
            });

            // Cursor is now ready to display
            setCursorReady(true);

            const interactive = e.target.closest(
                "a, button, input, textarea, select"
            );

            setIsHovering(!!interactive);

            // Create a small particle
            const particle = {
                id: Date.now() + Math.random(),
                x: clientX,
                y: clientY
            };

            setParticles((previous) => [
                ...previous.slice(-10),
                particle
            ]);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setParticles((previous) =>
                previous.slice(1)
            );
        }, 80);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div
                className={`gastornis-cursor ${
                    isHovering ? "cursor-hover" : ""
                } ${cursorReady ? "cursor-ready" : ""}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            >
                <div className="cursor-core"></div>
                <div className="cursor-glow"></div>
            </div>

            <div className="cursor-particles">
                {particles.map((particle) => (
                    <span
                        key={particle.id}
                        className="cursor-particle"
                        style={{
                            left: `${particle.x}px`,
                            top: `${particle.y}px`
                        }}
                    ></span>
                ))}
            </div>
        </>
    );
}

export default Cursor;
