import React, {useState} from 'react'
import TodoList from '../TodoList/TodoList';

const TodoApp = () => {
    let initialTasks = ['Cricket','Coding','Sleeping'];

    //Creating hook
    const[tasks,setTasks] = useState(initialTasks);

    function taskHandler(){
      console.log(tasks);
    }

    function decreasePriority(taskName){
      let newTask = [...tasks];
      let index = newTask.indexOf(taskName);
      if(index < newTask.length-1){
        //swap
        let temp = newTask[index];
        newTask[index] = newTask[index+1];
        newTask[index+1]= temp;
        setTasks(newTask);
      }
      console.log("You are reducing the priority of", taskName);
    }

     function increasePriority(taskName){
      let newTask = [...tasks];
      let index = newTask.indexOf(taskName);
      if(index > 0){
        //swap
        let temp = newTask[index];
        newTask[index] = newTask[index-1];
        newTask[index-1]= temp;
        setTasks(newTask);
      }
      console.log("You are increasing the priority of", taskName);
    }

    function deleteTask(taskName){
      let newTask = tasks.filter(t=>t!==taskName);
      setTasks(newTask);
      console.log("You are deleting the priority of", taskName);
    }
    


  return (
    <div>
      <h2>Todo App</h2>
      <input type='text' placeholder='Enter Task Name'></input>
      <button onClick={taskHandler}>Add Task</button>
      {/* <ul>
        {tasks.map((task,indx)=>
            <li key={indx}>{task}</li>
        )}
      </ul> */}
      <TodoList 
      tasks={tasks}
      decreasePriority={decreasePriority}
      increasePriority={increasePriority}
      deleteTask={deleteTask}
      /> 
    </div>
  )
}

export default TodoApp
