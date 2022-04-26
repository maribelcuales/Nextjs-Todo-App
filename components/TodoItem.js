import { defaultConfig } from 'next/dist/server/config-shared';
import { React, useState} from 'react';
import deleteData from '../pages/api/deleteData';
import styles from '../styles/Home.module.css';

export default function TodoItem({ todo }) {
  const [isChecked, setIsChecked] = useState(false);
  const [done, isDone] = useState(true); 
  const [aDelete, isDeleted] = useState(""); 
  const [inputData, setInputData] = useState({}); 
  let d = ""; 

  const handleCheck = async () => {
    isDone(!todo.data.done);
    let c = !todo.data.done; 
    isDeleted(todo.ref["@ref"].id);
    d = todo.ref["@ref"].id;
    let g = {
      ...inputData,
      done: c,
    };
    await fetch("../api/updateData", {
      method: "PUT",
      headers: { "Content-Type": "application/json" }, 
      
      body: JSON.stringify({ data: g, id: d }), 
    })
    .then(() => deleteData()) 
    .catch((e) => console.log(e)); 
  };

  const handleDelete = () => {
    
  };

  return(
    <div>
      <span className={styles.eachTodo}>
        <p className={styles.text}>{todo.data.task}</p>
        <div>
          <input
            type="checkbox"
            className={styles.toggle}
            defaultChecked= {todo.data.done}
            onChange={handleCheck}
            onClick={() => setIsChecked(!isChecked)}
          />
          <button onClick={handleDelete}>Delete</button>
        </div>
      </span>
    </div>
  );
}

