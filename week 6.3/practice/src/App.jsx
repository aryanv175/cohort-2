import { useEffect, useMemo, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return (
    <div>
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

//try

export default App
