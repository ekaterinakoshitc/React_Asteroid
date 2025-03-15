import { AsteroidCardAction } from "./asteroidCardAction/AsteroidCardAction";
import { AsteroidCardContent } from "./asteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage } from "./asteroidCardImage/AsteroidCardImage";

import styles from './AsteroidCard.module.css';


type AsteroidCardProps= {
    name:string;
    date: string;
    distance:{
        kilometers: number;
        lunar: number;
    },
    size: number;
    isDangerous: boolean;
    selectedDistance: boolean;

}
export const AsteroidCard = (props: AsteroidCardProps) => {
    const {name,date, size, distance, isDangerous, selectedDistance,} = props;

    //const formatDistance = selectedDistance === "km" ? `${distance} км`: `${(distance / 384400).toFixed(2)} лунных дистанций`;

    return (

        <div className={`${styles.card} ${isDangerous ? styles.cardRed: styles.normCard}`}>
            <AsteroidCardImage />
            <AsteroidCardContent name={name} date={date} distance={distance} selectedDistance={selectedDistance}
                                 size={size} isDangerous={false} />
            <AsteroidCardAction isDangerous={isDangerous}  />
        </div>
    );
};

