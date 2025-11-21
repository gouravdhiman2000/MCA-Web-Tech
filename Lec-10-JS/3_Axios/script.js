let btn = document.querySelector('button');
let factList = document.querySelector('.factList');

btn.addEventListener('click',()=>{
    axios('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
    .then(res=>{
        console.log(res);
        let data = res.data;
        console.log(data);
        let li = document.createElement('li');
        li.innerText = data.text;
        factList.appendChild(li);
    })
    .catch(err=>{
        reject(err);
    })
})