import React from "react";
import "./AddTodo.css";

export const AddTodo = ({ todos, setTodos, setTodoArray }) => {
  {
    /* Adding Todos func */
  }

  const addTodoHandler = () => {
    if (todos.trim().length !== 0) {
      const newTodo = {
        id: Math.floor(Math.random() * 999),
        todo: todos,
      };
      setTodoArray((prev) => [...prev, newTodo]);
    } else {
      alert("Input field is empty");
    }
    setTodos("");
  };

  return (
    <div className="input-part">
      <input
        value={todos}
        onChange={(e) => {
          e.preventDefault();
          setTodos(e.target.value);
        }}
        type="text"
        placeholder="Add your new todo..."
      />
      <button onClick={addTodoHandler}>+</button>
    </div>
  );
};
