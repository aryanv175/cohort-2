import React from "react"
import { useState } from "react"

function App() {
  
  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title="title2"></Header>
    </>
  )
}

function HeaderWithButton (){
  const [title, setTitle] = useState("title1")

  function updateTitle (){
    setTitle(Math.random());
  }

  return (
    <>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
    </>
  )

}

function Header({title}){
  return <div>
    My name is {title}
  </div>
}

export default App
