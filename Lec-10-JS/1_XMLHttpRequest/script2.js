let btn = document.querySelector('button');
let factList = document.querySelector('.factList');


btn.addEventListener('click', ()=>{

    //1. Create an XML HTTP request
    let xml = new  XMLHttpRequest();


    //2. Setup karna request ko
    let url = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';
    xml.open('GET',url);

//3. Success hone par request par kya kiya jaye!!
xml.onload =(res)=>{
    console.log(res);
    console.log(res.target.responseText);

    let data = JSON.parse(res.target.responseText);
    console.log(data);

    let li = document.createElement('li');
    li.innerText = data.text;
    factList.appendChild(li);
    
    
}

//4. Failure hone par request par kya kiya jaye!!
xml.onerror =(err)=>{
    console.log('Request error:', err);
}


    console.log("Clicked");
    xml.send(); //to send request we have to do this
})