
export default function TodoInput({addTodos, setTodoValue, todoValue}) {

  return (
    <header>
      <input type="text" placeholder='Enter todo...' value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
      <button  onClick={() => addTodos(todoValue) } >Add</button>
    </header>
  )
}
