import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import './App.css'

function App() {

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

  const navigate = useNavigate();

  return (  
  <div>
    <button onClick={() => {
      navigate('/')
    }}>Home Page
    </button>
    <button onClick={() => {
      navigate('/dashboard')
    }}>Dashboard Page</button>
  </div>
  )
}

export default App
