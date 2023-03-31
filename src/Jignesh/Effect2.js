import React, { useState,useEffect } from 'react'

function Effect2() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('log Mouse Event')
   setX(e.x)
   setY(e.y)
  }
  useEffect(() => {
    console.log("hello")
    window.addEventListener("mousemove", logMousePosition)
    
    return() => {
        window.removeEventListener("mousemove", logMousePosition)
    }
  }, [])
  return (
    <div>
      Hook x - {x},  y - {y}
    </div>
  )
}

export default Effect2
