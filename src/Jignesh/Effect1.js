import React, {useState, useEffect} from 'react';

const Effect1 = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=> {
    console.log('effect is updating')
 document.title = "You clciked " + count + " times"
}, [count])
  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => setCount(prevCount => prevCount +1 )}>you clicked {count} times</button>
    </div>
  )
}

export default Effect1
