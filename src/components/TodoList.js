import React from 'react'
import Todo from './Todo'


function TodoList(props) {
    const todos = props.todos
    const toggleTodo = props.toggleTodo
    return(
        todos.map(todo=>{
            return <Todo key={todo.name} todo={todo} toggleTodo={toggleTodo}/>
        })
    )
            
      

}

export default TodoList