import React , {useState} from 'react'

function Form() {
    const [name, setName] = useState({firstName: "" , lastName: ""})
  return (
    <div>
      <form>
          Type your name here <br></br>
         <input className= "name" type="text" value={name.firstName} onChange={e => setName({...name,firstName: e.target.value})}/>
         <input className= "name" type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
         <h2>Your First name is {name.firstName}</h2>
         <h2>Your last name is {name.lastName}</h2>
      </form>
    </div>
  )
}

export default Form
