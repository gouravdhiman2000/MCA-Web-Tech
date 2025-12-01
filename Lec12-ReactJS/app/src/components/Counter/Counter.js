import React, {useState} from 'react'

const Counter = () => {
    let initialValue = 0;
    //useState ook
    const[counter,setState] = useState(initialValue)
    function decreaseCounter(){
        // counter--;
        // console.log("Decreasing the value of counter", counter);
        setState(counter-1);
    }
    function increaseCounter(){
        // counter++;
        // console.log("Increasing the value of counter", counter);
        setState(counter+1);
    }

  return (
    <div className=''>
      <button onClick={decreaseCounter}>-</button>
      <span>Counter Value: {counter}</span>
      <button onClick={increaseCounter}>+</button>
    </div>
  )
}

export default Counter
