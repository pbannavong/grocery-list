import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import Form from './Form'

function Item({ items, removeItem, editItem, handleAddQuantity, handleMinusQuantity }) {
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

  // if edit != null -> user edited entry
  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />
  }

  return items.map((item, index) => (
    <div className='item-row'
      key={index}
    >
      <div className="quantity">
        <button onClick={() => handleAddQuantity(index)}>
          <AiOutlinePlusCircle size={16} />
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => handleMinusQuantity(index)}>
          <AiOutlineMinusCircle size={16} />
        </button>
      </div>
      <div key={item.id}>
        {item.text}
      </div>
      <div className="icons">
        <TiEdit 
          onClick={() => setEdit({ id: item.id, value: item.text })}
          className='edit-icon'
        />
        <RiCloseCircleLine 
          onClick={() => removeItem(item.id)}
          className='delete-icon'
        />

      </div>
    </div>
  ))
}

export default Item
