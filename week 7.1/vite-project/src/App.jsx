import React, { useState, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Home = React.lazy(() => import('./pages/Home'))

function App() {

  return (
    <BrowserRouter>
      <Header>
      </Header>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path="/" element={<Suspense fallback={"loading..."}><Home/></Suspense>}/>
        </Routes>
    </BrowserRouter>
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
