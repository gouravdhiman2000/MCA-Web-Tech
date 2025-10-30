let btn = document.querySelector('button');

let movieList = document.querySelector('.movieList');

let movies = ["Avengers", "IronMan", "Hulk", "Thor", "SpiderMen", "Gadar"];

// let i=0;//Iterator

// btn.addEventListener('click', ()=>{
//     // movieList.innerHTML += "<li>" + movies[i] +"</li>";

//     movieList.innerHTML += `<li>${movies[i]}</li>`

//     console.log(movieList.innerHTML);
//     i++;
// })


let i=0;

btn.addEventListener('click', ()=>{
    console.log(movieList.innerHTML);

    if(i==movies.length){
        let url = 'https://media.tenor.com/MC-iCY27otwAAAA1/khatam-tata-bye-bye.webp';

        movieList.innerHTML += `<li><img src=${url}></li>`;
        i++;
    }
    else if(i<movies.length){
        movieList.innerHTML += `<li>${movies[i]}</li>`;
        i++;
    }
})
