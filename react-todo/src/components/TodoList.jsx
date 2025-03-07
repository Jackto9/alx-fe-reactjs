import React from "react";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
