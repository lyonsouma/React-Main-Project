import React, {useState} from 'react'

const Todo=()=>{

    const [name, newName] = useState(" ")

    const sendInputs = ((event)=>{
        event.preventDefault()
        console.log({
            Name : {name}
        });
        newName(" ")

    })

    return(
        <form onSubmit={sendInputs}>
           <input value={name} onChange={(e)=>{newName(e.target.value)}}></input>
           <button type='button'>Send Value</button>
        </form>
    )
}
export default Todo