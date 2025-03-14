import { AsteroidCardAction } from "./asteroidCardAction/AsteroidCardAction"; // Убедитесь, что путь правильный
import { AsteroidCardContent } from "./asteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage } from "./asteroidCardImage/AsteroidCardImage";
import styles from "./AsteroidCard.module.css";

export const AsteroidCard = (props) => {
    const {name, date, distance, size, isDangerous, selectedDistance} = props;

    const formatDistance = selectedDistance === "km" ? `${distance} км`: `${(distance / 384400).toFixed(2)} лунных дистанций`;

    return (

        <div className={`${styles.card} ${isDangerous ? styles.cardRed: styles.normCard}`}>
            <AsteroidCardImage />
            <AsteroidCardContent name={name} date={date} distance={formatDistance} size={size} />
            <AsteroidCardAction isDangerous={isDangerous}  />
        </div>
    );
};

