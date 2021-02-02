import React, {useState} from 'react'


function AddTodo ({onCreate}) {
  const [value, setValue] = useState('')
 

  function submitHandler(event) {
    event.preventDefault()

    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <div>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
      <button className='add'onClick={submitHandler}>Add todo</button>
      <button className='showAll'>Show all</button>
      <button className='showCheck'>Show check</button>
      <button className='showUncheck'>Show uncheck</button>
      <button className='showDel'>Show del</button>
    </div>
  )
}

export default AddTodo