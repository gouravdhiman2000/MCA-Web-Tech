import React, { useEffect, useState } from 'react'
import Fact from './Fact';

const CatFact = () => {

    const [val,setVal] = useState(0);
    const [facts, setFacts] = useState("");

    useEffect(()=>{
        console.log("Inside Effect");
        // setVal(!val);
        fetch('https://catfact.ninja/fact')
        .then(res=>res.json())
        .then(data=>{
            console.log(val, data);
            setFacts(data.fact);
        })
        .catch(err => console.log(err));
    }, [val]); 
    // dependency array-> konsi value change hone par, useEffect chlna chahiye, if we do not mention the value in the array it means that component will render only one time and does not re-render again
  
    return (
    <div>
        <div>{val.toString()}</div>
        <button onClick={()=>setVal(val+1)}>Change Value</button>
        <ul>
            <Fact fact={facts} />
        </ul>
    </div>
  )
}

export default CatFact