import React from 'react';
import styles from "./AsteroidCardAction.module.css";

export const AsteroidCardAction = (props:{ isDangerous: boolean, onClick:(asteroid: any)=>void }) => {

  const {isDangerous, onClick} = props;

  return (
    <div>
      <div
        className={styles.actionGrade}
      >{`Оценка: ${isDangerous ? 'опасен' : 'не опасен'} `}</div>
      <button className={styles.action} onClick={onClick}>
        <div className={styles.actionText}>На уничтожение</div>
      </button>
    </div>
  );
};
