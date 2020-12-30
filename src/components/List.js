import React, { useState } from 'react'
import Form from './Form'
import Item from './Item'

function List() {
  const [items, setItems] = useState([])
  
  const addItem = item => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return
    }

    const newItems = [item, ...items]
    console.log(item, ...items);
    setItems(newItems)
  }

  const removeItem = id => {
    const removeArr = [...items].filter(item => item.id !== id)

    setItems(removeArr)
  }

  const completeItem = id => {
    let updatedItems = items.map(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete
      }

      return item
    })
    
    setItems(updatedItems)
  }

  return (
    <div>
      <h1>Grocery List</h1>
      <Form onSubmit={addItem} />
      <Item 
        items={items} 
        completeItems={completeItem} 
        removeitem={removeItem} 
      /> 
    </div>
  )
}

export default List

