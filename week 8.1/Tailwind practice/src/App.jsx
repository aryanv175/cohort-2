import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='flex'>
        <div className='bg-red-500'>hey</div>
        <div className='bg-green-500'>whats</div>
        <div className='bg-blue-500'>up</div>
      </div>
      <br></br>
      <div className='grid grid-cols-5'>
        <div className='bg-red-500 col-span-2'>hey</div>
        <div className='bg-green-500 col-span-2'>whats</div>
        <div className='bg-blue-500'>up</div>
      </div>
      <br></br>
      <div className='md:grid grid-cols-3'>
        <div className='bg-red-500'>hey</div>
        <div className='bg-green-500'>whats</div>
        <div className='bg-blue-500'>up</div>
      </div>

    </div>
  )
}

export default App
