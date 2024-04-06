import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <div style={{backgroundColor: 'red'}}>hey</div>
      <div style={{backgroundColor: 'green'}}>whats</div>
      <div style={{backgroundColor: 'blue'}}>up</div>
    </div>
  )
}

export default App
