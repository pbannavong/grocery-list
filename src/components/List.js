import React, { useState } from 'react'
import Form from './Form'
import Item from './Item'

function List() {
  const [items, setItems] = useState([])
  const [totalItemCount, setTotalItemCount] = useState(1)

  const calculateTotal = () => {
    const totalCount = items.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }
  
  const handleAddQuantity = (index) => {
    const newItems = [...items]

    newItems[index].quantity++

    setItems(newItems)
    calculateTotal()
  }

  const handleMinusQuantity = (index) => {
    const newItems = [...items]

    newItems[index].quantity--

    setItems(newItems)
    calculateTotal()
  }

  const addItem = item => {
    // regex 
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

  const editItem = (id, updatedItem) => {
    if (!updatedItem.text || /^\s*$/.test(id.text)) {
      return
    }

    setItems(prev => prev.map(item => (item.id === id ? updatedItem : item)))
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
      <Item 
        items={items} 
        completeItems={completeItem} 
        removeItem={removeItem}
        editItem={editItem}
        handleAddQuantity={handleAddQuantity}
        handleMinusQuantity={handleMinusQuantity}
      />
      <div className='total'>Total: {totalItemCount}</div>
      <Form onSubmit={addItem} />
    </div>
  )
}

export default List

