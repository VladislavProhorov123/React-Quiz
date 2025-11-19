import React from "react";

export default function TodoCard({ children, deleteTodo, id }) {
  return (
    <li>
      {children}
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}
