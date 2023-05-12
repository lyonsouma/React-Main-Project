import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
// import NavBar from './components/Navbar';
import TodoForm from './components/TodoForm';



function App() {

  const [task , addtask]= useState(' ');
  const [todoList, setTodoList] = useState([]);


  return (
    <div className="App">
      
      {/* <NavBar/> */}
{
      <div>
         <TodoForm
         Task = {task}
         AddTask ={addtask}
         TodoList = {todoList}
         SetTodoList = {setTodoList}
         />
      </div> }
    </div>
  );
}

export default App;
