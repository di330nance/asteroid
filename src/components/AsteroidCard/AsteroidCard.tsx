import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction";
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage";

import styles from './AsteroidCard.module.css';
import React, { useContext } from 'react';
import { AsteroidsContext } from './AsteroidContext/AsteroidsContext';
import { AsteroidCardContentContainer } from './AsteroidCardContent/AsteroidCardContentContainer';
import { AsteroidCardDinoImage } from './AsteroidCardDino/DinoImage';

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
    };

export const AsteroidCard = (props: AsteroidCardProps) => {
    const { name, date, size, distance, isDangerous } = props;
    const {distanceMode} = useContext(AsteroidsContext);
    const contextValue = useContext(AsteroidsContext)

    const {addAsteroid} = useContext(AsteroidsContext)

    return (
        <div className={`${styles.card} ${isDangerous ? styles.cardRed : styles.normCard}`}>
            <AsteroidCardDinoImage/>
            <AsteroidCardImage size={size}/>
            <AsteroidCardContentContainer
                name={name}
                date={date}
                distance={distance}
                size={size}
                isDangerous={isDangerous}
            />
            <AsteroidCardAction isDangerous={isDangerous}  onClick={()=>addAsteroid(props)}/>
        </div>
    );
};
