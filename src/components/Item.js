import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Item({ items, completeItem, removeItem }) {
  const [edit, setEdit] = useState({
    id: null, 
    value: ''
  })

  return items.map((item, index) => (
    <div className={item.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
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
          className='delete-icon'
        />
      </div>
    </div>
  ))
}

export default Item
