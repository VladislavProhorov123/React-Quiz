import React, { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function addTodos(newTodo) {
    const todoObj = {
      id: Math.random().toString(36).slice(2, 9),
      text: newTodo
    }
    setTodos([...todos, todoObj])
    setTodoValue("");
  }

  function deleteTodo(id) {
    const newTodoList = todos.filter((todo, index) => todo.id !== id);
    setTodos(newTodoList)
  }

  function EditTodo(id) {}

  return (
    <main>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        addTodos={addTodos}
      />
      <TodoList deleteTodo={deleteTodo} todos={todos} />
    </main>
  );
}
