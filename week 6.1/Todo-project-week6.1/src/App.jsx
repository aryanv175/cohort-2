import { useState } from 'react'
import './App.css'

// Re-rendering and keys
/*
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
*/

// wrapper components
/*
function App() {
  return <div>
    <CardWrapper>
      Hey there
    </CardWrapper>
    <CardWrapper>
      {Math.random()}
    </CardWrapper>
  </div>
}


// card wrapper needs to accept some other react component
// as an input and render that react component with some
// extra styles
function CardWrapper({children}) {
  return <div style={ {border: "2px solid black", margin: "10px"}}>
    {children}
  </div>
}

*/

// useEffect and Hooks


export default App
