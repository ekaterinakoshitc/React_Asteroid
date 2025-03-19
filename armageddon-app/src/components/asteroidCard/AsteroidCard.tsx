import { AsteroidCardAction } from './asteroidCardAction/AsteroidCardAction';
import { AsteroidCardContent } from './asteroidCardContent/AsteroidCardContent';
import { AsteroidCardImage } from './asteroidCardImage/AsteroidCardImage';

import styles from './AsteroidCard.module.css';
import { useContext } from 'react';
import { AsteroidCardContentContainer } from './asteroidCardContent/AsteroidCardContentContainer';
import { AsteroidsContext } from '../asteroids_context/AsteroidsContext';
import { AsteroidCardDinoImage } from './asteroidCardDinoImage/DinoImage';

type AsteroidCardProps = {
  name: string;
  date: string;
  distance: {
    kilometers: number;
    lunar: number;
  };
  size: number;
  isDangerous: boolean;
  selectedDistance: boolean;
};
export const AsteroidCard = (props: AsteroidCardProps) => {
  const { name, date, size, distance, isDangerous } = props;

  //const formatDistance = selectedDistance === "km" ? `${distance} км`: `${(distance / 384400).toFixed(2)} лунных дистанций`;
  const { addAsteroid } = useContext(AsteroidsContext);

  return (
    <div
      className={`${styles.card} ${isDangerous ? styles.cardRed : styles.normCard}`}
    >
      <AsteroidCardDinoImage />
      <AsteroidCardImage size={size} />
      <AsteroidCardContentContainer
        name={name}
        date={date}
        distance={distance}
        size={size}
        isDangerous={false}
      />
      <AsteroidCardAction
        isDangerous={isDangerous}
        onClick={() => addAsteroid(props)}
      />
    </div>
  );
};
