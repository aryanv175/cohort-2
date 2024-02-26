import { useState } from 'react'
import './App.css'

let counter = 4;

function App() {
  const [todos, setTodo] = useState([{
    id: 1,
    title: "todo1",
    description: "description1"
  },{
    id: 2,
    title: "todo2",
    description: "description2"
  },{
    id: 3,
    title: "todo3",
    description: "description3"
  }])

  function addTodo(){
    setTodo([...todos, {
    id: counter++,
    title: Math.random(),
    description: Math.random()
    }])
  }

  return (<div>
    <button onClick={addTodo}>Add a new todo</button>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
  </div>)
}

function Todo ({title, description}) {
  return(<div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>)
}

export default App
