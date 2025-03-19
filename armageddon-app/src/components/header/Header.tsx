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
        <Link className={styles.button_type_visual} to={'/asteroids'} onClick={() => console.log()}>
          Астероиды
        </Link>
        <Link className={styles.button_type_visual} to={'/destroyment'}>Уничтожение</Link>
      </div>
      <div className={styles.key_style}>
        {getUserKey() === 'DEMO_KEY' ? (
            <button
                className={styles.apiKeyButton}
                onClick={() => setInputOpen(!inputOpen)}
            >
                Unauthorized
            </button>
        ) : (
            <div>API key provided</div>
        )}
      </div>
        {inputOpen && (
            <input
                className={styles.apiKeyInput}
                placeholder="Enter API Key"
                onChange={(ev) => {
                    if (ev.target.value.length === 40) {
                        localStorage.setItem("API_KEY", ev.target.value);
                        setInputOpen(false);
                    }
                }}
            />
        )}
    </div>
  );
});

Header.displayName = 'Header';
