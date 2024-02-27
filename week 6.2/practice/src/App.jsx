import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

// first example of useEffect
/*
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
*/

// use of useEffect
/*
function App (){

  const [id, setId] = useState(1)

  return <div>
    <button onClick={() => changeId(1)}>1</button>
    <button onClick={() => changeId(2)}>2</button>
    <button onClick={() => changeId(3)}>3</button>
    <button onClick={() => changeId(4)}>4</button>
    <Todo id={id}/>
  </div>


  function changeId(newId) {
    setId(newId)
  }

}

function Todo ({id}) {

  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id="+ id)
      .then(function(response){
        setTodo(response.data.todo)
      })
  }, [id])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h2>
    {todo.description}
    </h2>
  </div> 
}
*/

// useMemo hopefully over here

function App () {
  const [count, setCount] = useState(0);
  const [numSum, setSum] = useState(0);

  function addCount () {
    setCount(count + 1);
  }

  function calculateSum (num){
    let res =0;
    for (let i = 0; i < num; i++) {
      res += i;
    }
    setSum(res);
  }

  return<div>
    <input
        type="number"
        onChange={(e) => calculateSum(e.target.value)}
        placeholder="Enter number here for sum"
      />
    <h5>the sum is {numSum}</h5>
    <button onClick={addCount}>Count is {count}</button>
  </div>
}

export default App
