// import React, {useState} from "react";
import './Todo.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const TodoForm = () =>{

    // const [item , addItem]= useState(' ')

    return(
    <Form className='container todo-form-body'>
      <Form.Group className="mb-3">
        <Form.Control className='mt-3' placeholder="Today's Task" />
      </Form.Group>
      
      <Button className='btn-submit mb-2' variant="primary" type="submit">
       Add Task
      </Button>
    </Form>
    )
}
export default TodoForm