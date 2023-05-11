import React, {useState} from "react";

const TodoForm = () =>{

    const [item , addItem]= useState(' ')

    return(
        <form>
            <input value={item} onChange={(e)=>{addItem(e.target.value)}}></input>
            <button type="button">Send</button>
        </form>
    )
}
export default TodoForm