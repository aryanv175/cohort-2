import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // defining the initial state
  const [count, setCount] = useState(0)


  // when we call setCount, reat re-renders the component


  // this is actually xml
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

// this is a function but effectiviely it is a component
function CustomButton (props) {
  // so props here is getting count and the setCount function

  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
