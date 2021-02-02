// import { func } from 'prop-types'
import React, { useState } from 'react'
import Context from './context.jsx'
import { render } from 'react-dom'
import TodoList from './Todo/TodoList.jsx'
import AddTodo from './Todo/AddTodo.jsx'


function App () {
  const [todos, setTodos] = useState([])
  const [check, setCheck] = useState([])
  console.log(check)
  console.log(todos)


  function toggleTodo (id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )  
  }

  function removeTodo (id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
    setCheck(check.concat([{
      title,
      id: Date.now(),
      completed: true
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
    <div className='wrapper'>
      <h1>React</h1>
      <AddTodo onCreate ={addTodo} todos={todos}/>
      {todos.length ? (
        <TodoList todos={todos} onToggle={toggleTodo}/>
      ) : (
        <p>No Todo</p>
      )}
    </div>
    </Context.Provider>
  )
}

render(<App/>, document.getElementById('app'))

export default App
