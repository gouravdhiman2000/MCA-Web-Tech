let itemList = document.querySelectorAll('.item');
let container = document.querySelector('.container');
//console.log(itemList);

//agar har ek item par event lgna hai toh ->Loop lga kar ek (li) par event lagna pdega!!

// itemList.forEach((item)=>{
//     console.log(item);
//     item.addEventListener('click',()=>{
//         console.log(item.innerText);
//     })
// })

//Agar new item add karu, jisme 8 likha ho

container.addEventListener('click',(event)=>{
    // console.log(event);
    // console.log(event.target);
    let item = event.target;
    console.log(item.innerText);
})

