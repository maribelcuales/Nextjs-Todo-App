// App Layout
import { React, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(newTodo);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <h3>Add New Todo</h3>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => handleInput(e)}
          ></input>
          <button onClick={() => handleSubmit()}>
            Add Todo
          </button>
        </div>
      </div>
      <div>
        <TodoItem />
      </div>
    </div>
  );
}
