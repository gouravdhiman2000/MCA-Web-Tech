let btn = document.querySelector('.btn');
let factList = document.querySelector('.factList')

btn.addEventListener('click',throttling((ev)=>{
    console.log("Clicked");
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        let li = document.createElement('li');
        li.innerText = res.text;
        factList.appendChild(li);
    })
},2000));