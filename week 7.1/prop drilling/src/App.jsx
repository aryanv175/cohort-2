import { useState, useContext } from "react"
import { CountContext } from "./context";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count/>
      </CountContext.Provider>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer/>
    <Buttons />
  </div>

}

function CountRenderer() {
  const {count} = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const {setCount} = useContext(CountContext);
  return <div>
    <button onClick={() =>{
      setCount(prevCount => prevCount + 1)
    }}>+</button>
    <button onClick={() =>{
      setCount(prevCount => prevCount - 1)
    }}>-</button>
  </div>
}

export default App
