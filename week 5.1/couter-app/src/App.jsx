import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


let state = {
  count:0
}

function App() {
  const [count, setCount] = useState(0)

  function onClickHandler(){
    state.count += 1;
  }

  return (
    <div>
      <button onClick={onClickHandler}>Counter {state.count}</button>
    </div>
  )
}

export default App
