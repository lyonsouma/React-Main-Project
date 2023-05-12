const Display =({TodoList})=>{

    let List = TodoList.map((list)=>(
        <div>
            {list}
        </div>
    ))
    
    return(
        <div>
            {List}
        </div>
    )

}
export default Display