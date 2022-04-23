// App Layout
import { React, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import TodoItem from "./TodoItem";
import newData from '../api/newData'; 

export default function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({});
  const requestParams = {
    method: "POST",
    headers: {"Content-Type": "application/json" },
    body: JSON.stringify({ data: inputData }),
  };

  async function fetchData() {
    const res = await fetch("../api/getData");
    const newData = await res.json();
    setData(newData);
  }
  useEffect(() => {
    fetchData();
  }, [newTodo]);

  const handleInput = (e) => {
    setNewTodo(e.target.value);
    setInputData({
      ...inputData,
      newTodo: e.target.value
    });
  };

  const handleSubmit = (e) => {
    console.log(newTodo);
    addTodoItem();
    setNewTodo(""); 
  };

  async function addTodoItem() {
    await fetch("../api/newData", requestParams)
      .then(() => newData())
      .catch((e) => console.log(e));
  }

  return (
    <div className={styles.mainCont}>
      <h1>Todo App</h1>
      <div className={styles.newTodo}>
        <h3>Add New Todo</h3>
        <div className={styles.semi}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => handleInput(e)}
          ></input>
          <button onClick={() => handleSubmit()}>Add Todo</button>
        </div>
      </div>
      <div>
        {data &&
          data.map((todo) => (
            <TodoItem key={todo.ref["@ref"].id} todo={todo} />
          ))}
      </div>
    </div>
  );
}
