import TodoList from './components/TodoList';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'TodoApp.todos'
function App() {
  const [todos, setTodo] = useState([]);


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) {setTodo(storedTodos)}
    console.log(todos)
  }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  // }, [todos])


  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodo(newTodos)
  }

  const todonameRef = useRef()
  const handleAddTodo = (e) => {
    const name = todonameRef.current.value
    if (name === '') return
    setTodo(prev => {
      return [...prev, { id: uuidv4(), name: name, complete: false }]
    })
  }
  return (
    <div>
      <input ref={todonameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>

    </div>
  );
}

export default App;
