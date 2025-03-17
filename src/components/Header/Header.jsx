import React from 'react';
import { Link } from "react-router-dom"; // добавлен импорт Link
import styles from './Header.module.css';

export const Header = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>ARMAGGEDON V</h1>
                <div>
                    Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
                </div>
            </div>
            <div>
                <Link to="/asteroids">Астероиды</Link>
                <Link to="/destroyment">Уничтожение</Link>
            </div>
        </div>
    );
};
