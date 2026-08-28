import { useEffect, useState } from "react";
import "./ShootingStars.css";

function ShootingStars() {

    const [stars, setStars] = useState([]);

    useEffect(() => {

        let timeout;

        const createStar = () => {

            const id = Date.now() + Math.random();

            const star = {
                id,

                top: Math.random() * 85 + 5,

                left: Math.random() * 100,

                duration: Math.random() * 1.5 + 1
            };


            setStars((currentStars) => [
                ...currentStars,
                star
            ]);


            setTimeout(() => {

                setStars((currentStars) =>
                    currentStars.filter(
                        (item) => item.id !== id
                    )
                );

            }, 3000);


            // New star every 500ms – 1.2s
            const nextDelay =
                Math.random() * 700 + 500;

            timeout = setTimeout(
                createStar,
                nextDelay
            );

        };


        // Start quickly
        timeout = setTimeout(
            createStar,
            500
        );


        return () => {
            clearTimeout(timeout);
        };

    }, []);


    return (

        <div
            className="shooting-stars"
            aria-hidden="true"
        >

            {stars.map((star) => (

                <span
                    key={star.id}
                    className="shooting-star"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        animationDuration: `${star.duration}s`
                    }}
                />

            ))}

        </div>

    );
}

export default ShootingStars;