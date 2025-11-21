let btn = document.querySelector('button');
let factList = document.querySelector('.factList');

btn.addEventListener('click',()=>{
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        let li = document.createElement('li');
        li.innerText = data.text;
        factList.appendChild(li);
    })
    .catch(err=>{
        console.log(err);
        reject(err);
    })
})