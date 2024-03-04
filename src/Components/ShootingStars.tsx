import '../Styles/ShootingStars.css'

interface PropTypes {
    className?: string;
    numberOfStars: number;
}

export default function ShootingStars({
    className = "",
    numberOfStars = 0
} : PropTypes) {
    const combinedClasses = `skyStars ${className}`;
    const stars = [];

    for (let i = 0; i < numberOfStars; i++) {
        const n = roundMultipleOf(getRandomNumber(0, window.innerWidth + window.innerHeight), 10);
        const position = {
            x: n,
            y: 0
        } 
        if (n > window.innerWidth) {
            position.x = roundMultipleOf(window.innerWidth, 10);
            position.y = n - roundMultipleOf(window.innerWidth, 10);
        }

        // size may be not that important
        const size = roundMultipleOf(getRandomNumber(0, 10), 5);

        stars.push(
            <span key={i} style={{
                width: size, 
                height: size, 
                top: position.y, 
                left: position.x, 
                position: "absolute", 
                background: "white", 
                borderRadius: "50%", 
                boxShadow: "0 0 10 white",
                animationDelay: `${i/3}s`}}></span>
        )
    }

    function getRandomNumber(min : number, max : number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function roundMultipleOf(numero : number, multiple : number) {
        return Math.floor(numero / multiple) * multiple;
    }

    return <>
        <section className={combinedClasses}>
            {stars}
        </section>
    </>
}