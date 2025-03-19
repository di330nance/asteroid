import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction";
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage";

import styles from './AsteroidCard.module.css';
import React, { useContext } from 'react';
import { AsteroidsContext } from './AsteroidsContext/AsteroidsContext';
import { AsteroidCardContentContainer } from './AsteroidCardContent/AsteroidCardContentContainer';

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

    console.log(">>>>>>>",contextValue)

    return (
        <div className={`${styles.card} ${isDangerous ? styles.cardRed : styles.normCard}`}>
            <AsteroidCardImage />
            <AsteroidCardContentContainer
                name={name}
                date={date}
                distance={distance}
                size={size}
                isDangerous={isDangerous}
            />
            <AsteroidCardAction isDangerous={isDangerous}  onClick={null}/>
        </div>
    );
};
