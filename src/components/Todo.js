import React, {useState} from 'react'

const Todo=()=>{

    const [name, newName] = useState(" ")
    return(
        <form>
           <input value={name} onChange={(e)=>{newName(e.target.value)}}></input>
        </form>
    )
}
export default Todo