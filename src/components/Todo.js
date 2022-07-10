import React from 'react'


function Todo({todo, toggleTodo}) {
  const handleTodoCLick = (e)=>{
     toggleTodo(todo.id)
  }
  return (
    <div>
        <label>
            <input type='checkbox' checked={todo.complete} onChange={handleTodoCLick}></input>
            {todo.name}
        </label>
         
    </div>
    
  )
}

export default Todo;