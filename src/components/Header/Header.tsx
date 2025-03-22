import React, { memo, useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.css';
import { getUserKey } from '../utils/getUserKey';

export const Header = memo(({ someFunc }: { someFunc?: (arg: any) => void }) => {
  const [inputOpened, setInputOpened] = useState(false);

  return (
    <div className={styles.container}>
      {/* Левый блок: заголовок и подзаголовок */}
      <div className={styles.leftBlock}>
        <h1>ARMAGGEDON V</h1>
        <div className={styles.subtitle}>
          Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
        </div>
      </div>

      {/* Блок ссылок */}
      <div className={styles.navLinks}>
        <Link to="/asteroids" onClick={() => console.log()}>
          Астероиды
        </Link>
        <Link to="/destroyment">
          Уничтожение
        </Link>
      </div>

      {/* Правый блок: кнопка / вывод ключа */}
      <div className={styles.rightBlock}>
        {getUserKey() === "DEMO_KEY" ? (
          <button
            onClick={() => {
              if (someFunc) {
                someFunc("123");
              }
              setInputOpened(!inputOpened);
            }}
          >
            Unauthorized
          </button>
        ) : (
          <div>Api key provider</div>
        )}
      </div>

      {/* Инпут для ввода ключа, появляется при нажатии кнопки */}
      {inputOpened && (
        <input
          onChange={(ev) => {
            if (ev.target.value.length === 40) {
              localStorage.setItem("API_KEY", ev.target.value);
              setInputOpened(false);
            }
          }}
        />
      )}
    </div>
  );
});

Header.displayName = "Header";
