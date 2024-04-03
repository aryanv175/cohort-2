import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header>
      </Header>
      <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

function Header () {
  return (  
  <div>
    <button onClick={() => {
      window.location.href = '/'
    }}>Home Page
    </button>
    <button onClick={() => {
      window.location.href = '/dashboard'
    }}>Dashboard Page</button>
  </div>
  )
}

export default App
