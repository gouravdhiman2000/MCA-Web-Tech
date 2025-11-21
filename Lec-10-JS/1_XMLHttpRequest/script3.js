let btn = document.querySelector('button');
let factList = document.querySelector('.factList');

function getData(url){
    return new Promise((resolve,reject)=>{
        //1. Create an XML HTTP request
        let xml = new  XMLHttpRequest();

        //2. Setup karna request ko
        xml.open('GET',url);

        //3. Success hone par request par kya kiya jaye!!

        xml.onload =(res)=>{
        let data = JSON.parse(res.target.responseText);
        resolve(data);
        }

        //4. Success hone par request par kya kiya jaye!!
        xml.onerror =(err)=>{
        // console.log('Request error:', err);
        reject(err);
        }

        xml.send();// request bhej do!!

    })
}

btn.addEventListener('click',()=>{
    getData('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
    .then((data)=>{
        let li = document.createElement('li');
        li.innerText = data.text;
        factList.appendChild(li);
    })
    .catch((err)=>{
        console.log(err);
    })
})