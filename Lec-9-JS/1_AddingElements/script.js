
let btn = document.querySelector('.btn');

let movieList = document.querySelector('.movieList');

let movies = [
    "Avenger",
    "Infinity War",
    "End Game",
    "Thor",
    "Iron-man",
    "Bat-man",
    "Spider-man",
    "Loki"
]

let imgLinks = [
   'https://media.tenor.com/JQRUO7hMqVIAAAA1/galti-kar.webp',
   'https://media.tenor.com/45PquhmxoeUAAAA1/khatam-rahul.webp',
   'https://media.tenor.com/cX94qfKoU6EAAAA1/rahul-gandhi-sorry.webp',
   'https://media.tenor.com/9fMvzRB0XYMAAAA1/hum-apko-sone-nahi-denge-aapko-raat-bhar-jaga-ke-rakhenge.webp',
   'https://media.tenor.com/sUIEbEkOr3gAAAA1/hi-choco-hello-choco.webp',
   'https://media.tenor.com/AQslJJYSJ2wAAAA1/rahul-gandhi-maja-aaya.webp'
]

let i = 0;

btn.addEventListener('click',() => {

    if(i == movies.length){
        // adding random images
        let url = imgLinks[Math.floor((Math.random() * imgLinks.length))];
        let img = document.createElement('img');
        img.setAttribute('src',url);
        movieList.appendChild(img);

        i++;  
    }
    
    else if(i < movies.length) {
        let li = document.createElement('li');
        li.innerText = movies[i];
        movieList.appendChild(li);

        i++;
    }
   
})