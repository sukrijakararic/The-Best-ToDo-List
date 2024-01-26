import React, {useState} from 'react'
import { AddTask } from './AddTask';
import { v4 as uuidv4 } from 'uuid';
uuidv4();


export const Tasks = () => {
const [todo, setTodo] = useState([]);

const addTodo = todos => {
    setTodo([...todos, {id: uuidv4(), task: todo, completed:false, isEditing: false}])
    console.log(todos);
}

  return (
    <div className='tasks'>
        <AddTask  addTodo={addTodo} />
    </div>
  )
}
