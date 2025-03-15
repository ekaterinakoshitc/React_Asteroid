import styles from './Header.module.css';
import { getUserKey } from '../../utils/getUserKey';
import { memo, useState } from 'react';
import { Link } from "react-router-dom";


export const Header = memo(() => {
  const [inputOpen, setInputOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div>
        <h1>ARMAGGEDON V</h1>
        <div>
          Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
          Земле.
        </div>
      </div>
      <div>
        <Link to={'/asteroids'} onClick={() => console.log()}>
          Астероиды
        </Link>
        <Link to={'/destroyment'}>Уничтожение</Link>
      </div>
      <div>
        {getUserKey() === 'DEMO_KEY' ? (
          <button onClick={() => setInputOpen(!inputOpen)}>
            UnAutorization
          </button>
        ) : (
          <div>Api key provided</div>
        )}
      </div>
      {inputOpen ? (
        <input
            data-testId={"api_key_input"}
          onChange={(ev) => {
            if (ev.target.value.length == 40) {
              localStorage.setItem('API_KEY', ev.target.value);
              setInputOpen(false);
            }
          }}
        />
      ) : null}
    </div>
  );
});

Header.displayName = 'Header';
