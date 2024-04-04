import { useState, useContext } from "react"
import { countAtom } from "./store/atoms/count";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";


function App() {

  return (
    <div>
        <RecoilRoot>
          <Count/>
        </RecoilRoot>
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
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenRender/>
  </div>
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={() =>{
      setCount(count + 1)
    }}>+</button>
    <button onClick={() =>{
      setCount(count - 1)
    }}>-</button>
  </div>
}

function EvenRender () {
  const count = useRecoilValue(countAtom);
  if (count % 2 == 0){
    console.log("re render?")
    return <div> number is even</div>
  }
}

export default App
