import React from 'react';
import styles from "./AsteroidCardAction.module.css";

export const AsteroidCardAction = ({ isDangerous, onDestroy }) => {
    const handleDestroy = () => {
        // Если передан callback, вызываем его
        if (onDestroy) {
            onDestroy();
        }
    };

    return (
        <div>
            <div className={styles.actionGrade}>
                {`Оценка: ${isDangerous ? 'опасен' : 'не опасен'}`}
            </div>
            <button className={styles.action} onClick={handleDestroy}>
                <div className={styles.actionText}>На уничтожение</div>
            </button>
        </div>
    );
};
