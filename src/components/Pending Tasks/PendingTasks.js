import React from "react";
import "./PendingTasks.css";

export const PendingTasks = ({ todoArray, setTodoArray }) => {
  return (
    <div className="pending-tasks">
      <p>You have {todoArray.length} pending tasks</p>
      <button
        onClick={() => {
          setTodoArray([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
};
