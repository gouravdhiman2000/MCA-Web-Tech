import React from 'react'

const TaskList = () => {
    let tasks= ['Cricket', 'coding','Sleeping','Reading']
  return (
    <div>
      {/* <div>Cricket</div>
      <div>coding</div>
      <div>sleeping</div> */}
      <h2>TaskList</h2>
      {tasks.map((t)=>{
        return <div>{t}</div>
      })}
    </div>
  )
}

export default TaskList
