import React, {useState} from 'react'

export const AddTask = ({addTodo}) => {
 const [text, setText] = useState('')

 const handleChange = e => setText(e.target.value)
 const handleSubmit = e => {
    e.preventDefault();
    addTodo(text);
 }


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        
        <input name='task' type='text' onChange={handleChange} placeholder='what are ya doin today?' className='todo-input' ></input>
        <button type='submit' className='todo-btn'>submit</button>
    </form>
  )
}
