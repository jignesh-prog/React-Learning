import React, {useState} from 'react'

function Time2() {
    const initialValue = 0
    const [count, setCount] = useState(initialValue);

const increaseFive = () =>{
  for (let i = 0 ; i <  5 ; i++)
   setCount(prevCount => prevCount+1);
}
  return (
    <div>
      count:{count} <br/>
      <button className='Time2' onClick={() => setCount(initialValue)}>Reset</button>
      <button className='Time2' onClick={() =>setCount(prevCount => prevCount+1)}>Increment</button>
      <button className='Time2' onClick={() =>setCount(prevCount => prevCount-1)}>Decrement</button>
      <button className='Time2' onClick={increaseFive}>Increase5</button>
    </div>
  )
}

export default Time2
