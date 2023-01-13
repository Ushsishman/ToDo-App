import React, { useState } from "react";
import "./TodoApp.css";
import { Mapping } from "./Mapping Todos/Mapping";
import { AddTodo } from "./Adding Todos/AddTodo";
import { PendingTasks } from "./Pending Tasks/PendingTasks";

export const TodoApp = () => {
  {
    /* Setting Todos and Array */
  }
  const [todos, setTodos] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  return (
    <div>
      <h2 className="title">Todo App</h2>
      {/* Pending Tasks */}
      <PendingTasks todoArray={todoArray} setTodoArray={setTodoArray} />
      {/* Adding Todos */}
      <AddTodo todos={todos} setTodos={setTodos} setTodoArray={setTodoArray} />
      {/* Mapping Todos */}
      <Mapping todoArray={todoArray} setTodoArray={setTodoArray} />
    </div>
  );
};
