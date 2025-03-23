import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import styles from "./Asteroid.module.css";
import { AsteroidCard } from "../components/AsteroidCard/AsteroidCard";
import { AsteroidsContext } from '../components/AsteroidCard/AsteroidContext/AsteroidsContext';
import { getUserKey } from '../components/utils/getUserKey';

export const Asteroids = () => {
    const [asteroids, setAsteroids] = useState([]);
    const {onlyDangerous, setOnlyDangerous, setDistanceMode, distanceMode, addAsteroid} = useContext(AsteroidsContext);

    useEffect(() => {
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2001-01-01&end_date=2001-01-07&api_key=${getUserKey()}`)
            .then(res => res.json())
            .then(response => {
                let rawAsteroids = [];
                for (const date in response.near_earth_objects) {
                    rawAsteroids = rawAsteroids.concat(response.near_earth_objects[date]);
                }
                const formatted = rawAsteroids.map(item => {
                    const size = Math.trunc(
                        (item.estimated_diameter.meters.estimated_diameter_max +
                            item.estimated_diameter.meters.estimated_diameter_min) / 2
                    );
                    const close = item.close_approach_data[0];
                    return {
                        name: item.name,
                        date: close.close_approach_date,
                        distance: {
                            kilometers: parseFloat(close.miss_distance.kilometers),
                            lunar: parseFloat(close.miss_distance.lunar)
                        },
                        size,
                        isDangerous: item.is_potentially_hazardous_asteroid,
                        id: item.id
                    };
                });
                setAsteroids(formatted);
            })
            .catch(error => {
                console.error("Ошибка запроса:", error);
                setAsteroids(generateAsteroids());
            });
    }, []);

    const generateAsteroids = () => {
        const months = [
            "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
        ];
        const result = [];
        for (let i = 0; i < 10; i++) {
            const name = "AST" + i;
            const date = `${Math.floor(Math.random() * 27 + 1)} ${months[Math.floor(Math.random() * 12)]}`;
            const size = Math.floor(Math.random() * 100 + 10);
            const distanceKm = Math.floor(Math.random() * 9000000000);
            const distanceLunar = (distanceKm / 384400).toFixed(2);
            const isDangerous = Math.random() >= 0.5;
            result.push({ name, date, distance: { kilometers: distanceKm, lunar: distanceLunar }, size, isDangerous, id: name });
        }
        return result;
    };

    // Обработчик удаления астероида
    const handleDestroy = (id) => {
        setAsteroids(prev => prev.filter(item => item.id !== id));
    };

    const filteredAsteroids = onlyDangerous
        ? asteroids.filter(item => item.isDangerous)
        : asteroids;

    return (
        <div>
            <Header />
            <div className={styles.showDangerousOnly}>
                <input
                    type="checkbox"
                    checked={onlyDangerous} // Показать только опасные
                    onChange={() => setOnlyDangerous(!onlyDangerous)}
                />
                Показать только опасные
            </div>
            <div className={styles.button_container}>
                Расстояние:
                <button className={styles.distance_button} onClick={() => setDistanceMode(true)}>
                    в километрах
                </button>
                <button className={styles.distance_button} onClick={() => setDistanceMode(false)}>
                    Дистанция до Луны
                </button>
            </div>
            <div>
                {filteredAsteroids.map(item => (
                    <AsteroidCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        date={item.date}
                        distance={item.distance}
                        size={item.size}
                        isDangerous={item.isDangerous}
                        distanceMode={distanceMode}
                    />
                ))}
            </div>
        </div>
    );
};
