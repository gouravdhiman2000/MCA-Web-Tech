
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

let imgLinks = [
    'https://media.tenor.com/MC-iCY27otwAAAA1/khatam-tata-bye-bye.webp',

    'https://media.tenor.com/2O8B2MXy4i4AAAA1/rahul-gandhi-vote-chor.webp',

    'https://media.tenor.com/JQRUO7hMqVIAAAA1/galti-kar.webp',

    'https://media.tenor.com/ATCFTrWThTsAAAA1/rahul-gandhi-narendra-modi.webp',

    'https://media.tenor.com/rtMWR6GaCGQAAAA1/hi-rahul-gandhi.webp'
]

let i=0;

btn.addEventListener('click', ()=>{
    console.log(movieList.innerHTML);

    if(i==movies.length){
        // let url = 'https://media.tenor.com/MC-iCY27otwAAAA1/khatam-tata-bye-bye.webp';

        let url = imgLinks[Math.floor((Math.random() * imgLinks.length))];

        // movieList.innerHTML += `<li><img src=${url}></li>`;
        // i++;
        let img = document.createElement('img');
        img.setAttribute('src',url);
        movieList.appendChild(img);
        i++;
    }
    else if(i<movies.length){
        // movieList.innerHTML += `<li>${movies[i]}</li>`;
        // i++;
        let li = document.createElement('li');
        li.innerText = movies[i];
        movieList.appendChild(li);
        i++;
    }
})
