import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

return (
    // 1. This wrapper sets the background and the critical minimum height.
    // min-h-screen forces it to fill the entire screen vertically.
    <div className="min-h-screen bg-gray-50 font-inter"> 
        
        {/* Replace this comment with your actual Navigation Bar and Header components */}
        
        {/* 2. This wrapper handles horizontal centering and adds bottom space. */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"> 
            
            {/* Replace this comment with your content logic (Dashboard, Admin, Profile views) */}
            
        </div>
    </div>
);

export default App
