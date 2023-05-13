import React from 'react'
import './Todo.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = ()=>{

    return(
        <Navbar bg="primary" expand="lg" className='container'>
      <Container>
        <Navbar.Brand><h2 className='brand'>TodoApp...</h2></Navbar.Brand>
          <div className='todo-links'>
           <button className='btn btn-light'><Nav.Link href="#">Home</Nav.Link></button>
            <button className='btn btn-light'><Nav.Link href="#">Task List</Nav.Link></button>
            
          </div>
      </Container>
    </Navbar>
    )

}
export default NavBar