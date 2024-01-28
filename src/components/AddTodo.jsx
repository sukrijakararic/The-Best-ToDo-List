import React, {useState} from 'react'

export const AddTodo = ({setTodos}) => {
    const [text, setText] = useState('');

    
    const handleChange = e => setText(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((oldState) => [...oldState, {text, done:false, id: crypto.randomUUID()}])
        setText('')
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='hmm.. today i have to...' value={text} onChange={handleChange}  />
        <button type='submit'>submit</button>
        
    </form>
  )
  }