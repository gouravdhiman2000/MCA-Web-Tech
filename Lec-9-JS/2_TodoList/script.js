let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let taskList = document.querySelector('.taskList');

//what we want that clicking on Add Task btn , would add task into the html page
btn.addEventListener('click',()=>{
    let taskName= inp.value;
    //console.log(taskName);
    let li = document.createElement('li');
    // li.innerText = taskName;

    li.innerHTML = 
    `
        <span class="taskText">${taskName}</span>
                <button class="upBtn">👆</button>
                <button class="downBtn">👇</button>
                <button class="deleteBtn">❌</button>
    `
    //Want to add taskItem class in li
    li.classList.add('taskItem');
    taskList.appendChild(li);
    inp.value=""; //to make input field empty, after adding task to the html page
})