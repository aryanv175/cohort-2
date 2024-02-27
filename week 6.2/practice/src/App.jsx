import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [todos, setTodo] = useState([])
  // we will try to use axios instead of fetch
  useEffect(()=> {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response){
        setTodo(response.data.todos)
      })
  }, [])

  return (
    <div>
      {todos.map(todo => <Todo title={todo.title} description ={todo.description}/>)}
    </div>
  )
}

function Todo ({title, description}){
  return <div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}

export default App
