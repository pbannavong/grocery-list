import React, { useState, useEffect, useRef } from 'react'

function Form(props) {
  const [input, setInput] = useState('')

  // focus on input, prevent re-rendering of entire component on changes
  const inputRef = useRef(null)
  
  useEffect(() => {
    inputRef.current.focus()
  })

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input, // user input
      quantity: 1
    })
    
  }

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <form className="grocery-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Add an item"
        value={input} 
        name='text'
        className='grocery-input'
        onChange={handleChange}
        ref={inputRef}
      />
      <button className='item-button'>Add</button>
    </form>
  )
}

export default Form
