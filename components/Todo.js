// App Layout
import { React, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import TodoItem from "./TodoItem";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const handleInput = (e) => {
    setNewTodo(e.target.value); 
  };
  const handleSubmit = (e) => {
    console.log(newTodo); 
  }

  return <div></div>;
}
