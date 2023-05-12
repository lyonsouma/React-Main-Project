// import React, {useState} from "react";
import './Todo.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const TodoForm = ({Task, AddTask, TodoList,SetTodoList}) =>{

    const handleSubmit = (event)=>{
      event.preventDefault();
      SetTodoList([...TodoList, Task])
     console.log({TodoList});
     AddTask(" ")
    }

    return(
    <Form className='container todo-form-body' onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control className='mt-3'  onChange={(e)=>{AddTask(e.target.value)}} placeholder="Today's Task" />
      </Form.Group>
      
      <Button className='btn-submit mb-2' variant="primary" type="submit">
       Add Task
      </Button>
    </Form>
    )
}
export default TodoForm