import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // defining the initial state
  let [count, setCount] = useState(0)


  // when we call setCount, reat re-renders the component
  function onClickHandler(){
    setCount(count + 1);
  }


  // this is actually xml
  return (
    <div>
      <button onClick={onClickHandler}>Counter {count}</button>
    </div>
  )
}

export default App
