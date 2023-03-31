import React, {useState,useEffect} from 'react'

function SetInterval() {
    const [count,setCount] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => setCount(prevCount => prevCount + 1), 1000)

        return () => {
            clearInterval(interval)
        } 
        })
  return (
    <div>
      Timer - {count}
    </div>
  )
}

export default SetInterval
