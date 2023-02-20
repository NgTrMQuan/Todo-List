import React from 'react'
import { useState } from 'react'

export const AddTodo = (props) => {
    const [item, setItem] = useState("")
    
    const handleChange = (e) => {
        setItem(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        props.item(item)
    }


  return (
    <><h1 class="animate__animated animate__bounce">Todo List</h1>
    <form method='post' onSubmit={handleSubmit}>
      <input type="text" name="item " id="" placeholder='Enter your task here ... ' onChange={handleChange} />
      <button type='submit'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>Add
      </button>
    </form></>
  )
}

export default AddTodo
