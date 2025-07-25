import { useState } from 'react'
import './App.css'
import LightDarkMode from './components/index.jsx'
function App() {
 

  return (
    <div className="App">
      <h1>Light/Dark Theme Toggle</h1>
      <p>Click the button below to toggle between light and dark themes.</p>
    <LightDarkMode />
    </div>
  )
}

export default App
