import { defaultConfig } from 'next/dist/server/config-shared';
import { React, useState} from 'react';
import styles from '../styles/Home.module.css';

export default function TodoItem({ todo }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = () => {};

  const handleCheck = async () => {};

  return(
    <div>
      <span className={styles.eachTodo}>
        <p className={styles.text}>{todo.data.task}</p>
        <div>
          <input
            type="checkbox"
            className={styles.toggle}
            defaultChecked= {false}
            onChange={handleCheck}
            onClick={() => setIsChecked(!isChecked)}
          />
          <button onClick={handleDelete}>Delete</button>
        </div>
      </span>
    </div>
  );
}

