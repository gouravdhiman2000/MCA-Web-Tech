import React from 'react'
import classes from './TodoItem.module.css'

const TodoItem = ({taskName, decreasePriority ,  increasePriority, deleteTask}) => {
  return (
    <div>
      <li className={classes['taskItem']}>{taskName}
        <div>
            <button onClick={()=>increasePriority(taskName)}>👆</button>
            <button onClick={()=>decreasePriority(taskName)}>👇</button>
            <button onClick={()=>deleteTask(taskName)}>❌</button>
        </div>
      </li>
      
    </div>
  )
}

export default TodoItem
