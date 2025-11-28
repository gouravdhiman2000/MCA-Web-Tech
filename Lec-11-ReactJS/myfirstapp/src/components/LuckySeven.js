import React from 'react'

const LuckySeven = () => {
    let randomNumber = [Math.floor(Math.random()*10+1)];
    let winningGif = 'https://media.tenor.com/hbCrA0GmxHAAAAAM/yes-winning.gif';
    let losingGif = 'https://media.tenor.com/cINS0Db2G08AAAAM/chris-farley-losing-my-mind.gif';
  return (
    <div>
        <h2>LuckySeven</h2>
        <div>Lucky Number is : {randomNumber}</div>
        {randomNumber == 7 && <img src= {winningGif}></img>}

        {randomNumber != 7 && <img src= {losingGif}></img>}
    </div>
  )
}

export default LuckySeven
