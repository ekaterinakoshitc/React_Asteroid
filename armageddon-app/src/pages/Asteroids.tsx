import { Header } from '../components/header/Header';
import styles from './Asteroids.module.css';
import { AsteroidCard } from '../components/asteroidCard/AsteroidCard';
import { Asteroid } from './Asteroid';
import { useContext, useEffect, useState } from 'react';
import { AsteroidsContext } from '../components/asteroids_context/AsteroidsContext';
import { getUserKey } from '../utils/getUserKey';

export const Asteroids = () => {
  {
    /*const asteroids = [
                    { name: "first", isDangerous: true },
                    { name: "second", isDangerous: false }
                ];*/
  }

  const [asteroids, setAsteroids] = useState<
    {
      name: string;
      date: string;
      distance: {
        kilometers: number;
        lunar: number;
      };
      size: number;
      id: string;
      isDangerous: boolean;
    }[]
  >([]);

  const [selectedButtonDist, setselectedButtonDist] = useState(true);

  useEffect(() => {
    try {
      const response = fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=2001-01-01&end_date=2001-01-07&api_key=${getUserKey()}`
      )
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          //const data = await response.json();
          let rawAsteroids = [];
          for (const date in response.near_earth_objects) {
            rawAsteroids = rawAsteroids.concat(
              response.near_earth_objects[date]
            );
          }

          const asteroids = rawAsteroids.map((item) => {
            const size = Math.trunc(
              (item.estimated_diameter.meters.estimated_diameter_max +
                item.estimated_diameter.meters.estimated_diameter_min) /
                2
            );
            const close = item.close_approach_data[0];

            return {
              name: item.name,
              date: close.close_approach_date, // Исправлено здесь
              distance: {
                kilometers: close.miss_distance.kilometers,
                lunar: close.miss_distance.lunar,
              },
              size,
              isDangerous: item.is_potentially_hazardous_asteroid,
              id: item.id,
            };
          });
          setAsteroids(asteroids);
        });
    } catch (error) {
      console.log(error);
      setAsteroids(generateAsteroids());
    }

    //fetchData();
  }, []);

  const { onlyDangerous, setOnlyDangerous } = useContext(AsteroidsContext);
  const { selectedDistance, setSelectedDistance } =
    useContext(AsteroidsContext);

  return (
    <div>
      <Header />
      <div className={styles.showDangerousOnly}>
        <input
          type="checkbox"
          value={onlyDangerous as unknown as string}
          onChange={() => setOnlyDangerous(!onlyDangerous)}
        />
        Показать только опасные
      </div>
      <div className={styles.button_container}>
        Расстояние
        <button
          style={{
            fontWeight:
              selectedDistance && setselectedButtonDist ? 'bold' : 'normal',
          }}
          className={styles.distance_button}
          onClick={() => {
            setSelectedDistance(true);
            setselectedButtonDist(false);
          }}
        >
          в километрах
        </button>
        ,
        <button
          style={{
            fontWeight:
              !selectedDistance && selectedButtonDist ? 'bold' : 'normal',
          }}
          className={styles.distance_button}
          onClick={() => {
            setSelectedDistance(false);
            setselectedButtonDist(true);
          }}
        >
          в дистанциях до луны
        </button>
      </div>

      {onlyDangerous
        ? asteroids
            .filter((it) => it.isDangerous)
            .map((item) => (
              <AsteroidCard
                key={item.id}
                {...item}
                selectedDistance={selectedDistance}
              />
            ))
        : asteroids.map((item) => (
            <AsteroidCard
              key={item.id}
              {...item}
              selectedDistance={selectedDistance}
            />
          ))}
    </div>
  );
};

const generateAsteroids = () => {
  const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const result = [];
  for (let i = 0; i < 10; i++) {
    const name =
      characters[(Math.random() * 25).toFixed(0)] +
      characters[(Math.random() * 25).toFixed()];
    const date = `${(Math.random() * 27 + 1).toFixed(0)} ${months[(Math.random() * 11).toFixed()]}`;
    const size = (Math.random() * 100 + 10).toFixed(0);
    const distance = (Math.random() * 9000000000).toFixed(0);
    const isDangerous = Math.random() >= 0.5;
    result.push({ name, date, distance, size, isDangerous, id: name });
  }
  return result;
};
