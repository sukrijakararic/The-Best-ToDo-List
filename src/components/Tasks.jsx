import React, {useState} from 'react'
import { AddTask } from './AddTask';




export const Tasks = () => {
const [todo, setTodo] = useState([]);

const addTodo = todos => {
    
    setTodo([...todo, {id:crypto.randomUUID(), task:todo, completed:false, isEditing:false}])
    console.log(todo);
}

  return (
    <div className='tasks'>
        <AddTask  addTodo={addTodo} />
    </div>
  )
}
