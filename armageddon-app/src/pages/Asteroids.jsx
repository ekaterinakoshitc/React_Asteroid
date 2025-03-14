import {Header} from "../components/header/Header";
import styles from "./Asteroids.module.css";
import { AsteroidCard, DangerAsteroidCard } from "../components/asteroidCard/AsteroidCard";
import {Asteroid} from "./Asteroid";
import {useState} from "react";

export const Asteroids = () => {
    const asteroids = [
        { name: "first", isDangerous: true },
        { name: "second", isDangerous: false }
    ];

    const handleKmButtonClick = () => {
        setSelectedDistance("km");
    };

    const handleMoonButtonClick = () => {
        setSelectedDistance("moon");
    };


    const [asteroid]=useState(generateAsteroids());

    const [onlyDangerous, setOnlyDangerous] = useState(false);

    const [selectedDistance, setSelectedDistance] = useState("km");


    return(
        <div>
            Home
            <div className={styles.showDangerousOnly} >
                <input type="checkbox" value={onlyDangerous} onChange={() => setOnlyDangerous(!onlyDangerous)} />
                Показать только опасные
            </div>
            <div className={styles.button_container}>
                Расстояние
                <button className={styles.distance_button} onClick={handleKmButtonClick} >
                    в километрах
                </button>
                ,
                <button className={styles.distance_button} onClick={handleMoonButtonClick} >
                    в дистанциях до луны
                </button>
            </div>
            {onlyDangerous?
                asteroid.filter((item)=>item.isDangerous).map((item)=> <AsteroidCard {...item} selectedDistance={selectedDistance}/>):
                asteroid.map((item)=> <AsteroidCard {...item} selectedDistance={selectedDistance}/>)
            }
        </div>)
}



const generateAsteroids=()=> {
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
        'Декабря',];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const result = [];
    for (let i = 0; i < 10; i++) {
        const name = characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed()];
        const date = `${(Math.random()*27+1).toFixed(0)} ${months[(Math.random()*11).toFixed()]}`
        const size = (Math.random()*100+10).toFixed(0);
        const distance = (Math.random()*9000000000).toFixed(0);
        const isDangerous = Math.random()>=0.5 ;
        result.push({name, date, distance, size, isDangerous})
    }
    return result;

}