import React from 'react'

const Todoitem = (props) => {
  return (
    <div className='todo-item'>
        <input type="radio" onChange={()=>props.completed(props.id)}/>
        <p className='cleanup'>{props.item}</p>
    </div>
  )
}

export default Todoitem