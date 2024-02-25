// pushing down state as much as possible

/*

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


*/

// using react.memo
// What is react memo? Memo lets you skip re-rendering 
// of a component if its props are unchanged
import React from "react"
import { useState } from "react"

function App() {
  const [title, setTitle] = useState("title1")

  function updateTitle (){
    setTitle(Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="title2"></Header>
      <Header title="title3"></Header>
      <Header title="title4"></Header>
      <Header title="title5"></Header>
    </div>
  )
}

const Header = React.memo(function Header({title}){
  return <div>
    My name is {title}
  </div>
})

export default App
