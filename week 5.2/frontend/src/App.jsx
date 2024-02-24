import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './componenets/CreateTodo'
import { Todos } from './componenets/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // used to fetch the existitng todos from the backend

  /*
  fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
    })

    */

    
    useEffect(() => {
      fetch("http://localhost:3000/todos")
        .then(async function(res) {
          const json = await res.json();
          setTodos(json);
        })
        .catch(error => console.error('Error fetching todos:', error));
    }, []);
    

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
