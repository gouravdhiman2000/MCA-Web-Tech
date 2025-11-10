let container = document.querySelector('.container');
let navBar = document.querySelector('.navBar');
console.log(container);

// window.addEventListener('scroll', ()=>{
//     console.log('scroll');
//     if(window.scrollY > 300){
//     navBar.style.backgroundColor="orange";
//     }
//     else{
//         navBar.style.backgroundColor="white";
//     }
// })

//->window.addEventListener('scroll', debounce());

function scrollkafunction(){
    console.log('Scrolling');
}

window.addEventListener('scroll', debounce(scrollkafunction,1000));

function debounce(fun, delay){
    let id;
    return function(){
        console.log("Clearing Interval:",id);
        clearInterval(id);
        id= setTimeout(()=>{
            fun();
        },delay);
        console.log("New Interval:",id);
    }
}
