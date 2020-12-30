import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import Form from './Form'

function Item({ items, completeItem, removeItem, editItem, handleAddQuantity, handleMinusQuantity }) {
  const [edit, setEdit] = useState({
    id: null, 
    value: ''
  })

  const submitUpdate = value => {
    editItem(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })

  }

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />
  }

  return items.map((item, index) => (
    <div className={item.isComplete ? 'todo-row complete' : 'item-row'}
      key={index}
    >
      <div className="quantity">
        <button onClick={() => handleAddQuantity(index)}>
          <AiOutlinePlusCircle />
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => handleMinusQuantity(index)}>
          <AiOutlineMinusCircle />
        </button>
      </div>
      <div key={item.id} onClick={() => completeItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine 
          onClick={() => removeItem(item.id)}
          className='delete-icon'
        />
        <TiEdit 
          onClick={() => setEdit({ id: item.id, value: item.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ))
}

export default Item
