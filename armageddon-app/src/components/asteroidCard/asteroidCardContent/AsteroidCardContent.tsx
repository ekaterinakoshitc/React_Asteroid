import styles from "./AsteroidCardContent.module.css";


type AsteroidCardContentProps= {
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



export const AsteroidCardContent = (props: AsteroidCardContentProps) => {
    const {name, date, distance, size, selectedDistance} = props;
    return (
        <div>
            <div className={styles.contentName}>{name}</div>
            <div className={styles.contentWrapper}>
                <div className={styles.contentDate}>{`Дата: ${date}`}</div>
                <div className={styles.contentDistance}>{selectedDistance ? `Расстояние: ${distance.kilometers}` : `Расстояние: ${distance.lunar}` }</div>
                <div className={styles.contentSize}>{`Размер: ${size} m`}</div>
            </div>
        </div>
    );
};