import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction";
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage";

import styles from './AsteroidCard.module.css';

type AsteroidCardProps = {
    name: string;
    date: string;
    distance: {
        kilometers: number;
        lunar: number;
    };
    size: number;
    isDangerous: boolean;
    distanceMode: boolean;
    onDestroy?: () => void;
};

export const AsteroidCard = (props: AsteroidCardProps) => {
    const { name, date, size, distance, isDangerous, distanceMode, onDestroy } = props;

    return (
        <div className={`${styles.card} ${isDangerous ? styles.cardRed : styles.normCard}`}>
            <AsteroidCardImage />
            <AsteroidCardContent
                name={name}
                date={date}
                distance={distance}
                distanceMode={distanceMode}  // передаем корректное свойство
                size={size}
                isDangerous={isDangerous}
            />
            <AsteroidCardAction isDangerous={isDangerous} onDestroy={onDestroy} />
        </div>
    );
};
