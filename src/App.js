// import logo from './logo.svg';
// import React, {useState} from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
// import Todo from './components/Todo';

// const[todo, setTodo] = useState(" ");
// const [todoList, setTodolist] = useState([]);

function App() {
  return (
    <div className="App">
       {/* <Todo/> */}
      {/* <Navbar/> */}

      <div>
         <TodoForm
          //  todo = {todo}
         />
      </div>
    </div>
  );
}

export default App;
