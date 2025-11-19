import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList({todos, deleteTodo}) {
  


  return (
    <ul>
      {todos.map((item, index) => (
        <TodoCard  key={index} deleteTodo={deleteTodo} id={item.id}>
          <p>{item.text}</p>
        </TodoCard>
      ))}
    </ul>
  )
}
