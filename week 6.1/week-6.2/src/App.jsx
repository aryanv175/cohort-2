function App() {
  
  return (
    <div>
      <Header title="title1"></Header>
      <Header title="title2"></Header>
    </div>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
