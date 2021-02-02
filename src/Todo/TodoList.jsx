import React from 'react'

import TodoItem from './TodoItem.jsx'

const styles = {
  ul: {
    listStyle: 'none', //list-style: none
    margin: 0,
    padding: 0
  }
}


function TodoList ({todos, onToggle}) {

  return (
    <ul style={styles.ul}>
      {todos.map((todo, index) => {
        return (
          <TodoItem 
            todo={todo} 
            key={todo.id} 
            index={index} 
            onChange={onToggle}
          />
        )
      })}
    </ul>
  )
}



export default TodoList
