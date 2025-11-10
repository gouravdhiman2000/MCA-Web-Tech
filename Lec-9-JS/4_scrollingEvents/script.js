let container = document.querySelector('.container');
let navBar = document.querySelector('.navBar');
console.log(container);

// container.addEventListener('onscroll',(ev)=>{
//     console.log(container.scrollY);
    
// })

window.onscroll = (ev)=>{
    console.log(window.scrollY);
    console.log('scroll');
    if(window.scrollY > 300){
    navBar.style.backgroundColor="orange";
    }
    else{
        navBar.style.backgroundColor="white";
    }
   
}
    // window.onscrollend = (ev) =>{
    //         alert("Scroll end")
    // }

if(window.scrollY > 300){
    navBar.style.backgroundColor="orange";
}
else{
    navBar.style.backgroundColor="white";
}
