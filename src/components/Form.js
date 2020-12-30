import React, { useState } from 'react'

function Form(props) {
  const [input, setInput] = useState('')


  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input // user input
    })
    
  }

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Add an item"
        value={input} 
        name='text'
        className='todo-input'
        onChange={handleChange}
      />
      <button className='todo-button'>Add</button>
    </form>
  )
}

export default Form
