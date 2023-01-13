import "./Mapping.css";

export const Mapping = ({ todoArray, setTodoArray }) => {
  {
    /* Deleting Selected Todo */
  }
  const deleteHandler = (index) => {
    setTodoArray((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };
  return (
    <div>
      {todoArray.map((todoItem, index) => (
        <div className="todo" key={todoItem.id}>
          <p>{todoItem.todo}</p>
          <button onClick={() => deleteHandler(index)}>X</button>
        </div>
      ))}
    </div>
  );
};
