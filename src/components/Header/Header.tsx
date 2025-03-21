import React, { memo, useState } from 'react';
import { Link } from "react-router-dom"; // добавлен импорт Link
import styles from './Header.module.css';
import { getUserKey } from '../utils/getUserKey';

export const Header = memo(() => {
    const [inputOpened, setInputOpened] = useState(false);



    return (
      <div className={styles.container}>
        <div>
          <h1>ARMAGGEDON V</h1>
          <div>
            Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
          </div>
        </div>
        <div>
          <Link to={"/asteroids"} onClick={()=>console.log()}>Астероиды </Link>
          <Link to={"/destroyment"}>Уничтожение</Link>
        </div>
        <div>
          {getUserKey() === "DEMO_KEY" ? <button onClick={()=>setInputOpened(!inputOpened)}>Unauthorized</button> : <div>Api key provider</div>}
        </div>
        {inputOpened ? <input onChange={(ev)=>{
          if (ev.target.value.length == 40) {
            localStorage.setItem("API_KEY", ev.target.value);
            setInputOpened(false);
          }
        }}/> : null}
      </div>
    );
})

Header.displayName = "Header";